(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["webIM"] = factory();
	else
		root["webIM"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 339);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(22);
var hide = __webpack_require__(12);
var redefine = __webpack_require__(13);
var ctx = __webpack_require__(19);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(61)('wks');
var uid = __webpack_require__(42);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(3)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(1);
var IE8_DOM_DEFINE = __webpack_require__(100);
var toPrimitive = __webpack_require__(26);
var dP = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(25);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(23);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var createDesc = __webpack_require__(38);
module.exports = __webpack_require__(6) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var hide = __webpack_require__(12);
var has = __webpack_require__(11);
var SRC = __webpack_require__(42)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(22).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var fails = __webpack_require__(3);
var defined = __webpack_require__(23);
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(49);
var createDesc = __webpack_require__(38);
var toIObject = __webpack_require__(17);
var toPrimitive = __webpack_require__(26);
var has = __webpack_require__(11);
var IE8_DOM_DEFINE = __webpack_require__(100);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(11);
var toObject = __webpack_require__(9);
var IE_PROTO = __webpack_require__(80)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(48);
var defined = __webpack_require__(23);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(10);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(3);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(19);
var IObject = __webpack_require__(48);
var toObject = __webpack_require__(9);
var toLength = __webpack_require__(8);
var asc = __webpack_require__(65);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(0);
var core = __webpack_require__(22);
var fails = __webpack_require__(3);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(4);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var Map = __webpack_require__(121);
var $export = __webpack_require__(0);
var shared = __webpack_require__(61)('metadata');
var store = shared.store || (shared.store = new (__webpack_require__(124))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (__webpack_require__(6)) {
  var LIBRARY = __webpack_require__(34);
  var global = __webpack_require__(2);
  var fails = __webpack_require__(3);
  var $export = __webpack_require__(0);
  var $typed = __webpack_require__(63);
  var $buffer = __webpack_require__(86);
  var ctx = __webpack_require__(19);
  var anInstance = __webpack_require__(32);
  var propertyDesc = __webpack_require__(38);
  var hide = __webpack_require__(12);
  var redefineAll = __webpack_require__(39);
  var toInteger = __webpack_require__(25);
  var toLength = __webpack_require__(8);
  var toIndex = __webpack_require__(119);
  var toAbsoluteIndex = __webpack_require__(41);
  var toPrimitive = __webpack_require__(26);
  var has = __webpack_require__(11);
  var classof = __webpack_require__(47);
  var isObject = __webpack_require__(4);
  var toObject = __webpack_require__(9);
  var isArrayIter = __webpack_require__(72);
  var create = __webpack_require__(35);
  var getPrototypeOf = __webpack_require__(16);
  var gOPN = __webpack_require__(36).f;
  var getIterFn = __webpack_require__(88);
  var uid = __webpack_require__(42);
  var wks = __webpack_require__(5);
  var createArrayMethod = __webpack_require__(21);
  var createArrayIncludes = __webpack_require__(50);
  var speciesConstructor = __webpack_require__(62);
  var ArrayIterators = __webpack_require__(89);
  var Iterators = __webpack_require__(43);
  var $iterDetect = __webpack_require__(56);
  var setSpecies = __webpack_require__(40);
  var arrayFill = __webpack_require__(64);
  var arrayCopyWithin = __webpack_require__(92);
  var $DP = __webpack_require__(7);
  var $GOPD = __webpack_require__(15);
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(5)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(12)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(42)('meta');
var isObject = __webpack_require__(4);
var has = __webpack_require__(11);
var setDesc = __webpack_require__(7).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(3)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
registerGlobals();
exports.extras = {
    allowStateChanges: allowStateChanges,
    deepEqual: deepEqual,
    getAtom: getAtom,
    getDebugName: getDebugName,
    getDependencyTree: getDependencyTree,
    getAdministration: getAdministration,
    getGlobalState: getGlobalState,
    getObserverTree: getObserverTree,
    isComputingDerivation: isComputingDerivation,
    isSpyEnabled: isSpyEnabled,
    onReactionError: onReactionError,
    reserveArrayBuffer: reserveArrayBuffer,
    resetGlobalState: resetGlobalState,
    shareGlobalState: shareGlobalState,
    spyReport: spyReport,
    spyReportEnd: spyReportEnd,
    spyReportStart: spyReportStart,
    setReactionScheduler: setReactionScheduler
};
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx(module.exports);
}
module.exports.default = module.exports;
var actionFieldDecorator = createClassPropertyDecorator(function (target, key, value, args, originalDescriptor) {
    var actionName = (args && args.length === 1) ? args[0] : (value.name || key || "<unnamed action>");
    var wrappedAction = action(actionName, value);
    addHiddenProp(target, key, wrappedAction);
}, function (key) {
    return this[key];
}, function () {
    invariant(false, getMessage("m001"));
}, false, true);
var boundActionDecorator = createClassPropertyDecorator(function (target, key, value) {
    defineBoundAction(target, key, value);
}, function (key) {
    return this[key];
}, function () {
    invariant(false, getMessage("m001"));
}, false, false);
var action = function action(arg1, arg2, arg3, arg4) {
    if (arguments.length === 1 && typeof arg1 === "function")
        return createAction(arg1.name || "<unnamed action>", arg1);
    if (arguments.length === 2 && typeof arg2 === "function")
        return createAction(arg1, arg2);
    if (arguments.length === 1 && typeof arg1 === "string")
        return namedActionDecorator(arg1);
    return namedActionDecorator(arg2).apply(null, arguments);
};
exports.action = action;
action.bound = function boundAction(arg1, arg2, arg3) {
    if (typeof arg1 === "function") {
        var action_1 = createAction("<not yet bound action>", arg1);
        action_1.autoBind = true;
        return action_1;
    }
    return boundActionDecorator.apply(null, arguments);
};
function namedActionDecorator(name) {
    return function (target, prop, descriptor) {
        if (descriptor && typeof descriptor.value === "function") {
            descriptor.value = createAction(name, descriptor.value);
            descriptor.enumerable = false;
            descriptor.configurable = true;
            return descriptor;
        }
        return actionFieldDecorator(name).apply(this, arguments);
    };
}
function runInAction(arg1, arg2, arg3) {
    var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
    var fn = typeof arg1 === "function" ? arg1 : arg2;
    var scope = typeof arg1 === "function" ? arg2 : arg3;
    invariant(typeof fn === "function", getMessage("m002"));
    invariant(fn.length === 0, getMessage("m003"));
    invariant(typeof actionName === "string" && actionName.length > 0, "actions should have valid names, got: '" + actionName + "'");
    return executeAction(actionName, fn, scope, undefined);
}
exports.runInAction = runInAction;
function isAction(thing) {
    return typeof thing === "function" && thing.isMobxAction === true;
}
exports.isAction = isAction;
function defineBoundAction(target, propertyName, fn) {
    var res = function () {
        return executeAction(propertyName, fn, target, arguments);
    };
    res.isMobxAction = true;
    addHiddenProp(target, propertyName, res);
}
function autorun(arg1, arg2, arg3) {
    var name, view, scope;
    if (typeof arg1 === "string") {
        name = arg1;
        view = arg2;
        scope = arg3;
    }
    else {
        name = arg1.name || ("Autorun@" + getNextId());
        view = arg1;
        scope = arg2;
    }
    invariant(typeof view === "function", getMessage("m004"));
    invariant(isAction(view) === false, getMessage("m005"));
    if (scope)
        view = view.bind(scope);
    var reaction = new Reaction(name, function () {
        this.track(reactionRunner);
    });
    function reactionRunner() {
        view(reaction);
    }
    reaction.schedule();
    return reaction.getDisposer();
}
exports.autorun = autorun;
function when(arg1, arg2, arg3, arg4) {
    var name, predicate, effect, scope;
    if (typeof arg1 === "string") {
        name = arg1;
        predicate = arg2;
        effect = arg3;
        scope = arg4;
    }
    else {
        name = ("When@" + getNextId());
        predicate = arg1;
        effect = arg2;
        scope = arg3;
    }
    var disposer = autorun(name, function (r) {
        if (predicate.call(scope)) {
            r.dispose();
            var prevUntracked = untrackedStart();
            effect.call(scope);
            untrackedEnd(prevUntracked);
        }
    });
    return disposer;
}
exports.when = when;
function autorunAsync(arg1, arg2, arg3, arg4) {
    var name, func, delay, scope;
    if (typeof arg1 === "string") {
        name = arg1;
        func = arg2;
        delay = arg3;
        scope = arg4;
    }
    else {
        name = arg1.name || ("AutorunAsync@" + getNextId());
        func = arg1;
        delay = arg2;
        scope = arg3;
    }
    invariant(isAction(func) === false, getMessage("m006"));
    if (delay === void 0)
        delay = 1;
    if (scope)
        func = func.bind(scope);
    var isScheduled = false;
    var r = new Reaction(name, function () {
        if (!isScheduled) {
            isScheduled = true;
            setTimeout(function () {
                isScheduled = false;
                if (!r.isDisposed)
                    r.track(reactionRunner);
            }, delay);
        }
    });
    function reactionRunner() { func(r); }
    r.schedule();
    return r.getDisposer();
}
exports.autorunAsync = autorunAsync;
function reaction(expression, effect, arg3) {
    if (arguments.length > 3) {
        fail(getMessage("m007"));
    }
    if (isModifierDescriptor(expression)) {
        fail(getMessage("m008"));
    }
    var opts;
    if (typeof arg3 === "object") {
        opts = arg3;
    }
    else {
        opts = {};
    }
    opts.name = opts.name || expression.name || effect.name || ("Reaction@" + getNextId());
    opts.fireImmediately = arg3 === true || opts.fireImmediately === true;
    opts.delay = opts.delay || 0;
    opts.compareStructural = opts.compareStructural || opts.struct || false;
    effect = action(opts.name, opts.context ? effect.bind(opts.context) : effect);
    if (opts.context) {
        expression = expression.bind(opts.context);
    }
    var firstTime = true;
    var isScheduled = false;
    var nextValue;
    var r = new Reaction(opts.name, function () {
        if (firstTime || opts.delay < 1) {
            reactionRunner();
        }
        else if (!isScheduled) {
            isScheduled = true;
            setTimeout(function () {
                isScheduled = false;
                reactionRunner();
            }, opts.delay);
        }
    });
    function reactionRunner() {
        if (r.isDisposed)
            return;
        var changed = false;
        r.track(function () {
            var v = expression(r);
            changed = valueDidChange(opts.compareStructural, nextValue, v);
            nextValue = v;
        });
        if (firstTime && opts.fireImmediately)
            effect(nextValue, r);
        if (!firstTime && changed === true)
            effect(nextValue, r);
        if (firstTime)
            firstTime = false;
    }
    r.schedule();
    return r.getDisposer();
}
exports.reaction = reaction;
function createComputedDecorator(compareStructural) {
    return createClassPropertyDecorator(function (target, name, _, __, originalDescriptor) {
        invariant(typeof originalDescriptor !== "undefined", getMessage("m009"));
        invariant(typeof originalDescriptor.get === "function", getMessage("m010"));
        var adm = asObservableObject(target, "");
        defineComputedProperty(adm, name, originalDescriptor.get, originalDescriptor.set, compareStructural, false);
    }, function (name) {
        var observable = this.$mobx.values[name];
        if (observable === undefined)
            return undefined;
        return observable.get();
    }, function (name, value) {
        this.$mobx.values[name].set(value);
    }, false, false);
}
var computedDecorator = createComputedDecorator(false);
var computedStructDecorator = createComputedDecorator(true);
var computed = (function computed(arg1, arg2, arg3) {
    if (typeof arg2 === "string") {
        return computedDecorator.apply(null, arguments);
    }
    invariant(typeof arg1 === "function", getMessage("m011"));
    invariant(arguments.length < 3, getMessage("m012"));
    var opts = typeof arg2 === "object" ? arg2 : {};
    opts.setter = typeof arg2 === "function" ? arg2 : opts.setter;
    return new ComputedValue(arg1, opts.context, opts.compareStructural || opts.struct || false, opts.name || arg1.name || "", opts.setter);
});
exports.computed = computed;
computed.struct = computedStructDecorator;
function createTransformer(transformer, onCleanup) {
    invariant(typeof transformer === "function" && transformer.length < 2, "createTransformer expects a function that accepts one argument");
    var objectCache = {};
    var resetId = globalState.resetId;
    var Transformer = (function (_super) {
        __extends(Transformer, _super);
        function Transformer(sourceIdentifier, sourceObject) {
            var _this = _super.call(this, function () { return transformer(sourceObject); }, undefined, false, "Transformer-" + transformer.name + "-" + sourceIdentifier, undefined) || this;
            _this.sourceIdentifier = sourceIdentifier;
            _this.sourceObject = sourceObject;
            return _this;
        }
        Transformer.prototype.onBecomeUnobserved = function () {
            var lastValue = this.value;
            _super.prototype.onBecomeUnobserved.call(this);
            delete objectCache[this.sourceIdentifier];
            if (onCleanup)
                onCleanup(lastValue, this.sourceObject);
        };
        return Transformer;
    }(ComputedValue));
    return function (object) {
        if (resetId !== globalState.resetId) {
            objectCache = {};
            resetId = globalState.resetId;
        }
        var identifier = getMemoizationId(object);
        var reactiveTransformer = objectCache[identifier];
        if (reactiveTransformer)
            return reactiveTransformer.get();
        reactiveTransformer = objectCache[identifier] = new Transformer(identifier, object);
        return reactiveTransformer.get();
    };
}
exports.createTransformer = createTransformer;
function getMemoizationId(object) {
    if (typeof object === 'string' || typeof object === 'number')
        return object;
    if (object === null || typeof object !== "object")
        throw new Error("[mobx] transform expected some kind of object or primitive value, got: " + object);
    var tid = object.$transformId;
    if (tid === undefined) {
        tid = getNextId();
        addHiddenProp(object, "$transformId", tid);
    }
    return tid;
}
function expr(expr, scope) {
    if (!isComputingDerivation())
        console.warn(getMessage("m013"));
    return computed(expr, { context: scope }).get();
}
exports.expr = expr;
function extendObservable(target) {
    var properties = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        properties[_i - 1] = arguments[_i];
    }
    return extendObservableHelper(target, deepEnhancer, properties);
}
exports.extendObservable = extendObservable;
function extendShallowObservable(target) {
    var properties = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        properties[_i - 1] = arguments[_i];
    }
    return extendObservableHelper(target, referenceEnhancer, properties);
}
exports.extendShallowObservable = extendShallowObservable;
function extendObservableHelper(target, defaultEnhancer, properties) {
    invariant(arguments.length >= 2, getMessage("m014"));
    invariant(typeof target === "object", getMessage("m015"));
    invariant(!(isObservableMap(target)), getMessage("m016"));
    properties.forEach(function (propSet) {
        invariant(typeof propSet === "object", getMessage("m017"));
        invariant(!isObservable(propSet), getMessage("m018"));
    });
    var adm = asObservableObject(target);
    var definedProps = {};
    for (var i = properties.length - 1; i >= 0; i--) {
        var propSet = properties[i];
        for (var key in propSet)
            if (definedProps[key] !== true && hasOwnProperty(propSet, key)) {
                definedProps[key] = true;
                if (target === propSet && !isPropertyConfigurable(target, key))
                    continue;
                var descriptor = Object.getOwnPropertyDescriptor(propSet, key);
                defineObservablePropertyFromDescriptor(adm, key, descriptor, defaultEnhancer);
            }
    }
    return target;
}
function getDependencyTree(thing, property) {
    return nodeToDependencyTree(getAtom(thing, property));
}
function nodeToDependencyTree(node) {
    var result = {
        name: node.name
    };
    if (node.observing && node.observing.length > 0)
        result.dependencies = unique(node.observing).map(nodeToDependencyTree);
    return result;
}
function getObserverTree(thing, property) {
    return nodeToObserverTree(getAtom(thing, property));
}
function nodeToObserverTree(node) {
    var result = {
        name: node.name
    };
    if (hasObservers(node))
        result.observers = getObservers(node).map(nodeToObserverTree);
    return result;
}
function intercept(thing, propOrHandler, handler) {
    if (typeof handler === "function")
        return interceptProperty(thing, propOrHandler, handler);
    else
        return interceptInterceptable(thing, propOrHandler);
}
exports.intercept = intercept;
function interceptInterceptable(thing, handler) {
    return getAdministration(thing).intercept(handler);
}
function interceptProperty(thing, property, handler) {
    return getAdministration(thing, property).intercept(handler);
}
function isComputed(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (isObservableObject(value) === false)
            return false;
        var atom = getAtom(value, property);
        return isComputedValue(atom);
    }
    return isComputedValue(value);
}
exports.isComputed = isComputed;
function isObservable(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (isObservableArray(value) || isObservableMap(value))
            throw new Error(getMessage("m019"));
        else if (isObservableObject(value)) {
            var o = value.$mobx;
            return o.values && !!o.values[property];
        }
        return false;
    }
    return isObservableObject(value) || !!value.$mobx || isAtom(value) || isReaction(value) || isComputedValue(value);
}
exports.isObservable = isObservable;
var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
var deepStructDecorator = createDecoratorForEnhancer(deepStructEnhancer);
var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
function createObservable(v) {
    if (v === void 0) { v = undefined; }
    if (typeof arguments[1] === "string")
        return deepDecorator.apply(null, arguments);
    invariant(arguments.length <= 1, getMessage("m021"));
    invariant(!isModifierDescriptor(v), getMessage("m020"));
    if (isObservable(v))
        return v;
    var res = deepEnhancer(v, undefined, undefined);
    if (res !== v)
        return res;
    return observable.box(v);
}
var IObservableFactories = (function () {
    function IObservableFactories() {
    }
    IObservableFactories.prototype.box = function (value, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("box");
        return new ObservableValue(value, deepEnhancer, name);
    };
    IObservableFactories.prototype.shallowBox = function (value, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowBox");
        return new ObservableValue(value, referenceEnhancer, name);
    };
    IObservableFactories.prototype.array = function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("array");
        return new ObservableArray(initialValues, deepEnhancer, name);
    };
    IObservableFactories.prototype.shallowArray = function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowArray");
        return new ObservableArray(initialValues, referenceEnhancer, name);
    };
    IObservableFactories.prototype.map = function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("map");
        return new ObservableMap(initialValues, deepEnhancer, name);
    };
    IObservableFactories.prototype.shallowMap = function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowMap");
        return new ObservableMap(initialValues, referenceEnhancer, name);
    };
    IObservableFactories.prototype.object = function (props, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("object");
        var res = {};
        asObservableObject(res, name);
        extendObservable(res, props);
        return res;
    };
    IObservableFactories.prototype.shallowObject = function (props, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowObject");
        var res = {};
        asObservableObject(res, name);
        extendShallowObservable(res, props);
        return res;
    };
    IObservableFactories.prototype.ref = function () {
        if (arguments.length < 2) {
            return createModifierDescriptor(referenceEnhancer, arguments[0]);
        }
        else {
            return refDecorator.apply(null, arguments);
        }
    };
    IObservableFactories.prototype.shallow = function () {
        if (arguments.length < 2) {
            return createModifierDescriptor(shallowEnhancer, arguments[0]);
        }
        else {
            return shallowDecorator.apply(null, arguments);
        }
    };
    IObservableFactories.prototype.deep = function () {
        if (arguments.length < 2) {
            return createModifierDescriptor(deepEnhancer, arguments[0]);
        }
        else {
            return deepDecorator.apply(null, arguments);
        }
    };
    IObservableFactories.prototype.struct = function () {
        if (arguments.length < 2) {
            return createModifierDescriptor(deepStructEnhancer, arguments[0]);
        }
        else {
            return deepStructDecorator.apply(null, arguments);
        }
    };
    return IObservableFactories;
}());
exports.IObservableFactories = IObservableFactories;
var observable = createObservable;
exports.observable = observable;
Object.keys(IObservableFactories.prototype).forEach(function (key) { return observable[key] = IObservableFactories.prototype[key]; });
observable.deep.struct = observable.struct;
observable.ref.struct = function () {
    if (arguments.length < 2) {
        return createModifierDescriptor(refStructEnhancer, arguments[0]);
    }
    else {
        return refStructDecorator.apply(null, arguments);
    }
};
function incorrectlyUsedAsDecorator(methodName) {
    fail("Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
}
function createDecoratorForEnhancer(enhancer) {
    invariant(!!enhancer, ":(");
    return createClassPropertyDecorator(function (target, name, baseValue, _, baseDescriptor) {
        assertPropertyConfigurable(target, name);
        invariant(!baseDescriptor || !baseDescriptor.get, getMessage("m022"));
        var adm = asObservableObject(target, undefined);
        defineObservableProperty(adm, name, baseValue, enhancer);
    }, function (name) {
        var observable = this.$mobx.values[name];
        if (observable === undefined)
            return undefined;
        return observable.get();
    }, function (name, value) {
        setPropertyValue(this, name, value);
    }, true, false);
}
function observe(thing, propOrCb, cbOrFire, fireImmediately) {
    if (typeof cbOrFire === "function")
        return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
    else
        return observeObservable(thing, propOrCb, cbOrFire);
}
exports.observe = observe;
function observeObservable(thing, listener, fireImmediately) {
    return getAdministration(thing).observe(listener, fireImmediately);
}
function observeObservableProperty(thing, property, listener, fireImmediately) {
    return getAdministration(thing, property).observe(listener, fireImmediately);
}
function toJS(source, detectCycles, __alreadySeen) {
    if (detectCycles === void 0) { detectCycles = true; }
    if (__alreadySeen === void 0) { __alreadySeen = []; }
    function cache(value) {
        if (detectCycles)
            __alreadySeen.push([source, value]);
        return value;
    }
    if (isObservable(source)) {
        if (detectCycles && __alreadySeen === null)
            __alreadySeen = [];
        if (detectCycles && source !== null && typeof source === "object") {
            for (var i = 0, l = __alreadySeen.length; i < l; i++)
                if (__alreadySeen[i][0] === source)
                    return __alreadySeen[i][1];
        }
        if (isObservableArray(source)) {
            var res = cache([]);
            var toAdd = source.map(function (value) { return toJS(value, detectCycles, __alreadySeen); });
            res.length = toAdd.length;
            for (var i = 0, l = toAdd.length; i < l; i++)
                res[i] = toAdd[i];
            return res;
        }
        if (isObservableObject(source)) {
            var res = cache({});
            for (var key in source)
                res[key] = toJS(source[key], detectCycles, __alreadySeen);
            return res;
        }
        if (isObservableMap(source)) {
            var res_1 = cache({});
            source.forEach(function (value, key) { return res_1[key] = toJS(value, detectCycles, __alreadySeen); });
            return res_1;
        }
        if (isObservableValue(source))
            return toJS(source.get(), detectCycles, __alreadySeen);
    }
    return source;
}
exports.toJS = toJS;
function transaction(action, thisArg) {
    if (thisArg === void 0) { thisArg = undefined; }
    deprecated(getMessage("m023"));
    return runInTransaction.apply(undefined, arguments);
}
exports.transaction = transaction;
function runInTransaction(action, thisArg) {
    if (thisArg === void 0) { thisArg = undefined; }
    return executeAction("", action);
}
function log(msg) {
    console.log(msg);
    return msg;
}
function whyRun(thing, prop) {
    switch (arguments.length) {
        case 0:
            thing = globalState.trackingDerivation;
            if (!thing)
                return log(getMessage("m024"));
            break;
        case 2:
            thing = getAtom(thing, prop);
            break;
    }
    thing = getAtom(thing);
    if (isComputedValue(thing))
        return log(thing.whyRun());
    else if (isReaction(thing))
        return log(thing.whyRun());
    return fail(getMessage("m025"));
}
exports.whyRun = whyRun;
function createAction(actionName, fn) {
    invariant(typeof fn === "function", getMessage("m026"));
    invariant(typeof actionName === "string" && actionName.length > 0, "actions should have valid names, got: '" + actionName + "'");
    var res = function () {
        return executeAction(actionName, fn, this, arguments);
    };
    res.originalFn = fn;
    res.isMobxAction = true;
    return res;
}
function executeAction(actionName, fn, scope, args) {
    var runInfo = startAction(actionName, fn, scope, args);
    try {
        return fn.apply(scope, args);
    }
    finally {
        endAction(runInfo);
    }
}
function startAction(actionName, fn, scope, args) {
    var notifySpy = isSpyEnabled() && !!actionName;
    var startTime = 0;
    if (notifySpy) {
        startTime = Date.now();
        var l = (args && args.length) || 0;
        var flattendArgs = new Array(l);
        if (l > 0)
            for (var i = 0; i < l; i++)
                flattendArgs[i] = args[i];
        spyReportStart({
            type: "action",
            name: actionName,
            fn: fn,
            object: scope,
            arguments: flattendArgs
        });
    }
    var prevDerivation = untrackedStart();
    startBatch();
    var prevAllowStateChanges = allowStateChangesStart(true);
    return {
        prevDerivation: prevDerivation,
        prevAllowStateChanges: prevAllowStateChanges,
        notifySpy: notifySpy,
        startTime: startTime
    };
}
function endAction(runInfo) {
    allowStateChangesEnd(runInfo.prevAllowStateChanges);
    endBatch();
    untrackedEnd(runInfo.prevDerivation);
    if (runInfo.notifySpy)
        spyReportEnd({ time: Date.now() - runInfo.startTime });
}
function useStrict(strict) {
    invariant(globalState.trackingDerivation === null, getMessage("m028"));
    globalState.strictMode = strict;
    globalState.allowStateChanges = !strict;
}
exports.useStrict = useStrict;
function isStrictModeEnabled() {
    return globalState.strictMode;
}
exports.isStrictModeEnabled = isStrictModeEnabled;
function allowStateChanges(allowStateChanges, func) {
    var prev = allowStateChangesStart(allowStateChanges);
    var res;
    try {
        res = func();
    }
    finally {
        allowStateChangesEnd(prev);
    }
    return res;
}
function allowStateChangesStart(allowStateChanges) {
    var prev = globalState.allowStateChanges;
    globalState.allowStateChanges = allowStateChanges;
    return prev;
}
function allowStateChangesEnd(prev) {
    globalState.allowStateChanges = prev;
}
var BaseAtom = (function () {
    function BaseAtom(name) {
        if (name === void 0) { name = "Atom@" + getNextId(); }
        this.name = name;
        this.isPendingUnobservation = true;
        this.observers = [];
        this.observersIndexes = {};
        this.diffValue = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.NOT_TRACKING;
    }
    BaseAtom.prototype.onBecomeUnobserved = function () {
    };
    BaseAtom.prototype.reportObserved = function () {
        reportObserved(this);
    };
    BaseAtom.prototype.reportChanged = function () {
        startBatch();
        propagateChanged(this);
        endBatch();
    };
    BaseAtom.prototype.toString = function () {
        return this.name;
    };
    return BaseAtom;
}());
exports.BaseAtom = BaseAtom;
var Atom = (function (_super) {
    __extends(Atom, _super);
    function Atom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
        if (name === void 0) { name = "Atom@" + getNextId(); }
        if (onBecomeObservedHandler === void 0) { onBecomeObservedHandler = noop; }
        if (onBecomeUnobservedHandler === void 0) { onBecomeUnobservedHandler = noop; }
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.onBecomeObservedHandler = onBecomeObservedHandler;
        _this.onBecomeUnobservedHandler = onBecomeUnobservedHandler;
        _this.isPendingUnobservation = false;
        _this.isBeingTracked = false;
        return _this;
    }
    Atom.prototype.reportObserved = function () {
        startBatch();
        _super.prototype.reportObserved.call(this);
        if (!this.isBeingTracked) {
            this.isBeingTracked = true;
            this.onBecomeObservedHandler();
        }
        endBatch();
        return !!globalState.trackingDerivation;
    };
    Atom.prototype.onBecomeUnobserved = function () {
        this.isBeingTracked = false;
        this.onBecomeUnobservedHandler();
    };
    return Atom;
}(BaseAtom));
exports.Atom = Atom;
var isAtom = createInstanceofPredicate("Atom", BaseAtom);
var ComputedValue = (function () {
    function ComputedValue(derivation, scope, compareStructural, name, setter) {
        this.derivation = derivation;
        this.scope = scope;
        this.compareStructural = compareStructural;
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.observing = [];
        this.newObserving = null;
        this.isPendingUnobservation = false;
        this.observers = [];
        this.observersIndexes = {};
        this.diffValue = 0;
        this.runId = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.UP_TO_DATE;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.value = undefined;
        this.isComputing = false;
        this.isRunningSetter = false;
        this.name = name || "ComputedValue@" + getNextId();
        if (setter)
            this.setter = createAction(name + "-setter", setter);
    }
    ComputedValue.prototype.onBecomeStale = function () {
        propagateMaybeChanged(this);
    };
    ComputedValue.prototype.onBecomeUnobserved = function () {
        clearObserving(this);
        this.value = undefined;
    };
    ComputedValue.prototype.get = function () {
        invariant(!this.isComputing, "Cycle detected in computation " + this.name, this.derivation);
        if (globalState.inBatch === 0) {
            startBatch();
            if (shouldCompute(this))
                this.value = this.computeValue(false);
            endBatch();
        }
        else {
            reportObserved(this);
            if (shouldCompute(this))
                if (this.trackAndCompute())
                    propagateChangeConfirmed(this);
        }
        var result = this.value;
        if (isCaughtException(result))
            throw result.cause;
        return result;
    };
    ComputedValue.prototype.peek = function () {
        var res = this.computeValue(false);
        if (isCaughtException(res))
            throw res.cause;
        return res;
    };
    ComputedValue.prototype.set = function (value) {
        if (this.setter) {
            invariant(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
            this.isRunningSetter = true;
            try {
                this.setter.call(this.scope, value);
            }
            finally {
                this.isRunningSetter = false;
            }
        }
        else
            invariant(false, "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.");
    };
    ComputedValue.prototype.trackAndCompute = function () {
        if (isSpyEnabled()) {
            spyReport({
                object: this.scope,
                type: "compute",
                fn: this.derivation
            });
        }
        var oldValue = this.value;
        var newValue = this.value = this.computeValue(true);
        return isCaughtException(newValue) || valueDidChange(this.compareStructural, newValue, oldValue);
    };
    ComputedValue.prototype.computeValue = function (track) {
        this.isComputing = true;
        globalState.computationDepth++;
        var res;
        if (track) {
            res = trackDerivedFunction(this, this.derivation, this.scope);
        }
        else {
            try {
                res = this.derivation.call(this.scope);
            }
            catch (e) {
                res = new CaughtException(e);
            }
        }
        globalState.computationDepth--;
        this.isComputing = false;
        return res;
    };
    ;
    ComputedValue.prototype.observe = function (listener, fireImmediately) {
        var _this = this;
        var firstTime = true;
        var prevValue = undefined;
        return autorun(function () {
            var newValue = _this.get();
            if (!firstTime || fireImmediately) {
                var prevU = untrackedStart();
                listener({
                    type: "update",
                    object: _this,
                    newValue: newValue,
                    oldValue: prevValue
                });
                untrackedEnd(prevU);
            }
            firstTime = false;
            prevValue = newValue;
        });
    };
    ComputedValue.prototype.toJSON = function () {
        return this.get();
    };
    ComputedValue.prototype.toString = function () {
        return this.name + "[" + this.derivation.toString() + "]";
    };
    ComputedValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    ;
    ComputedValue.prototype.whyRun = function () {
        var isTracking = Boolean(globalState.trackingDerivation);
        var observing = unique(this.isComputing ? this.newObserving : this.observing).map(function (dep) { return dep.name; });
        var observers = unique(getObservers(this).map(function (dep) { return dep.name; }));
        return ("\nWhyRun? computation '" + this.name + "':\n * Running because: " + (isTracking ? "[active] the value of this computation is needed by a reaction" : this.isComputing ? "[get] The value of this computed was requested outside a reaction" : "[idle] not running at the moment") + "\n" +
            (this.dependenciesState === IDerivationState.NOT_TRACKING ? getMessage("m032") :
                " * This computation will re-run if any of the following observables changes:\n    " + joinStrings(observing) + "\n    " + ((this.isComputing && isTracking) ? " (... or any observable accessed during the remainder of the current run)" : "") + "\n\t" + getMessage("m038") + "\n\n  * If the outcome of this computation changes, the following observers will be re-run:\n    " + joinStrings(observers) + "\n"));
    };
    return ComputedValue;
}());
ComputedValue.prototype[primitiveSymbol()] = ComputedValue.prototype.valueOf;
var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);
var IDerivationState;
(function (IDerivationState) {
    IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING";
    IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
    IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
})(IDerivationState || (IDerivationState = {}));
exports.IDerivationState = IDerivationState;
var CaughtException = (function () {
    function CaughtException(cause) {
        this.cause = cause;
    }
    return CaughtException;
}());
function isCaughtException(e) {
    return e instanceof CaughtException;
}
function shouldCompute(derivation) {
    switch (derivation.dependenciesState) {
        case IDerivationState.UP_TO_DATE: return false;
        case IDerivationState.NOT_TRACKING:
        case IDerivationState.STALE: return true;
        case IDerivationState.POSSIBLY_STALE: {
            var prevUntracked = untrackedStart();
            var obs = derivation.observing, l = obs.length;
            for (var i = 0; i < l; i++) {
                var obj = obs[i];
                if (isComputedValue(obj)) {
                    try {
                        obj.get();
                    }
                    catch (e) {
                        untrackedEnd(prevUntracked);
                        return true;
                    }
                    if (derivation.dependenciesState === IDerivationState.STALE) {
                        untrackedEnd(prevUntracked);
                        return true;
                    }
                }
            }
            changeDependenciesStateTo0(derivation);
            untrackedEnd(prevUntracked);
            return false;
        }
    }
}
function isComputingDerivation() {
    return globalState.trackingDerivation !== null;
}
function checkIfStateModificationsAreAllowed(atom) {
    var hasObservers = atom.observers.length > 0;
    if (globalState.computationDepth > 0 && hasObservers)
        fail(getMessage("m031") + atom.name);
    if (!globalState.allowStateChanges && hasObservers)
        fail(getMessage(globalState.strictMode ? "m030a" : "m030b") + atom.name);
}
function trackDerivedFunction(derivation, f, context) {
    changeDependenciesStateTo0(derivation);
    derivation.newObserving = new Array(derivation.observing.length + 100);
    derivation.unboundDepsCount = 0;
    derivation.runId = ++globalState.runId;
    var prevTracking = globalState.trackingDerivation;
    globalState.trackingDerivation = derivation;
    var result;
    try {
        result = f.call(context);
    }
    catch (e) {
        result = new CaughtException(e);
    }
    globalState.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    return result;
}
function bindDependencies(derivation) {
    var prevObserving = derivation.observing;
    var observing = derivation.observing = derivation.newObserving;
    var lowestNewObservingDerivationState = IDerivationState.UP_TO_DATE;
    derivation.newObserving = null;
    var i0 = 0, l = derivation.unboundDepsCount;
    for (var i = 0; i < l; i++) {
        var dep = observing[i];
        if (dep.diffValue === 0) {
            dep.diffValue = 1;
            if (i0 !== i)
                observing[i0] = dep;
            i0++;
        }
        if (dep.dependenciesState > lowestNewObservingDerivationState) {
            lowestNewObservingDerivationState = dep.dependenciesState;
        }
    }
    observing.length = i0;
    l = prevObserving.length;
    while (l--) {
        var dep = prevObserving[l];
        if (dep.diffValue === 0) {
            removeObserver(dep, derivation);
        }
        dep.diffValue = 0;
    }
    while (i0--) {
        var dep = observing[i0];
        if (dep.diffValue === 1) {
            dep.diffValue = 0;
            addObserver(dep, derivation);
        }
    }
    if (lowestNewObservingDerivationState !== IDerivationState.UP_TO_DATE) {
        derivation.dependenciesState = lowestNewObservingDerivationState;
        derivation.onBecomeStale();
    }
}
function clearObserving(derivation) {
    var obs = derivation.observing;
    derivation.observing = [];
    var i = obs.length;
    while (i--)
        removeObserver(obs[i], derivation);
    derivation.dependenciesState = IDerivationState.NOT_TRACKING;
}
function untracked(action) {
    var prev = untrackedStart();
    var res = action();
    untrackedEnd(prev);
    return res;
}
exports.untracked = untracked;
function untrackedStart() {
    var prev = globalState.trackingDerivation;
    globalState.trackingDerivation = null;
    return prev;
}
function untrackedEnd(prev) {
    globalState.trackingDerivation = prev;
}
function changeDependenciesStateTo0(derivation) {
    if (derivation.dependenciesState === IDerivationState.UP_TO_DATE)
        return;
    derivation.dependenciesState = IDerivationState.UP_TO_DATE;
    var obs = derivation.observing;
    var i = obs.length;
    while (i--)
        obs[i].lowestObserverState = IDerivationState.UP_TO_DATE;
}
var persistentKeys = ["mobxGuid", "resetId", "spyListeners", "strictMode", "runId"];
var MobXGlobals = (function () {
    function MobXGlobals() {
        this.version = 5;
        this.trackingDerivation = null;
        this.computationDepth = 0;
        this.runId = 0;
        this.mobxGuid = 0;
        this.inBatch = 0;
        this.pendingUnobservations = [];
        this.pendingReactions = [];
        this.isRunningReactions = false;
        this.allowStateChanges = true;
        this.strictMode = false;
        this.resetId = 0;
        this.spyListeners = [];
        this.globalReactionErrorHandlers = [];
    }
    return MobXGlobals;
}());
var globalState = new MobXGlobals();
function shareGlobalState() {
    var global = getGlobal();
    var ownState = globalState;
    if (global.__mobservableTrackingStack || global.__mobservableViewStack)
        throw new Error("[mobx] An incompatible version of mobservable is already loaded.");
    if (global.__mobxGlobal && global.__mobxGlobal.version !== ownState.version)
        throw new Error("[mobx] An incompatible version of mobx is already loaded.");
    if (global.__mobxGlobal)
        globalState = global.__mobxGlobal;
    else
        global.__mobxGlobal = ownState;
}
function getGlobalState() {
    return globalState;
}
function registerGlobals() {
}
function resetGlobalState() {
    globalState.resetId++;
    var defaultGlobals = new MobXGlobals();
    for (var key in defaultGlobals)
        if (persistentKeys.indexOf(key) === -1)
            globalState[key] = defaultGlobals[key];
    globalState.allowStateChanges = !globalState.strictMode;
}
function hasObservers(observable) {
    return observable.observers && observable.observers.length > 0;
}
function getObservers(observable) {
    return observable.observers;
}
function invariantObservers(observable) {
    var list = observable.observers;
    var map = observable.observersIndexes;
    var l = list.length;
    for (var i = 0; i < l; i++) {
        var id = list[i].__mapid;
        if (i) {
            invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list");
        }
        else {
            invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldnt be held in map.");
        }
    }
    invariant(list.length === 0 || Object.keys(map).length === list.length - 1, "INTERNAL ERROR there is no junk in map");
}
function addObserver(observable, node) {
    var l = observable.observers.length;
    if (l) {
        observable.observersIndexes[node.__mapid] = l;
    }
    observable.observers[l] = node;
    if (observable.lowestObserverState > node.dependenciesState)
        observable.lowestObserverState = node.dependenciesState;
}
function removeObserver(observable, node) {
    if (observable.observers.length === 1) {
        observable.observers.length = 0;
        queueForUnobservation(observable);
    }
    else {
        var list = observable.observers;
        var map_1 = observable.observersIndexes;
        var filler = list.pop();
        if (filler !== node) {
            var index = map_1[node.__mapid] || 0;
            if (index) {
                map_1[filler.__mapid] = index;
            }
            else {
                delete map_1[filler.__mapid];
            }
            list[index] = filler;
        }
        delete map_1[node.__mapid];
    }
}
function queueForUnobservation(observable) {
    if (!observable.isPendingUnobservation) {
        observable.isPendingUnobservation = true;
        globalState.pendingUnobservations.push(observable);
    }
}
function startBatch() {
    globalState.inBatch++;
}
function endBatch() {
    if (--globalState.inBatch === 0) {
        runReactions();
        var list = globalState.pendingUnobservations;
        for (var i = 0; i < list.length; i++) {
            var observable_1 = list[i];
            observable_1.isPendingUnobservation = false;
            if (observable_1.observers.length === 0) {
                observable_1.onBecomeUnobserved();
            }
        }
        globalState.pendingUnobservations = [];
    }
}
function reportObserved(observable) {
    var derivation = globalState.trackingDerivation;
    if (derivation !== null) {
        if (derivation.runId !== observable.lastAccessedBy) {
            observable.lastAccessedBy = derivation.runId;
            derivation.newObserving[derivation.unboundDepsCount++] = observable;
        }
    }
    else if (observable.observers.length === 0) {
        queueForUnobservation(observable);
    }
}
function invariantLOS(observable, msg) {
    var min = getObservers(observable).reduce(function (a, b) { return Math.min(a, b.dependenciesState); }, 2);
    if (min >= observable.lowestObserverState)
        return;
    throw new Error("lowestObserverState is wrong for " + msg + " because " + min + " < " + observable.lowestObserverState);
}
function propagateChanged(observable) {
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    var observers = observable.observers;
    var i = observers.length;
    while (i--) {
        var d = observers[i];
        if (d.dependenciesState === IDerivationState.UP_TO_DATE)
            d.onBecomeStale();
        d.dependenciesState = IDerivationState.STALE;
    }
}
function propagateChangeConfirmed(observable) {
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    var observers = observable.observers;
    var i = observers.length;
    while (i--) {
        var d = observers[i];
        if (d.dependenciesState === IDerivationState.POSSIBLY_STALE)
            d.dependenciesState = IDerivationState.STALE;
        else if (d.dependenciesState === IDerivationState.UP_TO_DATE)
            observable.lowestObserverState = IDerivationState.UP_TO_DATE;
    }
}
function propagateMaybeChanged(observable) {
    if (observable.lowestObserverState !== IDerivationState.UP_TO_DATE)
        return;
    observable.lowestObserverState = IDerivationState.POSSIBLY_STALE;
    var observers = observable.observers;
    var i = observers.length;
    while (i--) {
        var d = observers[i];
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            d.dependenciesState = IDerivationState.POSSIBLY_STALE;
            d.onBecomeStale();
        }
    }
}
var Reaction = (function () {
    function Reaction(name, onInvalidate) {
        if (name === void 0) { name = "Reaction@" + getNextId(); }
        this.name = name;
        this.onInvalidate = onInvalidate;
        this.observing = [];
        this.newObserving = [];
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.diffValue = 0;
        this.runId = 0;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.isDisposed = false;
        this._isScheduled = false;
        this._isTrackPending = false;
        this._isRunning = false;
    }
    Reaction.prototype.onBecomeStale = function () {
        this.schedule();
    };
    Reaction.prototype.schedule = function () {
        if (!this._isScheduled) {
            this._isScheduled = true;
            globalState.pendingReactions.push(this);
            runReactions();
        }
    };
    Reaction.prototype.isScheduled = function () {
        return this._isScheduled;
    };
    Reaction.prototype.runReaction = function () {
        if (!this.isDisposed) {
            startBatch();
            this._isScheduled = false;
            if (shouldCompute(this)) {
                this._isTrackPending = true;
                this.onInvalidate();
                if (this._isTrackPending && isSpyEnabled()) {
                    spyReport({
                        object: this,
                        type: "scheduled-reaction"
                    });
                }
            }
            endBatch();
        }
    };
    Reaction.prototype.track = function (fn) {
        startBatch();
        var notify = isSpyEnabled();
        var startTime;
        if (notify) {
            startTime = Date.now();
            spyReportStart({
                object: this,
                type: "reaction",
                fn: fn
            });
        }
        this._isRunning = true;
        var result = trackDerivedFunction(this, fn, undefined);
        this._isRunning = false;
        this._isTrackPending = false;
        if (this.isDisposed) {
            clearObserving(this);
        }
        if (isCaughtException(result))
            this.reportExceptionInDerivation(result.cause);
        if (notify) {
            spyReportEnd({
                time: Date.now() - startTime
            });
        }
        endBatch();
    };
    Reaction.prototype.reportExceptionInDerivation = function (error) {
        var _this = this;
        if (this.errorHandler) {
            this.errorHandler(error, this);
            return;
        }
        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this;
        var messageToUser = getMessage("m037");
        console.error(message || messageToUser, error);
        if (isSpyEnabled()) {
            spyReport({
                type: "error",
                message: message,
                error: error,
                object: this
            });
        }
        globalState.globalReactionErrorHandlers.forEach(function (f) { return f(error, _this); });
    };
    Reaction.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
            if (!this._isRunning) {
                startBatch();
                clearObserving(this);
                endBatch();
            }
        }
    };
    Reaction.prototype.getDisposer = function () {
        var r = this.dispose.bind(this);
        r.$mobx = this;
        r.onError = registerErrorHandler;
        return r;
    };
    Reaction.prototype.toString = function () {
        return "Reaction[" + this.name + "]";
    };
    Reaction.prototype.whyRun = function () {
        var observing = unique(this._isRunning ? this.newObserving : this.observing).map(function (dep) { return dep.name; });
        return ("\nWhyRun? reaction '" + this.name + "':\n * Status: [" + (this.isDisposed ? "stopped" : this._isRunning ? "running" : this.isScheduled() ? "scheduled" : "idle") + "]\n * This reaction will re-run if any of the following observables changes:\n    " + joinStrings(observing) + "\n    " + ((this._isRunning) ? " (... or any observable accessed during the remainder of the current run)" : "") + "\n\t" + getMessage("m038") + "\n");
    };
    return Reaction;
}());
exports.Reaction = Reaction;
function registerErrorHandler(handler) {
    invariant(this && this.$mobx && isReaction(this.$mobx), "Invalid `this`");
    invariant(!this.$mobx.errorHandler, "Only one onErrorHandler can be registered");
    this.$mobx.errorHandler = handler;
}
function onReactionError(handler) {
    globalState.globalReactionErrorHandlers.push(handler);
    return function () {
        var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
        if (idx >= 0)
            globalState.globalReactionErrorHandlers.splice(idx, 1);
    };
}
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function (f) { return f(); };
function runReactions() {
    if (globalState.inBatch > 0 || globalState.isRunningReactions)
        return;
    reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
    globalState.isRunningReactions = true;
    var allReactions = globalState.pendingReactions;
    var iterations = 0;
    while (allReactions.length > 0) {
        if (++iterations === MAX_REACTION_ITERATIONS) {
            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations."
                + (" Probably there is a cycle in the reactive function: " + allReactions[0]));
            allReactions.splice(0);
        }
        var remainingReactions = allReactions.splice(0);
        for (var i = 0, l = remainingReactions.length; i < l; i++)
            remainingReactions[i].runReaction();
    }
    globalState.isRunningReactions = false;
}
var isReaction = createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
    var baseScheduler = reactionScheduler;
    reactionScheduler = function (f) { return fn(function () { return baseScheduler(f); }); };
}
function isSpyEnabled() {
    return !!globalState.spyListeners.length;
}
function spyReport(event) {
    if (!globalState.spyListeners.length)
        return;
    var listeners = globalState.spyListeners;
    for (var i = 0, l = listeners.length; i < l; i++)
        listeners[i](event);
}
function spyReportStart(event) {
    var change = objectAssign({}, event, { spyReportStart: true });
    spyReport(change);
}
var END_EVENT = { spyReportEnd: true };
function spyReportEnd(change) {
    if (change)
        spyReport(objectAssign({}, change, END_EVENT));
    else
        spyReport(END_EVENT);
}
function spy(listener) {
    globalState.spyListeners.push(listener);
    return once(function () {
        var idx = globalState.spyListeners.indexOf(listener);
        if (idx !== -1)
            globalState.spyListeners.splice(idx, 1);
    });
}
exports.spy = spy;
function hasInterceptors(interceptable) {
    return (interceptable.interceptors && interceptable.interceptors.length > 0);
}
function registerInterceptor(interceptable, handler) {
    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
    interceptors.push(handler);
    return once(function () {
        var idx = interceptors.indexOf(handler);
        if (idx !== -1)
            interceptors.splice(idx, 1);
    });
}
function interceptChange(interceptable, change) {
    var prevU = untrackedStart();
    try {
        var interceptors = interceptable.interceptors;
        if (interceptors)
            for (var i = 0, l = interceptors.length; i < l; i++) {
                change = interceptors[i](change);
                invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
                if (!change)
                    break;
            }
        return change;
    }
    finally {
        untrackedEnd(prevU);
    }
}
function hasListeners(listenable) {
    return listenable.changeListeners && listenable.changeListeners.length > 0;
}
function registerListener(listenable, handler) {
    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
    listeners.push(handler);
    return once(function () {
        var idx = listeners.indexOf(handler);
        if (idx !== -1)
            listeners.splice(idx, 1);
    });
}
function notifyListeners(listenable, change) {
    var prevU = untrackedStart();
    var listeners = listenable.changeListeners;
    if (!listeners)
        return;
    listeners = listeners.slice();
    for (var i = 0, l = listeners.length; i < l; i++) {
        listeners[i](change);
    }
    untrackedEnd(prevU);
}
function asReference(value) {
    deprecated("asReference is deprecated, use observable.ref instead");
    return observable.ref(value);
}
exports.asReference = asReference;
function asStructure(value) {
    deprecated("asStructure is deprecated. Use observable.struct, computed.struct or reaction options instead.");
    return observable.struct(value);
}
exports.asStructure = asStructure;
function asFlat(value) {
    deprecated("asFlat is deprecated, use observable.shallow instead");
    return observable.shallow(value);
}
exports.asFlat = asFlat;
function asMap(data) {
    deprecated("asMap is deprecated, use observable.map or observable.shallowMap instead");
    return observable.map(data || {});
}
exports.asMap = asMap;
function isModifierDescriptor(thing) {
    return typeof thing === "object" && thing !== null && thing.isMobxModifierDescriptor === true;
}
exports.isModifierDescriptor = isModifierDescriptor;
function createModifierDescriptor(enhancer, initialValue) {
    invariant(!isModifierDescriptor(initialValue), "Modifiers cannot be nested");
    return {
        isMobxModifierDescriptor: true,
        initialValue: initialValue,
        enhancer: enhancer
    };
}
function deepEnhancer(v, _, name) {
    if (isModifierDescriptor(v))
        fail("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it");
    if (isObservable(v))
        return v;
    if (Array.isArray(v))
        return observable.array(v, name);
    if (isPlainObject(v))
        return observable.object(v, name);
    if (isES6Map(v))
        return observable.map(v, name);
    return v;
}
function shallowEnhancer(v, _, name) {
    if (isModifierDescriptor(v))
        fail("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it");
    if (v === undefined || v === null)
        return v;
    if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v))
        return v;
    if (Array.isArray(v))
        return observable.shallowArray(v, name);
    if (isPlainObject(v))
        return observable.shallowObject(v, name);
    if (isES6Map(v))
        return observable.shallowMap(v, name);
    return fail("The shallow modifier / decorator can only used in combination with arrays, objects and maps");
}
function referenceEnhancer(newValue) {
    return newValue;
}
function deepStructEnhancer(v, oldValue, name) {
    if (deepEqual(v, oldValue))
        return oldValue;
    if (isObservable(v))
        return v;
    if (Array.isArray(v))
        return new ObservableArray(v, deepStructEnhancer, name);
    if (isES6Map(v))
        return new ObservableMap(v, deepStructEnhancer, name);
    if (isPlainObject(v)) {
        var res = {};
        asObservableObject(res, name);
        extendObservableHelper(res, deepStructEnhancer, [v]);
        return res;
    }
    return v;
}
function refStructEnhancer(v, oldValue, name) {
    if (deepEqual(v, oldValue))
        return oldValue;
    return v;
}
var MAX_SPLICE_SIZE = 10000;
var safariPrototypeSetterInheritanceBug = (function () {
    var v = false;
    var p = {};
    Object.defineProperty(p, "0", { set: function () { v = true; } });
    Object.create(p)["0"] = 1;
    return v === false;
})();
var OBSERVABLE_ARRAY_BUFFER_SIZE = 0;
var StubArray = (function () {
    function StubArray() {
    }
    return StubArray;
}());
StubArray.prototype = [];
var ObservableArrayAdministration = (function () {
    function ObservableArrayAdministration(name, enhancer, array, owned) {
        this.array = array;
        this.owned = owned;
        this.lastKnownLength = 0;
        this.interceptors = null;
        this.changeListeners = null;
        this.atom = new BaseAtom(name || ("ObservableArray@" + getNextId()));
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name + "[..]"); };
    }
    ObservableArrayAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        if (fireImmediately) {
            listener({
                object: this.array,
                type: "splice",
                index: 0,
                added: this.values.slice(),
                addedCount: this.values.length,
                removed: [],
                removedCount: 0
            });
        }
        return registerListener(this, listener);
    };
    ObservableArrayAdministration.prototype.getArrayLength = function () {
        this.atom.reportObserved();
        return this.values.length;
    };
    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
        if (typeof newLength !== "number" || newLength < 0)
            throw new Error("[mobx.array] Out of range: " + newLength);
        var currentLength = this.values.length;
        if (newLength === currentLength)
            return;
        else if (newLength > currentLength) {
            var newItems = new Array(newLength - currentLength);
            for (var i = 0; i < newLength - currentLength; i++)
                newItems[i] = undefined;
            this.spliceWithArray(currentLength, 0, newItems);
        }
        else
            this.spliceWithArray(newLength, currentLength - newLength);
    };
    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
        if (oldLength !== this.lastKnownLength)
            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
        this.lastKnownLength += delta;
        if (delta > 0 && oldLength + delta + 1 > OBSERVABLE_ARRAY_BUFFER_SIZE)
            reserveArrayBuffer(oldLength + delta + 1);
    };
    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this.atom);
        var length = this.values.length;
        if (index === undefined)
            index = 0;
        else if (index > length)
            index = length;
        else if (index < 0)
            index = Math.max(0, length + index);
        if (arguments.length === 1)
            deleteCount = length - index;
        else if (deleteCount === undefined || deleteCount === null)
            deleteCount = 0;
        else
            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
        if (newItems === undefined)
            newItems = [];
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.array,
                type: "splice",
                index: index,
                removedCount: deleteCount,
                added: newItems
            });
            if (!change)
                return EMPTY_ARRAY;
            deleteCount = change.removedCount;
            newItems = change.added;
        }
        newItems = newItems.map(function (v) { return _this.enhancer(v, undefined); });
        var lengthDelta = newItems.length - deleteCount;
        this.updateArrayLength(length, lengthDelta);
        var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
        if (deleteCount !== 0 || newItems.length !== 0)
            this.notifyArraySplice(index, newItems, res);
        return res;
    };
    ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
        if (newItems.length < MAX_SPLICE_SIZE) {
            return (_a = this.values).splice.apply(_a, [index, deleteCount].concat(newItems));
        }
        else {
            var res = this.values.slice(index, index + deleteCount);
            this.values = this.values.slice(0, index).concat(newItems, this.values.slice(index + deleteCount));
            return res;
        }
        var _a;
    };
    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy ? {
            object: this.array,
            type: "update",
            index: index, newValue: newValue, oldValue: oldValue
        } : null;
        if (notifySpy)
            spyReportStart(change);
        this.atom.reportChanged();
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy ? {
            object: this.array,
            type: "splice",
            index: index, removed: removed, added: added,
            removedCount: removed.length,
            addedCount: added.length
        } : null;
        if (notifySpy)
            spyReportStart(change);
        this.atom.reportChanged();
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    return ObservableArrayAdministration;
}());
var ObservableArray = (function (_super) {
    __extends(ObservableArray, _super);
    function ObservableArray(initialValues, enhancer, name, owned) {
        if (name === void 0) { name = "ObservableArray@" + getNextId(); }
        if (owned === void 0) { owned = false; }
        var _this = _super.call(this) || this;
        var adm = new ObservableArrayAdministration(name, enhancer, _this, owned);
        addHiddenFinalProp(_this, "$mobx", adm);
        if (initialValues && initialValues.length) {
            adm.updateArrayLength(0, initialValues.length);
            adm.values = initialValues.map(function (v) { return enhancer(v, undefined, name + "[..]"); });
            adm.notifyArraySplice(0, adm.values.slice(), EMPTY_ARRAY);
        }
        else {
            adm.values = [];
        }
        if (safariPrototypeSetterInheritanceBug) {
            Object.defineProperty(adm.array, "0", ENTRY_0);
        }
        return _this;
    }
    ObservableArray.prototype.intercept = function (handler) {
        return this.$mobx.intercept(handler);
    };
    ObservableArray.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        return this.$mobx.observe(listener, fireImmediately);
    };
    ObservableArray.prototype.clear = function () {
        return this.splice(0);
    };
    ObservableArray.prototype.concat = function () {
        var arrays = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arrays[_i] = arguments[_i];
        }
        this.$mobx.atom.reportObserved();
        return Array.prototype.concat.apply(this.peek(), arrays.map(function (a) { return isObservableArray(a) ? a.peek() : a; }));
    };
    ObservableArray.prototype.replace = function (newItems) {
        return this.$mobx.spliceWithArray(0, this.$mobx.values.length, newItems);
    };
    ObservableArray.prototype.toJS = function () {
        return this.slice();
    };
    ObservableArray.prototype.toJSON = function () {
        return this.toJS();
    };
    ObservableArray.prototype.peek = function () {
        return this.$mobx.values;
    };
    ObservableArray.prototype.find = function (predicate, thisArg, fromIndex) {
        if (fromIndex === void 0) { fromIndex = 0; }
        this.$mobx.atom.reportObserved();
        var items = this.$mobx.values, l = items.length;
        for (var i = fromIndex; i < l; i++)
            if (predicate.call(thisArg, items[i], i, this))
                return items[i];
        return undefined;
    };
    ObservableArray.prototype.splice = function (index, deleteCount) {
        var newItems = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            newItems[_i - 2] = arguments[_i];
        }
        switch (arguments.length) {
            case 0:
                return [];
            case 1:
                return this.$mobx.spliceWithArray(index);
            case 2:
                return this.$mobx.spliceWithArray(index, deleteCount);
        }
        return this.$mobx.spliceWithArray(index, deleteCount, newItems);
    };
    ObservableArray.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        return this.$mobx.spliceWithArray(index, deleteCount, newItems);
    };
    ObservableArray.prototype.push = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this.$mobx;
        adm.spliceWithArray(adm.values.length, 0, items);
        return adm.values.length;
    };
    ObservableArray.prototype.pop = function () {
        return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0];
    };
    ObservableArray.prototype.shift = function () {
        return this.splice(0, 1)[0];
    };
    ObservableArray.prototype.unshift = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this.$mobx;
        adm.spliceWithArray(0, 0, items);
        return adm.values.length;
    };
    ObservableArray.prototype.reverse = function () {
        this.$mobx.atom.reportObserved();
        var clone = this.slice();
        return clone.reverse.apply(clone, arguments);
    };
    ObservableArray.prototype.sort = function (compareFn) {
        this.$mobx.atom.reportObserved();
        var clone = this.slice();
        return clone.sort.apply(clone, arguments);
    };
    ObservableArray.prototype.remove = function (value) {
        var idx = this.$mobx.values.indexOf(value);
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    };
    ObservableArray.prototype.move = function (fromIndex, toIndex) {
        function checkIndex(index) {
            if (index < 0) {
                throw new Error("[mobx.array] Index out of bounds: " + index + " is negative");
            }
            var length = this.$mobx.values.length;
            if (index >= length) {
                throw new Error("[mobx.array] Index out of bounds: " + index + " is not smaller than " + length);
            }
        }
        checkIndex.call(this, fromIndex);
        checkIndex.call(this, toIndex);
        if (fromIndex === toIndex) {
            return;
        }
        var oldItems = this.$mobx.values;
        var newItems;
        if (fromIndex < toIndex) {
            newItems = oldItems.slice(0, fromIndex).concat(oldItems.slice(fromIndex + 1, toIndex + 1), [oldItems[fromIndex]], oldItems.slice(toIndex + 1));
        }
        else {
            newItems = oldItems.slice(0, toIndex).concat([oldItems[fromIndex]], oldItems.slice(toIndex, fromIndex), oldItems.slice(fromIndex + 1));
        }
        this.replace(newItems);
    };
    ObservableArray.prototype.toString = function () {
        this.$mobx.atom.reportObserved();
        return Array.prototype.toString.apply(this.$mobx.values, arguments);
    };
    ObservableArray.prototype.toLocaleString = function () {
        this.$mobx.atom.reportObserved();
        return Array.prototype.toLocaleString.apply(this.$mobx.values, arguments);
    };
    ObservableArray.prototype.get = function (index) {
        var impl = this.$mobx;
        if (impl) {
            if (index < impl.values.length) {
                impl.atom.reportObserved();
                return impl.values[index];
            }
            console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + impl.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
        }
        return undefined;
    };
    ObservableArray.prototype.set = function (index, newValue) {
        var adm = this.$mobx;
        var values = adm.values;
        if (index < values.length) {
            checkIfStateModificationsAreAllowed(adm.atom);
            var oldValue = values[index];
            if (hasInterceptors(adm)) {
                var change = interceptChange(adm, {
                    type: "update",
                    object: this,
                    index: index, newValue: newValue
                });
                if (!change)
                    return;
                newValue = change.newValue;
            }
            newValue = adm.enhancer(newValue, oldValue);
            var changed = newValue !== oldValue;
            if (changed) {
                values[index] = newValue;
                adm.notifyArrayChildUpdate(index, newValue, oldValue);
            }
        }
        else if (index === values.length) {
            adm.spliceWithArray(index, 0, [newValue]);
        }
        else {
            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
        }
    };
    return ObservableArray;
}(StubArray));
declareIterator(ObservableArray.prototype, function () {
    return arrayAsIterator(this.slice());
});
makeNonEnumerable(ObservableArray.prototype, [
    "constructor",
    "intercept",
    "observe",
    "clear",
    "concat",
    "get",
    "replace",
    "toJS",
    "toJSON",
    "peek",
    "find",
    "splice",
    "spliceWithArray",
    "push",
    "pop",
    "set",
    "shift",
    "unshift",
    "reverse",
    "sort",
    "remove",
    "move",
    "toString",
    "toLocaleString"
]);
Object.defineProperty(ObservableArray.prototype, "length", {
    enumerable: false,
    configurable: true,
    get: function () {
        return this.$mobx.getArrayLength();
    },
    set: function (newLength) {
        this.$mobx.setArrayLength(newLength);
    }
});
[
    "every",
    "filter",
    "forEach",
    "indexOf",
    "join",
    "lastIndexOf",
    "map",
    "reduce",
    "reduceRight",
    "slice",
    "some"
].forEach(function (funcName) {
    var baseFunc = Array.prototype[funcName];
    invariant(typeof baseFunc === "function", "Base function not defined on Array prototype: '" + funcName + "'");
    addHiddenProp(ObservableArray.prototype, funcName, function () {
        this.$mobx.atom.reportObserved();
        return baseFunc.apply(this.$mobx.values, arguments);
    });
});
var ENTRY_0 = createArrayEntryDescriptor(0);
function createArrayEntryDescriptor(index) {
    return {
        enumerable: false,
        configurable: false,
        get: function () {
            return this.get(index);
        },
        set: function (value) {
            this.set(index, value);
        }
    };
}
function createArrayBufferItem(index) {
    Object.defineProperty(ObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
}
function reserveArrayBuffer(max) {
    for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max; index++)
        createArrayBufferItem(index);
    OBSERVABLE_ARRAY_BUFFER_SIZE = max;
}
reserveArrayBuffer(1000);
var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
    return isObject(thing) && isObservableArrayAdministration(thing.$mobx);
}
exports.isObservableArray = isObservableArray;
var ObservableMapMarker = {};
var ObservableMap = (function () {
    function ObservableMap(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer; }
        if (name === void 0) { name = "ObservableMap@" + getNextId(); }
        this.enhancer = enhancer;
        this.name = name;
        this.$mobx = ObservableMapMarker;
        this._data = Object.create(null);
        this._hasMap = Object.create(null);
        this._keys = new ObservableArray(undefined, referenceEnhancer, this.name + ".keys()", true);
        this.interceptors = null;
        this.changeListeners = null;
        this.merge(initialData);
    }
    ObservableMap.prototype._has = function (key) {
        return typeof this._data[key] !== "undefined";
    };
    ObservableMap.prototype.has = function (key) {
        if (!this.isValidKey(key))
            return false;
        key = "" + key;
        if (this._hasMap[key])
            return this._hasMap[key].get();
        return this._updateHasMapEntry(key, false).get();
    };
    ObservableMap.prototype.set = function (key, value) {
        this.assertValidKey(key);
        key = "" + key;
        var hasKey = this._has(key);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: hasKey ? "update" : "add",
                object: this,
                newValue: value,
                name: key
            });
            if (!change)
                return this;
            value = change.newValue;
        }
        if (hasKey) {
            this._updateValue(key, value);
        }
        else {
            this._addValue(key, value);
        }
        return this;
    };
    ObservableMap.prototype.delete = function (key) {
        var _this = this;
        this.assertValidKey(key);
        key = "" + key;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                name: key
            });
            if (!change)
                return false;
        }
        if (this._has(key)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy ? {
                type: "delete",
                object: this,
                oldValue: this._data[key].value,
                name: key
            } : null;
            if (notifySpy)
                spyReportStart(change);
            runInTransaction(function () {
                _this._keys.remove(key);
                _this._updateHasMapEntry(key, false);
                var observable = _this._data[key];
                observable.setNewValue(undefined);
                _this._data[key] = undefined;
            });
            if (notify)
                notifyListeners(this, change);
            if (notifySpy)
                spyReportEnd();
            return true;
        }
        return false;
    };
    ObservableMap.prototype._updateHasMapEntry = function (key, value) {
        var entry = this._hasMap[key];
        if (entry) {
            entry.setNewValue(value);
        }
        else {
            entry = this._hasMap[key] = new ObservableValue(value, referenceEnhancer, this.name + "." + key + "?", false);
        }
        return entry;
    };
    ObservableMap.prototype._updateValue = function (name, newValue) {
        var observable = this._data[name];
        newValue = observable.prepareNewValue(newValue);
        if (newValue !== UNCHANGED) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy ? {
                type: "update",
                object: this,
                oldValue: observable.value,
                name: name, newValue: newValue
            } : null;
            if (notifySpy)
                spyReportStart(change);
            observable.setNewValue(newValue);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy)
                spyReportEnd();
        }
    };
    ObservableMap.prototype._addValue = function (name, newValue) {
        var _this = this;
        runInTransaction(function () {
            var observable = _this._data[name] = new ObservableValue(newValue, _this.enhancer, _this.name + "." + name, false);
            newValue = observable.value;
            _this._updateHasMapEntry(name, true);
            _this._keys.push(name);
        });
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy ? {
            type: "add",
            object: this,
            name: name, newValue: newValue
        } : null;
        if (notifySpy)
            spyReportStart(change);
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    ObservableMap.prototype.get = function (key) {
        key = "" + key;
        if (this.has(key))
            return this._data[key].get();
        return undefined;
    };
    ObservableMap.prototype.keys = function () {
        return arrayAsIterator(this._keys.slice());
    };
    ObservableMap.prototype.values = function () {
        return arrayAsIterator(this._keys.map(this.get, this));
    };
    ObservableMap.prototype.entries = function () {
        var _this = this;
        return arrayAsIterator(this._keys.map(function (key) { return [key, _this.get(key)]; }));
    };
    ObservableMap.prototype.forEach = function (callback, thisArg) {
        var _this = this;
        this.keys().forEach(function (key) { return callback.call(thisArg, _this.get(key), key, _this); });
    };
    ObservableMap.prototype.merge = function (other) {
        var _this = this;
        if (isObservableMap(other)) {
            other = other.toJS();
        }
        runInTransaction(function () {
            if (isPlainObject(other))
                Object.keys(other).forEach(function (key) { return _this.set(key, other[key]); });
            else if (Array.isArray(other))
                other.forEach(function (_a) {
                    var key = _a[0], value = _a[1];
                    return _this.set(key, value);
                });
            else if (isES6Map(other))
                other.forEach(function (value, key) { return _this.set(key, value); });
            else if (other !== null && other !== undefined)
                fail("Cannot initialize map from " + other);
        });
        return this;
    };
    ObservableMap.prototype.clear = function () {
        var _this = this;
        runInTransaction(function () {
            untracked(function () {
                _this.keys().forEach(_this.delete, _this);
            });
        });
    };
    ObservableMap.prototype.replace = function (values) {
        var _this = this;
        runInTransaction(function () {
            _this.clear();
            _this.merge(values);
        });
        return this;
    };
    Object.defineProperty(ObservableMap.prototype, "size", {
        get: function () {
            return this._keys.length;
        },
        enumerable: true,
        configurable: true
    });
    ObservableMap.prototype.toJS = function () {
        var _this = this;
        var res = {};
        this.keys().forEach(function (key) { return res[key] = _this.get(key); });
        return res;
    };
    ObservableMap.prototype.toJSON = function () {
        return this.toJS();
    };
    ObservableMap.prototype.isValidKey = function (key) {
        if (key === null || key === undefined)
            return false;
        if (typeof key === "string" || typeof key === "number" || typeof key === "boolean")
            return true;
        return false;
    };
    ObservableMap.prototype.assertValidKey = function (key) {
        if (!this.isValidKey(key))
            throw new Error("[mobx.map] Invalid key: '" + key + "', only strings, numbers and booleans are accepted as key in observable maps.");
    };
    ObservableMap.prototype.toString = function () {
        var _this = this;
        return this.name + "[{ " + this.keys().map(function (key) { return key + ": " + ("" + _this.get(key)); }).join(", ") + " }]";
    };
    ObservableMap.prototype.observe = function (listener, fireImmediately) {
        invariant(fireImmediately !== true, getMessage("m033"));
        return registerListener(this, listener);
    };
    ObservableMap.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    return ObservableMap;
}());
exports.ObservableMap = ObservableMap;
declareIterator(ObservableMap.prototype, function () {
    return this.entries();
});
function map(initialValues) {
    deprecated("`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead");
    return observable.map(initialValues);
}
exports.map = map;
var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);
exports.isObservableMap = isObservableMap;
var ObservableObjectAdministration = (function () {
    function ObservableObjectAdministration(target, name) {
        this.target = target;
        this.name = name;
        this.values = {};
        this.changeListeners = null;
        this.interceptors = null;
    }
    ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
        invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
        return registerListener(this, callback);
    };
    ObservableObjectAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    return ObservableObjectAdministration;
}());
function asObservableObject(target, name) {
    if (isObservableObject(target))
        return target.$mobx;
    invariant(Object.isExtensible(target), getMessage("m035"));
    if (!isPlainObject(target))
        name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
    if (!name)
        name = "ObservableObject@" + getNextId();
    var adm = new ObservableObjectAdministration(target, name);
    addHiddenFinalProp(target, "$mobx", adm);
    return adm;
}
function defineObservablePropertyFromDescriptor(adm, propName, descriptor, defaultEnhancer) {
    if (adm.values[propName]) {
        invariant("value" in descriptor, "The property " + propName + " in " + adm.name + " is already observable, cannot redefine it as computed property");
        adm.target[propName] = descriptor.value;
        return;
    }
    if ("value" in descriptor) {
        if (isModifierDescriptor(descriptor.value)) {
            var modifierDescriptor = descriptor.value;
            defineObservableProperty(adm, propName, modifierDescriptor.initialValue, modifierDescriptor.enhancer);
        }
        else if (isAction(descriptor.value) && descriptor.value.autoBind === true) {
            defineBoundAction(adm.target, propName, descriptor.value.originalFn);
        }
        else if (isComputedValue(descriptor.value)) {
            defineComputedPropertyFromComputedValue(adm, propName, descriptor.value);
        }
        else {
            defineObservableProperty(adm, propName, descriptor.value, defaultEnhancer);
        }
    }
    else {
        defineComputedProperty(adm, propName, descriptor.get, descriptor.set, false, true);
    }
}
function defineObservableProperty(adm, propName, newValue, enhancer) {
    assertPropertyConfigurable(adm.target, propName);
    if (hasInterceptors(adm)) {
        var change = interceptChange(adm, {
            object: adm.target,
            name: propName,
            type: "add",
            newValue: newValue
        });
        if (!change)
            return;
        newValue = change.newValue;
    }
    var observable = adm.values[propName] = new ObservableValue(newValue, enhancer, adm.name + "." + propName, false);
    newValue = observable.value;
    Object.defineProperty(adm.target, propName, generateObservablePropConfig(propName));
    notifyPropertyAddition(adm, adm.target, propName, newValue);
}
function defineComputedProperty(adm, propName, getter, setter, compareStructural, asInstanceProperty) {
    if (asInstanceProperty)
        assertPropertyConfigurable(adm.target, propName);
    adm.values[propName] = new ComputedValue(getter, adm.target, compareStructural, adm.name + "." + propName, setter);
    if (asInstanceProperty) {
        Object.defineProperty(adm.target, propName, generateComputedPropConfig(propName));
    }
}
function defineComputedPropertyFromComputedValue(adm, propName, computedValue) {
    var name = adm.name + "." + propName;
    computedValue.name = name;
    if (!computedValue.scope)
        computedValue.scope = adm.target;
    adm.values[propName] = computedValue;
    Object.defineProperty(adm.target, propName, generateComputedPropConfig(propName));
}
var observablePropertyConfigs = {};
var computedPropertyConfigs = {};
function generateObservablePropConfig(propName) {
    return observablePropertyConfigs[propName] || (observablePropertyConfigs[propName] = {
        configurable: true,
        enumerable: true,
        get: function () {
            return this.$mobx.values[propName].get();
        },
        set: function (v) {
            setPropertyValue(this, propName, v);
        }
    });
}
function generateComputedPropConfig(propName) {
    return computedPropertyConfigs[propName] || (computedPropertyConfigs[propName] = {
        configurable: true,
        enumerable: false,
        get: function () {
            return this.$mobx.values[propName].get();
        },
        set: function (v) {
            return this.$mobx.values[propName].set(v);
        }
    });
}
function setPropertyValue(instance, name, newValue) {
    var adm = instance.$mobx;
    var observable = adm.values[name];
    if (hasInterceptors(adm)) {
        var change = interceptChange(adm, {
            type: "update",
            object: instance,
            name: name, newValue: newValue
        });
        if (!change)
            return;
        newValue = change.newValue;
    }
    newValue = observable.prepareNewValue(newValue);
    if (newValue !== UNCHANGED) {
        var notify = hasListeners(adm);
        var notifySpy = isSpyEnabled();
        var change = notify || notifySpy ? {
            type: "update",
            object: instance,
            oldValue: observable.value,
            name: name, newValue: newValue
        } : null;
        if (notifySpy)
            spyReportStart(change);
        observable.setNewValue(newValue);
        if (notify)
            notifyListeners(adm, change);
        if (notifySpy)
            spyReportEnd();
    }
}
function notifyPropertyAddition(adm, object, name, newValue) {
    var notify = hasListeners(adm);
    var notifySpy = isSpyEnabled();
    var change = notify || notifySpy ? {
        type: "add",
        object: object, name: name, newValue: newValue
    } : null;
    if (notifySpy)
        spyReportStart(change);
    if (notify)
        notifyListeners(adm, change);
    if (notifySpy)
        spyReportEnd();
}
var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
function isObservableObject(thing) {
    if (isObject(thing)) {
        runLazyInitializers(thing);
        return isObservableObjectAdministration(thing.$mobx);
    }
    return false;
}
exports.isObservableObject = isObservableObject;
var UNCHANGED = {};
var ObservableValue = (function (_super) {
    __extends(ObservableValue, _super);
    function ObservableValue(value, enhancer, name, notifySpy) {
        if (name === void 0) { name = "ObservableValue@" + getNextId(); }
        if (notifySpy === void 0) { notifySpy = true; }
        var _this = _super.call(this, name) || this;
        _this.enhancer = enhancer;
        _this.hasUnreportedChange = false;
        _this.value = enhancer(value, undefined, name);
        if (notifySpy && isSpyEnabled()) {
            spyReport({ type: "create", object: _this, newValue: _this.value });
        }
        return _this;
    }
    ObservableValue.prototype.set = function (newValue) {
        var oldValue = this.value;
        newValue = this.prepareNewValue(newValue);
        if (newValue !== UNCHANGED) {
            var notifySpy = isSpyEnabled();
            if (notifySpy) {
                spyReportStart({
                    type: "update",
                    object: this,
                    newValue: newValue, oldValue: oldValue
                });
            }
            this.setNewValue(newValue);
            if (notifySpy)
                spyReportEnd();
        }
    };
    ObservableValue.prototype.prepareNewValue = function (newValue) {
        checkIfStateModificationsAreAllowed(this);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, { object: this, type: "update", newValue: newValue });
            if (!change)
                return UNCHANGED;
            newValue = change.newValue;
        }
        newValue = this.enhancer(newValue, this.value, this.name);
        return this.value !== newValue
            ? newValue
            : UNCHANGED;
    };
    ObservableValue.prototype.setNewValue = function (newValue) {
        var oldValue = this.value;
        this.value = newValue;
        this.reportChanged();
        if (hasListeners(this)) {
            notifyListeners(this, {
                type: "update",
                object: this,
                newValue: newValue,
                oldValue: oldValue
            });
        }
    };
    ObservableValue.prototype.get = function () {
        this.reportObserved();
        return this.value;
    };
    ObservableValue.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableValue.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately)
            listener({
                object: this,
                type: "update",
                newValue: this.value,
                oldValue: undefined
            });
        return registerListener(this, listener);
    };
    ObservableValue.prototype.toJSON = function () {
        return this.get();
    };
    ObservableValue.prototype.toString = function () {
        return this.name + "[" + this.value + "]";
    };
    ObservableValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    return ObservableValue;
}(BaseAtom));
ObservableValue.prototype[primitiveSymbol()] = ObservableValue.prototype.valueOf;
var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);
exports.isBoxedObservable = isObservableValue;
function getAtom(thing, property) {
    if (typeof thing === "object" && thing !== null) {
        if (isObservableArray(thing)) {
            invariant(property === undefined, getMessage("m036"));
            return thing.$mobx.atom;
        }
        if (isObservableMap(thing)) {
            var anyThing = thing;
            if (property === undefined)
                return getAtom(anyThing._keys);
            var observable_2 = anyThing._data[property] || anyThing._hasMap[property];
            invariant(!!observable_2, "the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
            return observable_2;
        }
        runLazyInitializers(thing);
        if (isObservableObject(thing)) {
            if (!property)
                return fail("please specify a property");
            var observable_3 = thing.$mobx.values[property];
            invariant(!!observable_3, "no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
            return observable_3;
        }
        if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
            return thing;
        }
    }
    else if (typeof thing === "function") {
        if (isReaction(thing.$mobx)) {
            return thing.$mobx;
        }
    }
    return fail("Cannot obtain atom from " + thing);
}
function getAdministration(thing, property) {
    invariant(thing, "Expecting some object");
    if (property !== undefined)
        return getAdministration(getAtom(thing, property));
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing))
        return thing;
    if (isObservableMap(thing))
        return thing;
    runLazyInitializers(thing);
    if (thing.$mobx)
        return thing.$mobx;
    invariant(false, "Cannot obtain administration from " + thing);
}
function getDebugName(thing, property) {
    var named;
    if (property !== undefined)
        named = getAtom(thing, property);
    else if (isObservableObject(thing) || isObservableMap(thing))
        named = getAdministration(thing);
    else
        named = getAtom(thing);
    return named.name;
}
function createClassPropertyDecorator(onInitialize, get, set, enumerable, allowCustomArguments) {
    function classPropertyDecorator(target, key, descriptor, customArgs, argLen) {
        if (argLen === void 0) { argLen = 0; }
        invariant(allowCustomArguments || quacksLikeADecorator(arguments), "This function is a decorator, but it wasn't invoked like a decorator");
        if (!descriptor) {
            var newDescriptor = {
                enumerable: enumerable,
                configurable: true,
                get: function () {
                    if (!this.__mobxInitializedProps || this.__mobxInitializedProps[key] !== true)
                        typescriptInitializeProperty(this, key, undefined, onInitialize, customArgs, descriptor);
                    return get.call(this, key);
                },
                set: function (v) {
                    if (!this.__mobxInitializedProps || this.__mobxInitializedProps[key] !== true) {
                        typescriptInitializeProperty(this, key, v, onInitialize, customArgs, descriptor);
                    }
                    else {
                        set.call(this, key, v);
                    }
                }
            };
            if (arguments.length < 3 || arguments.length === 5 && argLen < 3) {
                Object.defineProperty(target, key, newDescriptor);
            }
            return newDescriptor;
        }
        else {
            if (!hasOwnProperty(target, "__mobxLazyInitializers")) {
                addHiddenProp(target, "__mobxLazyInitializers", (target.__mobxLazyInitializers && target.__mobxLazyInitializers.slice()) || []);
            }
            var value_1 = descriptor.value, initializer_1 = descriptor.initializer;
            target.__mobxLazyInitializers.push(function (instance) {
                onInitialize(instance, key, (initializer_1 ? initializer_1.call(instance) : value_1), customArgs, descriptor);
            });
            return {
                enumerable: enumerable, configurable: true,
                get: function () {
                    if (this.__mobxDidRunLazyInitializers !== true)
                        runLazyInitializers(this);
                    return get.call(this, key);
                },
                set: function (v) {
                    if (this.__mobxDidRunLazyInitializers !== true)
                        runLazyInitializers(this);
                    set.call(this, key, v);
                }
            };
        }
    }
    if (allowCustomArguments) {
        return function () {
            if (quacksLikeADecorator(arguments))
                return classPropertyDecorator.apply(null, arguments);
            var outerArgs = arguments;
            var argLen = arguments.length;
            return function (target, key, descriptor) { return classPropertyDecorator(target, key, descriptor, outerArgs, argLen); };
        };
    }
    return classPropertyDecorator;
}
function typescriptInitializeProperty(instance, key, v, onInitialize, customArgs, baseDescriptor) {
    if (!hasOwnProperty(instance, "__mobxInitializedProps"))
        addHiddenProp(instance, "__mobxInitializedProps", {});
    instance.__mobxInitializedProps[key] = true;
    onInitialize(instance, key, v, customArgs, baseDescriptor);
}
function runLazyInitializers(instance) {
    if (instance.__mobxDidRunLazyInitializers === true)
        return;
    if (instance.__mobxLazyInitializers) {
        addHiddenProp(instance, "__mobxDidRunLazyInitializers", true);
        instance.__mobxDidRunLazyInitializers && instance.__mobxLazyInitializers.forEach(function (initializer) { return initializer(instance); });
    }
}
function quacksLikeADecorator(args) {
    return (args.length === 2 || args.length === 3) && typeof args[1] === "string";
}
function iteratorSymbol() {
    return (typeof Symbol === "function" && Symbol.iterator) || "@@iterator";
}
var IS_ITERATING_MARKER = "__$$iterating";
function arrayAsIterator(array) {
    invariant(array[IS_ITERATING_MARKER] !== true, "Illegal state: cannot recycle array as iterator");
    addHiddenFinalProp(array, IS_ITERATING_MARKER, true);
    var idx = -1;
    addHiddenFinalProp(array, "next", function next() {
        idx++;
        return {
            done: idx >= this.length,
            value: idx < this.length ? this[idx] : undefined
        };
    });
    return array;
}
function declareIterator(prototType, iteratorFactory) {
    addHiddenFinalProp(prototType, iteratorSymbol(), iteratorFactory);
}
var messages = {
    "m001": "It is not allowed to assign new values to @action fields",
    "m002": "`runInAction` expects a function",
    "m003": "`runInAction` expects a function without arguments",
    "m004": "autorun expects a function",
    "m005": "Warning: attempted to pass an action to autorun. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",
    "m006": "Warning: attempted to pass an action to autorunAsync. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",
    "m007": "reaction only accepts 2 or 3 arguments. If migrating from MobX 2, please provide an options object",
    "m008": "wrapping reaction expression in `asReference` is no longer supported, use options object instead",
    "m009": "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'. It looks like it was used on a property.",
    "m010": "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'",
    "m011": "First argument to `computed` should be an expression. If using computed as decorator, don't pass it arguments",
    "m012": "computed takes one or two arguments if used as function",
    "m013": "[mobx.expr] 'expr' should only be used inside other reactive functions.",
    "m014": "extendObservable expected 2 or more arguments",
    "m015": "extendObservable expects an object as first argument",
    "m016": "extendObservable should not be used on maps, use map.merge instead",
    "m017": "all arguments of extendObservable should be objects",
    "m018": "extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540",
    "m019": "[mobx.isObservable] isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.",
    "m020": "modifiers can only be used for individual object properties",
    "m021": "observable expects zero or one arguments",
    "m022": "@observable can not be used on getters, use @computed instead",
    "m023": "Using `transaction` is deprecated, use `runInAction` or `(@)action` instead.",
    "m024": "whyRun() can only be used if a derivation is active, or by passing an computed value / reaction explicitly. If you invoked whyRun from inside a computation; the computation is currently suspended but re-evaluating because somebody requested its value.",
    "m025": "whyRun can only be used on reactions and computed values",
    "m026": "`action` can only be invoked on functions",
    "m028": "It is not allowed to set `useStrict` when a derivation is running",
    "m029": "INTERNAL ERROR only onBecomeUnobserved shouldn't be called twice in a row",
    "m030a": "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: ",
    "m030b": "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ",
    "m031": "Computed values are not allowed to not cause side effects by changing observables that are already being observed. Tried to modify: ",
    "m032": "* This computation is suspended (not in use by any reaction) and won't run automatically.\n	Didn't expect this computation to be suspended at this point?\n	  1. Make sure this computation is used by a reaction (reaction, autorun, observer).\n	  2. Check whether you are using this computation synchronously (in the same stack as they reaction that needs it).",
    "m033": "`observe` doesn't support the fire immediately property for observable maps.",
    "m034": "`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead",
    "m035": "Cannot make the designated object observable; it is not extensible",
    "m036": "It is not possible to get index atoms from arrays",
    "m037": "Hi there! I'm sorry you have just run into an exception.\nIf your debugger ends up here, know that some reaction (like the render() of an observer component, autorun or reaction)\nthrew an exception and that mobx caught it, to avoid that it brings the rest of your application down.\nThe original cause of the exception (the code that caused this reaction to run (again)), is still in the stack.\n\nHowever, more interesting is the actual stack trace of the error itself.\nHopefully the error is an instanceof Error, because in that case you can inspect the original stack of the error from where it was thrown.\nSee `error.stack` property, or press the very subtle \"(...)\" link you see near the console.error message that probably brought you here.\nThat stack is more interesting than the stack of this console.error itself.\n\nIf the exception you see is an exception you created yourself, make sure to use `throw new Error(\"Oops\")` instead of `throw \"Oops\"`,\nbecause the javascript environment will only preserve the original stack trace in the first form.\n\nYou can also make sure the debugger pauses the next time this very same exception is thrown by enabling \"Pause on caught exception\".\n(Note that it might pause on many other, unrelated exception as well).\n\nIf that all doesn't help you out, feel free to open an issue https://github.com/mobxjs/mobx/issues!\n",
    "m038": "Missing items in this list?\n    1. Check whether all used values are properly marked as observable (use isObservable to verify)\n    2. Make sure you didn't dereference values too early. MobX observes props, not primitives. E.g: use 'person.name' instead of 'name' in your computation.\n"
};
function getMessage(id) {
    return messages[id];
}
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
function getGlobal() {
    return global;
}
function getNextId() {
    return ++globalState.mobxGuid;
}
function fail(message, thing) {
    invariant(false, message, thing);
    throw "X";
}
function invariant(check, message, thing) {
    if (!check)
        throw new Error("[mobx] Invariant failed: " + message + (thing ? " in '" + thing + "'" : ""));
}
var deprecatedMessages = [];
function deprecated(msg) {
    if (deprecatedMessages.indexOf(msg) !== -1)
        return false;
    deprecatedMessages.push(msg);
    console.error("[mobx] Deprecated: " + msg);
    return true;
}
function once(func) {
    var invoked = false;
    return function () {
        if (invoked)
            return;
        invoked = true;
        return func.apply(this, arguments);
    };
}
var noop = function () { };
function unique(list) {
    var res = [];
    list.forEach(function (item) {
        if (res.indexOf(item) === -1)
            res.push(item);
    });
    return res;
}
function joinStrings(things, limit, separator) {
    if (limit === void 0) { limit = 100; }
    if (separator === void 0) { separator = " - "; }
    if (!things)
        return "";
    var sliced = things.slice(0, limit);
    return "" + sliced.join(separator) + (things.length > limit ? " (... and " + (things.length - limit) + "more)" : "");
}
function isObject(value) {
    return value !== null && typeof value === "object";
}
function isPlainObject(value) {
    if (value === null || typeof value !== "object")
        return false;
    var proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}
function objectAssign() {
    var res = arguments[0];
    for (var i = 1, l = arguments.length; i < l; i++) {
        var source = arguments[i];
        for (var key in source)
            if (hasOwnProperty(source, key)) {
                res[key] = source[key];
            }
    }
    return res;
}
function valueDidChange(compareStructural, oldValue, newValue) {
    if (typeof oldValue === 'number' && isNaN(oldValue)) {
        return typeof newValue !== 'number' || !isNaN(newValue);
    }
    return compareStructural
        ? !deepEqual(oldValue, newValue)
        : oldValue !== newValue;
}
var prototypeHasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwnProperty(object, propName) {
    return prototypeHasOwnProperty.call(object, propName);
}
function makeNonEnumerable(object, propNames) {
    for (var i = 0; i < propNames.length; i++) {
        addHiddenProp(object, propNames[i], object[propNames[i]]);
    }
}
function addHiddenProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: value
    });
}
function addHiddenFinalProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value
    });
}
function isPropertyConfigurable(object, prop) {
    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
}
function assertPropertyConfigurable(object, prop) {
    invariant(isPropertyConfigurable(object, prop), "Cannot make property '" + prop + "' observable, it is not configurable and writable in the target object");
}
function getEnumerableKeys(obj) {
    var res = [];
    for (var key in obj)
        res.push(key);
    return res;
}
function deepEqual(a, b) {
    if (a === null && b === null)
        return true;
    if (a === undefined && b === undefined)
        return true;
    if (typeof a !== "object")
        return a === b;
    var aIsArray = isArrayLike(a);
    var aIsMap = isMapLike(a);
    if (aIsArray !== isArrayLike(b)) {
        return false;
    }
    else if (aIsMap !== isMapLike(b)) {
        return false;
    }
    else if (aIsArray) {
        if (a.length !== b.length)
            return false;
        for (var i = a.length - 1; i >= 0; i--)
            if (!deepEqual(a[i], b[i]))
                return false;
        return true;
    }
    else if (aIsMap) {
        if (a.size !== b.size)
            return false;
        var equals_1 = true;
        a.forEach(function (value, key) {
            equals_1 = equals_1 && deepEqual(b.get(key), value);
        });
        return equals_1;
    }
    else if (typeof a === "object" && typeof b === "object") {
        if (a === null || b === null)
            return false;
        if (isMapLike(a) && isMapLike(b)) {
            if (a.size !== b.size)
                return false;
            return deepEqual(observable.shallowMap(a).entries(), observable.shallowMap(b).entries());
        }
        if (getEnumerableKeys(a).length !== getEnumerableKeys(b).length)
            return false;
        for (var prop in a) {
            if (!(prop in b))
                return false;
            if (!deepEqual(a[prop], b[prop]))
                return false;
        }
        return true;
    }
    return false;
}
function createInstanceofPredicate(name, clazz) {
    var propName = "isMobX" + name;
    clazz.prototype[propName] = true;
    return function (x) {
        return isObject(x) && x[propName] === true;
    };
}
function isArrayLike(x) {
    return Array.isArray(x) || isObservableArray(x);
}
exports.isArrayLike = isArrayLike;
function isMapLike(x) {
    return isES6Map(x) || isObservableMap(x);
}
function isES6Map(thing) {
    if (getGlobal().Map !== undefined && thing instanceof getGlobal().Map)
        return true;
    return false;
}
function primitiveSymbol() {
    return (typeof Symbol === "function" && Symbol.toPrimitive) || "@@toPrimitive";
}
function toPrimitive(value) {
    return value === null ? null : typeof value === "object" ? ("" + value) : value;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(90)))

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(19);
var call = __webpack_require__(103);
var isArrayIter = __webpack_require__(72);
var anObject = __webpack_require__(1);
var toLength = __webpack_require__(8);
var getIterFn = __webpack_require__(88);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(1);
var dPs = __webpack_require__(109);
var enumBugKeys = __webpack_require__(68);
var IE_PROTO = __webpack_require__(80)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(67)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(70).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(111);
var hiddenKeys = __webpack_require__(68).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(111);
var enumBugKeys = __webpack_require__(68);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(13);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var dP = __webpack_require__(7);
var DESCRIPTORS = __webpack_require__(6);
var SPECIES = __webpack_require__(5)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(25);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f;
var has = __webpack_require__(11);
var TAG = __webpack_require__(5)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var defined = __webpack_require__(23);
var fails = __webpack_require__(3);
var spaces = __webpack_require__(84);
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(18);
var TAG = __webpack_require__(5)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(18);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(17);
var toLength = __webpack_require__(8);
var toAbsoluteIndex = __webpack_require__(41);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var $export = __webpack_require__(0);
var redefine = __webpack_require__(13);
var redefineAll = __webpack_require__(39);
var meta = __webpack_require__(30);
var forOf = __webpack_require__(33);
var anInstance = __webpack_require__(32);
var isObject = __webpack_require__(4);
var fails = __webpack_require__(3);
var $iterDetect = __webpack_require__(56);
var setToStringTag = __webpack_require__(44);
var inheritIfRequired = __webpack_require__(71);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__(12);
var redefine = __webpack_require__(13);
var fails = __webpack_require__(3);
var defined = __webpack_require__(23);
var wks = __webpack_require__(5);

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(1);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(18);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(4);
var cof = __webpack_require__(18);
var MATCH = __webpack_require__(5)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(5)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Forced replacement prototype accessors methods
module.exports = __webpack_require__(34) || !__webpack_require__(3)(function () {
  var K = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call
  __defineSetter__.call(null, K, function () { /* empty */ });
  delete __webpack_require__(2)[K];
});


/***/ }),
/* 58 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(0);
var aFunction = __webpack_require__(10);
var ctx = __webpack_require__(19);
var forOf = __webpack_require__(33);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(0);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(1);
var aFunction = __webpack_require__(10);
var SPECIES = __webpack_require__(5)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var hide = __webpack_require__(12);
var uid = __webpack_require__(42);
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(9);
var toAbsoluteIndex = __webpack_require__(41);
var toLength = __webpack_require__(8);
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(138);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(7);
var createDesc = __webpack_require__(38);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 68 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(5)('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var setPrototypeOf = __webpack_require__(79).set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(43);
var ITERATOR = __webpack_require__(5)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(35);
var descriptor = __webpack_require__(38);
var setToStringTag = __webpack_require__(44);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(12)(IteratorPrototype, __webpack_require__(5)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(34);
var $export = __webpack_require__(0);
var redefine = __webpack_require__(13);
var hide = __webpack_require__(12);
var has = __webpack_require__(11);
var Iterators = __webpack_require__(43);
var $iterCreate = __webpack_require__(73);
var setToStringTag = __webpack_require__(44);
var getPrototypeOf = __webpack_require__(16);
var ITERATOR = __webpack_require__(5)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 75 */
/***/ (function(module, exports) {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var macrotask = __webpack_require__(85).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(18)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if (Observer) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(10);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(4);
var anObject = __webpack_require__(1);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(19)(Function.call, __webpack_require__(15).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(61)('keys');
var uid = __webpack_require__(42);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(25);
var defined = __webpack_require__(23);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(55);
var defined = __webpack_require__(23);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(25);
var defined = __webpack_require__(23);

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(19);
var invoke = __webpack_require__(101);
var html = __webpack_require__(70);
var cel = __webpack_require__(67);
var global = __webpack_require__(2);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(18)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var DESCRIPTORS = __webpack_require__(6);
var LIBRARY = __webpack_require__(34);
var $typed = __webpack_require__(63);
var hide = __webpack_require__(12);
var redefineAll = __webpack_require__(39);
var fails = __webpack_require__(3);
var anInstance = __webpack_require__(32);
var toInteger = __webpack_require__(25);
var toLength = __webpack_require__(8);
var toIndex = __webpack_require__(119);
var gOPN = __webpack_require__(36).f;
var dP = __webpack_require__(7).f;
var arrayFill = __webpack_require__(64);
var setToStringTag = __webpack_require__(44);
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(22);
var LIBRARY = __webpack_require__(34);
var wksExt = __webpack_require__(120);
var defineProperty = __webpack_require__(7).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(47);
var ITERATOR = __webpack_require__(5)('iterator');
var Iterators = __webpack_require__(43);
module.exports = __webpack_require__(22).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(29);
var step = __webpack_require__(104);
var Iterators = __webpack_require__(43);
var toIObject = __webpack_require__(17);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(74)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 90 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var cof = __webpack_require__(18);
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(9);
var toAbsoluteIndex = __webpack_require__(41);
var toLength = __webpack_require__(8);

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(33);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(10);
var toObject = __webpack_require__(9);
var IObject = __webpack_require__(48);
var toLength = __webpack_require__(8);

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(10);
var isObject = __webpack_require__(4);
var invoke = __webpack_require__(101);
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(7).f;
var create = __webpack_require__(35);
var redefineAll = __webpack_require__(39);
var ctx = __webpack_require__(19);
var anInstance = __webpack_require__(32);
var forOf = __webpack_require__(33);
var $iterDefine = __webpack_require__(74);
var step = __webpack_require__(104);
var setSpecies = __webpack_require__(40);
var DESCRIPTORS = __webpack_require__(6);
var fastKey = __webpack_require__(30).fastKey;
var validate = __webpack_require__(46);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(47);
var from = __webpack_require__(93);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(39);
var getWeak = __webpack_require__(30).getWeak;
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);
var anInstance = __webpack_require__(32);
var forOf = __webpack_require__(33);
var createArrayMethod = __webpack_require__(21);
var $has = __webpack_require__(11);
var validate = __webpack_require__(46);
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = __webpack_require__(54);
var isObject = __webpack_require__(4);
var toLength = __webpack_require__(8);
var ctx = __webpack_require__(19);
var IS_CONCAT_SPREADABLE = __webpack_require__(5)('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(3)(function () {
  return Object.defineProperty(__webpack_require__(67)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 101 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(4);
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(1);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var sign = __webpack_require__(76);
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};


/***/ }),
/* 106 */
/***/ (function(module, exports) {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};


/***/ }),
/* 107 */
/***/ (function(module, exports) {

// https://rwaldron.github.io/proposal-math-extensions/
module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
  if (
    arguments.length === 0
      // eslint-disable-next-line no-self-compare
      || x != x
      // eslint-disable-next-line no-self-compare
      || inLow != inLow
      // eslint-disable-next-line no-self-compare
      || inHigh != inHigh
      // eslint-disable-next-line no-self-compare
      || outLow != outLow
      // eslint-disable-next-line no-self-compare
      || outHigh != outHigh
  ) return NaN;
  if (x === Infinity || x === -Infinity) return x;
  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(37);
var gOPS = __webpack_require__(58);
var pIE = __webpack_require__(49);
var toObject = __webpack_require__(9);
var IObject = __webpack_require__(48);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(3)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var anObject = __webpack_require__(1);
var getKeys = __webpack_require__(37);

module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(17);
var gOPN = __webpack_require__(36).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(11);
var toIObject = __webpack_require__(17);
var arrayIndexOf = __webpack_require__(50)(false);
var IE_PROTO = __webpack_require__(80)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(37);
var toIObject = __webpack_require__(17);
var isEnum = __webpack_require__(49).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(36);
var gOPS = __webpack_require__(58);
var anObject = __webpack_require__(1);
var Reflect = __webpack_require__(2).Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__(2).parseFloat;
var $trim = __webpack_require__(45).trim;

module.exports = 1 / $parseFloat(__webpack_require__(84) + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(2).parseInt;
var $trim = __webpack_require__(45).trim;
var ws = __webpack_require__(84);
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);
var newPromiseCapability = __webpack_require__(78);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(8);
var repeat = __webpack_require__(83);
var defined = __webpack_require__(23);

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(25);
var toLength = __webpack_require__(8);
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(5);


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(96);
var validate = __webpack_require__(46);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(51)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(6) && /./g.flags != 'g') __webpack_require__(7).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(53)
});


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(96);
var validate = __webpack_require__(46);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(51)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var each = __webpack_require__(21)(0);
var redefine = __webpack_require__(13);
var meta = __webpack_require__(30);
var assign = __webpack_require__(108);
var weak = __webpack_require__(98);
var isObject = __webpack_require__(4);
var fails = __webpack_require__(3);
var validate = __webpack_require__(46);
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(51)(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["zStrophe"] = factory();
	else
		root["zStrophe"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_LOCAL_MODULE_0__, __WEBPACK_LOCAL_MODULE_0__module;var __WEBPACK_LOCAL_MODULE_1__, __WEBPACK_LOCAL_MODULE_1__module;var __WEBPACK_LOCAL_MODULE_2__, __WEBPACK_LOCAL_MODULE_2__module;var __WEBPACK_LOCAL_MODULE_3__, __WEBPACK_LOCAL_MODULE_3__module;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_4__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_5__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_6__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_7__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_8__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** File: strophe.js
 *  A JavaScript library for writing XMPP clients.
 *
 *  This library uses either Bidirectional-streams Over Synchronous HTTP (BOSH)
 *  to emulate a persistent, stateful, two-way connection to an XMPP server or
 *  alternatively WebSockets.
 *
 *  More information on BOSH can be found in XEP 124.
 *  For more information on XMPP-over WebSocket see this RFC:
 *  http://tools.ietf.org/html/rfc7395
 */

/* All of the Strophe globals are defined in this special function below so
 * that references to the globals become closures.  This will ensure that
 * on page reload, these references will still be available to callbacks
 * that are still executing.
 */

/* jshint ignore:start */
(function (callback) {
    /* jshint ignore:end */

    // This code was written by Tyler Akins and has been placed in the
    // public domain.  It would be nice if you left this header intact.
    // Base64 code from Tyler Akins -- http://rumkin.com

    (function (root, factory) {
        if (true) {
            !(__WEBPACK_LOCAL_MODULE_0__module = { id: "strophe-base64", exports: {}, loaded: false }, __WEBPACK_LOCAL_MODULE_0__ = function () {
                return factory();
            }.call(__WEBPACK_LOCAL_MODULE_0__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_0__module.exports, __WEBPACK_LOCAL_MODULE_0__module), __WEBPACK_LOCAL_MODULE_0__module.loaded = true, __WEBPACK_LOCAL_MODULE_0__ === undefined && (__WEBPACK_LOCAL_MODULE_0__ = __WEBPACK_LOCAL_MODULE_0__module.exports));
        } else {
            // Browser globals
            root.Base64 = factory();
        }
    })(this, function () {
        var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

        var obj = {
            /**
             * Encodes a string in base64
             * @param {String} input The string to encode in base64.
             */
            encode: function encode(input) {
                var output = "";
                var chr1, chr2, chr3;
                var enc1, enc2, enc3, enc4;
                var i = 0;

                do {
                    chr1 = input.charCodeAt(i++);
                    chr2 = input.charCodeAt(i++);
                    chr3 = input.charCodeAt(i++);

                    enc1 = chr1 >> 2;
                    enc2 = (chr1 & 3) << 4 | chr2 >> 4;
                    enc3 = (chr2 & 15) << 2 | chr3 >> 6;
                    enc4 = chr3 & 63;

                    if (isNaN(chr2)) {
                        enc2 = (chr1 & 3) << 4;
                        enc3 = enc4 = 64;
                    } else if (isNaN(chr3)) {
                        enc4 = 64;
                    }

                    output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
                } while (i < input.length);

                return output;
            },

            /**
             * Decodes a base64 string.
             * @param {String} input The string to decode.
             */
            decode: function decode(input) {
                var output = "";
                var chr1, chr2, chr3;
                var enc1, enc2, enc3, enc4;
                var i = 0;

                // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
                input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

                do {
                    enc1 = keyStr.indexOf(input.charAt(i++));
                    enc2 = keyStr.indexOf(input.charAt(i++));
                    enc3 = keyStr.indexOf(input.charAt(i++));
                    enc4 = keyStr.indexOf(input.charAt(i++));

                    chr1 = enc1 << 2 | enc2 >> 4;
                    chr2 = (enc2 & 15) << 4 | enc3 >> 2;
                    chr3 = (enc3 & 3) << 6 | enc4;

                    output = output + String.fromCharCode(chr1);

                    if (enc3 != 64) {
                        output = output + String.fromCharCode(chr2);
                    }
                    if (enc4 != 64) {
                        output = output + String.fromCharCode(chr3);
                    }
                } while (i < input.length);

                return output;
            }
        };
        return obj;
    });

    /*
     * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
     * in FIPS PUB 180-1
     * Version 2.1a Copyright Paul Johnston 2000 - 2002.
     * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
     * Distributed under the BSD License
     * See http://pajhome.org.uk/crypt/md5 for details.
     */

    /* jshint undef: true, unused: true:, noarg: true, latedef: false */
    /* global define */

    /* Some functions and variables have been stripped for use with Strophe */

    (function (root, factory) {
        if (true) {
            !(__WEBPACK_LOCAL_MODULE_1__module = { id: "strophe-sha1", exports: {}, loaded: false }, __WEBPACK_LOCAL_MODULE_1__ = function () {
                return factory();
            }.call(__WEBPACK_LOCAL_MODULE_1__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_1__module.exports, __WEBPACK_LOCAL_MODULE_1__module), __WEBPACK_LOCAL_MODULE_1__module.loaded = true, __WEBPACK_LOCAL_MODULE_1__ === undefined && (__WEBPACK_LOCAL_MODULE_1__ = __WEBPACK_LOCAL_MODULE_1__module.exports));
        } else {
            // Browser globals
            root.SHA1 = factory();
        }
    })(this, function () {

        /*
         * Calculate the SHA-1 of an array of big-endian words, and a bit length
         */
        function core_sha1(x, len) {
            /* append padding */
            x[len >> 5] |= 0x80 << 24 - len % 32;
            x[(len + 64 >> 9 << 4) + 15] = len;

            var w = new Array(80);
            var a = 1732584193;
            var b = -271733879;
            var c = -1732584194;
            var d = 271733878;
            var e = -1009589776;

            var i, j, t, olda, oldb, oldc, oldd, olde;
            for (i = 0; i < x.length; i += 16) {
                olda = a;
                oldb = b;
                oldc = c;
                oldd = d;
                olde = e;

                for (j = 0; j < 80; j++) {
                    if (j < 16) {
                        w[j] = x[i + j];
                    } else {
                        w[j] = rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
                    }
                    t = safe_add(safe_add(rol(a, 5), sha1_ft(j, b, c, d)), safe_add(safe_add(e, w[j]), sha1_kt(j)));
                    e = d;
                    d = c;
                    c = rol(b, 30);
                    b = a;
                    a = t;
                }

                a = safe_add(a, olda);
                b = safe_add(b, oldb);
                c = safe_add(c, oldc);
                d = safe_add(d, oldd);
                e = safe_add(e, olde);
            }
            return [a, b, c, d, e];
        }

        /*
         * Perform the appropriate triplet combination function for the current
         * iteration
         */
        function sha1_ft(t, b, c, d) {
            if (t < 20) {
                return b & c | ~b & d;
            }
            if (t < 40) {
                return b ^ c ^ d;
            }
            if (t < 60) {
                return b & c | b & d | c & d;
            }
            return b ^ c ^ d;
        }

        /*
         * Determine the appropriate additive constant for the current iteration
         */
        function sha1_kt(t) {
            return t < 20 ? 1518500249 : t < 40 ? 1859775393 : t < 60 ? -1894007588 : -899497514;
        }

        /*
         * Calculate the HMAC-SHA1 of a key and some data
         */
        function core_hmac_sha1(key, data) {
            var bkey = str2binb(key);
            if (bkey.length > 16) {
                bkey = core_sha1(bkey, key.length * 8);
            }

            var ipad = new Array(16),
                opad = new Array(16);
            for (var i = 0; i < 16; i++) {
                ipad[i] = bkey[i] ^ 0x36363636;
                opad[i] = bkey[i] ^ 0x5C5C5C5C;
            }

            var hash = core_sha1(ipad.concat(str2binb(data)), 512 + data.length * 8);
            return core_sha1(opad.concat(hash), 512 + 160);
        }

        /*
         * Add integers, wrapping at 2^32. This uses 16-bit operations internally
         * to work around bugs in some JS interpreters.
         */
        function safe_add(x, y) {
            var lsw = (x & 0xFFFF) + (y & 0xFFFF);
            var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return msw << 16 | lsw & 0xFFFF;
        }

        /*
         * Bitwise rotate a 32-bit number to the left.
         */
        function rol(num, cnt) {
            return num << cnt | num >>> 32 - cnt;
        }

        /*
         * Convert an 8-bit or 16-bit string to an array of big-endian words
         * In 8-bit function, characters >255 have their hi-byte silently ignored.
         */
        function str2binb(str) {
            var bin = [];
            var mask = 255;
            for (var i = 0; i < str.length * 8; i += 8) {
                bin[i >> 5] |= (str.charCodeAt(i / 8) & mask) << 24 - i % 32;
            }
            return bin;
        }

        /*
         * Convert an array of big-endian words to a string
         */
        function binb2str(bin) {
            var str = "";
            var mask = 255;
            for (var i = 0; i < bin.length * 32; i += 8) {
                str += String.fromCharCode(bin[i >> 5] >>> 24 - i % 32 & mask);
            }
            return str;
        }

        /*
         * Convert an array of big-endian words to a base-64 string
         */
        function binb2b64(binarray) {
            var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            var str = "";
            var triplet, j;
            for (var i = 0; i < binarray.length * 4; i += 3) {
                triplet = (binarray[i >> 2] >> 8 * (3 - i % 4) & 0xFF) << 16 | (binarray[i + 1 >> 2] >> 8 * (3 - (i + 1) % 4) & 0xFF) << 8 | binarray[i + 2 >> 2] >> 8 * (3 - (i + 2) % 4) & 0xFF;
                for (j = 0; j < 4; j++) {
                    if (i * 8 + j * 6 > binarray.length * 32) {
                        str += "=";
                    } else {
                        str += tab.charAt(triplet >> 6 * (3 - j) & 0x3F);
                    }
                }
            }
            return str;
        }

        /*
         * These are the functions you'll usually want to call
         * They take string arguments and return either hex or base-64 encoded strings
         */
        return {
            b64_hmac_sha1: function b64_hmac_sha1(key, data) {
                return binb2b64(core_hmac_sha1(key, data));
            },
            b64_sha1: function b64_sha1(s) {
                return binb2b64(core_sha1(str2binb(s), s.length * 8));
            },
            binb2str: binb2str,
            core_hmac_sha1: core_hmac_sha1,
            str_hmac_sha1: function str_hmac_sha1(key, data) {
                return binb2str(core_hmac_sha1(key, data));
            },
            str_sha1: function str_sha1(s) {
                return binb2str(core_sha1(str2binb(s), s.length * 8));
            }
        };
    });

    /*
     * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
     * Digest Algorithm, as defined in RFC 1321.
     * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
     * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
     * Distributed under the BSD License
     * See http://pajhome.org.uk/crypt/md5 for more info.
     */

    /*
     * Everything that isn't used by Strophe has been stripped here!
     */

    (function (root, factory) {
        if (true) {
            !(__WEBPACK_LOCAL_MODULE_2__module = { id: "strophe-md5", exports: {}, loaded: false }, __WEBPACK_LOCAL_MODULE_2__ = function () {
                return factory();
            }.call(__WEBPACK_LOCAL_MODULE_2__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_2__module.exports, __WEBPACK_LOCAL_MODULE_2__module), __WEBPACK_LOCAL_MODULE_2__module.loaded = true, __WEBPACK_LOCAL_MODULE_2__ === undefined && (__WEBPACK_LOCAL_MODULE_2__ = __WEBPACK_LOCAL_MODULE_2__module.exports));
        } else {
            // Browser globals
            root.MD5 = factory();
        }
    })(this, function (b) {
        /*
         * Add integers, wrapping at 2^32. This uses 16-bit operations internally
         * to work around bugs in some JS interpreters.
         */
        var safe_add = function safe_add(x, y) {
            var lsw = (x & 0xFFFF) + (y & 0xFFFF);
            var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return msw << 16 | lsw & 0xFFFF;
        };

        /*
         * Bitwise rotate a 32-bit number to the left.
         */
        var bit_rol = function bit_rol(num, cnt) {
            return num << cnt | num >>> 32 - cnt;
        };

        /*
         * Convert a string to an array of little-endian words
         */
        var str2binl = function str2binl(str) {
            var bin = [];
            for (var i = 0; i < str.length * 8; i += 8) {
                bin[i >> 5] |= (str.charCodeAt(i / 8) & 255) << i % 32;
            }
            return bin;
        };

        /*
         * Convert an array of little-endian words to a string
         */
        var binl2str = function binl2str(bin) {
            var str = "";
            for (var i = 0; i < bin.length * 32; i += 8) {
                str += String.fromCharCode(bin[i >> 5] >>> i % 32 & 255);
            }
            return str;
        };

        /*
         * Convert an array of little-endian words to a hex string.
         */
        var binl2hex = function binl2hex(binarray) {
            var hex_tab = "0123456789abcdef";
            var str = "";
            for (var i = 0; i < binarray.length * 4; i++) {
                str += hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 + 4 & 0xF) + hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 & 0xF);
            }
            return str;
        };

        /*
         * These functions implement the four basic operations the algorithm uses.
         */
        var md5_cmn = function md5_cmn(q, a, b, x, s, t) {
            return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
        };

        var md5_ff = function md5_ff(a, b, c, d, x, s, t) {
            return md5_cmn(b & c | ~b & d, a, b, x, s, t);
        };

        var md5_gg = function md5_gg(a, b, c, d, x, s, t) {
            return md5_cmn(b & d | c & ~d, a, b, x, s, t);
        };

        var md5_hh = function md5_hh(a, b, c, d, x, s, t) {
            return md5_cmn(b ^ c ^ d, a, b, x, s, t);
        };

        var md5_ii = function md5_ii(a, b, c, d, x, s, t) {
            return md5_cmn(c ^ (b | ~d), a, b, x, s, t);
        };

        /*
         * Calculate the MD5 of an array of little-endian words, and a bit length
         */
        var core_md5 = function core_md5(x, len) {
            /* append padding */
            x[len >> 5] |= 0x80 << len % 32;
            x[(len + 64 >>> 9 << 4) + 14] = len;

            var a = 1732584193;
            var b = -271733879;
            var c = -1732584194;
            var d = 271733878;

            var olda, oldb, oldc, oldd;
            for (var i = 0; i < x.length; i += 16) {
                olda = a;
                oldb = b;
                oldc = c;
                oldd = d;

                a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
                d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
                c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
                b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
                a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
                d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
                c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
                b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
                a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
                d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
                c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
                b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
                a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
                d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
                c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
                b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

                a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
                d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
                c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
                b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
                a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
                d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
                c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
                b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
                a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
                d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
                c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
                b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
                a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
                d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
                c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
                b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

                a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
                d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
                c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
                b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
                a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
                d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
                c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
                b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
                a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
                d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
                c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
                b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
                a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
                d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
                c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
                b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

                a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
                d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
                c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
                b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
                a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
                d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
                c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
                b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
                a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
                d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
                c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
                b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
                a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
                d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
                c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
                b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

                a = safe_add(a, olda);
                b = safe_add(b, oldb);
                c = safe_add(c, oldc);
                d = safe_add(d, oldd);
            }
            return [a, b, c, d];
        };

        var obj = {
            /*
             * These are the functions you'll usually want to call.
             * They take string arguments and return either hex or base-64 encoded
             * strings.
             */
            hexdigest: function hexdigest(s) {
                return binl2hex(core_md5(str2binl(s), s.length * 8));
            },

            hash: function hash(s) {
                return binl2str(core_md5(str2binl(s), s.length * 8));
            }
        };
        return obj;
    });

    (function (root, factory) {
        if (true) {
            !(__WEBPACK_LOCAL_MODULE_3__module = { id: "strophe-utils", exports: {}, loaded: false }, __WEBPACK_LOCAL_MODULE_3__ = function () {
                return factory();
            }.call(__WEBPACK_LOCAL_MODULE_3__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_3__module.exports, __WEBPACK_LOCAL_MODULE_3__module), __WEBPACK_LOCAL_MODULE_3__module.loaded = true, __WEBPACK_LOCAL_MODULE_3__ === undefined && (__WEBPACK_LOCAL_MODULE_3__ = __WEBPACK_LOCAL_MODULE_3__module.exports));
        } else {
            // Browser globals
            root.stropheUtils = factory();
        }
    })(this, function () {

        var utils = {

            utf16to8: function utf16to8(str) {
                var i, c;
                var out = "";
                var len = str.length;
                for (i = 0; i < len; i++) {
                    c = str.charCodeAt(i);
                    if (c >= 0x0000 && c <= 0x007F) {
                        out += str.charAt(i);
                    } else if (c > 0x07FF) {
                        out += String.fromCharCode(0xE0 | c >> 12 & 0x0F);
                        out += String.fromCharCode(0x80 | c >> 6 & 0x3F);
                        out += String.fromCharCode(0x80 | c >> 0 & 0x3F);
                    } else {
                        out += String.fromCharCode(0xC0 | c >> 6 & 0x1F);
                        out += String.fromCharCode(0x80 | c >> 0 & 0x3F);
                    }
                }
                return out;
            },

            addCookies: function addCookies(cookies) {
                /* Parameters:
                 *  (Object) cookies - either a map of cookie names
                 *    to string values or to maps of cookie values.
                 *
                 * For example:
                 * { "myCookie": "1234" }
                 *
                 * or:
                 * { "myCookie": {
                 *      "value": "1234",
                 *      "domain": ".example.org",
                 *      "path": "/",
                 *      "expires": expirationDate
                 *      }
                 *  }
                 *
                 *  These values get passed to Strophe.Connection via
                 *   options.cookies
                 */
                var cookieName, cookieObj, isObj, cookieValue, expires, domain, path;
                for (cookieName in cookies || {}) {
                    expires = '';
                    domain = '';
                    path = '';
                    cookieObj = cookies[cookieName];
                    isObj = (typeof cookieObj === 'undefined' ? 'undefined' : _typeof(cookieObj)) == "object";
                    cookieValue = escape(unescape(isObj ? cookieObj.value : cookieObj));
                    if (isObj) {
                        expires = cookieObj.expires ? ";expires=" + cookieObj.expires : '';
                        domain = cookieObj.domain ? ";domain=" + cookieObj.domain : '';
                        path = cookieObj.path ? ";path=" + cookieObj.path : '';
                    }
                    document.cookie = cookieName + '=' + cookieValue + expires + domain + path;
                }
            }
        };
        return utils;
    });

    /*
        This program is distributed under the terms of the MIT license.
        Please see the LICENSE file for details.
          Copyright 2006-2008, OGG, LLC
    */

    /* jshint undef: true, unused: true:, noarg: true, latedef: true */
    /* global define */

    (function (root, factory) {
        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_LOCAL_MODULE_4__ = (function () {
                return factory();
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));
        } else {
            // Browser globals
            return factory();
        }
    })(this, function () {

        /** Function: Function.prototype.bind
         *  Bind a function to an instance.
         *
         *  This Function object extension method creates a bound method similar
         *  to those in Python.  This means that the 'this' object will point
         *  to the instance you want.  See <MDC's bind() documentation at https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/bind>
         *  and <Bound Functions and Function Imports in JavaScript at http://benjamin.smedbergs.us/blog/2007-01-03/bound-functions-and-function-imports-in-javascript/>
         *  for a complete explanation.
         *
         *  This extension already exists in some browsers (namely, Firefox 3), but
         *  we provide it to support those that don't.
         *
         *  Parameters:
         *    (Object) obj - The object that will become 'this' in the bound function.
         *    (Object) argN - An option argument that will be prepended to the
         *      arguments given for the function call
         *
         *  Returns:
         *    The bound function.
         */
        if (!Function.prototype.bind) {
            Function.prototype.bind = function (obj /*, arg1, arg2, ... */) {
                var func = this;
                var _slice = Array.prototype.slice;
                var _concat = Array.prototype.concat;
                var _args = _slice.call(arguments, 1);
                return function () {
                    return func.apply(obj ? obj : this, _concat.call(_args, _slice.call(arguments, 0)));
                };
            };
        }

        /** Function: Array.isArray
         *  This is a polyfill for the ES5 Array.isArray method.
         */
        if (!Array.isArray) {
            Array.isArray = function (arg) {
                return Object.prototype.toString.call(arg) === '[object Array]';
            };
        }

        /** Function: Array.prototype.indexOf
         *  Return the index of an object in an array.
         *
         *  This function is not supplied by some JavaScript implementations, so
         *  we provide it if it is missing.  This code is from:
         *  http://developer.mozilla.org/En/Core_JavaScript_1.5_Reference:Objects:Array:indexOf
         *
         *  Parameters:
         *    (Object) elt - The object to look for.
         *    (Integer) from - The index from which to start looking. (optional).
         *
         *  Returns:
         *    The index of elt in the array or -1 if not found.
         */
        if (!Array.prototype.indexOf) {
            Array.prototype.indexOf = function (elt /*, from*/) {
                var len = this.length;
                var from = Number(arguments[1]) || 0;
                from = from < 0 ? Math.ceil(from) : Math.floor(from);
                if (from < 0) {
                    from += len;
                }

                for (; from < len; from++) {
                    if (from in this && this[from] === elt) {
                        return from;
                    }
                }
                return -1;
            };
        }
    });

    /** Function: Array.prototype.forEach
     *
     *  This function is not available in IE < 9
     *
     *  See <forEach on developer.mozilla.org at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach>
     */
    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function (callback, thisArg) {
            var T, k;
            if (this === null) {
                throw new TypeError(' this is null or not defined');
            }

            // 1. Let O be the result of calling toObject() passing the
            // |this| value as the argument.
            var O = Object(this);
            // 2. Let lenValue be the result of calling the Get() internal
            // method of O with the argument "length".
            // 3. Let len be toUint32(lenValue).
            var len = O.length >>> 0;
            // 4. If isCallable(callback) is false, throw a TypeError exception.
            // See: http://es5.github.com/#x9.11
            if (typeof callback !== "function") {
                throw new TypeError(callback + ' is not a function');
            }
            // 5. If thisArg was supplied, let T be thisArg; else let
            // T be undefined.
            if (arguments.length > 1) {
                T = thisArg;
            }
            // 6. Let k be 0
            k = 0;
            // 7. Repeat, while k < len
            while (k < len) {
                var kValue;
                // a. Let Pk be ToString(k).
                //        This is implicit for LHS operands of the in operator
                // b. Let kPresent be the result of calling the HasProperty
                //        internal method of O with argument Pk.
                //        This step can be combined with c
                // c. If kPresent is true, then
                if (k in O) {
                    // i. Let kValue be the result of calling the Get internal
                    // method of O with argument Pk.
                    kValue = O[k];
                    // ii. Call the Call internal method of callback with T as
                    // the this value and argument list containing kValue, k, and O.
                    callback.call(T, kValue, k, O);
                }
                // d. Increase k by 1.
                k++;
            }
            // 8. return undefined
        };
    }

    /*
        This program is distributed under the terms of the MIT license.
        Please see the LICENSE file for details.
          Copyright 2006-2008, OGG, LLC
    */

    /* jshint undef: true, unused: true:, noarg: true, latedef: true */
    /*global define, document, window, setTimeout, clearTimeout, ActiveXObject, DOMParser */

    (function (root, factory) {
        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_1__, __WEBPACK_LOCAL_MODULE_0__, __WEBPACK_LOCAL_MODULE_2__, __WEBPACK_LOCAL_MODULE_3__, __WEBPACK_LOCAL_MODULE_4__], __WEBPACK_LOCAL_MODULE_5__ = (function () {
                return factory.apply(this, arguments);
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));
        } else {
            // Browser globals
            var o = factory(root.SHA1, root.Base64, root.MD5, root.stropheUtils);
            window.Strophe = o.Strophe;
            window.$build = o.$build;
            window.$iq = o.$iq;
            window.$msg = o.$msg;
            window.$pres = o.$pres;
            window.SHA1 = o.SHA1;
            window.Base64 = o.Base64;
            window.MD5 = o.MD5;
            window.b64_hmac_sha1 = o.SHA1.b64_hmac_sha1;
            window.b64_sha1 = o.SHA1.b64_sha1;
            window.str_hmac_sha1 = o.SHA1.str_hmac_sha1;
            window.str_sha1 = o.SHA1.str_sha1;
        }
    })(this, function (SHA1, Base64, MD5, utils) {

        var Strophe;

        /** Function: $build
         *  Create a Strophe.Builder.
         *  This is an alias for 'new Strophe.Builder(name, attrs)'.
         *
         *  Parameters:
         *    (String) name - The root element name.
         *    (Object) attrs - The attributes for the root element in object notation.
         *
         *  Returns:
         *    A new Strophe.Builder object.
         */
        function $build(name, attrs) {
            return new Strophe.Builder(name, attrs);
        }

        /** Function: $msg
         *  Create a Strophe.Builder with a <message/> element as the root.
         *
         *  Parameters:
         *    (Object) attrs - The <message/> element attributes in object notation.
         *
         *  Returns:
         *    A new Strophe.Builder object.
         */
        function $msg(attrs) {
            return new Strophe.Builder("message", attrs);
        }

        /** Function: $iq
         *  Create a Strophe.Builder with an <iq/> element as the root.
         *
         *  Parameters:
         *    (Object) attrs - The <iq/> element attributes in object notation.
         *
         *  Returns:
         *    A new Strophe.Builder object.
         */
        function $iq(attrs) {
            return new Strophe.Builder("iq", attrs);
        }

        /** Function: $pres
         *  Create a Strophe.Builder with a <presence/> element as the root.
         *
         *  Parameters:
         *    (Object) attrs - The <presence/> element attributes in object notation.
         *
         *  Returns:
         *    A new Strophe.Builder object.
         */
        function $pres(attrs) {
            return new Strophe.Builder("presence", attrs);
        }

        /** Class: Strophe
         *  An object container for all Strophe library functions.
         *
         *  This class is just a container for all the objects and constants
         *  used in the library.  It is not meant to be instantiated, but to
         *  provide a namespace for library objects, constants, and functions.
         */
        Strophe = {
            /** Constant: VERSION
             *  The version of the Strophe library. Unreleased builds will have
             *  a version of head-HASH where HASH is a partial revision.
             */
            VERSION: "1.2.11",

            /** Constants: XMPP Namespace Constants
             *  Common namespace constants from the XMPP RFCs and XEPs.
             *
             *  NS.HTTPBIND - HTTP BIND namespace from XEP 124.
             *  NS.BOSH - BOSH namespace from XEP 206.
             *  NS.CLIENT - Main XMPP client namespace.
             *  NS.AUTH - Legacy authentication namespace.
             *  NS.ROSTER - Roster operations namespace.
             *  NS.PROFILE - Profile namespace.
             *  NS.DISCO_INFO - Service discovery info namespace from XEP 30.
             *  NS.DISCO_ITEMS - Service discovery items namespace from XEP 30.
             *  NS.MUC - Multi-User Chat namespace from XEP 45.
             *  NS.SASL - XMPP SASL namespace from RFC 3920.
             *  NS.STREAM - XMPP Streams namespace from RFC 3920.
             *  NS.BIND - XMPP Binding namespace from RFC 3920.
             *  NS.SESSION - XMPP Session namespace from RFC 3920.
             *  NS.XHTML_IM - XHTML-IM namespace from XEP 71.
             *  NS.XHTML - XHTML body namespace from XEP 71.
             */
            NS: {
                HTTPBIND: "http://jabber.org/protocol/httpbind",
                BOSH: "urn:xmpp:xbosh",
                CLIENT: "jabber:client",
                AUTH: "jabber:iq:auth",
                ROSTER: "jabber:iq:roster",
                PROFILE: "jabber:iq:profile",
                DISCO_INFO: "http://jabber.org/protocol/disco#info",
                DISCO_ITEMS: "http://jabber.org/protocol/disco#items",
                MUC: "http://jabber.org/protocol/muc",
                SASL: "urn:ietf:params:xml:ns:xmpp-sasl",
                STREAM: "http://etherx.jabber.org/streams",
                FRAMING: "urn:ietf:params:xml:ns:xmpp-framing",
                BIND: "urn:ietf:params:xml:ns:xmpp-bind",
                SESSION: "urn:ietf:params:xml:ns:xmpp-session",
                VERSION: "jabber:iq:version",
                STANZAS: "urn:ietf:params:xml:ns:xmpp-stanzas",
                XHTML_IM: "http://jabber.org/protocol/xhtml-im",
                XHTML: "http://www.w3.org/1999/xhtml"
            },
            ACTION: {
                ROOMS_CALLBACK_STATE: 1,
                ROOMS_DETAIL_CALLBACK_STATE: 2,
                ROOMS_CREATE_CALLBACK: 3,
                ROSTER_VERSION_CB: 4,
                ROSTER_ITEMS_CB: 5,
                ROSTER_ITEM_DEL_CB: 6,
                ROSTER_ITEM_ADD_CB: 7,
                WEBINAR_MEMBER_LIST: 8,
                WEBINAR_MEMBER_ADD: 9,
                WEBINAR_MEMBER_REMOVE: 10,
                WEBINAR_MEMBER_CHANGER: 11
            },
            /** Constants: XHTML_IM Namespace
             *  contains allowed tags, tag attributes, and css properties.
             *  Used in the createHtml function to filter incoming html into the allowed XHTML-IM subset.
             *  See http://xmpp.org/extensions/xep-0071.html#profile-summary for the list of recommended
             *  allowed tags and their attributes.
             */
            XHTML: {
                tags: ['a', 'blockquote', 'br', 'cite', 'em', 'img', 'li', 'ol', 'p', 'span', 'strong', 'ul', 'body'],
                attributes: {
                    'a': ['href'],
                    'blockquote': ['style'],
                    'br': [],
                    'cite': ['style'],
                    'em': [],
                    'img': ['src', 'alt', 'style', 'height', 'width'],
                    'li': ['style'],
                    'ol': ['style'],
                    'p': ['style'],
                    'span': ['style'],
                    'strong': [],
                    'ul': ['style'],
                    'body': []
                },
                css: ['background-color', 'color', 'font-family', 'font-size', 'font-style', 'font-weight', 'margin-left', 'margin-right', 'text-align', 'text-decoration'],
                /** Function: XHTML.validTag
                 *
                 * Utility method to determine whether a tag is allowed
                 * in the XHTML_IM namespace.
                 *
                 * XHTML tag names are case sensitive and must be lower case.
                 */
                validTag: function validTag(tag) {
                    for (var i = 0; i < Strophe.XHTML.tags.length; i++) {
                        if (tag == Strophe.XHTML.tags[i]) {
                            return true;
                        }
                    }
                    return false;
                },
                /** Function: XHTML.validAttribute
                 *
                 * Utility method to determine whether an attribute is allowed
                 * as recommended per XEP-0071
                 *
                 * XHTML attribute names are case sensitive and must be lower case.
                 */
                validAttribute: function validAttribute(tag, attribute) {
                    if (typeof Strophe.XHTML.attributes[tag] !== 'undefined' && Strophe.XHTML.attributes[tag].length > 0) {
                        for (var i = 0; i < Strophe.XHTML.attributes[tag].length; i++) {
                            if (attribute == Strophe.XHTML.attributes[tag][i]) {
                                return true;
                            }
                        }
                    }
                    return false;
                },
                validCSS: function validCSS(style) {
                    for (var i = 0; i < Strophe.XHTML.css.length; i++) {
                        if (style == Strophe.XHTML.css[i]) {
                            return true;
                        }
                    }
                    return false;
                }
            },

            /** Constants: Connection Status Constants
             *  Connection status constants for use by the connection handler
             *  callback.
             *
             *  Status.ERROR - An error has occurred
             *  Status.CONNECTING - The connection is currently being made
             *  Status.CONNFAIL - The connection attempt failed
             *  Status.AUTHENTICATING - The connection is authenticating
             *  Status.AUTHFAIL - The authentication attempt failed
             *  Status.CONNECTED - The connection has succeeded
             *  Status.DISCONNECTED - The connection has been terminated
             *  Status.DISCONNECTING - The connection is currently being terminated
             *  Status.ATTACHED - The connection has been attached
             *  Status.CONNTIMEOUT - The connection has timed out
             */
            Status: {
                ERROR: 0,
                CONNECTING: 1,
                CONNFAIL: 2,
                AUTHENTICATING: 3,
                AUTHFAIL: 4,
                CONNECTED: 5,
                DISCONNECTED: 6,
                DISCONNECTING: 7,
                ATTACHED: 8,
                REDIRECT: 9,
                CONNTIMEOUT: 10
            },

            /** Constants: Log Level Constants
             *  Logging level indicators.
             *
             *  LogLevel.DEBUG - Debug output
             *  LogLevel.INFO - Informational output
             *  LogLevel.WARN - Warnings
             *  LogLevel.ERROR - Errors
             *  LogLevel.FATAL - Fatal errors
             */
            LogLevel: {
                DEBUG: 0,
                INFO: 1,
                WARN: 2,
                ERROR: 3,
                FATAL: 4
            },

            /** PrivateConstants: DOM Element Type Constants
             *  DOM element types.
             *
             *  ElementType.NORMAL - Normal element.
             *  ElementType.TEXT - Text data element.
             *  ElementType.FRAGMENT - XHTML fragment element.
             */
            ElementType: {
                NORMAL: 1,
                TEXT: 3,
                CDATA: 4,
                FRAGMENT: 11
            },

            /** PrivateConstants: Timeout Values
             *  Timeout values for error states.  These values are in seconds.
             *  These should not be changed unless you know exactly what you are
             *  doing.
             *
             *  TIMEOUT - Timeout multiplier. A waiting request will be considered
             *      failed after Math.floor(TIMEOUT * wait) seconds have elapsed.
             *      This defaults to 1.1, and with default wait, 66 seconds.
             *  SECONDARY_TIMEOUT - Secondary timeout multiplier. In cases where
             *      Strophe can detect early failure, it will consider the request
             *      failed if it doesn't return after
             *      Math.floor(SECONDARY_TIMEOUT * wait) seconds have elapsed.
             *      This defaults to 0.1, and with default wait, 6 seconds.
             */
            TIMEOUT: 1.1,
            SECONDARY_TIMEOUT: 0.1,

            /** Function: addNamespace
             *  This function is used to extend the current namespaces in
             *  Strophe.NS.  It takes a key and a value with the key being the
             *  name of the new namespace, with its actual value.
             *  For example:
             *  Strophe.addNamespace('PUBSUB', "http://jabber.org/protocol/pubsub");
             *
             *  Parameters:
             *    (String) name - The name under which the namespace will be
             *      referenced under Strophe.NS
             *    (String) value - The actual namespace.
             */
            addNamespace: function addNamespace(name, value) {
                Strophe.NS[name] = value;
            },

            /** Function: forEachChild
             *  Map a function over some or all child elements of a given element.
             *
             *  This is a small convenience function for mapping a function over
             *  some or all of the children of an element.  If elemName is null, all
             *  children will be passed to the function, otherwise only children
             *  whose tag names match elemName will be passed.
             *
             *  Parameters:
             *    (XMLElement) elem - The element to operate on.
             *    (String) elemName - The child element tag name filter.
             *    (Function) func - The function to apply to each child.  This
             *      function should take a single argument, a DOM element.
             */
            forEachChild: function forEachChild(elem, elemName, func) {
                var i, childNode;
                for (i = 0; i < elem.childNodes.length; i++) {
                    childNode = elem.childNodes[i];
                    if (childNode.nodeType == Strophe.ElementType.NORMAL && (!elemName || this.isTagEqual(childNode, elemName))) {
                        func(childNode);
                    }
                }
            },

            /** Function: isTagEqual
             *  Compare an element's tag name with a string.
             *
             *  This function is case sensitive.
             *
             *  Parameters:
             *    (XMLElement) el - A DOM element.
             *    (String) name - The element name.
             *
             *  Returns:
             *    true if the element's tag name matches _el_, and false
             *    otherwise.
             */
            isTagEqual: function isTagEqual(el, name) {
                return el.tagName == name;
            },

            /** PrivateVariable: _xmlGenerator
             *  _Private_ variable that caches a DOM document to
             *  generate elements.
             */
            _xmlGenerator: null,

            /** PrivateFunction: _makeGenerator
             *  _Private_ function that creates a dummy XML DOM document to serve as
             *  an element and text node generator.
             */
            _makeGenerator: function _makeGenerator() {
                var doc;
                // IE9 does implement createDocument(); however, using it will cause the browser to leak memory on page unload.
                // Here, we test for presence of createDocument() plus IE's proprietary documentMode attribute, which would be
                // less than 10 in the case of IE9 and below.
                if (document.implementation.createDocument === undefined || document.implementation.createDocument && document.documentMode && document.documentMode < 10) {
                    doc = this._getIEXmlDom();
                    doc.appendChild(doc.createElement('strophe'));
                } else {
                    doc = document.implementation.createDocument('jabber:client', 'strophe', null);
                }
                return doc;
            },

            /** Function: xmlGenerator
             *  Get the DOM document to generate elements.
             *
             *  Returns:
             *    The currently used DOM document.
             */
            xmlGenerator: function xmlGenerator() {
                if (!Strophe._xmlGenerator) {
                    Strophe._xmlGenerator = Strophe._makeGenerator();
                }
                return Strophe._xmlGenerator;
            },

            /** PrivateFunction: _getIEXmlDom
             *  Gets IE xml doc object
             *
             *  Returns:
             *    A Microsoft XML DOM Object
             *  See Also:
             *    http://msdn.microsoft.com/en-us/library/ms757837%28VS.85%29.aspx
             */
            _getIEXmlDom: function _getIEXmlDom() {
                var doc = null;
                var docStrings = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.5.0", "Msxml2.DOMDocument.4.0", "MSXML2.DOMDocument.3.0", "MSXML2.DOMDocument", "MSXML.DOMDocument", "Microsoft.XMLDOM"];

                for (var d = 0; d < docStrings.length; d++) {
                    if (doc === null) {
                        try {
                            doc = new ActiveXObject(docStrings[d]);
                        } catch (e) {
                            doc = null;
                        }
                    } else {
                        break;
                    }
                }
                return doc;
            },

            /** Function: xmlElement
             *  Create an XML DOM element.
             *
             *  This function creates an XML DOM element correctly across all
             *  implementations. Note that these are not HTML DOM elements, which
             *  aren't appropriate for XMPP stanzas.
             *
             *  Parameters:
             *    (String) name - The name for the element.
             *    (Array|Object) attrs - An optional array or object containing
             *      key/value pairs to use as element attributes. The object should
             *      be in the format {'key': 'value'} or {key: 'value'}. The array
             *      should have the format [['key1', 'value1'], ['key2', 'value2']].
             *    (String) text - The text child data for the element.
             *
             *  Returns:
             *    A new XML DOM element.
             */
            xmlElement: function xmlElement(name) {
                if (!name) {
                    return null;
                }

                var node = Strophe.xmlGenerator().createElement(name);
                // FIXME: this should throw errors if args are the wrong type or
                // there are more than two optional args
                var a, i, k;
                for (a = 1; a < arguments.length; a++) {
                    var arg = arguments[a];
                    if (!arg) {
                        continue;
                    }
                    if (typeof arg == "string" || typeof arg == "number") {
                        node.appendChild(Strophe.xmlTextNode(arg));
                    } else if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) == "object" && typeof arg.sort == "function") {
                        for (i = 0; i < arg.length; i++) {
                            var attr = arg[i];
                            if ((typeof attr === 'undefined' ? 'undefined' : _typeof(attr)) == "object" && typeof attr.sort == "function" && attr[1] !== undefined && attr[1] !== null) {
                                node.setAttribute(attr[0], attr[1]);
                            }
                        }
                    } else if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) == "object") {
                        for (k in arg) {
                            if (arg.hasOwnProperty(k)) {
                                if (arg[k] !== undefined && arg[k] !== null) {
                                    node.setAttribute(k, arg[k]);
                                }
                            }
                        }
                    }
                }

                return node;
            },

            /*  Function: xmlescape
             *  Excapes invalid xml characters.
             *
             *  Parameters:
             *     (String) text - text to escape.
             *
             *  Returns:
             *      Escaped text.
             */
            xmlescape: function xmlescape(text) {
                text = text.replace(/\&/g, "&amp;");
                text = text.replace(/</g, "&lt;");
                text = text.replace(/>/g, "&gt;");
                text = text.replace(/'/g, "&apos;");
                text = text.replace(/"/g, "&quot;");
                return text;
            },

            /*  Function: xmlunescape
            *  Unexcapes invalid xml characters.
            *
            *  Parameters:
            *     (String) text - text to unescape.
            *
            *  Returns:
            *      Unescaped text.
            */
            xmlunescape: function xmlunescape(text) {
                text = text.replace(/\&amp;/g, "&");
                text = text.replace(/&lt;/g, "<");
                text = text.replace(/&gt;/g, ">");
                text = text.replace(/&apos;/g, "'");
                text = text.replace(/&quot;/g, "\"");
                return text;
            },

            /** Function: xmlTextNode
             *  Creates an XML DOM text node.
             *
             *  Provides a cross implementation version of document.createTextNode.
             *
             *  Parameters:
             *    (String) text - The content of the text node.
             *
             *  Returns:
             *    A new XML DOM text node.
             */
            xmlTextNode: function xmlTextNode(text) {
                return Strophe.xmlGenerator().createTextNode(text);
            },

            /** Function: xmlHtmlNode
             *  Creates an XML DOM html node.
             *
             *  Parameters:
             *    (String) html - The content of the html node.
             *
             *  Returns:
             *    A new XML DOM text node.
             */
            xmlHtmlNode: function xmlHtmlNode(html) {
                var node;
                //ensure text is escaped
                if (window.DOMParser) {
                    var parser = new DOMParser();
                    node = parser.parseFromString(html, "text/xml");
                } else {
                    node = new ActiveXObject("Microsoft.XMLDOM");
                    node.async = "false";
                    node.loadXML(html);
                }
                return node;
            },

            /** Function: getText
             *  Get the concatenation of all text children of an element.
             *
             *  Parameters:
             *    (XMLElement) elem - A DOM element.
             *
             *  Returns:
             *    A String with the concatenated text of all text element children.
             */
            getText: function getText(elem) {
                if (!elem) {
                    return null;
                }

                var str = "";
                if (elem.childNodes.length === 0 && elem.nodeType == Strophe.ElementType.TEXT) {
                    str += elem.nodeValue;
                }

                for (var i = 0; i < elem.childNodes.length; i++) {
                    if (elem.childNodes[i].nodeType == Strophe.ElementType.TEXT) {
                        str += elem.childNodes[i].nodeValue;
                    }
                }

                return Strophe.xmlescape(str);
            },

            /** Function: copyElement
             *  Copy an XML DOM element.
             *
             *  This function copies a DOM element and all its descendants and returns
             *  the new copy.
             *
             *  Parameters:
             *    (XMLElement) elem - A DOM element.
             *
             *  Returns:
             *    A new, copied DOM element tree.
             */
            copyElement: function copyElement(elem) {
                var i, el;
                if (elem.nodeType == Strophe.ElementType.NORMAL) {
                    el = Strophe.xmlElement(elem.tagName);

                    for (i = 0; i < elem.attributes.length; i++) {
                        el.setAttribute(elem.attributes[i].nodeName, elem.attributes[i].value);
                    }

                    for (i = 0; i < elem.childNodes.length; i++) {
                        el.appendChild(Strophe.copyElement(elem.childNodes[i]));
                    }
                } else if (elem.nodeType == Strophe.ElementType.TEXT) {
                    el = Strophe.xmlGenerator().createTextNode(elem.nodeValue);
                }
                return el;
            },

            /** Function: createHtml
             *  Copy an HTML DOM element into an XML DOM.
             *
             *  This function copies a DOM element and all its descendants and returns
             *  the new copy.
             *
             *  Parameters:
             *    (HTMLElement) elem - A DOM element.
             *
             *  Returns:
             *    A new, copied DOM element tree.
             */
            createHtml: function createHtml(elem) {
                var i, el, j, tag, attribute, value, css, cssAttrs, attr, cssName, cssValue;
                if (elem.nodeType == Strophe.ElementType.NORMAL) {
                    tag = elem.nodeName.toLowerCase(); // XHTML tags must be lower case.
                    if (Strophe.XHTML.validTag(tag)) {
                        try {
                            el = Strophe.xmlElement(tag);
                            for (i = 0; i < Strophe.XHTML.attributes[tag].length; i++) {
                                attribute = Strophe.XHTML.attributes[tag][i];
                                value = elem.getAttribute(attribute);
                                if (typeof value == 'undefined' || value === null || value === '' || value === false || value === 0) {
                                    continue;
                                }
                                if (attribute == 'style' && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
                                    if (typeof value.cssText != 'undefined') {
                                        value = value.cssText; // we're dealing with IE, need to get CSS out
                                    }
                                }
                                // filter out invalid css styles
                                if (attribute == 'style') {
                                    css = [];
                                    cssAttrs = value.split(';');
                                    for (j = 0; j < cssAttrs.length; j++) {
                                        attr = cssAttrs[j].split(':');
                                        cssName = attr[0].replace(/^\s*/, "").replace(/\s*$/, "").toLowerCase();
                                        if (Strophe.XHTML.validCSS(cssName)) {
                                            cssValue = attr[1].replace(/^\s*/, "").replace(/\s*$/, "");
                                            css.push(cssName + ': ' + cssValue);
                                        }
                                    }
                                    if (css.length > 0) {
                                        value = css.join('; ');
                                        el.setAttribute(attribute, value);
                                    }
                                } else {
                                    el.setAttribute(attribute, value);
                                }
                            }

                            for (i = 0; i < elem.childNodes.length; i++) {
                                el.appendChild(Strophe.createHtml(elem.childNodes[i]));
                            }
                        } catch (e) {
                            // invalid elements
                            el = Strophe.xmlTextNode('');
                        }
                    } else {
                        el = Strophe.xmlGenerator().createDocumentFragment();
                        for (i = 0; i < elem.childNodes.length; i++) {
                            el.appendChild(Strophe.createHtml(elem.childNodes[i]));
                        }
                    }
                } else if (elem.nodeType == Strophe.ElementType.FRAGMENT) {
                    el = Strophe.xmlGenerator().createDocumentFragment();
                    for (i = 0; i < elem.childNodes.length; i++) {
                        el.appendChild(Strophe.createHtml(elem.childNodes[i]));
                    }
                } else if (elem.nodeType == Strophe.ElementType.TEXT) {
                    el = Strophe.xmlTextNode(elem.nodeValue);
                }
                return el;
            },

            /** Function: escapeNode
             *  Escape the node part (also called local part) of a JID.
             *
             *  Parameters:
             *    (String) node - A node (or local part).
             *
             *  Returns:
             *    An escaped node (or local part).
             */
            escapeNode: function escapeNode(node) {
                if (typeof node !== "string") {
                    return node;
                }
                return node.replace(/^\s+|\s+$/g, '').replace(/\\/g, "\\5c").replace(/ /g, "\\20").replace(/\"/g, "\\22").replace(/\&/g, "\\26").replace(/\'/g, "\\27").replace(/\//g, "\\2f").replace(/:/g, "\\3a").replace(/</g, "\\3c").replace(/>/g, "\\3e").replace(/@/g, "\\40");
            },

            /** Function: unescapeNode
             *  Unescape a node part (also called local part) of a JID.
             *
             *  Parameters:
             *    (String) node - A node (or local part).
             *
             *  Returns:
             *    An unescaped node (or local part).
             */
            unescapeNode: function unescapeNode(node) {
                if (typeof node !== "string") {
                    return node;
                }
                return node.replace(/\\20/g, " ").replace(/\\22/g, '"').replace(/\\26/g, "&").replace(/\\27/g, "'").replace(/\\2f/g, "/").replace(/\\3a/g, ":").replace(/\\3c/g, "<").replace(/\\3e/g, ">").replace(/\\40/g, "@").replace(/\\5c/g, "\\");
            },

            /** Function: getNodeFromJid
             *  Get the node portion of a JID String.
             *
             *  Parameters:
             *    (String) jid - A JID.
             *
             *  Returns:
             *    A String containing the node.
             */
            getNodeFromJid: function getNodeFromJid(jid) {
                if (jid.indexOf("@") < 0) {
                    return null;
                }
                return jid.split("@")[0];
            },

            /** Function: getDomainFromJid
             *  Get the domain portion of a JID String.
             *
             *  Parameters:
             *    (String) jid - A JID.
             *
             *  Returns:
             *    A String containing the domain.
             */
            getDomainFromJid: function getDomainFromJid(jid) {
                var bare = Strophe.getBareJidFromJid(jid);
                if (bare.indexOf("@") < 0) {
                    return bare;
                } else {
                    var parts = bare.split("@");
                    parts.splice(0, 1);
                    return parts.join('@');
                }
            },

            /** Function: getResourceFromJid
             *  Get the resource portion of a JID String.
             *
             *  Parameters:
             *    (String) jid - A JID.
             *
             *  Returns:
             *    A String containing the resource.
             */
            getResourceFromJid: function getResourceFromJid(jid) {
                var s = jid.split("/");
                if (s.length < 2) {
                    return null;
                }
                s.splice(0, 1);
                return s.join('/');
            },

            /** Function: getBareJidFromJid
             *  Get the bare JID from a JID String.
             *
             *  Parameters:
             *    (String) jid - A JID.
             *
             *  Returns:
             *    A String containing the bare JID.
             */
            getBareJidFromJid: function getBareJidFromJid(jid) {
                return jid ? jid.split("/")[0] : null;
            },

            /** PrivateFunction: _handleError
             *  _Private_ function that properly logs an error to the console
             */
            _handleError: function _handleError(e) {
                if (typeof e.stack !== "undefined") {
                    Strophe.fatal(e.stack);
                }
                if (e.sourceURL) {
                    Strophe.fatal("error: " + this.handler + " " + e.sourceURL + ":" + e.line + " - " + e.name + ": " + e.message);
                } else if (e.fileName) {
                    Strophe.fatal("error: " + this.handler + " " + e.fileName + ":" + e.lineNumber + " - " + e.name + ": " + e.message);
                } else {
                    Strophe.fatal("error: " + e.message);
                }
            },

            /** Function: log
             *  User overrideable logging function.
             *
             *  This function is called whenever the Strophe library calls any
             *  of the logging functions.  The default implementation of this
             *  function does nothing.  If client code wishes to handle the logging
             *  messages, it should override this with
             *  > Strophe.log = function (level, msg) {
             *  >   (user code here)
             *  > };
             *
             *  Please note that data sent and received over the wire is logged
             *  via Strophe.Connection.rawInput() and Strophe.Connection.rawOutput().
             *
             *  The different levels and their meanings are
             *
             *    DEBUG - Messages useful for debugging purposes.
             *    INFO - Informational messages.  This is mostly information like
             *      'disconnect was called' or 'SASL auth succeeded'.
             *    WARN - Warnings about potential problems.  This is mostly used
             *      to report transient connection errors like request timeouts.
             *    ERROR - Some error occurred.
             *    FATAL - A non-recoverable fatal error occurred.
             *
             *  Parameters:
             *    (Integer) level - The log level of the log message.  This will
             *      be one of the values in Strophe.LogLevel.
             *    (String) msg - The log message.
             */
            /* jshint ignore:start */
            log: function log(level, msg) {
                return;
            },
            /* jshint ignore:end */

            /** Function: debug
             *  Log a message at the Strophe.LogLevel.DEBUG level.
             *
             *  Parameters:
             *    (String) msg - The log message.
             */
            debug: function debug(msg) {
                this.log(this.LogLevel.DEBUG, msg);
            },

            /** Function: info
             *  Log a message at the Strophe.LogLevel.INFO level.
             *
             *  Parameters:
             *    (String) msg - The log message.
             */
            info: function info(msg) {
                this.log(this.LogLevel.INFO, msg);
            },

            /** Function: warn
             *  Log a message at the Strophe.LogLevel.WARN level.
             *
             *  Parameters:
             *    (String) msg - The log message.
             */
            warn: function warn(msg) {
                this.log(this.LogLevel.WARN, msg);
            },

            /** Function: error
             *  Log a message at the Strophe.LogLevel.ERROR level.
             *
             *  Parameters:
             *    (String) msg - The log message.
             */
            error: function error(msg) {
                this.log(this.LogLevel.ERROR, msg);
            },

            /** Function: fatal
             *  Log a message at the Strophe.LogLevel.FATAL level.
             *
             *  Parameters:
             *    (String) msg - The log message.
             */
            fatal: function fatal(msg) {
                this.log(this.LogLevel.FATAL, msg);
            },

            /** Function: serialize
             *  Render a DOM element and all descendants to a String.
             *
             *  Parameters:
             *    (XMLElement) elem - A DOM element.
             *
             *  Returns:
             *    The serialized element tree as a String.
             */
            serialize: function serialize(elem) {
                var result;

                if (!elem) {
                    return null;
                }

                if (typeof elem.tree === "function") {
                    elem = elem.tree();
                }

                var nodeName = elem.nodeName;
                var i, child;

                if (elem.getAttribute("_realname")) {
                    nodeName = elem.getAttribute("_realname");
                }

                result = "<" + nodeName;
                for (i = 0; i < elem.attributes.length; i++) {
                    if (elem.attributes[i].nodeName != "_realname") {
                        result += " " + elem.attributes[i].nodeName + "='" + Strophe.xmlescape(elem.attributes[i].value) + "'";
                    }
                }

                if (elem.childNodes.length > 0) {
                    result += ">";
                    for (i = 0; i < elem.childNodes.length; i++) {
                        child = elem.childNodes[i];
                        switch (child.nodeType) {
                            case Strophe.ElementType.NORMAL:
                                // normal element, so recurse
                                result += Strophe.serialize(child);
                                break;
                            case Strophe.ElementType.TEXT:
                                // text element to escape values
                                result += Strophe.xmlescape(child.nodeValue);
                                break;
                            case Strophe.ElementType.CDATA:
                                // cdata section so don't escape values
                                result += "<![CDATA[" + child.nodeValue + "]]>";
                        }
                    }
                    result += "</" + nodeName + ">";
                } else {
                    result += "/>";
                }

                return result;
            },

            /** PrivateVariable: _requestId
             *  _Private_ variable that keeps track of the request ids for
             *  connections.
             */
            _requestId: 0,

            /** PrivateVariable: Strophe.connectionPlugins
             *  _Private_ variable Used to store plugin names that need
             *  initialization on Strophe.Connection construction.
             */
            _connectionPlugins: {},

            /** Function: addConnectionPlugin
             *  Extends the Strophe.Connection object with the given plugin.
             *
             *  Parameters:
             *    (String) name - The name of the extension.
             *    (Object) ptype - The plugin's prototype.
             */
            addConnectionPlugin: function addConnectionPlugin(name, ptype) {
                Strophe._connectionPlugins[name] = ptype;
            }
        };

        /** Class: Strophe.Builder
         *  XML DOM builder.
         *
         *  This object provides an interface similar to JQuery but for building
         *  DOM elements easily and rapidly.  All the functions except for toString()
         *  and tree() return the object, so calls can be chained.  Here's an
         *  example using the $iq() builder helper.
         *  > $iq({to: 'you', from: 'me', type: 'get', id: '1'})
         *  >     .c('query', {xmlns: 'strophe:example'})
         *  >     .c('example')
         *  >     .toString()
         *
         *  The above generates this XML fragment
         *  > <iq to='you' from='me' type='get' id='1'>
         *  >   <query xmlns='strophe:example'>
         *  >     <example/>
         *  >   </query>
         *  > </iq>
         *  The corresponding DOM manipulations to get a similar fragment would be
         *  a lot more tedious and probably involve several helper variables.
         *
         *  Since adding children makes new operations operate on the child, up()
         *  is provided to traverse up the tree.  To add two children, do
         *  > builder.c('child1', ...).up().c('child2', ...)
         *  The next operation on the Builder will be relative to the second child.
         */

        /** Constructor: Strophe.Builder
         *  Create a Strophe.Builder object.
         *
         *  The attributes should be passed in object notation.  For example
         *  > var b = new Builder('message', {to: 'you', from: 'me'});
         *  or
         *  > var b = new Builder('messsage', {'xml:lang': 'en'});
         *
         *  Parameters:
         *    (String) name - The name of the root element.
         *    (Object) attrs - The attributes for the root element in object notation.
         *
         *  Returns:
         *    A new Strophe.Builder.
         */
        Strophe.Builder = function (name, attrs) {
            // Set correct namespace for jabber:client elements
            if (name == "presence" || name == "message" || name == "iq") {
                if (attrs && !attrs.xmlns) {
                    attrs.xmlns = Strophe.NS.CLIENT;
                } else if (!attrs) {
                    attrs = { xmlns: Strophe.NS.CLIENT };
                }
            }

            // Holds the tree being built.
            this.nodeTree = Strophe.xmlElement(name, attrs);

            // Points to the current operation node.
            this.node = this.nodeTree;
        };

        Strophe.Builder.prototype = {
            /** Function: tree
             *  Return the DOM tree.
             *
             *  This function returns the current DOM tree as an element object.  This
             *  is suitable for passing to functions like Strophe.Connection.send().
             *
             *  Returns:
             *    The DOM tree as a element object.
             */
            tree: function tree() {
                return this.nodeTree;
            },

            /** Function: toString
             *  Serialize the DOM tree to a String.
             *
             *  This function returns a string serialization of the current DOM
             *  tree.  It is often used internally to pass data to a
             *  Strophe.Request object.
             *
             *  Returns:
             *    The serialized DOM tree in a String.
             */
            toString: function toString() {
                return Strophe.serialize(this.nodeTree);
            },

            /** Function: up
             *  Make the current parent element the new current element.
             *
             *  This function is often used after c() to traverse back up the tree.
             *  For example, to add two children to the same element
             *  > builder.c('child1', {}).up().c('child2', {});
             *
             *  Returns:
             *    The Stophe.Builder object.
             */
            up: function up() {
                this.node = this.node.parentNode;
                return this;
            },

            /** Function: root
             *  Make the root element the new current element.
             *
             *  When at a deeply nested element in the tree, this function can be used
             *  to jump back to the root of the tree, instead of having to repeatedly
             *  call up().
             *
             *  Returns:
             *    The Stophe.Builder object.
             */
            root: function root() {
                this.node = this.nodeTree;
                return this;
            },

            /** Function: attrs
             *  Add or modify attributes of the current element.
             *
             *  The attributes should be passed in object notation.  This function
             *  does not move the current element pointer.
             *
             *  Parameters:
             *    (Object) moreattrs - The attributes to add/modify in object notation.
             *
             *  Returns:
             *    The Strophe.Builder object.
             */
            attrs: function attrs(moreattrs) {
                for (var k in moreattrs) {
                    if (moreattrs.hasOwnProperty(k)) {
                        if (moreattrs[k] === undefined) {
                            this.node.removeAttribute(k);
                        } else {
                            this.node.setAttribute(k, moreattrs[k]);
                        }
                    }
                }
                return this;
            },

            /** Function: c
             *  Add a child to the current element and make it the new current
             *  element.
             *
             *  This function moves the current element pointer to the child,
             *  unless text is provided.  If you need to add another child, it
             *  is necessary to use up() to go back to the parent in the tree.
             *
             *  Parameters:
             *    (String) name - The name of the child.
             *    (Object) attrs - The attributes of the child in object notation.
             *    (String) text - The text to add to the child.
             *
             *  Returns:
             *    The Strophe.Builder object.
             */
            c: function c(name, attrs, text) {
                var child = Strophe.xmlElement(name, attrs, text);
                this.node.appendChild(child);
                if (typeof text !== "string" && typeof text !== "number") {
                    this.node = child;
                }
                return this;
            },

            /** Function: cnode
             *  Add a child to the current element and make it the new current
             *  element.
             *
             *  This function is the same as c() except that instead of using a
             *  name and an attributes object to create the child it uses an
             *  existing DOM element object.
             *
             *  Parameters:
             *    (XMLElement) elem - A DOM element.
             *
             *  Returns:
             *    The Strophe.Builder object.
             */
            cnode: function cnode(elem) {
                var impNode;
                var xmlGen = Strophe.xmlGenerator();
                try {
                    impNode = xmlGen.importNode !== undefined;
                } catch (e) {
                    impNode = false;
                }
                var newElem = impNode ? xmlGen.importNode(elem, true) : Strophe.copyElement(elem);
                this.node.appendChild(newElem);
                this.node = newElem;
                return this;
            },

            /** Function: t
             *  Add a child text element.
             *
             *  This *does not* make the child the new current element since there
             *  are no children of text elements.
             *
             *  Parameters:
             *    (String) text - The text data to append to the current element.
             *
             *  Returns:
             *    The Strophe.Builder object.
             */
            t: function t(text) {
                var child = Strophe.xmlTextNode(text);
                this.node.appendChild(child);
                return this;
            },

            /** Function: h
             *  Replace current element contents with the HTML passed in.
             *
             *  This *does not* make the child the new current element
             *
             *  Parameters:
             *    (String) html - The html to insert as contents of current element.
             *
             *  Returns:
             *    The Strophe.Builder object.
             */
            h: function h(html) {
                var fragment = document.createElement('body');

                // force the browser to try and fix any invalid HTML tags
                fragment.innerHTML = html;

                // copy cleaned html into an xml dom
                var xhtml = Strophe.createHtml(fragment);

                while (xhtml.childNodes.length > 0) {
                    this.node.appendChild(xhtml.childNodes[0]);
                }
                return this;
            }
        };

        /** PrivateClass: Strophe.Handler
         *  _Private_ helper class for managing stanza handlers.
         *
         *  A Strophe.Handler encapsulates a user provided callback function to be
         *  executed when matching stanzas are received by the connection.
         *  Handlers can be either one-off or persistant depending on their
         *  return value. Returning true will cause a Handler to remain active, and
         *  returning false will remove the Handler.
         *
         *  Users will not use Strophe.Handler objects directly, but instead they
         *  will use Strophe.Connection.addHandler() and
         *  Strophe.Connection.deleteHandler().
         */

        /** PrivateConstructor: Strophe.Handler
         *  Create and initialize a new Strophe.Handler.
         *
         *  Parameters:
         *    (Function) handler - A function to be executed when the handler is run.
         *    (String) ns - The namespace to match.
         *    (String) name - The element name to match.
         *    (String) type - The element type to match.
         *    (String) id - The element id attribute to match.
         *    (String) from - The element from attribute to match.
         *    (Object) options - Handler options
         *
         *  Returns:
         *    A new Strophe.Handler object.
         */
        Strophe.Handler = function (handler, ns, name, type, id, from, options) {
            this.handler = handler;
            this.ns = ns;
            this.name = name;
            this.type = type;
            this.id = id;
            this.options = options || { 'matchBareFromJid': false, 'ignoreNamespaceFragment': false };
            // BBB: Maintain backward compatibility with old `matchBare` option
            if (this.options.matchBare) {
                Strophe.warn('The "matchBare" option is deprecated, use "matchBareFromJid" instead.');
                this.options.matchBareFromJid = this.options.matchBare;
                delete this.options.matchBare;
            }

            if (this.options.matchBareFromJid) {
                this.from = from ? Strophe.getBareJidFromJid(from) : null;
            } else {
                this.from = from;
            }
            // whether the handler is a user handler or a system handler
            this.user = true;
        };

        Strophe.Handler.prototype = {
            /** PrivateFunction: getNamespace
             *  Returns the XML namespace attribute on an element.
             *  If `ignoreNamespaceFragment` was passed in for this handler, then the
             *  URL fragment will be stripped.
             *
             *  Parameters:
             *    (XMLElement) elem - The XML element with the namespace.
             *
             *  Returns:
             *    The namespace, with optionally the fragment stripped.
             */
            getNamespace: function getNamespace(elem) {
                var elNamespace = elem.getAttribute("xmlns");
                if (elNamespace && this.options.ignoreNamespaceFragment) {
                    elNamespace = elNamespace.split('#')[0];
                }
                return elNamespace;
            },

            /** PrivateFunction: namespaceMatch
             *  Tests if a stanza matches the namespace set for this Strophe.Handler.
             *
             *  Parameters:
             *    (XMLElement) elem - The XML element to test.
             *
             *  Returns:
             *    true if the stanza matches and false otherwise.
             */
            namespaceMatch: function namespaceMatch(elem) {
                var nsMatch = false;
                if (!this.ns) {
                    return true;
                } else {
                    var that = this;
                    Strophe.forEachChild(elem, null, function (elem) {
                        if (that.getNamespace(elem) === that.ns) {
                            nsMatch = true;
                        }
                    });
                    nsMatch = nsMatch || this.getNamespace(elem) === this.ns;
                }
                return nsMatch;
            },

            /** PrivateFunction: isMatch
             *  Tests if a stanza matches the Strophe.Handler.
             *
             *  Parameters:
             *    (XMLElement) elem - The XML element to test.
             *
             *  Returns:
             *    true if the stanza matches and false otherwise.
             */
            isMatch: function isMatch(elem) {
                var from = elem.getAttribute('from');
                if (this.options.matchBareFromJid) {
                    from = Strophe.getBareJidFromJid(from);
                }
                var elem_type = elem.getAttribute("type");
                if (this.namespaceMatch(elem) && (!this.name || Strophe.isTagEqual(elem, this.name)) && (!this.type || (Array.isArray(this.type) ? this.type.indexOf(elem_type) != -1 : elem_type == this.type)) && (!this.id || elem.getAttribute("id") == this.id) && (!this.from || from == this.from)) {
                    return true;
                }
                return false;
            },

            /** PrivateFunction: run
             *  Run the callback on a matching stanza.
             *
             *  Parameters:
             *    (XMLElement) elem - The DOM element that triggered the
             *      Strophe.Handler.
             *
             *  Returns:
             *    A boolean indicating if the handler should remain active.
             */
            run: function run(elem) {
                var result = null;
                try {
                    result = this.handler(elem);
                } catch (e) {
                    Strophe._handleError(e);
                    throw e;
                }
                return result;
            },

            /** PrivateFunction: toString
             *  Get a String representation of the Strophe.Handler object.
             *
             *  Returns:
             *    A String.
             */
            toString: function toString() {
                return "{Handler: " + this.handler + "(" + this.name + "," + this.id + "," + this.ns + ")}";
            }
        };

        /** PrivateClass: Strophe.TimedHandler
         *  _Private_ helper class for managing timed handlers.
         *
         *  A Strophe.TimedHandler encapsulates a user provided callback that
         *  should be called after a certain period of time or at regular
         *  intervals.  The return value of the callback determines whether the
         *  Strophe.TimedHandler will continue to fire.
         *
         *  Users will not use Strophe.TimedHandler objects directly, but instead
         *  they will use Strophe.Connection.addTimedHandler() and
         *  Strophe.Connection.deleteTimedHandler().
         */

        /** PrivateConstructor: Strophe.TimedHandler
         *  Create and initialize a new Strophe.TimedHandler object.
         *
         *  Parameters:
         *    (Integer) period - The number of milliseconds to wait before the
         *      handler is called.
         *    (Function) handler - The callback to run when the handler fires.  This
         *      function should take no arguments.
         *
         *  Returns:
         *    A new Strophe.TimedHandler object.
         */
        Strophe.TimedHandler = function (period, handler) {
            this.period = period;
            this.handler = handler;
            this.lastCalled = new Date().getTime();
            this.user = true;
        };

        Strophe.TimedHandler.prototype = {
            /** PrivateFunction: run
             *  Run the callback for the Strophe.TimedHandler.
             *
             *  Returns:
             *    true if the Strophe.TimedHandler should be called again, and false
             *      otherwise.
             */
            run: function run() {
                this.lastCalled = new Date().getTime();
                return this.handler();
            },

            /** PrivateFunction: reset
             *  Reset the last called time for the Strophe.TimedHandler.
             */
            reset: function reset() {
                this.lastCalled = new Date().getTime();
            },

            /** PrivateFunction: toString
             *  Get a string representation of the Strophe.TimedHandler object.
             *
             *  Returns:
             *    The string representation.
             */
            toString: function toString() {
                return "{TimedHandler: " + this.handler + "(" + this.period + ")}";
            }
        };

        /** Class: Strophe.Connection
         *  XMPP Connection manager.
         *
         *  This class is the main part of Strophe.  It manages a BOSH or websocket
         *  connection to an XMPP server and dispatches events to the user callbacks
         *  as data arrives. It supports SASL PLAIN, SASL DIGEST-MD5, SASL SCRAM-SHA1
         *  and legacy authentication.
         *
         *  After creating a Strophe.Connection object, the user will typically
         *  call connect() with a user supplied callback to handle connection level
         *  events like authentication failure, disconnection, or connection
         *  complete.
         *
         *  The user will also have several event handlers defined by using
         *  addHandler() and addTimedHandler().  These will allow the user code to
         *  respond to interesting stanzas or do something periodically with the
         *  connection. These handlers will be active once authentication is
         *  finished.
         *
         *  To send data to the connection, use send().
         */

        /** Constructor: Strophe.Connection
         *  Create and initialize a Strophe.Connection object.
         *
         *  The transport-protocol for this connection will be chosen automatically
         *  based on the given service parameter. URLs starting with "ws://" or
         *  "wss://" will use WebSockets, URLs starting with "http://", "https://"
         *  or without a protocol will use BOSH.
         *
         *  To make Strophe connect to the current host you can leave out the protocol
         *  and host part and just pass the path, e.g.
         *
         *  > var conn = new Strophe.Connection("/http-bind/");
         *
         *  Options common to both Websocket and BOSH:
         *  ------------------------------------------
         *
         *  cookies:
         *
         *  The *cookies* option allows you to pass in cookies to be added to the
         *  document. These cookies will then be included in the BOSH XMLHttpRequest
         *  or in the websocket connection.
         *
         *  The passed in value must be a map of cookie names and string values.
         *
         *  > { "myCookie": {
         *  >     "value": "1234",
         *  >     "domain": ".example.org",
         *  >     "path": "/",
         *  >     "expires": expirationDate
         *  >     }
         *  > }
         *
         *  Note that cookies can't be set in this way for other domains (i.e. cross-domain).
         *  Those cookies need to be set under those domains, for example they can be
         *  set server-side by making a XHR call to that domain to ask it to set any
         *  necessary cookies.
         *
         *  mechanisms:
         *
         *  The *mechanisms* option allows you to specify the SASL mechanisms that this
         *  instance of Strophe.Connection (and therefore your XMPP client) will
         *  support.
         *
         *  The value must be an array of objects with Strophe.SASLMechanism
         *  prototypes.
         *
         *  If nothing is specified, then the following mechanisms (and their
         *  priorities) are registered:
         *
         *      EXTERNAL - 60
         *      OAUTHBEARER - 50
         *      SCRAM-SHA1 - 40
         *      DIGEST-MD5 - 30
         *      PLAIN - 20
         *      ANONYMOUS - 10
         *
         *  WebSocket options:
         *  ------------------
         *
         *  If you want to connect to the current host with a WebSocket connection you
         *  can tell Strophe to use WebSockets through a "protocol" attribute in the
         *  optional options parameter. Valid values are "ws" for WebSocket and "wss"
         *  for Secure WebSocket.
         *  So to connect to "wss://CURRENT_HOSTNAME/xmpp-websocket" you would call
         *
         *  > var conn = new Strophe.Connection("/xmpp-websocket/", {protocol: "wss"});
         *
         *  Note that relative URLs _NOT_ starting with a "/" will also include the path
         *  of the current site.
         *
         *  Also because downgrading security is not permitted by browsers, when using
         *  relative URLs both BOSH and WebSocket connections will use their secure
         *  variants if the current connection to the site is also secure (https).
         *
         *  BOSH options:
         *  -------------
         *
         *  By adding "sync" to the options, you can control if requests will
         *  be made synchronously or not. The default behaviour is asynchronous.
         *  If you want to make requests synchronous, make "sync" evaluate to true.
         *  > var conn = new Strophe.Connection("/http-bind/", {sync: true});
         *
         *  You can also toggle this on an already established connection.
         *  > conn.options.sync = true;
         *
         *  The *customHeaders* option can be used to provide custom HTTP headers to be
         *  included in the XMLHttpRequests made.
         *
         *  The *keepalive* option can be used to instruct Strophe to maintain the
         *  current BOSH session across interruptions such as webpage reloads.
         *
         *  It will do this by caching the sessions tokens in sessionStorage, and when
         *  "restore" is called it will check whether there are cached tokens with
         *  which it can resume an existing session.
         *
         *  The *withCredentials* option should receive a Boolean value and is used to
         *  indicate wether cookies should be included in ajax requests (by default
         *  they're not).
         *  Set this value to true if you are connecting to a BOSH service
         *  and for some reason need to send cookies to it.
         *  In order for this to work cross-domain, the server must also enable
         *  credentials by setting the Access-Control-Allow-Credentials response header
         *  to "true". For most usecases however this setting should be false (which
         *  is the default).
         *  Additionally, when using Access-Control-Allow-Credentials, the
         *  Access-Control-Allow-Origin header can't be set to the wildcard "*", but
         *  instead must be restricted to actual domains.
         *
         *  The *contentType* option can be set to change the default Content-Type
         *  of "text/xml; charset=utf-8", which can be useful to reduce the amount of
         *  CORS preflight requests that are sent to the server.
         *
         *  Parameters:
         *    (String) service - The BOSH or WebSocket service URL.
         *    (Object) options - A hash of configuration options
         *
         *  Returns:
         *    A new Strophe.Connection object.
         */
        Strophe.Connection = function (service, options) {
            // The service URL
            this.service = service;
            // Configuration options
            this.options = options || {};
            var proto = this.options.protocol || "";

            // Select protocal based on service or options
            if (service.indexOf("ws:") === 0 || service.indexOf("wss:") === 0 || proto.indexOf("ws") === 0) {
                this._proto = new Strophe.Websocket(this);
            } else {
                this._proto = new Strophe.Bosh(this);
            }

            /* The connected JID. */
            this.jid = "";
            /* the JIDs domain */
            this.domain = null;
            /* stream:features */
            this.features = null;

            // SASL
            this._sasl_data = {};
            this.do_session = false;
            this.do_bind = false;

            // handler lists
            this.timedHandlers = [];
            this.handlers = [];
            this.removeTimeds = [];
            this.removeHandlers = [];
            this.addTimeds = [];
            this.addHandlers = [];
            this.protocolErrorHandlers = {
                'HTTP': {},
                'websocket': {}
            };

            this._idleTimeout = null;
            this._disconnectTimeout = null;

            this.authenticated = false;
            this.connected = false;
            this.disconnecting = false;
            this.do_authentication = true;
            this.paused = false;
            this.restored = false;

            this._data = [];
            this._uniqueId = 0;

            this._sasl_success_handler = null;
            this._sasl_failure_handler = null;
            this._sasl_challenge_handler = null;

            // Max retries before disconnecting
            this.maxRetries = 5;

            // Call onIdle callback every 1/10th of a second
            // XXX: setTimeout should be called only with function expressions (23974bc1)
            this._idleTimeout = setTimeout(function () {
                this._onIdle();
            }.bind(this), 100);

            utils.addCookies(this.options.cookies);
            this.registerSASLMechanisms(this.options.mechanisms);

            // initialize plugins
            for (var k in Strophe._connectionPlugins) {
                if (Strophe._connectionPlugins.hasOwnProperty(k)) {
                    var ptype = Strophe._connectionPlugins[k];
                    // jslint complaints about the below line, but this is fine
                    var F = function F() {}; // jshint ignore:line
                    F.prototype = ptype;
                    this[k] = new F();
                    this[k].init(this);
                }
            }
        };

        Strophe.Connection.prototype = {
            /** Function: reset
             *  Reset the connection.
             *
             *  This function should be called after a connection is disconnected
             *  before that connection is reused.
             */
            reset: function reset() {
                this._proto._reset();

                // SASL
                this.do_session = false;
                this.do_bind = false;

                // handler lists
                this.timedHandlers = [];
                this.handlers = [];
                this.removeTimeds = [];
                this.removeHandlers = [];
                this.addTimeds = [];
                this.addHandlers = [];

                this.authenticated = false;
                this.connected = false;
                this.disconnecting = false;
                this.restored = false;

                this._data = [];
                this._requests = [];
                this._uniqueId = 0;
            },

            /** Function: pause
             *  Pause the request manager.
             *
             *  This will prevent Strophe from sending any more requests to the
             *  server.  This is very useful for temporarily pausing
             *  BOSH-Connections while a lot of send() calls are happening quickly.
             *  This causes Strophe to send the data in a single request, saving
             *  many request trips.
             */
            pause: function pause() {
                this.paused = true;
            },

            /** Function: resume
             *  Resume the request manager.
             *
             *  This resumes after pause() has been called.
             */
            resume: function resume() {
                this.paused = false;
            },

            /** Function: getUniqueId
             *  Generate a unique ID for use in <iq/> elements.
             *
             *  All <iq/> stanzas are required to have unique id attributes.  This
             *  function makes creating these easy.  Each connection instance has
             *  a counter which starts from zero, and the value of this counter
             *  plus a colon followed by the suffix becomes the unique id. If no
             *  suffix is supplied, the counter is used as the unique id.
             *
             *  Suffixes are used to make debugging easier when reading the stream
             *  data, and their use is recommended.  The counter resets to 0 for
             *  every new connection for the same reason.  For connections to the
             *  same server that authenticate the same way, all the ids should be
             *  the same, which makes it easy to see changes.  This is useful for
             *  automated testing as well.
             *
             *  Parameters:
             *    (String) suffix - A optional suffix to append to the id.
             *
             *  Returns:
             *    A unique string to be used for the id attribute.
             */
            getUniqueId: function getUniqueId(suffix) {
                var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    var r = Math.random() * 16 | 0,
                        v = c == 'x' ? r : r & 0x3 | 0x8;
                    return v.toString(16);
                });
                if (typeof suffix == "string" || typeof suffix == "number") {
                    return uuid + ":" + suffix;
                } else {
                    return uuid + "";
                }
            },

            /** Function: addProtocolErrorHandler
             *  Register a handler function for when a protocol (websocker or HTTP)
             *  error occurs.
             *
             *  NOTE: Currently only HTTP errors for BOSH requests are handled.
             *  Patches that handle websocket errors would be very welcome.
             *
             *  Parameters:
             *    (String) protocol - 'HTTP' or 'websocket'
             *    (Integer) status_code - Error status code (e.g 500, 400 or 404)
             *    (Function) callback - Function that will fire on Http error
             *
             *  Example:
             *  function onError(err_code){
             *    //do stuff
             *  }
             *
             *  var conn = Strophe.connect('http://example.com/http-bind');
             *  conn.addProtocolErrorHandler('HTTP', 500, onError);
             *  // Triggers HTTP 500 error and onError handler will be called
             *  conn.connect('user_jid@incorrect_jabber_host', 'secret', onConnect);
             */
            addProtocolErrorHandler: function addProtocolErrorHandler(protocol, status_code, callback) {
                this.protocolErrorHandlers[protocol][status_code] = callback;
            },

            /** Function: connect
             *  Starts the connection process.
             *
             *  As the connection process proceeds, the user supplied callback will
             *  be triggered multiple times with status updates.  The callback
             *  should take two arguments - the status code and the error condition.
             *
             *  The status code will be one of the values in the Strophe.Status
             *  constants.  The error condition will be one of the conditions
             *  defined in RFC 3920 or the condition 'strophe-parsererror'.
             *
             *  The Parameters _wait_, _hold_ and _route_ are optional and only relevant
             *  for BOSH connections. Please see XEP 124 for a more detailed explanation
             *  of the optional parameters.
             *
             *  Parameters:
             *    (String) jid - The user's JID.  This may be a bare JID,
             *      or a full JID.  If a node is not supplied, SASL ANONYMOUS
             *      authentication will be attempted.
             *    (String) pass - The user's password.
             *    (Function) callback - The connect callback function.
             *    (Integer) wait - The optional HTTPBIND wait value.  This is the
             *      time the server will wait before returning an empty result for
             *      a request.  The default setting of 60 seconds is recommended.
             *    (Integer) hold - The optional HTTPBIND hold value.  This is the
             *      number of connections the server will hold at one time.  This
             *      should almost always be set to 1 (the default).
             *    (String) route - The optional route value.
             *    (String) authcid - The optional alternative authentication identity
             *      (username) if intending to impersonate another user.
             *      When using the SASL-EXTERNAL authentication mechanism, for example
             *      with client certificates, then the authcid value is used to
             *      determine whether an authorization JID (authzid) should be sent to
             *      the server. The authzid should not be sent to the server if the
             *      authzid and authcid are the same. So to prevent it from being sent
             *      (for example when the JID is already contained in the client
             *      certificate), set authcid to that same JID. See XEP-178 for more
             *      details.
             */
            connect: function connect(jid, pass, chatoption, groups, version, callback, wait, hold, route, authcid) {
                this.jid = jid;
                /** Variable: authzid
                 *  Authorization identity.
                 */
                this.authzid = Strophe.getBareJidFromJid(this.jid);
                this.chatoption = chatoption;
                this.groups = groups;
                this.version = version;
                /** Variable: authcid
                 *  Authentication identity (User name).
                 */
                this.authcid = authcid || Strophe.getNodeFromJid(this.jid);

                /** Variable: pass
                 *  Authentication identity (User password).
                 */
                this.pass = pass;

                /** Variable: servtype
                 *  Digest MD5 compatibility.
                 */
                this.servtype = "xmpp";

                this.connect_callback = callback;
                this.disconnecting = false;
                this.connected = false;
                this.authenticated = false;
                this.restored = false;

                // parse jid for domain
                this.domain = Strophe.getDomainFromJid(this.jid);

                this._changeConnectStatus(Strophe.Status.CONNECTING, null);

                this._proto._connect(wait, hold, route);
            },

            /** Function: attach
             *  Attach to an already created and authenticated BOSH session.
             *
             *  This function is provided to allow Strophe to attach to BOSH
             *  sessions which have been created externally, perhaps by a Web
             *  application.  This is often used to support auto-login type features
             *  without putting user credentials into the page.
             *
             *  Parameters:
             *    (String) jid - The full JID that is bound by the session.
             *    (String) sid - The SID of the BOSH session.
             *    (String) rid - The current RID of the BOSH session.  This RID
             *      will be used by the next request.
             *    (Function) callback The connect callback function.
             *    (Integer) wait - The optional HTTPBIND wait value.  This is the
             *      time the server will wait before returning an empty result for
             *      a request.  The default setting of 60 seconds is recommended.
             *      Other settings will require tweaks to the Strophe.TIMEOUT value.
             *    (Integer) hold - The optional HTTPBIND hold value.  This is the
             *      number of connections the server will hold at one time.  This
             *      should almost always be set to 1 (the default).
             *    (Integer) wind - The optional HTTBIND window value.  This is the
             *      allowed range of request ids that are valid.  The default is 5.
             */
            attach: function attach(jid, sid, rid, callback, wait, hold, wind) {
                if (this._proto instanceof Strophe.Bosh) {
                    this._proto._attach(jid, sid, rid, callback, wait, hold, wind);
                } else {
                    throw {
                        name: 'StropheSessionError',
                        message: 'The "attach" method can only be used with a BOSH connection.'
                    };
                }
            },

            /** Function: restore
             *  Attempt to restore a cached BOSH session.
             *
             *  This function is only useful in conjunction with providing the
             *  "keepalive":true option when instantiating a new Strophe.Connection.
             *
             *  When "keepalive" is set to true, Strophe will cache the BOSH tokens
             *  RID (Request ID) and SID (Session ID) and then when this function is
             *  called, it will attempt to restore the session from those cached
             *  tokens.
             *
             *  This function must therefore be called instead of connect or attach.
             *
             *  For an example on how to use it, please see examples/restore.js
             *
             *  Parameters:
             *    (String) jid - The user's JID.  This may be a bare JID or a full JID.
             *    (Function) callback - The connect callback function.
             *    (Integer) wait - The optional HTTPBIND wait value.  This is the
             *      time the server will wait before returning an empty result for
             *      a request.  The default setting of 60 seconds is recommended.
             *    (Integer) hold - The optional HTTPBIND hold value.  This is the
             *      number of connections the server will hold at one time.  This
             *      should almost always be set to 1 (the default).
             *    (Integer) wind - The optional HTTBIND window value.  This is the
             *      allowed range of request ids that are valid.  The default is 5.
             */
            restore: function restore(jid, callback, wait, hold, wind) {
                if (this._sessionCachingSupported()) {
                    this._proto._restore(jid, callback, wait, hold, wind);
                } else {
                    throw {
                        name: 'StropheSessionError',
                        message: 'The "restore" method can only be used with a BOSH connection.'
                    };
                }
            },

            /** PrivateFunction: _sessionCachingSupported
             * Checks whether sessionStorage and JSON are supported and whether we're
             * using BOSH.
             */
            _sessionCachingSupported: function _sessionCachingSupported() {
                if (this._proto instanceof Strophe.Bosh) {
                    if (!JSON) {
                        return false;
                    }
                    try {
                        window.sessionStorage.setItem('_strophe_', '_strophe_');
                        window.sessionStorage.removeItem('_strophe_');
                    } catch (e) {
                        return false;
                    }
                    return true;
                }
                return false;
            },

            /** Function: xmlInput
             *  User overrideable function that receives XML data coming into the
             *  connection.
             *
             *  The default function does nothing.  User code can override this with
             *  > Strophe.Connection.xmlInput = function (elem) {
             *  >   (user code)
             *  > };
             *
             *  Due to limitations of current Browsers' XML-Parsers the opening and closing
             *  <stream> tag for WebSocket-Connoctions will be passed as selfclosing here.
             *
             *  BOSH-Connections will have all stanzas wrapped in a <body> tag. See
             *  <Strophe.Bosh.strip> if you want to strip this tag.
             *
             *  Parameters:
             *    (XMLElement) elem - The XML data received by the connection.
             */
            /* jshint unused:false */
            xmlInput: function xmlInput(elem) {
                return;
            },
            /* jshint unused:true */

            /** Function: xmlOutput
             *  User overrideable function that receives XML data sent to the
             *  connection.
             *
             *  The default function does nothing.  User code can override this with
             *  > Strophe.Connection.xmlOutput = function (elem) {
             *  >   (user code)
             *  > };
             *
             *  Due to limitations of current Browsers' XML-Parsers the opening and closing
             *  <stream> tag for WebSocket-Connoctions will be passed as selfclosing here.
             *
             *  BOSH-Connections will have all stanzas wrapped in a <body> tag. See
             *  <Strophe.Bosh.strip> if you want to strip this tag.
             *
             *  Parameters:
             *    (XMLElement) elem - The XMLdata sent by the connection.
             */
            /* jshint unused:false */
            xmlOutput: function xmlOutput(elem) {
                return;
            },
            /* jshint unused:true */

            /** Function: rawInput
             *  User overrideable function that receives raw data coming into the
             *  connection.
             *
             *  The default function does nothing.  User code can override this with
             *  > Strophe.Connection.rawInput = function (data) {
             *  >   (user code)
             *  > };
             *
             *  Parameters:
             *    (String) data - The data received by the connection.
             */
            /* jshint unused:false */
            rawInput: function rawInput(data) {
                return;
            },
            /* jshint unused:true */

            /** Function: rawOutput
             *  User overrideable function that receives raw data sent to the
             *  connection.
             *
             *  The default function does nothing.  User code can override this with
             *  > Strophe.Connection.rawOutput = function (data) {
             *  >   (user code)
             *  > };
             *
             *  Parameters:
             *    (String) data - The data sent by the connection.
             */
            /* jshint unused:false */
            rawOutput: function rawOutput(data) {
                return;
            },
            /* jshint unused:true */

            /** Function: nextValidRid
             *  User overrideable function that receives the new valid rid.
             *
             *  The default function does nothing. User code can override this with
             *  > Strophe.Connection.nextValidRid = function (rid) {
             *  >    (user code)
             *  > };
             *
             *  Parameters:
             *    (Number) rid - The next valid rid
             */
            /* jshint unused:false */
            nextValidRid: function nextValidRid(rid) {
                return;
            },
            /* jshint unused:true */

            /** Function: send
             *  Send a stanza.
             *
             *  This function is called to push data onto the send queue to
             *  go out over the wire.  Whenever a request is sent to the BOSH
             *  server, all pending data is sent and the queue is flushed.
             *
             *  Parameters:
             *    (XMLElement |
             *     [XMLElement] |
             *     Strophe.Builder) elem - The stanza to send.
             */
            send: function send(elem) {
                if (elem === null) {
                    return;
                }
                if (typeof elem.sort === "function") {
                    for (var i = 0; i < elem.length; i++) {
                        this._queueData(elem[i]);
                    }
                } else if (typeof elem.tree === "function") {
                    this._queueData(elem.tree());
                } else {
                    this._queueData(elem);
                }

                this._proto._send();
            },

            /** Function: flush
             *  Immediately send any pending outgoing data.
             *
             *  Normally send() queues outgoing data until the next idle period
             *  (100ms), which optimizes network use in the common cases when
             *  several send()s are called in succession. flush() can be used to
             *  immediately send all pending data.
             */
            flush: function flush() {
                // cancel the pending idle period and run the idle function
                // immediately
                clearTimeout(this._idleTimeout);
                this._onIdle();
            },

            /** Function: sendPresence
             *  Helper function to send presence stanzas. The main benefit is for
             *  sending presence stanzas for which you expect a responding presence
             *  stanza with the same id (for example when leaving a chat room).
             *
             *  Parameters:
             *    (XMLElement) elem - The stanza to send.
             *    (Function) callback - The callback function for a successful request.
             *    (Function) errback - The callback function for a failed or timed
             *      out request.  On timeout, the stanza will be null.
             *    (Integer) timeout - The time specified in milliseconds for a
             *      timeout to occur.
             *
             *  Returns:
             *    The id used to send the presence.
             */
            sendPresence: function sendPresence(elem, callback, errback, timeout) {
                var timeoutHandler = null;
                var that = this;
                if (typeof elem.tree === "function") {
                    elem = elem.tree();
                }
                var id = elem.getAttribute('id');
                if (!id) {
                    // inject id if not found
                    id = this.getUniqueId("sendPresence");
                    elem.setAttribute("id", id);
                }

                if (typeof callback === "function" || typeof errback === "function") {
                    var handler = this.addHandler(function (stanza) {
                        // remove timeout handler if there is one
                        if (timeoutHandler) {
                            that.deleteTimedHandler(timeoutHandler);
                        }
                        var type = stanza.getAttribute('type');
                        if (type == 'error') {
                            if (errback) {
                                errback(stanza);
                            }
                        } else if (callback) {
                            callback(stanza);
                        }
                    }, null, 'presence', null, id);

                    // if timeout specified, set up a timeout handler.
                    if (timeout) {
                        timeoutHandler = this.addTimedHandler(timeout, function () {
                            // get rid of normal handler
                            that.deleteHandler(handler);
                            // call errback on timeout with null stanza
                            if (errback) {
                                errback(null);
                            }
                            return false;
                        });
                    }
                }
                this.send(elem);
                return id;
            },

            /** Function: sendIQ
             *  Helper function to send IQ stanzas.
             *
             *  Parameters:
             *    (XMLElement) elem - The stanza to send.
             *    (Function) callback - The callback function for a successful request.
             *    (Function) errback - The callback function for a failed or timed
             *      out request.  On timeout, the stanza will be null.
             *    (Integer) timeout - The time specified in milliseconds for a
             *      timeout to occur.
             *
             *  Returns:
             *    The id used to send the IQ.
            */
            sendIQ: function sendIQ(elem, callback, errback, timeout) {
                var timeoutHandler = null;
                var that = this;
                if (typeof elem.tree === "function") {
                    elem = elem.tree();
                }
                var id = elem.getAttribute('id');
                if (!id) {
                    // inject id if not found
                    id = this.getUniqueId("sendIQ");
                    elem.setAttribute("id", id);
                }

                if (typeof callback === "function" || typeof errback === "function") {
                    var handler = this.addHandler(function (stanza) {
                        // remove timeout handler if there is one
                        if (timeoutHandler) {
                            that.deleteTimedHandler(timeoutHandler);
                        }
                        var iqtype = stanza.getAttribute('type');
                        if (iqtype == 'result') {
                            if (callback) {
                                callback(stanza);
                            }
                        } else if (iqtype == 'error') {
                            if (errback) {
                                errback(stanza);
                            }
                        } else {
                            throw {
                                name: "StropheError",
                                message: "Got bad IQ type of " + iqtype
                            };
                        }
                    }, null, 'iq', ['error', 'result'], id);

                    // if timeout specified, set up a timeout handler.
                    if (timeout) {
                        timeoutHandler = this.addTimedHandler(timeout, function () {
                            // get rid of normal handler
                            that.deleteHandler(handler);
                            // call errback on timeout with null stanza
                            if (errback) {
                                errback(null);
                            }
                            return false;
                        });
                    }
                }
                this.send(elem);
                return id;
            },

            /** PrivateFunction: _queueData
             *  Queue outgoing data for later sending.  Also ensures that the data
             *  is a DOMElement.
             */
            _queueData: function _queueData(element) {
                if (element === null || !element.tagName || !element.childNodes) {
                    throw {
                        name: "StropheError",
                        message: "Cannot queue non-DOMElement."
                    };
                }
                this._data.push(element);
            },

            /** PrivateFunction: _sendRestart
             *  Send an xmpp:restart stanza.
             */
            _sendRestart: function _sendRestart() {
                this._data.push("restart");
                this._proto._sendRestart();
                // XXX: setTimeout should be called only with function expressions (23974bc1)
                this._idleTimeout = setTimeout(function () {
                    this._onIdle();
                }.bind(this), 100);
            },

            /** Function: addTimedHandler
             *  Add a timed handler to the connection.
             *
             *  This function adds a timed handler.  The provided handler will
             *  be called every period milliseconds until it returns false,
             *  the connection is terminated, or the handler is removed.  Handlers
             *  that wish to continue being invoked should return true.
             *
             *  Because of method binding it is necessary to save the result of
             *  this function if you wish to remove a handler with
             *  deleteTimedHandler().
             *
             *  Note that user handlers are not active until authentication is
             *  successful.
             *
             *  Parameters:
             *    (Integer) period - The period of the handler.
             *    (Function) handler - The callback function.
             *
             *  Returns:
             *    A reference to the handler that can be used to remove it.
             */
            addTimedHandler: function addTimedHandler(period, handler) {
                var thand = new Strophe.TimedHandler(period, handler);
                this.addTimeds.push(thand);
                return thand;
            },

            /** Function: deleteTimedHandler
             *  Delete a timed handler for a connection.
             *
             *  This function removes a timed handler from the connection.  The
             *  handRef parameter is *not* the function passed to addTimedHandler(),
             *  but is the reference returned from addTimedHandler().
             *
             *  Parameters:
             *    (Strophe.TimedHandler) handRef - The handler reference.
             */
            deleteTimedHandler: function deleteTimedHandler(handRef) {
                // this must be done in the Idle loop so that we don't change
                // the handlers during iteration
                this.removeTimeds.push(handRef);
            },

            /** Function: addHandler
             *  Add a stanza handler for the connection.
             *
             *  This function adds a stanza handler to the connection.  The
             *  handler callback will be called for any stanza that matches
             *  the parameters.  Note that if multiple parameters are supplied,
             *  they must all match for the handler to be invoked.
             *
             *  The handler will receive the stanza that triggered it as its argument.
             *  *The handler should return true if it is to be invoked again;
             *  returning false will remove the handler after it returns.*
             *
             *  As a convenience, the ns parameters applies to the top level element
             *  and also any of its immediate children.  This is primarily to make
             *  matching /iq/query elements easy.
             *
             *  Options
             *  ~~~~~~~
             *  With the options argument, you can specify boolean flags that affect how
             *  matches are being done.
             *
             *  Currently two flags exist:
             *
             *  - matchBareFromJid:
             *      When set to true, the from parameter and the
             *      from attribute on the stanza will be matched as bare JIDs instead
             *      of full JIDs. To use this, pass {matchBareFromJid: true} as the
             *      value of options. The default value for matchBareFromJid is false.
             *
             *  - ignoreNamespaceFragment:
             *      When set to true, a fragment specified on the stanza's namespace
             *      URL will be ignored when it's matched with the one configured for
             *      the handler.
             *
             *      This means that if you register like this:
             *      >   connection.addHandler(
             *      >       handler,
             *      >       'http://jabber.org/protocol/muc',
             *      >       null, null, null, null,
             *      >       {'ignoreNamespaceFragment': true}
             *      >   );
             *
             *      Then a stanza with XML namespace of
             *      'http://jabber.org/protocol/muc#user' will also be matched. If
             *      'ignoreNamespaceFragment' is false, then only stanzas with
             *      'http://jabber.org/protocol/muc' will be matched.
             *
             *  Deleting the handler
             *  ~~~~~~~~~~~~~~~~~~~~
             *  The return value should be saved if you wish to remove the handler
             *  with deleteHandler().
             *
             *  Parameters:
             *    (Function) handler - The user callback.
             *    (String) ns - The namespace to match.
             *    (String) name - The stanza name to match.
             *    (String|Array) type - The stanza type (or types if an array) to match.
             *    (String) id - The stanza id attribute to match.
             *    (String) from - The stanza from attribute to match.
             *    (String) options - The handler options
             *
             *  Returns:
             *    A reference to the handler that can be used to remove it.
             */
            addHandler: function addHandler(handler, ns, name, type, id, from, options) {
                var hand = new Strophe.Handler(handler, ns, name, type, id, from, options);
                this.addHandlers.push(hand);
                return hand;
            },

            /** Function: deleteHandler
             *  Delete a stanza handler for a connection.
             *
             *  This function removes a stanza handler from the connection.  The
             *  handRef parameter is *not* the function passed to addHandler(),
             *  but is the reference returned from addHandler().
             *
             *  Parameters:
             *    (Strophe.Handler) handRef - The handler reference.
             */
            deleteHandler: function deleteHandler(handRef) {
                // this must be done in the Idle loop so that we don't change
                // the handlers during iteration
                this.removeHandlers.push(handRef);
                // If a handler is being deleted while it is being added,
                // prevent it from getting added
                var i = this.addHandlers.indexOf(handRef);
                if (i >= 0) {
                    this.addHandlers.splice(i, 1);
                }
            },

            /** Function: registerSASLMechanisms
             *
             * Register the SASL mechanisms which will be supported by this instance of
             * Strophe.Connection (i.e. which this XMPP client will support).
             *
             *  Parameters:
             *    (Array) mechanisms - Array of objects with Strophe.SASLMechanism prototypes
             *
             */
            registerSASLMechanisms: function registerSASLMechanisms(mechanisms) {
                this.mechanisms = {};
                mechanisms = mechanisms || [Strophe.SASLAnonymous, Strophe.SASLExternal, Strophe.SASLMD5, Strophe.SASLOAuthBearer, Strophe.SASLPlain, Strophe.SASLSHA1];
                mechanisms.forEach(this.registerSASLMechanism.bind(this));
            },

            /** Function: registerSASLMechanism
             *
             * Register a single SASL mechanism, to be supported by this client.
             *
             *  Parameters:
             *    (Object) mechanism - Object with a Strophe.SASLMechanism prototype
             *
             */
            registerSASLMechanism: function registerSASLMechanism(mechanism) {
                this.mechanisms[mechanism.prototype.name] = mechanism;
            },

            /** Function: disconnect
             *  Start the graceful disconnection process.
             *
             *  This function starts the disconnection process.  This process starts
             *  by sending unavailable presence and sending BOSH body of type
             *  terminate.  A timeout handler makes sure that disconnection happens
             *  even if the BOSH server does not respond.
             *  If the Connection object isn't connected, at least tries to abort all pending requests
             *  so the connection object won't generate successful requests (which were already opened).
             *
             *  The user supplied connection callback will be notified of the
             *  progress as this process happens.
             *
             *  Parameters:
             *    (String) reason - The reason the disconnect is occuring.
             */
            disconnect: function disconnect(reason) {
                this._changeConnectStatus(Strophe.Status.DISCONNECTING, reason);

                Strophe.info("Disconnect was called because: " + reason);
                if (this.connected) {
                    var pres = false;
                    this.disconnecting = true;
                    if (this.authenticated) {
                        pres = $pres({
                            xmlns: Strophe.NS.CLIENT,
                            type: 'unavailable'
                        });
                    }
                    // setup timeout handler
                    this._disconnectTimeout = this._addSysTimedHandler(3000, this._onDisconnectTimeout.bind(this));
                    this._proto._disconnect(pres);
                } else {
                    Strophe.info("Disconnect was called before Strophe connected to the server");
                    this._proto._abortAllRequests();
                    this._doDisconnect();
                }
            },

            /** PrivateFunction: _changeConnectStatus
             *  _Private_ helper function that makes sure plugins and the user's
             *  callback are notified of connection status changes.
             *
             *  Parameters:
             *    (Integer) status - the new connection status, one of the values
             *      in Strophe.Status
             *    (String) condition - the error condition or null
             */
            _changeConnectStatus: function _changeConnectStatus(status, condition) {
                // notify all plugins listening for status changes
                for (var k in Strophe._connectionPlugins) {
                    if (Strophe._connectionPlugins.hasOwnProperty(k)) {
                        var plugin = this[k];
                        if (plugin.statusChanged) {
                            try {
                                plugin.statusChanged(status, condition);
                            } catch (err) {
                                Strophe.error("" + k + " plugin caused an exception " + "changing status: " + err);
                            }
                        }
                    }
                }

                // notify the user's callback
                if (this.connect_callback) {
                    try {
                        this.connect_callback(status, condition);
                    } catch (e) {
                        Strophe._handleError(e);
                        Strophe.error("User connection callback caused an " + "exception: " + e);
                    }
                }
            },

            /** PrivateFunction: _doDisconnect
             *  _Private_ function to disconnect.
             *
             *  This is the last piece of the disconnection logic.  This resets the
             *  connection and alerts the user's connection callback.
             */
            _doDisconnect: function _doDisconnect(condition) {
                if (typeof this._idleTimeout == "number") {
                    clearTimeout(this._idleTimeout);
                }

                // Cancel Disconnect Timeout
                if (this._disconnectTimeout !== null) {
                    this.deleteTimedHandler(this._disconnectTimeout);
                    this._disconnectTimeout = null;
                }

                Strophe.info("_doDisconnect was called");
                this._proto._doDisconnect();

                this.authenticated = false;
                this.disconnecting = false;
                this.restored = false;

                // delete handlers
                this.handlers = [];
                this.timedHandlers = [];
                this.removeTimeds = [];
                this.removeHandlers = [];
                this.addTimeds = [];
                this.addHandlers = [];

                // tell the parent we disconnected
                this._changeConnectStatus(Strophe.Status.DISCONNECTED, condition);
                this.connected = false;
            },

            /** PrivateFunction: _dataRecv
             *  _Private_ handler to processes incoming data from the the connection.
             *
             *  Except for _connect_cb handling the initial connection request,
             *  this function handles the incoming data for all requests.  This
             *  function also fires stanza handlers that match each incoming
             *  stanza.
             *
             *  Parameters:
             *    (Strophe.Request) req - The request that has data ready.
             *    (string) req - The stanza a raw string (optiona).
             */
            _dataRecv: function _dataRecv(req, raw) {
                Strophe.info("_dataRecv called");
                var elem = this._proto._reqToData(req);
                if (elem === null) {
                    return;
                }

                if (this.xmlInput !== Strophe.Connection.prototype.xmlInput) {
                    if (elem.nodeName === this._proto.strip && elem.childNodes.length) {
                        this.xmlInput(elem.childNodes[0]);
                    } else {
                        this.xmlInput(elem);
                    }
                }
                if (this.rawInput !== Strophe.Connection.prototype.rawInput) {
                    if (raw) {
                        this.rawInput(raw);
                    } else {
                        this.rawInput(Strophe.serialize(elem));
                    }
                }

                // remove handlers scheduled for deletion
                var i, hand;
                while (this.removeHandlers.length > 0) {
                    hand = this.removeHandlers.pop();
                    i = this.handlers.indexOf(hand);
                    if (i >= 0) {
                        this.handlers.splice(i, 1);
                    }
                }

                // add handlers scheduled for addition
                while (this.addHandlers.length > 0) {
                    this.handlers.push(this.addHandlers.pop());
                }

                // handle graceful disconnect
                if (this.disconnecting && this._proto._emptyQueue()) {
                    this._doDisconnect();
                    return;
                }

                var type = elem.getAttribute("type");
                var cond, conflict;
                if (type !== null && type == "terminate") {
                    // Don't process stanzas that come in after disconnect
                    if (this.disconnecting) {
                        return;
                    }

                    // an error occurred
                    cond = elem.getAttribute("condition");
                    conflict = elem.getElementsByTagName("conflict");
                    if (cond !== null) {
                        if (cond == "remote-stream-error" && conflict.length > 0) {
                            cond = "conflict";
                        }
                        this._changeConnectStatus(Strophe.Status.CONNFAIL, cond);
                    } else {
                        this._changeConnectStatus(Strophe.Status.CONNFAIL, "unknown");
                    }
                    this._doDisconnect(cond);
                    return;
                }

                // send each incoming stanza through the handler chain
                var that = this;
                Strophe.forEachChild(elem, null, function (child) {
                    var i, newList;
                    // process handlers
                    newList = that.handlers;
                    that.handlers = [];
                    for (i = 0; i < newList.length; i++) {
                        var hand = newList[i];
                        // encapsulate 'handler.run' not to lose the whole handler list if
                        // one of the handlers throws an exception
                        try {
                            if (hand.isMatch(child) && (that.authenticated || !hand.user)) {
                                if (hand.run(child)) {
                                    that.handlers.push(hand);
                                }
                            } else {
                                that.handlers.push(hand);
                            }
                        } catch (e) {
                            // if the handler throws an exception, we consider it as false
                            Strophe.warn('Removing Strophe handlers due to uncaught exception: ' + e.message);
                        }
                    }
                });
            },

            /** Attribute: mechanisms
             *  SASL Mechanisms available for Connection.
             */
            mechanisms: {},

            /** PrivateFunction: _connect_cb
             *  _Private_ handler for initial connection request.
             *
             *  This handler is used to process the initial connection request
             *  response from the BOSH server. It is used to set up authentication
             *  handlers and start the authentication process.
             *
             *  SASL authentication will be attempted if available, otherwise
             *  the code will fall back to legacy authentication.
             *
             *  Parameters:
             *    (Strophe.Request) req - The current request.
             *    (Function) _callback - low level (xmpp) connect callback function.
             *      Useful for plugins with their own xmpp connect callback (when their)
             *      want to do something special).
             */
            _connect_cb: function _connect_cb(req, _callback, raw) {
                Strophe.info("_connect_cb was called");
                this.connected = true;

                var bodyWrap;
                try {
                    bodyWrap = this._proto._reqToData(req);
                } catch (e) {
                    if (e != "badformat") {
                        throw e;
                    }
                    this._changeConnectStatus(Strophe.Status.CONNFAIL, 'bad-format');
                    this._doDisconnect('bad-format');
                }
                if (!bodyWrap) {
                    return;
                }

                if (this.xmlInput !== Strophe.Connection.prototype.xmlInput) {
                    if (bodyWrap.nodeName === this._proto.strip && bodyWrap.childNodes.length) {
                        this.xmlInput(bodyWrap.childNodes[0]);
                    } else {
                        this.xmlInput(bodyWrap);
                    }
                }
                if (this.rawInput !== Strophe.Connection.prototype.rawInput) {
                    if (raw) {
                        this.rawInput(raw);
                    } else {
                        this.rawInput(Strophe.serialize(bodyWrap));
                    }
                }

                var conncheck = this._proto._connect_cb(bodyWrap);
                if (conncheck === Strophe.Status.CONNFAIL) {
                    return;
                }

                // Check for the stream:features tag
                var hasFeatures;
                if (bodyWrap.getElementsByTagNameNS) {
                    hasFeatures = bodyWrap.getElementsByTagNameNS(Strophe.NS.STREAM, "features").length > 0;
                } else {
                    hasFeatures = bodyWrap.getElementsByTagName("stream:features").length > 0 || bodyWrap.getElementsByTagName("features").length > 0;
                }
                if (!hasFeatures) {
                    this._proto._no_auth_received(_callback);
                    return;
                }

                var matched = [],
                    i,
                    mech;
                var mechanisms = bodyWrap.getElementsByTagName("mechanism");
                if (mechanisms.length > 0) {
                    for (i = 0; i < mechanisms.length; i++) {
                        mech = Strophe.getText(mechanisms[i]);
                        if (this.mechanisms[mech]) matched.push(this.mechanisms[mech]);
                    }
                }
                if (matched.length === 0) {
                    if (bodyWrap.getElementsByTagName("auth").length === 0) {
                        // There are no matching SASL mechanisms and also no legacy
                        // auth available.
                        this._proto._no_auth_received(_callback);
                        return;
                    }
                }
                if (this.do_authentication !== false) {
                    var source = Strophe.getResourceFromJid(this.jid);
                    if (!source) {
                        source = Strophe.Resource;
                    }

                    var id = '{' + this.getUniqueId("sendIQ") + '}';
                    var iq = $iq({ id: id, type: 'set', xmlns: Strophe.NS.CLIENT }).c('query', { xmlns: Strophe.NS.AUTH }).c('username').t(Strophe.getNodeFromJid(this.jid)).up().c('password').t(this.pass).up().c('resource').t(source).up().c('option').t(this.chatoption).up().c('deviceid').t('{' + this.getUniqueId("sendIQ") + '}').up().c('force').t('1').up().c('dtype').t('0').up().c('cv').t(this.version).up();
                    if (this.groups != null) {
                        iq.c('groupids').t(this.groups).up();
                    }

                    //if (!Strophe.getResourceFromJid(this.jid)) {
                    //    // since the user has not supplied a resource, we pick
                    //    // a default one here.  unlike other auth methods, the server
                    //    // cannot do this for us.
                    //    this.jid = Strophe.getBareJidFromJid(this.jid) + '/strophe';
                    //}
                    //iq.up().c('resource', {}).t(Strophe.getResourceFromJid(this.jid));

                    this._addSysHandler(this._auth2_cb.bind(this), null, null, null, id);
                    this.send(iq.tree());

                    //this.authenticate(matched);
                }
            },

            /** Function: sortMechanismsByPriority
             *
             *  Sorts an array of objects with prototype SASLMechanism according to
             *  their priorities.
             *
             *  Parameters:
             *    (Array) mechanisms - Array of SASL mechanisms.
             *
             */
            sortMechanismsByPriority: function sortMechanismsByPriority(mechanisms) {
                // Sorting mechanisms according to priority.
                var i, j, higher, swap;
                for (i = 0; i < mechanisms.length - 1; ++i) {
                    higher = i;
                    for (j = i + 1; j < mechanisms.length; ++j) {
                        if (mechanisms[j].prototype.priority > mechanisms[higher].prototype.priority) {
                            higher = j;
                        }
                    }
                    if (higher != i) {
                        swap = mechanisms[i];
                        mechanisms[i] = mechanisms[higher];
                        mechanisms[higher] = swap;
                    }
                }
                return mechanisms;
            },

            /** PrivateFunction: _attemptSASLAuth
             *
             *  Iterate through an array of SASL mechanisms and attempt authentication
             *  with the highest priority (enabled) mechanism.
             *
             *  Parameters:
             *    (Array) mechanisms - Array of SASL mechanisms.
             *
             *  Returns:
             *    (Boolean) mechanism_found - true or false, depending on whether a
             *          valid SASL mechanism was found with which authentication could be
             *          started.
             */
            _attemptSASLAuth: function _attemptSASLAuth(mechanisms) {
                mechanisms = this.sortMechanismsByPriority(mechanisms || []);
                var i = 0,
                    mechanism_found = false;
                for (i = 0; i < mechanisms.length; ++i) {
                    if (!mechanisms[i].prototype.test(this)) {
                        continue;
                    }
                    this._sasl_success_handler = this._addSysHandler(this._sasl_success_cb.bind(this), null, "success", null, null);
                    this._sasl_failure_handler = this._addSysHandler(this._sasl_failure_cb.bind(this), null, "failure", null, null);
                    this._sasl_challenge_handler = this._addSysHandler(this._sasl_challenge_cb.bind(this), null, "challenge", null, null);

                    this._sasl_mechanism = new mechanisms[i]();
                    this._sasl_mechanism.onStart(this);

                    var request_auth_exchange = $build("auth", {
                        xmlns: Strophe.NS.SASL,
                        mechanism: this._sasl_mechanism.name
                    });
                    if (this._sasl_mechanism.isClientFirst) {
                        var response = this._sasl_mechanism.onChallenge(this, null);
                        request_auth_exchange.t(Base64.encode(response));
                    }
                    this.send(request_auth_exchange.tree());
                    mechanism_found = true;
                    break;
                }
                return mechanism_found;
            },

            /** PrivateFunction: _attemptLegacyAuth
             *
             *  Attempt legacy (i.e. non-SASL) authentication.
             *
             */
            _attemptLegacyAuth: function _attemptLegacyAuth() {
                if (Strophe.getNodeFromJid(this.jid) === null) {
                    // we don't have a node, which is required for non-anonymous
                    // client connections
                    this._changeConnectStatus(Strophe.Status.CONNFAIL, 'x-strophe-bad-non-anon-jid');
                    this.disconnect('x-strophe-bad-non-anon-jid');
                } else {
                    // Fall back to legacy authentication
                    this._changeConnectStatus(Strophe.Status.AUTHENTICATING, null);

                    //this._addSysHandler(
                    //    this._auth1_cb.bind(this),
                    //    null, null, null, "_auth_1"
                    //);
                    //this.send($iq({
                    //        'type': "get",
                    //        'to': this.domain,
                    //        'id': "_auth_1"
                    //    }).c("query", {xmlns: Strophe.NS.AUTH})
                    //    .c("username", {}).t(Strophe.getNodeFromJid(this.jid))
                    //    .tree());
                }
            },

            /** Function: authenticate
             * Set up authentication
             *
             *  Continues the initial connection request by setting up authentication
             *  handlers and starting the authentication process.
             *
             *  SASL authentication will be attempted if available, otherwise
             *  the code will fall back to legacy authentication.
             *
             *  Parameters:
             *    (Array) matched - Array of SASL mechanisms supported.
             *
             */
            authenticate: function authenticate(matched) {
                if (!this._attemptSASLAuth(matched)) {
                    this._attemptLegacyAuth();
                }
            },

            /** PrivateFunction: _sasl_challenge_cb
             *  _Private_ handler for the SASL challenge
             *
             */
            _sasl_challenge_cb: function _sasl_challenge_cb(elem) {
                var challenge = Base64.decode(Strophe.getText(elem));
                var response = this._sasl_mechanism.onChallenge(this, challenge);
                var stanza = $build('response', {
                    'xmlns': Strophe.NS.SASL
                });
                if (response !== "") {
                    stanza.t(Base64.encode(response));
                }
                this.send(stanza.tree());
                return true;
            },

            /** PrivateFunction: _auth1_cb
             *  _Private_ handler for legacy authentication.
             *
             *  This handler is called in response to the initial <iq type='get'/>
             *  for legacy authentication.  It builds an authentication <iq/> and
             *  sends it, creating a handler (calling back to _auth2_cb()) to
             *  handle the result
             *
             *  Parameters:
             *    (XMLElement) elem - The stanza that triggered the callback.
             *
             *  Returns:
             *    false to remove the handler.
             */
            /* jshint unused:false */
            _auth1_cb: function _auth1_cb(elem) {
                // build plaintext auth iq
                var iq = $iq({ type: "set", id: "_auth_2" }).c('query', { xmlns: Strophe.NS.AUTH }).c('username', {}).t(Strophe.getNodeFromJid(this.jid)).up().c('password').t(this.pass);

                if (!Strophe.getResourceFromJid(this.jid)) {
                    // since the user has not supplied a resource, we pick
                    // a default one here.  unlike other auth methods, the server
                    // cannot do this for us.
                    this.jid = Strophe.getBareJidFromJid(this.jid) + '/strophe';
                }
                iq.up().c('resource', {}).t(Strophe.getResourceFromJid(this.jid));

                this._addSysHandler(this._auth2_cb.bind(this), null, null, null, "_auth_2");
                this.send(iq.tree());
                return false;
            },
            /* jshint unused:true */

            /** PrivateFunction: _sasl_success_cb
             *  _Private_ handler for succesful SASL authentication.
             *
             *  Parameters:
             *    (XMLElement) elem - The matching stanza.
             *
             *  Returns:
             *    false to remove the handler.
             */
            _sasl_success_cb: function _sasl_success_cb(elem) {
                if (this._sasl_data["server-signature"]) {
                    var serverSignature;
                    var success = Base64.decode(Strophe.getText(elem));
                    var attribMatch = /([a-z]+)=([^,]+)(,|$)/;
                    var matches = success.match(attribMatch);
                    if (matches[1] == "v") {
                        serverSignature = matches[2];
                    }

                    if (serverSignature != this._sasl_data["server-signature"]) {
                        // remove old handlers
                        this.deleteHandler(this._sasl_failure_handler);
                        this._sasl_failure_handler = null;
                        if (this._sasl_challenge_handler) {
                            this.deleteHandler(this._sasl_challenge_handler);
                            this._sasl_challenge_handler = null;
                        }

                        this._sasl_data = {};
                        return this._sasl_failure_cb(null);
                    }
                }
                Strophe.info("SASL authentication succeeded.");

                if (this._sasl_mechanism) {
                    this._sasl_mechanism.onSuccess();
                }

                // remove old handlers
                this.deleteHandler(this._sasl_failure_handler);
                this._sasl_failure_handler = null;
                if (this._sasl_challenge_handler) {
                    this.deleteHandler(this._sasl_challenge_handler);
                    this._sasl_challenge_handler = null;
                }

                var streamfeature_handlers = [];
                var wrapper = function wrapper(handlers, elem) {
                    while (handlers.length) {
                        this.deleteHandler(handlers.pop());
                    }
                    this._sasl_auth1_cb.bind(this)(elem);
                    return false;
                };
                streamfeature_handlers.push(this._addSysHandler(function (elem) {
                    wrapper.bind(this)(streamfeature_handlers, elem);
                }.bind(this), null, "stream:features", null, null));
                streamfeature_handlers.push(this._addSysHandler(function (elem) {
                    wrapper.bind(this)(streamfeature_handlers, elem);
                }.bind(this), Strophe.NS.STREAM, "features", null, null));

                // we must send an xmpp:restart now
                this._sendRestart();

                return false;
            },

            /** PrivateFunction: _sasl_auth1_cb
             *  _Private_ handler to start stream binding.
             *
             *  Parameters:
             *    (XMLElement) elem - The matching stanza.
             *
             *  Returns:
             *    false to remove the handler.
             */
            _sasl_auth1_cb: function _sasl_auth1_cb(elem) {
                // save stream:features for future usage
                this.features = elem;
                var i, child;
                for (i = 0; i < elem.childNodes.length; i++) {
                    child = elem.childNodes[i];
                    if (child.nodeName == 'bind') {
                        this.do_bind = true;
                    }

                    if (child.nodeName == 'session') {
                        this.do_session = true;
                    }
                }

                if (!this.do_bind) {
                    this._changeConnectStatus(Strophe.Status.AUTHFAIL, null);
                    return false;
                } else {
                    this._addSysHandler(this._sasl_bind_cb.bind(this), null, null, null, "_bind_auth_2");

                    var resource = Strophe.getResourceFromJid(this.jid);
                    if (resource) {
                        this.send($iq({ type: "set", id: "_bind_auth_2" }).c('bind', { xmlns: Strophe.NS.BIND }).c('resource', {}).t(resource).tree());
                    } else {
                        this.send($iq({ type: "set", id: "_bind_auth_2" }).c('bind', { xmlns: Strophe.NS.BIND }).tree());
                    }
                }
                return false;
            },

            /** PrivateFunction: _sasl_bind_cb
             *  _Private_ handler for binding result and session start.
             *
             *  Parameters:
             *    (XMLElement) elem - The matching stanza.
             *
             *  Returns:
             *    false to remove the handler.
             */
            _sasl_bind_cb: function _sasl_bind_cb(elem) {
                if (elem.getAttribute("type") == "error") {
                    Strophe.info("SASL binding failed.");
                    var conflict = elem.getElementsByTagName("conflict"),
                        condition;
                    if (conflict.length > 0) {
                        condition = 'conflict';
                    }
                    this._changeConnectStatus(Strophe.Status.AUTHFAIL, condition);
                    return false;
                }

                // TODO - need to grab errors
                var bind = elem.getElementsByTagName("bind");
                var jidNode;
                if (bind.length > 0) {
                    // Grab jid
                    jidNode = bind[0].getElementsByTagName("jid");
                    if (jidNode.length > 0) {
                        this.jid = Strophe.getText(jidNode[0]);

                        if (this.do_session) {
                            this._addSysHandler(this._sasl_session_cb.bind(this), null, null, null, "_session_auth_2");

                            this.send($iq({ type: "set", id: "_session_auth_2" }).c('session', { xmlns: Strophe.NS.SESSION }).tree());
                        } else {
                            this.authenticated = true;
                            this._changeConnectStatus(Strophe.Status.CONNECTED, null);
                        }
                    }
                } else {
                    Strophe.info("SASL binding failed.");
                    this._changeConnectStatus(Strophe.Status.AUTHFAIL, null);
                    return false;
                }
            },

            /** PrivateFunction: _sasl_session_cb
             *  _Private_ handler to finish successful SASL connection.
             *
             *  This sets Connection.authenticated to true on success, which
             *  starts the processing of user handlers.
             *
             *  Parameters:
             *    (XMLElement) elem - The matching stanza.
             *
             *  Returns:
             *    false to remove the handler.
             */
            _sasl_session_cb: function _sasl_session_cb(elem) {
                if (elem.getAttribute("type") == "result") {
                    this.authenticated = true;
                    this._changeConnectStatus(Strophe.Status.CONNECTED, null);
                } else if (elem.getAttribute("type") == "error") {
                    Strophe.info("Session creation failed.");
                    this._changeConnectStatus(Strophe.Status.AUTHFAIL, null);
                    return false;
                }
                return false;
            },

            /** PrivateFunction: _sasl_failure_cb
             *  _Private_ handler for SASL authentication failure.
             *
             *  Parameters:
             *    (XMLElement) elem - The matching stanza.
             *
             *  Returns:
             *    false to remove the handler.
             */
            /* jshint unused:false */
            _sasl_failure_cb: function _sasl_failure_cb(elem) {
                // delete unneeded handlers
                if (this._sasl_success_handler) {
                    this.deleteHandler(this._sasl_success_handler);
                    this._sasl_success_handler = null;
                }
                if (this._sasl_challenge_handler) {
                    this.deleteHandler(this._sasl_challenge_handler);
                    this._sasl_challenge_handler = null;
                }

                if (this._sasl_mechanism) this._sasl_mechanism.onFailure();
                this._changeConnectStatus(Strophe.Status.AUTHFAIL, null);
                return false;
            },
            /* jshint unused:true */

            /** PrivateFunction: _auth2_cb
             *  _Private_ handler to finish legacy authentication.
             *
             *  This handler is called when the result from the jabber:iq:auth
             *  <iq/> stanza is returned.
             *
             *  Parameters:
             *    (XMLElement) elem - The stanza that triggered the callback.
             *
             *  Returns:
             *    false to remove the handler.
             */
            _err_cb: function _err_cb(stanze) {
                this.addTimeds.pop(this._err_cb);
                this._changeConnectStatus(Strophe.Status.AUTHFAIL, null);
                this.disconnect('authentication failed');
            },

            _auth2_cb: function _auth2_cb(elem) {
                if (elem.getAttribute("type") == "result") {
                    var queryNodes = elem.getElementsByTagName('query');
                    this.authenticated = true;
                    if (queryNodes.length > 0) {
                        var queryNode = queryNodes[0];
                        var secret = queryNode.getAttribute('secret');
                        this._changeConnectStatus(Strophe.Status.CONNECTED, secret);
                    } else {
                        this._changeConnectStatus(Strophe.Status.CONNECTED, null);
                    }
                } else if (elem.getAttribute("type") == "error") {
                    this._changeConnectStatus(Strophe.Status.AUTHFAIL, null);
                    this.disconnect('authentication failed');
                }
                return false;
            },

            /** PrivateFunction: _addSysTimedHandler
             *  _Private_ function to add a system level timed handler.
             *
             *  This function is used to add a Strophe.TimedHandler for the
             *  library code.  System timed handlers are allowed to run before
             *  authentication is complete.
             *
             *  Parameters:
             *    (Integer) period - The period of the handler.
             *    (Function) handler - The callback function.
             */
            _addSysTimedHandler: function _addSysTimedHandler(period, handler) {
                var thand = new Strophe.TimedHandler(period, handler);
                thand.user = false;
                this.addTimeds.push(thand);
                return thand;
            },

            /** PrivateFunction: _addSysHandler
             *  _Private_ function to add a system level stanza handler.
             *
             *  This function is used to add a Strophe.Handler for the
             *  library code.  System stanza handlers are allowed to run before
             *  authentication is complete.
             *
             *  Parameters:
             *    (Function) handler - The callback function.
             *    (String) ns - The namespace to match.
             *    (String) name - The stanza name to match.
             *    (String) type - The stanza type attribute to match.
             *    (String) id - The stanza id attribute to match.
             */
            _addSysHandler: function _addSysHandler(handler, ns, name, type, id) {
                var hand = new Strophe.Handler(handler, ns, name, type, id);
                hand.user = false;
                this.addHandlers.push(hand);
                return hand;
            },

            /** PrivateFunction: _onDisconnectTimeout
             *  _Private_ timeout handler for handling non-graceful disconnection.
             *
             *  If the graceful disconnect process does not complete within the
             *  time allotted, this handler finishes the disconnect anyway.
             *
             *  Returns:
             *    false to remove the handler.
             */
            _onDisconnectTimeout: function _onDisconnectTimeout() {
                Strophe.info("_onDisconnectTimeout was called");
                this._changeConnectStatus(Strophe.Status.CONNTIMEOUT, null);
                this._proto._onDisconnectTimeout();
                // actually disconnect
                this._doDisconnect();
                return false;
            },

            /** PrivateFunction: _onIdle
             *  _Private_ handler to process events during idle cycle.
             *
             *  This handler is called every 100ms to fire timed handlers that
             *  are ready and keep poll requests going.
             */
            _onIdle: function _onIdle() {
                var i, thand, since, newList;

                // add timed handlers scheduled for addition
                // NOTE: we add before remove in the case a timed handler is
                // added and then deleted before the next _onIdle() call.
                while (this.addTimeds.length > 0) {
                    this.timedHandlers.push(this.addTimeds.pop());
                }

                // remove timed handlers that have been scheduled for deletion
                while (this.removeTimeds.length > 0) {
                    thand = this.removeTimeds.pop();
                    i = this.timedHandlers.indexOf(thand);
                    if (i >= 0) {
                        this.timedHandlers.splice(i, 1);
                    }
                }

                // call ready timed handlers
                var now = new Date().getTime();
                newList = [];
                for (i = 0; i < this.timedHandlers.length; i++) {
                    thand = this.timedHandlers[i];
                    if (this.authenticated || !thand.user) {
                        since = thand.lastCalled + thand.period;
                        if (since - now <= 0) {
                            if (thand.run()) {
                                newList.push(thand);
                            }
                        } else {
                            newList.push(thand);
                        }
                    }
                }
                this.timedHandlers = newList;

                clearTimeout(this._idleTimeout);

                try {
                    this._proto._onIdle();
                } catch (e) {
                    this._changeConnectStatus(Strophe.Status.DISCONNECTED, 'timeout error');
                    return;
                }
                // reactivate the timer only if connected
                if (this.connected) {
                    // XXX: setTimeout should be called only with function expressions (23974bc1)
                    this._idleTimeout = setTimeout(function () {
                        this._onIdle();
                    }.bind(this), 100);
                }
            }
        };

        /** Class: Strophe.SASLMechanism
         *
         *  encapsulates SASL authentication mechanisms.
         *
         *  User code may override the priority for each mechanism or disable it completely.
         *  See <priority> for information about changing priority and <test> for informatian on
         *  how to disable a mechanism.
         *
         *  By default, all mechanisms are enabled and the priorities are
         *
         *  EXTERNAL - 60
         *  OAUTHBEARER - 50
         *  SCRAM-SHA1 - 40
         *  DIGEST-MD5 - 30
         *  PLAIN - 20
         *  ANONYMOUS - 10
         *
         *  See: Strophe.Connection.addSupportedSASLMechanisms
         */

        /**
         * PrivateConstructor: Strophe.SASLMechanism
         * SASL auth mechanism abstraction.
         *
         *  Parameters:
         *    (String) name - SASL Mechanism name.
         *    (Boolean) isClientFirst - If client should send response first without challenge.
         *    (Number) priority - Priority.
         *
         *  Returns:
         *    A new Strophe.SASLMechanism object.
         */
        Strophe.SASLMechanism = function (name, isClientFirst, priority) {
            /** PrivateVariable: name
             *  Mechanism name.
             */
            this.name = name;
            /** PrivateVariable: isClientFirst
             *  If client sends response without initial server challenge.
             */
            this.isClientFirst = isClientFirst;
            /** Variable: priority
             *  Determines which <SASLMechanism> is chosen for authentication (Higher is better).
             *  Users may override this to prioritize mechanisms differently.
             *
             *  In the default configuration the priorities are
             *
             *  SCRAM-SHA1 - 40
             *  DIGEST-MD5 - 30
             *  Plain - 20
             *
             *  Example: (This will cause Strophe to choose the mechanism that the server sent first)
             *
             *  > Strophe.SASLMD5.priority = Strophe.SASLSHA1.priority;
             *
             *  See <SASL mechanisms> for a list of available mechanisms.
             *
             */
            this.priority = priority;
        };

        Strophe.SASLMechanism.prototype = {
            /**
             *  Function: test
             *  Checks if mechanism able to run.
             *  To disable a mechanism, make this return false;
             *
             *  To disable plain authentication run
             *  > Strophe.SASLPlain.test = function() {
             *  >   return false;
             *  > }
             *
             *  See <SASL mechanisms> for a list of available mechanisms.
             *
             *  Parameters:
             *    (Strophe.Connection) connection - Target Connection.
             *
             *  Returns:
             *    (Boolean) If mechanism was able to run.
             */
            /* jshint unused:false */
            test: function test(connection) {
                return true;
            },
            /* jshint unused:true */

            /** PrivateFunction: onStart
             *  Called before starting mechanism on some connection.
             *
             *  Parameters:
             *    (Strophe.Connection) connection - Target Connection.
             */
            onStart: function onStart(connection) {
                this._connection = connection;
            },

            /** PrivateFunction: onChallenge
             *  Called by protocol implementation on incoming challenge. If client is
             *  first (isClientFirst == true) challenge will be null on the first call.
             *
             *  Parameters:
             *    (Strophe.Connection) connection - Target Connection.
             *    (String) challenge - current challenge to handle.
             *
             *  Returns:
             *    (String) Mechanism response.
             */
            /* jshint unused:false */
            onChallenge: function onChallenge(connection, challenge) {
                throw new Error("You should implement challenge handling!");
            },
            /* jshint unused:true */

            /** PrivateFunction: onFailure
             *  Protocol informs mechanism implementation about SASL failure.
             */
            onFailure: function onFailure() {
                this._connection = null;
            },

            /** PrivateFunction: onSuccess
             *  Protocol informs mechanism implementation about SASL success.
             */
            onSuccess: function onSuccess() {
                this._connection = null;
            }
        };

        /** Constants: SASL mechanisms
         *  Available authentication mechanisms
         *
         *  Strophe.SASLAnonymous - SASL ANONYMOUS authentication.
         *  Strophe.SASLPlain - SASL PLAIN authentication.
         *  Strophe.SASLMD5 - SASL DIGEST-MD5 authentication
         *  Strophe.SASLSHA1 - SASL SCRAM-SHA1 authentication
         *  Strophe.SASLOAuthBearer - SASL OAuth Bearer authentication
         *  Strophe.SASLExternal - SASL EXTERNAL authentication
         */

        // Building SASL callbacks

        /** PrivateConstructor: SASLAnonymous
         *  SASL ANONYMOUS authentication.
         */
        Strophe.SASLAnonymous = function () {};
        Strophe.SASLAnonymous.prototype = new Strophe.SASLMechanism("ANONYMOUS", false, 10);

        Strophe.SASLAnonymous.prototype.test = function (connection) {
            return connection.authcid === null;
        };

        /** PrivateConstructor: SASLPlain
         *  SASL PLAIN authentication.
         */
        Strophe.SASLPlain = function () {};
        Strophe.SASLPlain.prototype = new Strophe.SASLMechanism("PLAIN", true, 20);

        Strophe.SASLPlain.prototype.test = function (connection) {
            return connection.authcid !== null;
        };

        Strophe.SASLPlain.prototype.onChallenge = function (connection) {
            var auth_str = connection.authzid;
            auth_str = auth_str + '\0';
            auth_str = auth_str + connection.authcid;
            auth_str = auth_str + '\0';
            auth_str = auth_str + connection.pass;
            return utils.utf16to8(auth_str);
        };

        /** PrivateConstructor: SASLSHA1
         *  SASL SCRAM SHA 1 authentication.
         */
        Strophe.SASLSHA1 = function () {};
        Strophe.SASLSHA1.prototype = new Strophe.SASLMechanism("SCRAM-SHA-1", true, 40);

        Strophe.SASLSHA1.prototype.test = function (connection) {
            return connection.authcid !== null;
        };

        Strophe.SASLSHA1.prototype.onChallenge = function (connection, challenge, test_cnonce) {
            var cnonce = test_cnonce || MD5.hexdigest(Math.random() * 1234567890);
            var auth_str = "n=" + utils.utf16to8(connection.authcid);
            auth_str += ",r=";
            auth_str += cnonce;
            connection._sasl_data.cnonce = cnonce;
            connection._sasl_data["client-first-message-bare"] = auth_str;

            auth_str = "n,," + auth_str;

            this.onChallenge = function (connection, challenge) {
                var nonce, salt, iter, Hi, U, U_old, i, k, pass;
                var clientKey, serverKey, clientSignature;
                var responseText = "c=biws,";
                var authMessage = connection._sasl_data["client-first-message-bare"] + "," + challenge + ",";
                var cnonce = connection._sasl_data.cnonce;
                var attribMatch = /([a-z]+)=([^,]+)(,|$)/;

                while (challenge.match(attribMatch)) {
                    var matches = challenge.match(attribMatch);
                    challenge = challenge.replace(matches[0], "");
                    switch (matches[1]) {
                        case "r":
                            nonce = matches[2];
                            break;
                        case "s":
                            salt = matches[2];
                            break;
                        case "i":
                            iter = matches[2];
                            break;
                    }
                }

                if (nonce.substr(0, cnonce.length) !== cnonce) {
                    connection._sasl_data = {};
                    return connection._sasl_failure_cb();
                }

                responseText += "r=" + nonce;
                authMessage += responseText;

                salt = Base64.decode(salt);
                salt += "\x00\x00\x00\x01";

                pass = utils.utf16to8(connection.pass);
                Hi = U_old = SHA1.core_hmac_sha1(pass, salt);
                for (i = 1; i < iter; i++) {
                    U = SHA1.core_hmac_sha1(pass, SHA1.binb2str(U_old));
                    for (k = 0; k < 5; k++) {
                        Hi[k] ^= U[k];
                    }
                    U_old = U;
                }
                Hi = SHA1.binb2str(Hi);

                clientKey = SHA1.core_hmac_sha1(Hi, "Client Key");
                serverKey = SHA1.str_hmac_sha1(Hi, "Server Key");
                clientSignature = SHA1.core_hmac_sha1(SHA1.str_sha1(SHA1.binb2str(clientKey)), authMessage);
                connection._sasl_data["server-signature"] = SHA1.b64_hmac_sha1(serverKey, authMessage);

                for (k = 0; k < 5; k++) {
                    clientKey[k] ^= clientSignature[k];
                }

                responseText += ",p=" + Base64.encode(SHA1.binb2str(clientKey));
                return responseText;
            }.bind(this);

            return auth_str;
        };

        /** PrivateConstructor: SASLMD5
         *  SASL DIGEST MD5 authentication.
         */
        Strophe.SASLMD5 = function () {};
        Strophe.SASLMD5.prototype = new Strophe.SASLMechanism("DIGEST-MD5", false, 30);

        Strophe.SASLMD5.prototype.test = function (connection) {
            return connection.authcid !== null;
        };

        /** PrivateFunction: _quote
         *  _Private_ utility function to backslash escape and quote strings.
         *
         *  Parameters:
         *    (String) str - The string to be quoted.
         *
         *  Returns:
         *    quoted string
         */
        Strophe.SASLMD5.prototype._quote = function (str) {
            return '"' + str.replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"';
            //" end string workaround for emacs
        };

        Strophe.SASLMD5.prototype.onChallenge = function (connection, challenge, test_cnonce) {
            var attribMatch = /([a-z]+)=("[^"]+"|[^,"]+)(?:,|$)/;
            var cnonce = test_cnonce || MD5.hexdigest("" + Math.random() * 1234567890);
            var realm = "";
            var host = null;
            var nonce = "";
            var qop = "";
            var matches;

            while (challenge.match(attribMatch)) {
                matches = challenge.match(attribMatch);
                challenge = challenge.replace(matches[0], "");
                matches[2] = matches[2].replace(/^"(.+)"$/, "$1");
                switch (matches[1]) {
                    case "realm":
                        realm = matches[2];
                        break;
                    case "nonce":
                        nonce = matches[2];
                        break;
                    case "qop":
                        qop = matches[2];
                        break;
                    case "host":
                        host = matches[2];
                        break;
                }
            }

            var digest_uri = connection.servtype + "/" + connection.domain;
            if (host !== null) {
                digest_uri = digest_uri + "/" + host;
            }

            var cred = utils.utf16to8(connection.authcid + ":" + realm + ":" + this._connection.pass);
            var A1 = MD5.hash(cred) + ":" + nonce + ":" + cnonce;
            var A2 = 'AUTHENTICATE:' + digest_uri;

            var responseText = "";
            responseText += 'charset=utf-8,';
            responseText += 'username=' + this._quote(utils.utf16to8(connection.authcid)) + ',';
            responseText += 'realm=' + this._quote(realm) + ',';
            responseText += 'nonce=' + this._quote(nonce) + ',';
            responseText += 'nc=00000001,';
            responseText += 'cnonce=' + this._quote(cnonce) + ',';
            responseText += 'digest-uri=' + this._quote(digest_uri) + ',';
            responseText += 'response=' + MD5.hexdigest(MD5.hexdigest(A1) + ":" + nonce + ":00000001:" + cnonce + ":auth:" + MD5.hexdigest(A2)) + ",";
            responseText += 'qop=auth';

            this.onChallenge = function () {
                return "";
            };
            return responseText;
        };

        /** PrivateConstructor: SASLOAuthBearer
         *  SASL OAuth Bearer authentication.
         */
        Strophe.SASLOAuthBearer = function () {};
        Strophe.SASLOAuthBearer.prototype = new Strophe.SASLMechanism("OAUTHBEARER", true, 50);

        Strophe.SASLOAuthBearer.prototype.test = function (connection) {
            return connection.authcid !== null;
        };

        Strophe.SASLOAuthBearer.prototype.onChallenge = function (connection) {
            var auth_str = 'n,a=';
            auth_str = auth_str + connection.authzid;
            auth_str = auth_str + ',';
            auth_str = auth_str + '\x01';
            auth_str = auth_str + 'auth=Bearer ';
            auth_str = auth_str + connection.pass;
            auth_str = auth_str + '\x01';
            auth_str = auth_str + '\x01';
            return utils.utf16to8(auth_str);
        };

        /** PrivateConstructor: SASLExternal
         *  SASL EXTERNAL authentication.
         *
         *  The EXTERNAL mechanism allows a client to request the server to use
         *  credentials established by means external to the mechanism to
         *  authenticate the client. The external means may be, for instance,
         *  TLS services.
         */
        Strophe.SASLExternal = function () {};
        Strophe.SASLExternal.prototype = new Strophe.SASLMechanism("EXTERNAL", true, 60);

        Strophe.SASLExternal.prototype.onChallenge = function (connection) {
            /** According to XEP-178, an authzid SHOULD NOT be presented when the
             * authcid contained or implied in the client certificate is the JID (i.e.
             * authzid) with which the user wants to log in as.
             *
             * To NOT send the authzid, the user should therefore set the authcid equal
             * to the JID when instantiating a new Strophe.Connection object.
             */
            return connection.authcid === connection.authzid ? '' : connection.authzid;
        };

        return {
            Strophe: Strophe,
            $build: $build,
            $msg: $msg,
            $iq: $iq,
            $pres: $pres,
            SHA1: SHA1,
            Base64: Base64,
            MD5: MD5
        };
    });

    /*
        This program is distributed under the terms of the MIT license.
        Please see the LICENSE file for details.
          Copyright 2006-2008, OGG, LLC
    */

    /* jshint undef: true, unused: true:, noarg: true, latedef: true */
    /* global define, window, setTimeout, clearTimeout, XMLHttpRequest, ActiveXObject, Strophe, $build */

    (function (root, factory) {
        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_5__], __WEBPACK_LOCAL_MODULE_6__ = (function (core) {
                return factory(core.Strophe, core.$build);
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));
        } else {
            // Browser globals
            return factory(Strophe, $build);
        }
    })(this, function (Strophe, $build) {

        /** PrivateClass: Strophe.Request
         *  _Private_ helper class that provides a cross implementation abstraction
         *  for a BOSH related XMLHttpRequest.
         *
         *  The Strophe.Request class is used internally to encapsulate BOSH request
         *  information.  It is not meant to be used from user's code.
         */

        /** PrivateConstructor: Strophe.Request
         *  Create and initialize a new Strophe.Request object.
         *
         *  Parameters:
         *    (XMLElement) elem - The XML data to be sent in the request.
         *    (Function) func - The function that will be called when the
         *      XMLHttpRequest readyState changes.
         *    (Integer) rid - The BOSH rid attribute associated with this request.
         *    (Integer) sends - The number of times this same request has been sent.
         */
        Strophe.Request = function (elem, func, rid, sends) {
            this.id = ++Strophe._requestId;
            this.xmlData = elem;
            this.data = Strophe.serialize(elem);
            // save original function in case we need to make a new request
            // from this one.
            this.origFunc = func;
            this.func = func;
            this.rid = rid;
            this.date = NaN;
            this.sends = sends || 0;
            this.abort = false;
            this.dead = null;

            this.age = function () {
                if (!this.date) {
                    return 0;
                }
                var now = new Date();
                return (now - this.date) / 1000;
            };
            this.timeDead = function () {
                if (!this.dead) {
                    return 0;
                }
                var now = new Date();
                return (now - this.dead) / 1000;
            };
            this.xhr = this._newXHR();
        };

        Strophe.Request.prototype = {
            /** PrivateFunction: getResponse
             *  Get a response from the underlying XMLHttpRequest.
             *
             *  This function attempts to get a response from the request and checks
             *  for errors.
             *
             *  Throws:
             *    "parsererror" - A parser error occured.
             *    "badformat" - The entity has sent XML that cannot be processed.
             *
             *  Returns:
             *    The DOM element tree of the response.
             */
            getResponse: function getResponse() {
                var node = null;
                if (this.xhr.responseXML && this.xhr.responseXML.documentElement) {
                    node = this.xhr.responseXML.documentElement;
                    if (node.tagName == "parsererror") {
                        Strophe.error("invalid response received");
                        Strophe.error("responseText: " + this.xhr.responseText);
                        Strophe.error("responseXML: " + Strophe.serialize(this.xhr.responseXML));
                        throw "parsererror";
                    }
                } else if (this.xhr.responseText) {
                    Strophe.error("invalid response received");
                    Strophe.error("responseText: " + this.xhr.responseText);
                    throw "badformat";
                }

                return node;
            },

            /** PrivateFunction: _newXHR
             *  _Private_ helper function to create XMLHttpRequests.
             *
             *  This function creates XMLHttpRequests across all implementations.
             *
             *  Returns:
             *    A new XMLHttpRequest.
             */
            _newXHR: function _newXHR() {
                var xhr = null;
                if (window.XMLHttpRequest) {
                    xhr = new XMLHttpRequest();
                    if (xhr.overrideMimeType) {
                        xhr.overrideMimeType("text/xml; charset=utf-8");
                    }
                } else if (window.ActiveXObject) {
                    xhr = new ActiveXObject("Microsoft.XMLHTTP");
                }
                // use Function.bind() to prepend ourselves as an argument
                xhr.onreadystatechange = this.func.bind(null, this);
                return xhr;
            }
        };

        /** Class: Strophe.Bosh
         *  _Private_ helper class that handles BOSH Connections
         *
         *  The Strophe.Bosh class is used internally by Strophe.Connection
         *  to encapsulate BOSH sessions. It is not meant to be used from user's code.
         */

        /** File: bosh.js
         *  A JavaScript library to enable BOSH in Strophejs.
         *
         *  this library uses Bidirectional-streams Over Synchronous HTTP (BOSH)
         *  to emulate a persistent, stateful, two-way connection to an XMPP server.
         *  More information on BOSH can be found in XEP 124.
         */

        /** PrivateConstructor: Strophe.Bosh
         *  Create and initialize a Strophe.Bosh object.
         *
         *  Parameters:
         *    (Strophe.Connection) connection - The Strophe.Connection that will use BOSH.
         *
         *  Returns:
         *    A new Strophe.Bosh object.
         */
        Strophe.Bosh = function (connection) {
            this._conn = connection;
            /* request id for body tags */
            this.rid = Math.floor(Math.random() * 4294967295);
            /* The current session ID. */
            this.sid = null;

            // default BOSH values
            this.hold = 1;
            this.wait = 60;
            this.window = 5;
            this.errors = 0;
            this.inactivity = null;

            this._requests = [];
        };

        Strophe.Bosh.prototype = {
            /** Variable: strip
             *
             *  BOSH-Connections will have all stanzas wrapped in a <body> tag when
             *  passed to <Strophe.Connection.xmlInput> or <Strophe.Connection.xmlOutput>.
             *  To strip this tag, User code can set <Strophe.Bosh.strip> to "body":
             *
             *  > Strophe.Bosh.prototype.strip = "body";
             *
             *  This will enable stripping of the body tag in both
             *  <Strophe.Connection.xmlInput> and <Strophe.Connection.xmlOutput>.
             */
            strip: null,

            /** PrivateFunction: _buildBody
             *  _Private_ helper function to generate the <body/> wrapper for BOSH.
             *
             *  Returns:
             *    A Strophe.Builder with a <body/> element.
             */
            _buildBody: function _buildBody() {
                var bodyWrap = $build('body', {
                    rid: this.rid++,
                    xmlns: Strophe.NS.HTTPBIND
                });
                if (this.sid !== null) {
                    bodyWrap.attrs({ sid: this.sid });
                }
                if (this._conn.options.keepalive && this._conn._sessionCachingSupported()) {
                    this._cacheSession();
                }
                return bodyWrap;
            },

            /** PrivateFunction: _reset
             *  Reset the connection.
             *
             *  This function is called by the reset function of the Strophe Connection
             */
            _reset: function _reset() {
                this.rid = Math.floor(Math.random() * 4294967295);
                this.sid = null;
                this.errors = 0;
                if (this._conn._sessionCachingSupported()) {
                    window.sessionStorage.removeItem('strophe-bosh-session');
                }

                this._conn.nextValidRid(this.rid);
            },

            /** PrivateFunction: _connect
             *  _Private_ function that initializes the BOSH connection.
             *
             *  Creates and sends the Request that initializes the BOSH connection.
             */
            _connect: function _connect(wait, hold, route) {
                this.wait = wait || this.wait;
                this.hold = hold || this.hold;
                this.errors = 0;

                // build the body tag
                var body = this._buildBody().attrs({
                    to: this._conn.domain,
                    "xml:lang": "en",
                    wait: this.wait,
                    hold: this.hold,
                    content: "text/xml; charset=utf-8",
                    ver: "1.6",
                    "xmpp:version": "1.0",
                    "xmlns:xmpp": Strophe.NS.BOSH
                });

                if (route) {
                    body.attrs({
                        route: route
                    });
                }

                var _connect_cb = this._conn._connect_cb;

                this._requests.push(new Strophe.Request(body.tree(), this._onRequestStateChange.bind(this, _connect_cb.bind(this._conn)), body.tree().getAttribute("rid")));
                this._throttledRequestHandler();
            },

            /** PrivateFunction: _attach
             *  Attach to an already created and authenticated BOSH session.
             *
             *  This function is provided to allow Strophe to attach to BOSH
             *  sessions which have been created externally, perhaps by a Web
             *  application.  This is often used to support auto-login type features
             *  without putting user credentials into the page.
             *
             *  Parameters:
             *    (String) jid - The full JID that is bound by the session.
             *    (String) sid - The SID of the BOSH session.
             *    (String) rid - The current RID of the BOSH session.  This RID
             *      will be used by the next request.
             *    (Function) callback The connect callback function.
             *    (Integer) wait - The optional HTTPBIND wait value.  This is the
             *      time the server will wait before returning an empty result for
             *      a request.  The default setting of 60 seconds is recommended.
             *      Other settings will require tweaks to the Strophe.TIMEOUT value.
             *    (Integer) hold - The optional HTTPBIND hold value.  This is the
             *      number of connections the server will hold at one time.  This
             *      should almost always be set to 1 (the default).
             *    (Integer) wind - The optional HTTBIND window value.  This is the
             *      allowed range of request ids that are valid.  The default is 5.
             */
            _attach: function _attach(jid, sid, rid, callback, wait, hold, wind) {
                this._conn.jid = jid;
                this.sid = sid;
                this.rid = rid;

                this._conn.connect_callback = callback;

                this._conn.domain = Strophe.getDomainFromJid(this._conn.jid);

                this._conn.authenticated = true;
                this._conn.connected = true;

                this.wait = wait || this.wait;
                this.hold = hold || this.hold;
                this.window = wind || this.window;

                this._conn._changeConnectStatus(Strophe.Status.ATTACHED, null);
            },

            /** PrivateFunction: _restore
             *  Attempt to restore a cached BOSH session
             *
             *  Parameters:
             *    (String) jid - The full JID that is bound by the session.
             *      This parameter is optional but recommended, specifically in cases
             *      where prebinded BOSH sessions are used where it's important to know
             *      that the right session is being restored.
             *    (Function) callback The connect callback function.
             *    (Integer) wait - The optional HTTPBIND wait value.  This is the
             *      time the server will wait before returning an empty result for
             *      a request.  The default setting of 60 seconds is recommended.
             *      Other settings will require tweaks to the Strophe.TIMEOUT value.
             *    (Integer) hold - The optional HTTPBIND hold value.  This is the
             *      number of connections the server will hold at one time.  This
             *      should almost always be set to 1 (the default).
             *    (Integer) wind - The optional HTTBIND window value.  This is the
             *      allowed range of request ids that are valid.  The default is 5.
             */
            _restore: function _restore(jid, callback, wait, hold, wind) {
                var session = JSON.parse(window.sessionStorage.getItem('strophe-bosh-session'));
                if (typeof session !== "undefined" && session !== null && session.rid && session.sid && session.jid && (typeof jid === "undefined" || jid === null || Strophe.getBareJidFromJid(session.jid) == Strophe.getBareJidFromJid(jid) ||
                // If authcid is null, then it's an anonymous login, so
                // we compare only the domains:
                Strophe.getNodeFromJid(jid) === null && Strophe.getDomainFromJid(session.jid) == jid)) {
                    this._conn.restored = true;
                    this._attach(session.jid, session.sid, session.rid, callback, wait, hold, wind);
                } else {
                    throw { name: "StropheSessionError", message: "_restore: no restoreable session." };
                }
            },

            /** PrivateFunction: _cacheSession
             *  _Private_ handler for the beforeunload event.
             *
             *  This handler is used to process the Bosh-part of the initial request.
             *  Parameters:
             *    (Strophe.Request) bodyWrap - The received stanza.
             */
            _cacheSession: function _cacheSession() {
                if (this._conn.authenticated) {
                    if (this._conn.jid && this.rid && this.sid) {
                        window.sessionStorage.setItem('strophe-bosh-session', JSON.stringify({
                            'jid': this._conn.jid,
                            'rid': this.rid,
                            'sid': this.sid
                        }));
                    }
                } else {
                    window.sessionStorage.removeItem('strophe-bosh-session');
                }
            },

            /** PrivateFunction: _connect_cb
             *  _Private_ handler for initial connection request.
             *
             *  This handler is used to process the Bosh-part of the initial request.
             *  Parameters:
             *    (Strophe.Request) bodyWrap - The received stanza.
             */
            _connect_cb: function _connect_cb(bodyWrap) {
                var typ = bodyWrap.getAttribute("type");
                var cond, conflict;
                if (typ !== null && typ == "terminate") {
                    // an error occurred
                    cond = bodyWrap.getAttribute("condition");
                    Strophe.error("BOSH-Connection failed: " + cond);
                    conflict = bodyWrap.getElementsByTagName("conflict");
                    if (cond !== null) {
                        if (cond == "remote-stream-error" && conflict.length > 0) {
                            cond = "conflict";
                        }
                        this._conn._changeConnectStatus(Strophe.Status.CONNFAIL, cond);
                    } else {
                        this._conn._changeConnectStatus(Strophe.Status.CONNFAIL, "unknown");
                    }
                    this._conn._doDisconnect(cond);
                    return Strophe.Status.CONNFAIL;
                }

                // check to make sure we don't overwrite these if _connect_cb is
                // called multiple times in the case of missing stream:features
                if (!this.sid) {
                    this.sid = bodyWrap.getAttribute("sid");
                }
                var wind = bodyWrap.getAttribute('requests');
                if (wind) {
                    this.window = parseInt(wind, 10);
                }
                var hold = bodyWrap.getAttribute('hold');
                if (hold) {
                    this.hold = parseInt(hold, 10);
                }
                var wait = bodyWrap.getAttribute('wait');
                if (wait) {
                    this.wait = parseInt(wait, 10);
                }
                var inactivity = bodyWrap.getAttribute('inactivity');
                if (inactivity) {
                    this.inactivity = parseInt(inactivity, 10);
                }
            },

            /** PrivateFunction: _disconnect
             *  _Private_ part of Connection.disconnect for Bosh
             *
             *  Parameters:
             *    (Request) pres - This stanza will be sent before disconnecting.
             */
            _disconnect: function _disconnect(pres) {
                this._sendTerminate(pres);
            },

            /** PrivateFunction: _doDisconnect
             *  _Private_ function to disconnect.
             *
             *  Resets the SID and RID.
             */
            _doDisconnect: function _doDisconnect() {
                this.sid = null;
                this.rid = Math.floor(Math.random() * 4294967295);
                if (this._conn._sessionCachingSupported()) {
                    window.sessionStorage.removeItem('strophe-bosh-session');
                }

                this._conn.nextValidRid(this.rid);
            },

            /** PrivateFunction: _emptyQueue
             * _Private_ function to check if the Request queue is empty.
             *
             *  Returns:
             *    True, if there are no Requests queued, False otherwise.
             */
            _emptyQueue: function _emptyQueue() {
                return this._requests.length === 0;
            },

            /** PrivateFunction: _callProtocolErrorHandlers
             *  _Private_ function to call error handlers registered for HTTP errors.
             *
             *  Parameters:
             *    (Strophe.Request) req - The request that is changing readyState.
             */
            _callProtocolErrorHandlers: function _callProtocolErrorHandlers(req) {
                var reqStatus = this._getRequestStatus(req),
                    err_callback;
                err_callback = this._conn.protocolErrorHandlers.HTTP[reqStatus];
                if (err_callback) {
                    err_callback.call(this, reqStatus);
                }
            },

            /** PrivateFunction: _hitError
             *  _Private_ function to handle the error count.
             *
             *  Requests are resent automatically until their error count reaches
             *  5.  Each time an error is encountered, this function is called to
             *  increment the count and disconnect if the count is too high.
             *
             *  Parameters:
             *    (Integer) reqStatus - The request status.
             */
            _hitError: function _hitError(reqStatus) {
                this.errors++;
                Strophe.warn("request errored, status: " + reqStatus + ", number of errors: " + this.errors);
                if (this.errors > 4) {
                    this._conn._onDisconnectTimeout();
                }
            },

            /** PrivateFunction: _no_auth_received
             *
             * Called on stream start/restart when no stream:features
             * has been received and sends a blank poll request.
             */
            _no_auth_received: function _no_auth_received(_callback) {
                if (_callback) {
                    _callback = _callback.bind(this._conn);
                } else {
                    _callback = this._conn._connect_cb.bind(this._conn);
                }
                var body = this._buildBody();
                this._requests.push(new Strophe.Request(body.tree(), this._onRequestStateChange.bind(this, _callback.bind(this._conn)), body.tree().getAttribute("rid")));
                this._throttledRequestHandler();
            },

            /** PrivateFunction: _onDisconnectTimeout
             *  _Private_ timeout handler for handling non-graceful disconnection.
             *
             *  Cancels all remaining Requests and clears the queue.
             */
            _onDisconnectTimeout: function _onDisconnectTimeout() {
                this._abortAllRequests();
            },

            /** PrivateFunction: _abortAllRequests
             *  _Private_ helper function that makes sure all pending requests are aborted.
             */
            _abortAllRequests: function _abortAllRequests() {
                var req;
                while (this._requests.length > 0) {
                    req = this._requests.pop();
                    req.abort = true;
                    req.xhr.abort();
                    // jslint complains, but this is fine. setting to empty func
                    // is necessary for IE6
                    req.xhr.onreadystatechange = function () {}; // jshint ignore:line
                }
            },

            /** PrivateFunction: _onIdle
             *  _Private_ handler called by Strophe.Connection._onIdle
             *
             *  Sends all queued Requests or polls with empty Request if there are none.
             */
            _onIdle: function _onIdle() {
                var data = this._conn._data;
                // if no requests are in progress, poll
                if (this._conn.authenticated && this._requests.length === 0 && data.length === 0 && !this._conn.disconnecting) {
                    Strophe.info("no requests during idle cycle, sending " + "blank request");
                    data.push(null);
                }

                if (this._conn.paused) {
                    return;
                }

                if (this._requests.length < 2 && data.length > 0) {
                    var body = this._buildBody();
                    for (var i = 0; i < data.length; i++) {
                        if (data[i] !== null) {
                            if (data[i] === "restart") {
                                body.attrs({
                                    to: this._conn.domain,
                                    "xml:lang": "en",
                                    "xmpp:restart": "true",
                                    "xmlns:xmpp": Strophe.NS.BOSH
                                });
                            } else {
                                body.cnode(data[i]).up();
                            }
                        }
                    }
                    delete this._conn._data;
                    this._conn._data = [];
                    this._requests.push(new Strophe.Request(body.tree(), this._onRequestStateChange.bind(this, this._conn._dataRecv.bind(this._conn)), body.tree().getAttribute("rid")));
                    this._throttledRequestHandler();
                }

                if (this._requests.length > 0) {
                    var time_elapsed = this._requests[0].age();
                    if (this._requests[0].dead !== null) {
                        if (this._requests[0].timeDead() > Math.floor(Strophe.SECONDARY_TIMEOUT * this.wait)) {
                            this._throttledRequestHandler();
                        }
                    }

                    if (time_elapsed > Math.floor(Strophe.TIMEOUT * this.wait)) {
                        Strophe.warn("Request " + this._requests[0].id + " timed out, over " + Math.floor(Strophe.TIMEOUT * this.wait) + " seconds since last activity");
                        this._throttledRequestHandler();
                    }
                }
            },

            /** PrivateFunction: _getRequestStatus
             *
             *  Returns the HTTP status code from a Strophe.Request
             *
             *  Parameters:
             *    (Strophe.Request) req - The Strophe.Request instance.
             *    (Integer) def - The default value that should be returned if no
             *          status value was found.
             */
            _getRequestStatus: function _getRequestStatus(req, def) {
                var reqStatus;
                if (req.xhr.readyState == 4) {
                    try {
                        reqStatus = req.xhr.status;
                    } catch (e) {
                        // ignore errors from undefined status attribute. Works
                        // around a browser bug
                        Strophe.error("Caught an error while retrieving a request's status, " + "reqStatus: " + reqStatus);
                    }
                }
                if (typeof reqStatus == "undefined") {
                    reqStatus = typeof def === 'number' ? def : 0;
                }
                return reqStatus;
            },

            /** PrivateFunction: _onRequestStateChange
             *  _Private_ handler for Strophe.Request state changes.
             *
             *  This function is called when the XMLHttpRequest readyState changes.
             *  It contains a lot of error handling logic for the many ways that
             *  requests can fail, and calls the request callback when requests
             *  succeed.
             *
             *  Parameters:
             *    (Function) func - The handler for the request.
             *    (Strophe.Request) req - The request that is changing readyState.
             */
            _onRequestStateChange: function _onRequestStateChange(func, req) {
                Strophe.debug("request id " + req.id + "." + req.sends + " state changed to " + req.xhr.readyState);
                if (req.abort) {
                    req.abort = false;
                    return;
                }
                if (req.xhr.readyState !== 4) {
                    // The request is not yet complete
                    return;
                }
                var reqStatus = this._getRequestStatus(req);
                if (this.disconnecting && reqStatus >= 400) {
                    this._hitError(reqStatus);
                    this._callProtocolErrorHandlers(req);
                    return;
                }

                if (reqStatus > 0 && reqStatus < 500 || req.sends > 5) {
                    // remove from internal queue
                    this._removeRequest(req);
                    Strophe.debug("request id " + req.id + " should now be removed");
                }

                if (reqStatus == 200) {
                    // request succeeded
                    var reqIs0 = this._requests[0] == req;
                    var reqIs1 = this._requests[1] == req;
                    // if request 1 finished, or request 0 finished and request
                    // 1 is over Strophe.SECONDARY_TIMEOUT seconds old, we need to
                    // restart the other - both will be in the first spot, as the
                    // completed request has been removed from the queue already
                    if (reqIs1 || reqIs0 && this._requests.length > 0 && this._requests[0].age() > Math.floor(Strophe.SECONDARY_TIMEOUT * this.wait)) {
                        this._restartRequest(0);
                    }
                    this._conn.nextValidRid(Number(req.rid) + 1);
                    Strophe.debug("request id " + req.id + "." + req.sends + " got 200");
                    func(req); // call handler
                    this.errors = 0;
                } else if (reqStatus === 0 || reqStatus >= 400 && reqStatus < 600 || reqStatus >= 12000) {
                    // request failed
                    Strophe.error("request id " + req.id + "." + req.sends + " error " + reqStatus + " happened");
                    this._hitError(reqStatus);
                    this._callProtocolErrorHandlers(req);
                    if (reqStatus >= 400 && reqStatus < 500) {
                        this._conn._changeConnectStatus(Strophe.Status.DISCONNECTING, null);
                        this._conn._doDisconnect();
                    }
                } else {
                    Strophe.error("request id " + req.id + "." + req.sends + " error " + reqStatus + " happened");
                }
                if (!(reqStatus > 0 && reqStatus < 500) || req.sends > 5) {
                    this._throttledRequestHandler();
                }
            },

            /** PrivateFunction: _processRequest
             *  _Private_ function to process a request in the queue.
             *
             *  This function takes requests off the queue and sends them and
             *  restarts dead requests.
             *
             *  Parameters:
             *    (Integer) i - The index of the request in the queue.
             */
            _processRequest: function _processRequest(i) {
                var self = this;
                var req = this._requests[i];
                var reqStatus = this._getRequestStatus(req, -1);

                // make sure we limit the number of retries
                if (req.sends > this._conn.maxRetries) {
                    this._conn._onDisconnectTimeout();
                    return;
                }

                var time_elapsed = req.age();
                var primaryTimeout = !isNaN(time_elapsed) && time_elapsed > Math.floor(Strophe.TIMEOUT * this.wait);
                var secondaryTimeout = req.dead !== null && req.timeDead() > Math.floor(Strophe.SECONDARY_TIMEOUT * this.wait);
                var requestCompletedWithServerError = req.xhr.readyState == 4 && (reqStatus < 1 || reqStatus >= 500);
                if (primaryTimeout || secondaryTimeout || requestCompletedWithServerError) {
                    if (secondaryTimeout) {
                        Strophe.error("Request " + this._requests[i].id + " timed out (secondary), restarting");
                    }
                    req.abort = true;
                    req.xhr.abort();
                    // setting to null fails on IE6, so set to empty function
                    req.xhr.onreadystatechange = function () {};
                    this._requests[i] = new Strophe.Request(req.xmlData, req.origFunc, req.rid, req.sends);
                    req = this._requests[i];
                }

                if (req.xhr.readyState === 0) {
                    Strophe.debug("request id " + req.id + "." + req.sends + " posting");

                    try {
                        var contentType = this._conn.options.contentType || "text/xml; charset=utf-8";
                        req.xhr.open("POST", this._conn.service, this._conn.options.sync ? false : true);
                        if (typeof req.xhr.setRequestHeader !== 'undefined') {
                            // IE9 doesn't have setRequestHeader
                            req.xhr.setRequestHeader("Content-Type", contentType);
                        }
                        if (this._conn.options.withCredentials) {
                            req.xhr.withCredentials = true;
                        }
                    } catch (e2) {
                        Strophe.error("XHR open failed.");
                        if (!this._conn.connected) {
                            this._conn._changeConnectStatus(Strophe.Status.CONNFAIL, "bad-service");
                        }
                        this._conn.disconnect();
                        return;
                    }

                    // Fires the XHR request -- may be invoked immediately
                    // or on a gradually expanding retry window for reconnects
                    var sendFunc = function sendFunc() {
                        req.date = new Date();
                        if (self._conn.options.customHeaders) {
                            var headers = self._conn.options.customHeaders;
                            for (var header in headers) {
                                if (headers.hasOwnProperty(header)) {
                                    req.xhr.setRequestHeader(header, headers[header]);
                                }
                            }
                        }
                        req.xhr.send(req.data);
                    };

                    // Implement progressive backoff for reconnects --
                    // First retry (send == 1) should also be instantaneous
                    if (req.sends > 1) {
                        // Using a cube of the retry number creates a nicely
                        // expanding retry window
                        var backoff = Math.min(Math.floor(Strophe.TIMEOUT * this.wait), Math.pow(req.sends, 3)) * 1000;
                        setTimeout(function () {
                            // XXX: setTimeout should be called only with function expressions (23974bc1)
                            sendFunc();
                        }, backoff);
                    } else {
                        sendFunc();
                    }

                    req.sends++;

                    if (this._conn.xmlOutput !== Strophe.Connection.prototype.xmlOutput) {
                        if (req.xmlData.nodeName === this.strip && req.xmlData.childNodes.length) {
                            this._conn.xmlOutput(req.xmlData.childNodes[0]);
                        } else {
                            this._conn.xmlOutput(req.xmlData);
                        }
                    }
                    if (this._conn.rawOutput !== Strophe.Connection.prototype.rawOutput) {
                        this._conn.rawOutput(req.data);
                    }
                } else {
                    Strophe.debug("_processRequest: " + (i === 0 ? "first" : "second") + " request has readyState of " + req.xhr.readyState);
                }
            },

            /** PrivateFunction: _removeRequest
             *  _Private_ function to remove a request from the queue.
             *
             *  Parameters:
             *    (Strophe.Request) req - The request to remove.
             */
            _removeRequest: function _removeRequest(req) {
                Strophe.debug("removing request");
                var i;
                for (i = this._requests.length - 1; i >= 0; i--) {
                    if (req == this._requests[i]) {
                        this._requests.splice(i, 1);
                    }
                }
                // IE6 fails on setting to null, so set to empty function
                req.xhr.onreadystatechange = function () {};
                this._throttledRequestHandler();
            },

            /** PrivateFunction: _restartRequest
             *  _Private_ function to restart a request that is presumed dead.
             *
             *  Parameters:
             *    (Integer) i - The index of the request in the queue.
             */
            _restartRequest: function _restartRequest(i) {
                var req = this._requests[i];
                if (req.dead === null) {
                    req.dead = new Date();
                }

                this._processRequest(i);
            },

            /** PrivateFunction: _reqToData
             * _Private_ function to get a stanza out of a request.
             *
             * Tries to extract a stanza out of a Request Object.
             * When this fails the current connection will be disconnected.
             *
             *  Parameters:
             *    (Object) req - The Request.
             *
             *  Returns:
             *    The stanza that was passed.
             */
            _reqToData: function _reqToData(req) {
                try {
                    return req.getResponse();
                } catch (e) {
                    if (e != "parsererror") {
                        throw e;
                    }
                    this._conn.disconnect("strophe-parsererror");
                }
            },

            /** PrivateFunction: _sendTerminate
             *  _Private_ function to send initial disconnect sequence.
             *
             *  This is the first step in a graceful disconnect.  It sends
             *  the BOSH server a terminate body and includes an unavailable
             *  presence if authentication has completed.
             */
            _sendTerminate: function _sendTerminate(pres) {
                Strophe.info("_sendTerminate was called");
                var body = this._buildBody().attrs({ type: "terminate" });
                if (pres) {
                    body.cnode(pres.tree());
                }
                var req = new Strophe.Request(body.tree(), this._onRequestStateChange.bind(this, this._conn._dataRecv.bind(this._conn)), body.tree().getAttribute("rid"));
                this._requests.push(req);
                this._throttledRequestHandler();
            },

            /** PrivateFunction: _send
             *  _Private_ part of the Connection.send function for BOSH
             *
             * Just triggers the RequestHandler to send the messages that are in the queue
             */
            _send: function _send() {
                clearTimeout(this._conn._idleTimeout);
                this._throttledRequestHandler();

                // XXX: setTimeout should be called only with function expressions (23974bc1)
                this._conn._idleTimeout = setTimeout(function () {
                    this._onIdle();
                }.bind(this._conn), 100);
            },

            /** PrivateFunction: _sendRestart
             *
             *  Send an xmpp:restart stanza.
             */
            _sendRestart: function _sendRestart() {
                this._throttledRequestHandler();
                clearTimeout(this._conn._idleTimeout);
            },

            /** PrivateFunction: _throttledRequestHandler
             *  _Private_ function to throttle requests to the connection window.
             *
             *  This function makes sure we don't send requests so fast that the
             *  request ids overflow the connection window in the case that one
             *  request died.
             */
            _throttledRequestHandler: function _throttledRequestHandler() {
                if (!this._requests) {
                    Strophe.debug("_throttledRequestHandler called with " + "undefined requests");
                } else {
                    Strophe.debug("_throttledRequestHandler called with " + this._requests.length + " requests");
                }

                if (!this._requests || this._requests.length === 0) {
                    return;
                }

                if (this._requests.length > 0) {
                    this._processRequest(0);
                }

                if (this._requests.length > 1 && Math.abs(this._requests[0].rid - this._requests[1].rid) < this.window) {
                    this._processRequest(1);
                }
            }
        };
        return Strophe;
    });

    /*
        This program is distributed under the terms of the MIT license.
        Please see the LICENSE file for details.
          Copyright 2006-2008, OGG, LLC
    */

    /* jshint undef: true, unused: true:, noarg: true, latedef: true */
    /* global define, window, clearTimeout, WebSocket, DOMParser, Strophe, $build */

    (function (root, factory) {
        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_5__], __WEBPACK_LOCAL_MODULE_7__ = (function (core) {
                return factory(core.Strophe, core.$build);
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));
        } else {
            // Browser globals
            return factory(Strophe, $build);
        }
    })(this, function (Strophe, $build) {

        /** Class: Strophe.WebSocket
         *  _Private_ helper class that handles WebSocket Connections
         *
         *  The Strophe.WebSocket class is used internally by Strophe.Connection
         *  to encapsulate WebSocket sessions. It is not meant to be used from user's code.
         */

        /** File: websocket.js
         *  A JavaScript library to enable XMPP over Websocket in Strophejs.
         *
         *  This file implements XMPP over WebSockets for Strophejs.
         *  If a Connection is established with a Websocket url (ws://...)
         *  Strophe will use WebSockets.
         *  For more information on XMPP-over-WebSocket see RFC 7395:
         *  http://tools.ietf.org/html/rfc7395
         *
         *  WebSocket support implemented by Andreas Guth (andreas.guth@rwth-aachen.de)
         */

        /** PrivateConstructor: Strophe.Websocket
         *  Create and initialize a Strophe.WebSocket object.
         *  Currently only sets the connection Object.
         *
         *  Parameters:
         *    (Strophe.Connection) connection - The Strophe.Connection that will use WebSockets.
         *
         *  Returns:
         *    A new Strophe.WebSocket object.
         */
        Strophe.Websocket = function (connection) {
            this._conn = connection;
            this.strip = "wrapper";

            var service = connection.service;
            if (service.indexOf("ws:") !== 0 && service.indexOf("wss:") !== 0) {
                // If the service is not an absolute URL, assume it is a path and put the absolute
                // URL together from options, current URL and the path.
                var new_service = "";

                if (connection.options.protocol === "ws" && window.location.protocol !== "https:") {
                    new_service += "ws";
                } else {
                    new_service += "wss";
                }

                new_service += "://" + window.location.host;

                if (service.indexOf("/") !== 0) {
                    new_service += window.location.pathname + service;
                } else {
                    new_service += service;
                }

                connection.service = new_service;
            }
        };

        Strophe.Websocket.prototype = {
            /** PrivateFunction: _buildStream
             *  _Private_ helper function to generate the <stream> start tag for WebSockets
             *
             *  Returns:
             *    A Strophe.Builder with a <stream> element.
             */
            _buildStream: function _buildStream() {
                return $build("open", {
                    "xmlns": Strophe.NS.FRAMING,
                    "to": this._conn.domain,
                    "version": '1.0'
                });
            },

            /** PrivateFunction: _check_streamerror
             * _Private_ checks a message for stream:error
             *
             *  Parameters:
             *    (Strophe.Request) bodyWrap - The received stanza.
             *    connectstatus - The ConnectStatus that will be set on error.
             *  Returns:
             *     true if there was a streamerror, false otherwise.
             */
            _check_streamerror: function _check_streamerror(bodyWrap, connectstatus) {
                var errors;
                if (bodyWrap.getElementsByTagNameNS) {
                    errors = bodyWrap.getElementsByTagNameNS(Strophe.NS.STREAM, "error");
                } else {
                    errors = bodyWrap.getElementsByTagName("stream:error");
                }
                if (errors.length === 0) {
                    return false;
                }
                var error = errors[0];

                var condition = "";
                var text = "";

                var ns = "urn:ietf:params:xml:ns:xmpp-streams";
                for (var i = 0; i < error.childNodes.length; i++) {
                    var e = error.childNodes[i];
                    if (e.getAttribute("xmlns") !== ns) {
                        break;
                    }if (e.nodeName === "text") {
                        text = e.textContent;
                    } else {
                        condition = e.nodeName;
                    }
                }

                var errorString = "WebSocket stream error: ";

                if (condition) {
                    errorString += condition;
                } else {
                    errorString += "unknown";
                }

                if (text) {
                    errorString += " - " + condition;
                }

                Strophe.error(errorString);

                // close the connection on stream_error
                this._conn._changeConnectStatus(connectstatus, condition);
                this._conn._doDisconnect();
                return true;
            },

            /** PrivateFunction: _reset
             *  Reset the connection.
             *
             *  This function is called by the reset function of the Strophe Connection.
             *  Is not needed by WebSockets.
             */
            _reset: function _reset() {
                return;
            },

            /** PrivateFunction: _connect
             *  _Private_ function called by Strophe.Connection.connect
             *
             *  Creates a WebSocket for a connection and assigns Callbacks to it.
             *  Does nothing if there already is a WebSocket.
             */
            _connect: function _connect() {
                // Ensure that there is no open WebSocket from a previous Connection.
                this._closeSocket();

                // Create the new WobSocket
                this.socket = new WebSocket(this._conn.service, "xmpp");
                this.socket.onopen = this._onOpen.bind(this);
                this.socket.onerror = this._onError.bind(this);
                this.socket.onclose = this._onClose.bind(this);
                this.socket.onmessage = this._connect_cb_wrapper.bind(this);
            },

            /** PrivateFunction: _connect_cb
             *  _Private_ function called by Strophe.Connection._connect_cb
             *
             * checks for stream:error
             *
             *  Parameters:
             *    (Strophe.Request) bodyWrap - The received stanza.
             */
            _connect_cb: function _connect_cb(bodyWrap) {
                var error = this._check_streamerror(bodyWrap, Strophe.Status.CONNFAIL);
                if (error) {
                    return Strophe.Status.CONNFAIL;
                }
            },

            /** PrivateFunction: _handleStreamStart
             * _Private_ function that checks the opening <open /> tag for errors.
             *
             * Disconnects if there is an error and returns false, true otherwise.
             *
             *  Parameters:
             *    (Node) message - Stanza containing the <open /> tag.
             */
            _handleStreamStart: function _handleStreamStart(message) {
                var error = false;

                // Check for errors in the <open /> tag
                var ns = message.getAttribute("xmlns");
                if (typeof ns !== "string") {
                    error = "Missing xmlns in <open />";
                } else if (ns !== Strophe.NS.FRAMING) {
                    error = "Wrong xmlns in <open />: " + ns;
                }

                var ver = message.getAttribute("version");
                if (typeof ver !== "string") {
                    error = "Missing version in <open />";
                } else if (ver !== "1.0") {
                    error = "Wrong version in <open />: " + ver;
                }

                if (error) {
                    this._conn._changeConnectStatus(Strophe.Status.CONNFAIL, error);
                    this._conn._doDisconnect();
                    return false;
                }

                return true;
            },

            /** PrivateFunction: _connect_cb_wrapper
             * _Private_ function that handles the first connection messages.
             *
             * On receiving an opening stream tag this callback replaces itself with the real
             * message handler. On receiving a stream error the connection is terminated.
             */
            _connect_cb_wrapper: function _connect_cb_wrapper(message) {
                if (message.data.indexOf("<open ") === 0 || message.data.indexOf("<?xml") === 0) {
                    // Strip the XML Declaration, if there is one
                    var data = message.data.replace(/^(<\?.*?\?>\s*)*/, "");
                    if (data === '') return;

                    var streamStart = new DOMParser().parseFromString(data, "text/xml").documentElement;
                    this._conn.xmlInput(streamStart);
                    this._conn.rawInput(message.data);

                    //_handleStreamSteart will check for XML errors and disconnect on error
                    if (this._handleStreamStart(streamStart)) {
                        //_connect_cb will check for stream:error and disconnect on error
                        this._connect_cb(streamStart);
                    }
                } else if (message.data.indexOf("<close ") === 0) {
                    //'<close xmlns="urn:ietf:params:xml:ns:xmpp-framing />') {
                    this._conn.rawInput(message.data);
                    this._conn.xmlInput(message);
                    var see_uri = message.getAttribute("see-other-uri");
                    if (see_uri) {
                        this._conn._changeConnectStatus(Strophe.Status.REDIRECT, "Received see-other-uri, resetting connection");
                        this._conn.reset();
                        this._conn.service = see_uri;
                        this._connect();
                    } else {
                        this._conn._changeConnectStatus(Strophe.Status.CONNFAIL, "Received closing stream");
                        this._conn._doDisconnect();
                    }
                } else {
                    var string = this._streamWrap(message.data);
                    var elem = new DOMParser().parseFromString(string, "text/xml").documentElement;
                    this.socket.onmessage = this._onMessage.bind(this);
                    this._conn._connect_cb(elem, null, message.data);
                }
            },

            /** PrivateFunction: _disconnect
             *  _Private_ function called by Strophe.Connection.disconnect
             *
             *  Disconnects and sends a last stanza if one is given
             *
             *  Parameters:
             *    (Request) pres - This stanza will be sent before disconnecting.
             */
            _disconnect: function _disconnect(pres) {
                if (this.socket && this.socket.readyState !== WebSocket.CLOSED) {
                    if (pres) {
                        this._conn.send(pres);
                    }
                    var close = $build("close", { "xmlns": Strophe.NS.FRAMING });
                    this._conn.xmlOutput(close);
                    var closeString = Strophe.serialize(close);
                    this._conn.rawOutput(closeString);
                    try {
                        this.socket.send(closeString);
                    } catch (e) {
                        Strophe.info("Couldn't send <close /> tag.");
                    }
                }
                this._conn._doDisconnect();
            },

            /** PrivateFunction: _doDisconnect
             *  _Private_ function to disconnect.
             *
             *  Just closes the Socket for WebSockets
             */
            _doDisconnect: function _doDisconnect() {
                Strophe.info("WebSockets _doDisconnect was called");
                this._closeSocket();
            },

            /** PrivateFunction _streamWrap
             *  _Private_ helper function to wrap a stanza in a <stream> tag.
             *  This is used so Strophe can process stanzas from WebSockets like BOSH
             */
            _streamWrap: function _streamWrap(stanza) {
                return "<wrapper>" + stanza + '</wrapper>';
            },

            /** PrivateFunction: _closeSocket
             *  _Private_ function to close the WebSocket.
             *
             *  Closes the socket if it is still open and deletes it
             */
            _closeSocket: function _closeSocket() {
                if (this.socket) {
                    try {
                        this.socket.close();
                    } catch (e) {}
                }
                this.socket = null;
            },

            /** PrivateFunction: _emptyQueue
             * _Private_ function to check if the message queue is empty.
             *
             *  Returns:
             *    True, because WebSocket messages are send immediately after queueing.
             */
            _emptyQueue: function _emptyQueue() {
                return true;
            },

            /** PrivateFunction: _onClose
             * _Private_ function to handle websockets closing.
             *
             * Nothing to do here for WebSockets
             */
            _onClose: function _onClose() {
                if (this._conn.connected && !this._conn.disconnecting) {
                    Strophe.error("Websocket closed unexpectedly");
                    this._conn._doDisconnect();
                } else {
                    Strophe.info("Websocket closed");
                }
            },

            /** PrivateFunction: _no_auth_received
             *
             * Called on stream start/restart when no stream:features
             * has been received.
             */
            _no_auth_received: function _no_auth_received(_callback) {
                Strophe.error("Server did not send any auth methods");
                this._conn._changeConnectStatus(Strophe.Status.CONNFAIL, "Server did not send any auth methods");
                if (_callback) {
                    _callback = _callback.bind(this._conn);
                    _callback();
                }
                this._conn._doDisconnect();
            },

            /** PrivateFunction: _onDisconnectTimeout
             *  _Private_ timeout handler for handling non-graceful disconnection.
             *
             *  This does nothing for WebSockets
             */
            _onDisconnectTimeout: function _onDisconnectTimeout() {},

            /** PrivateFunction: _abortAllRequests
             *  _Private_ helper function that makes sure all pending requests are aborted.
             */
            _abortAllRequests: function _abortAllRequests() {},

            /** PrivateFunction: _onError
             * _Private_ function to handle websockets errors.
             *
             * Parameters:
             * (Object) error - The websocket error.
             */
            _onError: function _onError(error) {
                Strophe.error("Websocket error " + error);
                this._conn._changeConnectStatus(Strophe.Status.CONNFAIL, "The WebSocket connection could not be established or was disconnected.");
                this._disconnect();
            },

            /** PrivateFunction: _onIdle
             *  _Private_ function called by Strophe.Connection._onIdle
             *
             *  sends all queued stanzas
             */
            _onIdle: function _onIdle() {
                var data = this._conn._data;
                if (data.length > 0 && !this._conn.paused) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i] !== null) {
                            var stanza, rawStanza;
                            if (data[i] === "restart") {
                                stanza = this._buildStream().tree();
                            } else {
                                stanza = data[i];
                            }
                            rawStanza = Strophe.serialize(stanza);
                            this._conn.xmlOutput(stanza);
                            this._conn.rawOutput(rawStanza);
                            this.socket.send(rawStanza);
                        }
                    }
                    this._conn._data = [];
                }
            },

            /** PrivateFunction: _onMessage
             * _Private_ function to handle websockets messages.
             *
             * This function parses each of the messages as if they are full documents.
             * [TODO : We may actually want to use a SAX Push parser].
             *
             * Since all XMPP traffic starts with
             *  <stream:stream version='1.0'
             *                 xml:lang='en'
             *                 xmlns='jabber:client'
             *                 xmlns:stream='http://etherx.jabber.org/streams'
             *                 id='3697395463'
             *                 from='SERVER'>
             *
             * The first stanza will always fail to be parsed.
             *
             * Additionally, the seconds stanza will always be <stream:features> with
             * the stream NS defined in the previous stanza, so we need to 'force'
             * the inclusion of the NS in this stanza.
             *
             * Parameters:
             * (string) message - The websocket message.
             */
            _onMessage: function _onMessage(message) {
                var elem, data;
                // check for closing stream
                var close = '<close xmlns="urn:ietf:params:xml:ns:xmpp-framing" />';
                if (message.data === close) {
                    this._conn.rawInput(close);
                    this._conn.xmlInput(message);
                    if (!this._conn.disconnecting) {
                        this._conn._doDisconnect();
                    }
                    return;
                } else if (message.data.search("<open ") === 0) {
                    // This handles stream restarts
                    elem = new DOMParser().parseFromString(message.data, "text/xml").documentElement;
                    if (!this._handleStreamStart(elem)) {
                        return;
                    }
                } else {
                    data = this._streamWrap(message.data);
                    elem = new DOMParser().parseFromString(data, "text/xml").documentElement;
                }

                if (this._check_streamerror(elem, Strophe.Status.ERROR)) {
                    return;
                }

                //handle unavailable presence stanza before disconnecting
                if (this._conn.disconnecting && elem.firstChild.nodeName === "presence" && elem.firstChild.getAttribute("type") === "unavailable") {
                    this._conn.xmlInput(elem);
                    this._conn.rawInput(Strophe.serialize(elem));
                    // if we are already disconnecting we will ignore the unavailable stanza and
                    // wait for the </stream:stream> tag before we close the connection
                    return;
                }
                this._conn._dataRecv(elem, message.data);
            },

            /** PrivateFunction: _onOpen
             * _Private_ function to handle websockets connection setup.
             *
             * The opening stream tag is sent here.
             */
            _onOpen: function _onOpen() {
                Strophe.info("Websocket open");
                var start = this._buildStream();
                this._conn.xmlOutput(start.tree());

                var startString = Strophe.serialize(start);
                this._conn.rawOutput(startString);
                this.socket.send(startString);
            },

            /** PrivateFunction: _reqToData
             * _Private_ function to get a stanza out of a request.
             *
             * WebSockets don't use requests, so the passed argument is just returned.
             *
             *  Parameters:
             *    (Object) stanza - The stanza.
             *
             *  Returns:
             *    The stanza that was passed.
             */
            _reqToData: function _reqToData(stanza) {
                return stanza;
            },

            /** PrivateFunction: _send
             *  _Private_ part of the Connection.send function for WebSocket
             *
             * Just flushes the messages that are in the queue
             */
            _send: function _send() {
                this._conn.flush();
            },

            /** PrivateFunction: _sendRestart
             *
             *  Send an xmpp:restart stanza.
             */
            _sendRestart: function _sendRestart() {
                clearTimeout(this._conn._idleTimeout);
                this._conn._onIdle.bind(this._conn)();
            }
        };
        return Strophe;
    });

    (function (root) {
        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_5__, __WEBPACK_LOCAL_MODULE_6__, __WEBPACK_LOCAL_MODULE_7__], __WEBPACK_LOCAL_MODULE_8__ = (function (wrapper) {
                return wrapper;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));
        }
    })(this);

    /* jshint ignore:start */
    if (callback) {
        if (true) {
            //For backwards compatability
            var n_callback = callback;
            if (typeof requirejs === 'function') {
                requirejs(["strophe"], function (o) {
                    n_callback(o.Strophe, o.$build, o.$msg, o.$iq, o.$pres);
                });
            } else {
                var _S_ = __WEBPACK_LOCAL_MODULE_8__;
                n_callback(_S_.Strophe, _S_.$build, _S_.$msg, _S_.$iq, _S_.$pres);
                // require(["strophe"], function(o){
                //     n_callback(o.Strophe,o.$build,o.$msg,o.$iq,o.$pres);
                // });
            }
        } else {
            return callback(Strophe, $build, $msg, $iq, $pres);
        }
    }
})(function (Strophe, build, msg, iq, pres) {
    var _g = exports || window;
    _g.Strophe = Strophe;
    _g.$build = build;
    _g.$msg = msg;
    _g.$iq = iq;
    _g.$pres = pres;
});
/* jshint ignore:end */

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory();
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define([], factory);
	}
	else {
		// Global (browser)
		root.CryptoJS = factory();
	}
}(this, function () {

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined) {
	    /*
	     * Local polyfil of Object.create
	     */
	    var create = Object.create || (function () {
	        function F() {};

	        return function (obj) {
	            var subtype;

	            F.prototype = obj;

	            subtype = new F();

	            F.prototype = null;

	            return subtype;
	        };
	    }())

	    /**
	     * CryptoJS namespace.
	     */
	    var C = {};

	    /**
	     * Library namespace.
	     */
	    var C_lib = C.lib = {};

	    /**
	     * Base object for prototypal inheritance.
	     */
	    var Base = C_lib.Base = (function () {


	        return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function (overrides) {
	                // Spawn
	                var subtype = create(this);

	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }

	                // Create default initializer
	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }

	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;

	                // Reference supertype
	                subtype.$super = this;

	                return subtype;
	            },

	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function () {
	                var instance = this.extend();
	                instance.init.apply(instance, arguments);

	                return instance;
	            },

	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function () {
	            },

	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }

	                // IE won't copy toString using the loop above
	                if (properties.hasOwnProperty('toString')) {
	                    this.toString = properties.toString;
	                }
	            },

	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());

	    /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var WordArray = C_lib.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 4;
	            }
	        },

	        /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
	        toString: function (encoder) {
	            return (encoder || Hex).stringify(this);
	        },

	        /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;

	            // Clamp excess bits
	            this.clamp();

	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else {
	                // Copy one word at a time
	                for (var i = 0; i < thatSigBytes; i += 4) {
	                    thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
	                }
	            }
	            this.sigBytes += thatSigBytes;

	            // Chainable
	            return this;
	        },

	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;

	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
	            words.length = Math.ceil(sigBytes / 4);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);

	            return clone;
	        },

	        /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
	        random: function (nBytes) {
	            var words = [];

	            var r = (function (m_w) {
	                var m_w = m_w;
	                var m_z = 0x3ade68b1;
	                var mask = 0xffffffff;

	                return function () {
	                    m_z = (0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10)) & mask;
	                    m_w = (0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10)) & mask;
	                    var result = ((m_z << 0x10) + m_w) & mask;
	                    result /= 0x100000000;
	                    result += 0.5;
	                    return result * (Math.random() > .5 ? 1 : -1);
	                }
	            });

	            for (var i = 0, rcache; i < nBytes; i += 4) {
	                var _r = r((rcache || Math.random()) * 0x100000000);

	                rcache = _r() * 0x3ade67b7;
	                words.push((_r() * 0x100000000) | 0);
	            }

	            return new WordArray.init(words, nBytes);
	        }
	    });

	    /**
	     * Encoder namespace.
	     */
	    var C_enc = C.enc = {};

	    /**
	     * Hex encoding strategy.
	     */
	    var Hex = C_enc.Hex = {
	        /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                hexChars.push((bite >>> 4).toString(16));
	                hexChars.push((bite & 0x0f).toString(16));
	            }

	            return hexChars.join('');
	        },

	        /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
	            }

	            return new WordArray.init(words, hexStrLength / 2);
	        }
	    };

	    /**
	     * Latin1 encoding strategy.
	     */
	    var Latin1 = C_enc.Latin1 = {
	        /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                latin1Chars.push(String.fromCharCode(bite));
	            }

	            return latin1Chars.join('');
	        },

	        /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
	            }

	            return new WordArray.init(words, latin1StrLength);
	        }
	    };

	    /**
	     * UTF-8 encoding strategy.
	     */
	    var Utf8 = C_enc.Utf8 = {
	        /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            try {
	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	                throw new Error('Malformed UTF-8 data');
	            }
	        },

	        /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
	        parse: function (utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	        }
	    };

	    /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	        /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
	        reset: function () {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	        },

	        /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }

	            // Append
	            this._data.concat(data);
	            this._nDataBytes += data.sigBytes;
	        },

	        /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
	        _process: function (doFlush) {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;

	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }

	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;

	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }

	                // Remove processed words
	                var processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }

	            // Return processed words
	            return new WordArray.init(processedWords, nBytesReady);
	        },

	        /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();

	            return clone;
	        },

	        _minBufferSize: 0
	    });

	    /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */
	    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         */
	        cfg: Base.extend(),

	        /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-hasher logic
	            this._doReset();
	        },

	        /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);

	            // Update the hash
	            this._process();

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }

	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();

	            return hash;
	        },

	        blockSize: 512/32,

	        /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
	        _createHelper: function (hasher) {
	            return function (message, cfg) {
	                return new hasher.init(cfg).finalize(message);
	            };
	        },

	        /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
	        _createHmacHelper: function (hasher) {
	            return function (message, key) {
	                return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	        }
	    });

	    /**
	     * Algorithm namespace.
	     */
	    var C_algo = C.algo = {};

	    return C;
	}(Math));


	return CryptoJS;

}));

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 *  Based on Ping Strophejs plugins (https://github.com/metajack/strophejs-plugins/tree/master/ping) to change this ack plugin
 *  This plugin is distributed under the terms of the MIT licence.
 * Created by zhangym on 1/9/2017.
 *  Copyright (c) zhangym, 2017
 */
(function (root, factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function (Strophe) {
            factory(Strophe.Strophe, Strophe.$build, Strophe.$iq, Strophe.$msg, Strophe.$pres);
            return Strophe;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        // Browser globals
        factory(root.Strophe, root.$build, root.$iq, root.$msg, root.$pres);
    }
})(this, function (Strophe, $build, $iq, $msg, $pres) {
    Strophe.addConnectionPlugin('ackmessage', {
        _c: null,
        ackcb: null,
        sessioncb: null,
        onEcho: null,
        // called by the Strophe.Connection constructor
        init: function init(conn) {
            this._c = conn;
            Strophe.addNamespace('ZOOMEXT', 'zoom:iq:ext');
        },

        statusChanged: function statusChanged(status, condition) {
            if (status === Strophe.Status.CONNECTED || status === Strophe.Status.ATTACHED) {
                this._c.addHandler(this._onReceivIQ.bind(this), null, 'iq', 'result');
            }
        },

        _onReceivIQ: function _onReceivIQ(iq) {
            var iaatts = iq.attributes;
            var id = iaatts.getNamedItem('id') != null ? iaatts.getNamedItem('id').value : '';
            Strophe.info("ack prcess id " + id);
            try {
                var zooms = iq.getElementsByTagName('zoom');
                if (zooms.length == 0) {
                    return true;
                } else {
                    var sessions = [];
                    var zoom = zooms[0];
                    var atts = zoom.attributes;
                    if (atts.getNamedItem('xmlns') == null) {
                        return true;
                    }
                    var xmls = atts.getNamedItem('xmlns').value;
                    if (xmls == Strophe.NS.ZOOMEXT) {
                        var type = atts.getNamedItem('type').value;
                        if (type === 'offline') {
                            if (typeof this.sessioncb === 'function') {
                                var nodes = zoom.getElementsByTagName('acktime');
                                for (var index = 0; index < nodes.length; index++) {
                                    var node = nodes[index];
                                    var attsnodes = node.attributes;
                                    var p = {};
                                    p.session = attsnodes.getNamedItem('session').value;
                                    p.ack = attsnodes.getNamedItem('ack').value;
                                    p.read = attsnodes.getNamedItem('read').value;
                                    sessions.push(p);
                                }
                                this.sessioncb(sessions);
                                return true;
                            }
                        } else if (type === 'echo') {
                            this.onEcho(id);
                        }
                    }
                }
            } catch (e) {
                Strophe.error("error on parse " + e);
                return true;
            }
            if (this.ackcb) this.ackcb(id);
            return true;
        },
        /**
         * Function: ack
         *
         * Parameters:
         * (String) t - The time of long
         * (String) from - The ack from not used now.
         * (Function) success - Callback function on success
         * (Function) error - Callback function on error
         * (Integer) timeout - Timeout in milliseconds
         */
        ack: function ack(t, from, success, error, timeout) {
            var uuid = this._c.getUniqueId('ack');
            try {
                var iq = $iq({
                    id: uuid,
                    type: 'get',
                    xmlns: Strophe.NS.CLIENT
                }).c('zoom', {
                    xmlns: 'zoom:iq:ext',
                    action: 'ack_msg',
                    time: t,
                    from: Strophe.getNodeFromJid(from),
                    sender: from
                });
                this._c.sendIQ(iq, success, error, timeout);
            } catch (e) {
                Strophe.error(e);
            }
            return uuid;
        },
        read: function read(_read) {
            var uuid = this._c.getUniqueId('read');
            var iq = $iq({
                id: uuid,
                type: 'get',
                xmlns: Strophe.NS.CLIENT
            });
            if (_read.action == null) {
                iq.c('zoom', {
                    xmlns: 'zoom:iq:read',
                    from: Strophe.getNodeFromJid(_read.from),
                    group: _read.group
                });
            } else {
                iq.c('zoom', {
                    xmlns: 'zoom:iq:read',
                    from: Strophe.getNodeFromJid(_read.from),
                    action: _read.action,
                    group: _read.group
                });
            }
            if (_read.items != null) {
                for (var i = 0; i < _read.items.length; i++) {
                    iq.c('item', { time: _read.items[i].time }).up();
                }
            }
            this._c.sendIQ(iq);
        },
        /**
         * Function: addPingHandler
         *
         * Parameters:
         * (Function) handler - Ping handler
         *
         * Returns:
         * A reference to the handler that can be used to remove it.
         */
        addAckHandler: function addAckHandler(handler) {
            this.ackcb = handler;
        },
        addSessionHandel: function addSessionHandel(handler) {
            this.sessioncb = handler;
        },
        addEchoHandel: function addEchoHandel(handler) {
            this.onEcho = handler;
        }
    });
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function (Strophe) {
            factory(Strophe.Strophe, Strophe.$build, Strophe.$iq, Strophe.$msg, Strophe.$pres);
            return Strophe;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        // Browser globals
        factory(root.Strophe, root.$build, root.$iq, root.$msg, root.$pres);
    }
})(this, function (Strophe, $build, $iq, $msg, $pres) {
    Strophe.addConnectionPlugin('iqpresence', {
        _c: null,
        _vardcb: null,
        // called by the Strophe.Connection constructor
        init: function init(conn) {
            this._c = conn;
            Strophe.addNamespace('IQPRESENCE', "zoom:iq:presence");
        },

        statusChanged: function statusChanged(status, condition) {
            if (status === Strophe.Status.CONNECTED || status === Strophe.Status.ATTACHED) {
                this._c.addHandler(this._onReceivIQ.bind(this), null, 'iq', 'result');
            }
        },

        _onReceivIQ: function _onReceivIQ(iq) {
            var zoom = iq.getElementsByTagName('zoom');
            if (zoom.length <= 0) {
                return true;
            }
            zoom = zoom[0];
            var type = zoom.attributes.getNamedItem('type') != null ? zoom.attributes.getNamedItem('type').value : '';
            if (type === 'presence') {
                Strophe.info('iqpresence process');
                Strophe.info(iq);
                var pre = [];
                var items = zoom.getElementsByTagName('item');
                try {
                    for (var index = 0; index < items.length; index++) {
                        var p = {};
                        var item = items[index];
                        p.jid = item.attributes.getNamedItem('jid').value;
                        p.mobile = item.attributes.getNamedItem('mobile').value;
                        var resnodes = item.getElementsByTagName('res');
                        var reses = [];
                        for (var i = 0; i < resnodes.length; i++) {
                            var res = {};
                            var resnode = resnodes[i];
                            res.resource = resnode.attributes.getNamedItem('resource') != null ? resnode.attributes.getNamedItem('resource').value : '';
                            res.show = resnode.attributes.getNamedItem('show').value;
                            var zcapNode = resnode.getElementsByTagName('zcap');
                            if (zcapNode.length > 0) {
                                zcapNode = zcapNode[0];
                                res.zcap = zcapNode.textContent;
                            }
                            var cnode = resnode.getElementsByTagName('c');
                            if (cnode.length > 0) {
                                var c = {};
                                cnode = cnode[0];
                                c.hash = cnode.attributes.getNamedItem('hash') != null ? cnode.attributes.getNamedItem('hash').value : '';
                                c.ver = cnode.attributes.getNamedItem('ver') != null ? cnode.attributes.getNamedItem('ver').value : '';
                                res.c = c;
                            }
                            reses.push(res);
                        }
                        p.res = reses;
                        pre.push(p);
                    }

                    if (typeof this._vardcb === 'function') {
                        this._vardcb(pre);
                    }
                } catch (e) {
                    Strophe.error(e);
                }
            }
            return true;
        },

        queryPresence: function queryPresence() {
            var uuid = this._c.getUniqueId('iqpresence');
            var iq = $iq({
                id: uuid,
                type: 'get',
                from: Strophe.getBareJidFromJid(this._c.jid),
                xmlns: Strophe.NS.CLIENT
            }).c('query', { xmlns: Strophe.NS.IQPRESENCE, chunk: '1', details: '1' });
            this._c.sendIQ(iq);
        },
        addIQPresenceCB: function addIQPresenceCB(handle) {
            this._vardcb = handle;
        }
    });
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//    XMPP plugins for Strophe v1.0.5

// Plugin to deal with basic instant messaging

(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function (Strophe) {
      factory(Strophe.Strophe, Strophe.$build, Strophe.$iq, Strophe.$msg, Strophe.$pres);
      return Strophe;
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    // Browser globals
    factory(root.Strophe, root.$build, root.$iq, root.$msg, root.$pres);
  }
})(this, function (Strophe, $build, $iq, $msg, $pres) {

  var catchPool = function catchPool(message) {
    var zmpoll = message.zmpoll;
    if (zmpoll) {
      var poll = {
        action: zmpoll._action || '',
        data: zmpoll.data || zmpoll._id || ''
      };
      return poll;
    } else {
      var prefixWebinar = 'webinar_';
      if (message.zmext && message.zmext._action && message.zmext._action.indexOf(prefixWebinar) > -1) {
        var action = message.zmext._action.replace(prefixWebinar, '');
        var poll = { action: action, data: [] };
        if (action.indexOf('putdownhands') > -1) {
          var jids = [];
          if (Object.prototype.toString.call(message.zmext.jid) === '[object Array]') {
            jids = message.zmext.jid;
          } else {
            jids.push(message.zmext.jid);
          }
          poll.data = jids;
        }
        return poll;
      }
      return null;
    }
  };

  Strophe.addConnectionPlugin('Messaging', {
    _connection: null,
    _composingTimeout: 3000,
    _composing: {},
    _msgcb: null,
    _poolcb: null,
    init: function init(conn) {
      this._connection = conn;
      Strophe.addNamespace('XHTML_IM', 'http://jabber.org/protocol/xhtml-im');
      Strophe.addNamespace('XHTML', 'http://www.w3.org/1999/xhtml');
      Strophe.addNamespace('CHATSTATES', 'http://jabber.org/protocol/chatstates');
      this._parseMsg.bind(this);
    },

    // Register message notifications when connected
    statusChanged: function statusChanged(status, condition) {
      if (status === Strophe.Status.CONNECTED || status === Strophe.Status.ATTACHED) {
        this._connection.addHandler(this._onReceiveChatMessage.bind(this), null, 'message', 'chat');
        this._connection.addHandler(this._onReceiveGroupChatMessage.bind(this), null, 'message', 'groupchat');
      }
    },

    addMessageCB: function addMessageCB(cb) {
      this._msgcb = cb;
    },
    addPoolCB: function addPoolCB(cb) {
      this._poolcb = cb;
    },
    _parseMsg: function _parseMsg(msg) {
      var message = Strophe.xml2json(msg);
      return message;
      // var remsg = {};
      // //remsg.from = msg.children('from');
      // var msgatts = msg.attributes;
      // remsg.from = msgatts.getNamedItem('from').value;
      // remsg.type = msgatts.getNamedItem('type').value;
      // if (msgatts.getNamedItem('id')) {
      //   remsg.id = msgatts.getNamedItem('id').value;
      // }
      // remsg.to = msgatts.getNamedItem('to').value;
      // var delay = msg.getElementsByTagName('delay');
      // if (delay != null && delay.length > 0) {
      //   remsg.delay = delay[0].attributes.getNamedItem('stamp').value;
      // }
      // var composing = msg.getElementsByTagName('composing');
      // if (composing != null && composing.length > 0) {
      //   remsg.composing = true;
      // }
      // var active = msg.getElementsByTagName('active');
      // if (active != null && active.length > 0) {
      //   remsg.active = true;
      // }
      // var gone = msg.getElementsByTagName('gone');
      // if (gone != null && gone.length > 0) {
      //   remsg.gone = true;
      // }
      // var inactive = msg.getElementsByTagName('inactive');
      // if (inactive != null && inactive.length > 0) {
      //   remsg.inactive = true;
      // }
      // var body = msg.getElementsByTagName('body');
      // if (body != null && body.length > 0) {
      //   remsg.body = body[0].textContent;
      // }
      // var thread = msg.getElementsByTagName('thread');
      // if (thread != null && thread.length > 0) {
      //   remsg.thread = thread[0].textContent;
      // }
      // var zext_subsync = msg.getElementsByTagName('zext_subsync');
      // if (zext_subsync != null && zext_subsync.length > 0) {
      //   zext_subsync = zext_subsync[0];
      //   let jsonsubsync = {};
      //   remsg.zext_subsync = jsonsubsync;
      //   let subsyncatts = zext_subsync.attributes;
      //   jsonsubsync.action = subsyncatts.getNamedItem('action') != null ? subsyncatts.getNamedItem('action').value : '';
      //   jsonsubsync.peerjid = subsyncatts.getNamedItem('peerjid') != null ? subsyncatts.getNamedItem('peerjid').value : '';
      // }
      // var delay = msg.getElementsByTagName('delay');
      // if (delay != null && delay.length > 0) {
      //   delay = delay[0];
      //   let jsondelay = {};
      //   remsg.delay = jsondelay;
      //   let subdelayatts = delay.attributes;
      //   jsondelay.stamp = subdelayatts.getNamedItem('stamp') != null ? subdelayatts.getNamedItem('stamp').value : '';
      // }
      // var zmext = msg.getElementsByTagName('zmext');
      // if (zmext != null && zmext.length > 0) {
      //   zmext = zmext[0];
      //   var jsonzmext = {};
      //   remsg.zmext = jsonzmext;
      //   var zmextatts = zmext.attributes;
      //   jsonzmext.t = zmextatts.getNamedItem('t') != null ? zmextatts.getNamedItem('t').value : '';
      //   jsonzmext.prev = zmextatts.getNamedItem('prev') != null ? zmextatts.getNamedItem('prev').value : '';
      //   if (zmextatts.getNamedItem('action') != null) {
      //     jsonzmext.action = zmextatts.getNamedItem('action').value;
      //   }
      //   var from = zmext.getElementsByTagName('from');
      //   if (from != null && from.length > 0) {
      //     from = from[0];
      //     jsonzmext.from = {};
      //     jsonzmext.from.n = from.attributes.getNamedItem('n') != null ? from.attributes.getNamedItem('n').value : '';
      //     jsonzmext.from.e = from.attributes.getNamedItem('e') != null ? from.attributes.getNamedItem('e').value : '';
      //     jsonzmext.from.res = from.attributes.getNamedItem('res') != null ? from.attributes.getNamedItem('res').value : '';
      //   }
      //   var ext = zmext.getElementsByTagName('ext');
      //   var obj = zmext.getElementsByTagName('obj');

      //   if (obj != null && obj.length > 0) {
      //     obj = obj[0];
      //     jsonzmext.obj = {};
      //     jsonzmext.obj.k = obj.attributes.getNamedItem('k') != null ? obj.attributes.getNamedItem('k').value : '';
      //     jsonzmext.obj.id = obj.attributes.getNamedItem('id') != null ? obj.attributes.getNamedItem('id').value : '';
      //     jsonzmext.obj.s = obj.attributes.getNamedItem('s') != null ? obj.attributes.getNamedItem('s').value : '';
      //     jsonzmext.obj.nm = obj.attributes.getNamedItem('nm') != null ? obj.attributes.getNamedItem('nm').value : '';
      //     jsonzmext.obj.f = obj.attributes.getNamedItem('f') != null ? obj.attributes.getNamedItem('f').value : '';
      //   }
      //   if (ext != null && ext.length > 0) {
      //     ext = ext[0];
      //     var enode = ext.getElementsByTagName('emoji');
      //     if (enode != null && enode.length > 0) {
      //       enode = enode[0];
      //       var items = enode.getElementsByTagName('item');
      //       var emojis = [];
      //       for (var index = 0; index < items.length; index++) {
      //         var em = {};
      //         var item = items[index];
      //         var atts = item.attributes;
      //         em.start = atts.getNamedItem('start') != null ? atts.getNamedItem('start').value : 0;
      //         em.end = atts.getNamedItem('end') != null ? atts.getNamedItem('end').value : 0;
      //         em.type = atts.getNamedItem('type') != null ? atts.getNamedItem('type').value : 0;
      //         em.index = atts.getNamedItem('index') != null ? atts.getNamedItem('index').value : 0;
      //         em.shortcut = atts.getNamedItem('shortcut') != null ? atts.getNamedItem('shortcut').value : '';
      //         em.repstr = atts.getNamedItem('repstr') != null ? atts.getNamedItem('repstr').value : '';
      //         emojis.push(em);
      //       }
      //       jsonzmext.emoji = emojis;
      //     }
      //   }

      //   var operator = zmext.getElementsByTagName('operator');
      //   if (operator != null && operator.length > 0) {
      //     operator = operator[0];
      //     jsonzmext.operator = operator.textContent;
      //   }
      //   var visible = zmext.getElementsByTagName('visible');
      //   if (visible != null && visible.length > 0) {
      //     visible = visible[0];
      //     jsonzmext.visible = visible.textContent;
      //   }
      //   var room = zmext.getElementsByTagName('room');
      //   if (room != null && room.length > 0) {
      //     jsonzmext.room = {};
      //     room = room[0];
      //     var roomatts = room.attributes;
      //     jsonzmext.room.jid = roomatts.getNamedItem('jid') != null ? roomatts.getNamedItem('jid').value : '';
      //     jsonzmext.room.natural = roomatts.getNamedItem('natrual') != null ? roomatts.getNamedItem('natrual').value : '';
      //     jsonzmext.room.subject = roomatts.getNamedItem('subject') != null ? roomatts.getNamedItem('subject').value : '';
      //     jsonzmext.room.e2e = roomatts.getNamedItem('e2e') != null ? roomatts.getNamedItem('e2e').value : '';
      //     jsonzmext.room.option = roomatts.getNamedItem('option') != null ? roomatts.getNamedItem('option').value : '';
      //     jsonzmext.room.diff = roomatts.getNamedItem('diff') != null ? roomatts.getNamedItem('diff').value : '';
      //   }
      //   var buddylist = zmext.getElementsByTagName('buddylist');
      //   if (buddylist != null && buddylist.length > 0) {
      //     buddylist = buddylist[0];
      //     var buds = [];
      //     jsonzmext.buddylist = buds;
      //     var items = buddylist.getElementsByTagName('item');
      //     for (var index = 0; index < items.length; index++) {
      //       var em = {};
      //       var item = items[index];
      //       var itematts = item.attributes;
      //       em.nickname = itematts.getNamedItem('nickname') != null ? itematts.getNamedItem('nickname').value : '';
      //       em.displayName = itematts.getNamedItem('displayName') != null ? itematts.getNamedItem('displayName').value : '';
      //       em.role = itematts.getNamedItem('role') != null ? itematts.getNamedItem('role').value : 0;
      //       em.phone = itematts.getNamedItem('phone') != null ? itematts.getNamedItem('phone').value : '';
      //       em.node = Strophe.getNodeFromJid(item.textContent);
      //       em.jid = item.textContent;
      //       buds.push(em);
      //     }
      //   }
      // }
      // return remsg;
    },

    _onReceiveChatMessage: function _onReceiveChatMessage(msg) {
      try {
        var message = this._parseMsg(msg);
        var poll = catchPool.call(this, message);
        if (poll) {
          this._poolcb(poll);
        } else if (typeof this._msgcb === 'function') {

          this._msgcb(message);
        }
      } catch (e) {
        Strophe.error(e);
      }
      return true;
    },
    _onReceiveGroupChatMessage: function _onReceiveGroupChatMessage(msg) {
      try {
        var message = this._parseMsg(msg);
        var poll = catchPool.call(this, message);
        if (poll) {
          this._poolcb(poll);
        } else if (typeof this._msgcb === 'function') {

          this._msgcb(message);
        }
      } catch (e) {
        Strophe.error(e);
      }
      return true;
    },
    sendMessage: function sendMessage(msg) {
      var id = this._connection.getUniqueId();
      var jid = this._connection.jid;
      var message = msg.message;
      message._xmlns = 'jabber:client';
      message._id = id;
      var msgXML = Strophe.json2xml(msg);
      // var msg = $msg({ to: message.to, id: id, type: message.type,from:jid });
      // if (message.delay != null) {
      //   msg.c("delay", { xmlns: 'urn:xmpp:delay', stamp: message.delay }).up();
      // }
      // if (message.body != null) {
      //   msg.c("body").t(message.body).up();
      // }
      // if (message.composing) {
      //   msg.c('composing', { xmlns: Strophe.NS.CHATSTATES }).up();;
      // }
      // if (message.inactive) {
      //   msg.c('inactive', { xmlns: Strophe.NS.CHATSTATES }).up();;
      // }
      // if (message.gone) {
      //   msg.c('gone', { xmlns: Strophe.NS.CHATSTATES }).up();;
      // }
      // if (message.active) {
      //   msg.c('active', { xmlns: Strophe.NS.CHATSTATES }).up();;
      // }
      // if (message.zmtask != null) {
      //   if (message.zmtask.feature != null) {
      //     msg.c('zmtask', { feature: message.zmtask.feature }).up();
      //   }
      // }
      // if (message.internal != null) {
      //   if (message.internal.realfrom) {
      //     msg.c('internal', { realfrom: this._connection.jid }).up();
      //   }
      // }
      // var zmextnode = null;
      // var zmext = message.zmext;
      // var zmextAttr = {};
      // if (zmext) {
      //   if (zmext.action != null) {
      //     zmextAttr.action = zmext.action;
      //   }
      //   if(zmext.qa){
      //     zmextAttr.qa = zmext.qa;
      //   }
      //   zmextnode = msg.c('zmext', zmextAttr);

      //   if (zmext.n != null || zmext.e != null || zmext.res != null || zmext.qa!=null) {
      //     var fromAttr = {n: zmext.n, e: zmext.e, res: zmext.res};
      //     if(zmext.qa)fromAttr.p = jid;
      //     zmextnode.c('from', fromAttr).up();
      //   }

      //   var obj = zmext.obj;
      //   if (obj != null) {
      //     zmextnode.c('obj', { k: obj.k, id: obj.id, s: obj.s, nm: obj.nm, f: obj.f }).up();
      //   }
      //   zmextnode.c('to').up();
      //    if(zmext.qa!=null){
      //      zmextnode.c('qa', {from:jid,dispalyname:zmext.n,anony:zmext.anony }).up();
      //    }
      //   if (zmext.visible != null) {
      //     zmextnode.c('visible').t(zmext.visible).up();
      //   }
      //   //  room:{diff:"9:10",e2e:"0",jid: "2367489e238b401e9aa97c3573032a74@conference.xmppdev.zoom.us",natrual: "Test large group",option:"0", subject :"Test large group"}
      //   //   buudylist:[{displayName :"30",nickname:"mqwovn1qrmeiabskcrs3uq",phone:"",value:"mqwovn1qrmeiabskcrs3uq@xmppdev.zoom.us"}]

      //   //if(zmext.room!=null){
      //   //    var room= zmext.room;
      //   //    zmextnode.c('room',{diff:room.diff,
      //   //                   e2e:room.e2e,
      //   //                   jid: room.jid,
      //   //                   natrual:room.natrual,
      //   //                   option:room.option,
      //   //                   subject:room.subject}).up()
      //   //}
      //   if (zmext.emoji != null) {
      //     var emjoinode = zmextnode.c('ext').c('emoji');
      //     var emojis = zmext.emoji;
      //     for (var index = 0; index < emojis.length; index++) {
      //       var e = emojis[index];
      //       emjoinode.c('item', { start: e.start, end: e.end, type: e.type, index: e.index, shortcut: e.shortcut, repstr: e.repstr }).up();
      //     }
      //   }
      //   //if(zmext.buudylist!=null){
      //   //    var buddynode=  zmextnode.c('buddylist');
      //   //    var buudylist = zmext.buudylist;
      //   //    for(var index=0;index<buudylist.length;index++){
      //   //        var e=buudylist[index];
      //   //        buddynode.c('item',{displayName: e.displayName,nickname: e.nickname,phone: e.phone}).t(e.value).up();
      //   //    }
      //   //}
      // }
      if (msgXML) this._connection.send(msgXML);
      return id;
    }

  });
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
* Based on Ping Strophejs plugins (https://github.com/metajack/strophejs-plugins/tree/master/ping)
* This plugin is distributed under the terms of the MIT licence.
* Please see the LICENCE file for details.
*
* Copyright (c) Markus Kohlhase, 2010
* Refactored by Pavel Lang, 2011
* AMD Support added by Thierry
*/
/**
* File: strophe.ping.js
* A Strophe plugin for XMPP Ping ( http://xmpp.org/extensions/xep-0199.html )
*/
(function (root, factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function (Strophe) {
            factory(Strophe.Strophe, Strophe.$build, Strophe.$iq, Strophe.$msg, Strophe.$pres);
            return Strophe;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        // Browser globals
        factory(root.Strophe, root.$build, root.$iq, root.$msg, root.$pres);
    }
})(this, function (Strophe, $build, $iq, $msg, $pres) {
    Strophe.addConnectionPlugin('ping', {
        _c: null,

        // called by the Strophe.Connection constructor
        init: function init(conn) {
            this._c = conn;
            Strophe.addNamespace('PING', "urn:xmpp:ping");
        },

        /**
         * Function: ping
         *
         * Parameters:
         * (String) to - The JID you want to ping
         * (Function) success - Callback function on success
         * (Function) error - Callback function on error
         * (Integer) timeout - Timeout in milliseconds
         */
        ping: function ping(jid, success, error, timeout) {
            var id = this._c.getUniqueId('ping');
            var iq = $iq({ type: 'get', to: jid, id: id }).c('ping', { xmlns: Strophe.NS.PING });
            this._c.sendIQ(iq, success, error, timeout);
        },

        /**
         * Function: pong
         *
         * Parameters:
         * (Object) ping - The ping stanza from the server.
         */
        pong: function pong(ping) {
            var from = ping.getAttribute('from');
            var id = ping.getAttribute('id');
            var iq = $iq({ type: 'result', to: from, id: id });
            this._c.sendIQ(iq);
        },

        /**
         * Function: addPingHandler
         *
         * Parameters:
         * (Function) handler - Ping handler
         *
         * Returns:
         * A reference to the handler that can be used to remove it.
         */
        addPingHandler: function addPingHandler(handler) {
            return this._c.addHandler(handler, Strophe.NS.PING, "iq", "get");
        }
    });
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 *  Based on Ping Strophejs plugins (https://github.com/metajack/strophejs-plugins/tree/master/ping) to change this ack plugin
 *  This plugin is distributed under the terms of the MIT licence.
 * Created by zhangym on 1/9/2017.
 *  Copyright (c) zhangym, 2017
 */
(function (root, factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function (Strophe) {
            factory(Strophe.Strophe, Strophe.$build, Strophe.$iq, Strophe.$msg, Strophe.$pres);
            return Strophe;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        // Browser globals
        factory(root.Strophe, root.$build, root.$iq, root.$msg, root.$pres);
    }
})(this, function (Strophe, $build, $iq, $msg, $pres) {
    Strophe.addConnectionPlugin('presence', {
        _c: null,
        _presencecb: null,
        init: function init(conn) {
            this._c = conn;
        },

        statusChanged: function statusChanged(status, condition) {
            if (status === Strophe.Status.CONNECTED || status === Strophe.Status.ATTACHED) {
                this._c.addHandler(this._onReceivPrensecne.bind(this), null, 'presence', null);
            }
        },

        sendWebinarPresence: function sendWebinarPresence(meeting_number, node, role, displayName) {
            var domain = Strophe.getDomainFromJid(this._c.jid);
            var to = "w_" + meeting_number + "@conference." + domain + "/" + node;
            var pres = $pres({ /*from:  this._c.jid,*/xmlns: Strophe.NS.CLIENT, to: to }).c('x', { xmlns: Strophe.NS.MUC }).up().c('item', { node: node, role: role, displayName: displayName, 'client-feature': 0 });
            this._c.send(pres.tree());
        },


        online: function online() {
            var pres = $pres({ from: this._c.jid + '/' + Strophe.Resource, xmlns: Strophe.NS.CLIENT }).c('priority').t('15').up();
            this._c.send(pres.tree());
        },

        busy: function busy() {
            var pres = $pres({ from: this._c.jid + '/' + Strophe.Resource, xmlns: Strophe.NS.CLIENT }).c('show').t('dnd').up().c('priority').t('15').up();
            this._c.send(pres.tree());
        },
        _onReceivPrensecne: function _onReceivPrensecne(presence) {
            Strophe.info('presence process');
            Strophe.info(presence);
            try {
                var p = {};
                var atts = presence.attributes;
                var from = atts.getNamedItem('from') != null ? atts.getNamedItem('from').value : null;
                var to = atts.getNamedItem('to') != null ? atts.getNamedItem('to').value : null;
                var type = atts.getNamedItem('type') != null ? atts.getNamedItem('type').value : null;
                var shownode = presence.getElementsByTagName('show');
                if (shownode != null && shownode.length > 0) {
                    shownode = shownode[0];
                    p.show = shownode.textContent;
                }
                p.from = from;
                p.to = to;
                if (type === null) {
                    p.isonline = true;
                } else if (type === 'available') {
                    p.isonline = true;
                } else if (type === 'unavailable') {
                    p.isonline = false;
                }
                if (typeof this._presencecb === 'function') {
                    this._presencecb(p);
                }
            } catch (e) {
                Strophe.error(e);
            }
            return true;
        },

        addPresenceHandle: function addPresenceHandle(handle) {
            this._presencecb = handle;
        }
    });
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 *  Based on Ping Strophejs plugins (https://github.com/metajack/strophejs-plugins/tree/master/ping) to change this ack plugin
 *  This plugin is distributed under the terms of the MIT licence.
 * Created by zhangym on 1/9/2017.
 *  Copyright (c) zhangym, 2017
 */
(function (root, factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function (Strophe) {
            return factory(Strophe.Strophe, Strophe.$build, Strophe.$iq, Strophe.$msg, Strophe.$pres);
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        // Browser globals
        factory(root.Strophe, root.$build, root.$iq, root.$msg, root.$pres);
    }
})(this, function (Strophe, $build, $iq, $msg, $pres) {
    Strophe.addConnectionPlugin('rooms', {
        _c: null,
        roomcb: null,
        // called by the Strophe.Connection constructor
        init: function init(conn) {
            this._c = conn;
            Strophe.addNamespace('ZOOMROOM', 'zoom:iq:room');
        },

        statusChanged: function statusChanged(status, condition) {
            if (status === Strophe.Status.CONNECTED || status === Strophe.Status.ATTACHED) {
                this._c.addHandler(this._onReceivIQ.bind(this), null, 'iq', 'result');
            }
        },

        _onReceivIQ: function _onReceivIQ(iq) {
            var iaatts = iq.attributes;
            var id = iaatts.getNamedItem('id') != null ? iaatts.getNamedItem('id').value : '';
            Strophe.info("room prcess id " + id);
            try {
                var zooms = iq.getElementsByTagName('zoom');
                var rooms = iq.getElementsByTagName('room');
                if (zooms.length > 0) {
                    var sessions = [];
                    var zoom = zooms[0];
                    var atts = zoom.attributes;
                    var xmls = atts.getNamedItem('xmlns').value;
                    if (xmls === Strophe.NS.ZOOMROOM) {
                        var roomlist = null;
                        var action = null;
                        try {
                            roomlist = zoom.getElementsByTagName('roomlist');
                        } catch (e) {}
                        try {
                            action = atts.getNamedItem('action').value;
                        } catch (e) {}

                        if (roomlist != null && roomlist.length > 0) {
                            var taget = [];
                            var rm = roomlist[0];
                            var items = rm.getElementsByTagName('item');
                            for (var index = 0; index < items.length; index++) {
                                var item = items[index];
                                var itematt = item.attributes;
                                var p = {};
                                p.version = itematt.getNamedItem('version').value;
                                p.diff = itematt.getNamedItem('diff').value;
                                p.node = Strophe.getNodeFromJid(item.textContent);
                                p.server = Strophe.getDomainFromJid(item.textContent);
                                taget.push(p);
                            }
                            this.roomcb(Strophe.ACTION.ROOMS_CALLBACK_STATE, taget);
                            return true;
                        } else if (action === 'member') {
                            var from = iaatts.getNamedItem('from').value;
                            var chunk = atts.getNamedItem('chunk').value;
                            var roo = {};
                            var aitems = [];
                            var room = zoom.getElementsByTagName('room');
                            room = room[0];
                            roo.jid = from;
                            roo.node = Strophe.getNodeFromJid(from);
                            roo.server = Strophe.getDomainFromJid(from);
                            var atts = room.attributes;
                            roo.natural = atts.getNamedItem('natural').value;
                            roo.subject = atts.getNamedItem('subject').value;
                            roo.desc = atts.getNamedItem('desc').value;
                            roo.option = atts.getNamedItem('option').value;
                            roo.version = atts.getNamedItem('version').value;
                            var buddylist = zoom.getElementsByTagName('buddylist');
                            if (buddylist.length > 0) {
                                buddylist = buddylist[0];
                                atts = buddylist.attributes;
                                roo.total = atts.getNamedItem('total').value;
                                roo.first = atts.getNamedItem('first').value;
                                var items = buddylist.getElementsByTagName('item');
                                for (var index = 0; index < items.length; index++) {
                                    var item = items[index];
                                    var itematt = item.attributes;
                                    var p = {};
                                    p.nickname = itematt.getNamedItem('nickname').value;
                                    p.role = itematt.getNamedItem('role').value;
                                    p.displayName = itematt.getNamedItem('displayName').value;
                                    p.jid = item.textContent;
                                    p.node = Strophe.getNodeFromJid(item.textContent);
                                    aitems.push(p);
                                }
                            }
                            roo.items = aitems;
                            this.roomcb(Strophe.ACTION.ROOMS_DETAIL_CALLBACK_STATE, roo);
                        }
                    }
                } else if (rooms.length > 0) {
                    var room = rooms[0];
                    var atts = room.attributes;
                    var xmls = atts.getNamedItem('xmlns').value;
                    if (xmls === Strophe.NS.ZOOMROOM) {
                        var action = null;
                        try {
                            action = atts.getNamedItem('action').value;
                        } catch (e) {}
                        if (action === 'create') {
                            this.roomcb(Strophe.ROOMS_CREATE_CALLBACK, id);
                        }
                    }
                }
            } catch (e) {
                Strophe.error("error on parse " + e);
                return true;
            }
            return true;
        },
        queryRoom: function queryRoom(room, chunk, success, error, timeout) {
            var uuid = this._c.getUniqueId('room');
            var to = room + "@" + Strophe.Config.ConferenceDomain;
            var iq = $iq({
                id: uuid,
                type: 'get',
                to: to,
                xmlns: Strophe.NS.CLIENT
            }).c('zoom', { xmlns: Strophe.NS.ZOOMROOM, action: 'member', chunk: chunk });
            this._c.sendIQ(iq, success, error, timeout);
            return uuid;
        },
        rooms: function rooms(success, error, timeout) {
            var uuid = this._c.getUniqueId('room');
            var iq = $iq({
                id: uuid,
                type: 'get',
                from: Strophe.getBareJidFromJid(this._c.jid),
                to: Strophe.Config.ConferenceDomain,
                xmlns: Strophe.NS.CLIENT
            }).c('zoom', { xmlns: Strophe.NS.ZOOMROOM, action: 'quns' });
            this._c.sendIQ(iq, success, error, timeout);
            return uuid;
        },

        creatRoom: function creatRoom(room) {
            var uuid = this._c.getUniqueId('room');
            var iq = $iq({
                id: uuid,
                type: 'get',
                from: Strophe.getBareJidFromJid(this._c.jid),
                to: Strophe.Config.ConferenceDomain,
                xmlns: Strophe.NS.CLIENT
            }).c('zoom', { xmlns: Strophe.NS.ZOOMROOM, action: 'create' }).c('room', { natural: room.natural, subject: room.subject, option: room.option }).c('buddylist');
            if (room.buddylist) {
                for (var i in room.buddylist) {
                    var item = room.buddylist[i];
                    iq.c('item', { nickname: item.nickname, displayName: item.displayName }).t(item.jid).up();
                }
            }
            this._c.sendIQ(iq, success, error, timeout);
            return uuid;
        },
        changeOption: function changeOption(roomjid, option) {
            var uuid = this._c.getUniqueId('room');
            var iq = $iq({
                id: uuid,
                type: 'get',
                from: Strophe.getBareJidFromJid(this._c.jid),
                to: roomjid,
                xmlns: Strophe.NS.CLIENT
            }).c('zoom', { xmlns: Strophe.NS.ZOOMROOM, action: 'edit' }).c('option').t(option);
            this._c.sendIQ(iq, success, error, timeout);
            return uuid;
        },
        editName: function editName(roomjid, name) {
            var uuid = this._c.getUniqueId('room');
            var iq = $iq({
                id: uuid,
                type: 'get',
                from: Strophe.getBareJidFromJid(this._c.jid),
                to: roomjid,
                xmlns: Strophe.NS.CLIENT
            }).c('zoom', { xmlns: Strophe.NS.ZOOMROOM, action: 'subject' }).c('subject').t(name);
            this._c.sendIQ(iq, success, error, timeout);
            return uuid;
        },
        inviteIntoRoom: function inviteIntoRoom(roomjid, buddylist) {
            var uuid = this._c.getUniqueId('room');
            var iq = $iq({
                id: uuid,
                type: 'get',
                from: Strophe.getBareJidFromJid(this._c.jid),
                to: roomjid,
                xmlns: Strophe.NS.CLIENT
            }).c('zoom', { xmlns: Strophe.NS.ZOOMROOM, action: 'invite' }).c('buddylist');
            for (var i = 0; i < buddylist.length; i++) {
                var item = buddylist[i];
                iq.c('item', { nickname: item.nickname, displayName: item.displayName }).t(item.jid).up();
            }
            this._c.sendIQ(iq);
            return uuid;
        },

        /**
         * Function: addPingHandler
         *
         * Parameters:
         * (Function) handler - Ping handler
         *
         * Returns:
         * A reference to the handler that can be used to remove it.
         */
        addRoomHandler: function addRoomHandler(handler) {
            this.roomcb = handler;
        }
    });
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 *  Based on Ping Strophejs plugins (https://github.com/metajack/strophejs-plugins/tree/master/ping) to change this ack plugin
 *  This plugin is distributed under the terms of the MIT licence.
 * Created by zhangym on 1/9/2017.
 *  Copyright (c) zhangym, 2017
 */
(function (root, factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function (Strophe) {
            factory(Strophe.Strophe, Strophe.$build, Strophe.$iq, Strophe.$msg, Strophe.$pres);
            return Strophe;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        // Browser globals
        factory(root.Strophe, root.$build, root.$iq, root.$msg, root.$pres);
    }
})(this, function (Strophe, $build, $iq, $msg, $pres) {
    Strophe.addConnectionPlugin('roster', {
        _c: null,
        rostercb: null,
        // called by the Strophe.Connection constructor
        init: function init(conn) {
            this._c = conn;
            Strophe.addNamespace('ZOOMGROUP', 'zoom:iq:group');
        },

        statusChanged: function statusChanged(status, condition) {
            if (status === Strophe.Status.CONNECTED || status === Strophe.Status.ATTACHED) {
                this._c.addHandler(this._onReceivIQ.bind(this), null, 'iq', 'result');
            }
        },
        _onReceivIQ: function _onReceivIQ(iq) {
            var iaatts = iq.attributes;
            var id = iaatts.getNamedItem('id') != null ? iaatts.getNamedItem('id').value : '';
            Strophe.info("roster prcess id " + id);
            try {
                var zooms = iq.getElementsByTagName('zoom');
                if (zooms.length == 0) {
                    return true;
                } else {
                    var zoom = zooms[0];
                    var atts = zoom.attributes;
                    var xmls = atts.getNamedItem('xmlns').value;
                    if (xmls == Strophe.NS.ZOOMEXT) {
                        try {
                            var type = atts.getNamedItem('type') != null ? atts.getNamedItem('type').value : '';
                        } catch (e) {}
                        if (type === 'roster') {
                            if (typeof this.rostercb === 'function') {
                                var roster = {};
                                var groups = [];
                                roster.chunk = atts.getNamedItem('chunk').value;
                                var defaultgroup = {};
                                var defaultnodes = zoom.getElementsByTagName('default');
                                if (defaultnodes.length > 0) {
                                    roster.group = defaultgroup;
                                    var defaultnode = defaultnodes[0];
                                    var atts = defaultnode.attributes;
                                    defaultgroup.total = atts.getNamedItem('total') != null ? atts.getNamedItem('total').value : 0;
                                    defaultgroup.first = atts.getNamedItem('first') != null ? atts.getNamedItem('first').value : 0;
                                    defaultgroup.version = atts.getNamedItem('version') != null ? atts.getNamedItem('version').value : 0;
                                    defaultgroup.items = [];
                                    var itemsnode = defaultnode.getElementsByTagName('item');
                                    for (var i = 0; i < itemsnode.length; i++) {
                                        var attsitemnode = itemsnode[i].attributes;
                                        var m = {};
                                        m.jid = attsitemnode.getNamedItem('jid') != null ? attsitemnode.getNamedItem('jid').value : '';
                                        m.fname = attsitemnode.getNamedItem('fname') != null ? attsitemnode.getNamedItem('fname').value : '';
                                        m.lname = attsitemnode.getNamedItem('lname') != null ? attsitemnode.getNamedItem('lname').value : '';
                                        m.type = attsitemnode.getNamedItem('type') != null ? attsitemnode.getNamedItem('type').value : 0;
                                        m.cmd = attsitemnode.getNamedItem('cmd') != null ? attsitemnode.getNamedItem('cmd').value : '';
                                        var groupdefaults = itemsnode[i].getElementsByTagName('group');
                                        var name = 'default';
                                        if (groupdefaults.length > 0) {
                                            var ggroup = groupdefaults[0];
                                            name = ggroup.textContent;
                                        }
                                        m.gname = name;
                                        defaultgroup.items.push(m);
                                    }
                                }

                                var nodes = zoom.getElementsByTagName('group');
                                for (var index = 0; index < nodes.length; index++) {
                                    var groupnode = nodes[index];
                                    var attsgroupnodes = groupnode.attributes;
                                    if (attsgroupnodes.getNamedItem('version') == null) {
                                        continue;
                                    }
                                    var p = {};
                                    p.total = attsgroupnodes.getNamedItem('total') != null ? attsgroupnodes.getNamedItem('total').value : 0;
                                    p.first = attsgroupnodes.getNamedItem('first') != null ? attsgroupnodes.getNamedItem('first').value : 0;
                                    p.id = attsgroupnodes.getNamedItem('id') != null ? attsgroupnodes.getNamedItem('id').value : 0;
                                    p.diff = attsgroupnodes.getNamedItem('diff') != null ? attsgroupnodes.getNamedItem('diff').value : 0;
                                    p.version = attsgroupnodes.getNamedItem('version') != null ? attsgroupnodes.getNamedItem('version').value : 0;
                                    p.name = attsgroupnodes.getNamedItem('name') != null ? attsgroupnodes.getNamedItem('name').value : '';
                                    p.option = attsgroupnodes.getNamedItem('option') != null ? attsgroupnodes.getNamedItem('option').value : 0;
                                    var itemnodes = groupnode.getElementsByTagName('item');
                                    var items = [];
                                    for (var i = 0; i < itemnodes.length; i++) {
                                        var attsitemnode = itemnodes[i].attributes;
                                        var m = {};
                                        m.jid = attsitemnode.getNamedItem('jid') != null ? attsitemnode.getNamedItem('jid').value : '';
                                        m.fname = attsitemnode.getNamedItem('fname') != null ? attsitemnode.getNamedItem('fname').value : '';
                                        m.lname = attsitemnode.getNamedItem('lname') != null ? attsitemnode.getNamedItem('lname').value : '';
                                        m.type = attsitemnode.getNamedItem('type') != null ? attsitemnode.getNamedItem('type').value : 0;
                                        m.cmd = attsitemnode.getNamedItem('cmd') != null ? attsitemnode.getNamedItem('cmd').value : '';
                                        m.gname = p.name;
                                        items.push(m);
                                    }
                                    p.items = items;
                                    if (p.diff != 0) {
                                        var updates = [];
                                        var updatenodes = groupnode.getElementsByTagName('update');
                                        for (var i = 0; i < updatenodes.length; i++) {
                                            var attsitemnode = updatenodes[i].attributes;
                                            var m = {};
                                            m.jid = attsitemnode.getNamedItem('jid') != null ? attsitemnode.getNamedItem('jid').value : '';
                                            m.fname = attsitemnode.getNamedItem('fname') != null ? attsitemnode.getNamedItem('fname').value : '';
                                            m.lname = attsitemnode.getNamedItem('lname') != null ? attsitemnode.getNamedItem('lname').value : '';
                                            m.gname = p.name;
                                            updates.push(m);
                                        }
                                        p.updates = updates;

                                        var deletes = [];
                                        var deletenodes = groupnode.getElementsByTagName('delete');
                                        for (var i = 0; i < deletenodes.length; i++) {
                                            var attsitemnode = deletenodes[i].attributes;
                                            var m = {};
                                            m.jid = attsitemnode.getNamedItem('jid') != null ? attsitemnode.getNamedItem('jid').value : '';
                                            deletes.push(m);
                                        }
                                        p.deletes = deletes;

                                        var adds = [];
                                        var addenodes = groupnode.getElementsByTagName('add');
                                        for (var i = 0; i < addenodes.length; i++) {
                                            var attsitemnode = addenodes[i].attributes;
                                            var m = {};
                                            m.jid = attsitemnode.getNamedItem('jid') != null ? attsitemnode.getNamedItem('jid').value : '';
                                            m.fname = attsitemnode.getNamedItem('fname') != null ? attsitemnode.getNamedItem('fname').value : '';
                                            m.lname = attsitemnode.getNamedItem('lname') != null ? attsitemnode.getNamedItem('lname').value : '';
                                            m.gname = p.name;
                                            adds.push(m);
                                        }
                                        p.adds = adds;
                                    }
                                    groups.push(p);
                                }
                                roster.groups = groups;
                                this.rostercb(Strophe.ACTION.ROSTER_ITEMS_CB, roster);
                            }
                        } else if (type === 'version') {
                            if (typeof this.rostercb === 'function') {
                                var groupversion = [];
                                var dnode = zoom.getElementsByTagName('default');
                                dnode = dnode[0];
                                var defaultnode = {};
                                defaultnode.id = 'default';
                                defaultnode.version = dnode.attributes.getNamedItem('version').value;
                                defaultnode.type = 'default';
                                groupversion.push(defaultnode);
                                var groupnodes = zoom.getElementsByTagName('group');
                                for (var index = 0; index < groupnodes.length; index++) {
                                    var gnode = groupnodes[index];
                                    var m = {};
                                    var attsitemnode = gnode.attributes;
                                    m.version = attsitemnode.getNamedItem('version') != null ? attsitemnode.getNamedItem('version').value : '0';
                                    m.id = attsitemnode.getNamedItem('id') != null ? attsitemnode.getNamedItem('id').value : '0';
                                    m.type = attsitemnode.getNamedItem('type') != null ? attsitemnode.getNamedItem('type').value : '0';
                                    groupversion.push(m);
                                }
                                this.rostercb(Strophe.ACTION.ROSTER_VERSION_CB, groupversion);
                            }
                        }
                    }
                }
            } catch (e) {
                Strophe.error("error on roster parse " + e);
            }
            return true;
        },

        queryChunk: function queryChunk(chunk) {
            var uuid = this._c.getUniqueId('group');
            var iq = $iq({
                id: uuid,
                type: 'get',
                from: Strophe.getBareJidFromJid(this._c.jid),
                xmlns: Strophe.NS.CLIENT
            }).c('query', { xmlns: Strophe.NS.ZOOMGROUP, chunk: chunk });
            this._c.sendIQ(iq);
            return uuid;
        },

        /**
         * Function: queryGroups
         *
         * Parameters:
         * (Obj)  groupInfos like this {chunk:'1',directory:1,groups:[{id:'aereessdfdsf',version:-1,option:1}]}
         */
        queryGroups: function queryGroups(groupinfos, success, error, timeout) {
            var chunk = groupinfos.chunk;
            var directory = groupinfos.directory;
            var groups = groupinfos.groups;
            var uuid = this._c.getUniqueId('group');
            var iq = $iq({
                id: uuid,
                type: 'get',
                from: Strophe.getBareJidFromJid(this._c.jid),
                xmlns: Strophe.NS.CLIENT
            }).c('query', {
                xmlns: Strophe.NS.ZOOMGROUP,
                chunk: chunk,
                directory: directory
            });
            for (var i = 0; i < groups.length; i++) {
                var group = groups[i];
                if (group.id === 'default') {
                    iq.c('default', { version: group.version, option: group.option }).up();
                } else {
                    iq.c('group', { id: group.id, version: group.version, option: group.option }).up();
                }
            }
            this._c.sendIQ(iq, success, error, timeout);
            return uuid;
        },

        /**
         *
         * <!-- 查询group版本信息 -->
         * <iq id='5CD66118-352A-411E-9D2F-7BA34281921E' type='get'
         *      from='v544f4dlrzyw_pegmbgtxq@xmppdev.zoom.us/ZoomChat_pc' xmlns='jabber:client'>
         *      <query xmlns='zoom:iq:version'/>
         * </iq>
         *
         * <!-- 查询group数据 -->
         * <iq id='{AA2A9695-CA71-43CB-BCD0-DCBC39A07112}' type='get' from='bbvwf-0-tsssza8lvcnwpq@xmppdev.zoom.us/ZoomChat_pc' xmlns='jabber:client'>
         *  <query xmlns='zoom:iq:group' chunk='1' directory='1'>
         *      <group id='zm.Gch9Hbf-ST20X5NLJ89osg' version='9' option='0'/>
         *      <default version='6' option='0'/>
         *  </query>
         * </iq>
         */
        queryGroupInfos: function queryGroupInfos(success, error, timeout) {
            var uuid = this._c.getUniqueId('group');
            var iq = $iq({
                id: uuid,
                type: 'get',
                from: Strophe.getBareJidFromJid(this._c.jid),
                xmlns: Strophe.NS.CLIENT
            }).c('query', { xmlns: 'zoom:iq:version' });
            this._c.sendIQ(iq, success, error, timeout);
            return uuid;
        },

        /**
         * Function: addRosterHandler
         *
         * Parameters:
         * (Function) handler - roster handler
         *
         * Returns:
         * A reference to the handler that can be used to remove it.
         */
        addRosterHandler: function addRosterHandler(handler) {
            this.rostercb = handler;
        }
    });
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * Based on Ping Strophejs plugins (https://github.com/metajack/strophejs-plugins/tree/master/ping)
 * This plugin is distributed under the terms of the MIT licence.
 * Please see the LICENCE file for details.
 *
 * Copyright (c) Markus Kohlhase, 2010
 * Refactored by Pavel Lang, 2011
 * AMD Support added by Thierry
 */
/**
 * File: strophe.ping.js
 * A Strophe plugin for XMPP Ping ( http://xmpp.org/extensions/xep-0199.html )
 */
(function (root, factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function (Strophe) {
            factory(Strophe.Strophe, Strophe.$build, Strophe.$iq, Strophe.$msg, Strophe.$pres);
            return Strophe;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        // Browser globals
        factory(root.Strophe, root.$build, root.$iq, root.$msg, root.$pres);
    }
})(this, function (Strophe, $build, $iq, $msg, $pres) {
    Strophe.addConnectionPlugin('vcard', {
        _c: null,
        _vardcb: null,
        // called by the Strophe.Connection constructor
        init: function init(conn) {
            this._c = conn;
            Strophe.addNamespace('vcard', "vcard-temp");
        },

        statusChanged: function statusChanged(status, condition) {
            if (status === Strophe.Status.CONNECTED || status === Strophe.Status.ATTACHED) {
                this._c.addHandler(this._onReceivIQ.bind(this), null, 'iq', 'result');
            }
        },

        _onReceivIQ: function _onReceivIQ(iq) {
            var card = {};
            var iaatts = iq.attributes;
            var id = iaatts.getNamedItem('id') != null ? iaatts.getNamedItem('id').value : '';
            Strophe.info("vCard prcess id " + id);
            try {
                var vCard = iq.getElementsByTagName('vCard');
                if (vCard.length == 0) {

                    var zooms = iq.getElementsByTagName('zoom');
                    if (zooms.length == 0) {
                        return true;
                    } else {
                        var zoom = zooms[0];
                        var atts = zoom.attributes;
                        var type = atts.getNamedItem('type');
                        if (type == null) {
                            return true;
                        }
                        var value = type.value;
                        if (value === 'vcard_update') {
                            card.action = 'update';
                            card.jid = atts.getNamedItem('jid').value;
                            if (typeof this._vardcb === 'function') {
                                this._vardcb(card);
                            }
                        }
                    }
                    return true;
                } else {
                    card.action = 'vcard';
                    vCard = vCard[0];
                    var JABBERID = vCard.getElementsByTagName('JABBERID');
                    if (JABBERID.length > 0) {
                        JABBERID = JABBERID[0];
                        card.jid = JABBERID.textContent;
                    }
                    var N = vCard.getElementsByTagName('N');
                    if (N.length > 0) {
                        var GIVEN = N.getElementsByTagName('GIVEN');
                        if (GIVEN.length > 0) {
                            GIVEN = GIVEN[0];
                            card.firstname = GIVEN.textContent;
                        }
                        var FAMILY = N.getElementsByTagName('FAMILY');
                        if (FAMILY.length > 0) {
                            FAMILY = FAMILY[0];
                            card.lastname = FAMILY.textContent;
                        }
                    }

                    var desc = vCard.getElementsByTagName('desc');
                    if (desc.length > 0) {
                        desc = desc[0];
                        card.desc = desc.textContent;
                    }

                    var email = vCard.getElementsByTagName('email');
                    if (email.length > 0) {
                        email = email[0];
                        var USERID = email.getElementsByTagName('USERID');
                        if (USERID.length > 0) {
                            USERID = USERID[0];
                            card.userid = USERID.textContent;
                        }
                    }
                    if (typeof this._vardcb === 'function') {
                        this._vardcb(card);
                    }
                }
            } catch (e) {
                Strophe.error(e);
            }
            return true;
        },
        /**
         * Function: ping
         *
         * Parameters:
         * (String) to - The JID you want to ping
         * (Function) success - Callback function on success
         * (Function) error - Callback function on error
         * (Integer) timeout - Timeout in milliseconds
         */
        query: function query(jid, success, error, timeout) {
            var id = this._c.getUniqueId('vcard');
            var iq = $iq({ type: 'get', to: jid, id: id }).c('vCard', { xmlns: Strophe.NS.vCard });
            this._c.sendIQ(iq, success, error, timeout);
        },

        /**
         * Function: addPingHandler
         *
         * Parameters:
         * (Function) handler - Ping handler
         *
         * Returns:
         * A reference to the handler that can be used to remove it.
         */
        addVCardHandler: function addVCardHandler(handler) {
            return this._vardcb = handler;
        }
    });
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Created by zhangym on 4/25/2017.
 */
/**
 *  Based on Ping Strophejs plugins (https://github.com/metajack/strophejs-plugins/tree/master/ping) to change this ack plugin
 *  This plugin is distributed under the terms of the MIT licence.
 * Created by zhangym on 1/9/2017.
 *  Copyright (c) zhangym, 2017
 */
(function (root, factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function (Strophe) {
            factory(Strophe.Strophe, Strophe.$build, Strophe.$iq, Strophe.$msg, Strophe.$pres);
            return Strophe;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        // Browser globals
        factory(root.Strophe, root.$build, root.$iq, root.$msg, root.$pres);
    }
})(this, function (Strophe, $build, $iq, $msg, $pres) {
    Strophe.addConnectionPlugin('webinar_iq', {
        _c: null,
        webinarcb: null,
        // called by the Strophe.Connection constructor
        init: function init(conn) {
            this._c = conn;
        },

        statusChanged: function statusChanged(status, condition) {
            if (status === Strophe.Status.CONNECTED || status === Strophe.Status.ATTACHED) {
                this._c.addHandler(this._onReceivIQ.bind(this), null, 'iq', 'result');
            }
        },
        _onReceivIQ: function _onReceivIQ(iq) {
            var iqJSON = Strophe.xml2json(iq);
            if (iqJSON._id && /^push/.test(iqJSON._id) && iqJSON.zoom && iqJSON.zoom._type) {
                var _type = '';
                if (/^member/.test(iqJSON.zoom._type)) {
                    if (iqJSON.zoom._type === "memberadd" || iqJSON.zoom._type === 'memberlist') {
                        _type = Strophe.ACTION.WEBINAR_MEMBER_ADD;
                    } else if (iqJSON.zoom._type === "memberremove") {
                        _type = Strophe.ACTION.WEBINAR_MEMBER_REMOVE;
                    }
                    this.webinarcb(_type, iqJSON.zoom.item);
                } else if (iqJSON.zoom._type === 'valuepush') {
                    _type = iqJSON.zoom._value.match(/^(lowerhand|raisehand)/);
                    if (_type) {
                        this.webinarcb(_type[1], iqJSON.zoom);
                    }
                    //console.log(iqJSON)
                }
            }
            return true;
            var iaatts = iq.attributes;
            var id = iaatts.getNamedItem('id') != null ? iaatts.getNamedItem('id').value : '';
            Strophe.info("webinar prcess id " + id);
            try {
                var zooms = iq.getElementsByTagName('zoom');
                if (zooms.length == 0) {
                    return true;
                } else {
                    var zoom = zooms[0];
                    var atts = zoom.attributes;
                    var xmls = atts.getNamedItem('xmlns').value;
                    if (xmls == Strophe.NS.ZOOMEXT) {
                        try {
                            var type = atts.getNamedItem('type') != null ? atts.getNamedItem('type').value : '';
                        } catch (e) {}
                        if (typeof this.webinarcb === 'function') {
                            if (type === 'memberlist') {

                                var items = [];
                                var nodes = zoom.getElementsByTagName('item');
                                for (var index = 0; index < nodes.length; index++) {
                                    var groupnode = nodes[index];
                                    var attsgroupnodes = groupnode.attributes;

                                    var p = {};
                                    p.jid = attsgroupnodes.getNamedItem('jid') != null ? attsgroupnodes.getNamedItem('jid').value : 0;
                                    p.node = attsgroupnodes.getNamedItem('node') != null ? attsgroupnodes.getNamedItem('node').value : 0;
                                    p.role = attsgroupnodes.getNamedItem('role') != null ? attsgroupnodes.getNamedItem('role').value : 0;
                                    p.displayName = attsgroupnodes.getNamedItem('displayName') != null ? attsgroupnodes.getNamedItem('displayName').value : 0;
                                    p.client_feature = attsgroupnodes.getNamedItem('client-feature') != null ? attsgroupnodes.getNamedItem('client-feature').value : 0;
                                    var value = attsgroupnodes.getNamedItem('value') != null ? attsgroupnodes.getNamedItem('value').value : null;
                                    if (value != null) {
                                        var vs = value.split(':');
                                        p.hander = vs[0];
                                        p.role_name = vs[1];
                                        p.email = vs[2];
                                    }
                                    items.push(p);
                                }
                                this.webinarcb(Strophe.ACTION.WEBINAR_MEMBER_LIST, items);
                            } else if (type === 'memberadd') {
                                var items = [];
                                var nodes = zoom.getElementsByTagName('item');
                                for (var index = 0; index < nodes.length; index++) {
                                    var groupnode = nodes[index];
                                    var attsgroupnodes = groupnode.attributes;

                                    var p = {};
                                    p.jid = attsgroupnodes.getNamedItem('jid') != null ? attsgroupnodes.getNamedItem('jid').value : 0;
                                    p.node = attsgroupnodes.getNamedItem('node') != null ? attsgroupnodes.getNamedItem('node').value : 0;
                                    p.role = attsgroupnodes.getNamedItem('role') != null ? attsgroupnodes.getNamedItem('role').value : 0;
                                    p.displayName = attsgroupnodes.getNamedItem('displayName') != null ? attsgroupnodes.getNamedItem('displayName').value : 0;
                                    p.client_feature = attsgroupnodes.getNamedItem('client-feature') != null ? attsgroupnodes.getNamedItem('client-feature').value : 0;
                                    var value = attsgroupnodes.getNamedItem('value') != null ? attsgroupnodes.getNamedItem('value').value : null;
                                    if (value != null) {
                                        var vs = value.split(':');
                                        if (vs.length >= 3) {
                                            p.hander = vs[0];
                                            p.role_name = vs[1];
                                            p.email = vs[2];
                                        }
                                    }
                                    items.push(p);
                                }
                                this.webinarcb(Strophe.ACTION.WEBINAR_MEMBER_ADD, items);
                            } else if (type === 'memberremove') {
                                var items = [];
                                var nodes = zoom.getElementsByTagName('item');
                                for (var index = 0; index < nodes.length; index++) {
                                    var groupnode = nodes[index];
                                    var attsgroupnodes = groupnode.attributes;
                                    var p = {};
                                    p.jid = attsgroupnodes.getNamedItem('jid') != null ? attsgroupnodes.getNamedItem('jid').value : 0;
                                    p.node = attsgroupnodes.getNamedItem('node') != null ? attsgroupnodes.getNamedItem('node').value : 0;
                                    p.role = attsgroupnodes.getNamedItem('role') != null ? attsgroupnodes.getNamedItem('role').value : 0;
                                    p.displayName = attsgroupnodes.getNamedItem('displayName') != null ? attsgroupnodes.getNamedItem('displayName').value : 0;
                                    p.client_feature = attsgroupnodes.getNamedItem('client-feature') != null ? attsgroupnodes.getNamedItem('client-feature').value : 0;
                                    var value = attsgroupnodes.getNamedItem('value') != null ? attsgroupnodes.getNamedItem('value').value : null;
                                    if (value != null) {
                                        var vs = value.split(':');
                                        if (vs.length >= 3) {
                                            p.hander = vs[0];
                                            p.role_name = vs[1];
                                            p.email = vs[2];
                                        }
                                    }
                                    items.push(p);
                                }
                                this.webinarcb(Strophe.ACTION.WEBINAR_MEMBER_REMOVE, items);
                            } else if (type === 'valuepush') {
                                var p = {};
                                p.node = atts.getNamedItem('node') != null ? atts.getNamedItem('node').value : 0;
                                p.role = atts.getNamedItem('role') != null ? atts.getNamedItem('role').value : 0;
                                p.jid = atts.getNamedItem('jid') != null ? atts.getNamedItem('jid').value : '';
                                var value = atts.getNamedItem('value') != null ? atts.getNamedItem('value').value : null;
                                if (value != null) {
                                    var vs = value.split(':');
                                    p.hander = vs[0];
                                    p.role_name = vs[1];
                                    p.email = vs[2];
                                }
                                this.webinarcb(Strophe.ACTION.WEBINAR_MEMBER_CHANGER, p);
                            }
                        }
                    }
                }
            } catch (e) {
                Strophe.error("error on roster parse " + e);
            }
            return true;
        },

        queryMembers: function queryMembers(meeting_number) {
            var uuid = this._c.getUniqueId('webinar');
            var domain = Strophe.getDomainFromJid(this._c.jid);
            var to = "w_" + meeting_number + "@conference." + domain;
            var iq = $iq({
                id: uuid,
                type: 'set',
                to: to,
                from: Strophe.getBareJidFromJid(this._c.jid) + "/" + Strophe.Resource
            }).c('zoom', { xmlns: Strophe.NS.ZOOMROOM, action: 'panelist' });
            this._c.sendIQ(iq);
            return uuid;
        },

        setValue: function setValue(meeting_number, hander, role_name, email) {
            var uuid = this._c.getUniqueId('webinar');
            var domain = Strophe.getDomainFromJid(this._c.jid);
            var to = "w_" + meeting_number + "@conference." + domain;
            // var value = hander+":attention_in_meeting:"+role_name+":"+email;
            var value = hander + ":attention_in_meeting:email=" + email;
            var iq = $iq({
                id: uuid,
                type: 'set',
                to: to,
                from: Strophe.getBareJidFromJid(this._c.jid) + '/' + Strophe.Resource
            }).c('zoom', { xmlns: Strophe.NS.ZOOMROOM, action: 'webinar_setvalue', value: value });
            this._c.sendIQ(iq);
            return uuid;
        },

        addWebinarIQHandler: function addWebinarIQHandler(handler) {
            this.webinarcb = handler;
        }
    });
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_enc = C.enc;

	    /**
	     * Base64 encoding strategy.
	     */
	    var Base64 = C_enc.Base64 = {
	        /**
	         * Converts a word array to a Base64 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Base64 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;
	            var map = this._map;

	            // Clamp excess bits
	            wordArray.clamp();

	            // Convert
	            var base64Chars = [];
	            for (var i = 0; i < sigBytes; i += 3) {
	                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
	                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
	                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

	                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

	                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
	                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
	                }
	            }

	            // Add padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                while (base64Chars.length % 4) {
	                    base64Chars.push(paddingChar);
	                }
	            }

	            return base64Chars.join('');
	        },

	        /**
	         * Converts a Base64 string to a word array.
	         *
	         * @param {string} base64Str The Base64 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
	         */
	        parse: function (base64Str) {
	            // Shortcuts
	            var base64StrLength = base64Str.length;
	            var map = this._map;
	            var reverseMap = this._reverseMap;

	            if (!reverseMap) {
	                    reverseMap = this._reverseMap = [];
	                    for (var j = 0; j < map.length; j++) {
	                        reverseMap[map.charCodeAt(j)] = j;
	                    }
	            }

	            // Ignore padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                var paddingIndex = base64Str.indexOf(paddingChar);
	                if (paddingIndex !== -1) {
	                    base64StrLength = paddingIndex;
	                }
	            }

	            // Convert
	            return parseLoop(base64Str, base64StrLength, reverseMap);

	        },

	        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
	    };

	    function parseLoop(base64Str, base64StrLength, reverseMap) {
	      var words = [];
	      var nBytes = 0;
	      for (var i = 0; i < base64StrLength; i++) {
	          if (i % 4) {
	              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
	              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
	              words[nBytes >>> 2] |= (bits1 | bits2) << (24 - (nBytes % 4) * 8);
	              nBytes++;
	          }
	      }
	      return WordArray.create(words, nBytes);
	    }
	}());


	return CryptoJS.enc.Base64;

}));

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1), __webpack_require__(17), __webpack_require__(16));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./sha256", "./hmac"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	return CryptoJS.HmacSHA256;

}));

/***/ }),
/* 13 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else{if(typeof exports==="object"){module.exports=b();}else{a.X2JS=b();}}}(this,function(){return function(z){var t="1.2.0";z=z||{};i();u();function i(){if(z.escapeMode===undefined){z.escapeMode=true;}z.attributePrefix=z.attributePrefix||"_";z.arrayAccessForm=z.arrayAccessForm||"none";z.emptyNodeForm=z.emptyNodeForm||"text";if(z.enableToStringFunc===undefined){z.enableToStringFunc=true;}z.arrayAccessFormPaths=z.arrayAccessFormPaths||[];if(z.skipEmptyTextNodesForObj===undefined){z.skipEmptyTextNodesForObj=true;}if(z.stripWhitespaces===undefined){z.stripWhitespaces=true;}z.datetimeAccessFormPaths=z.datetimeAccessFormPaths||[];if(z.useDoubleQuotes===undefined){z.useDoubleQuotes=false;}z.xmlElementsFilter=z.xmlElementsFilter||[];z.jsonPropertiesFilter=z.jsonPropertiesFilter||[];if(z.keepCData===undefined){z.keepCData=false;}}var h={ELEMENT_NODE:1,TEXT_NODE:3,CDATA_SECTION_NODE:4,COMMENT_NODE:8,DOCUMENT_NODE:9};function u(){}function x(B){var C=B.localName;if(C==null){C=B.baseName;}if(C==null||C==""){C=B.nodeName;}return C;}function r(B){return B.prefix;}function s(B){if(typeof(B)=="string"){return B.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;");}else{return B;}}function k(B){return B.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&amp;/g,"&");}function w(C,F,D,E){var B=0;for(;B<C.length;B++){var G=C[B];if(typeof G==="string"){if(G==E){break;}}else{if(G instanceof RegExp){if(G.test(E)){break;}}else{if(typeof G==="function"){if(G(F,D,E)){break;}}}}}return B!=C.length;}function n(D,B,C){switch(z.arrayAccessForm){case"property":if(!(D[B] instanceof Array)){D[B+"_asArray"]=[D[B]];}else{D[B+"_asArray"]=D[B];}break;}if(!(D[B] instanceof Array)&&z.arrayAccessFormPaths.length>0){if(w(z.arrayAccessFormPaths,D,B,C)){D[B]=[D[B]];}}}function a(G){var E=G.split(/[-T:+Z]/g);var F=new Date(E[0],E[1]-1,E[2]);var D=E[5].split(".");F.setHours(E[3],E[4],D[0]);if(D.length>1){F.setMilliseconds(D[1]);}if(E[6]&&E[7]){var C=E[6]*60+Number(E[7]);var B=/\d\d-\d\d:\d\d$/.test(G)?"-":"+";C=0+(B=="-"?-1*C:C);F.setMinutes(F.getMinutes()-C-F.getTimezoneOffset());}else{if(G.indexOf("Z",G.length-1)!==-1){F=new Date(Date.UTC(F.getFullYear(),F.getMonth(),F.getDate(),F.getHours(),F.getMinutes(),F.getSeconds(),F.getMilliseconds()));}}return F;}function q(D,B,C){if(z.datetimeAccessFormPaths.length>0){var E=C.split(".#")[0];if(w(z.datetimeAccessFormPaths,D,B,E)){return a(D);}else{return D;}}else{return D;}}function b(E,C,B,D){if(C==h.ELEMENT_NODE&&z.xmlElementsFilter.length>0){return w(z.xmlElementsFilter,E,B,D);}else{return true;}}function A(D,J){if(D.nodeType==h.DOCUMENT_NODE){var K=new Object;var B=D.childNodes;for(var L=0;L<B.length;L++){var C=B.item(L);if(C.nodeType==h.ELEMENT_NODE){var I=x(C);K[I]=A(C,I);}}return K;}else{if(D.nodeType==h.ELEMENT_NODE){var K=new Object;K.__cnt=0;var B=D.childNodes;for(var L=0;L<B.length;L++){var C=B.item(L);var I=x(C);if(C.nodeType!=h.COMMENT_NODE){var H=J+"."+I;if(b(K,C.nodeType,I,H)){K.__cnt++;if(K[I]==null){K[I]=A(C,H);n(K,I,H);}else{if(K[I]!=null){if(!(K[I] instanceof Array)){K[I]=[K[I]];n(K,I,H);}}(K[I])[K[I].length]=A(C,H);}}}}for(var E=0;E<D.attributes.length;E++){var F=D.attributes.item(E);K.__cnt++;K[z.attributePrefix+F.name]=F.value;}var G=r(D);if(G!=null&&G!=""){K.__cnt++;K.__prefix=G;}if(K["#text"]!=null){K.__text=K["#text"];if(K.__text instanceof Array){K.__text=K.__text.join("\n");}if(z.stripWhitespaces){K.__text=K.__text.trim();}delete K["#text"];if(z.arrayAccessForm=="property"){delete K["#text_asArray"];}K.__text=q(K.__text,I,J+"."+I);}if(K["#cdata-section"]!=null){K.__cdata=K["#cdata-section"];delete K["#cdata-section"];if(z.arrayAccessForm=="property"){delete K["#cdata-section_asArray"];}}if(K.__cnt==0&&z.emptyNodeForm=="text"){K="";}else{if(K.__cnt==1&&K.__text!=null){K=K.__text;}else{if(K.__cnt==1&&K.__cdata!=null&&!z.keepCData){K=K.__cdata;}else{if(K.__cnt>1&&K.__text!=null&&z.skipEmptyTextNodesForObj){if((z.stripWhitespaces&&K.__text=="")||(K.__text.trim()=="")){delete K.__text;}}}}}delete K.__cnt;if(z.enableToStringFunc&&(K.__text!=null||K.__cdata!=null)){K.toString=function(){return(this.__text!=null?this.__text:"")+(this.__cdata!=null?this.__cdata:"");};}return K;}else{if(D.nodeType==h.TEXT_NODE||D.nodeType==h.CDATA_SECTION_NODE){return D.nodeValue;}}}}function o(I,F,H,C){var E="<"+((I!=null&&I.__prefix!=null)?(I.__prefix+":"):"")+F;if(H!=null){for(var G=0;G<H.length;G++){var D=H[G];var B=I[D];if(z.escapeMode){B=s(B);}E+=" "+D.substr(z.attributePrefix.length)+"=";if(z.useDoubleQuotes){E+='"'+B+'"';}else{E+="'"+B+"'";}}}if(!C){E+=">";}else{E+="/>";}return E;}function j(C,B){return"</"+(C.__prefix!=null?(C.__prefix+":"):"")+B+">";}function v(C,B){return C.indexOf(B,C.length-B.length)!==-1;}function y(C,B){if((z.arrayAccessForm=="property"&&v(B.toString(),("_asArray")))||B.toString().indexOf(z.attributePrefix)==0||B.toString().indexOf("__")==0||(C[B] instanceof Function)){return true;}else{return false;}}function m(D){var C=0;if(D instanceof Object){for(var B in D){if(y(D,B)){continue;}C++;}}return C;}function l(D,B,C){return z.jsonPropertiesFilter.length==0||C==""||w(z.jsonPropertiesFilter,D,B,C);}function c(D){var C=[];if(D instanceof Object){for(var B in D){if(B.toString().indexOf("__")==-1&&B.toString().indexOf(z.attributePrefix)==0){C.push(B);}}}return C;}function g(C){var B="";if(C.__cdata!=null){B+="<![CDATA["+C.__cdata+"]]>";}if(C.__text!=null){if(z.escapeMode){B+=s(C.__text);}else{B+=C.__text;}}return B;}function d(C){var B="";if(C instanceof Object){B+=g(C);}else{if(C!=null){if(z.escapeMode){B+=s(C);}else{B+=C;}}}return B;}function p(C,B){if(C===""){return B;}else{return C+"."+B;}}function f(D,G,F,E){var B="";if(D.length==0){B+=o(D,G,F,true);}else{for(var C=0;C<D.length;C++){B+=o(D[C],G,c(D[C]),false);B+=e(D[C],p(E,G));B+=j(D[C],G);}}return B;}function e(I,H){var B="";var F=m(I);if(F>0){for(var E in I){if(y(I,E)||(H!=""&&!l(I,E,p(H,E)))){continue;}var D=I[E];var G=c(D);if(D==null||D==undefined){B+=o(D,E,G,true);}else{if(D instanceof Object){if(D instanceof Array){B+=f(D,E,G,H);}else{if(D instanceof Date){B+=o(D,E,G,false);B+=D.toISOString();B+=j(D,E);}else{var C=m(D);if(C>0||D.__text!=null||D.__cdata!=null){B+=o(D,E,G,false);B+=e(D,p(H,E));B+=j(D,E);}else{B+=o(D,E,G,true);}}}}else{B+=o(D,E,G,false);B+=d(D);B+=j(D,E);}}}}B+=d(I);return B;}this.parseXmlString=function(D){var F=window.ActiveXObject||"ActiveXObject" in window;if(D===undefined){return null;}var E;if(window.DOMParser){var G=new window.DOMParser();var B=null;if(!F){try{B=G.parseFromString("INVALID","text/xml").getElementsByTagName("parsererror")[0].namespaceURI;}catch(C){B=null;}}try{E=G.parseFromString(D,"text/xml");if(B!=null&&E.getElementsByTagNameNS(B,"parsererror").length>0){E=null;}}catch(C){E=null;}}else{if(D.indexOf("<?")==0){D=D.substr(D.indexOf("?>")+2);}E=new ActiveXObject("Microsoft.XMLDOM");E.async="false";E.loadXML(D);}return E;};this.asArray=function(B){if(B===undefined||B==null){return[];}else{if(B instanceof Array){return B;}else{return[B];}}};this.toXmlDateTime=function(B){if(B instanceof Date){return B.toISOString();}else{if(typeof(B)==="number"){return new Date(B).toISOString();}else{return null;}}};this.asDateTime=function(B){if(typeof(B)=="string"){return a(B);}else{return B;}};this.xml2json=function(B){return A(B);};this.xml_str2json=function(B){var C=this.parseXmlString(B);if(C!=null){return this.xml2json(C);}else{return null;}};this.json2xml_str=function(B){return e(B,"");};this.json2xml=function(C){var B=this.json2xml_str(C);return this.parseXmlString(B);};this.getVersion=function(){return t;};};}));

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_whatwg_fetch__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_whatwg_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_x2js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_x2js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_x2js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_crypto_js_hmac_sha256__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_crypto_js_hmac_sha256___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_crypto_js_hmac_sha256__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_crypto_js_enc_base64__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_crypto_js_enc_base64___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_crypto_js_enc_base64__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_strophe__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_strophe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_strophe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__libs_strophe_ping__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__libs_strophe_ping___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__libs_strophe_ping__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__libs_strophe_ack__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__libs_strophe_ack___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__libs_strophe_ack__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__libs_strophe_iqpresence__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__libs_strophe_iqpresence___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__libs_strophe_iqpresence__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__libs_strophe_messaging__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__libs_strophe_messaging___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__libs_strophe_messaging__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__libs_strophe_presence__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__libs_strophe_presence___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__libs_strophe_presence__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__libs_strophe_room__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__libs_strophe_room___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__libs_strophe_room__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__libs_strophe_roster__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__libs_strophe_roster___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__libs_strophe_roster__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__libs_strophe_vcard__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__libs_strophe_vcard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__libs_strophe_vcard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__libs_strophe_webinar_iq__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__libs_strophe_webinar_iq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__libs_strophe_webinar_iq__);















var x2j = new __WEBPACK_IMPORTED_MODULE_1_x2js___default.a();

function formatVcard(data) {

  return data.map(function (e) {
    var v = x2j.xml_str2json(e.vcard).vCard;

    var organization = v.ORG.ORGUNIT.split(';');
    var o = {
      firstName: v.N.GIVEN,
      lastName: v.N.FAMILY,
      lastModify: e.lastModified,
      image: v.DESC,
      email: v.EMAIL.WORK || v.EMAIL.USERID,
      organization: { id: organization[0] || '', domain: organization[1] || '' },
      signature: v.SIG || '',
      phone: {
        sip: v.TEL ? 'SIP' in v.TEL ? v.TEL.SIP : '' : '',
        normal: v.TEL ? 'NUMBER' in v.TEL ? v.TEL.NUMBER : '' : '',
        work: v.TEL ? 'WORK' in v.TEL ? v.TEL.WORK.NUMBER : '' : '',
        home: v.TEL ? 'HOME' in v.TEL ? v.TEL.HOME.NUMBER : '' : ''
      }

    };
    return { jid: e.jid, vcard: o };
  });
}

function MicoServerFetch(data, token, secret, url) {
  var t1 = Date.parse(new Date());
  var message = 'timestamp=' + t1 + ':';
  var _data = JSON.stringify(data);
  message += _data;
  var hash = __WEBPACK_IMPORTED_MODULE_2_crypto_js_hmac_sha256___default()(message, secret);
  var hashInBase64 = __WEBPACK_IMPORTED_MODULE_3_crypto_js_enc_base64___default.a.stringify(hash);
  return new Promise(function (resovle, reject) {
    fetch(url, {
      method: 'post',
      headers: {
        'XMS-Ver': 1.0,
        'Content-Type': 'application/json',
        'Mode': 'no-cors',
        'Accept': 'application/json',
        'XMS-Hash': hashInBase64,
        'XMS-Token': token,
        'XMS-Timestamp': t1
      },
      body: _data
    }).catch(function (err) {
      reject(err);
    }).then(function (res) {
      if (res.status >= 200 && res.status < 300) {
        return res;
        resovle(res.json());
      } else {
        reject(res);
      }
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      resovle(res);
    });
  });
}

__WEBPACK_IMPORTED_MODULE_4_strophe__["Strophe"].xml2json = function (xmlDoc) {
  return x2j.xml2json(xmlDoc);
};
__WEBPACK_IMPORTED_MODULE_4_strophe__["Strophe"].json2xml = function (json) {
  var nodes = x2j.json2xml(json).childNodes;
  if (nodes.length) return nodes[0];
  return null;
};

var logType = ["warn", 'info', 'warn', 'error', 'error'];
__WEBPACK_IMPORTED_MODULE_4_strophe__["Strophe"].log = function (level, msg) {
  if (__WEBPACK_IMPORTED_MODULE_4_strophe__["Strophe"].showLog === false) return;
  console[logType[level]]('from XMPP:' + msg);
};

__WEBPACK_IMPORTED_MODULE_4_strophe__["Strophe"].queryVCard = function (url, token, secret, items) {
  // items = [{
  //   jid,
  //   lastModify
  // }]
  var all = {
    jids: []
  };
  for (var i in items) {
    var item = items[i];
    var lastModify = item.lastModify === null ? 0 : item.lastModify;
    all.jids.push({ jid: item.jid.split('@')[0], lastModify: lastModify });
  }
  return new Promise(function (resovle, reject) {
    MicoServerFetch(all, token, secret, url).then(function (res) {
      resovle(formatVcard(res));
    }).catch(function (err) {
      reject(err);
    });
  });
};
__WEBPACK_IMPORTED_MODULE_4_strophe__["Strophe"].querySession = function (url, token, secret, sessionid, timeframe, limit) {
  // sessionid = [
  //   jid
  // ]

  var _limit = limit || 1;
  var _timeframe = timeframe || Date.parse(new Date());
  var all = {
    limit: _limit,
    sessions: []
  };
  var _sessions = sessionid || [];
  if (_sessions.length === 0) {
    _sessions = [{
      all: { timeframe: ":" + _timeframe }
    }];
    all.sessions = _sessions;
    all.lastRead = true;
  } else {
    for (var i in _sessions) {
      var _o = { timeframe: ":" + _timeframe };
      var _id = _sessions[i].jid.split("@")[0];
      var _type = _sessions[i].jid.indexOf(__WEBPACK_IMPORTED_MODULE_4_strophe__["Strophe"].Config.ConferenceDomain) > -1 ? 'groupchat' : '';
      if (_type) _o.type = _type;
      var _s = {};
      _s[_id] = _o;
      all.sessions.push(_s);
    }
  }
  return new Promise(function (resovle, reject) {
    MicoServerFetch(all, token, secret, url).then(function (res) {
      resovle(res);
    }).catch(function (err) {
      reject(err);
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_4_strophe__["Strophe"]);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var C_enc = C.enc;
	    var Utf8 = C_enc.Utf8;
	    var C_algo = C.algo;

	    /**
	     * HMAC algorithm.
	     */
	    var HMAC = C_algo.HMAC = Base.extend({
	        /**
	         * Initializes a newly created HMAC.
	         *
	         * @param {Hasher} hasher The hash algorithm to use.
	         * @param {WordArray|string} key The secret key.
	         *
	         * @example
	         *
	         *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
	         */
	        init: function (hasher, key) {
	            // Init hasher
	            hasher = this._hasher = new hasher.init();

	            // Convert string to WordArray, else assume WordArray already
	            if (typeof key == 'string') {
	                key = Utf8.parse(key);
	            }

	            // Shortcuts
	            var hasherBlockSize = hasher.blockSize;
	            var hasherBlockSizeBytes = hasherBlockSize * 4;

	            // Allow arbitrary length keys
	            if (key.sigBytes > hasherBlockSizeBytes) {
	                key = hasher.finalize(key);
	            }

	            // Clamp excess bits
	            key.clamp();

	            // Clone key for inner and outer pads
	            var oKey = this._oKey = key.clone();
	            var iKey = this._iKey = key.clone();

	            // Shortcuts
	            var oKeyWords = oKey.words;
	            var iKeyWords = iKey.words;

	            // XOR keys with pad constants
	            for (var i = 0; i < hasherBlockSize; i++) {
	                oKeyWords[i] ^= 0x5c5c5c5c;
	                iKeyWords[i] ^= 0x36363636;
	            }
	            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this HMAC to its initial state.
	         *
	         * @example
	         *
	         *     hmacHasher.reset();
	         */
	        reset: function () {
	            // Shortcut
	            var hasher = this._hasher;

	            // Reset
	            hasher.reset();
	            hasher.update(this._iKey);
	        },

	        /**
	         * Updates this HMAC with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {HMAC} This HMAC instance.
	         *
	         * @example
	         *
	         *     hmacHasher.update('message');
	         *     hmacHasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            this._hasher.update(messageUpdate);

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the HMAC computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The HMAC.
	         *
	         * @example
	         *
	         *     var hmac = hmacHasher.finalize();
	         *     var hmac = hmacHasher.finalize('message');
	         *     var hmac = hmacHasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Shortcut
	            var hasher = this._hasher;

	            // Compute HMAC
	            var innerHash = hasher.finalize(messageUpdate);
	            hasher.reset();
	            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

	            return hmac;
	        }
	    });
	}());


}));

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Initialization and round constants tables
	    var H = [];
	    var K = [];

	    // Compute constants
	    (function () {
	        function isPrime(n) {
	            var sqrtN = Math.sqrt(n);
	            for (var factor = 2; factor <= sqrtN; factor++) {
	                if (!(n % factor)) {
	                    return false;
	                }
	            }

	            return true;
	        }

	        function getFractionalBits(n) {
	            return ((n - (n | 0)) * 0x100000000) | 0;
	        }

	        var n = 2;
	        var nPrime = 0;
	        while (nPrime < 64) {
	            if (isPrime(n)) {
	                if (nPrime < 8) {
	                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
	                }
	                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

	                nPrime++;
	            }

	            n++;
	        }
	    }());

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-256 hash algorithm.
	     */
	    var SHA256 = C_algo.SHA256 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init(H.slice(0));
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];
	            var f = H[5];
	            var g = H[6];
	            var h = H[7];

	            // Computation
	            for (var i = 0; i < 64; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var gamma0x = W[i - 15];
	                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
	                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
	                                   (gamma0x >>> 3);

	                    var gamma1x = W[i - 2];
	                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
	                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
	                                   (gamma1x >>> 10);

	                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
	                }

	                var ch  = (e & f) ^ (~e & g);
	                var maj = (a & b) ^ (a & c) ^ (b & c);

	                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
	                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

	                var t1 = h + sigma1 + ch + K[i] + W[i];
	                var t2 = sigma0 + maj;

	                h = g;
	                g = f;
	                f = e;
	                e = (d + t1) | 0;
	                d = c;
	                c = b;
	                b = a;
	                a = (t1 + t2) | 0;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	            H[5] = (H[5] + f) | 0;
	            H[6] = (H[6] + g) | 0;
	            H[7] = (H[7] + h) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA256('message');
	     *     var hash = CryptoJS.SHA256(wordArray);
	     */
	    C.SHA256 = Hasher._createHelper(SHA256);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA256(message, key);
	     */
	    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
	}(Math));


	return CryptoJS.SHA256;

}));

/***/ })
/******/ ]);
});
//# sourceMappingURL=zStrophe.js.map

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mitt__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_observe_Connection__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_observe_Presence__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_observe_Ping__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_observe_Message__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_observe_Roster__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_observe_Vcard__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_observe_Room__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_observe_Webinar__ = __webpack_require__(135);












var EventName = {
  POOL: 'POOL',
  WebinarQA: 'WebinarQA',
  OnlineMembers: 'OnlineMembers',
  GroupChange: 'GroupChange',
  RosterChange: 'RosterChange',
  MessageChange: 'Message',
  IqResultChange: 'Response',
  VcardChange: 'VcardChange',
  RoomChange: 'RoomChange'
};

var init = function init() {
  var server = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var emitter = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_mitt__["a" /* default */])();
  var connection = new __WEBPACK_IMPORTED_MODULE_3__app_observe_Connection__["a" /* default */](server);
  var presence = new __WEBPACK_IMPORTED_MODULE_4__app_observe_Presence__["a" /* default */](connection);
  var webinar = new __WEBPACK_IMPORTED_MODULE_10__app_observe_Webinar__["a" /* default */](connection);
  var roster = new __WEBPACK_IMPORTED_MODULE_7__app_observe_Roster__["a" /* default */](connection);
  var vcard = new __WEBPACK_IMPORTED_MODULE_8__app_observe_Vcard__["a" /* default */](connection);
  var room = new __WEBPACK_IMPORTED_MODULE_9__app_observe_Room__["a" /* default */](connection);
  var ping = new __WEBPACK_IMPORTED_MODULE_5__app_observe_Ping__["a" /* default */](connection);
  var message = new __WEBPACK_IMPORTED_MODULE_6__app_observe_Message__["a" /* default */](connection);

  // connected xmpp server
  var connectedXMPP = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx__["autorun"])(function () {
    var _connection = connection,
        connected = _connection.connected,
        jid = _connection.jid;

    if (!connected) {
      ping.stop();
    } else {
      ping.start();
      presence.change();
      if (/^wu_/i.test(jid)) {
        // webinar
        webinar.link();
        webinar.getMembers();
        webinar.lowerHand();
      } else {
        presence.query();
        roster.init();
        room.getRooms();
      }
      connectedXMPP();
    }
  });

  // watch online person
  var watchOnlinePerson = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx__["autorun"])(function () {
    var data = presence.members.slice();
    if (data.length > 0) {
      vcard.setCache(data);
      emitter.emit(EventName.OnlineMembers, {
        data: JSON.parse(JSON.stringify(data))
      });
    }
  });

  // watch message
  var watchMessage = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx__["autorun"])(function () {
    if (message.msg) {
      emitter.emit(EventName.MessageChange, {
        data: JSON.parse(JSON.stringify(message.msg))
      });
    }
    // console.log(message.msg);
  });

  // watch local groups info if need to update
  var watchGroupsNeedToUpdate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx__["autorun"])(function () {
    if (roster.rosterNeedToUpdate.length) {
      watchGroupsNeedToUpdate();
      roster.queryRoster(roster.rosterNeedToUpdate);
    }
  });

  // watch local groups info
  var watchGroups = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx__["autorun"])(function () {
    var data = roster.groups.slice();
    if (data.length > 0) {
      emitter.emit(EventName.GroupChange, {
        data: JSON.parse(JSON.stringify(data))
      });
    }
  });

  // watch local groups info
  var watchRosters = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx__["autorun"])(function () {
    if (roster.rosterGetEnd) watchRosters();
    var data = roster.members.slice();
    if (data.length > 0) {
      // if(roster.rosterGetEnd)console.log('roster:'+JSON.stringify(data))
      emitter.emit(EventName.RosterChange, {
        data: JSON.parse(JSON.stringify(data)),
        done: roster.rosterGetEnd
      });
    }
  });

  // watch roster change
  var watchRostersChange = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx__["autorun"])(function () {
    if (roster.rosterGetEnd) watchRostersChange();
    var data = roster.currentMembers.slice();
    if (data.length > 0) {
      // console.log(`Rosters:${data.length}`);
      presence.setRobotPresence(data);
      vcard.setCache(data);
    }
  });

  // watch vcard cache
  var watchVcardCache = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx__["autorun"])(function () {
    var data = vcard.cache.slice();
    console.log('cache change:' + data.length);
    if (data.length > 0) {
      vcard.getInfos(data);
    }
  });

  // watch vCard information
  var watchVcardInfo = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx__["autorun"])(function () {
    var data = vcard.infos.slice();
    if (data.length) {
      // console.log(vcard.infos.slice());
      emitter.emit(EventName.VcardChange, {
        data: JSON.parse(JSON.stringify(data))
      });
    }
  });

  // watch room change
  var watchRoomsChange = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx__["autorun"])(function () {
    var data = room.rooms.slice();
    if (data.length) {
      emitter.emit(EventName.RoomChange, {
        data: JSON.parse(JSON.stringify(data))
      });
    }
  });

  // watch webinar poll action
  var watchPollAction = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx__["autorun"])(function () {
    if (webinar.pollAction) {
      emitter.emit(EventName.POOL, {
        action: webinar.pollAction,
        data: webinar.pollData
      });
    }
  });

  // watch message has question
  var watchMSGHasQuestion = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx__["autorun"])(function () {
    var _message = message,
        q = _message.webinar_question;

    if (q) webinar.questionsChange(q);
  });

  // watch webinar question
  var watchWebinarQuestion = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx__["autorun"])(function () {
    if (webinar.questions.length) {
      var target = Object.assign({}, webinar.currentA);
      var questions = Object.assign([], webinar.questions.slice());
      emitter.emit(EventName.WebinarQA, {
        questions: questions,
        target: target
      });
    }
  });

  // watch iq result
  var watchIqResultChange = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx__["autorun"])(function () {
    if (connection.iqResult) emitter.emit(EventName.IqResultChange, {
      data: connection.iqResult
    });
  });

  // clear watch
  function clear() {
    connectedXMPP();
    watchPollAction();
    watchOnlinePerson();
    watchWebinarQuestion();
    watchMSGHasQuestion();
    watchGroupsNeedToUpdate();
    watchGroups();
    watchRosters();
    watchRostersChange();
    watchVcardCache();
    watchMessage();
    watchIqResultChange();
    watchRoomsChange();
    watchVcardInfo();
    ping.stop();
    emitter = null;
    connection = null;
    presence = null;
    ping = null;
    webinar = null;
    message = null;
    roster = null;
    vcard = null;
  }

  // watch the connect status
  var watchConnectStatus = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx__["autorun"])(function () {
    if (connection.connectType) {
      emitter.emit(connection.connectType);
      if (/ERROR|CONNFAIL|AUTHFAIL|DISCONNECTED/.test(connection.connectType)) {
        watchConnectStatus();
        clear();
      }
    }
  });

  return {
    server: {
      debug: function debug(view) {
        __WEBPACK_IMPORTED_MODULE_3__app_observe_Connection__["a" /* default */].debug(view);
      },
      connect: function connect(options) {
        connection.connect(options);
      },
      disconnect: function disconnect() {
        connection.disconnect();
      },
      changePresence: function changePresence(code) {
        presence.change(code);
      },
      lowerHand: function lowerHand(jidArray) {
        webinar.lowerHand(jidArray);
      },
      raiseHand: function raiseHand() {
        webinar.raiseHand();
      },
      sendAsk: function sendAsk(msg, anony) {
        webinar.sendASK(msg, anony);
      },
      sendAnswer: function sendAnswer(msg, id, view) {
        webinar.sendANSWER(msg, id, view);
      },
      sendWebinarMsg: function sendWebinarMsg(msg, senderName, receiverJID) {
        message.sendWebinarMsg(msg, senderName, receiverJID);
      },
      answerOnline: function answerOnline(id) {
        webinar.sendANSWERONLINE(id);
      },
      on: function on(type) {
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

        emitter.on(type, callback);
      },
      ZOOMROOMSInvite: function ZOOMROOMSInvite() {
        var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return message.ZOOMROOMSInvite(option);
      }
    }
  };
};

// init.showLog = (view) => {
//   Connection.debug(view);
// };

/* harmony default export */ __webpack_exports__["default"] = (init);

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var WebConfig = {
  /**
   * 登陆平台类型
   * ZoomChat_pc
   * ZoomChat_web
   * ZoomChat_mobile
   */
  // personal:{
  //     FirstName   :"",
  //     LastName    :"",
  //     FullName    :"",
  //     Emali       :"",
  //     jid         :"",
  //     img         :"",
  //     gid         :"",
  //     token       :"",//保存用户token
  // },

  // store:{
  //     groups  :[],//保存所有组
  //     roster  :[],//保存所有联系人
  //     rooms   :[],//保存MUC
  //     message :[] //保存所有消息
  // },
  option: {
    isuse: false,
    option: 1271,
    version: '4.0.23218.0215',
    secret: '', // 请求历史会话和vcard时做加密用
    xmppconnectstatus: {}, // 记录当前连接XMPP server状态
    device: {
      web: 'ZoomChat_web',
      pc: 'ZoomChat_pc',
      mobile: 'ZoomChat_mobile'
    }
  },
  server: {
    __XMPP__: 'wss://xmppdevweb.zoom.us:443/xmpp-websocket',
    __CONFERENCE__: 'conference.xmppdev.zoom.us',
    __SESSION__: 'https://xmppapi-dev.zoom.us/history/fetch',
    __VCARD__: 'https://xmppapi-dev.zoom.us/xms/vcard/fetch',
    __PING__: 'xmppdev.zoom.us'
  }

};

/* harmony default export */ __webpack_exports__["a"] = (WebConfig);

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Connection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zStrophe__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zStrophe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_zStrophe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_config__ = __webpack_require__(127);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _desc, _value, _class, _descriptor, _descriptor2;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}





var _config$server = __WEBPACK_IMPORTED_MODULE_2__libs_config__["a" /* default */].server,
    __XMPP__ = _config$server.__XMPP__,
    __PING__ = _config$server.__PING__,
    __SESSION__ = _config$server.__SESSION__,
    __VCARD__ = _config$server.__VCARD__,
    __CONFERENCE__ = _config$server.__CONFERENCE__,
    _config$option = __WEBPACK_IMPORTED_MODULE_2__libs_config__["a" /* default */].option,
    option = _config$option.option,
    version = _config$option.version,
    device = _config$option.device;
var Status = __WEBPACK_IMPORTED_MODULE_1_zStrophe___default.a.Status,
    xml2json = __WEBPACK_IMPORTED_MODULE_1_zStrophe___default.a.xml2json;


function setRole(role) {
  switch (Number(role)) {
    case 1:
      return 10; // host
    case 8:
      return 30; // attendee
    default:
      return 20; // pannelist
  }
}

var Connection = (_dec = __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"].ref, _dec2 = __WEBPACK_IMPORTED_MODULE_0_mobx__["action"].bound, _dec3 = __WEBPACK_IMPORTED_MODULE_0_mobx__["action"].bound, (_class = function () {
  function Connection() {
    var _this = this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$XMPPServer = _ref.XMPPServer,
        XMPPServer = _ref$XMPPServer === undefined ? __XMPP__ : _ref$XMPPServer,
        _ref$PINGServer = _ref.PINGServer,
        PINGServer = _ref$PINGServer === undefined ? __PING__ : _ref$PINGServer,
        _ref$SESSIONServer = _ref.SESSIONServer,
        SESSIONServer = _ref$SESSIONServer === undefined ? __SESSION__ : _ref$SESSIONServer,
        _ref$VCARDServer = _ref.VCARDServer,
        VCARDServer = _ref$VCARDServer === undefined ? __VCARD__ : _ref$VCARDServer,
        _ref$CONFERENCEServer = _ref.CONFERENCEServer,
        CONFERENCEServer = _ref$CONFERENCEServer === undefined ? __CONFERENCE__ : _ref$CONFERENCEServer;

    _classCallCheck(this, Connection);

    _initDefineProp(this, 'connectStatus', _descriptor, this);

    _initDefineProp(this, 'iqResult', _descriptor2, this);

    __WEBPACK_IMPORTED_MODULE_1_zStrophe___default.a.Config = { ConferenceDomain: CONFERENCEServer };
    this.XMPPServer = XMPPServer;
    this.PINGServer = PINGServer;
    this.SESSIONServer = SESSIONServer;
    this.VCARDServer = VCARDServer;
    this.CONFERENCEServer = CONFERENCEServer;
    this.groupIDs = '';
    this.firstName = '';
    this.lastName = '';
    this.picUrl = '';
    this.jid = '';
    this.token = '';
    this.secret = '';
    this.email = '';
    this.meetingNumber = '';
    this.node = '';
    this.role = '';
    this.displayName = '';
    this.Action = Object.assign({}, __WEBPACK_IMPORTED_MODULE_1_zStrophe___default.a.ACTION);
    this.Status = Object.keys(Status).map(function (e) {
      return { action: e, code: Status[e] };
    });
    this.Device = device;
    this.connection = new __WEBPACK_IMPORTED_MODULE_1_zStrophe___default.a.Connection(XMPPServer);
    // todo:delete
    this.connection.addHandler(function (iq) {
      _this.iqResultChange(xml2json(iq));
      return true;
    }, null, 'iq', 'result');
    // this.connection.disconnect('Initialization');
  }

  _createClass(Connection, [{
    key: 'iqResultChange',
    value: function iqResultChange(iq) {
      this.iqResult = iq;
    }
  }, {
    key: 'connect',
    value: function connect(options) {
      var _this2 = this;

      var jid = options.jid,
          lastName = options.lastName,
          firstName = options.firstName,
          email = options.email,
          picUrl = options.picUrl,
          token = options.xmppToken,
          groupIDs = options.groupids,
          meetingNumber = options.meetingNumber,
          node = options.node,
          role = options.role,
          displayName = options.displayName;

      this.jid = jid;
      this.token = token;
      this.email = email || '';
      this.picUrl = picUrl;
      this.lastName = lastName;
      this.firstName = firstName;
      this.groupIDs = groupIDs;
      this.meetingNumber = meetingNumber;
      this.node = node;
      this.role = setRole(role);
      this.displayName = displayName;
      __WEBPACK_IMPORTED_MODULE_1_zStrophe___default.a.Resource = /^wu_/i.test(jid) ? 'ZoomC' : 'ZoomChat_web';
      this.connection.connect(jid, token, option, groupIDs, version, function (status, condition) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_mobx__["runInAction"])('update xmpp server connection status', function () {
          _this2.connectStatus = status;
          if (status === 5) {
            _this2.secret = condition;
          }
        });
      });
    }
  }, {
    key: 'disconnect',
    value: function disconnect() {
      this.connection.disconnect('The connection will be disconnected!');
    }
  }, {
    key: 'connectType',
    get: function get() {
      var _this3 = this;

      var type = this.Status.find(function (_ref2) {
        var code = _ref2.code;
        return code === _this3.connectStatus;
      });
      if (type) return type.action;
      return '';
    }
  }, {
    key: 'connected',
    get: function get() {
      return this.connectStatus === 5;
    }
  }, {
    key: 'disconnected',
    get: function get() {
      return this.connectStatus === 6;
    }
  }], [{
    key: 'debug',
    value: function debug() {
      var view = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      __WEBPACK_IMPORTED_MODULE_1_zStrophe___default.a.showLog = view;
    }
  }]);

  return Connection;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'connectStatus', [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  enumerable: true,
  initializer: function initializer() {
    return -1;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'iqResult', [_dec], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _applyDecoratedDescriptor(_class.prototype, 'connectType', [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, 'connectType'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'connected', [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, 'connected'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'disconnected', [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, 'disconnected'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'iqResultChange', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'iqResultChange'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'connect', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'connect'), _class.prototype)), _class));


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _descriptor;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}



var Message = (_dec = __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"].ref, (_class = function () {
  function Message(Connection) {
    var _this = this;

    _classCallCheck(this, Message);

    _initDefineProp(this, 'msg', _descriptor, this);

    var connection = Connection.connection;

    this.conn = Connection;
    this.connection = connection;
    connection.Messaging.addMessageCB(function (message) {
      _this.getMessage(message);
    });
  }

  _createClass(Message, [{
    key: 'send',
    value: function send(data) {
      return this.connection.Messaging.sendMessage(data);
    }
  }, {
    key: 'sendAck',
    value: function sendAck(time, from) {
      // const _from = `${from.split('/')[0]}/ZoomChat_web`;
      this.connection.ackmessage.ack(time, from);
    }
    // read={
    //   from,
    //   group,
    //   items:[{time: zmext.t}]
    // }

  }, {
    key: 'sendRead',
    value: function sendRead(from, group, items) {
      var read = {
        from: from,
        group: group,
        items: items,
        action: 'reset'
      };

      this.connection.ackmessage.read(read);
    }
    // receiverJID only panelist to use

  }, {
    key: 'sendWebinarMsg',
    value: function sendWebinarMsg(msg, senderName, receiverJID) {
      // attendee chat (the sender is attendee): to panelist, through xmpp; to all, through meeting channel
      // panelist chat (the sender is panelist): to all/panelist group/panelist one-one, through meeting channel ; to attendee, through xmpp
      var message = {
        _from: this.conn.jid,
        _type: 'groupchat',
        _to: 'w_' + this.conn.meetingNumber + '@' + this.conn.CONFERENCEServer,
        body: {
          __text: msg
        },
        zmext: {
          from: {
            _p: this.conn.jid,
            _n: senderName
          },
          to: {},
          webinarchat: {
            _to: 'panelist',
            _senderjid: this.conn.jid

          },
          visible: {
            __text: false
          }
        }
      };
      if (Number(this.conn.role) !== 30) {
        message.zmext.webinarchat._to = 'individual';
        message.zmext.webinarchat._cc = 'panelist';
        message.zmext.webinarchat.jid = {
          __text: receiverJID
        };
      }
      this.send({
        message: message
      });
    }
  }, {
    key: 'getMessage',
    value: function getMessage(msg) {
      // console.log(msg);
      if (msg.zmext) {
        this.sendAck(msg.zmext._t, msg._from);
        // if (msg._from.split('/')[0] === msg._to.split('/')[0]) {
        //   console.log(msg._from, msg._type === 'chat' ? 0 : 1, [{ time: msg.zmext._t }])
        //   this.sendRead(msg._from, msg._type === 'chat' ? 0 : 1, [{ time: msg.zmext._t }])
        // }
      }
      this.msg = msg;
    }
  }, {
    key: 'ZOOMROOMSInvite',
    value: function ZOOMROOMSInvite() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$name = _ref.name,
          name = _ref$name === undefined ? '' : _ref$name,
          _ref$roomID = _ref.roomID,
          roomID = _ref$roomID === undefined ? '' : _ref$roomID,
          _ref$raw = _ref.raw,
          raw = _ref$raw === undefined ? '' : _ref$raw,
          _ref$deviceID = _ref.deviceID,
          deviceID = _ref$deviceID === undefined ? '' : _ref$deviceID,
          _ref$caption = _ref.caption,
          caption = _ref$caption === undefined ? '' : _ref$caption,
          _ref$jid = _ref.jid,
          jid = _ref$jid === undefined ? '' : _ref$jid;

      var data = {
        _to: jid,
        active: {
          _xmlns: 'http://jabber.org/protocol/chatstates'
        },
        zmext: {
          obj: {
            _f: 6
          },
          from: {
            _n: name,
            _e: roomID,
            _res: 'ZoomChat_web'
          },
          to: '',
          visible: false
        },
        zext_call: {
          action: 'invite',
          raw: raw,
          src_deviceid: deviceID,
          caption: caption,
          notify_other_devices: 0

        },
        zmtask: {
          _feature: 3
        }

      };
      return this.send({
        message: data
      });
    }
  }, {
    key: 'webinar_question',


    // catch webinar question
    get: function get() {
      var msg = this.msg;

      if (msg && msg.zmext && msg.zmext.qa) {
        return msg;
      }
      return null;
    }
  }]);

  return Message;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'msg', [_dec], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _applyDecoratedDescriptor(_class.prototype, 'webinar_question', [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, 'webinar_question'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getMessage', [__WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, 'getMessage'), _class.prototype)), _class));


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ping; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ping = function Ping(Connection) {
  var pingTimeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  var pingInterval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;

  _classCallCheck(this, Ping);

  var PINGServer = Connection.PINGServer,
      connection = Connection.connection;

  var timeID = null;
  var run = function run() {
    connection.ping.ping(PINGServer, null, null, pingTimeout);
    timeID = setTimeout(run, pingInterval);
  };
  this.start = function () {
    clearTimeout(timeID);
    run();
  };
  this.stop = function () {
    clearTimeout(timeID);
  };
};



/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Presence; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _desc, _value, _class, _descriptor;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}



var PresencePrivate = {
  Listener: [],
  Query: function Query() {}
};
var status = ['online', 'busy'];
var Presence = (_dec = __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"].shallow, _dec2 = __WEBPACK_IMPORTED_MODULE_0_mobx__["action"].bound, _dec3 = __WEBPACK_IMPORTED_MODULE_0_mobx__["action"].bound, _dec4 = __WEBPACK_IMPORTED_MODULE_0_mobx__["action"].bound, (_class = function () {
  function Presence(Connection) {
    var _this = this;

    _classCallCheck(this, Presence);

    _initDefineProp(this, 'members', _descriptor, this);

    var connection = Connection.connection,
        Device = Connection.Device;

    this.Device = Device;
    this.connection = connection;
    // query presence
    connection.iqpresence.addIQPresenceCB(function (items) {
      // console.log(items)
      var _arr = _this.members.slice();
      items.forEach(function (e) {
        // console.log(e)
        var jid = e.jid,
            res = e.res,
            mobile = e.mobile;

        var onlineType = 'available';
        var getDevice = [];
        if (res.length > 0) {
          getDevice.push(res[0].resource);
          onlineType = res[0].show === onlineType ? onlineType : 'dnd';
        }
        if (Number(mobile) === 1) {
          getDevice.push(_this.Device.mobile);
        }
        // todo:test repeat data
        // const index = this.members.findIndex(({ jid: _jid }) => _jid === jid);
        var index = _arr.findIndex(function (_ref) {
          var _jid = _ref.jid;
          return _jid === jid;
        });
        var presence = { jid: jid, device: getDevice, onlineType: onlineType, isonline: true };

        // if (index > -1) {
        //   this.members[index] = presence;
        // } else {
        //   this.members.push(presence)
        // }
        if (index > -1) {
          _arr[index] = presence;
        } else {
          _arr.push(presence);
        }
      });
      _this.members = _arr;
    });

    // listen to the presence radio
    connection.presence.addPresenceHandle(function (items) {
      // console.log(items)
      var _arr = _this.members.slice();
      var onlineType = ['available', 'dnd'];
      var device = [];
      var show = items.show,
          isonline = items.isonline,
          from = items.from;

      var arr = from.split('/');
      var jid = arr[0];
      if (isonline) {
        onlineType = show === onlineType[1] ? onlineType[1] : onlineType[0];
        device.push(arr[arr.length - 1]);
      } else {
        onlineType = '';
        device = [];
      }
      var presence = { jid: jid, device: device, onlineType: onlineType, isonline: isonline };
      var index = _arr.findIndex(function (_ref2) {
        var _jid = _ref2.jid;
        return _jid === jid;
      });
      if (index > -1) {
        if (!isonline) {
          _arr.splice(index, 1);
        } else {
          _arr[index] = presence;
        }
      } else if (isonline) _arr.push(presence);
      _this.members = _arr;
    });
  }

  _createClass(Presence, [{
    key: '_setPresenceByQuery',
    value: function _setPresenceByQuery(items) {
      var _this2 = this;

      // const presence = items.map((e) => {
      items.forEach(function (e) {
        var jid = e.jid,
            res = e.res,
            mobile = e.mobile;

        var onlineType = 'available';
        var getDevice = [];
        if (res.length > 0) {
          getDevice.push(res[0].resource);
          onlineType = res[0].show;
        }
        if (Number(mobile) === 1) {
          getDevice.push(_this2.Device.mobile);
        }
        var index = _this2.members.findIndex(function (_ref3) {
          var _jid = _ref3.jid;
          return _jid === jid;
        });
        var presence = { jid: jid, device: getDevice, onlineType: onlineType, isonline: true };
        if (index > -1) {
          _this2.members[index] = presence;
        } else {
          _this2.members.push(presence);
        }
      });
      // this.members.push(presence)
    }
  }, {
    key: '_setPresenceByRadio',
    value: function _setPresenceByRadio(items) {
      var onlineType = 'available';
      var device = [];
      var show = items.show,
          isonline = items.isonline,
          from = items.from;

      var arr = from.split('/');
      var jid = arr[0];
      if (isonline) {
        // 在线
        onlineType = show || onlineType;
        device.push(arr[arr.length - 1]);
      } else {
        onlineType = '';
        device = [];
      }
      var presence = { jid: jid, device: device, onlineType: onlineType, isonline: isonline };
      var index = this.members.findIndex(function (_ref4) {
        var _jid = _ref4.jid;
        return _jid === jid;
      });
      if (index > -1) {
        if (!isonline) {
          this.members.splice(index, 1);
        } else {
          this.members[index] = presence;
        }
      } else {
        this.members.push(presence);
      }
    }
  }, {
    key: 'setRobotPresence',
    value: function setRobotPresence(data) {
      var _this3 = this,
          _members;

      var _arr = [];
      data.forEach(function (_ref5) {
        var type = _ref5.type,
            jid = _ref5.jid;

        if (type === '1' && _this3.members.findIndex(function (e) {
          return e.jid === jid;
        }) === -1) {
          _arr.push({ jid: jid, onlineType: 'available', isonline: true, device: ['ZoomChat_robot'] });
        }
      });
      (_members = this.members).push.apply(_members, _arr);
    }
  }, {
    key: 'change',
    value: function change() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.connection.presence[status[type]]();
    }
  }, {
    key: 'query',
    value: function query() {
      this.connection.iqpresence.queryPresence();
    }
  }, {
    key: 'listen',
    value: function listen(callback) {
      PresencePrivate.Listener.push(callback.bind(this));
    }
  }]);

  return Presence;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'members', [_dec], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _applyDecoratedDescriptor(_class.prototype, '_setPresenceByQuery', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, '_setPresenceByQuery'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, '_setPresenceByRadio', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, '_setPresenceByRadio'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setRobotPresence', [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, 'setRobotPresence'), _class.prototype)), _class));


/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Room; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _desc, _value, _class, _descriptor;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}



var Room = (_dec = __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"].shallow, _dec2 = __WEBPACK_IMPORTED_MODULE_0_mobx__["action"].bound, (_class = function () {
  function Room(Connection) {
    var _this = this;

    _classCallCheck(this, Room);

    _initDefineProp(this, 'rooms', _descriptor, this);

    var Action = Connection.Action,
        connection = Connection.connection;

    this.Connection = Connection;
    connection.rooms.addRoomHandler(function (state, data) {
      if (Action.ROOMS_CALLBACK_STATE === state) {
        _this.getRoomsMembers(data);
      }
      if (Action.ROOMS_DETAIL_CALLBACK_STATE === state) {
        _this.setRoomsDetail(data);
      }
    });
  }

  _createClass(Room, [{
    key: 'getRooms',
    value: function getRooms() {
      var connection = this.Connection.connection;

      connection.rooms.rooms();
    }
  }, {
    key: 'getRoomsMembers',
    value: function getRoomsMembers(data) {
      var connection = this.Connection.connection;

      if (data.length) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;
            var node = item.node,
                version = item.version;
            // need to check local data version

            version = 1;
            connection.rooms.queryRoom(node, version);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }, {
    key: 'setRoomsDetail',
    value: function setRoomsDetail(data) {
      // console.log(data);
      this.rooms.push(data);
      // console.log(JSON.stringify(data));
    }
  }]);

  return Room;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'rooms', [_dec], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _applyDecoratedDescriptor(_class.prototype, 'setRoomsDetail', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'setRoomsDetail'), _class.prototype)), _class));


/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Roster; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}



var formatGroup = function formatGroup(groupIDs) {
  // define groups =  [
  //   {id:"default",version:-1,optione:0}
  // ]
  var groups = groupIDs.replace(/;$/, '').split(';');
  if (groups.indexOf('default') < 0) {
    groups.unshift('default');
  }
  return groups.map(function (e) {
    return { id: e, version: -1, optione: 0 };
  });
};

var DefaultGroupID = "default";

var Roster = (_dec = __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"].shallow, _dec2 = __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"].shallow, _dec3 = __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"].shallow, _dec4 = __WEBPACK_IMPORTED_MODULE_0_mobx__["action"].bound, _dec5 = __WEBPACK_IMPORTED_MODULE_0_mobx__["action"].bound, (_class = function () {
  function Roster(Connection) {
    var _this = this;

    _classCallCheck(this, Roster);

    this.groupsFromLocal = [];
    this.groupsFromServer = [];

    _initDefineProp(this, 'rosterGetEnd', _descriptor, this);

    _initDefineProp(this, 'currentMembers', _descriptor2, this);

    _initDefineProp(this, 'groups', _descriptor3, this);

    _initDefineProp(this, 'members', _descriptor4, this);

    var Action = Connection.Action,
        connection = Connection.connection;

    this.Connection = Connection;
    connection.roster.addRosterHandler(function (status, roster) {
      if (Action.ROSTER_VERSION_CB === status) {
        _this.getGroups(roster);
      } else if (Action.ROSTER_ITEMS_CB === status) {
        var chunk = roster.chunk,
            groups = roster.groups,
            group = roster.group;

        var gArray = [];
        if (group) gArray.push(group);
        if (groups) gArray.push.apply(gArray, _toConsumableArray(groups));
        _this.getRoster(gArray);
        _this.queryByChunk(chunk);
      }
    });
  }

  _createClass(Roster, [{
    key: 'init',
    value: function init() {
      var _Connection = this.Connection,
          jid = _Connection.jid,
          connection = _Connection.connection;
      // todo: get groups from DB

      this.groupsFromLocal = localStorage.getItem(jid) || [];
      connection.roster.queryGroupInfos();
    }
  }, {
    key: 'queryRoster',
    value: function queryRoster() {
      var groups = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var chunk = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var directory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

      if (groups.length === 0) return;
      var connection = this.Connection.connection;
      // groups format: zoom.us;4de7guZURBWjUhLyq--pAg;zm.4de7guZURBWjUhLyq--pAg;

      connection.roster.queryGroups({ groups: groups, chunk: chunk, directory: directory });
    }
  }, {
    key: 'queryByChunk',
    value: function queryByChunk(chunk) {
      var connection = this.Connection.connection;

      if (/:\d+$/.test(chunk)) {
        connection.roster.queryChunk(chunk);
      } else {
        this.rosterGetEnd = true;
        this.getRoster();
      };
    }
  }, {
    key: 'getRoster',
    value: function getRoster(group) {
      var _this2 = this;

      var members = this.members.slice();
      var _members = [];

      if (group && group.length) {
        var _group = group;
        if (Object.prototype.toString.call(_group) === '[object Object]') {
          _group = [group];
        }
        _group.forEach(function (item) {
          var total = item.total,
              items = item.items,
              name = item.name,
              _item$id = item.id,
              id = _item$id === undefined ? DefaultGroupID : _item$id,
              first = item.first;

          if (first) {
            if (!name) {
              if (items[0] && items[0].gname) {
                name = items[0].gname;
              } else {
                name = id;
              }
            }
            var index = _this2.groups.findIndex(function (_ref) {
              var _id = _ref.id;
              return id === _id;
            });
            _this2.groups[index] = _extends({ groupName: name, total: total }, _this2.groups[index]);
          }
          items.forEach(function (_ref2) {
            var firstName = _ref2.fname,
                lastName = _ref2.lname,
                groupName = _ref2.gname,
                jid = _ref2.jid,
                type = _ref2.type,
                cmd = _ref2.cmd;

            var e = members.find(function (_ref3) {
              var _jid = _ref3.jid;
              return _jid === jid;
            });
            // console.log(e)
            if (e) {
              e.groupName.push(groupName);
            } else {
              _members.push({ firstName: firstName, lastName: lastName, jid: jid, groupName: [groupName], type: type, cmd: cmd });
              members.push({ firstName: firstName, lastName: lastName, jid: jid, groupName: [groupName], type: type, cmd: cmd });
            }
          });

          // for (let person of items) {
          //   const { fname: firstName, lname: lastName, gname: groupName, jid, type, cmd } = person;
          //   const e = members.find(({ jid: _jid }) => _jid === jid);
          //   // console.log(e);
          //   if (e) {
          //     e.groupName.push(groupName)
          //   }else{
          //      _members.push({ firstName, lastName, jid, groupName: [groupName], type, cmd })
          //   }


          // }
        });
      }

      this.currentMembers = _members;
      this.members = members;
    }
  }, {
    key: 'getGroups',
    value: function getGroups(groupsFromServer) {
      var _groups;

      this.groupsFromServer = groupsFromServer;
      (_groups = this.groups).push.apply(_groups, _toConsumableArray(groupsFromServer.map(function (_ref4) {
        var id = _ref4.id,
            type = _ref4.type,
            version = _ref4.version;
        return { id: id, type: type, version: version };
      })));
    }
  }, {
    key: 'rosterNeedToUpdate',
    get: function get() {
      var _this3 = this;

      var arr = [];
      if (this.groups.length === 0) return arr;
      if (this.groupsFromLocal.length === 0) return this.groups.map(function (_ref5) {
        var id = _ref5.id;
        return { id: id, option: 0, version: -1 };
      });
      this.groups.forEach(function (_ref6) {
        var id = _ref6.id,
            version = _ref6.version;

        var item = _this3.groupsFromLocal.find(function (_ref7) {
          var _id = _ref7.id,
              _v = _ref7.version;
          return id === _id;
        });
        if (!item || _v !== version) {
          arr.push({ id: id, option: 0, version: -1 });
        }
      });
      // cache groups info
      // this.groupsFromLocal = this.groups.slice()
      // hack for

      return arr;
    }
  }]);

  return Roster;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'rosterGetEnd', [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'currentMembers', [_dec], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'groups', [_dec2], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'members', [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _applyDecoratedDescriptor(_class.prototype, 'getRoster', [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, 'getRoster'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getGroups', [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, 'getGroups'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'rosterNeedToUpdate', [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, 'rosterNeedToUpdate'), _class.prototype)), _class));


/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vcard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_zStrophe__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_zStrophe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_zStrophe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _desc, _value, _class, _descriptor, _descriptor2;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}




var Vcard = (_dec = __WEBPACK_IMPORTED_MODULE_1_mobx__["observable"].shallow, _dec2 = __WEBPACK_IMPORTED_MODULE_1_mobx__["observable"].shallow, _dec3 = __WEBPACK_IMPORTED_MODULE_1_mobx__["action"].bound, _dec4 = __WEBPACK_IMPORTED_MODULE_1_mobx__["action"].bound, (_class = function () {
  function Vcard(Connection) {
    _classCallCheck(this, Vcard);

    this.currentIndex = 0;
    this.infoCache = [];

    _initDefineProp(this, 'cache', _descriptor, this);

    _initDefineProp(this, 'infos', _descriptor2, this);

    this.Connection = Connection;
  }

  _createClass(Vcard, [{
    key: 'query',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(items) {
        var _Connection, VCARDServer, token, secret;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // items = [{
                //   jid,
                //   lastModify
                // }]
                _Connection = this.Connection, VCARDServer = _Connection.VCARDServer, token = _Connection.token, secret = _Connection.secret;

                if (!(token && secret)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt('return', __WEBPACK_IMPORTED_MODULE_0_zStrophe___default.a.queryVCard(VCARDServer, token, secret, items));

              case 3:
                return _context.abrupt('return', null);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function query(_x) {
        return _ref.apply(this, arguments);
      }

      return query;
    }()

    // [
    //   {jid,info}
    // ]

  }, {
    key: 'setCache',
    value: function setCache(data) {
      var _this = this;

      // Store roster for refreshing vcard
      // console.log(`vcard:${data.length}`);
      var arrForInfos = [];
      var arrForCaches = [];
      data.forEach(function (item) {
        var hasItem = _this.infoCache.slice().findIndex(function (_ref2) {
          var jid = _ref2.jid;
          return jid === item.jid;
        });
        if (hasItem < 0) {
          arrForCaches.push(item.jid);
          arrForInfos.push({ jid: item.jid, info: {} });
        }
      });
      console.log('cache:' + arrForCaches.length);
      setTimeout(function () {
        _this.cache = arrForCaches;
        _this.infoCache = [].concat(_toConsumableArray(_this.infoCache.slice()), arrForInfos);
      }, 0);
    }
  }, {
    key: 'getInfos',
    value: function () {
      var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(items) {
        var _arr, response;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // todo: cache vcard infos
                // console.log(`infos:${items.length}`);
                _arr = items.map(function (e) {
                  return { jid: e, lastModify: 0 };
                });
                _context2.prev = 1;
                _context2.next = 4;
                return this.query(_arr);

              case 4:
                response = _context2.sent;

                this.infos = [].concat(_toConsumableArray(this.infos.slice()), _toConsumableArray(response));
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2['catch'](1);

                console.log(_context2.t0);

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 8]]);
      }));

      function getInfos(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getInfos;
    }()
  }]);

  return Vcard;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'cache', [_dec], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'infos', [_dec2], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _applyDecoratedDescriptor(_class.prototype, 'setCache', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'setCache'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getInfos', [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, 'getInfos'), _class.prototype)), _class));


/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Webinar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}



var WebinarPrivate = {
  Listener: [],
  Query: function Query() {}
};
var infoParser = function infoParser(data) {
  var _data$_displayName = data._displayName,
      name = _data$_displayName === undefined ? '' : _data$_displayName,
      _data$_jid = data._jid,
      jid = _data$_jid === undefined ? '' : _data$_jid,
      _data$_node = data._node,
      node = _data$_node === undefined ? '' : _data$_node,
      _data$_value = data._value,
      value = _data$_value === undefined ? '' : _data$_value,
      _data$_role = data._role,
      role = _data$_role === undefined ? '' : _data$_role;

  var email = value.match(/:email=(.+)$/);
  email = email ? email[1] : '';
  return { name: name, email: email, jid: jid, node: node, role: role };
};

var Webinar = (_dec = __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"].ref, (_class = function () {
  function Webinar(Connection) {
    var _this = this;

    _classCallCheck(this, Webinar);

    this.currentQ = {};
    this.currentA = {};
    this.members = [];

    _initDefineProp(this, 'pollAction', _descriptor, this);

    _initDefineProp(this, 'questions', _descriptor2, this);

    _initDefineProp(this, 'raiseHanders', _descriptor3, this);

    var connection = Connection.connection,
        jid = Connection.jid,
        role = Connection.role,
        _Connection$Action = Connection.Action,
        WEBINAR_MEMBER_LIST = _Connection$Action.WEBINAR_MEMBER_LIST,
        WEBINAR_MEMBER_ADD = _Connection$Action.WEBINAR_MEMBER_ADD,
        WEBINAR_MEMBER_REMOVE = _Connection$Action.WEBINAR_MEMBER_REMOVE;
    // webinar query

    connection.webinar_iq.addWebinarIQHandler(function (type, items) {
      if (/lowerhand|raisehand/.test(type)) {
        _this.pollData = infoParser(items);
        _this.pollActionChange(type);
      } else {
        _this.membersChange(type, items);
      }
    });
    // message handler
    connection.Messaging.addPoolCB(function (items) {
      _this.pollData = items.data;
      _this.pollActionChange(items.action);
    });
    this.WEBINAR_MEMBER_LIST = WEBINAR_MEMBER_LIST;
    this.WEBINAR_MEMBER_ADD = WEBINAR_MEMBER_ADD;
    this.WEBINAR_MEMBER_REMOVE = WEBINAR_MEMBER_REMOVE;
    this.jid = jid;
    this.pollData = null;
    // webinar online
    this.link = function () {
      var meetingNumber = Connection.meetingNumber,
          node = Connection.node,
          displayName = Connection.displayName,
          jid = Connection.jid,
          role = Connection.role,
          email = Connection.email;

      if (!/^wu_/.test(jid)) return;
      if (!meetingNumber || !node || !displayName) {
        connection.disconnect('meetingNumber/node/displayName/role required!');
        return;
      }
      connection.presence.sendWebinarPresence(meetingNumber, node, role, displayName);
      // add self to members
      // { _displayName: name = '', _jid: jid = '', _node: node = '', _value: value = '', _role: role = '' }
      this.membersChange(WEBINAR_MEMBER_LIST, [{ _displayName: displayName, _node: node, _role: role, _jid: jid, _value: ':email=' + email }]);
    };
    // request webinar members
    this.getMembers = function () {
      connection.webinar_iq.queryMembers(Connection.meetingNumber);
    };

    var _sendHand = function _sendHand(hander) {
      var meetingNumber = Connection.meetingNumber,
          displayName = Connection.displayName,
          email = Connection.email;

      connection.webinar_iq.setValue(meetingNumber, hander, displayName, email);
    };
    this.raiseHand = function () {
      _sendHand('raisehand');
    };
    this.lowerHand = function (jidArray) {
      var jid = Connection.jid,
          meetingNumber = Connection.meetingNumber,
          CONFERENCEServer = Connection.CONFERENCEServer,
          role = Connection.role;

      if (!/^wu_/.test(jid)) return;
      if (role !== 10 || !jidArray) {
        _sendHand('lowerhand');
      } else {
        var message = {
          _from: jid,
          _to: 'w_' + meetingNumber + '@' + CONFERENCEServer,
          _type: 'groupchat',
          body: '',
          zmext: {
            _xmlns: 'zoom:iq:room',
            _action: 'webinar_putdownhands',
            from: '',
            to: '',
            jid: jidArray,
            visible: false
          }
        };
        connection.Messaging.sendMessage({ message: message });
      }
    };
    this.sendASK = function (msg) {
      var anony = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var jid = Connection.jid,
          meetingNumber = Connection.meetingNumber,
          CONFERENCEServer = Connection.CONFERENCEServer,
          displayName = Connection.displayName;

      if (!/^wu_/.test(jid)) return false;
      var message = {
        _from: jid,
        _to: 'w_' + meetingNumber + '@' + CONFERENCEServer,
        _type: 'groupchat',
        body: msg,
        zmext: {
          _qa: 'ask',
          from: {
            _from: jid,
            _n: displayName
          },
          to: '',
          qa: {
            _from: jid,
            _dispalyname: displayName,
            _anony: anony ? '1' : ''
          },
          visible: false
        }
      };
      connection.Messaging.sendMessage({ message: message });
    };
    // view message public or private
    var answer = function answer(questionid, qaAction, msg) {
      var type = ['public', 'private', 'living_start', 'living_end'];
      var jid = Connection.jid,
          meetingNumber = Connection.meetingNumber,
          CONFERENCEServer = Connection.CONFERENCEServer,
          displayName = Connection.displayName;

      var question = _this.questions.find(function (_ref) {
        var id = _ref.id;
        return id === questionid;
      });
      var qaJid = question.jid,
          name = question.name,
          anony = question.anony,
          text = question.text;

      var action = type[qaAction];
      return {
        _from: jid,
        _to: 'w_' + meetingNumber + '@' + CONFERENCEServer,
        _type: 'groupchat',
        body: msg || text,
        zmext: {
          _qa: action,
          from: {
            _p: jid,
            _n: displayName
          },
          to: '',
          qa: {
            _from: qaJid,
            _dispalyname: name,
            _id: questionid,
            _anony: anony ? '1' : '',
            __text: text
          },
          visible: false
        }
      };
    };
    this.sendANSWER = function (msg, questionid) {
      var view = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var jid = Connection.jid,
          role = Connection.role;

      if (!/^wu_/.test(jid) || role === 30) return false;
      var message = answer(questionid, view ? 0 : 1, msg);
      connection.Messaging.sendMessage({ message: message });
    };
    this.sendANSWERONLINE = function (questionid) {
      var jid = Connection.jid,
          role = Connection.role;

      if (!/^wu_/.test(jid) || role === 30) return false;
      var question = _this.questions.find(function (_ref2) {
        var id = _ref2.id;
        return id === questionid;
      });
      var index = question.answer.findIndex(function (_ref3) {
        var status = _ref3.status;
        return status === 0;
      });
      var type = index > -1 ? 3 : 2;
      var message = answer(questionid, type);
      connection.Messaging.sendMessage({ message: message });
    };
  }

  _createClass(Webinar, [{
    key: 'pollActionChange',
    value: function pollActionChange(pollAction) {

      if (this.pollAction === pollAction) this.pollAction = '';

      this.pollAction = pollAction;
    }
  }, {
    key: 'questionsChange',
    value: function questionsChange(msg) {
      var questions = this.questions ? this.questions.slice() : [];
      var fromJID = msg.zmext.from._from || msg.zmext.from._p;
      var toJID = msg.zmext.qa._from;
      var question = {};
      if (fromJID === toJID) {
        // it's a question
        question.id = msg._id;
        question.jid = toJID;
        question.name = msg.zmext.qa._dispalyname;
        question.text = msg.body;
        question.anony = msg.zmext.qa._anony === '1';
        question.time = msg.zmext._t;
        question.answer = [];
        questions.push(question);
      } else {
        // find exist question and push the answer
        var answer = {};
        // console.log(msg.zmext.qa._id)

        answer.id = msg._id;
        answer.jid = fromJID;
        answer.name = msg.zmext.from._n;
        answer.text = msg.body;
        answer.private = msg.zmext._qa === 'private';
        answer.time = msg.zmext._t;

        // 0 wait to answer
        // 1 answered
        switch (msg.zmext._qa) {
          case 'living_start':
            answer.status = 0;break;
          case 'living_end':
            answer.status = 1;break;
          default:
            answer.status = -1;
        }
        question = questions.find(function (_ref4) {
          var id = _ref4.id;
          return id === msg.zmext.qa._id;
        });

        if (!question) {
          // dont exist question, need to push this question
          question = {
            id: msg.zmext.qa._id,
            jid: toJID,
            name: msg.zmext.qa._dispalyname,
            text: msg.zmext.qa.__text,
            anony: msg.zmext.qa._anony || false,
            time: msg.zmext.qa._time,
            answer: []
          };
          questions.push(question);
        }
        var index = question.answer.findIndex(function (_ref5) {
          var status = _ref5.status;
          return status === 0;
        });
        if (index > -1) {
          question.answer[index] = answer;
        } else {
          question.answer.push(answer);
        }
      }
      this.questions = questions;
      this.currentA = question;
    }
  }, {
    key: 'membersChange',
    value: function membersChange(type, items) {
      var myItems = [];
      if (items) {
        if (Object.prototype.toString.call(items).indexOf('Array') < 0) {
          myItems.push(items);
        } else {
          myItems.push.apply(myItems, _toConsumableArray(items));
        }
      }
      if (myItems.length > 0) {
        var getItems = myItems.map(function (e) {
          return infoParser(e);
        });
        var members = this.members.slice();
        if (type === this.WEBINAR_MEMBER_REMOVE) {
          var index = members.findIndex(function (e) {
            return e.jid === getItems[0].jid;
          });
          members.splice(index, 1);
        } else {
          members.push.apply(members, _toConsumableArray(getItems));
        }
        this.members = members;
        this.pollData = this.members;
        this.pollActionChange('memberChange');
      }
    }
  }, {
    key: 'query',
    value: function query(callback) {
      WebinarPrivate.Query = callback;
    }
  }]);

  return Webinar;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'pollAction', [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'questions', [_dec], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'raiseHanders', [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _applyDecoratedDescriptor(_class.prototype, 'pollActionChange', [__WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, 'pollActionChange'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'questionsChange', [__WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, 'questionsChange'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'membersChange', [__WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, 'membersChange'), _class.prototype)), _class));


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

__webpack_require__(336);

__webpack_require__(338);

__webpack_require__(137);

if (global._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
global._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(90)))

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(144);
module.exports = __webpack_require__(22).RegExp.escape;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var isArray = __webpack_require__(54);
var SPECIES = __webpack_require__(5)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = __webpack_require__(3);
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(1);
var toPrimitive = __webpack_require__(26);
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(37);
var gOPS = __webpack_require__(58);
var pIE = __webpack_require__(49);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = function (regExp, replace) {
  var replacer = replace === Object(replace) ? function (part) {
    return replace[part];
  } : replace;
  return function (it) {
    return String(it).replace(regExp, replacer);
  };
};


/***/ }),
/* 143 */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/benjamingr/RexExp.escape
var $export = __webpack_require__(0);
var $re = __webpack_require__(142)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export($export.S, 'RegExp', { escape: function escape(it) { return $re(it); } });


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(0);

$export($export.P, 'Array', { copyWithin: __webpack_require__(92) });

__webpack_require__(29)('copyWithin');


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $every = __webpack_require__(21)(4);

$export($export.P + $export.F * !__webpack_require__(20)([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(0);

$export($export.P, 'Array', { fill: __webpack_require__(64) });

__webpack_require__(29)('fill');


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $filter = __webpack_require__(21)(2);

$export($export.P + $export.F * !__webpack_require__(20)([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(0);
var $find = __webpack_require__(21)(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(29)(KEY);


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(0);
var $find = __webpack_require__(21)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(29)(KEY);


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $forEach = __webpack_require__(21)(0);
var STRICT = __webpack_require__(20)([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(19);
var $export = __webpack_require__(0);
var toObject = __webpack_require__(9);
var call = __webpack_require__(103);
var isArrayIter = __webpack_require__(72);
var toLength = __webpack_require__(8);
var createProperty = __webpack_require__(66);
var getIterFn = __webpack_require__(88);

$export($export.S + $export.F * !__webpack_require__(56)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $indexOf = __webpack_require__(50)(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(20)($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(0);

$export($export.S, 'Array', { isArray: __webpack_require__(54) });


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.13 Array.prototype.join(separator)
var $export = __webpack_require__(0);
var toIObject = __webpack_require__(17);
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__(48) != Object || !__webpack_require__(20)(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toIObject = __webpack_require__(17);
var toInteger = __webpack_require__(25);
var toLength = __webpack_require__(8);
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(20)($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $map = __webpack_require__(21)(1);

$export($export.P + $export.F * !__webpack_require__(20)([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var createProperty = __webpack_require__(66);

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(3)(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $reduce = __webpack_require__(94);

$export($export.P + $export.F * !__webpack_require__(20)([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $reduce = __webpack_require__(94);

$export($export.P + $export.F * !__webpack_require__(20)([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var html = __webpack_require__(70);
var cof = __webpack_require__(18);
var toAbsoluteIndex = __webpack_require__(41);
var toLength = __webpack_require__(8);
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(3)(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $some = __webpack_require__(21)(3);

$export($export.P + $export.F * !__webpack_require__(20)([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var aFunction = __webpack_require__(10);
var toObject = __webpack_require__(9);
var fails = __webpack_require__(3);
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(20)($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(40)('Array');


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(0);

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(0);
var toISOString = __webpack_require__(139);

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(26);

$export($export.P + $export.F * __webpack_require__(3)(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var TO_PRIMITIVE = __webpack_require__(5)('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) __webpack_require__(12)(proto, TO_PRIMITIVE, __webpack_require__(140));


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(13)(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(0);

$export($export.P, 'Function', { bind: __webpack_require__(95) });


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(4);
var getPrototypeOf = __webpack_require__(16);
var HAS_INSTANCE = __webpack_require__(5)('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(7).f(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7).f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(6) && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(0);
var log1p = __webpack_require__(106);
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(0);
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(0);
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(0);
var sign = __webpack_require__(76);

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(0);
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(0);
var $expm1 = __webpack_require__(75);

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', { fround: __webpack_require__(105) });


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(0);
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(0);
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__(3)(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', { log1p: __webpack_require__(106) });


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', { sign: __webpack_require__(76) });


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(0);
var expm1 = __webpack_require__(75);
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__(3)(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(0);
var expm1 = __webpack_require__(75);
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var has = __webpack_require__(11);
var cof = __webpack_require__(18);
var inheritIfRequired = __webpack_require__(71);
var toPrimitive = __webpack_require__(26);
var fails = __webpack_require__(3);
var gOPN = __webpack_require__(36).f;
var gOPD = __webpack_require__(15).f;
var dP = __webpack_require__(7).f;
var $trim = __webpack_require__(45).trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(35)(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(6) ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(13)(global, NUMBER, $Number);
}


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(0);

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(0);
var _isFinite = __webpack_require__(2).isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(0);

$export($export.S, 'Number', { isInteger: __webpack_require__(102) });


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(0);

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(0);
var isInteger = __webpack_require__(102);
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(0);

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(0);

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $parseFloat = __webpack_require__(114);
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $parseInt = __webpack_require__(115);
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toInteger = __webpack_require__(25);
var aNumberValue = __webpack_require__(91);
var repeat = __webpack_require__(83);
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !__webpack_require__(3)(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $fails = __webpack_require__(3);
var aNumberValue = __webpack_require__(91);
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(0);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(108) });


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(35) });


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(6), 'Object', { defineProperties: __webpack_require__(109) });


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(6), 'Object', { defineProperty: __webpack_require__(7).f });


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(4);
var meta = __webpack_require__(30).onFreeze;

__webpack_require__(24)('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(17);
var $getOwnPropertyDescriptor = __webpack_require__(15).f;

__webpack_require__(24)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(24)('getOwnPropertyNames', function () {
  return __webpack_require__(110).f;
});


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(9);
var $getPrototypeOf = __webpack_require__(16);

__webpack_require__(24)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(4);

__webpack_require__(24)('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(4);

__webpack_require__(24)('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(4);

__webpack_require__(24)('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(0);
$export($export.S, 'Object', { is: __webpack_require__(143) });


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(9);
var $keys = __webpack_require__(37);

__webpack_require__(24)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(4);
var meta = __webpack_require__(30).onFreeze;

__webpack_require__(24)('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(4);
var meta = __webpack_require__(30).onFreeze;

__webpack_require__(24)('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(0);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(79).set });


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(47);
var test = {};
test[__webpack_require__(5)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(13)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $parseFloat = __webpack_require__(114);
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $parseInt = __webpack_require__(115);
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(34);
var global = __webpack_require__(2);
var ctx = __webpack_require__(19);
var classof = __webpack_require__(47);
var $export = __webpack_require__(0);
var isObject = __webpack_require__(4);
var aFunction = __webpack_require__(10);
var anInstance = __webpack_require__(32);
var forOf = __webpack_require__(33);
var speciesConstructor = __webpack_require__(62);
var task = __webpack_require__(85).set;
var microtask = __webpack_require__(77)();
var newPromiseCapabilityModule = __webpack_require__(78);
var perform = __webpack_require__(116);
var promiseResolve = __webpack_require__(117);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(5)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  if (promise._h == 1) return false;
  var chain = promise._a || promise._c;
  var i = 0;
  var reaction;
  while (chain.length > i) {
    reaction = chain[i++];
    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
  } return true;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(39)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(44)($Promise, PROMISE);
__webpack_require__(40)(PROMISE);
Wrapper = __webpack_require__(22)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(56)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(0);
var aFunction = __webpack_require__(10);
var anObject = __webpack_require__(1);
var rApply = (__webpack_require__(2).Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(3)(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(0);
var create = __webpack_require__(35);
var aFunction = __webpack_require__(10);
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);
var fails = __webpack_require__(3);
var bind = __webpack_require__(95);
var rConstruct = (__webpack_require__(2).Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(7);
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var toPrimitive = __webpack_require__(26);

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(3)(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(0);
var gOPD = __webpack_require__(15).f;
var anObject = __webpack_require__(1);

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(73)(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(15);
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(0);
var getProto = __webpack_require__(16);
var anObject = __webpack_require__(1);

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(15);
var getPrototypeOf = __webpack_require__(16);
var has = __webpack_require__(11);
var $export = __webpack_require__(0);
var isObject = __webpack_require__(4);
var anObject = __webpack_require__(1);

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(0);

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(0);

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(113) });


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(0);
var setProto = __webpack_require__(79);

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(7);
var gOPD = __webpack_require__(15);
var getPrototypeOf = __webpack_require__(16);
var has = __webpack_require__(11);
var $export = __webpack_require__(0);
var createDesc = __webpack_require__(38);
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
    existingDescriptor.value = V;
    dP.f(receiver, propertyKey, existingDescriptor);
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var inheritIfRequired = __webpack_require__(71);
var dP = __webpack_require__(7).f;
var gOPN = __webpack_require__(36).f;
var isRegExp = __webpack_require__(55);
var $flags = __webpack_require__(53);
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(6) && (!CORRECT_NEW || __webpack_require__(3)(function () {
  re2[__webpack_require__(5)('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(13)(global, 'RegExp', $RegExp);
}

__webpack_require__(40)('RegExp');


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__(52)('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__(52)('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

// @@search logic
__webpack_require__(52)('search', 1, function (defined, SEARCH, $search) {
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__(52)('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = __webpack_require__(55);
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(122);
var anObject = __webpack_require__(1);
var $flags = __webpack_require__(53);
var DESCRIPTORS = __webpack_require__(6);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(13)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(3)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(14)('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.3 String.prototype.big()
__webpack_require__(14)('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.4 String.prototype.blink()
__webpack_require__(14)('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__(14)('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $at = __webpack_require__(81)(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__(0);
var toLength = __webpack_require__(8);
var context = __webpack_require__(82);
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(69)(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__(14)('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(14)('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(14)('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var toAbsoluteIndex = __webpack_require__(41);
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(0);
var context = __webpack_require__(82);
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(69)(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.9 String.prototype.italics()
__webpack_require__(14)('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(81)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(74)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(14)('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var toIObject = __webpack_require__(17);
var toLength = __webpack_require__(8);

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(83)
});


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__(14)('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(0);
var toLength = __webpack_require__(8);
var context = __webpack_require__(82);
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(69)(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.12 String.prototype.strike()
__webpack_require__(14)('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(14)('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.14 String.prototype.sup()
__webpack_require__(14)('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(45)('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(2);
var has = __webpack_require__(11);
var DESCRIPTORS = __webpack_require__(6);
var $export = __webpack_require__(0);
var redefine = __webpack_require__(13);
var META = __webpack_require__(30).KEY;
var $fails = __webpack_require__(3);
var shared = __webpack_require__(61);
var setToStringTag = __webpack_require__(44);
var uid = __webpack_require__(42);
var wks = __webpack_require__(5);
var wksExt = __webpack_require__(120);
var wksDefine = __webpack_require__(87);
var enumKeys = __webpack_require__(141);
var isArray = __webpack_require__(54);
var anObject = __webpack_require__(1);
var toIObject = __webpack_require__(17);
var toPrimitive = __webpack_require__(26);
var createDesc = __webpack_require__(38);
var _create = __webpack_require__(35);
var gOPNExt = __webpack_require__(110);
var $GOPD = __webpack_require__(15);
var $DP = __webpack_require__(7);
var $keys = __webpack_require__(37);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(36).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(49).f = $propertyIsEnumerable;
  __webpack_require__(58).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(34)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(12)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $typed = __webpack_require__(63);
var buffer = __webpack_require__(86);
var anObject = __webpack_require__(1);
var toAbsoluteIndex = __webpack_require__(41);
var toLength = __webpack_require__(8);
var isObject = __webpack_require__(4);
var ArrayBuffer = __webpack_require__(2).ArrayBuffer;
var speciesConstructor = __webpack_require__(62);
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * __webpack_require__(3)(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var final = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < final) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

__webpack_require__(40)(ARRAY_BUFFER);


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
$export($export.G + $export.W + $export.F * !__webpack_require__(63).ABV, {
  DataView: __webpack_require__(86).DataView
});


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28)('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28)('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28)('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28)('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28)('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28)('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28)('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28)('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28)('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var weak = __webpack_require__(98);
var validate = __webpack_require__(46);
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
__webpack_require__(51)(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = __webpack_require__(0);
var flattenIntoArray = __webpack_require__(99);
var toObject = __webpack_require__(9);
var toLength = __webpack_require__(8);
var aFunction = __webpack_require__(10);
var arraySpeciesCreate = __webpack_require__(65);

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

__webpack_require__(29)('flatMap');


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
var $export = __webpack_require__(0);
var flattenIntoArray = __webpack_require__(99);
var toObject = __webpack_require__(9);
var toLength = __webpack_require__(8);
var toInteger = __webpack_require__(25);
var arraySpeciesCreate = __webpack_require__(65);

$export($export.P, 'Array', {
  flatten: function flatten(/* depthArg = 1 */) {
    var depthArg = arguments[0];
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});

__webpack_require__(29)('flatten');


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(0);
var $includes = __webpack_require__(50)(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(29)('includes');


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var $export = __webpack_require__(0);
var microtask = __webpack_require__(77)();
var process = __webpack_require__(2).process;
var isNode = __webpack_require__(18)(process) == 'process';

$export($export.G, {
  asap: function asap(fn) {
    var domain = isNode && process.domain;
    microtask(domain ? domain.bind(fn) : fn);
  }
});


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/ljharb/proposal-is-error
var $export = __webpack_require__(0);
var cof = __webpack_require__(18);

$export($export.S, 'Error', {
  isError: function isError(it) {
    return cof(it) === 'Error';
  }
});


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(0);

$export($export.G, { global: __webpack_require__(2) });


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(59)('Map');


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(60)('Map');


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(0);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(97)('Map') });


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  clamp: function clamp(x, lower, upper) {
    return Math.min(upper, Math.max(lower, x));
  }
});


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);

$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);
var RAD_PER_DEG = 180 / Math.PI;

$export($export.S, 'Math', {
  degrees: function degrees(radians) {
    return radians * RAD_PER_DEG;
  }
});


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);
var scale = __webpack_require__(107);
var fround = __webpack_require__(105);

$export($export.S, 'Math', {
  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
    return fround(scale(x, inLow, inHigh, outLow, outHigh));
  }
});


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  imulh: function imulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >> 16;
    var v1 = $v >> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);

$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);
var DEG_PER_RAD = Math.PI / 180;

$export($export.S, 'Math', {
  radians: function radians(degrees) {
    return degrees * DEG_PER_RAD;
  }
});


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);

$export($export.S, 'Math', { scale: __webpack_require__(107) });


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

// http://jfbastien.github.io/papers/Math.signbit.html
var $export = __webpack_require__(0);

$export($export.S, 'Math', { signbit: function signbit(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
} });


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  umulh: function umulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >>> 16;
    var v1 = $v >>> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(9);
var aFunction = __webpack_require__(10);
var $defineProperty = __webpack_require__(7);

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
__webpack_require__(6) && $export($export.P + __webpack_require__(57), 'Object', {
  __defineGetter__: function __defineGetter__(P, getter) {
    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
  }
});


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(9);
var aFunction = __webpack_require__(10);
var $defineProperty = __webpack_require__(7);

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
__webpack_require__(6) && $export($export.P + __webpack_require__(57), 'Object', {
  __defineSetter__: function __defineSetter__(P, setter) {
    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
  }
});


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(0);
var $entries = __webpack_require__(112)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(0);
var ownKeys = __webpack_require__(113);
var toIObject = __webpack_require__(17);
var gOPD = __webpack_require__(15);
var createProperty = __webpack_require__(66);

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(26);
var getPrototypeOf = __webpack_require__(16);
var getOwnPropertyDescriptor = __webpack_require__(15).f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
__webpack_require__(6) && $export($export.P + __webpack_require__(57), 'Object', {
  __lookupGetter__: function __lookupGetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
    } while (O = getPrototypeOf(O));
  }
});


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(26);
var getPrototypeOf = __webpack_require__(16);
var getOwnPropertyDescriptor = __webpack_require__(15).f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
__webpack_require__(6) && $export($export.P + __webpack_require__(57), 'Object', {
  __lookupSetter__: function __lookupSetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
    } while (O = getPrototypeOf(O));
  }
});


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(0);
var $values = __webpack_require__(112)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/zenparsing/es-observable
var $export = __webpack_require__(0);
var global = __webpack_require__(2);
var core = __webpack_require__(22);
var microtask = __webpack_require__(77)();
var OBSERVABLE = __webpack_require__(5)('observable');
var aFunction = __webpack_require__(10);
var anObject = __webpack_require__(1);
var anInstance = __webpack_require__(32);
var redefineAll = __webpack_require__(39);
var hide = __webpack_require__(12);
var forOf = __webpack_require__(33);
var RETURN = forOf.RETURN;

var getMethod = function (fn) {
  return fn == null ? undefined : aFunction(fn);
};

var cleanupSubscription = function (subscription) {
  var cleanup = subscription._c;
  if (cleanup) {
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function (subscription) {
  return subscription._o === undefined;
};

var closeSubscription = function (subscription) {
  if (!subscriptionClosed(subscription)) {
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function (observer, subscriber) {
  anObject(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup = subscriber(observer);
    var subscription = cleanup;
    if (cleanup != null) {
      if (typeof cleanup.unsubscribe === 'function') cleanup = function () { subscription.unsubscribe(); };
      else aFunction(cleanup);
      this._c = cleanup;
    }
  } catch (e) {
    observer.error(e);
    return;
  } if (subscriptionClosed(this)) cleanupSubscription(this);
};

Subscription.prototype = redefineAll({}, {
  unsubscribe: function unsubscribe() { closeSubscription(this); }
});

var SubscriptionObserver = function (subscription) {
  this._s = subscription;
};

SubscriptionObserver.prototype = redefineAll({}, {
  next: function next(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if (m) return m.call(observer, value);
      } catch (e) {
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value) {
    var subscription = this._s;
    if (subscriptionClosed(subscription)) throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if (!m) throw value;
      value = m.call(observer, value);
    } catch (e) {
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    } cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch (e) {
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      } cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber) {
  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
};

redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer) {
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn) {
    var that = this;
    return new (core.Promise || global.Promise)(function (resolve, reject) {
      aFunction(fn);
      var subscription = that.subscribe({
        next: function (value) {
          try {
            return fn(value);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

redefineAll($Observable, {
  from: function from(x) {
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(anObject(x)[OBSERVABLE]);
    if (method) {
      var observable = anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function (observer) {
        return observable.subscribe(observer);
      });
    }
    return new C(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          try {
            if (forOf(x, false, function (it) {
              observer.next(it);
              if (done) return RETURN;
            }) === RETURN) return;
          } catch (e) {
            if (done) throw e;
            observer.error(e);
            return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  },
  of: function of() {
    for (var i = 0, l = arguments.length, items = Array(l); i < l;) items[i] = arguments[i++];
    return new (typeof this === 'function' ? this : $Observable)(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          for (var j = 0; j < items.length; ++j) {
            observer.next(items[j]);
            if (done) return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  }
});

hide($Observable.prototype, OBSERVABLE, function () { return this; });

$export($export.G, { Observable: $Observable });

__webpack_require__(40)('Observable');


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(0);
var core = __webpack_require__(22);
var global = __webpack_require__(2);
var speciesConstructor = __webpack_require__(62);
var promiseResolve = __webpack_require__(117);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(0);
var newPromiseCapability = __webpack_require__(78);
var perform = __webpack_require__(116);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(27);
var anObject = __webpack_require__(1);
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(27);
var anObject = __webpack_require__(1);
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(123);
var from = __webpack_require__(93);
var metadata = __webpack_require__(27);
var anObject = __webpack_require__(1);
var getPrototypeOf = __webpack_require__(16);
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(27);
var anObject = __webpack_require__(1);
var getPrototypeOf = __webpack_require__(16);
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(27);
var anObject = __webpack_require__(1);
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(27);
var anObject = __webpack_require__(1);
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(27);
var anObject = __webpack_require__(1);
var getPrototypeOf = __webpack_require__(16);
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(27);
var anObject = __webpack_require__(1);
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

var $metadata = __webpack_require__(27);
var anObject = __webpack_require__(1);
var aFunction = __webpack_require__(10);
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(59)('Set');


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(60)('Set');


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(0);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(97)('Set') });


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/mathiasbynens/String.prototype.at
var $export = __webpack_require__(0);
var $at = __webpack_require__(81)(true);

$export($export.P, 'String', {
  at: function at(pos) {
    return $at(this, pos);
  }
});


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/String.prototype.matchAll/
var $export = __webpack_require__(0);
var defined = __webpack_require__(23);
var toLength = __webpack_require__(8);
var isRegExp = __webpack_require__(55);
var getFlags = __webpack_require__(53);
var RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function (regexp, string) {
  this._r = regexp;
  this._s = string;
};

__webpack_require__(73)($RegExpStringIterator, 'RegExp String', function next() {
  var match = this._r.exec(this._s);
  return { value: match, done: match === null };
});

$export($export.P, 'String', {
  matchAll: function matchAll(regexp) {
    defined(this);
    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
    var S = String(this);
    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(0);
var $pad = __webpack_require__(118);

$export($export.P, 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(0);
var $pad = __webpack_require__(118);

$export($export.P, 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(45)('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(45)('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(87)('asyncIterator');


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(87)('observable');


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(0);

$export($export.S, 'System', { global: __webpack_require__(2) });


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
__webpack_require__(59)('WeakMap');


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
__webpack_require__(60)('WeakMap');


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
__webpack_require__(59)('WeakSet');


/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
__webpack_require__(60)('WeakSet');


/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(89);
var getKeys = __webpack_require__(37);
var redefine = __webpack_require__(13);
var global = __webpack_require__(2);
var hide = __webpack_require__(12);
var Iterators = __webpack_require__(43);
var wks = __webpack_require__(5);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $task = __webpack_require__(85);
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});


/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(2);
var $export = __webpack_require__(0);
var navigator = global.navigator;
var slice = [].slice;
var MSIE = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});


/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(264);
__webpack_require__(203);
__webpack_require__(205);
__webpack_require__(204);
__webpack_require__(207);
__webpack_require__(209);
__webpack_require__(214);
__webpack_require__(208);
__webpack_require__(206);
__webpack_require__(216);
__webpack_require__(215);
__webpack_require__(211);
__webpack_require__(212);
__webpack_require__(210);
__webpack_require__(202);
__webpack_require__(213);
__webpack_require__(217);
__webpack_require__(218);
__webpack_require__(170);
__webpack_require__(172);
__webpack_require__(171);
__webpack_require__(220);
__webpack_require__(219);
__webpack_require__(190);
__webpack_require__(200);
__webpack_require__(201);
__webpack_require__(191);
__webpack_require__(192);
__webpack_require__(193);
__webpack_require__(194);
__webpack_require__(195);
__webpack_require__(196);
__webpack_require__(197);
__webpack_require__(198);
__webpack_require__(199);
__webpack_require__(173);
__webpack_require__(174);
__webpack_require__(175);
__webpack_require__(176);
__webpack_require__(177);
__webpack_require__(178);
__webpack_require__(179);
__webpack_require__(180);
__webpack_require__(181);
__webpack_require__(182);
__webpack_require__(183);
__webpack_require__(184);
__webpack_require__(185);
__webpack_require__(186);
__webpack_require__(187);
__webpack_require__(188);
__webpack_require__(189);
__webpack_require__(251);
__webpack_require__(256);
__webpack_require__(263);
__webpack_require__(254);
__webpack_require__(246);
__webpack_require__(247);
__webpack_require__(252);
__webpack_require__(257);
__webpack_require__(259);
__webpack_require__(242);
__webpack_require__(243);
__webpack_require__(244);
__webpack_require__(245);
__webpack_require__(248);
__webpack_require__(249);
__webpack_require__(250);
__webpack_require__(253);
__webpack_require__(255);
__webpack_require__(258);
__webpack_require__(260);
__webpack_require__(261);
__webpack_require__(262);
__webpack_require__(165);
__webpack_require__(167);
__webpack_require__(166);
__webpack_require__(169);
__webpack_require__(168);
__webpack_require__(154);
__webpack_require__(152);
__webpack_require__(158);
__webpack_require__(155);
__webpack_require__(161);
__webpack_require__(163);
__webpack_require__(151);
__webpack_require__(157);
__webpack_require__(148);
__webpack_require__(162);
__webpack_require__(146);
__webpack_require__(160);
__webpack_require__(159);
__webpack_require__(153);
__webpack_require__(156);
__webpack_require__(145);
__webpack_require__(147);
__webpack_require__(150);
__webpack_require__(149);
__webpack_require__(164);
__webpack_require__(89);
__webpack_require__(236);
__webpack_require__(241);
__webpack_require__(122);
__webpack_require__(237);
__webpack_require__(238);
__webpack_require__(239);
__webpack_require__(240);
__webpack_require__(221);
__webpack_require__(121);
__webpack_require__(123);
__webpack_require__(124);
__webpack_require__(276);
__webpack_require__(265);
__webpack_require__(266);
__webpack_require__(271);
__webpack_require__(274);
__webpack_require__(275);
__webpack_require__(269);
__webpack_require__(272);
__webpack_require__(270);
__webpack_require__(273);
__webpack_require__(267);
__webpack_require__(268);
__webpack_require__(222);
__webpack_require__(223);
__webpack_require__(224);
__webpack_require__(225);
__webpack_require__(226);
__webpack_require__(229);
__webpack_require__(227);
__webpack_require__(228);
__webpack_require__(230);
__webpack_require__(231);
__webpack_require__(232);
__webpack_require__(233);
__webpack_require__(235);
__webpack_require__(234);
__webpack_require__(279);
__webpack_require__(277);
__webpack_require__(278);
__webpack_require__(320);
__webpack_require__(323);
__webpack_require__(322);
__webpack_require__(324);
__webpack_require__(325);
__webpack_require__(321);
__webpack_require__(326);
__webpack_require__(327);
__webpack_require__(301);
__webpack_require__(304);
__webpack_require__(300);
__webpack_require__(298);
__webpack_require__(299);
__webpack_require__(302);
__webpack_require__(303);
__webpack_require__(285);
__webpack_require__(319);
__webpack_require__(284);
__webpack_require__(318);
__webpack_require__(330);
__webpack_require__(332);
__webpack_require__(283);
__webpack_require__(317);
__webpack_require__(329);
__webpack_require__(331);
__webpack_require__(282);
__webpack_require__(328);
__webpack_require__(281);
__webpack_require__(286);
__webpack_require__(287);
__webpack_require__(288);
__webpack_require__(289);
__webpack_require__(290);
__webpack_require__(292);
__webpack_require__(291);
__webpack_require__(293);
__webpack_require__(294);
__webpack_require__(295);
__webpack_require__(297);
__webpack_require__(296);
__webpack_require__(306);
__webpack_require__(307);
__webpack_require__(308);
__webpack_require__(309);
__webpack_require__(311);
__webpack_require__(310);
__webpack_require__(313);
__webpack_require__(312);
__webpack_require__(314);
__webpack_require__(315);
__webpack_require__(316);
__webpack_require__(280);
__webpack_require__(305);
__webpack_require__(335);
__webpack_require__(334);
__webpack_require__(333);
module.exports = __webpack_require__(22);


/***/ }),
/* 337 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
// An array of all currently registered event handlers for a type
                                            
// A map of event types and their corresponding event handlers.
                        
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberof mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).map(function (handler) { handler(evt); });
			(all['*'] || []).map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ __webpack_exports__["a"] = (mitt);
//# sourceMappingURL=mitt.es.js.map


/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(90)))

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(126);


/***/ })
/******/ ]);
});
//# sourceMappingURL=webim.js.map