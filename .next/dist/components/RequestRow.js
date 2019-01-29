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

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/fsanti/vscode-workspace/mad-angel/components/RequestRow.js';


var RequestRow = function (_Component) {
   (0, _inherits3.default)(RequestRow, _Component);

   function RequestRow() {
      var _ref,
          _this2 = this;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, RequestRow);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
         args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
         var campaign, accounts;
         return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
               switch (_context.prev = _context.next) {
                  case 0:
                     campaign = (0, _campaign2.default)(_this.props.address);
                     _context.next = 3;
                     return _web2.default.eth.getAccounts();

                  case 3:
                     accounts = _context.sent;
                     _context.next = 6;
                     return campaign.methods.approveRequest(_this.props.id).send({
                        from: accounts[0]
                     });

                  case 6:
                  case 'end':
                     return _context.stop();
               }
            }
         }, _callee, _this2);
      })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
         var campaign, accounts;
         return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
               switch (_context2.prev = _context2.next) {
                  case 0:
                     campaign = (0, _campaign2.default)(_this.props.address);
                     _context2.next = 3;
                     return _web2.default.eth.getAccounts();

                  case 3:
                     accounts = _context2.sent;
                     _context2.next = 6;
                     return campaign.methods.finalizeRequest(_this.props.id).send({
                        from: accounts[0]
                     });

                  case 6:
                  case 'end':
                     return _context2.stop();
               }
            }
         }, _callee2, _this2);
      })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
   }

   (0, _createClass3.default)(RequestRow, [{
      key: 'render',
      value: function render() {
         var Row = _semanticUiReact.Table.Row,
             Cell = _semanticUiReact.Table.Cell;
         var _props = this.props,
             id = _props.id,
             request = _props.request,
             approversCount = _props.approversCount;

         var readyToFinalize = request.approvalCount > approversCount / 2;
         return _react2.default.createElement(Row, { disabled: request.complete, positive: readyToFinalize && !request.complete, __source: {
               fileName: _jsxFileName,
               lineNumber: 28
            }
         }, _react2.default.createElement(Cell, {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 29
            }
         }, id), _react2.default.createElement(Cell, {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 30
            }
         }, request.description), _react2.default.createElement(Cell, {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 31
            }
         }, _web2.default.utils.fromWei(request.value, 'ether')), _react2.default.createElement(Cell, {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 32
            }
         }, request.recipient), _react2.default.createElement(Cell, {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 33
            }
         }, request.approvalCount, '/', approversCount), _react2.default.createElement(Cell, {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 34
            }
         }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, __source: {
               fileName: _jsxFileName,
               lineNumber: 36
            }
         }, 'Approve')), _react2.default.createElement(Cell, {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 41
            }
         }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: this.onFinalize, disabled: !readyToFinalize, __source: {
               fileName: _jsxFileName,
               lineNumber: 43
            }
         }, 'Finalize')));
      }
   }]);

   return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwid2ViMyIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIm9uQXBwcm92ZSIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJvbkZpbmFsaXplIiwiZmluYWxpemVSZXF1ZXN0IiwiUm93IiwiQ2VsbCIsInJlcXVlc3QiLCJhcHByb3ZlcnNDb3VudCIsInJlYWR5VG9GaW5hbGl6ZSIsImFwcHJvdmFsQ291bnQiLCJjb21wbGV0ZSIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFPOztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFjOzs7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7Ozs7Ozs7c04sQUFDSCxxRkFBWSxtQkFBQTt1QkFBQTt1RUFBQTtzQkFBQTtnREFBQTt1QkFDSDtBQURHLGdDQUNRLHdCQUFTLE1BQUEsQUFBSyxNQUR0QixBQUNRLEFBQW9CO3FDQUQ1Qjs0QkFFYyxjQUFBLEFBQUssSUFGbkIsQUFFYyxBQUFTOzt1QkFBMUI7QUFGRyx5Q0FBQTtxQ0FBQTtxQ0FHSCxBQUFTLFFBQVQsQUFBaUIsZUFBZSxNQUFBLEFBQUssTUFBckMsQUFBMkMsSUFBM0MsQUFBK0M7OEJBQzVDLFNBSkEsQUFHSCxBQUFvRCxBQUNqRCxBQUFTO0FBRHdDLEFBQ3ZELHNCQURHOzt1QkFIRzt1QkFBQTtxQ0FBQTs7QUFBQTtxQkFBQTtBLGlCLEFBUVosc0ZBQWEsb0JBQUE7dUJBQUE7eUVBQUE7c0JBQUE7a0RBQUE7dUJBQ0o7QUFESSxnQ0FDTyx3QkFBUyxNQUFBLEFBQUssTUFEckIsQUFDTyxBQUFvQjtzQ0FEM0I7NEJBRWEsY0FBQSxBQUFLLElBRmxCLEFBRWEsQUFBUzs7dUJBQTFCO0FBRkksMENBQUE7c0NBQUE7cUNBR0osQUFBUyxRQUFULEFBQWlCLGdCQUFnQixNQUFBLEFBQUssTUFBdEMsQUFBNEMsSUFBNUMsQUFBZ0Q7OEJBQzdDLFNBSkMsQUFHSixBQUFxRCxBQUNsRCxBQUFTO0FBRHlDLEFBQ3hELHNCQURHOzt1QkFISTt1QkFBQTtzQ0FBQTs7QUFBQTtzQkFBQTtBOzs7OzsrQkFRSjthQUFBLEFBQ0UsTUFERixBQUNnQix1QkFEaEIsQUFDRTthQURGLEFBQ08sT0FEUCxBQUNnQix1QkFEaEIsQUFDTztzQkFDMkIsS0FGbEMsQUFFdUM7YUFGdkMsQUFFRSxZQUZGLEFBRUU7YUFGRixBQUVNLGlCQUZOLEFBRU07YUFGTixBQUVlLHdCQUZmLEFBRWUsQUFDckI7O2FBQU0sa0JBQWtCLFFBQUEsQUFBUSxnQkFBZ0IsaUJBQWhELEFBQWlFLEFBQ2pFO2dDQUNJLGNBQUQsT0FBSyxVQUFVLFFBQWYsQUFBdUIsVUFBVSxVQUFVLG1CQUFtQixDQUFDLFFBQS9ELEFBQXVFO3lCQUF2RTsyQkFBQSxBQUNHO0FBREg7VUFBQSxrQkFDSSxjQUFEOzt5QkFBQTsyQkFBQSxBQUFPO0FBQVA7QUFBQSxZQURILEFBQ0csQUFDQSxxQkFBQyxjQUFEOzt5QkFBQTsyQkFBQSxBQUFPO0FBQVA7QUFBQSxvQkFGSCxBQUVHLEFBQWUsQUFDZiw4QkFBQyxjQUFEOzt5QkFBQTsyQkFBQSxBQUFPO0FBQVA7QUFBQSwwQkFBTyxBQUFLLE1BQUwsQUFBVyxRQUFRLFFBQW5CLEFBQTJCLE9BSHJDLEFBR0csQUFBTyxBQUFrQyxBQUN6QywyQkFBQyxjQUFEOzt5QkFBQTsyQkFBQSxBQUFPO0FBQVA7QUFBQSxvQkFKSCxBQUlHLEFBQWUsQUFDZiw0QkFBQyxjQUFEOzt5QkFBQTsyQkFBQSxBQUFPO0FBQVA7QUFBQSxvQkFBQSxBQUFlLGVBQWdCLEtBTGxDLEFBS0csQUFDQSxpQ0FBQyxjQUFEOzt5QkFBQTsyQkFBQSxBQUNJO0FBREo7QUFBQSxvQkFDSSxBQUFRLFdBQVIsQUFBbUIsdUJBQ2pCLEFBQUMseUNBQU8sT0FBUixBQUFjLFNBQVEsT0FBdEIsTUFBNEIsU0FBUyxLQUFyQyxBQUEwQzt5QkFBMUM7MkJBQUE7QUFBQTtVQUFBLEVBUlQsQUFNRyxBQUVNLEFBS04sNkJBQUMsY0FBRDs7eUJBQUE7MkJBQUEsQUFDSTtBQURKO0FBQUEsb0JBQ0ksQUFBUSxXQUFSLEFBQW1CLHVCQUNqQixBQUFDLHlDQUFPLE9BQVIsQUFBYyxRQUFPLE9BQXJCLE1BQTJCLFNBQVMsS0FBcEMsQUFBeUMsWUFBWSxVQUFVLENBQS9ELEFBQWdFO3lCQUFoRTsyQkFBQTtBQUFBO1VBQUEsRUFoQlosQUFDRyxBQWFHLEFBRU0sQUFPZDs7Ozs7QUFHSixBLEFBL0N5Qjs7a0JBK0N6QixBQUFlIiwiZmlsZSI6IlJlcXVlc3RSb3cuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZnNhbnRpL3ZzY29kZS13b3Jrc3BhY2UvbWFkLWFuZ2VsIn0=