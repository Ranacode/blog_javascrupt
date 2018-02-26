webpackHotUpdate(4,{

/***/ "./components/BlogPosts/PostContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PostContent__ = __webpack_require__("./components/BlogPosts/PostContent.js");
var _jsxFileName = "/home/Ranacode/Documents/code_playground/blog_javascrupt/components/BlogPosts/PostContainer.js";



(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

	enterModule && enterModule(module);
})();



var PostContainer = function PostContainer(props) {
	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		"section",
		{
			className: "jsx-4240350886" + " " + "post",
			__source: {
				fileName: _jsxFileName,
				lineNumber: 4
			}
		},
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", { width: "200", height: "150", src: props.metadata.featured_image, alt: props.metadata.title, className: "jsx-4240350886",
			__source: {
				fileName: _jsxFileName,
				lineNumber: 5
			}
		}),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
			"div",
			{
				className: "jsx-4240350886" + " " + "post__header",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 6
				}
			},
			__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				"div",
				{
					className: "jsx-4240350886" + " " + "post__header--content",
					__source: {
						fileName: _jsxFileName,
						lineNumber: 7
					}
				},
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					"h2",
					{
						className: "jsx-4240350886",
						__source: {
							fileName: _jsxFileName,
							lineNumber: 8
						}
					},
					props.metadata.title
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					"span",
					{
						className: "jsx-4240350886",
						__source: {
							fileName: _jsxFileName,
							lineNumber: 9
						}
					},
					"Escrito por ",
					props.metadata.author.first_name,
					" ",
					props.metadata.author.last_name
				)
			),
			__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__PostContent__["a" /* default */], { content: props.metadata.body, __source: {
					fileName: _jsxFileName,
					lineNumber: 13
				}
			}),
			__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				"footer",
				{
					className: "jsx-4240350886",
					__source: {
						fileName: _jsxFileName,
						lineNumber: 14
					}
				},
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					"strong",
					{
						className: "jsx-4240350886",
						__source: {
							fileName: _jsxFileName,
							lineNumber: 15
						}
					},
					"Publicado el ",
					new Date(props.metadata.published).toLocaleDateString(),
					" ~",
					' ',
					new Date(props.metadata.published).toLocaleTimeString()
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					"div",
					{
						className: "jsx-4240350886" + " " + "tags",
						__source: {
							fileName: _jsxFileName,
							lineNumber: 19
						}
					},
					props.metadata.tags.map(function (tag) {
						return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
							"span",
							{ key: tag.slug, className: "jsx-4240350886",
								__source: {
									fileName: _jsxFileName,
									lineNumber: 21
								}
							},
							tag.name
						);
					})
				)
			)
		),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
			styleId: "4240350886",
			css: ".post.jsx-4240350886{background:white;border:1px solid #dbdbdb;padding:0.5em;margin:1em 0 1em 0.5em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.post__header.jsx-4240350886{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1;-ms-flex:1;flex:1;}.post__header--content.jsx-4240350886{background:#eee;padding:0.3em 1em;border:1px solid #dbdbdb;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.post__header--content.jsx-4240350886 h2.jsx-4240350886{margin:0.2em;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;}.post__header--content.jsx-4240350886 span.jsx-4240350886{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}img.jsx-4240350886{margin-right:1em;}footer.jsx-4240350886{text-align:center;}.tags.jsx-4240350886{padding:0.6em;}.tags.jsx-4240350886 span.jsx-4240350886{background:#4a4a4a;color:#fff;font-size:16px;padding:.4em;margin-right:.6em;border-radius:12px;margin-top:22em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQmxvZ1Bvc3RzL1Bvc3RDb250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JJLEFBR3VCLEFBUUosQUFNRyxBQU9ILEFBS08sQUFHSCxBQUlDLEFBR0osQUFHSyxhQWpCRyxDQWV2QixFQXRCbUIsQ0FkTyxBQTZCMUIsQ0FJQSxDQU1ZLFdBQ0ksSUF6QlUsUUFkWCxHQXdDRCxXQXZDVSxFQXdDTCxDQTFCTCxhQVVkLEVBbEJ1QixFQW1DSCxHQXhDTixZQW1CZCxJQXNCaUIsZ0JBQ2pCLHNCQTVCK0IsbUJBUnZCLENBTFIsZ0NBTUEsK0RBUUEiLCJmaWxlIjoiY29tcG9uZW50cy9CbG9nUG9zdHMvUG9zdENvbnRhaW5lci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9SYW5hY29kZS9Eb2N1bWVudHMvY29kZV9wbGF5Z3JvdW5kL2Jsb2dfamF2YXNjcnVwdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb3N0Q29udGVudCBmcm9tICcuL1Bvc3RDb250ZW50JztcblxuY29uc3QgUG9zdENvbnRhaW5lciA9IChwcm9wcykgPT4gKFxuXHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJwb3N0XCI+XG5cdFx0PGltZyB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjE1MFwiIHNyYz17cHJvcHMubWV0YWRhdGEuZmVhdHVyZWRfaW1hZ2V9IGFsdD17cHJvcHMubWV0YWRhdGEudGl0bGV9IC8+XG5cdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0X19oZWFkZXJcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zdF9faGVhZGVyLS1jb250ZW50XCI+XG5cdFx0XHRcdDxoMj57cHJvcHMubWV0YWRhdGEudGl0bGV9PC9oMj5cblx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0RXNjcml0byBwb3Ige3Byb3BzLm1ldGFkYXRhLmF1dGhvci5maXJzdF9uYW1lfSB7cHJvcHMubWV0YWRhdGEuYXV0aG9yLmxhc3RfbmFtZX1cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8UG9zdENvbnRlbnQgY29udGVudD17cHJvcHMubWV0YWRhdGEuYm9keX0gLz5cblx0XHRcdDxmb290ZXI+XG5cdFx0XHRcdDxzdHJvbmc+XG5cdFx0XHRcdFx0UHVibGljYWRvIGVsIHtuZXcgRGF0ZShwcm9wcy5tZXRhZGF0YS5wdWJsaXNoZWQpLnRvTG9jYWxlRGF0ZVN0cmluZygpfSB+eycgJ31cblx0XHRcdFx0XHR7bmV3IERhdGUocHJvcHMubWV0YWRhdGEucHVibGlzaGVkKS50b0xvY2FsZVRpbWVTdHJpbmcoKX1cblx0XHRcdFx0PC9zdHJvbmc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFnc1wiPlxuXHRcdFx0XHRcdHtwcm9wcy5tZXRhZGF0YS50YWdzLm1hcCgodGFnKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gPHNwYW4ga2V5PXt0YWcuc2x1Z30+e3RhZy5uYW1lfTwvc3Bhbj47XG5cdFx0XHRcdFx0fSl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9mb290ZXI+XG5cdFx0PC9kaXY+XG5cblx0XHR7Lypcblx0XHQ8UG9zdENvbnRlbnQgY2xhc3NOYW1lPVwicG9zdF9fYm9keVwiIGNvbnRlbnQ9e3Byb3BzLm1ldGFkYXRhLmJvZHl9IC8+XG5cbiovfVxuXHRcdDxzdHlsZSBqc3g+XG5cdFx0XHR7YFxuXHRcdFx0XHQucG9zdCB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2RiZGJkYjtcblx0XHRcdFx0XHRwYWRkaW5nOiAwLjVlbTtcblx0XHRcdFx0XHRtYXJnaW46IDFlbSAwIDFlbSAwLjVlbTtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnBvc3RfX2hlYWRlciB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdGZsZXg6IDE7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucG9zdF9faGVhZGVyLS1jb250ZW50IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZWVlO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDAuM2VtIDFlbTtcblx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZGJkYmRiO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5wb3N0X19oZWFkZXItLWNvbnRlbnQgaDIge1xuXHRcdFx0XHRcdG1hcmdpbjogMC4yZW07XG5cdFx0XHRcdFx0YWxpZ24tc2VsZjogZmxleC1zdGFydDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5wb3N0X19oZWFkZXItLWNvbnRlbnQgc3BhbiB7XG5cdFx0XHRcdFx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aW1nIHtcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDFlbTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvb3RlciB7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC50YWdzIHtcblx0XHRcdFx0XHRwYWRkaW5nOiAwLjZlbTtcblx0XHRcdFx0fVxuXHRcdFx0XHQudGFncyBzcGFuIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjNGE0YTRhO1xuXHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRwYWRkaW5nOiAuNGVtO1xuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogLjZlbTtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDIyZW07XG5cdFx0XHRcdH1cblx0XHRcdGB9XG5cdFx0PC9zdHlsZT5cblx0PC9zZWN0aW9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdENvbnRhaW5lcjtcbiJdfQ== */\n/*@ sourceURL=components/BlogPosts/PostContainer.js */"
		})
	);
};

var _default = PostContainer;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(PostContainer, "PostContainer", "/home/Ranacode/Documents/code_playground/blog_javascrupt/components/BlogPosts/PostContainer.js");
	reactHotLoader.register(_default, "default", "/home/Ranacode/Documents/code_playground/blog_javascrupt/components/BlogPosts/PostContainer.js");
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.2939307f85c504572984.hot-update.js.map