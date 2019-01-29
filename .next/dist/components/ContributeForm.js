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

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/fsanti/vscode-workspace/mad-angel/components/ContributeForm.js';


var ContributeForm = function (_Component) {
   (0, _inherits3.default)(ContributeForm, _Component);

   function ContributeForm() {
      var _ref,
          _this2 = this;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, ContributeForm);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
         args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
         value: '',
         error: '',
         loading: false
      }, _this.onSubmit = function () {
         var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
            var campaign, accounts;
            return _regenerator2.default.wrap(function _callee$(_context) {
               while (1) {
                  switch (_context.prev = _context.next) {
                     case 0:
                        e.preventDefault();

                        _this.setState({ loading: true, error: '' });
                        _context.prev = 2;
                        campaign = (0, _campaign2.default)(_this.props.address);
                        _context.next = 6;
                        return _web2.default.eth.getAccounts();

                     case 6:
                        accounts = _context.sent;
                        _context.next = 9;
                        return campaign.methods.contribute().send({
                           from: accounts[0],
                           value: _web2.default.utils.toWei(_this.state.value, 'ether')
                        });

                     case 9:

                        // força a atualização da página (e portanto do sumário)
                        _routes.Router.replaceRoute('/campaigns/' + _this.props.address);

                        _context.next = 15;
                        break;

                     case 12:
                        _context.prev = 12;
                        _context.t0 = _context['catch'](2);

                        _this.setState({ error: _context.t0.message });

                     case 15:
                        _this.setState({ loading: false });

                     case 16:
                     case 'end':
                        return _context.stop();
                  }
               }
            }, _callee, _this2, [[2, 12]]);
         }));

         return function (_x) {
            return _ref2.apply(this, arguments);
         };
      }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
   }

   (0, _createClass3.default)(ContributeForm, [{
      key: 'render',
      value: function render() {
         var _this3 = this;

         return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.error, __source: {
               fileName: _jsxFileName,
               lineNumber: 37
            }
         }, _react2.default.createElement(_semanticUiReact.Form.Field, {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 38
            }
         }, _react2.default.createElement('label', {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 39
            }
         }, 'Amount to contribute'), _react2.default.createElement(_semanticUiReact.Input, {
            label: 'ether',
            labelPosition: 'right',
            value: this.state.value,
            onChange: function onChange(e) {
               return _this3.setState({ value: e.target.value });
            },
            __source: {
               fileName: _jsxFileName,
               lineNumber: 40
            }
         })), _react2.default.createElement(_semanticUiReact.Message, { error: true,
            header: 'Shit happens!',
            content: this.state.error,
            __source: {
               fileName: _jsxFileName,
               lineNumber: 47
            }
         }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
               fileName: _jsxFileName,
               lineNumber: 51
            }
         }, 'Contribute!'));
      }
   }]);

   return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQnV0dG9uIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiUm91dGVyIiwiQ29udHJpYnV0ZUZvcm0iLCJzdGF0ZSIsInZhbHVlIiwiZXJyb3IiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjb250cmlidXRlIiwic2VuZCIsImZyb20iLCJ1dGlscyIsInRvV2VpIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTyxBQUFTOztBQUMvQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYzs7Ozs7OztJLEFBRWpCOzs7Ozs7Ozs7Ozs7Ozs7OE4sQUFDSDtnQkFBUSxBQUNFLEFBQ1A7Z0JBRkssQUFFRSxBQUNQO2tCLEFBSEssQUFHSTtBQUhKLEFBQ0wsZSxBQUtIOzhGQUFXLGlCQUFBLEFBQU8sR0FBUDswQkFBQTswRUFBQTt5QkFBQTttREFBQTswQkFDUjswQkFBQSxBQUFFLEFBRUY7OzhCQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxNQUFNLE9BSHZCLEFBR1IsQUFBYyxBQUF3Qjt3Q0FFN0I7QUFMRCxtQ0FLWSx3QkFBUyxNQUFBLEFBQUssTUFMMUIsQUFLWSxBQUFvQjt3Q0FMaEM7K0JBTWtCLGNBQUEsQUFBSyxJQU52QixBQU1rQixBQUFTOzswQkFBMUI7QUFORCw0Q0FBQTt3Q0FBQTt3Q0FPQyxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQUFBOEI7aUNBQzNCLFNBRGdDLEFBQ2hDLEFBQVMsQUFDZjtrQ0FBTyxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQU0sTUFBQSxBQUFLLE1BQXRCLEFBQTRCLE9BVGpDLEFBT0MsQUFBbUMsQUFFL0IsQUFBbUM7QUFGSixBQUN0Qyx5QkFERzs7MEJBS047O0FBQ0E7dUNBQUEsQUFBTyw2QkFBMkIsTUFBQSxBQUFLLE1BYmxDLEFBYUwsQUFBNkM7O3dDQWJ4QztBQUFBOzswQkFBQTt3Q0FBQTt3REFnQkw7OzhCQUFBLEFBQUssU0FBUyxFQUFFLE9BQU8sWUFoQmxCLEFBZ0JMLEFBQWMsQUFBYTs7MEJBRTlCOzhCQUFBLEFBQUssU0FBUyxFQUFFLFNBbEJSLEFBa0JSLEFBQWMsQUFBVzs7MEJBbEJqQjswQkFBQTt3Q0FBQTs7QUFBQTtxQ0FBQTtBOzs7Ozs7Ozs7OytCQXFCRjtzQkFDTjs7Z0NBQ0csQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EO3lCQUFuRDsyQkFBQSxBQUNHO0FBREg7VUFBQSxrQkFDSSxjQUFELHNCQUFBLEFBQU07O3lCQUFOOzJCQUFBLEFBQ0c7QUFESDtBQUFBLDRCQUNHLGNBQUE7O3lCQUFBOzJCQUFBO0FBQUE7QUFBQSxZQURILEFBQ0csQUFDQSx5Q0FBQSxBQUFDO21CQUFELEFBQ1MsQUFDTjsyQkFGSCxBQUVpQixBQUNkO21CQUFPLEtBQUEsQUFBSyxNQUhmLEFBR3FCLEFBQ2xCO3NCQUFVLHFCQUFBO3NCQUFLLE9BQUEsQUFBSyxTQUFTLEVBQUUsT0FBTyxFQUFBLEFBQUUsT0FBOUIsQUFBSyxBQUFjLEFBQWtCO0FBSmxEOzt5QkFBQTsyQkFITixBQUNHLEFBRUcsQUFPSDtBQVBHO0FBQ0csOEJBTU4sQUFBQywwQ0FBUSxPQUFULEFBQ007b0JBRE4sQUFDYSxBQUNQO3FCQUFTLEtBQUEsQUFBSyxNQUZwQixBQUUwQjs7eUJBRjFCOzJCQVZILEFBVUcsQUFJQTtBQUpBOzZCQUlBLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQzt5QkFBcEM7MkJBQUE7QUFBQTtZQWZOLEFBQ0csQUFjRyxBQUtSOzs7OztBLEFBakR5QixBQW9EN0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQ29udHJpYnV0ZUZvcm0uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZnNhbnRpL3ZzY29kZS13b3Jrc3BhY2UvbWFkLWFuZ2VsIn0=