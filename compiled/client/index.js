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

_reactDom2.default.render(_react2.default.createElement(Hello, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9pbmRleC5qc3giXSwibmFtZXMiOlsiSGVsbG8iLCJDb21wb25lbnQiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7O0FBV0E7Ozs7QUFDQTs7Ozs7Ozs7OzsrZUFaQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0lBT01BLEs7Ozs7Ozs7Ozs7OzZCQUNLO0FBQ1AsYUFBTztBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVA7QUFDRDs7OztFQUhpQixnQkFBTUMsUzs7QUFNMUIsbUJBQVNDLE1BQVQsQ0FBZ0IsOEJBQUMsS0FBRCxPQUFoQixFQUEwQkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBBcHAgZnJvbSAnLi9jbGllbnQvY29tcG9uZW50cy9BcHAuanMnO1xuXG4vLyBSZWFjdERPTS5yZW5kZXIoXG4vLyAgIDxoMT5IZWxsbywgd29ybGQhPC9oMT4sXG4vLyAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuLy8gKTtcblxuLy8gUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cblxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNsYXNzIEhlbGxvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8aDE+SGVsbG88L2gxPlxuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcig8SGVsbG8vPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiJdfQ==