'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var provider = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
   // running on browser and metamask has injected web3 on page
   provider = window.web3.currentProvider;
   // a partir de 02/11/2018, MetaMask requer que o 'enable'.
   // veja: https://bit.ly/2QQHXvF
   provider.enable();
} else {
   // running on server OR without MetaMask
   provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/940851b26c0744ca8ba7b8d023783208');
}

var web3 = new _web2.default(provider);

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsInByb3ZpZGVyIiwid2luZG93Iiwid2ViMyIsImN1cnJlbnRQcm92aWRlciIsImVuYWJsZSIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFFQSxJQUFJLGdCQUFKOztBQUVBLElBQUksT0FBTyxBQUFQLFdBQWtCLEFBQWxCLGVBQWlDLE9BQU8sT0FBTyxBQUFkLFNBQXVCLEFBQTVELGFBQXlFLEFBQ3RFO0FBQ0E7Y0FBVyxPQUFPLEFBQVAsS0FBWSxBQUF2QixBQUNBO0FBQ0E7QUFDQTtZQUFTLEFBQVQsQUFDRjtBQU5ELE9BTU8sQUFDSjtBQUNBO2NBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUNSLEFBRFEsQUFBWCxBQUdGOzs7QUFFRCxJQUFNLE9BQU8sQUFBSSxBQUFKLGtCQUFTLEFBQVQsQUFBYixBQUVBOztrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZnNhbnRpL3ZzY29kZS13b3Jrc3BhY2UvbWFkLWFuZ2VsIn0=