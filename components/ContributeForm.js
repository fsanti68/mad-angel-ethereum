import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class ContributeForm extends Component {
   state = {
      value: '',
      error: '',
      loading: false
   };

   onSubmit = async (e) => {
      e.preventDefault();

      this.setState({ loading: true, error: '' });
      try {
         const campaign = Campaign(this.props.address);
         const accounts = await web3.eth.getAccounts();
         await campaign.methods.contribute().send({
            from: accounts[0],
            value: web3.utils.toWei(this.state.value, 'ether')
         });

         // força a atualização da página (e portanto do sumário)
         Router.replaceRoute(`/campaigns/${this.props.address}`);

      } catch (err) {
         this.setState({ error: err.message });
      }
      this.setState({ loading: false });
   }

   render() {
      return (
         <Form onSubmit={this.onSubmit} error={!!this.state.error}>
            <Form.Field>
               <label>Amount to contribute</label>
               <Input
                  label='ether'
                  labelPosition='right'
                  value={this.state.value}
                  onChange={e => this.setState({ value: e.target.value })}
               />
            </Form.Field>
            <Message error
                  header='Shit happens!'
                  content={this.state.error}
               />
            <Button primary loading={this.state.loading}>
               Contribute!
            </Button>
         </Form>
      );
   }
}

export default ContributeForm;