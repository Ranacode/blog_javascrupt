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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_HightLightWithStyles__ = __webpack_require__("./components/HightLightWithStyles.js");
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
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'description', content: this.props.post.meta_description, className: 'jsx-3001481249',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 26
						}
					}),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', {
						name: 'author',
						content: this.props.post.author.first_name + ' ' + this.props.post.author.last_name,
						className: 'jsx-3001481249',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 27
						}
					}),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'keywords', content: this.props.post.tags.map(function (tag) {
							return tag.name;
						}).join(', '), className: 'jsx-3001481249',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 31
						}
					}),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: 'http://d2z2rr99bkshyr.cloudfront.net/buttercms-post-defaults.css', className: 'jsx-3001481249',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 32
						}
					}),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						'title',
						{
							className: 'jsx-3001481249',
							__source: {
								fileName: _jsxFileName,
								lineNumber: 33
							}
						},
						this.props.post.seo_title
					)
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					'header',
					{
						className: 'jsx-3001481249',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 35
						}
					},
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						'div',
						{
							className: 'jsx-3001481249' + ' ' + 'background',
							__source: {
								fileName: _jsxFileName,
								lineNumber: 36
							}
						},
						__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
							'div',
							{
								className: 'jsx-3001481249' + ' ' + 'title__container',
								__source: {
									fileName: _jsxFileName,
									lineNumber: 37
								}
							},
							__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
								'h1',
								{
									className: 'jsx-3001481249',
									__source: {
										fileName: _jsxFileName,
										lineNumber: 38
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
						className: 'jsx-3001481249',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 42
						}
					},
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						'article',
						{
							className: 'jsx-3001481249',
							__source: {
								fileName: _jsxFileName,
								lineNumber: 43
							}
						},
						__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_HightLightWithStyles__["a" /* default */], { code: this.props.post.body, __source: {
								fileName: _jsxFileName,
								lineNumber: 44
							}
						})
					)
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
					styleId: '3001481249',
					css: 'header{width:100%;background:rgb(238,238,238);border:1px solid #dbdbdb;}.title__container{background:rgb(245,223,111);margin:0 auto;font-family:Raleway,Verdana,sans-serif;width:50%;height:auto;border:1px solid black;-webkit-border-bottom-right-radius:10px;-webkit-border-bottom-left-radius:10px;-moz-border-radius-bottomright:10px;-moz-border-radius-bottomleft:10px;border-bottom-right-radius:10px;border-bottom-left-radius:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}section{background:white;margin:0 auto;padding:1em;border:1px solid #dbdbdb;height:auto;width:60%;}section article{padding:0.4em;text-align:justify;text-justify:inter-word;font-family:Lusitana,Georgia,serif;font-size:22px;line-height:1.5;}@media screen and (max-width:1119px){.title__container{width:70%;}section{width:80%;}}@media screen and (max-width:480px){.title__container{width:100%;}section{width:95%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEN1QixBQUdrQixBQU1tQixBQWlCYixBQVNILEFBVUgsQUFJQSxBQU1DLEFBSUQsVUFiWCxBQUlBLEFBVUEsQ0F4RDhCLEFBb0Q5QixHQXBCbUIsR0FUTCxXQWpCQSxHQWtCRixFQVNZLE1BaENDLEdBTWdCLENBa0JoQixjQVNZLE9BaEN0QyxJQXdCYSxZQUNGLENBbkJBLFNBb0JYLENBbkJhLENBMEJHLFdBekJRLElBMEJQLGdCQUNqQixHQTFCeUMsd0NBQ0QsdUNBQ0gsb0NBQ0QsbUNBQ0gsZ0NBQ0QsK0JBQ2xCLDBFQUNVLG1HQUN4QiIsImZpbGUiOiJwYWdlcy9wb3N0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL1JhbmFjb2RlL0RvY3VtZW50cy9jb2RlX3BsYXlncm91bmQvYmxvZ19qYXZhc2NydXB0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgQnV0dGVyIGZyb20gJ2J1dHRlcmNtcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFBhcnNlciBmcm9tICdodG1sLXJlYWN0LXBhcnNlcic7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dCc7XG5pbXBvcnQgSGlnaGxpZ2h0V2l0aFN0eWxlcyBmcm9tICcuLi9jb21wb25lbnRzL0hpZ2h0TGlnaHRXaXRoU3R5bGVzJztcbmNvbnN0IGJ1dHRlciA9IEJ1dHRlcignNGE1NTgxM2UxYTlmNWQ2YzFiNjhiYzI4ZjZmZDcxMGQ5ZjAwZTU5NScpO1xuXG5jbGFzcyBQb3N0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGljIGdldEluaXRpYWxQcm9wcyA9IChwcm9wcykgPT4ge1xuXHRcdHJldHVybiBidXR0ZXIucG9zdFxuXHRcdFx0LnNlYXJjaChwcm9wcy5xdWVyeS50aXRsZSlcblx0XHRcdC50aGVuKChyZXNwKSA9PiB7XG5cdFx0XHRcdHJldHVybiB7IHBvc3Q6IHJlc3AuZGF0YS5kYXRhWzBdIH07XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKChlcnIpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyKTtcblx0XHRcdH0pO1xuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PExheW91dD5cblx0XHRcdFx0PEhlYWQ+XG5cdFx0XHRcdFx0PG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17dGhpcy5wcm9wcy5wb3N0Lm1ldGFfZGVzY3JpcHRpb259IC8+XG5cdFx0XHRcdFx0PG1ldGFcblx0XHRcdFx0XHRcdG5hbWU9XCJhdXRob3JcIlxuXHRcdFx0XHRcdFx0Y29udGVudD17YCR7dGhpcy5wcm9wcy5wb3N0LmF1dGhvci5maXJzdF9uYW1lfSAke3RoaXMucHJvcHMucG9zdC5hdXRob3IubGFzdF9uYW1lfWB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PXt0aGlzLnByb3BzLnBvc3QudGFncy5tYXAoKHRhZykgPT4gdGFnLm5hbWUpLmpvaW4oJywgJyl9IC8+XG5cdFx0XHRcdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwOi8vZDJ6MnJyOTlia3NoeXIuY2xvdWRmcm9udC5uZXQvYnV0dGVyY21zLXBvc3QtZGVmYXVsdHMuY3NzXCIgLz5cblx0XHRcdFx0XHQ8dGl0bGU+e3RoaXMucHJvcHMucG9zdC5zZW9fdGl0bGV9PC90aXRsZT5cblx0XHRcdFx0PC9IZWFkPlxuXHRcdFx0XHQ8aGVhZGVyPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZV9fY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdDxoMT57dGhpcy5wcm9wcy5wb3N0LnRpdGxlfTwvaDE+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9oZWFkZXI+XG5cdFx0XHRcdDxzZWN0aW9uPlxuXHRcdFx0XHRcdDxhcnRpY2xlPlxuXHRcdFx0XHRcdFx0PEhpZ2hsaWdodFdpdGhTdHlsZXMgY29kZT17dGhpcy5wcm9wcy5wb3N0LmJvZHl9IC8+XG5cdFx0XHRcdFx0PC9hcnRpY2xlPlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdFx0aGVhZGVyIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogcmdiKDIzOCwgMjM4LCAyMzgpO1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2RiZGJkYjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQudGl0bGVfX2NvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2IoMjQ1LCAyMjMsIDExMSk7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBSYWxld2F5LCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDUwJTtcblx0XHRcdFx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuXHRcdFx0XHRcdFx0LXdlYmtpdC1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcblx0XHRcdFx0XHRcdC13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcblx0XHRcdFx0XHRcdC1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21yaWdodDogMTBweDtcblx0XHRcdFx0XHRcdC1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21sZWZ0OiAxMHB4O1xuXHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG5cdFx0XHRcdFx0XHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHNlY3Rpb24ge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDFlbTtcblx0XHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNkYmRiZGI7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHRcdFx0XHR3aWR0aDogNjAlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHNlY3Rpb24gYXJ0aWNsZSB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwLjRlbTtcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGp1c3RpZnk7XG5cdFx0XHRcdFx0XHR0ZXh0LWp1c3RpZnk6IGludGVyLXdvcmQ7XG5cdFx0XHRcdFx0XHRmb250LWZhbWlseTogTHVzaXRhbmEsIEdlb3JnaWEsIHNlcmlmO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyMnB4O1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTE5cHgpIHtcblx0XHRcdFx0XHRcdC50aXRsZV9fY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDcwJTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0c2VjdGlvbiB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA4MCU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcblx0XHRcdFx0XHRcdC50aXRsZV9fY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHNlY3Rpb24ge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogOTUlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0KTtcblx0fVxufVxuXG5Qb3N0LnByb3BUeXBlcyA9IHtcblx0dXJsOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXX0= */\n/*@ sourceURL=pages/post.js */'
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
//# sourceMappingURL=5.8180a0ea1fd9d4b2027f.hot-update.js.map