const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

// prepara o ambiente antes de cada teste
beforeEach(async () => {
   // pega no Ganache uma lista fictícia de usuários ethereum
   accounts = await web3.eth.getAccounts();

   // faz o deploy do CampaignFactory, com a conta do primeiro usuário
   // (isso altera a rede, portanto tem custo)
   factory = await new web3.eth.Contract(
         JSON.parse(compiledFactory.interface)
      ).deploy({ data: compiledFactory.bytecode })
      .send({ from: accounts[0], gas: '1000000' });

   // cria uma instância de campanha
   // (isso tb altera a rede, portanto tem custo)
   await factory.methods.createCampaign('100').send({
      from: accounts[0],
      gas: '1000000'
   });

   // obtém o endereço da campanha recém criada (pega a primeira)
   // (somente uma consulta, não altera a rede - portanto call ao invés de send)
   const addresses = await factory.methods.getDeployedCampaigns().call();
   campaignAddress = addresses[0];

   // obtém a referência para o contrato
   campaign = await new web3.eth.Contract(
      JSON.parse(compiledCampaign.interface),
      campaignAddress
   );
});

describe('Campaigns', () => {
   it('deploy a factory and a campaign', () => {
      assert.ok(factory.options.address);
      assert.ok(campaign.options.address);
   });

   it('marks caller as the campaign manager', async () => {
      const manager= await campaign.methods.manager().call();
      assert.equal(accounts[0], manager);
   });

   it('allows people to contribute money and marks them as approvers', async () => {
      await campaign.methods.contribute().send({
         from: accounts[1],
         value: '105',
         gas: '1000000'
      });

      // verifica se o account[1] está no mapping 'approvers'
      const isContributor = await campaign.methods.approvers(accounts[1]).call();
      assert(isContributor);
   });

   it('requires a minimum contribution', async () => {
      try {
         // tenta fazer uma contribuição de 99 wei (o mínimo é de 100 wei)
         await campaign.methods.contribute().send({
            from: accounts[2],
            value: '99',
            gas: '1000000'
         });
         assert(false);

      } catch (err) {
         // o erro era esperado: o valor mínimo não foi respeitado
         assert(err);
      }
   });

   it('allows a manager to make a payment request', async () => {
      const description = 'Buy tires';

      // cria uma nova requisição de despesa
      await campaign.methods
         .createRequest(description, '100', accounts[1])
         .send({
            from: accounts[0],
            gas: '1000000'
         });

      // confere se a requisição foi criada
      const request = await campaign.methods.requests(0).call();
      assert.ok(request);
      assert.equal(request.recipient, accounts[1]);
      assert.equal(request.description, description);
   });

   it('processes requests', async () => {
      const manager = accounts[0];
      const approver = accounts[1];
      const supplier = accounts[2];

      // obtém o saldo na conta do fornecedor (para verifdicar se no final
      // o dinheiro foi creditado)
      let initialBalance = await web3.eth.getBalance(supplier);
      initialBalance = parseFloat( web3.utils.fromWei(initialBalance, 'ether') );

      // 'approver' faz uma contribuição para poder aprovar depois
      await campaign.methods.contribute().send({
         from: approver,
         value: web3.utils.toWei('10', 'ether')
      });

      // 'manager' cria uma requisição de 5 Ether para comprar
      // algo de 'supplier' (e mais tarde paga-lo)
      await campaign.methods
         .createRequest('Any expense', web3.utils.toWei('5', 'ether'), supplier)
         .send({
            from: manager,
            gas: '1000000'
         });
      
      // 'approver' autoriza a despesa
      await campaign.methods.approveRequest(0).send({
         from: approver,
         gas: '1000000'
      });

      // 'manager' encerra a requisição e credita o 'supplier'
      await campaign.methods.finalizeRequest(0).send({
         from: manager,
         gas: '1000000'
      });

      // obtém o novo saldo do supplier
      let balance = await web3.eth.getBalance(supplier);
      balance = parseFloat( web3.utils.fromWei(balance, 'ether') );

      // confirma que o 'supplier' recebeu o crédito devido
      assert(balance > initialBalance);
   });
});
