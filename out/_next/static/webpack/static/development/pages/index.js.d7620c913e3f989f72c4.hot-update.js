webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/WidgetEmbedCode.js":
/*!***************************************!*\
  !*** ./components/WidgetEmbedCode.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/kbielawski/personal/js/live-chat-next/components/WidgetEmbedCode.js";


var WidgetEmbedCode =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(WidgetEmbedCode, _React$Component);

  function WidgetEmbedCode() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WidgetEmbedCode);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(WidgetEmbedCode).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(WidgetEmbedCode, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate() {
      if (document.getElementById('hs-script-loader')) {
        document.getElementById('hs-script-loader').remove();
      }
    }
  }, {
    key: "injectScript",
    value: function injectScript() {
      var _this$props = this.props,
          _this$props$portalId = _this$props.portalId,
          portalId = _this$props$portalId === void 0 ? 99209436 : _this$props$portalId,
          _this$props$env = _this$props.env,
          env = _this$props$env === void 0 ? 'qa' : _this$props$env;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("script", {
        type: "text/javascript",
        id: "hs-script-loader",
        async: true,
        defer: true,
        src: "//js.hs-scripts".concat(env === 'qa' ? 'qa' : '', ".com/").concat(portalId, ".js"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      });
      var s = document.createElement('script');
      s.type = "text/javascript";
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      });
    }
  }]);

  return WidgetEmbedCode;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (WidgetEmbedCode);

/***/ })

})
//# sourceMappingURL=index.js.d7620c913e3f989f72c4.hot-update.js.map