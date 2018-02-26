webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_buttercms__ = __webpack_require__("./node_modules/buttercms/lib/butter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_buttercms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_buttercms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout_Layout__ = __webpack_require__("./components/Layout/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_BlogPosts_PostContainer__ = __webpack_require__("./components/BlogPosts/PostContainer.js");
var _jsxFileName = '/home/Ranacode/Documents/code_playground/blog_javascrupt/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

	enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var butter = __WEBPACK_IMPORTED_MODULE_3_buttercms___default()('4a55813e1a9f5d6c1b68bc28f6fd710d9f00e595');

var Index = function (_React$Component) {
	_inherits(Index, _React$Component);

	function Index() {
		_classCallCheck(this, Index);

		return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
	}

	_createClass(Index, [{
		key: 'render',
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				'div',
				{
					className: 'jsx-2662151515',
					__source: {
						fileName: _jsxFileName,
						lineNumber: 22
					}
				},
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_4__components_Layout_Layout__["a" /* default */],
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 23
						}
					},
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						'main',
						{
							className: 'jsx-2662151515',
							__source: {
								fileName: _jsxFileName,
								lineNumber: 24
							}
						},
						__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
							'div',
							{
								className: 'jsx-2662151515' + ' ' + 'blog-container',
								__source: {
									fileName: _jsxFileName,
									lineNumber: 25
								}
							},
							__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
								'header',
								{
									className: 'jsx-2662151515',
									__source: {
										fileName: _jsxFileName,
										lineNumber: 26
									}
								},
								__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
									'h3',
									{
										className: 'jsx-2662151515',
										__source: {
											fileName: _jsxFileName,
											lineNumber: 27
										}
									},
									'\xDAltimos art\xEDculos'
								)
							),
							this.props.posts.map(function (post) {
								return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_BlogPosts_PostContainer__["a" /* default */], { key: post.slug, metadata: post, __source: {
										fileName: _jsxFileName,
										lineNumber: 30
									}
								});
							})
						),
						__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
							'section',
							{
								className: 'jsx-2662151515',
								__source: {
									fileName: _jsxFileName,
									lineNumber: 33
								}
							},
							'columna 21'
						)
					)
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
					styleId: '2662151515',
					css: 'body{background:#fafafa;font-family:Raleway,Helvetica,Arial,sans-serif;color:#000;margin:0;padding:0;box-sizing:border-box;}header{background:white;border:1px solid #dbdbdb;border-radius:10px;padding:0.4em;width:100%;font-family:Lusitana,Verdana,sans-serif;width:25%;margin:0.5em;}header h3{margin:0.2em 0;font-size:25px;width:100%;text-align:center;}main{display:grid;grid-template-columns:70% 30%;}@media screen and (max-width:1024px){main{grid-template-columns:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DdUIsQUFHMEIsQUFRRixBQVdGLEFBTUYsQUFNZSxhQUxFLEVBTmYsRUFYVSxFQVJ5QixRQStCbEQsR0FYVyxXQUNPLENBWkMsQ0FpQnBCLGdCQUpBLEVBWmUsS0FUSCxTQVVBLEVBVEYsU0FDQyxBQVNnQyxVQVJwQixzQkFDdkIsUUFRVyxVQUNHLGFBQ2QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvUmFuYWNvZGUvRG9jdW1lbnRzL2NvZGVfcGxheWdyb3VuZC9ibG9nX2phdmFzY3J1cHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEJ1dHRlciBmcm9tICdidXR0ZXJjbXMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQnO1xuaW1wb3J0IFBvc3RDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9CbG9nUG9zdHMvUG9zdENvbnRhaW5lcic7XG5cbmNvbnN0IGJ1dHRlciA9IEJ1dHRlcignNGE1NTgxM2UxYTlmNWQ2YzFiNjhiYzI4ZjZmZDcxMGQ5ZjAwZTU5NScpO1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIGJ1dHRlci5wb3N0XG5cdFx0XHQubGlzdCh7IHBhZ2U6IDEsIHBhZ2Vfc2l6ZTogNSB9KVxuXHRcdFx0LnRoZW4oKHJlc3VsdCkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQuZGF0YS5kYXRhKTtcblx0XHRcdFx0cmV0dXJuIHsgcG9zdHM6IHJlc3VsdC5kYXRhLmRhdGEgfTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goKGVycikgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xuXHRcdFx0fSk7XG5cdH07XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PExheW91dD5cblx0XHRcdFx0XHQ8bWFpbj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0PGhlYWRlcj5cblx0XHRcdFx0XHRcdFx0XHQ8aDM+w5psdGltb3MgYXJ0w61jdWxvczwvaDM+XG5cdFx0XHRcdFx0XHRcdDwvaGVhZGVyPlxuXHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5wb3N0cy5tYXAoKHBvc3QpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPFBvc3RDb250YWluZXIga2V5PXtwb3N0LnNsdWd9IG1ldGFkYXRhPXtwb3N0fSAvPjtcblx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxzZWN0aW9uPmNvbHVtbmEgMjE8L3NlY3Rpb24+XG5cdFx0XHRcdFx0PC9tYWluPlxuXHRcdFx0XHQ8L0xheW91dD5cblxuXHRcdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0XHRcdGJvZHkge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZhZmFmYTtcblx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBSYWxld2F5LCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMwMDA7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aGVhZGVyIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2RiZGJkYjtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwLjRlbTtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IEx1c2l0YW5hLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDI1JTtcblx0XHRcdFx0XHRcdG1hcmdpbjogMC41ZW07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aGVhZGVyIGgzIHtcblx0XHRcdFx0XHRcdG1hcmdpbjogMC4yZW0gMDtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjVweDtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRtYWluIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGdyaWQ7XG5cdFx0XHRcdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcwJSAzMCU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cdFx0XHRcdFx0XHRtYWluIHtcblx0XHRcdFx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=pages/index.js */'
				})
			);
		}
	}, {
		key: '__reactstandin__regenerateByEval',
		value: function __reactstandin__regenerateByEval(key, code) {
			this[key] = eval(code);
		}
	}]);

	return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

Index.getInitialProps = function () {
	return butter.post.list({ page: 1, page_size: 5 }).then(function (result) {
		console.log(result.data.data);
		return { posts: result.data.data };
	}).catch(function (err) {
		console.log(err);
	});
};

var _default = Index;


/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(butter, 'butter', '/home/Ranacode/Documents/code_playground/blog_javascrupt/pages/index.js');
	reactHotLoader.register(Index, 'Index', '/home/Ranacode/Documents/code_playground/blog_javascrupt/pages/index.js');
	reactHotLoader.register(_default, 'default', '/home/Ranacode/Documents/code_playground/blog_javascrupt/pages/index.js');
	leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.0e9801ed880221e99a32.hot-update.js.map