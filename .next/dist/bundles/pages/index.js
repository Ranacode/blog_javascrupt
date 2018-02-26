module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/home/Ranacode/Documents/code_playground/blog_javascrupt/components/Layout/Footer.js";


var Footer = function Footer() {
	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		"footer",
		{
			className: "jsx-3852774152",
			__source: {
				fileName: _jsxFileName,
				lineNumber: 2
			}
		},
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
			"div",
			{
				className: "jsx-3852774152" + " " + "copyright",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 3
				}
			},
			"Copyright \xA9 ",
			new Date().getFullYear(),
			__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				"span",
				{
					className: "jsx-3852774152",
					__source: {
						fileName: _jsxFileName,
						lineNumber: 5
					}
				},
				" Javascrupt"
			)
		),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
			"div",
			{
				className: "jsx-3852774152" + " " + "socialIcons",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 7
				}
			},
			__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				"ul",
				{
					className: "jsx-3852774152",
					__source: {
						fileName: _jsxFileName,
						lineNumber: 8
					}
				},
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					"li",
					{
						className: "jsx-3852774152",
						__source: {
							fileName: _jsxFileName,
							lineNumber: 9
						}
					},
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
						className: "jsx-3852774152" + " " + "fab fa-twitter fa-2x",
						__source: {
							fileName: _jsxFileName,
							lineNumber: 10
						}
					})
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					"li",
					{
						className: "jsx-3852774152",
						__source: {
							fileName: _jsxFileName,
							lineNumber: 12
						}
					},
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
						className: "jsx-3852774152" + " " + "fab fa-youtube fa-2x",
						__source: {
							fileName: _jsxFileName,
							lineNumber: 13
						}
					})
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					"li",
					{
						className: "jsx-3852774152",
						__source: {
							fileName: _jsxFileName,
							lineNumber: 15
						}
					},
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
						className: "jsx-3852774152" + " " + "fab fa-facebook fa-2x",
						__source: {
							fileName: _jsxFileName,
							lineNumber: 16
						}
					})
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					"li",
					{
						className: "jsx-3852774152",
						__source: {
							fileName: _jsxFileName,
							lineNumber: 18
						}
					},
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
						className: "jsx-3852774152" + " " + "fab fa-github fa-2x",
						__source: {
							fileName: _jsxFileName,
							lineNumber: 19
						}
					})
				)
			)
		),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
			styleId: "3852774152",
			css: "footer.jsx-3852774152{background:#eee;padding:0.5em;font-family:Lusitana,Georgia,sans-serif;color:black;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;border:1px solid #dbdbdb;height:auto;}footer.jsx-3852774152>.socialIcons.jsx-3852774152>ul.jsx-3852774152{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0.3em;list-style:none;border-top:1px solid black;border-bottom:1px solid black;}.copyright.jsx-3852774152{text-transform:uppercase;}.copyright.jsx-3852774152 span.jsx-3852774152{font-style:italic;margin-left:5px;}ul.jsx-3852774152>li.jsx-3852774152{margin:10px;}svg.fa-twitter.jsx-3852774152{color:#55acee;}svg.fa-github.jsx-3852774152{color:#black;}svg.fa-youtube.jsx-3852774152{color:#ff0000;}svg.fa-facebook.jsx-3852774152{color:#3b5998;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0L0Zvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QkksQUFHc0IsQUFjSCxBQVNZLEFBR1AsQUFLTixBQUlFLEFBSUQsQUFJQyxBQUlBLFlBZmYsQ0FRQSxDQUpBLEFBUUEsQUFJQSxFQS9DZSxFQTBCRSxPQUhqQixLQXRCMkMsSUEwQjNDLG9DQXpCYSxJQVlrQixRQVhuQixXQUNFLDBFQUNnQixzQkFVZCx5REFDRCxjQUNFLGdCQUNXLGNBWlIsYUFhVyw4QkFDL0Isa0RBYmdCLHlEQUNVLHlCQUNiLFlBQ2IiLCJmaWxlIjoiY29tcG9uZW50cy9MYXlvdXQvRm9vdGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL1JhbmFjb2RlL0RvY3VtZW50cy9jb2RlX3BsYXlncm91bmQvYmxvZ19qYXZhc2NydXB0Iiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuXHQ8Zm9vdGVyPlxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29weXJpZ2h0XCI+XG5cdFx0XHRDb3B5cmlnaHQgJmNvcHk7IHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XG5cdFx0XHQ8c3Bhbj4gSmF2YXNjcnVwdDwvc3Bhbj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbEljb25zXCI+XG5cdFx0XHQ8dWw+XG5cdFx0XHRcdDxsaT5cblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYWIgZmEtdHdpdHRlciBmYS0yeFwiIC8+XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHRcdDxsaT5cblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYWIgZmEteW91dHViZSBmYS0yeFwiIC8+XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHRcdDxsaT5cblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2sgZmEtMnhcIiAvPlxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWdpdGh1YiBmYS0yeFwiIC8+XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHQ8L3VsPlxuXHRcdDwvZGl2PlxuXHRcdDxzdHlsZSBqc3g+XG5cdFx0XHR7YFxuXHRcdFx0XHRmb290ZXIge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNlZWU7XG5cdFx0XHRcdFx0cGFkZGluZzogMC41ZW07XG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6IEx1c2l0YW5hLCBHZW9yZ2lhLCBzYW5zLXNlcmlmO1xuXHRcdFx0XHRcdGNvbG9yOiBibGFjaztcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNkYmRiZGI7XG5cdFx0XHRcdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9vdGVyID4gLnNvY2lhbEljb25zID4gdWwge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0XHRwYWRkaW5nOiAwLjNlbTtcblx0XHRcdFx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdFx0XHRcdGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcblx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmNvcHlyaWdodCB7XG5cdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHQuY29weXJpZ2h0IHNwYW4ge1xuXHRcdFx0XHRcdGZvbnQtc3R5bGU6IGl0YWxpYztcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogNXB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dWwgPiBsaSB7XG5cdFx0XHRcdFx0bWFyZ2luOiAxMHB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3ZnLmZhLXR3aXR0ZXIge1xuXHRcdFx0XHRcdGNvbG9yOiAjNTVhY2VlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3ZnLmZhLWdpdGh1YiB7XG5cdFx0XHRcdFx0Y29sb3I6ICNibGFjaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHN2Zy5mYS15b3V0dWJlIHtcblx0XHRcdFx0XHRjb2xvcjogI2ZmMDAwMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHN2Zy5mYS1mYWNlYm9vayB7XG5cdFx0XHRcdFx0Y29sb3I6ICMzYjU5OTg7XG5cdFx0XHRcdH1cblx0XHRcdGB9XG5cdFx0PC9zdHlsZT5cblx0PC9mb290ZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXX0= */\n/*@ sourceURL=components/Layout/Footer.js */"
		})
	);
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./components/Layout/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Reboot__ = __webpack_require__("material-ui/Reboot");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Reboot___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Reboot__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Navbar__ = __webpack_require__("./components/Layout/Navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Footer__ = __webpack_require__("./components/Layout/Footer.js");
var _jsxFileName = '/home/Ranacode/Documents/code_playground/blog_javascrupt/components/Layout/Layout.js';






var Layout = function Layout(props) {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'div',
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 8
			}
		},
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
			{
				__source: {
					fileName: _jsxFileName,
					lineNumber: 9
				}
			},
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', key: 'viewport', __source: {
					fileName: _jsxFileName,
					lineNumber: 10
				}
			}),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { charSet: 'utf-8', key: 'utf', __source: {
					fileName: _jsxFileName,
					lineNumber: 11
				}
			}),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'title',
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 12
					}
				},
				'Javascrupt - Lleva tus habilidades de Javascript al siguiente nivel'
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', {
				href: 'https://fonts.googleapis.com/css?family=Raleway|Lusitana',
				rel: 'stylesheet',
				key: 'globalFonts',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 13
				}
			}),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { defer: true, src: 'https://use.fontawesome.com/releases/v5.0.6/js/all.js', __source: {
					fileName: _jsxFileName,
					lineNumber: 18
				}
			})
		),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Reboot___default.a, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 20
			}
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Navbar__["a" /* default */], {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 21
			}
		}),
		props.children,
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Footer__["a" /* default */], {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 23
			}
		})
	);
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/Layout/Navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/home/Ranacode/Documents/code_playground/blog_javascrupt/components/Layout/Navbar.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Navbar = function (_React$Component) {
    _inherits(Navbar, _React$Component);

    function Navbar() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Navbar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            activeToggle: false
        }, _this.activeToggle = function () {
            _this.setState({ activeToggle: !_this.state.activeToggle });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Navbar, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "nav",
                {
                    className: "jsx-885346718",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 13
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "div",
                    {
                        className: "jsx-885346718" + " " + "header",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 14
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "h1",
                        {
                            className: "jsx-885346718",
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 15
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
                            { href: "/", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 16
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                "a",
                                {
                                    className: "jsx-885346718",
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 17
                                    }
                                },
                                "JAVASCRUPT"
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "div",
                        { onClick: this.activeToggle, className: "jsx-885346718" + " " + "bars-icon ",
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 20
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
                            className: "jsx-885346718" + " " + "fas fa-bars fa-2x",
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 21
                            }
                        })
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "ul",
                    {
                        className: "jsx-885346718" + " " + ("nav-items " + (this.state.activeToggle ? 'activeToggle' : '')),
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 25
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "li",
                        {
                            className: "jsx-885346718",
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 26
                            }
                        },
                        "Art\xEDculos"
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "li",
                        {
                            className: "jsx-885346718",
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 27
                            }
                        },
                        "Front-End"
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "li",
                        {
                            className: "jsx-885346718",
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 28
                            }
                        },
                        "Back-End"
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "li",
                        {
                            className: "jsx-885346718",
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 29
                            }
                        },
                        "Cursos"
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "li",
                        {
                            className: "jsx-885346718",
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 30
                            }
                        },
                        "Sobre m\xED"
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "li",
                        {
                            className: "jsx-885346718",
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 31
                            }
                        },
                        "Contacto"
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: "885346718",
                    css: "nav.jsx-885346718{background:#f5da55;color:#323330;width:100%;height:auto;border-bottom:3px solid #323330;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}a.jsx-885346718{text-decoration:none;color:#323330;cursor:pointer;-webkit-transition:all 0.4s ease-in;transition:all 0.4s ease-in;}.header.jsx-885346718 h1.jsx-885346718{font-size:40px;margin:0 0 0.1em 0;}ul.nav-items.jsx-885346718{list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:5px;}li.jsx-885346718{font-family:Lusitana,Georgia,sans-serif;font-size:22px;border:1px solid #323330;margin:5px;padding:0.6em;border-radius:8px;-webkit-transition:0.3s ease-in-out;transition:0.3s ease-in-out;}li.jsx-885346718:hover{cursor:pointer;color:#f5da55;background:#323330;border-color:#f1d131;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}.bars-icon.jsx-885346718{display:none;}.activeToggle.jsx-885346718{visibility:visible !important;height:auto !important;opacity:1 !important;}@media screen and (max-width:985px){.header.jsx-885346718{margin:0.3em 0;border-bottom:1px solid black;text-align:center;width:95%;}}@media screen and (max-width:758px){.header.jsx-885346718{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:none;}.bars-icon.jsx-885346718{display:block;cursor:pointer;}ul.nav-items.jsx-885346718{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;width:50%;height:0;opacity:0;visibility:hidden;-webkit-transition:visibility 0s opacity 0.3s linear;transition:visibility 0s opacity 0.3s linear;}ul.nav-items.jsx-885346718 li.jsx-885346718{text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0L05hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ2dCLEFBR3lDLEFBV0EsQUFNTCxBQU1mLEFBTTBDLEFBVTNCLEFBUUgsQUFJaUIsQUFNVixBQVNGLEFBT0MsQUFJVSxBQVVKLGFBdkM1QixDQTBCdUIsQ0F4REEsQUFzQkwsQUFrQm1CLENBbkNyQixFQWlFVCxDQXZGVyxFQVdELFFBNkJNLEFBa0NuQixDQXZCdUIsR0FsRFosQ0FpQmQsQ0FOZ0IsS0FpQkMsSUEzQkQsQ0F3RFEsR0FqQkEsRUE1Qk0sR0F1Q1AsRUF0QkssQ0EzQlEsT0F3RG5CLE1BakJPLElBa0JyQixDQVBKLEFBYXVDLElBV1IsRUE5Q2pCLFFBM0JHLEVBbUJpQixDQVNqQixjQUNLLFNBbkJ2QixTQW9CaUMscUJBU2hDLFVBbUNvQixRQXpFYyxFQTBFZixTQUNFLFVBQ1EsSUE5QzdCLEVBZ0M0QixZQWU0QixJQTFEekMsWUFDZixpRUEyQ3FCLEdBOURHLFNBK0RuQixLQWNFLCtFQTVFYSx5REFDbkIiLCJmaWxlIjoiY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL1JhbmFjb2RlL0RvY3VtZW50cy9jb2RlX3BsYXlncm91bmQvYmxvZ19qYXZhc2NydXB0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY2xhc3MgTmF2YmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7XG5cdFx0YWN0aXZlVG9nZ2xlOiBmYWxzZVxuXHR9O1xuXG5cdGFjdGl2ZVRvZ2dsZSA9ICgpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHsgYWN0aXZlVG9nZ2xlOiAhdGhpcy5zdGF0ZS5hY3RpdmVUb2dnbGUgfSk7XG5cdH07XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PG5hdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cblx0XHRcdFx0XHQ8aDE+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1wiPlxuXHRcdFx0XHRcdFx0XHQ8YT5KQVZBU0NSVVBUPC9hPlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvaDE+XG5cdFx0XHRcdFx0PGRpdiBvbkNsaWNrPXt0aGlzLmFjdGl2ZVRvZ2dsZX0gY2xhc3NOYW1lPVwiYmFycy1pY29uIFwiPlxuXHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJhcnMgZmEtMnhcIiAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8dWwgY2xhc3NOYW1lPXtgbmF2LWl0ZW1zICR7dGhpcy5zdGF0ZS5hY3RpdmVUb2dnbGUgPyAnYWN0aXZlVG9nZ2xlJyA6ICcnfWB9PlxuXHRcdFx0XHRcdDxsaT5BcnTDrWN1bG9zPC9saT5cblx0XHRcdFx0XHQ8bGk+RnJvbnQtRW5kPC9saT5cblx0XHRcdFx0XHQ8bGk+QmFjay1FbmQ8L2xpPlxuXHRcdFx0XHRcdDxsaT5DdXJzb3M8L2xpPlxuXHRcdFx0XHRcdDxsaT5Tb2JyZSBtw608L2xpPlxuXHRcdFx0XHRcdDxsaT5Db250YWN0bzwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgbmF2IHtcbiAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNWRhNTU7XG4gICAgICAgICAgICAgICAgICAgICBjb2xvcjojMzIzMzMwO1xuICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMzIzMzMwO1xuICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMjMzMzA7XG4gICAgICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbjtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgLmhlYWRlciBoMSB7XG4gICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6NDBweDtcbiAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowIDAgMC4xZW0gMDtcbiAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdWwubmF2LWl0ZW1zIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZVxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzo1cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTHVzaXRhbmEsIEdlb3JnaWEsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyMnB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzIzMzMwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46NXB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjAuNmVtO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGk6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZjVkYTU1O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzIzMzMwO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNmMWQxMzE7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLmJhcnMtaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLmFjdGl2ZVRvZ2dsZSB7XG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6dmlzaWJsZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eToxICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTg1cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAuM2VtIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzU4cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmJhcnMtaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICB1bC5uYXYtaXRlbXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIG9wYWNpdHkgMC4zcyBsaW5lYXI7XG4gICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICB1bC5uYXYtaXRlbXMgbGl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG5cdFx0XHQ8L25hdj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdfQ== */\n/*@ sourceURL=components/Layout/Navbar.js */"
                })
            );
        }
    }]);

    return Navbar;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Navbar);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_buttercms__ = __webpack_require__("buttercms");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_buttercms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_buttercms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout_Layout__ = __webpack_require__("./components/Layout/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_html_react_parser__ = __webpack_require__("html-react-parser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_html_react_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_html_react_parser__);
var _jsxFileName = '/home/Ranacode/Documents/code_playground/blog_javascrupt/pages/index.js';







var butter = __WEBPACK_IMPORTED_MODULE_3_buttercms___default()('4a55813e1a9f5d6c1b68bc28f6fd710d9f00e595');

var Index = function Index() {
	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		'div',
		{
			className: 'jsx-3777021165',
			__source: {
				fileName: _jsxFileName,
				lineNumber: 10
			}
		},
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_4__components_Layout_Layout__["a" /* default */],
			{
				__source: {
					fileName: _jsxFileName,
					lineNumber: 11
				}
			},
			__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				'h3',
				{
					className: 'jsx-3777021165',
					__source: {
						fileName: _jsxFileName,
						lineNumber: 12
					}
				},
				'Soy el contenido del layout'
			)
		),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
			styleId: '3777021165',
			css: 'body{background:#fafafa;font-family:Raleway,Helvetica,Arial,sans-serif;color:#000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFzQixBQUd5QixtQkFDK0IsK0NBQ3ZDLFdBQ1oiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvUmFuYWNvZGUvRG9jdW1lbnRzL2NvZGVfcGxheWdyb3VuZC9ibG9nX2phdmFzY3J1cHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEJ1dHRlciBmcm9tICdidXR0ZXJjbXMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQnO1xuaW1wb3J0IFBhcnNlciBmcm9tICdodG1sLXJlYWN0LXBhcnNlcic7XG5cbmNvbnN0IGJ1dHRlciA9IEJ1dHRlcignNGE1NTgxM2UxYTlmNWQ2YzFiNjhiYzI4ZjZmZDcxMGQ5ZjAwZTU5NScpO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PExheW91dD5cblx0XHRcdFx0PGgzPlNveSBlbCBjb250ZW5pZG8gZGVsIGxheW91dDwvaDM+XG5cdFx0XHQ8L0xheW91dD5cblx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdGJvZHkge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmYWZhZmE7XG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFJhbGV3YXksIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cdFx0XHRcdFx0Y29sb3I6ICMwMDA7XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=pages/index.js */'
		})
	);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "buttercms":
/***/ (function(module, exports) {

module.exports = require("buttercms");

/***/ }),

/***/ "html-react-parser":
/***/ (function(module, exports) {

module.exports = require("html-react-parser");

/***/ }),

/***/ "material-ui/Reboot":
/***/ (function(module, exports) {

module.exports = require("material-ui/Reboot");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map