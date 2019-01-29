import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
   return (
      <Menu style={{ marginTop: '8px' }}>
         <Link route="/">
            <a className="item">MadAngel</a>
         </Link>
         <Menu.Menu position='right'>
            <Link route="/">
               <a className="item">Campaigns</a>
            </Link>
         </Menu.Menu>
         <Link route="/campaigns/new">
            <a className="item">+</a>
         </Link>
      </Menu>
   );
};