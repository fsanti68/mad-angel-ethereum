import Web3 from 'web3';

let provider;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
   // running on browser and metamask has injected web3 on page
   provider = window.web3.currentProvider;
   // a partir de 02/11/2018, MetaMask requer que o 'enable'.
   // veja: https://bit.ly/2QQHXvF
   provider.enable();
} else {
   // running on server OR without MetaMask
   provider = new Web3.providers.HttpProvider(
      'https://rinkeby.infura.io/v3/940851b26c0744ca8ba7b8d023783208'
   );
}

const web3 = new Web3(provider);

export default web3;