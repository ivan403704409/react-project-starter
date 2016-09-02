webpackJsonp([3],{

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(173);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Hi = function (_Component) {
	  _inherits(Hi, _Component);
	
	  function Hi() {
	    _classCallCheck(this, Hi);
	
	    return _possibleConstructorReturn(this, (Hi.__proto__ || Object.getPrototypeOf(Hi)).apply(this, arguments));
	  }
	
	  _createClass(Hi, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        'mervyn hi',
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: '/hello' },
	          _react2.default.createElement(
	            'div',
	            null,
	            'HELLO'
	          )
	        ),
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: '/' },
	          _react2.default.createElement(
	            'div',
	            null,
	            'App'
	          )
	        )
	      );
	    }
	  }]);
	
	  return Hi;
	}(_react.Component);
	
	exports.default = Hi;
	;

/***/ }

});
//# sourceMappingURL=3.bundle.js.map