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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var vm = new Vue({
    el: "#app",
    data: {
        // 所有的属性都会放在vue的实例上；
        todos: [{ isSelected: false, title: '睡觉' }, { isSelected: false, title: '吃饭' }],
        title: "", // 利用v-model进行双向数据绑定；
        hash: "",
        cur: ""
    },
    directives: {
        focus: function focus(el) {
            el.focus();
        }
    },
    created: function created() {
        var _this = this;

        // 当页面的hash值发生变化，会触发这个事件行为；根据当前页面的hash值，来得到最新的hash;
        this.hash = "#all";
        window.addEventListener("hashchange", function () {
            //console.log(window.location.hash);
            _this.hash = window.location.hash;
        });
    },

    methods: {
        add: function add() {
            // this --->vue的实例
            this.todos.unshift({
                isSelected: false,
                title: this.title
            });
            this.title = "";
        },
        remove: function remove(val) {
            // 只留下那些不相等的；当不相等时过滤出来，相等的不要；
            this.todos = this.todos.filter(function (item) {
                return item !== val;
            });
        },
        remember: function remember(val) {
            this.cur = val; // 点击时，将当前的todo赋值给data中的cur属性；
        },
        cancel: function cancel() {
            this.cur = "";
        }
    },
    computed: {
        filterTodo: function filterTodo() {
            // 这个属性的属性值是根据页面hash值，来得到不同的值；
            if (this.hash === "#all" || this.hash === "") return this.todos;
            // 把todo中对象isSelected 是true返回；过滤出来；
            if (this.hash === "#finish") return this.todos.filter(function (item) {
                return item.isSelected;
            });
            if (this.hash === "#unfinish") return this.todos.filter(function (item) {
                return !item.isSelected;
            });
        },
        count: function count() {
            return this.todos.filter(function (item) {
                return !item.isSelected;
            }).length;
        }
    }
});

/***/ })
/******/ ]);