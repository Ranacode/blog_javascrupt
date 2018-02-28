webpackHotUpdate(5,{

/***/ "./pages/post.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_buttercms__ = __webpack_require__("./node_modules/buttercms/lib/butter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_buttercms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_buttercms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_html_react_parser__ = __webpack_require__("./node_modules/html-react-parser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_html_react_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_html_react_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Layout_Layout__ = __webpack_require__("./components/Layout/Layout.js");
var _jsxFileName = '/home/Ranacode/Documents/code_playground/blog_javascrupt/pages/post.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

	enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var butter = __WEBPACK_IMPORTED_MODULE_3_buttercms___default()('4a55813e1a9f5d6c1b68bc28f6fd710d9f00e595');

var Post = function (_React$Component) {
	_inherits(Post, _React$Component);

	function Post() {
		_classCallCheck(this, Post);

		return _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).apply(this, arguments));
	}

	_createClass(Post, [{
		key: 'render',
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_6__components_Layout_Layout__["a" /* default */],
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 24
					}
				},
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 25
						}
					},
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'description', content: this.props.post.meta_description, className: 'jsx-2226499148',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 26
						}
					}),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', {
						name: 'author',
						content: this.props.post.author.first_name + ' ' + this.props.post.author.last_name,
						className: 'jsx-2226499148',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 27
						}
					}),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'keywords', content: this.props.post.tags.map(function (tag) {
							return tag.name;
						}).join(', '), className: 'jsx-2226499148',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 31
						}
					}),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', {
						rel: 'stylesheet',
						href: 'http://d2z2rr99bkshyr.cloudfront.net/buttercms-post-defaults.css',
						key: 'codeStyles',
						className: 'jsx-2226499148',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 32
						}
					}),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						'title',
						{
							className: 'jsx-2226499148',
							__source: {
								fileName: _jsxFileName,
								lineNumber: 37
							}
						},
						this.props.post.seo_title
					)
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					'header',
					{
						className: 'jsx-2226499148',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 39
						}
					},
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						'div',
						{
							className: 'jsx-2226499148' + ' ' + 'background',
							__source: {
								fileName: _jsxFileName,
								lineNumber: 40
							}
						},
						__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
							'div',
							{
								className: 'jsx-2226499148' + ' ' + 'title__container',
								__source: {
									fileName: _jsxFileName,
									lineNumber: 41
								}
							},
							__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
								'h1',
								{
									className: 'jsx-2226499148',
									__source: {
										fileName: _jsxFileName,
										lineNumber: 42
									}
								},
								this.props.post.title
							)
						)
					)
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					'section',
					{
						className: 'jsx-2226499148',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 46
						}
					},
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						'article',
						{
							className: 'jsx-2226499148',
							__source: {
								fileName: _jsxFileName,
								lineNumber: 47
							}
						},
						__WEBPACK_IMPORTED_MODULE_5_html_react_parser___default()(this.props.post.body)
					)
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
					styleId: '2226499148',
					css: 'header.jsx-2226499148{width:100%;background:rgb(238,238,238);border:1px solid #dbdbdb;}.title__container.jsx-2226499148{background:rgb(245,223,111);margin:0 auto;font-family:Raleway,Verdana,sans-serif;width:50%;height:auto;border:1px solid black;-webkit-border-bottom-right-radius:10px;-webkit-border-bottom-left-radius:10px;-moz-border-radius-bottomright:10px;-moz-border-radius-bottomleft:10px;border-bottom-right-radius:10px;border-bottom-left-radius:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}section.jsx-2226499148{background:white;margin:0 auto;padding:1em;border:1px solid #dbdbdb;height:auto;width:60%;}section.jsx-2226499148 article.jsx-2226499148{padding:0.4em;text-align:justify;text-justify:inter-word;font-family:Lusitana,Georgia,serif;font-size:22px;line-height:1.5;}@media screen and (max-width:1119px){.title__container.jsx-2226499148{width:70%;}section.jsx-2226499148{width:80%;}}@media screen and (max-width:480px){.title__container.jsx-2226499148{width:100%;}section.jsx-2226499148{width:95%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaURNLEFBR2tCLEFBTW1CLEFBaUJiLEFBU0gsQUFVSCxBQUlBLEFBTUMsQUFJRCxVQWJYLEFBSUEsQUFVQSxDQXhEOEIsQUFvRDlCLEdBcEJtQixHQVRMLFdBakJBLEdBa0JGLEVBU1ksTUFoQ0MsR0FNZ0IsQ0FrQmhCLGNBU1ksT0FoQ3RDLElBd0JhLFlBQ0YsQ0FuQkEsU0FvQlgsQ0FuQmEsQ0EwQkcsV0F6QlEsSUEwQlAsZ0JBQ2pCLEdBMUJ5Qyx3Q0FDRCx1Q0FDSCxvQ0FDRCxtQ0FDSCxnQ0FDRCwrQkFDbEIsMEVBQ1UsbUdBQ3hCIiwiZmlsZSI6InBhZ2VzL3Bvc3QuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvUmFuYWNvZGUvRG9jdW1lbnRzL2NvZGVfcGxheWdyb3VuZC9ibG9nX2phdmFzY3J1cHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBCdXR0ZXIgZnJvbSAnYnV0dGVyY21zJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUGFyc2VyIGZyb20gJ2h0bWwtcmVhY3QtcGFyc2VyJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0JztcblxuY29uc3QgYnV0dGVyID0gQnV0dGVyKCc0YTU1ODEzZTFhOWY1ZDZjMWI2OGJjMjhmNmZkNzEwZDlmMDBlNTk1Jyk7XG5cbmNsYXNzIFBvc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gKHByb3BzKSA9PiB7XG5cdFx0cmV0dXJuIGJ1dHRlci5wb3N0XG5cdFx0XHQuc2VhcmNoKHByb3BzLnF1ZXJ5LnRpdGxlKVxuXHRcdFx0LnRoZW4oKHJlc3ApID0+IHtcblx0XHRcdFx0cmV0dXJuIHsgcG9zdDogcmVzcC5kYXRhLmRhdGFbMF0gfTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goKGVycikgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xuXHRcdFx0fSk7XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHQ8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXt0aGlzLnByb3BzLnBvc3QubWV0YV9kZXNjcmlwdGlvbn0gLz5cblx0XHRcdFx0XHQ8bWV0YVxuXHRcdFx0XHRcdFx0bmFtZT1cImF1dGhvclwiXG5cdFx0XHRcdFx0XHRjb250ZW50PXtgJHt0aGlzLnByb3BzLnBvc3QuYXV0aG9yLmZpcnN0X25hbWV9ICR7dGhpcy5wcm9wcy5wb3N0LmF1dGhvci5sYXN0X25hbWV9YH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9e3RoaXMucHJvcHMucG9zdC50YWdzLm1hcCgodGFnKSA9PiB0YWcubmFtZSkuam9pbignLCAnKX0gLz5cblx0XHRcdFx0XHQ8bGlua1xuXHRcdFx0XHRcdFx0cmVsPVwic3R5bGVzaGVldFwiXG5cdFx0XHRcdFx0XHRocmVmPVwiaHR0cDovL2QyejJycjk5YmtzaHlyLmNsb3VkZnJvbnQubmV0L2J1dHRlcmNtcy1wb3N0LWRlZmF1bHRzLmNzc1wiXG5cdFx0XHRcdFx0XHRrZXk9XCJjb2RlU3R5bGVzXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDx0aXRsZT57dGhpcy5wcm9wcy5wb3N0LnNlb190aXRsZX08L3RpdGxlPlxuXHRcdFx0XHQ8L0hlYWQ+XG5cdFx0XHRcdDxoZWFkZXI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRpdGxlX19jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0PGgxPnt0aGlzLnByb3BzLnBvc3QudGl0bGV9PC9oMT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2hlYWRlcj5cblx0XHRcdFx0PHNlY3Rpb24+XG5cdFx0XHRcdFx0PGFydGljbGU+e1BhcnNlcih0aGlzLnByb3BzLnBvc3QuYm9keSl9PC9hcnRpY2xlPlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdFx0e2Bcblx0XHRcdFx0XHRoZWFkZXIge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2IoMjM4LCAyMzgsIDIzOCk7XG5cdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZGJkYmRiO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC50aXRsZV9fY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHJnYigyNDUsIDIyMywgMTExKTtcblx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFJhbGV3YXksIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG5cdFx0XHRcdFx0XHR3aWR0aDogNTAlO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cdFx0XHRcdFx0XHQtd2Via2l0LWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuXHRcdFx0XHRcdFx0LXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuXHRcdFx0XHRcdFx0LW1vei1ib3JkZXItcmFkaXVzLWJvdHRvbXJpZ2h0OiAxMHB4O1xuXHRcdFx0XHRcdFx0LW1vei1ib3JkZXItcmFkaXVzLWJvdHRvbWxlZnQ6IDEwcHg7XG5cdFx0XHRcdFx0XHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcblx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0c2VjdGlvbiB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMWVtO1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2RiZGJkYjtcblx0XHRcdFx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdFx0XHRcdHdpZHRoOiA2MCU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0c2VjdGlvbiBhcnRpY2xlIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAuNGVtO1xuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjoganVzdGlmeTtcblx0XHRcdFx0XHRcdHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcblx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBMdXNpdGFuYSwgR2VvcmdpYSwgc2VyaWY7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDIycHg7XG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS41O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMTlweCkge1xuXHRcdFx0XHRcdFx0LnRpdGxlX19jb250YWluZXIge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogNzAlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRzZWN0aW9uIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDgwJTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQ4MHB4KSB7XG5cdFx0XHRcdFx0XHQudGl0bGVfX2NvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRzZWN0aW9uIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDk1JTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfVxuXHRcdFx0XHQ8L3N0eWxlPlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0KTtcblx0fVxufVxuXG5Qb3N0LnByb3BUeXBlcyA9IHtcblx0dXJsOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXX0= */\n/*@ sourceURL=pages/post.js */'
				})
			);
		}
	}, {
		key: '__reactstandin__regenerateByEval',
		value: function __reactstandin__regenerateByEval(key, code) {
			this[key] = eval(code);
		}
	}]);

	return Post;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

Post.getInitialProps = function (props) {
	return butter.post.search(props.query.title).then(function (resp) {
		return { post: resp.data.data[0] };
	}).catch(function (err) {
		console.log(err);
	});
};

Post.propTypes = {
	url: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object.isRequired
};

var _default = Post;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(butter, 'butter', '/home/Ranacode/Documents/code_playground/blog_javascrupt/pages/post.js');
	reactHotLoader.register(Post, 'Post', '/home/Ranacode/Documents/code_playground/blog_javascrupt/pages/post.js');
	reactHotLoader.register(_default, 'default', '/home/Ranacode/Documents/code_playground/blog_javascrupt/pages/post.js');
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/post")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.32a523d17d777eb7049b.hot-update.js.map