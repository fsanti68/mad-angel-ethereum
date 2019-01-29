'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = require('../../../components/RequestRow');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/fsanti/vscode-workspace/mad-angel/pages/campaigns/requests/index.js?entry';


var RequestIndex = function (_Component) {
   (0, _inherits3.default)(RequestIndex, _Component);

   function RequestIndex() {
      (0, _classCallCheck3.default)(this, RequestIndex);

      return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
   }

   (0, _createClass3.default)(RequestIndex, [{
      key: 'renderRows',
      value: function renderRows() {
         var _this2 = this;

         return this.props.requests.map(function (request, index) {
            return _react2.default.createElement(_RequestRow2.default, {
               key: index,
               id: index,
               request: request,
               approversCount: _this2.props.approversCount,
               address: _this2.props.address,
               __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29
               }
            });
         });
      }
   }, {
      key: 'render',
      value: function render() {
         var Header = _semanticUiReact.Table.Header,
             Row = _semanticUiReact.Table.Row,
             HeaderCell = _semanticUiReact.Table.HeaderCell,
             Body = _semanticUiReact.Table.Body;

         return _react2.default.createElement(_Layout2.default, {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 44
            }
         }, _react2.default.createElement('h3', {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 45
            }
         }, 'Pending Requests'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
               fileName: _jsxFileName,
               lineNumber: 46
            }
         }, _react2.default.createElement('a', {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 47
            }
         }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: 10 }, __source: {
               fileName: _jsxFileName,
               lineNumber: 48
            }
         }, 'Add Request'))), _react2.default.createElement(_semanticUiReact.Table, {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 52
            }
         }, _react2.default.createElement(Header, {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 53
            }
         }, _react2.default.createElement(Row, {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 54
            }
         }, _react2.default.createElement(HeaderCell, {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 55
            }
         }, 'ID'), _react2.default.createElement(HeaderCell, {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 56
            }
         }, 'Description'), _react2.default.createElement(HeaderCell, {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 57
            }
         }, 'Amount'), _react2.default.createElement(HeaderCell, {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 58
            }
         }, 'Recipient'), _react2.default.createElement(HeaderCell, {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 59
            }
         }, 'Approval Count'), _react2.default.createElement(HeaderCell, {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 60
            }
         }, 'Approve'), _react2.default.createElement(HeaderCell, {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 61
            }
         }, 'Finalize'))), _react2.default.createElement(Body, {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 64
            }
         }, this.renderRows())), _react2.default.createElement('div', {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 68
            }
         }, 'Found ', this.props.requestCount, ' requests.'));
      }
   }], [{
      key: 'getInitialProps',
      value: function () {
         var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
            var address, campaign, requestCount, approversCount, requests;
            return _regenerator2.default.wrap(function _callee$(_context) {
               while (1) {
                  switch (_context.prev = _context.next) {
                     case 0:
                        address = props.query.address;
                        campaign = (0, _campaign2.default)(address);
                        _context.next = 4;
                        return campaign.methods.getRequestsCount().call();

                     case 4:
                        requestCount = _context.sent;
                        _context.next = 7;
                        return campaign.methods.approversCount().call();

                     case 7:
                        approversCount = _context.sent;
                        _context.next = 10;
                        return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                           return campaign.methods.requests(index).call();
                        }));

                     case 10:
                        requests = _context.sent;
                        return _context.abrupt('return', { address: address, requests: requests, requestCount: requestCount, approversCount: approversCount });

                     case 12:
                     case 'end':
                        return _context.stop();
                  }
               }
            }, _callee, this);
         }));

         function getInitialProps(_x) {
            return _ref.apply(this, arguments);
         }

         return getInitialProps;
      }()
   }]);

   return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIlRhYmxlIiwiTGluayIsIkxheW91dCIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIndlYjMiLCJSZXF1ZXN0SW5kZXgiLCJwcm9wcyIsInJlcXVlc3RzIiwibWFwIiwicmVxdWVzdCIsImluZGV4IiwiYXBwcm92ZXJzQ291bnQiLCJhZGRyZXNzIiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJtYXJnaW5Cb3R0b20iLCJyZW5kZXJSb3dzIiwicmVxdWVzdENvdW50IiwicXVlcnkiLCJjYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0c0NvdW50IiwiY2FsbCIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFROztBQUNqQixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQVU7Ozs7Ozs7OztJLEFBRVg7Ozs7Ozs7Ozs7O21DQWlCVTtzQkFDVjs7cUJBQU8sQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUNoRDttQ0FDRyxBQUFDO29CQUFELEFBQ1EsQUFDTDttQkFGSCxBQUVPLEFBQ0o7d0JBSEgsQUFHWSxBQUNUOytCQUFnQixPQUFBLEFBQUssTUFKeEIsQUFJOEIsQUFDM0I7d0JBQVMsT0FBQSxBQUFLLE1BTGpCLEFBS3VCOzs0QkFMdkI7OEJBREgsQUFDRyxBQVFMO0FBUks7QUFDRyxhQURIO0FBRk4sQUFBTyxBQVdULFVBWFM7Ozs7K0JBYUQ7YUFBQSxBQUNFLFNBREYsQUFDb0MsdUJBRHBDLEFBQ0U7YUFERixBQUNVLE1BRFYsQUFDb0MsdUJBRHBDLEFBQ1U7YUFEVixBQUNlLGFBRGYsQUFDb0MsdUJBRHBDLEFBQ2U7YUFEZixBQUMyQixPQUQzQixBQUNvQyx1QkFEcEMsQUFDMkIsQUFFakM7O2dDQUNHLEFBQUM7O3lCQUFEOzJCQUFBLEFBQ0c7QUFESDtBQUFBLFVBQUEsa0JBQ0csY0FBQTs7eUJBQUE7MkJBQUE7QUFBQTtBQUFBLFlBREgsQUFDRyxBQUNBLHFDQUFBLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0Qzt5QkFBQTsyQkFBQSxBQUNHO0FBREg7NEJBQ0csY0FBQTs7eUJBQUE7MkJBQUEsQUFDRztBQURIO0FBQUEsNEJBQ0csQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFNBQWhCLEFBQXdCLFNBQVEsT0FBTyxFQUFFLGNBQXpDLEFBQXVDLEFBQWdCO3lCQUF2RDsyQkFBQTtBQUFBO1lBSlQsQUFFRyxBQUNHLEFBQ0csQUFJTixrQ0FBQSxBQUFDOzt5QkFBRDsyQkFBQSxBQUNHO0FBREg7QUFBQSw0QkFDSSxjQUFEOzt5QkFBQTsyQkFBQSxBQUNHO0FBREg7QUFBQSw0QkFDSSxjQUFEOzt5QkFBQTsyQkFBQSxBQUNHO0FBREg7QUFBQSw0QkFDSSxjQUFEOzt5QkFBQTsyQkFBQTtBQUFBO0FBQUEsWUFESCxBQUNHLEFBQ0EsdUJBQUMsY0FBRDs7eUJBQUE7MkJBQUE7QUFBQTtBQUFBLFlBRkgsQUFFRyxBQUNBLGdDQUFDLGNBQUQ7O3lCQUFBOzJCQUFBO0FBQUE7QUFBQSxZQUhILEFBR0csQUFDQSwyQkFBQyxjQUFEOzt5QkFBQTsyQkFBQTtBQUFBO0FBQUEsWUFKSCxBQUlHLEFBQ0EsOEJBQUMsY0FBRDs7eUJBQUE7MkJBQUE7QUFBQTtBQUFBLFlBTEgsQUFLRyxBQUNBLG1DQUFDLGNBQUQ7O3lCQUFBOzJCQUFBO0FBQUE7QUFBQSxZQU5ILEFBTUcsQUFDQSw0QkFBQyxjQUFEOzt5QkFBQTsyQkFBQTtBQUFBO0FBQUEsWUFUVCxBQUNHLEFBQ0csQUFPRyxBQUdOLCtCQUFDLGNBQUQ7O3lCQUFBOzJCQUFBLEFBQ0k7QUFESjtBQUFBLGlCQXBCTixBQVFHLEFBWUcsQUFDSSxBQUFLLEFBR1osZ0NBQUEsY0FBQTs7eUJBQUE7MkJBQUE7QUFBQTtBQUFBLFlBQVksZUFBQSxBQUFLLE1BQWpCLEFBQXVCLGNBekI3QixBQUNHLEFBd0JHLEFBR1I7Ozs7OzhHLEFBN0Q0Qjs7Ozs7MEJBQ2xCO0Esa0NBQVksTSxBQUFNLE0sQUFBbEIsQUFDRjtBLG1DQUFXLHdCLEFBQUEsQUFBUzs7K0JBQ0MsU0FBQSxBQUFTLFFBQVQsQUFBaUIsbUIsQUFBakIsQUFBb0M7OzBCQUF6RDtBOzsrQkFDdUIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsaUIsQUFBakIsQUFBa0M7OzBCQUF6RDtBOztpREFDaUIsQUFBUSxVQUN0QixTQUFOLEFBQU0sQUFBUyxlQUFmLEFBQ0ksT0FESixBQUVJLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ3RCO2tDQUFPLFNBQUEsQUFBUyxRQUFULEFBQWlCLFNBQWpCLEFBQTBCLE9BQWpDLEFBQU8sQUFBaUMsQUFDMUM7QSxBQUxnQixBQUNwQix5QkFBQSxDQURvQjs7MEJBQWpCO0E7eURBUUMsRUFBRSxTQUFGLFNBQVcsVUFBWCxVQUFxQixjQUFyQixjQUFtQyxnQixBQUFuQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EYixBLEFBakUyQjs7a0JBaUUzQixBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2ZzYW50aS92c2NvZGUtd29ya3NwYWNlL21hZC1hbmdlbCJ9