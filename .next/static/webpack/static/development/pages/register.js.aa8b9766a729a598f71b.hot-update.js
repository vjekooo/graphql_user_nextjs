webpackHotUpdate("static/development/pages/register.js",{

/***/ "./generated/apolloComponents.tsx":
/*!****************************************!*\
  !*** ./generated/apolloComponents.tsx ***!
  \****************************************/
/*! exports provided: LoginDocument, LoginComponent, LoginHOC, RegisterDocument, RegisterComponent, RegisterHOC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDocument", function() { return LoginDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginHOC", function() { return LoginHOC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterDocument", function() { return RegisterDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterHOC", function() { return RegisterHOC; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/vjeko/Documents/dev/graphql_user_nextjs/generated/apolloComponents.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation Register($data: RegisterInput!) {\n    register(data: $data) {\n      id\n      firstName\n      lastName\n      email\n      name\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation Login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      id\n      firstName\n      lastName\n      email\n      name\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/** The `Upload` scalar type represents a file upload. */
// ====================================================
// Documents
// ====================================================


 // ====================================================
// Components
// ====================================================

var LoginDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var LoginComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LoginComponent, _React$Component);

  function LoginComponent() {
    _classCallCheck(this, LoginComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoginComponent).apply(this, arguments));
  }

  _createClass(LoginComponent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_0__["Mutation"], _extends({
        mutation: LoginDocument
      }, this["props"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }));
    }
  }]);

  return LoginComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
function LoginHOC(operationOptions) {
  return react_apollo__WEBPACK_IMPORTED_MODULE_0__["graphql"](LoginDocument, operationOptions);
}
var RegisterDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject2());
var RegisterComponent =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(RegisterComponent, _React$Component2);

  function RegisterComponent() {
    _classCallCheck(this, RegisterComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(RegisterComponent).apply(this, arguments));
  }

  _createClass(RegisterComponent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_0__["Mutation"], _extends({
        mutation: RegisterDocument
      }, this["props"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }));
    }
  }]);

  return RegisterComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
function RegisterHOC(operationOptions) {
  return react_apollo__WEBPACK_IMPORTED_MODULE_0__["graphql"](RegisterDocument, operationOptions);
}

/***/ }),

/***/ "./pages/register.tsx":
/*!****************************!*\
  !*** ./pages/register.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_fields_InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/fields/InputField */ "./components/fields/InputField.tsx");
/* harmony import */ var _generated_apolloComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../generated/apolloComponents */ "./generated/apolloComponents.tsx");
var _jsxFileName = "/Users/vjeko/Documents/dev/graphql_user_nextjs/pages/register.tsx";







var RegisterPage = function RegisterPage() {
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Register page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Register \uD83D\uDC4B"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "About"))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_generated_apolloComponents__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, function () {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
      onSubmit: function onSubmit(values) {
        console.log(values);
      },
      initialValues: {
        email: '',
        firstName: '',
        lastName: '',
        password: ''
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, function (_ref) {
      var values = _ref.values,
          handleSubmit = _ref.handleSubmit;
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("form", {
        onSubmit: handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
        name: "firstName",
        placeholder: "first name",
        component: _components_fields_InputField__WEBPACK_IMPORTED_MODULE_4__["InputField"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
        name: "lastName",
        placeholder: "last name",
        component: _components_fields_InputField__WEBPACK_IMPORTED_MODULE_4__["InputField"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
        name: "email",
        placeholder: "email",
        component: _components_fields_InputField__WEBPACK_IMPORTED_MODULE_4__["InputField"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
        name: "password",
        placeholder: "password",
        type: "password",
        component: _components_fields_InputField__WEBPACK_IMPORTED_MODULE_4__["InputField"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Register"));
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RegisterPage);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/register")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=register.js.aa8b9766a729a598f71b.hot-update.js.map