(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.p2 = {}));
}(this, (function (exports) { 'use strict';

	const a = '2';

	exports.a = a;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
