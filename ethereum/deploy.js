// allow access to unlock account on some network
// npm install --save truffle-hdwallet-provider@1.0.2
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

// pass account mnemonic and infura api link for contract deploy
const provider = new HDWalletProvider(
    'enroll mask mosquito aunt quality liberty fabric february slogan video juice stage',
    'https://rinkeby.infura.io/v3/940851b26c0744ca8ba7b8d023783208'
);
// it exists alternatives to Infura.io (like setting up a local node),
// but it is much less straighforward

// connection to Rinkeby network
const web3 = new Web3(provider);

const compiledCampaignFactory = require('./build/CampaignFactory.json');
const interface = compiledCampaignFactory.interface;
const bytecode = compiledCampaignFactory.bytecode;

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attemping to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: '0x' + bytecode })
        .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to ', result.options.address);
};

deploy();
