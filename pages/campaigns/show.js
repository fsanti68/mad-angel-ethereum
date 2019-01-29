import Reat, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import ContributeForm from '../../components/ContributeForm';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import { Link } from '../../routes';

class CampaignShow extends Component {
   static async getInitialProps(props) {
      // parameters comes from routes...
      const campaign = Campaign(props.query.address);
      const summary = await campaign.methods.getSummary().call();
      return {
         address: props.query.address,
         minContrib: summary[0],
         balance: summary[1],
         requests: summary[2],
         approvers: summary[3],
         manager: summary[4]
      };
   }

   renderSummary() {
      const {
         minContrib,
         balance,
         requests,
         approvers,
         manager
      } = this.props;
      const items = [
         {
            header: manager,
            meta: 'Address of Manager',
            description: 'The manager created this campaign and can create requests to withdraw money',
            style: { overflowWrap: 'break-word' }
         },
         {
            header: minContrib,
            meta: 'Minimum contribution (wei)',
            description: 'You must contribute at least this much wei to become an approver'
         },
         {
            header: web3.utils.fromWei(balance, 'ether'),
            meta: 'Balance of campaign (ether)',
            description: 'Amount of money the campaign has available'
         },
         {
            header: requests,
            meta: 'Count of Requests',
            description: 'Count of expenses requests created by the manager'
         },
         {
            header: approvers,
            meta: 'Count of contributors',
            description: 'Contributors collaborates with the campaign and can approve requests'
         }
      ];
      return <Card.Group items={items} />;
   }

   render() {
      return (
         <Layout>
            <h3>Campaign Show</h3>
            <Grid columns='2'>
               <Grid.Row>
                  <Grid.Column width={10}>
                     {this.renderSummary()}
                  </Grid.Column>
                  <Grid.Column width={6}>
                     <ContributeForm address={this.props.address} />
                  </Grid.Column>
               </Grid.Row>
               <Grid.Row>
                  <Grid.Column>
                     <Link route={`/campaigns/${this.props.address}/requests`}>
                        <a>
                           <Button primary>View Requests</Button>
                        </a>
                     </Link>
                  </Grid.Column>
               </Grid.Row>
            </Grid>
         </Layout>
      )
   }
}

export default CampaignShow