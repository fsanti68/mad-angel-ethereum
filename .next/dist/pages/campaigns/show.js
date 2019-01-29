'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/fsanti/vscode-workspace/mad-angel/pages/campaigns/show.js?entry';


var CampaignShow = function (_Component) {
   (0, _inherits3.default)(CampaignShow, _Component);

   function CampaignShow() {
      (0, _classCallCheck3.default)(this, CampaignShow);

      return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
   }

   (0, _createClass3.default)(CampaignShow, [{
      key: 'renderSummary',
      value: function renderSummary() {
         var _props = this.props,
             minContrib = _props.minContrib,
             balance = _props.balance,
             requests = _props.requests,
             approvers = _props.approvers,
             manager = _props.manager;

         var items = [{
            header: manager,
            meta: 'Address of Manager',
            description: 'The manager created this campaign and can create requests to withdraw money',
            style: { overflowWrap: 'break-word' }
         }, {
            header: minContrib,
            meta: 'Minimum contribution (wei)',
            description: 'You must contribute at least this much wei to become an approver'
         }, {
            header: _web2.default.utils.fromWei(balance, 'ether'),
            meta: 'Balance of campaign (ether)',
            description: 'Amount of money the campaign has available'
         }, {
            header: requests,
            meta: 'Count of Requests',
            description: 'Count of expenses requests created by the manager'
         }, {
            header: approvers,
            meta: 'Count of contributors',
            description: 'Contributors collaborates with the campaign and can approve requests'
         }];
         return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
               fileName: _jsxFileName,
               lineNumber: 60
            }
         });
      }
   }, {
      key: 'render',
      value: function render() {
         return _react2.default.createElement(_Layout2.default, {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 65
            }
         }, _react2.default.createElement('h3', {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 66
            }
         }, 'Campaign Show'), _react2.default.createElement(_semanticUiReact.Grid, { columns: '2', __source: {
               fileName: _jsxFileName,
               lineNumber: 67
            }
         }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 68
            }
         }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
               fileName: _jsxFileName,
               lineNumber: 69
            }
         }, this.renderSummary()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
               fileName: _jsxFileName,
               lineNumber: 72
            }
         }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
               fileName: _jsxFileName,
               lineNumber: 73
            }
         }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 76
            }
         }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 77
            }
         }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
               fileName: _jsxFileName,
               lineNumber: 78
            }
         }, _react2.default.createElement('a', {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 79
            }
         }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
               fileName: _jsxFileName,
               lineNumber: 80
            }
         }, 'View Requests')))))));
      }
   }], [{
      key: 'getInitialProps',
      value: function () {
         var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
            var campaign, summary;
            return _regenerator2.default.wrap(function _callee$(_context) {
               while (1) {
                  switch (_context.prev = _context.next) {
                     case 0:
                        // parameters comes from routes...
                        campaign = (0, _campaign2.default)(props.query.address);
                        _context.next = 3;
                        return campaign.methods.getSummary().call();

                     case 3:
                        summary = _context.sent;
                        return _context.abrupt('return', {
                           address: props.query.address,
                           minContrib: summary[0],
                           balance: summary[1],
                           requests: summary[2],
                           approvers: summary[3],
                           manager: summary[4]
                        });

                     case 5:
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

   return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYXQiLCJDb21wb25lbnQiLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIkxheW91dCIsIkNvbnRyaWJ1dGVGb3JtIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwibWluQ29udHJpYiIsImJhbGFuY2UiLCJyZXF1ZXN0cyIsImFwcHJvdmVycyIsIm1hbmFnZXIiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwicmVuZGVyU3VtbWFyeSIsImFkZHJlc3MiLCJjYW1wYWlnbiIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVMsQUFBTSxBQUFNOztBQUNyQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBWTs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7O3NDQWVhO3NCQU9ULEtBUFMsQUFPSjthQVBJLEFBRVYsb0JBRlUsQUFFVjthQUZVLEFBR1YsaUJBSFUsQUFHVjthQUhVLEFBSVYsa0JBSlUsQUFJVjthQUpVLEFBS1YsbUJBTFUsQUFLVjthQUxVLEFBTVYsaUJBTlUsQUFNVixBQUVIOzthQUFNO29CQUNILEFBQ1csQUFDUjtrQkFGSCxBQUVTLEFBQ047eUJBSEgsQUFHZ0IsQUFDYjttQkFBTyxFQUFFLGNBTEQsQUFDWCxBQUlVLEFBQWdCO0FBSjFCLEFBQ0csVUFGUTtvQkFPWCxBQUNXLEFBQ1I7a0JBRkgsQUFFUyxBQUNOO3lCQVZRLEFBT1gsQUFHZ0I7QUFIaEIsQUFDRztvQkFLUSxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsU0FEOUIsQUFDVyxBQUE0QixBQUNwQztrQkFGSCxBQUVTLEFBQ047eUJBZlEsQUFZWCxBQUdnQjtBQUhoQixBQUNHO29CQUlILEFBQ1csQUFDUjtrQkFGSCxBQUVTLEFBQ047eUJBcEJRLEFBaUJYLEFBR2dCO0FBSGhCLEFBQ0c7b0JBSUgsQUFDVyxBQUNSO2tCQUZILEFBRVMsQUFDTjt5QkF6Qk4sQUFBYyxBQXNCWCxBQUdnQixBQUduQjtBQU5HLEFBQ0c7OENBS0MsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjt5QkFBbkI7MkJBQVAsQUFBTyxBQUNUO0FBRFM7VUFBQTs7OzsrQkFHRCxBQUNOO2dDQUNHLEFBQUM7O3lCQUFEOzJCQUFBLEFBQ0c7QUFESDtBQUFBLFVBQUEsa0JBQ0csY0FBQTs7eUJBQUE7MkJBQUE7QUFBQTtBQUFBLFlBREgsQUFDRyxBQUNBLGtDQUFBLEFBQUMsdUNBQUssU0FBTixBQUFjO3lCQUFkOzJCQUFBLEFBQ0c7QUFESDs0QkFDSSxjQUFELHNCQUFBLEFBQU07O3lCQUFOOzJCQUFBLEFBQ0c7QUFESDtBQUFBLDRCQUNJLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7eUJBQXBCOzJCQUFBLEFBQ0k7QUFESjtpQkFESCxBQUNHLEFBQ0ksQUFBSyxBQUVULGtDQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7eUJBQXBCOzJCQUFBLEFBQ0c7QUFESDs0QkFDRyxBQUFDLDBDQUFlLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DO3lCQUFwQzsyQkFOVCxBQUNHLEFBSUcsQUFDRyxBQUdOO0FBSE07K0JBR0wsY0FBRCxzQkFBQSxBQUFNOzt5QkFBTjsyQkFBQSxBQUNHO0FBREg7QUFBQSw0QkFDSSxjQUFELHNCQUFBLEFBQU07O3lCQUFOOzJCQUFBLEFBQ0c7QUFESDtBQUFBLDRCQUNHLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0Qzt5QkFBQTsyQkFBQSxBQUNHO0FBREg7NEJBQ0csY0FBQTs7eUJBQUE7MkJBQUEsQUFDRztBQURIO0FBQUEsNEJBQ0csQUFBQyx5Q0FBTyxTQUFSO3lCQUFBOzJCQUFBO0FBQUE7WUFoQnJCLEFBQ0csQUFFRyxBQVNHLEFBQ0csQUFDRyxBQUNHLEFBQ0csQUFRdkI7Ozs7OzhHLEFBOUU0Qjs7Ozs7MEJBQzFCO0FBQ007QSxtQ0FBVyx3QkFBUyxNQUFBLEFBQU0sTSxBQUFmLEFBQXFCOzsrQkFDaEIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYSxBQUFqQixBQUE4Qjs7MEJBQTlDO0E7O29DQUVNLE1BQUEsQUFBTSxNQURYLEFBQ2lCLEFBQ3JCO3VDQUFZLFFBRlIsQUFFUSxBQUFRLEFBQ3BCO29DQUFTLFFBSEwsQUFHSyxBQUFRLEFBQ2pCO3FDQUFVLFFBSk4sQUFJTSxBQUFRLEFBQ2xCO3NDQUFXLFFBTFAsQUFLTyxBQUFRLEFBQ25CO29DQUFTLFEsQUFOTCxBQU1LLEFBQVE7QUFOYixBQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEVULEEsQUFsRjJCOztrQkFrRjNCLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9mc2FudGkvdnNjb2RlLXdvcmtzcGFjZS9tYWQtYW5nZWwifQ==