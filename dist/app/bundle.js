webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(14);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(2);
	__webpack_require__(4);
	var app_config_1 = __webpack_require__(5);
	var app_run_1 = __webpack_require__(7);
	var app_router_1 = __webpack_require__(8);
	__webpack_require__(10);
	angular
	    .module('app', ['ui.router'])
	    .config(app_config_1.default)
	    .config(app_router_1.default)
	    .run(app_run_1.default);


/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(2);
	var http_interceptor_1 = __webpack_require__(6);
	Config.$inject = ['$httpProvider'];
	function Config($httpProvider) {
	    $httpProvider.interceptors.push(http_interceptor_1.HttpInterceptor);
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Config;


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	function HttpInterceptor($injector, $q) {
	    return {
	        request: onRequest,
	        requestError: onRequestError,
	        response: onResponse,
	        responseError: onResponseError
	    };
	    function onRequest(config) {
	        return config;
	    }
	    function onRequestError(rejection) {
	        return $q.reject(rejection);
	    }
	    function onResponse(result) {
	        return result;
	    }
	    function onResponseError(response) {
	        return $q.reject(response);
	    }
	}
	exports.HttpInterceptor = HttpInterceptor;
	HttpInterceptor.$inject = ['$injector', '$q'];


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(2);
	Run.$inject = ['$rootScope', '$state'];
	function Run($rootScope, $state) {
	    $rootScope.$on('$stateChangeStart', onStateChangeStart);
	    $rootScope.$on('$stateChangeSuccess', onStateChangeSuccess);
	    $rootScope.$on('$stateNotFound', onStateNotFound);
	    $rootScope.$on('$stateChangeError', onStateChangeError);
	    function onStateChangeStart(event, toState, toParams, fromState, fromParams) { }
	    function onStateChangeSuccess(event, toState, toParams, fromState, fromParams) { }
	    function onStateNotFound(event, unfoundState, fromState, fromParams) { }
	    function onStateChangeError(event, toState, toParams, fromState, fromParams, error) { }
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Run;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Router.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Router($stateProvider, $urlRouterProvider) {
	    $urlRouterProvider
	        .otherwise("/");
	    $stateProvider
	        .state('main', {
	        url: '/',
	        template: __webpack_require__(9)
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Router;


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<!-- warpper for login directive-->\n<main></main>";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:200);", ""]);
	exports.push([module.id, "@import url(https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.css);", ""]);
	exports.push([module.id, "@import url(https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css);", ""]);

	// module
	exports.push([module.id, "body {\n  margin: 0;\n  padding: 0;\n  color: white !important;\n  background-color: #62c1f2;\n  font-family: 'Source Sans Pro', sans-serif !important; }\n\n.container {\n  width: 360px;\n  padding: 10px;\n  height: 350px; }\n", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var main_service_1 = __webpack_require__(15);
	var data_service_1 = __webpack_require__(16);
	var MainModule = __webpack_require__(17);
	angular.module('app')
	    .service('MainService', main_service_1.MainService)
	    .service('DataService', data_service_1.DataService)
	    .directive('main', MainModule.directive)
	    .controller('MainController', MainModule.controller);


/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	var MainService = (function () {
	    function MainService(DataService) {
	        this.DataService = DataService;
	    }
	    MainService.prototype.getCity = function (postData) {
	        return this.DataService.getCity(postData).then(function (response) {
	            return response.results[0].address_components[3].long_name;
	        });
	    };
	    MainService.prototype.getWeather = function (postData) {
	        return this.DataService.getWeather(postData).then(function (response) {
	            return response;
	        });
	    };
	    MainService.prototype.generateIcon = function (time, weather) {
	        var icon;
	        var timeOfDay = (time > 6 && time < 18) ? 'dayTime' : 'nightTime';
	        if (timeOfDay == 'dayTime') {
	            switch (weather) {
	                case 'Clear':
	                    icon = "wi-day-sunny";
	                    break;
	                case 'Clouds':
	                    icon = "wi-day-cloudy";
	                    break;
	                case 'Drizzle':
	                    icon = "wi-day-showers";
	                    break;
	                case 'Rain':
	                    icon = "wi-day-rain";
	                    break;
	                case 'Extreme':
	                case 'Additional':
	                case 'Thunderstorm':
	                    icon = "wi-day-thunderstorm";
	                    break;
	                case 'Snow':
	                    icon = "wi-day-snow";
	                    break;
	                case 'Mist':
	                case 'Smoke':
	                case 'Haze':
	                case 'Sand, Dust whirls':
	                case 'Fog':
	                case 'Sand':
	                case 'Dust':
	                case 'Vocanic ash':
	                case 'Squalls':
	                case 'Tornado':
	                case 'Atmosphere':
	                    icon = "wi-day-fog";
	                    break;
	            }
	        }
	        else {
	            switch (weather) {
	                case 'Clear':
	                    icon = "wi-night-clear";
	                    break;
	                case 'Clouds':
	                    icon = "wi-night-alt-cloudy";
	                    break;
	                case 'Drizzle':
	                    icon = "wi-night-alt-showers";
	                    break;
	                case 'Rain':
	                    icon = "wi-night-alt-rain";
	                    break;
	                case 'Extreme':
	                case 'Additional':
	                case 'Thunderstorm':
	                    icon = "wi-night-alt-thunderstorm";
	                    break;
	                case 'Snow':
	                    icon = "wi-night-alt-snow";
	                    break;
	                case 'Mist':
	                case 'Smoke':
	                case 'Haze':
	                case 'Sand, Dust whirls':
	                case 'Fog':
	                case 'Sand':
	                case 'Dust':
	                case 'Vocanic ash':
	                case 'Squalls':
	                case 'Tornado':
	                case 'Atmosphere':
	                    icon = "wi-night-fog";
	                    break;
	            }
	        }
	        return icon;
	    };
	    MainService.$inject = ['DataService'];
	    return MainService;
	}());
	exports.MainService = MainService;


/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	var DataService = (function () {
	    function DataService($http, $q) {
	        this.$http = $http;
	        this.$q = $q;
	        this.openweathermap = 'http://api.openweathermap.org/data/2.5/weather';
	    }
	    DataService.prototype.request = function (method, url, body) {
	        return this.$http[method](url, body).then(function (response) {
	            return response.data;
	        }, function (error) {
	            return error;
	        });
	    };
	    DataService.prototype.getCity = function (postData) {
	        var geocodingURL = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + postData.latitude + '%2C' + postData.longitude + '&language=en';
	        return this.request('get', geocodingURL, null);
	    };
	    DataService.prototype.getWeather = function (postData) {
	        var url = this.openweathermap + '?q=' + postData.city + '&units=metric&APPID=' + postData.key;
	        return this.request('get', url, null);
	    };
	    DataService.$inject = ['$http', '$q'];
	    return DataService;
	}());
	exports.DataService = DataService;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(18);
	var main_directive_1 = __webpack_require__(20);
	var main_controller_1 = __webpack_require__(22);
	var directive = main_directive_1.MainDirective.factory;
	exports.directive = directive;
	var controller = main_controller_1.MainController;
	exports.controller = controller;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./../../../../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./../../../../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports


	// module
	exports.push([module.id, ".today {\n  background-color: #62c1f2;\n  color: white;\n  padding: 10px; }\n  .today ul {\n    padding: 0px; }\n    .today ul li {\n      list-style: none; }\n  .today h3 {\n    margin-bottom: 25px; }\n  .today .wind {\n    font-size: 1em;\n    margin-top: 10px; }\n  .today .icon {\n    font-size: 6em;\n    margin-top: 100px;\n    margin-left: -40px; }\n  .today .temp {\n    font-size: 3em;\n    margin-top: 20px; }\n  .today .description {\n    text-transform: capitalize;\n    font-size: 1.2em; }\n\n.forecast {\n  height: 100px; }\n\n.weather {\n  text-align: center;\n  margin-top: -10px; }\n  .weather h2 {\n    font-size: 4em;\n    margin-bottom: 0px; }\n  .weather span {\n    font-size: 1.5em;\n    text-transform: capitalize; }\n  .weather .icon {\n    font-size: 1.3em;\n    padding-bottom: 10px; }\n\n.clock {\n  text-align: center;\n  padding-right: 10px; }\n  .clock i {\n    font-size: 1.5em; }\n\n.loader {\n  height: 350px;\n  width: 60%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .loader div {\n    text-align: center;\n    width: 50%; }\n    .loader div i {\n      font-size: 2em; }\n\n.additional-info {\n  text-align: left;\n  margin-left: 5%; }\n  .additional-info ul li {\n    float: left;\n    list-style: none;\n    font-size: 1.1em;\n    padding: .5em;\n    margin-top: 20px; }\n\n.spinner {\n  width: 70px;\n  text-align: center; }\n\n.spinner > div {\n  width: 18px;\n  height: 18px;\n  background-color: white;\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both; }\n\n.spinner .bounce1 {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s; }\n\n.spinner .bounce2 {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s; }\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1); } }\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n", ""]);

	// exports


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var MainDirective = (function () {
	    function MainDirective() {
	        var deps = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            deps[_i - 0] = arguments[_i];
	        }
	        this.restrict = 'E';
	        this.template = __webpack_require__(21);
	        this.controller = 'MainController';
	        this.controllerAs = 'vm';
	        this.bindToController = true;
	    }
	    MainDirective.factory = function () {
	        var deps = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            deps[_i - 0] = arguments[_i];
	        }
	        return new (MainDirective.bind.apply(MainDirective, [void 0].concat(deps)))();
	    };
	    return MainDirective;
	}());
	exports.MainDirective = MainDirective;
	// Dependency Injection
	MainDirective.factory.$inject = [];


/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">\n  <div class=\"container-item\">\n        <div ng-show=\"vm.city.name\">\n            <div class=\"pull-left\">\n                <h4>{{vm.city.name}}, {{vm.city.sys.country}}</h4>\n                <span>{{vm.date | date:'EEEE'}}</span>\n            </div>\n            <div class=\"pull-right clock\">\n                <i class=\"wi wi-time-9\"></i>\n                <p>{{vm.date | date:'HH:mm'}}</p>\n            </div>\n            <div style=\"clear:both\"></div>\n            <div class=\"weather\">\n                <h2>\n                    <i class=\"icon wi {{vm.city.weather[0].flat_icon}}\"></i>\n                    <div>{{vm.city.main.temp | number:0}}&deg;C</div>\n                </h2>\n                <span>{{vm.city.weather[0].description}}</span>\n            </div>\n          <div class=\"additional-info\">\n            <ul>\n              <li>Humidity : {{vm.city.main.humidity}}%</li>\n              <li>Wind : {{vm.city.wind.speed}} km/p</li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"loader\" ng-hide=\"vm.city.name\">\n          <div class=\"spinner\">\n            <div class=\"bounce1\"></div>\n            <div class=\"bounce2\"></div>\n            <div class=\"bounce3\"></div>\n          </div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	var MainController = (function () {
	    function MainController($scope, MainService) {
	        this.$scope = $scope;
	        this.MainService = MainService;
	        this.date = new Date();
	        this.city = {};
	        this.postData = {
	            key: '69064eda2d85390c651ee175825f2a5e',
	            latitude: '',
	            longitude: '',
	            city: ''
	        };
	    }
	    MainController.prototype.$onInit = function () {
	        console.log('main controller');
	        if (navigator.geolocation) {
	            navigator.geolocation.getCurrentPosition(this.getLocation.bind(this));
	        }
	        else {
	            this.message = "Geolocation is not supported by this browser.";
	        }
	    };
	    MainController.prototype.getLocation = function (position) {
	        var _this = this;
	        this.postData.latitude = position.coords.latitude;
	        this.postData.longitude = position.coords.longitude;
	        this.MainService.getCity(this.postData).then(function (city) {
	            return city;
	        }).then(function (city) {
	            _this.postData.city = city;
	            return _this.MainService.getWeather(_this.postData).then(function (response) {
	                return response;
	            });
	        }).then(function (data) {
	            data.weather[0].flat_icon = _this.MainService.generateIcon(_this.date.getHours(), data.weather[0].main);
	            return data;
	        }).then(function (data) {
	            _this.city = data;
	        });
	    };
	    MainController.$inject = ['$scope', 'MainService'];
	    return MainController;
	}());
	exports.MainController = MainController;


/***/ }
]);