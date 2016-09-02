webpackJsonp([2],{

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _redux = __webpack_require__(243);
	
	var _reactRedux = __webpack_require__(236);
	
	var _reactRouter = __webpack_require__(173);
	
	var _actions = __webpack_require__(268);
	
	var actions = _interopRequireWildcard(_actions);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Hello = function (_Component) {
	  _inherits(Hello, _Component);
	
	  function Hello() {
	    _classCallCheck(this, Hello);
	
	    return _possibleConstructorReturn(this, (Hello.__proto__ || Object.getPrototypeOf(Hello)).apply(this, arguments));
	  }
	
	  _createClass(Hello, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var text = _props.text;
	      var route = _props.route;
	      var addOne = _props.addOne;
	      var addTwo = _props.addTwo;
	
	      console.log(route);
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'edf' },
	          'mervyn update to 15.3.0 ',
	          text
	        ),
	        _react2.default.createElement(
	          'button',
	          { onClick: function onClick(e) {
	              addOne(1);
	            } },
	          '加1'
	        ),
	        _react2.default.createElement(
	          'button',
	          { onClick: function onClick(e) {
	              addTwo();
	            } },
	          '加2'
	        ),
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: '/hi' },
	          _react2.default.createElement(
	            'div',
	            null,
	            'HI'
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
	
	  return Hello;
	}(_react.Component);
	
	;
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	    text: state.other.text,
	    route: ownProps.location
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  // bind all actions to store
	  return (0, _redux.bindActionCreators)(actions, dispatch);
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Hello);

/***/ },

/***/ 268:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.addOne = addOne;
	exports.addTwo = addTwo;
	function addOne(text) {
	  return { type: 'ADD_ONE', text: text };
	}
	
	function addTwo(text) {
	  return { type: 'ADD_TWO', text: text };
	}

/***/ }

});
//# sourceMappingURL=2.bundle-f3dc9881.js.map