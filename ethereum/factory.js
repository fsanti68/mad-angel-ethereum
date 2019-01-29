import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
   JSON.parse(CampaignFactory.interface),
   '0xBB09A90Ac12bb47FC1c5Edb7835Ac9909457c2C5'
);

export default instance;