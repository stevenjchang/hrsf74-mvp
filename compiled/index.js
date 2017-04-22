'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import App from './client/components/App.js';

// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('app')
// );

// ReactDOM.render(<App />, document.getElementById('app'));


var Hello = function (_React$Component) {
  _inherits(Hello, _React$Component);

  function Hello() {
    _classCallCheck(this, Hello);

    return _possibleConstructorReturn(this, (Hello.__proto__ || Object.getPrototypeOf(Hello)).apply(this, arguments));
  }

  _createClass(Hello, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'h1',
        null,
        'Hello'
      );
    }
  }]);

  return Hello;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(Hello, null), document.getElementById('hello'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJIZWxsbyIsIkNvbXBvbmVudCIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7QUFXQTs7OztBQUNBOzs7Ozs7Ozs7OytlQVpBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7SUFPTUEsSzs7Ozs7Ozs7Ozs7NkJBQ0s7QUFDUCxhQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBUDtBQUNEOzs7O0VBSGlCLGdCQUFNQyxTOztBQU0xQixtQkFBU0MsTUFBVCxDQUFnQiw4QkFBQyxLQUFELE9BQWhCLEVBQTBCQyxTQUFTQyxjQUFULENBQXdCLE9BQXhCLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEFwcCBmcm9tICcuL2NsaWVudC9jb21wb25lbnRzL0FwcC5qcyc7XG5cbi8vIFJlYWN0RE9NLnJlbmRlcihcbi8vICAgPGgxPkhlbGxvLCB3b3JsZCE8L2gxPixcbi8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4vLyApO1xuXG4vLyBSZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblxuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuY2xhc3MgSGVsbG8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxoMT5IZWxsbzwvaDE+XG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxIZWxsby8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVsbG8nKSk7XG4iXX0=