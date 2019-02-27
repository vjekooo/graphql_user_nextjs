webpackHotUpdate("static/development/pages/register.js",{

/***/ "./pages/register.tsx":
/*!****************************!*\
  !*** ./pages/register.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_fields_InputField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/fields/InputField */ "./components/fields/InputField.tsx");
/* harmony import */ var _generated_apolloComponents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../generated/apolloComponents */ "./generated/apolloComponents.tsx");

var _jsxFileName = "/Users/vjeko/Documents/dev/graphql_user_nextjs/pages/register.tsx";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








var RegisterPage = function RegisterPage() {
  return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Register page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Register \uD83D\uDC4B"), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "About"))), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_generated_apolloComponents__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, function (register) {
    return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
      onSubmit:
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
          var response;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return register({
                    variables: {
                      data: data
                    }
                  });

                case 2:
                  response = _context.sent;
                  console.log(response);

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(),
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
    }, function (_ref2) {
      var values = _ref2.values,
          handleSubmit = _ref2.handleSubmit;
      return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("form", {
        onSubmit: handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "firstName",
        placeholder: "first name",
        component: _components_fields_InputField__WEBPACK_IMPORTED_MODULE_5__["InputField"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "lastName",
        placeholder: "last name",
        component: _components_fields_InputField__WEBPACK_IMPORTED_MODULE_5__["InputField"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "email",
        placeholder: "email",
        component: _components_fields_InputField__WEBPACK_IMPORTED_MODULE_5__["InputField"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "password",
        placeholder: "password",
        type: "password",
        component: _components_fields_InputField__WEBPACK_IMPORTED_MODULE_5__["InputField"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
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
//# sourceMappingURL=register.js.5fcf23cbea0be88b379a.hot-update.js.map