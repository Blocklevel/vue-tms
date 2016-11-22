(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _template = __webpack_require__(2);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var install = function install(Vue) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  Vue.component('vue-grid', {
	    template: _template2.default,
	    data: function data() {
	      return {
	        grid: [],
	        w: 0,
	        h: 0
	      };
	    },
	    mounted: function mounted() {
	      this.grid = JSON.parse('[["rgba(179,27,39,255)","rgba(230,76,46,255)","rgba(242,194,48,255)","rgba(48,120,191,255)","rgba(37,71,111,255)","rgba(179,27,39,255)","rgba(230,76,46,255)","rgba(48,191,191,255)","rgba(48,120,191,255)","rgba(32,56,128,255)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)"],["rgba(242,194,48,255)","rgba(32,56,128,255)","rgba(148,118,42,255)","rgba(242,194,48,255)","rgba(24,34,68,255)","rgba(249,225,72,255)","rgba(48,120,191,255)","rgba(101,26,30,255)","rgba(32,56,128,255)","rgba(230,76,46,255)","rgba(48,120,191,255)","rgba(0,0,0,0)","rgba(0,0,0,0)"],["rgba(139,54,40,255)","rgba(48,120,191,255)","rgba(48,191,191,255)","rgba(230,76,46,255)","rgba(37,111,111,255)","rgba(48,191,191,255)","rgba(179,27,39,255)","rgba(37,71,111,255)","rgba(48,191,191,255)","rgba(179,27,39,255)","rgba(32,56,128,255)","rgba(230,76,46,255)","rgba(0,0,0,0)"],["rgba(48,120,191,255)","rgba(230,76,46,255)","rgba(48,120,191,255)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(32,56,128,255)","rgba(242,194,48,255)","rgba(139,54,40,255)","rgba(48,120,191,255)"],["rgba(101,26,30,255)","rgba(32,56,128,255)","rgba(242,194,48,255)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(48,191,191,255)","rgba(37,71,111,255)","rgba(24,34,68,255)"],["rgba(230,76,46,255)","rgba(24,34,68,255)","rgba(179,27,39,255)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(139,54,40,255)","rgba(230,76,46,255)","rgba(242,194,48,255)"],["rgba(48,120,191,255)","rgba(230,76,46,255)","rgba(48,191,191,255)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(48,120,191,255)","rgba(148,118,42,255)","rgba(179,27,39,255)","rgba(48,191,191,255)"],["rgba(32,56,128,255)","rgba(242,194,48,255)","rgba(48,120,191,255)","rgba(230,76,46,255)","rgba(179,27,39,255)","rgba(32,56,128,255)","rgba(48,191,191,255)","rgba(242,194,48,255)","rgba(37,111,111,255)","rgba(101,26,30,255)","rgba(230,76,46,255)","rgba(48,120,191,255)","rgba(0,0,0,0)"],["rgba(179,27,39,255)","rgba(37,71,111,255)","rgba(242,194,48,255)","rgba(32,56,128,255)","rgba(48,191,191,255)","rgba(230,76,46,255)","rgba(37,71,111,255)","rgba(48,120,191,255)","rgba(179,27,39,255)","rgba(48,120,191,255)","rgba(48,191,191,255)","rgba(0,0,0,0)","rgba(0,0,0,0)"],["rgba(48,191,191,255)","rgba(48,120,191,255)","rgba(24,34,68,255)","rgba(179,27,39,255)","rgba(101,26,30,255)","rgba(48,120,191,255)","rgba(37,111,111,255)","rgba(24,34,68,255)","rgba(230,76,46,255)","rgba(32,56,128,255)","rgba(48,120,191,255)","rgba(179,27,39,255)","rgba(0,0,0,0)"],["rgba(230,76,46,255)","rgba(242,194,48,255)","rgba(32,56,128,255)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(242,194,48,255)","rgba(230,76,46,255)","rgba(148,118,42,255)","rgba(32,56,128,255)"],["rgba(48,120,191,255)","rgba(48,191,191,255)","rgba(242,194,48,255)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(101,26,30,255)","rgba(242,194,48,255)","rgba(48,191,191,255)"],["rgba(139,54,40,255)","rgba(179,27,39,255)","rgba(230,76,46,255)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(37,111,111,255)","rgba(32,56,128,255)","rgba(48,120,191,255)"],["rgba(242,194,48,255)","rgba(32,56,128,255)","rgba(37,111,111,255)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(230,76,46,255)","rgba(48,191,191,255)","rgba(37,71,111,255)","rgba(230,76,46,255)"],["rgba(32,56,128,255)","rgba(148,118,42,255)","rgba(48,191,191,255)","rgba(48,120,191,255)","rgba(242,194,48,255)","rgba(230,76,46,255)","rgba(139,54,40,255)","rgba(37,111,111,255)","rgba(48,191,191,255)","rgba(48,120,191,255)","rgba(242,194,48,255)","rgba(179,27,39,255)","rgba(0,0,0,0)"],["rgba(230,76,46,255)","rgba(179,27,39,255)","rgba(242,194,48,255)","rgba(32,56,128,255)","rgba(139,54,40,255)","rgba(24,34,68,255)","rgba(48,120,191,255)","rgba(48,191,191,255)","rgba(242,194,48,255)","rgba(24,34,68,255)","rgba(32,56,128,255)","rgba(0,0,0,0)","rgba(0,0,0,0)"],["rgba(48,120,191,255)","rgba(242,194,48,255)","rgba(48,191,191,255)","rgba(179,27,39,255)","rgba(48,191,191,255)","rgba(242,194,48,255)","rgba(148,118,42,255)","rgba(37,71,111,255)","rgba(101,26,30,255)","rgba(48,120,191,255)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)"]]');
	      this.w = this.grid[0].length;
	      this.h = this.grid.length;
	      console.log(this.h, this.w);

	      this.prettyPrint();
	    },

	    computed: {
	      width: function width() {
	        return 100 / this.w + '%';
	      },
	      height: function height() {
	        return 100 / this.h + '%';
	      }
	    },
	    methods: {
	      x: function x(i) {
	        return i * 100 / this.w + '%';
	      },
	      y: function y(j) {
	        return j * 100 / this.h + '%';
	      },
	      color: function color(j, i) {
	        return this.grid[j][i];
	      },
	      label: function label(j, i) {
	        return '';
	      },
	      prettyPrint: function prettyPrint() {},
	      getRowOfLength: function getRowOfLength(count) {
	        var row = [];
	        while (count--) {
	          row.push(0);
	        }return row;
	      }
	    }
	  });
	};

	exports.default = { install: install };

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = "<div class=\"grid\">\r\n  <div class=\"row\" v-for=\"(row, j) in grid\" v-if=\"grid.length\">\r\n    <div class=\"column\" style=\"position:absolute;\" :style=\"{ backgroundColor:color(j,i), height:height, top:y(j), left:x(i), width: width }\" v-for=\"(column, i) in row\">\r\n      {{label(j,i)}}\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ }
/******/ ])
});
;