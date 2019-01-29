import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';

import { Router } from '../../routes';

class CampaignNew extends Component {
   state = {
      minContrib: '',
      error: '',
      loading: false
   };

   onSubmit = async (event) => {
      event.preventDefault();

      // ativa o spinning no botão
      this.setState({loading: true, error: ''});

      try {
         // cria a campanha com a primeira conta
         const accounts = await web3.eth.getAccounts();
         await factory.methods
            .createCampaign(this.state.minContrib)
            .send({ from: accounts[0] });
         
         // após a criação, retorna à página inicial
         Router.pushRoute('/');
      } catch (err) {
         this.setState({ error: err.message });
      }

      // desliga o spinning
      this.setState({loading:false});
   }

   render() {
      return (
         <Layout>
            <h3>Create a new Campaign!</h3>
            <Form onSubmit={this.onSubmit} error={!!this.state.error}>
               <Form.Field>
                  <label>Minimum contribution</label>
                  <Input
                     label='wei'
                     labelPosition='right'
                     value={this.state.minContrib}
                     onChange={e => this.setState({
                        minContrib: e.target.value
                     })}
                  />
               </Form.Field>

               <Message error
                  header='Shit happens!'
                  content={this.state.error}
               />

               <Button primary loading={this.state.loading}>Create!</Button>
            </Form>
         </Layout>
      );
   }
}

export default CampaignNew;