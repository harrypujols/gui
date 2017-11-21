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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process, global, setImmediate) {/*!
 * Vue.js v2.5.7
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: process.env.NODE_ENV !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */


// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (process.env.NODE_ENV !== 'production') {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.functionalOptions = undefined;
  this.functionalScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode, deep) {
  var componentOptions = vnode.componentOptions;
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.isCloned = true;
  if (deep) {
    if (vnode.children) {
      cloned.children = cloneVNodes(vnode.children, true);
    }
    if (componentOptions && componentOptions.children) {
      componentOptions.children = cloneVNodes(componentOptions.children, true);
    }
  }
  return cloned
}

function cloneVNodes (vnodes, deep) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i], deep);
  }
  return res
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (process.env.NODE_ENV !== 'production') {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    process.env.NODE_ENV !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (process.env.NODE_ENV !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && process.env.NODE_ENV !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
      );
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (process.env.NODE_ENV !== 'production') {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (process.env.NODE_ENV !== 'production') {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (process.env.NODE_ENV !== 'production' && inject) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (process.env.NODE_ENV !== 'production') {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  if (process.env.NODE_ENV !== 'production') {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (process.env.NODE_ENV !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (process.env.NODE_ENV !== 'production') {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both micro and macro tasks.
// In < 2.4 we used micro tasks everywhere, but there are some scenarios where
// micro tasks have too high a priority and fires in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using macro tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use micro task by default, but expose a way to force macro task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) Task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine MicroTask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a Task instead of a MicroTask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

if (process.env.NODE_ENV !== 'production') {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (process.env.NODE_ENV !== 'production') {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      process.env.NODE_ENV !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (process.env.NODE_ENV !== 'production') {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      process.env.NODE_ENV !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                process.env.NODE_ENV !== 'production'
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (process.env.NODE_ENV !== 'production') {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
      data && data.slot != null
    ) {
      var name = child.data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (process.env.NODE_ENV !== 'production') {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  vm._watcher = new Watcher(vm, updateComponent, noop);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = (parentVnode.data && parentVnode.data.attrs) || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (process.env.NODE_ENV !== 'production') {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = process.env.NODE_ENV !== 'production'
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      process.env.NODE_ENV !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    process.env.NODE_ENV !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (process.env.NODE_ENV !== 'production') {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      process.env.NODE_ENV !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (process.env.NODE_ENV !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (process.env.NODE_ENV !== 'production') {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if (process.env.NODE_ENV !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (process.env.NODE_ENV !== 'production') {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  keyOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(keyOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (process.env.NODE_ENV !== 'production') {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    observerState.shouldConvert = false;
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive(vm, key, result[key]);
      }
    });
    observerState.shouldConvert = true;
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
        ? Reflect.ownKeys(inject).filter(function (key) {
          /* istanbul ignore next */
          return Object.getOwnPropertyDescriptor(inject, key).enumerable
        })
        : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (process.env.NODE_ENV !== 'production') {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (process.env.NODE_ENV !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if (process.env.NODE_ENV !== 'production' && slotNodes._rendered) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias,
  eventKeyName
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (keyCodes) {
    if (Array.isArray(keyCodes)) {
      return keyCodes.indexOf(eventKeyCode) === -1
    } else {
      return keyCodes !== eventKeyCode
    }
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor,
  isOnce
) {
  // render fns generated by compiler < 2.5.4 does not provide v-once
  // information to runtime so be conservative
  var isOldVersion = arguments.length < 3;
  // if a static tree is generated by v-once, it is cached on the instance;
  // otherwise it is purely static and can be cached on the shared options
  // across all instances.
  var renderFns = this.$options.staticRenderFns;
  var cached = isOldVersion || isOnce
    ? (this._staticTrees || (this._staticTrees = []))
    : (renderFns.cached || (renderFns.cached = []));
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = renderFns[index].call(this._renderProxy, null, this);
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm = Object.create(parent);
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode) {
        vnode.functionalScopeId = options._scopeId;
        vnode.functionalContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    vnode.functionalContext = contextVm;
    vnode.functionalOptions = options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }

  return vnode
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    process.env.NODE_ENV !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (process.env.NODE_ENV !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    warn(
      'Avoid using non-primitive value as key, ' +
      'use string/number value instead.',
      context
    );
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force))) {
        applyNS(child, ns, force);
      }
    }
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (process.env.NODE_ENV !== 'production') {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // if the parent didn't update, the slot nodes will be the ones from
      // last render. They need to be cloned to ensure "freshness" for this render.
      for (var key in vm.$slots) {
        var slot = vm.$slots[key];
        // _rendered is a flag added by renderSlot, but may not be present
        // if the slot is passed from manually written render functions
        if (slot._rendered || (slot[0] && slot[0].elm)) {
          vm.$slots[key] = cloneVNodes(slot, true /* deep */);
        }
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$1 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$1++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$3 (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue$3)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production') {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characters and the hyphen, ' +
          'and must start with a letter.'
        );
      }
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production') {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && cached$$1 !== current) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

Vue$3.version = '2.5.7';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      process.env.NODE_ENV !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (process.env.NODE_ENV !== 'production') {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.functionalScopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setAttribute(vnode.elm, i, '');
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.functionalContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
        } else {
          vnodeToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && !vnodeToMove) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (process.env.NODE_ENV !== 'production') {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (process.env.NODE_ENV !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (process.env.NODE_ENV !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (process.env.NODE_ENV !== 'production') {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE9 || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    process.env.NODE_ENV !== 'production' && warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (name === 'click') {
    if (modifiers.right) {
      name = 'contextmenu';
      delete modifiers.right;
    } else if (modifiers.middle) {
      name = 'mouseup';
    }
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = { value: value };
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;



function parseModel (val) {
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (process.env.NODE_ENV !== 'production') {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (process.env.NODE_ENV !== 'production') {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" + (
        trueValueBinding === 'true'
          ? (":(" + value + ")")
          : (":_q(" + value + "," + trueValueBinding + ")")
      )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + value + "=$$a.concat([$$v]))}" +
      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  if (process.env.NODE_ENV !== 'production') {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    if (value$1) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally'
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isDirty(elm, checkVal) ||
    isInputChanged(elm, checkVal)
  ))
}

function isDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isInputChanged (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers) && modifiers.number) {
    return toNumber(value) !== toNumber(newVal)
  }
  if (isDef(modifiers) && modifiers.trim) {
    return value.trim() !== newVal.trim()
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    process.env.NODE_ENV !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (process.env.NODE_ENV !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (process.env.NODE_ENV !== 'production') {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
Vue$3.nextTick(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if (process.env.NODE_ENV !== 'production' && isChrome) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if (process.env.NODE_ENV !== 'production' &&
    config.productionTip !== false &&
    inBrowser && typeof console !== 'undefined'
  ) {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});

function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push(JSON.stringify(text.slice(lastIndex)));
  }
  return tokens.join('+')
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (process.env.NODE_ENV !== 'production' && staticClass) {
    var expression = parseText(staticClass, options.delimiters);
    if (expression) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      var expression = parseText(staticStyle, options.delimiters);
      if (expression) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
var comment = /^<!--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!--([\s\S]*?)-->/g, '$1')
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (process.env.NODE_ENV !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (process.env.NODE_ENV !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function endPre (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        process.env.NODE_ENV !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        if (process.env.NODE_ENV !== 'production') {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (process.env.NODE_ENV !== 'production') {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        endPre(element);
      }
      // apply post-transforms
      for (var i$1 = 0; i$1 < postTransforms.length; i$1++) {
        postTransforms[i$1](element, options);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      endPre(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (process.env.NODE_ENV !== 'production') {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var expression;
        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: expression,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if (process.env.NODE_ENV !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) {
      process.env.NODE_ENV !== 'production' && warn$2(
        ("Invalid v-for expression: " + exp)
      );
      return
    }
    el.for = inMatch[2].trim();
    var alias = inMatch[1].trim();
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      el.alias = iteratorMatch[1].trim();
      el.iterator1 = iteratorMatch[2].trim();
      if (iteratorMatch[3]) {
        el.iterator2 = iteratorMatch[3].trim();
      }
    } else {
      el.alias = alias;
    }
  }
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (process.env.NODE_ENV !== 'production') {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (process.env.NODE_ENV !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (process.env.NODE_ENV !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          true
        );
      }
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if (process.env.NODE_ENV !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (process.env.NODE_ENV !== 'production') {
        var expression = parseText(value, delimiters);
        if (expression) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      process.env.NODE_ENV !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

/**
 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (map['v-model'] && (map['v-bind:type'] || map[':type'])) {
      var typeBinding = getBindingAttr(el, 'type');
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

var model$2 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$2
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    return isMethodPath || isFunctionExpression
      ? handler.value
      : ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? handler.value + '($event)'
      : isFunctionExpression
        ? ("(" + (handler.value) + ")($event)")
        : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var code = keyCodes[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(code)) + "," +
    "$event.key)"
  )
}

/*  */

function on (el, dir) {
  if (process.env.NODE_ENV !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state, once$$1) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + "," + (el.staticInFor ? 'true' : 'false') + "," + (once$$1 ? 'true' : 'false') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      process.env.NODE_ENV !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state, true)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (process.env.NODE_ENV !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if (process.env.NODE_ENV !== 'production' && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (
  ident,
  type,
  text,
  errors
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident));
    } catch (e) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (process.env.NODE_ENV !== 'production') {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (process.env.NODE_ENV !== 'production') {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  optimize(ast, options);
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue$3.prototype.$mount;
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    process.env.NODE_ENV !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (process.env.NODE_ENV !== 'production') {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue$3.compile = compileToFunctions;

/* harmony default export */ __webpack_exports__["default"] = (Vue$3);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2), __webpack_require__(3), __webpack_require__(15).setImmediate))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "data:application/vnd.ms-fontobject;base64,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"

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (file) {
  return "static/svg/" + file + ".svg";
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _styles = __webpack_require__(6);

var _styles2 = _interopRequireDefault(_styles);

var _draggable = __webpack_require__(14);

var _draggable2 = _interopRequireDefault(_draggable);

var _include = __webpack_require__(18);

var _include2 = _interopRequireDefault(_include);

var _data = __webpack_require__(19);

var _data2 = _interopRequireDefault(_data);

var _components = __webpack_require__(21);

var _components2 = _interopRequireDefault(_components);

var _toggle = __webpack_require__(22);

var _toggle2 = _interopRequireDefault(_toggle);

var _clear = __webpack_require__(23);

var _clear2 = _interopRequireDefault(_clear);

var _svg = __webpack_require__(4);

var _svg2 = _interopRequireDefault(_svg);

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
  el: '#stage',

  data: _data2.default,

  components: _components2.default,

  methods: {
    toggle: _toggle2.default,
    clear: _clear2.default,
    svg: _svg2.default
  }
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(12)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./styles.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in IE and iOS.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  line-height: 1.15;\n  /* 2 */\n  -ms-text-size-adjust: 100%;\n  /* 3 */\n  -webkit-text-size-adjust: 100%;\n  /* 3 */ }\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n * 2. Add the correct display in IE.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  /* 1 */\n  display: block; }\n\n/**\n * Add the correct display in IE 9-.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; }\n\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\n * Add the correct display in IE 10-.\n * 1. Add the correct display in IE.\n */\ntemplate,\n[hidden] {\n  display: none; }\n\n/* Links\n   ========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */ }\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\na:active,\na:hover {\n  outline-width: 0; }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit; }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/**\n * Add the correct background and color in IE 9-.\n */\nmark {\n  background-color: #ff0;\n  color: #000; }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none; }\n\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct margin in IE 8.\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change font properties to `inherit` in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font: inherit;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Restore the font weight unset by the previous rule.\n */\noptgroup {\n  font-weight: bold; }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */ }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n@font-face {\n  font-family: 'pix Chicago';\n  src: url(" + __webpack_require__(1) + ");\n  src: url(" + __webpack_require__(1) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(9) + ") format(\"woff\"), url(" + __webpack_require__(10) + ") format(\"truetype\"), url(" + __webpack_require__(11) + "#pixChicago) format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n@keyframes blinking {\n  from {\n    color: black; }\n  to {\n    color: transparent; } }\n\n.blink {\n  animation: blinking 1.2s infinite;\n  animation-timing-function: cubic-bezier(1, 0, 0, 1); }\n\n.dragging, .dragging * {\n  cursor: move; }\n\nhtml {\n  font-size: 16px; }\n\nbody {\n  font-family: \"VT323\", monospace;\n  font-size: 1.375rem;\n  color: black;\n  background-color: white;\n  margin: 0;\n  padding: 0; }\n\nsvg {\n  max-width: 100%;\n  height: auto; }\n\npolygon {\n  fill: white; }\n\npath {\n  fill: black; }\n\n.bg1 {\n  background-image: linear-gradient(45deg, black 50%, transparent 50%), linear-gradient(-45deg, black 50%, transparent 50%), linear-gradient(45deg, transparent 50%, black 50%), linear-gradient(-45deg, transparent 50%, black 50%);\n  background-size: 2px 2px;\n  background-position: 0 0, 1px 0, 1px -1px, 0px 1px; }\n\n.screen {\n  height: calc(100vh - 25px);\n  display: grid;\n  grid-template-columns: repeat(12, 1fr); }\n\n.center {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.clearfix {\n  *zoom: 1; }\n  .clearfix:before, .clearfix:after {\n    content: \"\";\n    display: table; }\n  .clearfix:after {\n    clear: both; }\n\n.top-bar {\n  background-color: white;\n  z-index: 100;\n  border-bottom: 2px solid black;\n  font-family: \"pix Chicago\";\n  font-size: 0.875rem; }\n\n.menu {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 10px 0; }\n  .menu li {\n    margin: 0 0.625rem; }\n  .menu a {\n    color: inherit;\n    text-decoration: none; }\n\n.has-dropdown {\n  position: relative;\n  cursor: pointer; }\n\n.dropdown {\n  padding: 0.3125rem 0;\n  margin: 10px 0 0 0;\n  list-style: none;\n  position: absolute;\n  top: 100%;\n  left: -0.625rem;\n  background-color: white;\n  border: 2px solid black;\n  display: none; }\n  .dropdown li {\n    padding: 0.625rem 0.9375rem;\n    margin: 0;\n    white-space: nowrap; }\n    .dropdown li:hover {\n      background-color: black;\n      color: white; }\n\n.is-active .dropdown {\n  display: block; }\n\n.icons {\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  grid-column-start: 12; }\n  .icons .icon-element {\n    margin-bottom: 30px; }\n\n.trash {\n  margin-top: auto; }\n\n.icon-element {\n  max-width: 100%;\n  text-align: center;\n  line-height: 1.25rem; }\n  .icon-element svg {\n    width: 72px;\n    height: 72px; }\n  .icon-element p {\n    margin: 0;\n    line-height: 1.1875rem;\n    background-color: white;\n    text-align: center;\n    white-space: nowrap; }\n\n.window {\n  position: absolute;\n  top: calc(50% - 130px);\n  left: 0.9375rem;\n  width: 31.25rem;\n  max-width: calc(100% - 30px);\n  background-color: white;\n  border: 2px solid black; }\n  @media (min-width: 769px) {\n    .window {\n      left: calc(50% - 250px); } }\n  .window .icon-element {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    justify-content: flex-end; }\n  .window svg {\n    height: 50px; }\n\n.window-header {\n  text-align: center;\n  border-bottom: 2px solid black;\n  padding: 5px; }\n\n.stripes {\n  background: repeating-linear-gradient(0deg, black, black 2px, white 0, white 6px); }\n\n.inner-window {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-areas: \"a b c\"; }\n\n.window-title {\n  margin: 0;\n  padding: 10px 15px;\n  display: inline-block;\n  background-color: white;\n  font-family: \"pix Chicago\";\n  font-size: 0.75rem;\n  font-weight: normal;\n  text-transform: capitalize;\n  grid-area: b; }\n\n.window-close {\n  grid-area: c;\n  text-align: right; }\n\n.window-body {\n  min-height: 260px;\n  padding: 5px; }\n\n.close-button {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border-radius: 0;\n  background-color: white;\n  border: 1px solid black;\n  padding: 6px 0; }\n\n.window-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr); }\n\n.grid-item {\n  padding: 1rem; }\n", ""]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "data:application/font-woff;base64,d09GRgABAAAAABzgAA0AAAAASggAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAcxAAAABoAAAAcReATI0dERUYAABykAAAAHQAAAB4AJwDpT1MvMgAAAZwAAAA5AAAAVltgdcRjbWFwAAACrAAAAh8AAAKMOGUXS2dhc3AAABycAAAACAAAAAj//wADZ2x5ZgAABpQAABOgAAA8WK5Y6xZoZWFkAAABMAAAADEAAAA216+/RWhoZWEAAAFkAAAAHgAAACQMvAbAaG10eAAAAdgAAADUAAADjM1JAH1sb2NhAAAEzAAAAcgAAAHIUEhfHG1heHAAAAGEAAAAGAAAACAA8gBGbmFtZQAAGjQAAADAAAABesaheqpwb3N0AAAa9AAAAacAAAJg6wxTj3icY2BkYGAAYnOVc8vi+W2+MnAzvwCKMOy4u+cfgv7XyXaV9TaQy8HABBIFAID3DlEAAAB4nGNgZGBgvfOvk4GTPZgBCNiuMjAyoILHAGPTBIwAAHicY2BkYGB4zODCwMcAAkwMaAAAIDgBOXicY2BkesU4gYGVgYEhBQgZGHrgtBHDLwY8wNs9KIDBgUFBUYnp3f8wBjnWO4zlQGFGkBwA1gQK7AAAAHicpVMxDsIwDExbCg/kAUydMnVi4ptMTEydmDIxwTlccjFVhUQly05q3/nstkvBni597Jz9bgqhf7z9PcfhWXNwPyw5FzH9EHMMb7asx8aheTFc4MEld2bAJXaDv+T78eR4pA5982x5scVh78Y9tT0pp+dX/R5Xe+7nDf5UZ9rUiF5/Nu651QsMcnFnnA114R3riAcsvKNuGuvHW7bD8VufGnfm+y94wr22p38Nc9X9+G+s8G/h/NAX5gyt5Cs7EnzuwM+zzET+H+Dsr7Ue2C9/R4cQeJx9kOdXjwEUxz/P75eM7EKSPIVsshWy9y5kKy9V0lShpaG9l6am9l5avybROTYhevA/eMfj8eucXnjhnnPvPffc77nn+7mAmtE0RlAqQqgyCdpZR7iudHNEdNAlkDiyBQRbwUHwFhJU/aph0UA0Ek1EM9FctBCtTM1kWdGLRJNFrmAj2I/p9EVD0VgUtTrLvzr5hzwkD4LsIzvLdrL1b71fPyWN1C61Sa1Ss1QlFY9oRv1oL/4/1DjihDM3cOEmrrjhjgeeeHELb3zw5TZ3uIsf/gQoHEHcI5gQQgnjPuFEEEmU4jqGWIUxngQSSSKZFFJJI50HZJCpMGWTQy4PySOfAgopophHlFBKGeVUUEkV1dRQSx31NNBIE8208JhW2ming040dNFND7300c8TnjLAM+XruozhCiqlqP5hVJZqnXG64ydMnKQ3ecrUadNnzNQ3mDV7juFco3nG800WiKZmCxctNl+ydNnyFStXrV5jsXbd+g0bN23eYmm1ddt26x07d+3es3ff/gMHDx0+cvTY8RMnT9nYnj5z1u7c+QsXL12+ctXe4VpMbHxiRm5RWWl5ZUVVTV1tfUNTY3NLa3tbh6azt6ev/7Ovk7Prl4ASb/fvfm7E5SlfxcVf684jmOrucEcvXoJnyFd1RHTO88E3b4c+vnvfxcALkL7BcOCHTyNRSZHJCalp6SlZ2WQWFObz6rWPciBIyT/goL5jAAAAABQAFAAUABQAJAA4AGYApAD4ASoBNgFKAWABjgGmAboByAHUAfYCIAIuAlwChgKsAs4C9gMQAz4DZgN2A44DtgPIA/YEHgRgBH4EoATCBNwE9AUIBSwFQgVOBWYFmgWoBdgF/gYcBjgGWgZ6BqgGugbSBuoHCAcuB0oHbAd4B5wHqAfCB84H4AgECB4IQAhaCIAImgi+CNQI5AkCCSgJNAlUCWgJhgmiCcAJ1AoCChwKMApICmYKjAquCtQK+AsECyYLRgtcC3ILiAueC8wL4gv4DA4MPgxODHIMngzMDPQNBg1eDXANtA3gDjgOSA5WDpIOoA6+DtwPBA8oDzoPZA+ID5QPpA+yD9oQGBBUEJoQ7BEUET4RZhGOEcIR7BIUEjwSZhKIEqoSyhLsEwITGBMuE0YTahOoE9IT/BQkFFoUhBS6FN4VABUiFUQVZhWMFaoVzhX+FiwWWhaUFsQXABc2F2AXkhfEF/YYKhhAGFYYbBiEGKgY0hj8GSYZThmEGa4ZyBnqGgoaKhpIGmgalhq0GuIa7hsUG0Qbfhu2G94b/hwOHCwcOhxIHFwccByEHKgczBzsHQIdIB04HVAdsh3gHgIeLHiczVu/dxzJce6e2eWKj8CdhqsRjj7Jp9GKgvXOfnqneXir9y5w4H/CESPIAeUAuACLYHoTJSKTu8SXyIn1PylSRDsAElABoGB6AdD1VVX39Mzsgjw/BwK43MXuTFV1/e76ek1m6MeuslOTm5kxX1RFNS/qwq7uXzmXnd7v4RVdwteZdnKs19VHi6O6WLT4WWdX+Dx7a8/C50RiMadH0/imwQf3r+0ZKOT0cPlLuq40z8yPjXleL4lWsSjrYlYsillZl/TOnN6b0sPeNLZ1rds03jXWE7H7V03j6PUNvbL25n7fNhCUxADtd7/LTiZvzMIcms+NOWDaS6JYLI4WoHm0KMFhRhzxLr0+BBd6+IYIWUfE6Jn+X9PDOWJInMBw4+2Zs+f0mW289fevHfGnv7KvGqxrD/9NjnX9T8zHZm4+MT8xz80vzD+Z2iyN+dLKmsBxplzxujxkMUt+szzUldOjKuuKJSMZ2taJLk9JmqaFtA1Jh3ftih/3r/3d1zAHaaxp71+3uMK1dHXj8G7bNMGO+QXJ+an5zJi6WoJ5Vczmqiniyhoqaktac/baEqv71xtox7d330Ar2VtmTja15+3GgaO39NdKbGzhC6ZhXbAniAvg/Xe/Ix95Q/ohDyJebJNyQQa2tBTXTP4NQvaugzfAerAhLYkupZ/JMRnkD+A1Ze89IV6i8wNal5mzQsXWM9Xnc31mOzfRsvd78mxXvvWthT6bTcOqghzwVfLuJ+yn1VFFNKdlRdq25NKv4IIrokQ3qm7fPTIt/U7NY1kheTTxdFC+ozv2A13IbK/NhF5B43ZFmoUdmadhGrlEGRxb1kkM4Nudf/Hn0M4yeW7Y4OEf5LQt/hO9Eo0rtj1bvlAdFTP2AlijguXZ6lDSxrK3kzeR0vOXjhREGWFDMXBOpG+/NUFeojmFPBTHC3K5yXH0NebHkf4F6Q98lmLRqiSvK/HLOsquiHIjv46iegU70wLW9ESRB1XzZxQApkf7IF2NeHNZMV3KZQton1fjcPPdHHQ5ucEg127Nz/DwvUZjA7kJfmQqzkKFaog1VeWck9QPN3TrjefgI6ksRCTvaunPVD62lMpXwYeKnlzIYtck102UadPc70OcxF7PEgqyQlkfMmYd6TRiKHuzIeF0cfzmHidKocfr25fVEUXR1YIcEFq4/TY7BQHKdTC75muRAT4XNS2c5+p34jVzkaQF95aCiaxIDuMdJ3/S+WsJG3IevDRb1ic25FzEFEU2B++FP250fRRylIOuHIWM/Sstkfg428Qalb/salQhEdS2lKi4PjzizxGf+2mExiilPMtxmv2llfjPTvIL8yPEPzKKeBina/Hdmn8pgzjxMM5j/IMa4sQCkN45ls9nV9mJyHdUyW92dTfHwzfrht53xPOKeHZxzh4uMd49DpNHF/FcJsI/m/yani1z8wOqTlyRwnpi1MDFPegkkUhO3q49+Tx5BTz8hul9b1DzDrimoPaSNY8qka5Y2Ir9hapZ8TlqSsjEiAWfnVBJYXkpJV41G6piVOm5zN09pffxOSTBc3ZC0kjhP1sjt/VipIA9qedIfYgqBvmhOg7FwF5+gRUhe/X8D7lU/XrOeZCpVJSjyZ1R3IgKySmefE7ZDyI4M4qPuax8Xon/VsGz7DXC/IwdlYoN/eT/zgmU24dOjv0gR1gBJBD595F/b59ZutFE2aXucWZlueFNJ8SKJLZnUBxkHVz/WPQkV7fhUjRa57vyFsmiK7Ihb5FauvVgfftWl0TNQU+3Tzq7IGvAIpQiYIzJMdszqSG51JAWrwc00rzT5Zn8glSC3IJLZ/H6NHI+U/6UyW0SM0USS5zPpbPiotkEj6TMs9r8p4TQeYyjTpdT0X2xgNbbJr+UzyZv6LOF8JUMoVWvLkLemEk2oXptkSuYA6KXkwZ1laeSRO6+plKqMYy/kxz+aUq/lEwWqSpd5J+1SwhOjsnU/MoMYqeuhtlXu4BNV/7F/bjw28RPIEfvbmk41G/tDeq3RJ32diHmpl390FpGvdUNmkHOO2RgSj7Nmjg3t/9h89/efuuMGcat+lafv2ciQQAqgNfrTog82u+g64ILze5aefD7udUunSsQErxowiFDid+foQtAQUOOjLHM/fWMayzipkJ1tWekvVV+2TQf7Nf55e2zfq8z1WhnX8Z99tojG9NdDa4mI4Xr2Qcfs3X4enCQe/ILTzxIknCX7W7VPvMq2cf8QGISmftQ7YXXBdXUG5R5/KNWuOUcgN2CvAj9RvCRLy33G7rSsvbccPBi4SHXnAooofTsW/a7xlijet2iNHXkJ975Fm0LGhf2M8opb9Bjf8Gbh9ZNX2zvoyutVIfJM9t3Vye9mz7vfcKai5p3VAvdi0g1QueYveX+oElo5Rfv3sEzS1ovrO+4H6WM0qqsZt6r9my/6BtkvALaqiuJJuxSkGPKGuWcqigHFLYrUDjV1ysu5ShsUsz78ZxGMz3HKkTiEylSOLm6D3FEvLvaF/cQXe0786Fv48pHtzZWalOP775In+Sf7KTV5DM5Ji/VG9M1c5+OirusRN5lwl2r7nXXOKL0bpAHXtuNCJHkcvXRkAPQ2zkUBg16KmtraebA//4V88+hc1j4oJJeOmSxsuKqSM75jeax+1fYrVM2v/vaZqfUTPjtNRJ7TPYTKijZ27unZCkfYjqdv9CV2tvmL9eN9La8jpyt0Um1KHiXzdmKAs5zb9dyhpn8JqlnV6GmLDn7jbtd1G72XoQYN7rr1vf63AdqueYk0tnjXqdWWcn/dSs9Vn5JK3/tdeXUTZCjJjLy/cndepde3rvuQ2padGZ2LMs6xL3f55he7i5q1KTGe5P7PkZNK3o7GCTJuHHxVH8jv6SWncR1YcIwgwfYs3ZNPUlLdbzrM3FdUrOOkppVfmjNajHbwlTNuTQG7XWIgXRSVtRSSflqBD1Z/u7roT0kbrmCIWbJuV5imW/v5kmsPlS7cCndOvCT99Uu3GW7W0Pt0v3fHllxULvKQ/1DahfmaPJK5pNWhjQ8qUxjfN6LpmGEt73wDhIhZidRHqk0B1LNMPHqdnJS1VDPMFILGzcMBBoveziHzco0zsSSunWQ1Ksw//H9suVQj63819WtJqlbdI3UxTH9MqEb+DxAnihmp7zeCe0NoX9MtxZlpYvVgW7LI1woXvZ5GGWmffX0zxwL8Kmp7Gia+9/zbmP6Z/9HO/mf5m/kWvVturYczre6TmUuf9VbOhYEE3U8aeOSX7q/HV2EXvBN9N/PdnvwYbLOoSeHhXYOjWz0UE3LrtatzEsoL72ROr+sA88wtcT0vtDJPc8reVLhHUKSZ3r44FpyZ5zrfZrslyVLg9YCTprLHPJVV/Vl1A0fPZeZJ2UHQBA89Yd+fJzVPDU/NH9nzFEdpvyF9iNFrm+F6b2WH/nTc2t5zS0J9iq9WNCa/KXttB0zEE/puY+mLTwP0NHaefqhRmUdh26OlcOz6RD339PIP+Lo5yHLGhn0I855Jz0Mo5vpfG5+aWrz65ALj6rnyW76oO6wjWndn07p31UZ0usqZI8A5wiGEZOKtN7UBTRAFhAwmMxZIBs8z+SMIfGXX3LdUswpqBnUsNOiix6x7S/iXk+RobDrKqfwgmVVar1exlRVxHW47AqV4f6J4xaHPBqh26rw4IWWikse+Xb2FUAX2iLDAxt7JmMqwb1YtxPxwefg+FybH3YUgaZ4wixwAHdCa5koir6o54BXb7h+c+P+kfi21rztNlvKDmdon/R5ueNZsSUw71tq51+az7c9gl87xj6m0AF6Zqj0G54SNAEbuUqxkZsW+bLRfbvaUqeMu6wYcD/0l9st6Bi08og5rGFsPgojR2aQvWT0M1OQ52O3Sv5lpMZnp/xZrHnzOoHxDrkkB5iOHIVTAAbSEW9g20mvU6UoU/7y9tse0kSFIkBNOks+URyVZ8nJJLdOcJWTgJzAm9iTsLIwy20YrUjpfYw9zVGCDqEfZUtUqPKUw/2mUQ/1DM1gH+nseRtjstuzhilbumUVnCy/oHV/hIzJnbZCgTMJO31dow32HADZW8UIKb3Zv7bcPzdxR2iSuctcsA3aH1RS26QPB0KDpKJlDrvB/PL2E5lBSmbX/YNdmZZn9EbQA1orv3//yrS0R58hA3L9WTie2JEOGds0PuBgRwEH8/lL3aN3sR8iP91is4gBBEQpi1HvAeQkQEewlfjNAcU379jU8jJpqFk+UuT29ztEgismc0zf0GdemU//iPuQ6Qv2kwoxiNo0r3URbD7G8yvxG+L3C8va8Mql4aLasjsCZLer209awHMrWj/XV0AAQLw9o2msQe2lle9zzmtjzltjoGLuAeEPEtibUVzcPSUxuNz3REljhWShUBRZHv1JdfAFamJVv08L2baAKhk33K4W/19JuHGKXO1UUj8MnUlxCTmJIFOSDrmqQ79TyphEgSuUXpTdDfpzlNrsK8Gf89jrFpJxxlhL6Ad6mMtKK3oKvfg+HvUQzW5C39H0u0hmCb3t1CqOgx41xFfrhtRc0v9G+f7e/HQb1aMk1fNeJyWPvM87TT5kMOCiZTHo4cXDepgOSIejHyOiMUew7Gz9iMDEmZ6gIWUk6OFzTSvU7IqqIZHz0q2F/MpY34FSSzCnBG1L4acOdtP2uYPesGbsrxl74DVTloi4GWcqLgKFdEMRPXMe5kfDYa8VipAUhoY8j3ubcD4ikTFgpqmAPu3t1+yV76WxfD+NLKExoHCkHphSYAeMBFy3jhfbZAje1sP5pPMKJJqwDtOSDNIX8u4q6CCgxJNjFnjrtUch8tr0UlmbveZrnyAHF4tDXROKIa8F17ogA137ItDlq1V+gaohNy7vfEzPhvVnd7xTwz7NhVE079D2IywV/SvGbf6SZJQ++B/MPz6MlS2HETwAz/pRPILS1kl/O8pp4xlknOP3ZpG6Y+6hbJPfJD75XprLEU23m+YgV44pFsGqPYps3xFBMvbWXDmmmg81PRI4UfSIz658uUX64GU98rpfGZMVn3E8u8LJiB+Zn5ifycQh9E/aPc3K57rdzYPKuX57baZ6qBH3TdIh4tCeYMjp3v4gYC2jU1iMubT9E1j5Re/8VeIXT/pofTibE70Mo4HgYAFZFEd4L41lSsNtpZElNAYUel7Ek1JxoISA68XNi21y9KzJwx01ZEKmpw/ZBY8wx7AbSbBH7SUSAJJaQJtitIxWLAeIWAIG+NZ3ALePe5FoX+QdnVaFWarWSviHjK5wuuMSVubR0xlWaOL8mPZSRTgtux3fC53XGOfT/qsP9220//pg+qHujen7XeTzHu3dlIN/jCiLpwwps14ejeT+qfn5Lg6j7mzMqp/dBxw150wSf3ivrqZb2ag5xgxMt6aYP39MO4uda1rW/UlNucUwcUBF7fzIPjx/6OKO8RaplWM0NeEN9fE8Jb/okFUMKZQvZm6bP/RAVmXb6LkLzBcVq36GSUkR8eJ+z+fbcOrUdQ1fwM1kz3o+8OF5h4xtx4PzLiOOcWFt4/rocPYXjpTvwMN2GXPMQ6dkW5nkPR4Pcegy6hYOe9JMjjj08snxh61junMde9pwjtgkPhVnQDt6T6DWXe/Zv3bQe+qloffka3f1nrg26T3jLHtH74nLB2cBu96zYp+cDs7Z7jsfwiy78nywOBywNSlmghOmhWACCba/da8oHXyXggTNXg/6nZjvvmtP2UO589+mPeX7aO7sKbfRzBKa37mnHBLsesoo4/9LTznkM9Dx8f+xpxyTjd91ya7oFWbDfIZ4KdM/Ga17zp7Q6BopyKS4ejnsDfXepDNUlCq7avnw+brdNAFrSH0wweejnwhO7zW+FLUe+cbW+5fd/W7r/Vlyf+/uoqv2sRdMb3apHUa8o/7l7hDA3e2N5GqeK7xh3J6Rlm3YfVjHAMMPsFQPyZ/8d3JO6xHL9nR8PmTUFPr0qFSU6/hhuULeHciFlWotH0jWhP2EaUwTvjOSYog8syn1XHJ/XoPzMFzJe/OaMIpIDnua9FyG9j79utFRrIb9wf2+0mVELpaMLlqSOo6ZiVSmwy4Cd53KDIjzrpMuijqPD2luFGNXnuQrPZ4Pnar5UJ6DQzbCsdvj7NifhEyW7E/ikK+/Qwk1690jrnFz+Z5U8GqZ8PL3pXh/0YqIdB8jh7a5e6r+wbjWG0ZqNDYlKC8RixN8rrEk52kixtpNStLkyha2wSftilyYcTz2Dd8K1Kaf5RcJxpe9bXE6Vs4EZKeKozwWftoL8BgmO21dwJD0ujxcx7my5q/HOczV7VlrPvg7WXJ2Rc5068khy7x5D7Eo4hcSV62cYwjd/ClQWjy4I0roQGf7sEyIaZFvyv+HgIasGLs6OQhDIjsWG3Rwnk/l3peTzkH2Ke9rGIFiZHylhLAYzKwEj7I3/H3MJ9B/d6LLNXJUgj5dNS7MI3DUXfxoPjhlEe8JJyxwJHvTCNwg+2SvZ0DNMvRNfNLuTMAMpyChnNHX/QZ/v037vfh9Rz2WhQf/4FLGtx/9a+zjvq/zGeyOfmWW5kvzz+Zfuu9W9nxzNnyjXEiQoLHrf9tSYNomsHdySInewWRB/moFP5IskgC6AnmryHB+0stKTrgozjuTXnSE0eu54+6Rfr+ndyIiOYU8+E6PjbQPdiOBDwB8apPslOvEjGTjWbzQsKqsKfsaf0/sht2H1MGayE7RQfCTk+gGXkmf/S8ITQH8eJyNjs0KgkAUhc/oqP1AtZDW7tqJ0iO4bBH1BoOICmIRCu7a9BTtW/cWPVfHvAjRpmGY+c6dc+5cACu8oDAsjZmwwhwbYQseEmGb915Y01MKO1RXYZdd7sIe688+padUk6EDWWGNpbCFBbbCNtVOWNNzEHaYbYVd+LgJe6w/YNCgRgiYpuZ55lgdAg5dkFI+5zixXHZBUpSpySmOyFhtUfH1QpnlbWUI0Wf/0yHmh1FvjsNojPwGRv/3kG9A9S1reJxtzVdsjgEUBuDna9Vfs7X33vunRn+7Re29997UHrX3JkTCFbEiQewZgsTeI0Zw4QaJHRe4RfguvcnJk5P3JEecv/mVqp7/5c2fCcSJV1GC7CIS5ZBTLrnlkVeSZPnkV0BBhRRWRFHFFFdCSaWUVkZZ5ZRXIYhTSWVVVFVNdTXUVEttdUTV/fM7RX0NNNRIqpjGmmiqmeZaaClNulZaayNDW+2010FHnXTWRVfddNdDT7301kdf/fQ3wECDDDbEUMMMD+KDbEFCkD2IBIlBjiBnkMteK6x00TbvrbLJejscsC/IbZ1Xltsa5Any2mi7Na56HSTZ6aAfvvtpj8Nuu+mIEUbabJS7Rrvljofuue+BD8Z44pHHjhrrmy2ee+qZcT75Yq0Jxptoskky7TLFNFNNN8MsM802x0dzzZNlvoUWOGe3xRZZYqnPvjofJDvmuLfeuWC/F1464aQzzrrmlNOuW+aK1Q654ZLLNkTGTsqaOi6lYWRW5vhotFHGP1OjoXVDW4e2CQ3vYuFdLOxjYZ8W7un1QlNCY5G0ycNHTp+S+RsSnoFeAAAAAAH//wACeJxjYGRgYOABYjEgZmJgBMJHQMwC5jEAAA1UAREAAAB4nGNgYGBkAIIrKjPVQPSOu3v+wWgASwsIVwAA"

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "data:application/x-font-ttf;base64,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"

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgRm9udEZvcmdlIDIwMTYxMDEzIGF0IFNhdCBBcHIgMTMgMTQ6NDY6MjIgMjAwMgogQnkgLCwsCmF0bi4KPC9tZXRhZGF0YT4KPGRlZnM+Cjxmb250IGlkPSJwaXhDaGljYWdvIiBob3Jpei1hZHYteD0iODc1IiA+CiAgPGZvbnQtZmFjZSAKICAgIGZvbnQtZmFtaWx5PSJwaXggQ2hpY2FnbyIKICAgIGZvbnQtd2VpZ2h0PSI0MDAiCiAgICBmb250LXN0cmV0Y2g9Im5vcm1hbCIKICAgIHVuaXRzLXBlci1lbT0iMTAwMCIKICAgIHBhbm9zZS0xPSIwIDAgMCAwIDAgMCAwIDAgMCAwIgogICAgYXNjZW50PSI4MDAiCiAgICBkZXNjZW50PSItMjAwIgogICAgeC1oZWlnaHQ9Ijg3NCIKICAgIGNhcC1oZWlnaHQ9IjExMjQiCiAgICBiYm94PSIwIC0zNzUgMTc0OSAxNDk5IgogICAgdW5kZXJsaW5lLXRoaWNrbmVzcz0iNTAiCiAgICB1bmRlcmxpbmUtcG9zaXRpb249Ii0xNzUiCiAgICB1bmljb2RlLXJhbmdlPSJVKzAwMjAtMjEyMiIKICAvPgo8bWlzc2luZy1nbHlwaCBob3Jpei1hZHYteD0iNTAwIiAKZD0iTTAgMGgzNzV2NjI1aC0zNzV2LTYyNXpNMTI1IDEyNXYzNzVoMTI1di0zNzVoLTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iLm5vdGRlZiIgaG9yaXotYWR2LXg9IjUwMCIgCmQ9Ik0wIDBoMzc1djYyNWgtMzc1di02MjV6TTEyNSAxMjV2Mzc1aDEyNXYtMzc1aC0xMjV6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Ii5udWxsIiBob3Jpei1hZHYteD0iMCIgCiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Im5vbm1hcmtpbmdyZXR1cm4iIGhvcml6LWFkdi14PSI1MDAiIAogLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJzcGFjZSIgdW5pY29kZT0iICIgaG9yaXotYWR2LXg9IjUwMCIgCiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InNwYWNlIiB1bmljb2RlPSImI3hhMDsiIGhvcml6LWFkdi14PSI1MDAiIAogLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJBIiB1bmljb2RlPSIhIiBob3Jpei1hZHYteD0iMzc1IiAKZD0iTTAgMGgyNDl2MjQ5aC0yNDl2LTI0OXpNMCAzNzVoMjQ5djc0OWgtMjQ5di03NDl6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InF1b3RlZGJsIiB1bmljb2RlPSImI3gyMjsiIGhvcml6LWFkdi14PSI1MDAiIApkPSJNMCA3NTBoMTI0djM3NGgtMTI0di0zNzR6TTI1MCA3NTBoMTI0djM3NGgtMTI0di0zNzR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Im51bWJlcnNpZ24iIHVuaWNvZGU9IiMiIGhvcml6LWFkdi14PSIxMTI1IiAKZD0iTTUwMCAxMjVoMTI0bDEgMTI1aDI0OXYxMjRoLTEyNXY1MDBoLTI0OXYtMTI0aDEyNXYtMzc1bC0yNTEgLTF2NTAwaC0xMjR2LTQ5OWwtMjUwIC0xdi0xMjRoMTI1di0xMjVoMTI0bDEgMTI1aDI1MHYtMTI1ek03NTAgODc1aDEyNHYyNDloLTEyNHYtMjQ5ek0zNzUgODc1aDEyNHYyNDloLTEyNHYtMjQ5eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJkb2xsYXIiIHVuaWNvZGU9IiQiIGhvcml6LWFkdi14PSI3NTAiIApkPSJNMjUwIC0xMjVoMTI0bDEgMTI1aDEyNHYxMjRoLTEyNWwxIDI1MWgxMjV2LTI1MGgxMjR2Mzc0aC0xMjV2MTI1aC0xMjVsMSAzNzZoMTI0djEyNGgtMTI1djEyNWgtMTI0di0xMjRsLTEyNSAtMXYtMTI0aDEyNXYtMjUwbC0xMjYgLTF2MjUwaC0xMjR2LTM3NGgxMjV2LTEyNWgxMjV2LTM3NWwtMTI1IC0xdi0xMjRoMTI1di0xMjV6TTAgMTI1aDEyNHYxMjRoLTEyNHYtMTI0ek01MDAgODc1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJwZXJjZW50IiB1bmljb2RlPSIlIiBob3Jpei1hZHYteD0iMTI1MCIgCmQ9Ik0yNTAgMGgxMjR2MjQ5aC0xMjR2LTI0OXpNNzUwIDBoMjQ5djEyNGgtMjQ5di0xMjR6TTYyNSAxMjVoMTI0djI0OWgtMTI0di0yNDl6TTM3NSAyNTBoMTI0djI0OWgtMTI0di0yNDl6TTEwMDAgMTI1aDEyNHYyNDloLTEyNHYtMjQ5ek04NzUgMzc1aDEyNHYxMjRoLTI0OXYtMTI0aDEyNXpNNTAwIDUwMGgxMjRsMSAxMjVoMTI0djI0OWgtMTI0di0xMjRoLTEyNXYtMjUwek0yNTAgNjI1aDEyNHYxMjRoLTI0OXYtMTI0aDEyNXpNMCA3NTBoMTI0CnYyNDloLTEyNHYtMjQ5ek0zNzUgNzUwaDEyNHYyNDloLTEyNHYtMjQ5ek03NTAgODc1aDEyNHYyNDloLTM3NHYtMTI0aDI1MHYtMTI1ek0xMjUgMTAwMGgyNDl2MTI0aC0yNDl2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iYW1wZXJzYW5kIiB1bmljb2RlPSImI3gyNjsiIGhvcml6LWFkdi14PSIxMTI1IiAKZD0iTTEyNSAwaDQ5OWwxIDEyNWgxMjRsMSAyNTBoMTI0djEyNGgtMzc0di0zNzRsLTI1MSAtMWwxIDM3NmgxMjR2MjQ5aC0xMjVsMSAyNTFoMjUwdi0xMjVoMjQ5djI0OWgtNjI0di0xMjRsLTEyNSAtMXYtMjQ5aDEyNXYtMjUwbC0xMjUgLTF2LTM3NGgxMjV2LTEyNXpNODc1IDUwMGgxMjR2Mzc0aC0xMjR2LTM3NHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0icXVvdGVzaW5nbGUiIHVuaWNvZGU9IiciIGhvcml6LWFkdi14PSIyNTAiIApkPSJNMCA3NTBoMTI0djM3NGgtMTI0di0zNzR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InBhcmVubGVmdCIgdW5pY29kZT0iKCIgaG9yaXotYWR2LXg9IjUwMCIgCmQ9Ik0wIDBoMTI1di0xMjVoMjQ5djEyNGgtMTI1bDEgMTEyNmgxMjR2MTI0aC0yNDl2LTEyNGgtMTI1di0xMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJwYXJlbnJpZ2h0IiB1bmljb2RlPSIpIiBob3Jpei1hZHYteD0iNTAwIiAKZD0iTTAgLTEyNWgyNDlsMSAxMjVoMTI0djExMjRoLTEyNXYxMjVoLTI0OXYtMTI0aDEyNXYtMTEyNWgtMTI1di0xMjV6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImFzdGVyaXNrIiB1bmljb2RlPSIqIiBob3Jpei1hZHYteD0iNzUwIiAKZD0iTTI1MCAzNzVoMTI0bDEgMjUwaDEyNHYyNDloLTEyNXYyNTBoLTEyNHYtMjQ5bC0xMjUgLTF2LTI0OWgxMjV2LTI1MHpNMCA1MDBoMTI0djEyNGgtMTI0di0xMjR6TTUwMCA1MDBoMTI0djEyNGgtMTI0di0xMjR6TTAgODc1aDEyNHYxMjRoLTEyNHYtMTI0ek01MDAgODc1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJwbHVzIiB1bmljb2RlPSIrIiBob3Jpei1hZHYteD0iMTAwMCIgCmQ9Ik0zNzUgMTI1aDEyNGwxIDI1MGgzNzR2MTI0aC0zNzV2MjUwaC0xMjR2LTI0OWwtMzc1IC0xdi0xMjRoMzc1di0yNTB6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImNvbW1hIiB1bmljb2RlPSIsIiBob3Jpei1hZHYteD0iMzc1IiAKZD0iTTAgMGgxMjV2LTEyNWgxMjR2Mzc0aC0yNDl2LTI0OXpNMCAtMjUwaDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJoeXBoZW4iIHVuaWNvZGU9Ii0iIGhvcml6LWFkdi14PSI3NTAiIApkPSJNMzc1IDM3NWgyNDl2MTI0aC02MjR2LTEyNGgzNzV6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InBlcmlvZCIgdW5pY29kZT0iLiIgaG9yaXotYWR2LXg9IjM3NSIgCmQ9Ik0wIDBoMjQ5djI0OWgtMjQ5di0yNDl6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InNsYXNoIiB1bmljb2RlPSIvIiBob3Jpei1hZHYteD0iNzUwIiAKZD0iTTAgMGgxMjR2MTI0aC0xMjR2LTEyNHpNMTI1IDEyNWgxMjR2Mzc0aC0xMjR2LTM3NHpNMjUwIDUwMGgxMjR2MjQ5aC0xMjR2LTI0OXpNMzc1IDc1MGgxMjR2Mzc0aC0xMjR2LTM3NHpNNTAwIDExMjVoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Inplcm8iIHVuaWNvZGU9IjAiIApkPSJNMTI1IDBoNDk5bDEgMTI1aDEyNHY4NzRoLTEyNXYxMjVoLTEyNHYtMjQ5bC0xMjUgLTF2LTI0OWgxMjV2LTUwMGwtMjUxIC0xbDEgMjUxaDEyNGwxIDEyNWgxMjR2MTI0aC0yNTBsMSAzNzZoMjQ5djEyNGgtMzc0di0xMjRsLTEyNSAtMXYtODc0aDEyNXYtMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJvbmUiIHVuaWNvZGU9IjEiIGhvcml6LWFkdi14PSIzNzUiIApkPSJNMCAwaDI0OXYxMTI0aC0xMjR2LTEyNGgtMTI1di0xMDAweiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ0d28iIHVuaWNvZGU9IjIiIApkPSJNMCAwaDc0OXYxMjRoLTUwMGwxIDEyNmgxMjRsMSAxMjVoMTI0bDEgMTI1aDEyNGwxIDEyNWgxMjR2Mzc0aC0xMjV2MTI1aC00OTl2LTEyNGgzNzV2LTM3NWwtMTI1IC0xdi0xMjRsLTEyNSAtMXYtMTI0bC0xMjUgLTF2LTEyNGgtMTI1di0yNTB6TTAgODc1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ0aHJlZSIgdW5pY29kZT0iMyIgCmQ9Ik0xMjUgMGg0OTlsMSAxMjVoMTI0djQ5OWgtMTI1djEyNWgtMTI1bDEgMTI2aDEyNGwxIDEyNWgxMjR2MTI0aC03NDl2LTEyNGgzNzV2LTEyNWwtMTI1IC0xdi0xMjRsLTEyNSAtMXYtMTI0aDM3NXYtNTAwaC0zNzV2LTEyNXpNMCAxMjVoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImZvdXIiIHVuaWNvZGU9IjQiIGhvcml6LWFkdi14PSIxMDAwIiAKZD0iTTUwMCAwaDI0OWwxIDM3NWgxMjR2MTI0aC0xMjV2NjI1aC0yNDl2LTEyNGwtMTI1IC0xdi0xMjRoMTI1di0zNzVsLTI1MSAtMXYyNTBoLTEyNHYtMTI0bC0xMjUgLTF2LTI0OWg1MDB2LTM3NXpNMjUwIDc1MGgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iZml2ZSIgdW5pY29kZT0iNSIgCmQ9Ik0xMjUgMGg0OTlsMSAxMjVoMTI0djQ5OWgtMTI1djEyNWgtMzc1bDEgMjUxaDQ5OXYxMjRoLTc0OXYtNDk5aDUwMHYtNTAwaC0zNzV2LTEyNXpNMCAxMjVoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InNpeCIgdW5pY29kZT0iNiIgCmQ9Ik0xMjUgMGg0OTlsMSAxMjVoMTI0djQ5OWgtMTI1djEyNWgtMzc1bDEgMTI2aDEyNGwxIDEyNWgyNDl2MTI0aC0zNzR2LTEyNGwtMTI1IC0xdi0xMjRsLTEyNSAtMXYtMjQ5aDUwMHYtNTAwbC0yNTEgLTF2NTAwaC0yNDl2LTQ5OWgxMjV2LTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ic2V2ZW4iIHVuaWNvZGU9IjciIGhvcml6LWFkdi14PSIxMDAwIiAKZD0iTTM3NSAwaDI0OWwxIDUwMGgxMjRsMSAyNTBoMTI0djM3NGgtODc0di0xMjRoNjI1di0yNTBsLTEyNSAtMXYtMjQ5aC0xMjV2LTUwMHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iZWlnaHQiIHVuaWNvZGU9IjgiIApkPSJNMTI1IDBoNDk5bDEgMTI1aDEyNHYzNzRoLTI0OXYtMzc0bC0yNTEgLTF2Mzc1aC0yNDl2LTM3NGgxMjV2LTEyNXpNMjUwIDUwMGgyNDl2MTI0aC0yNDl2LTEyNHpNNTAwIDYyNWgyNDl2Mzc0aC0xMjV2MTI1aC00OTl2LTEyNGwtMTI1IC0xdi0zNzRoMjQ5bDEgMzc1aDI1MHYtMzc1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJuaW5lIiB1bmljb2RlPSI5IiAKZD0iTTEyNSAwaDM3NGwxIDEyNWgxMjRsMSAxMjVoMTI0djc0OWgtMTI1djEyNWgtMTI0di02MjRsLTI1MSAtMWwxIDUwMWgyNDl2MTI0aC0zNzR2LTEyNGwtMTI1IC0xdi00OTloMTI1di0xMjVoMzc1di0xMjVsLTEyNSAtMXYtMTI0aC0yNTB2LTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iY29sb24iIHVuaWNvZGU9IjoiIGhvcml6LWFkdi14PSIzNzUiIApkPSJNMCAwaDI0OXYyNDloLTI0OXYtMjQ5ek0wIDYyNWgyNDl2MjQ5aC0yNDl2LTI0OXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ic2VtaWNvbG9uIiB1bmljb2RlPSI7IiBob3Jpei1hZHYteD0iMzc1IiAKZD0iTTAgMGgxMjV2LTEyNWgxMjR2Mzc0aC0yNDl2LTI0OXpNMCAtMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek0wIDYyNWgyNDl2MjQ5aC0yNDl2LTI0OXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ibGVzcyIgdW5pY29kZT0iJiN4M2M7IiAKZD0iTTUwMCAxMjVoMTI0djEyNGgtMTI1djEyNWgtMTI1djEyNWgtMTI1bDEgMTI2aDEyNGwxIDEyNWgxMjRsMSAxMjVoMTI0djEyNGgtMjQ5di0xMjRsLTEyNSAtMXYtMTI0bC0xMjUgLTF2LTEyNGwtMTI1IC0xdi0xMjRoMTI1di0xMjVoMTI1di0xMjVoMTI1di0xMjVoMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJlcXVhbCIgdW5pY29kZT0iPSIgCmQ9Ik0wIDI1MGg3NDl2MTI0aC03NDl2LTEyNHpNMCA1MDBoNzQ5djEyNGgtNzQ5di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImdyZWF0ZXIiIHVuaWNvZGU9IiYjeDNlOyIgCmQ9Ik0xMjUgMTI1aDEyNHYxMjRoLTEyNHYtMTI0ek0yNTAgMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek0zNzUgMzc1aDEyNHYxMjRoLTEyNHYtMTI0ek01MDAgNTAwaDI0OXYxMjRoLTI0OXYtMTI0ek0zNzUgNjI1aDEyNHYxMjRoLTEyNHYtMTI0ek0yNTAgNzUwaDEyNHYxMjRoLTEyNHYtMTI0ek0xMjUgODc1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJxdWVzdGlvbiIgdW5pY29kZT0iPyIgCmQ9Ik0yNTAgMGgyNDl2MjQ5aC0yNDl2LTI0OXpNMzc1IDM3NWgxMjRsMSAyNTBoMTI0bDEgMTI1aDEyNHYyNDloLTEyNXYxMjVoLTQ5OXYtMTI0aDM3NXYtMjUwbC0xMjUgLTF2LTEyNGwtMTI1IC0xdi0yNDloMTI1ek0wIDg3NWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iYXQiIHVuaWNvZGU9IkAiIGhvcml6LWFkdi14PSIxMjUwIiAKZD0iTTI1MCAwaDYyNHYxMjRoLTYyNHYtMTI0ek0xMjUgMTI1aDEyNHYxMjRoLTEyNHYtMTI0ek0wIDI1MGgxMjR2NjI0aC0xMjR2LTYyNHpNMzc1IDI1MGg3NDl2NjI0aC0xMjR2LTQ5OWwtMjUxIC0xdjUwMGgtMzc0di0xMjRoMjUwdi0zNzVoLTI1MHYtMTI1ek0yNTAgMzc1aDEyNHYzNzRoLTEyNHYtMzc0ek04NzUgODc1aDEyNHYxMjRoLTEyNHYtMTI0ek0xMjUgODc1aDEyNHYxMjRoLTEyNHYtMTI0ek0yNTAgMTAwMGg2MjR2MTI0aC02MjQKdi0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImdseXBoMzYiIHVuaWNvZGU9IkEiIApkPSJNMCAwaDI0OWwxIDUwMGgyNTB2LTUwMGgyNDl2OTk5aC0xMjV2MTI1aC0xMjR2LTQ5OWwtMjUxIC0xbDEgMzc2aDI0OXYxMjRoLTM3NHYtMTI0aC0xMjV2LTEwMDB6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9IkIiIHVuaWNvZGU9IkIiIApkPSJNMCAwaDYyNGwxIDEyNWgxMjR2Mzc0aC0yNDl2LTM3NGwtMjUxIC0xbDEgMzc2aDI0OXYxMjRoLTI1MGwxIDM3NmgyNTB2LTM3NWgyNDl2Mzc0aC0xMjV2MTI1aC02MjR2LTExMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9IkMiIHVuaWNvZGU9IkMiIApkPSJNMTI1IDBoNDk5djEyNGgtMzc1bDEgODc2aDM3NHYxMjRoLTQ5OXYtMTI0bC0xMjUgLTF2LTg3NGgxMjV2LTEyNXpNNjI1IDEyNWgxMjR2MTI0aC0xMjR2LTEyNHpNNjI1IDg3NWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iRCIgdW5pY29kZT0iRCIgCmQ9Ik0wIDBoNjI0bDEgMTI1aDEyNHY4NzRoLTEyNXYxMjVoLTEyNHYtOTk5bC0yNTEgLTFsMSA4NzZoMjQ5djEyNGgtNDk5di0xMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJFIiB1bmljb2RlPSJFIiBob3Jpei1hZHYteD0iNzUwIiAKZD0iTTAgMGg2MjR2MTI0aC0zNzVsMSAzNzZoMjQ5djEyNGgtMjUwbDEgMzc2aDM3NHYxMjRoLTYyNHYtMTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iRiIgdW5pY29kZT0iRiIgaG9yaXotYWR2LXg9Ijc1MCIgCmQ9Ik0wIDBoMjQ5bDEgNTAwaDI0OXYxMjRoLTI1MGwxIDM3NmgzNzR2MTI0aC02MjR2LTExMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9IkciIHVuaWNvZGU9IkciIApkPSJNMTI1IDBoNDk5bDEgMTI1aDEyNHY0OTloLTI0OXYtNDk5bC0yNTEgLTFsMSA4NzZoMzc0djEyNGgtNDk5di0xMjRsLTEyNSAtMXYtODc0aDEyNXYtMTI1ek02MjUgODc1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJIIiB1bmljb2RlPSJIIiAKZD0iTTAgMGgyNDlsMSA1MDBoMjUwdi01MDBoMjQ5djExMjRoLTI0OXYtNDk5bC0yNTEgLTF2NTAwaC0yNDl2LTExMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9IkkiIHVuaWNvZGU9IkkiIGhvcml6LWFkdi14PSIzNzUiIApkPSJNMCAwaDI0OXYxMTI0aC0yNDl2LTExMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9IkoiIHVuaWNvZGU9IkoiIApkPSJNMTI1IDBoNDk5bDEgMTI1aDEyNHY5OTloLTI0OXYtOTk5bC0yNTEgLTF2Mzc1aC0yNDl2LTM3NGgxMjV2LTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iSyIgdW5pY29kZT0iSyIgaG9yaXotYWR2LXg9IjEwMDAiIApkPSJNMCAwaDI0OWwxIDM3NWgxMjR2Mzc0aC0xMjV2Mzc1aC0yNDl2LTExMjR6TTYyNSAwaDEyNHYxMjRoLTEyNHYtMTI0ek01MDAgMTI1aDEyNHYxMjRoLTEyNHYtMTI0ek0zNzUgMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek0zNzUgNzUwaDEyNHYxMjRoLTEyNHYtMTI0ek01MDAgODc1aDEyNHYxMjRoLTEyNHYtMTI0ek02MjUgMTAwMGgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iTCIgdW5pY29kZT0iTCIgaG9yaXotYWR2LXg9Ijc1MCIgCmQ9Ik0wIDBoNjI0djEyNGgtMzc1djEwMDBoLTI0OXYtMTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iTSIgdW5pY29kZT0iTSIgaG9yaXotYWR2LXg9IjEzNzUiIApkPSJNMCAwaDEyNGwxIDYyNWgxMjV2LTEyNWgxMjV2LTEyNWgxMjV2LTEyNWgxMjRsMSAxMjVoMTI0bDEgMTI1aDEyNGwxIDEyNWgxMjV2LTYyNWgyNDl2MTEyNGgtMjQ5di0xMjRsLTEyNSAtMXYtMTI0bC0xMjUgLTF2LTEyNGwtMTI1IC0xdi0xMjRsLTEyNiAtMXYxMjVoLTEyNXYxMjVoLTEyNXYxMjVoLTEyNXYxMjVoLTEyNHYtMTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iTiIgdW5pY29kZT0iTiIgaG9yaXotYWR2LXg9IjEwMDAiIApkPSJNMCAwaDEyNGwxIDYyNWgxMjV2LTEyNWgxMjV2LTEyNWgxMjV2LTEyNWgxMjV2LTEyNWgxMjV2LTEyNWgxMjR2MTEyNGgtMTI0di02MjRsLTEyNiAtMXYxMjVoLTEyNXYxMjVoLTEyNXYxMjVoLTEyNXYxMjVoLTEyNXYxMjVoLTEyNHYtMTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iTyIgdW5pY29kZT0iTyIgCmQ9Ik0xMjUgMGg0OTlsMSAxMjVoMTI0djg3NGgtMTI1djEyNWgtMTI0di05OTlsLTI1MSAtMWwxIDg3NmgyNDl2MTI0aC0zNzR2LTEyNGwtMTI1IC0xdi04NzRoMTI1di0xMjV6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9IlAiIHVuaWNvZGU9IlAiIApkPSJNMCAwaDI0OWwxIDUwMGgzNzRsMSAxMjVoMTI0djM3NGgtMTI1djEyNWgtMTI0di00OTlsLTI1MSAtMWwxIDM3NmgyNDl2MTI0aC00OTl2LTExMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9IlEiIHVuaWNvZGU9IlEiIApkPSJNNTAwIC0xMjVoMjQ5djEyNGgtMTI1bDEgMTI2aDEyNHY4NzRoLTEyNXYxMjVoLTQ5OXYtMTI0aDM3NXYtODc1bC0yNTEgLTF2ODc1aC0yNDl2LTg3NGgxMjV2LTEyNWgzNzV2LTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iUiIgdW5pY29kZT0iUiIgCmQ9Ik0wIDBoMjQ5bDEgNTAwaDI1MHYtNTAwaDI0OXY0OTloLTEyNWwxIDEyNmgxMjR2Mzc0aC0xMjV2MTI1aC0xMjR2LTQ5OWwtMjUxIC0xbDEgMzc2aDI0OXYxMjRoLTQ5OXYtMTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iUyIgdW5pY29kZT0iUyIgaG9yaXotYWR2LXg9Ijc1MCIgCmQ9Ik0xMjUgMGgzNzRsMSAxMjVoMTI0djM3NGgtMTI1djEyNWgtMTI1djEyNWgtMTI1bDEgMjUxaDI0OXYxMjRoLTM3NHYtMTI0bC0xMjUgLTF2LTM3NGgxMjV2LTEyNWgxMjV2LTEyNWgxMjV2LTI1MGgtMjUwdi0xMjV6TTAgMTI1aDEyNHYxMjRoLTEyNHYtMTI0ek01MDAgODc1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJUIiB1bmljb2RlPSJUIiBob3Jpei1hZHYteD0iMTEyNSIgCmQ9Ik0zNzUgMGgyNDlsMSAxMDAwaDM3NHYxMjRoLTk5OXYtMTI0aDM3NXYtMTAwMHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iVSIgdW5pY29kZT0iVSIgCmQ9Ik0xMjUgMGg0OTlsMSAxMjVoMTI0djk5OWgtMjQ5di05OTlsLTI1MSAtMXYxMDAwaC0yNDl2LTk5OWgxMjV2LTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iViIgdW5pY29kZT0iViIgCmQ9Ik0wIDBoNDk5djEyNGgtMjUwdjEwMDBoLTI0OXYtMTEyNHpNNTAwIDEyNWgxMjRsMSAxMjVoMTI0djg3NGgtMjQ5di05OTl6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9IlciIHVuaWNvZGU9IlciIGhvcml6LWFkdi14PSIxMzc1IiAKZD0iTTAgMGg5OTl2MTI0aC0yNTB2MTAwMGgtMjQ5di05OTlsLTI1MSAtMXYxMDAwaC0yNDl2LTExMjR6TTEwMDAgMTI1aDEyNGwxIDEyNWgxMjR2ODc0aC0yNDl2LTk5OXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iWCIgdW5pY29kZT0iWCIgCmQ9Ik0wIDBoMjQ5djQ5OWgtMjQ5di00OTl6TTUwMCAwaDI0OXY0OTloLTI0OXYtNDk5ek0yNTAgNTAwaDI0OXYxMjRoLTI0OXYtMTI0ek01MDAgNjI1aDI0OXY0OTloLTI0OXYtNDk5ek0xMjUgNjI1aDEyNHY0OTloLTI0OXYtNDk5aDEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iWSIgdW5pY29kZT0iWSIgCmQ9Ik0yNTAgMGgyNDlsMSA1MDBoMTI0bDEgMTI1aDEyNHY0OTloLTI0OXYtNDk5bC0yNTEgLTF2NTAwaC0yNDl2LTQ5OWgxMjV2LTEyNWgxMjV2LTUwMHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iWiIgdW5pY29kZT0iWiIgCmQ9Ik0wIDBoNzQ5djEyNGgtNTAwbDEgMTI2aDEyNGwxIDI1MGgxMjRsMSAxMjVoMTI0bDEgMjUwaDEyNHYyNDloLTc0OXYtMTI0aDM3NXYtMjUwbC0xMjUgLTF2LTI0OWwtMTI1IC0xdi0yNDloLTEyNXYtMjUweiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJicmFja2V0bGVmdCIgdW5pY29kZT0iWyIgaG9yaXotYWR2LXg9IjM3NSIgCmQ9Ik0wIDB2LTEyNWgyNDl2MTM3NGgtMjQ5di0xMjQ5eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJiYWNrc2xhc2giIHVuaWNvZGU9IlwiIGhvcml6LWFkdi14PSI3NTAiIApkPSJNNTAwIDBoMTI0djEyNGgtMTI0di0xMjR6TTM3NSAxMjVoMTI0djM3NGgtMTI0di0zNzR6TTI1MCA1MDBoMTI0djI0OWgtMTI0di0yNDl6TTEyNSA3NTBoMTI0djM3NGgtMTI0di0zNzR6TTAgMTEyNWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iYnJhY2tldHJpZ2h0IiB1bmljb2RlPSJdIiBob3Jpei1hZHYteD0iMzc1IiAKZD0iTTAgMHYtMTI1aDI0OXYxMzc0aC0yNDl2LTEyNDl6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImFzY2lpY2lyY3VtIiB1bmljb2RlPSJeIiAKZD0iTTAgNzUwaDI0OWwxIDEyNWgyNTB2LTEyNWgyNDl2MTI0aC0xMjV2MTI1aC0xMjV2MTI1aC0yNDl2LTEyNGwtMTI1IC0xdi0xMjRoLTEyNXYtMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ1bmRlcnNjb3JlIiB1bmljb2RlPSJfIiBob3Jpei1hZHYteD0iMTEyNSIgCmQ9Ik0wIC0xMjVoOTk5djEyNGgtOTk5di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImdyYXZlIiB1bmljb2RlPSJgIiBob3Jpei1hZHYteD0iMzc1IiAKZD0iTTEyNSAxMDAwaDEyNHYxMjRoLTEyNHYtMTI0ek0wIDExMjVoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImEiIHVuaWNvZGU9ImEiIApkPSJNMTI1IDBoNjI0djc0OWgtMTI1djEyNWgtNDk5di0xMjRoMzc1di0yNTBsLTM3NSAtMXYtMTI0aDM3NXYtMjUwbC0yNTEgLTF2MjUwaC0yNDl2LTI0OWgxMjV2LTEyNXpNMCA2MjVoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImIiIHVuaWNvZGU9ImIiIApkPSJNMCAwaDYyNGwxIDEyNWgxMjR2NjI0aC0xMjV2MTI1aC0xMjR2LTc0OWwtMjUxIC0xbDEgNjI2aDI0OXYxMjRoLTI1MHYyNTBoLTI0OXYtMTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iYyIgdW5pY29kZT0iYyIgaG9yaXotYWR2LXg9Ijc1MCIgCmQ9Ik0xMjUgMGgzNzR2MTI0aC0yNTBsMSA2MjZoMjQ5djEyNGgtMzc0di0xMjRsLTEyNSAtMXYtNjI0aDEyNXYtMTI1ek01MDAgMTI1aDEyNHYxMjRoLTEyNHYtMTI0ek01MDAgNjI1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJkIiB1bmljb2RlPSJkIiAKZD0iTTEyNSAwaDYyNHYxMTI0aC0yNDl2LTk5OWwtMjUxIC0xbDEgNjI2aDI0OXYxMjRoLTM3NHYtMTI0bC0xMjUgLTF2LTYyNGgxMjV2LTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iZSIgdW5pY29kZT0iZSIgCmQ9Ik0xMjUgMGg0OTl2MTI0aC0zNzVsMSAyNTFoNDk5djM3NGgtMTI1djEyNWgtMTI0di0zNzRsLTI1MSAtMWwxIDI1MWgyNDl2MTI0aC0zNzR2LTEyNGwtMTI1IC0xdi02MjRoMTI1di0xMjV6TTYyNSAxMjVoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImYiIHVuaWNvZGU9ImYiIGhvcml6LWFkdi14PSI3NTAiIApkPSJNMTI1IDBoMjQ5bDEgNzUwaDEyNHYxMjRoLTEyNWwxIDEyNmgyNDl2MTI0aC0zNzR2LTEyNGwtMTI1IC0xdi0xMjRsLTEyNSAtMXYtMTI0aDEyNXYtNzUweiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJnIiB1bmljb2RlPSJnIiAKZD0iTTAgLTI1MGgxMjR2MTI0aC0xMjR2LTEyNHpNMTI1IC0zNzVoNDk5bDEgMTI1aDEyNHYxMTI0aC02MjR2LTEyNGgzNzV2LTYyNWwtMjUxIC0xdjYyNWgtMjQ5di02MjRoMTI1di0xMjVoMzc1di0yNTBoLTM3NXYtMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJoIiB1bmljb2RlPSJoIiAKZD0iTTAgMGgyNDlsMSA3NTBoMjUwdi03NTBoMjQ5djc0OWgtMTI1djEyNWgtMzc1djI1MGgtMjQ5di0xMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJpIiB1bmljb2RlPSJpIiBob3Jpei1hZHYteD0iMzc1IiAKZD0iTTAgMGgyNDl2ODc0aC0yNDl2LTg3NHpNMCAxMDAwaDI0OXYxMjRoLTI0OXYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJqIiB1bmljb2RlPSJqIiBob3Jpei1hZHYteD0iNzUwIiAKZD0iTTAgLTEyNWgxMjR2MTI0aC0xMjR2LTEyNHpNMTI1IC0yNTBoMzc0bDEgMTI1aDEyNHY5OTloLTI0OXYtOTk5aC0yNTB2LTEyNXpNMzc1IDEwMDBoMjQ5djEyNGgtMjQ5di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImsiIHVuaWNvZGU9ImsiIGhvcml6LWFkdi14PSIxMDAwIiAKZD0iTTAgMGgyNDlsMSAyNTBoMTI1di0xMjVoMTI1di0xMjVoMjQ5djEyNGgtMTI1djEyNWgtMTI1djEyNWgtMjUwbDEgMTI2aDI0OWwxIDEyNWgxMjRsMSAxMjVoMTI0djEyNGgtMjQ5di0xMjRsLTEyNSAtMXYtMTI0bC0xMjYgLTF2NTAwaC0yNDl2LTExMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImwiIHVuaWNvZGU9ImwiIGhvcml6LWFkdi14PSIzNzUiIApkPSJNMCAwaDI0OXYxMTI0aC0yNDl2LTExMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Im0iIHVuaWNvZGU9Im0iIGhvcml6LWFkdi14PSIxMzc1IiAKZD0iTTAgMGgyNDlsMSA3NTBoMjUwdi03NTBoMjQ5djc0OWgtMTI1djEyNWgtNjI0di04NzR6TTEwMDAgMGgyNDl2NzQ5aC0xMjV2MTI1aC0zNzR2LTEyNGgyNTB2LTc1MHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ibiIgdW5pY29kZT0ibiIgCmQ9Ik0wIDBoMjQ5bDEgNzUwaDI1MHYtNzUwaDI0OXY3NDloLTEyNXYxMjVoLTYyNHYtODc0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJvIiB1bmljb2RlPSJvIiAKZD0iTTEyNSAwaDQ5OWwxIDEyNWgxMjR2NjI0aC0xMjV2MTI1aC0xMjR2LTc0OWwtMjUxIC0xbDEgNjI2aDI0OXYxMjRoLTM3NHYtMTI0bC0xMjUgLTF2LTYyNGgxMjV2LTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0icCIgdW5pY29kZT0icCIgCmQ9Ik0wIDB2LTI1MGgyNDlsMSAyNTBoMzc0bDEgMTI1aDEyNHY2MjRoLTEyNXYxMjVoLTEyNHYtNzQ5bC0yNTEgLTFsMSA2MjZoMjQ5djEyNGgtNDk5di04NzR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InEiIHVuaWNvZGU9InEiIApkPSJNNTAwIC0yNTBoMjQ5djExMjRoLTI0OXYtNzQ5bC0yNTEgLTFsMSA2MjZoMjQ5djEyNGgtMzc0di0xMjRsLTEyNSAtMXYtNjI0aDEyNXYtMTI1aDM3NXYtMjUweiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJyIiB1bmljb2RlPSJyIiBob3Jpei1hZHYteD0iNzUwIiAKZD0iTTAgMGgyNDlsMSA2MjVoMzc0djI0OWgtMjQ5di0xMjRsLTEyNiAtMXYxMjVoLTI0OXYtODc0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJzIiB1bmljb2RlPSJzIiBob3Jpei1hZHYteD0iNzUwIiAKZD0iTTEyNSAwaDM3NGwxIDEyNWgxMjR2MjQ5aC0xMjV2MTI1aC0xMjV2MTI1aC0xMjVsMSAxMjZoMjQ5djEyNGgtMzc0di0xMjRsLTEyNSAtMXYtMjQ5aDEyNXYtMTI1aDEyNXYtMTI1aDEyNXYtMTI1aC0yNTB2LTEyNXpNMCAxMjVoMTI0djEyNGgtMTI0di0xMjR6TTUwMCA2MjVoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InQiIHVuaWNvZGU9InQiIGhvcml6LWFkdi14PSI2MjUiIApkPSJNMjUwIDBoMjQ5djEyNGgtMTI1bDEgNjI2aDEyNHYxMjRoLTEyNXYyNTBoLTI0OXYtMjQ5bC0xMjUgLTF2LTEyNGgxMjV2LTYyNWgxMjV2LTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0idSIgdW5pY29kZT0idSIgCmQ9Ik0xMjUgMGg2MjR2ODc0aC0yNDl2LTc0OWwtMjUxIC0xdjc1MGgtMjQ5di03NDloMTI1di0xMjV6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InYiIHVuaWNvZGU9InYiIApkPSJNMCAwaDQ5OXYxMjRoLTI1MHY3NTBoLTI0OXYtODc0ek01MDAgMTI1aDEyNGwxIDEyNWgxMjR2NjI0aC0yNDl2LTc0OXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0idyIgdW5pY29kZT0idyIgaG9yaXotYWR2LXg9IjEzNzUiIApkPSJNMCAwaDk5OXYxMjRoLTI1MHY3NTBoLTI0OXYtNzQ5bC0yNTEgLTF2NzUwaC0yNDl2LTg3NHpNMTAwMCAxMjVoMTI0bDEgMTI1aDEyNHY2MjRoLTI0OXYtNzQ5eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ4IiB1bmljb2RlPSJ4IiAKZD0iTTAgMGgyNDl2Mzc0aC0yNDl2LTM3NHpNNTAwIDBoMjQ5djM3NGgtMjQ5di0zNzR6TTM3NSAzNzVoMTI0djEyNGgtMjQ5di0xMjRoMTI1ek0wIDUwMGgyNDl2Mzc0aC0yNDl2LTM3NHpNNTAwIDUwMGgyNDl2Mzc0aC0yNDl2LTM3NHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ieSIgdW5pY29kZT0ieSIgCmQ9Ik0wIC0yNTBoMTI0djEyNGgtMTI0di0xMjR6TTEyNSAtMzc1aDQ5OWwxIDEyNWgxMjR2MTEyNGgtMjQ5di03NDlsLTI1MSAtMXY3NTBoLTI0OXYtNzQ5aDEyNXYtMTI1aDM3NXYtMjUwaC0zNzV2LTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ieiIgdW5pY29kZT0ieiIgCmQ9Ik0wIDBoNzQ5djEyNGgtNTAwdjI1MGgtMTI0di0xMjRoLTEyNXYtMjUwek0yNTAgMzc1aDEyNHYxMjRoLTEyNHYtMTI0ek0zNzUgNTAwaDEyNHYxMjRoLTEyNHYtMTI0ek01MDAgNjI1aDEyNGwxIDEyNWgxMjR2MTI0aC03NDl2LTEyNGg1MDB2LTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iYnJhY2VsZWZ0IiB1bmljb2RlPSJ7IiBob3Jpei1hZHYteD0iNTAwIiAKZD0iTTI1MCAtMTI1aDEyNHYxMjRoLTEyNHYtMTI0ek0xMjUgMGgxMjR2NDk5aC0xMjR2LTQ5OXpNMCA1MDBoMTI0djEyNGgtMTI0di0xMjR6TTEyNSA2MjVoMTI0djQ5OWgtMTI0di00OTl6TTI1MCAxMTI1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJiYXIiIHVuaWNvZGU9InwiIGhvcml6LWFkdi14PSIyNTAiIApkPSJNMCAwdi0xMjVoMTI0djEzNzRoLTEyNHYtMTI0OXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iYnJhY2VyaWdodCIgdW5pY29kZT0ifSIgaG9yaXotYWR2LXg9IjUwMCIgCmQ9Ik0wIC0xMjVoMTI0djEyNGgtMTI0di0xMjR6TTEyNSAwaDEyNHY0OTloLTEyNHYtNDk5ek0yNTAgNTAwaDEyNHYxMjRoLTEyNHYtMTI0ek0xMjUgNjI1aDEyNHY0OTloLTEyNHYtNDk5ek0wIDExMjVoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImFzY2lpdGlsZGUiIHVuaWNvZGU9In4iIApkPSJNNTAwIDYyNWgxMjR2MTI0aC0yNDl2LTEyNGgxMjV6TTAgNjI1aDEyNHYxMjRoLTEyNHYtMTI0ek0xMjUgNzUwaDI0OXYxMjRoLTI0OXYtMTI0ek02MjUgNzUwaDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ1bmkwMDdGIiBob3Jpei1hZHYteD0iNzUwIiAKZD0iTTAgMGg2MjR2MTQ5OWgtMTI0di0xMzc0bC0zNzYgLTFsMSAxMjUxaDM3NHYxMjRoLTQ5OXYtMTQ5OXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0idW5pMDA4MCIgaG9yaXotYWR2LXg9Ijc1MCIgCmQ9Ik0wIDBoNjI0djE0OTloLTEyNHYtMTM3NGwtMzc2IC0xbDEgMTI1MWgzNzR2MTI0aC00OTl2LTE0OTl6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InVuaTAwODEiIGhvcml6LWFkdi14PSI3NTAiIApkPSJNMCAwaDYyNHYxNDk5aC0xMjR2LTEzNzRsLTM3NiAtMWwxIDEyNTFoMzc0djEyNGgtNDk5di0xNDk5eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ1bmkwMDhEIiBob3Jpei1hZHYteD0iNzUwIiAKZD0iTTAgMGg2MjR2MTQ5OWgtMTI0di0xMzc0bC0zNzYgLTFsMSAxMjUxaDM3NHYxMjRoLTQ5OXYtMTQ5OXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0idW5pMDA4RSIgCmQ9Ik0wIDBoNzQ5djEyNGgtNTAwbDEgMTI2aDEyNGwxIDI1MGgxMjRsMSAxMjVoMTI0bDEgMjUwaDEyNHYyNDloLTc0OXYtMTI0aDM3NXYtMjUwbC0xMjUgLTF2LTI0OWwtMTI1IC0xdi0yNDloLTEyNXYtMjUwek0yNTAgMTI1MGgyNDlsMSAxMjVoMTI0djEyNGgtNDk5di0xMjRoMTI1di0xMjV6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InVuaTAwOEYiIGhvcml6LWFkdi14PSI3NTAiIApkPSJNMCAwaDYyNHYxNDk5aC0xMjR2LTEzNzRsLTM3NiAtMWwxIDEyNTFoMzc0djEyNGgtNDk5di0xNDk5eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ1bmkwMDkwIiBob3Jpei1hZHYteD0iNzUwIiAKZD0iTTAgMGg2MjR2MTQ5OWgtMTI0di0xMzc0bC0zNzYgLTFsMSAxMjUxaDM3NHYxMjRoLTQ5OXYtMTQ5OXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0idW5pMDA5RCIgaG9yaXotYWR2LXg9Ijc1MCIgCmQ9Ik0wIDBoNjI0djE0OTloLTEyNHYtMTM3NGwtMzc2IC0xbDEgMTI1MWgzNzR2MTI0aC00OTl2LTE0OTl6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InVuaTAwOUUiIApkPSJNMCAwaDc0OXYxMjRoLTUwMHYyNTBoLTEyNHYtMTI0aC0xMjV2LTI1MHpNMjUwIDM3NWgxMjR2MTI0aC0xMjR2LTEyNHpNMzc1IDUwMGgxMjR2MTI0aC0xMjR2LTEyNHpNNTAwIDYyNWgxMjRsMSAxMjVoMTI0djEyNGgtNzQ5di0xMjRoNTAwdi0xMjV6TTI1MCAxMDAwaDI0OWwxIDEyNWgxMjR2MTI0aC00OTl2LTEyNGgxMjV2LTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iZXhjbGFtZG93biIgdW5pY29kZT0iJiN4YTE7IiBob3Jpei1hZHYteD0iMzc1IiAKZD0iTTAgMGgyNDl2NzQ5aC0yNDl2LTc0OXpNMCA4NzVoMjQ5djI0OWgtMjQ5di0yNDl6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImNlbnQiIHVuaWNvZGU9IiYjeGEyOyIgaG9yaXotYWR2LXg9IjYyNSIgCmQ9Ik0yNTAgMjUwaDEyNGwxIDEyNWgxMjR2MjQ5aC0xMjVsMSAyNTFoMTI0djI0OWgtMTI1djEyNWgtMTI0di0xMjRsLTEyNSAtMXYtMTI0aDEyNXYtNTAwbC0xMjUgLTF2LTEyNGgxMjV2LTEyNXpNMCA1MDBoMTI0djQ5OWgtMTI0di00OTl6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InN0ZXJsaW5nIiB1bmljb2RlPSImI3hhMzsiIGhvcml6LWFkdi14PSIxMDAwIiAKZD0iTTAgMGg3NDl2MTI0aC0zNzVsMSAzNzZoMTI0djEyNGgtMTI1bDEgMzc2aDI0OXYxMjRoLTM3NHYtMTI0bC0xMjUgLTF2LTM3NGwtMTI1IC0xdi0xMjRoMTI1di0zNzVoLTEyNXYtMTI1ek03NTAgMTI1aDEyNHYxMjRoLTEyNHYtMTI0ek02MjUgODc1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJjdXJyZW5jeSIgdW5pY29kZT0iJiN4YTQ7IiAKZD0iTTAgMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek02MjUgMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek01MDAgMzc1aDEyNHY0OTloLTEyNHYtMzc0bC0yNTEgLTFsMSAyNTFoMjQ5djEyNGgtMzc0di00OTloMzc1ek0wIDg3NWgxMjR2MTI0aC0xMjR2LTEyNHpNNjI1IDg3NWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ieWVuIiB1bmljb2RlPSImI3hhNTsiIApkPSJNMjUwIDBoMjQ5bDEgMjUwaDI0OXYxMjRoLTI1MGwxIDEyNmgyNDl2MTI0aC0xMjVsMSAxMjZoMTI0djM3NGgtMjQ5di0zNzRsLTI1MSAtMXYzNzVoLTI0OXYtMzc0aDEyNXYtMTI1bC0xMjUgLTF2LTEyNGgyNTB2LTEyNWwtMjUwIC0xdi0xMjRoMjUwdi0yNTB6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImJyb2tlbmJhciIgdW5pY29kZT0iJiN4YTY7IiBob3Jpei1hZHYteD0iMjUwIiAKZD0iTTAgMHYtMTI1aDEyNHY2MjRoLTEyNHYtNDk5ek0wIDYyNWgxMjR2NjI0aC0xMjR2LTYyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ic2VjdGlvbiIgdW5pY29kZT0iJiN4YTc7IiBob3Jpei1hZHYteD0iNzUwIiAKZD0iTTAgLTI1MGgxMjR2MTI0aC0xMjR2LTEyNHpNMTI1IC0zNzVoMzc0djEyNGgtMzc0di0xMjR6TTUwMCAtMjUwaDEyNHYyNDloLTEyNHYtMjQ5ek0zNzUgMGgxMjR2MTI0aC0xMjR2LTEyNHpNMjUwIDEyNWgxMjR2MTI0aC0xMjR2LTEyNHpNNTAwIDEyNWgxMjR2MjQ5aC0xMjR2LTI0OXpNMTI1IDI1MGgxMjR2MTI0aC0xMjR2LTEyNHpNMCAzNzVoMTI0djI0OWgtMTI0di0yNDl6TTM3NSAzNzVoMTI0djEyNGgtMTI0di0xMjR6TTI1MCA1MDAKaDEyNHYxMjRoLTEyNHYtMTI0ek0xMjUgNjI1aDEyNHYxMjRoLTEyNHYtMTI0ek0wIDc1MGgxMjR2MjQ5aC0xMjR2LTI0OXpNNTAwIDg3NWgxMjR2MTI0aC0xMjR2LTEyNHpNMzc1IDEwMDBoMTI0djEyNGgtMzc0di0xMjRoMjUweiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJkaWVyZXNpcyIgdW5pY29kZT0iJiN4YTg7IiBob3Jpei1hZHYteD0iNjI1IiAKZD0iTTAgMTAwMGgxMjR2MTI0aC0xMjR2LTEyNHpNMzc1IDEwMDBoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImNvcHlyaWdodCIgdW5pY29kZT0iJiN4YTk7IiBob3Jpei1hZHYteD0iMTEyNSIgCmQ9Ik0xMjUgMGg3NDlsMSAxMjVoMTI0djg3NGgtMTI0di03NDlsLTEyNSAtMXYtMTI0bC01MDEgLTF2MTI1aC0xMjVsMSA2MjZoMTI0bDEgMTI1aDUwMHYtMTI1aDEyNHYyNDloLTc0OXYtMTI0bC0xMjUgLTF2LTg3NGgxMjV2LTEyNXpNMzc1IDI1MGgyNDl2MTI0aC0yNDl2LTEyNHpNNjI1IDM3NWgxMjR2MTI0aC0xMjR2LTEyNHpNMjUwIDM3NWgxMjR2Mzc0aC0xMjR2LTM3NHpNNjI1IDYyNWgxMjR2MTI0aC0xMjR2LTEyNHpNMzc1IDc1MGgyNDkKdjEyNGgtMjQ5di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Im9yZGZlbWluaW5lIiB1bmljb2RlPSImI3hhYTsiIGhvcml6LWFkdi14PSI3NTAiIApkPSJNMzc1IDEyNWgyNDl2MTI0aC02MjR2LTEyNGgzNzV6TTM3NSAzNzVoMjQ5djYyNGgtMTI1djEyNWgtMzc0di0xMjRoMjUwdi01MDBsLTEyNiAtMWwxIDI1MWgxMjR2MTI0aC0yNDl2LTEyNGwtMTI1IC0xdi0yNDloMTI1di0xMjVoMjUwek0wIDg3NWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iZ3VpbGxlbW90bGVmdCIgdW5pY29kZT0iJiN4YWI7IiBob3Jpei1hZHYteD0iMTAwMCIgCmQ9Ik0zNzUgMGgxMjR2MTI0aC0xMjR2LTEyNHpNNzUwIDBoMTI0djEyNGgtMTI0di0xMjR6TTYyNSAxMjVoMTI0djEyNGgtMTI0di0xMjR6TTI1MCAxMjVoMTI0djEyNGgtMTI0di0xMjR6TTEyNSAyNTBoMTI0djEyNGgtMTI0di0xMjR6TTUwMCAyNTBoMTI0djEyNGgtMTI0di0xMjR6TTM3NSAzNzVoMTI0djEyNGgtMTI0di0xMjR6TTAgMzc1aDEyNHYxMjRoLTEyNHYtMTI0ek0xMjUgNTAwaDEyNHYxMjRoLTEyNHYtMTI0ek01MDAgNTAwaDEyNAp2MTI0aC0xMjR2LTEyNHpNNjI1IDYyNWgxMjR2MTI0aC0xMjR2LTEyNHpNMjUwIDYyNWgxMjR2MTI0aC0xMjR2LTEyNHpNMzc1IDc1MGgxMjR2MTI0aC0xMjR2LTEyNHpNNzUwIDc1MGgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ibG9naWNhbG5vdCIgdW5pY29kZT0iJiN4YWM7IiBob3Jpei1hZHYteD0iNzUwIiAKZD0iTTUwMCAxMjVoMTI0djM3NGgtNjI0di0xMjRoNTAwdi0yNTB6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InVuaTAwQUQiIHVuaWNvZGU9IiYjeGFkOyIgCmQ9Ik01MDAgMzc1aDI0OXYxMjRoLTc0OXYtMTI0aDUwMHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0icmVnaXN0ZXJlZCIgdW5pY29kZT0iJiN4YWU7IiBob3Jpei1hZHYteD0iMTEyNSIgCmQ9Ik0xMjUgMGg3NDlsMSAxMjVoMTI0djg3NGgtMTI0di03NDlsLTEyNSAtMXYtMTI0bC01MDEgLTF2MTI1aC0xMjVsMSA2MjZoMTI0bDEgMTI1aDUwMHYtMTI1aDEyNHYyNDloLTc0OXYtMTI0bC0xMjUgLTF2LTg3NGgxMjV2LTEyNXpNMjUwIDI1MGgxMjRsMSAyNTBoMjQ5djEyNGgtMjUwbDEgMTI2aDI1MHYtMTI1aDEyNHYyNDloLTQ5OXYtNjI0ek02MjUgMjUwaDEyNHYyNDloLTEyNHYtMjQ5eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJtYWNyb24iIHVuaWNvZGU9IiYjeGFmOyIgaG9yaXotYWR2LXg9IjYyNSIgCmQ9Ik0wIDEwMDBoNDk5djEyNGgtNDk5di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImRlZ3JlZSIgdW5pY29kZT0iJiN4YjA7IiBob3Jpei1hZHYteD0iNjI1IiAKZD0iTTI1MCA2MjVoMTI0djEyNGgtMjQ5di0xMjRoMTI1ek0wIDc1MGgxMjR2MjQ5aC0xMjR2LTI0OXpNMzc1IDc1MGgxMjR2MjQ5aC0xMjR2LTI0OXpNMTI1IDEwMDBoMjQ5djEyNGgtMjQ5di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InBsdXNtaW51cyIgdW5pY29kZT0iJiN4YjE7IiBob3Jpei1hZHYteD0iMTAwMCIgCmQ9Ik0wIDBoODc0djEyNGgtODc0di0xMjR6TTM3NSAyNTBoMTI0bDEgMjUwaDM3NHYxMjRoLTM3NXYyNTBoLTEyNHYtMjQ5bC0zNzUgLTF2LTEyNGgzNzV2LTI1MHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0idW5pMDBCMiIgdW5pY29kZT0iJiN4YjI7IiBob3Jpei1hZHYteD0iNzUwIiAKZD0iTTAgMjUwaDYyNHYxMjRoLTM3NWwxIDEyNmgxMjRsMSAxMjVoMTI0bDEgMTI1aDEyNHYyNDloLTEyNXYxMjVoLTM3NHYtMTI0aDI1MHYtMjUwbC0xMjUgLTF2LTEyNGwtMTI1IC0xdi0xMjRoLTEyNXYtMjUwek0wIDg3NWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0idW5pMDBCMyIgdW5pY29kZT0iJiN4YjM7IiBob3Jpei1hZHYteD0iNzUwIiAKZD0iTTAgMjUwaDQ5OWwxIDEyNWgxMjR2Mzc0aC0yNTB2MTI1aC0xMjR2LTEyNGwtMTI1IC0xdi0xMjRoMjUwdi0yNTBsLTI1MSAtMXYxMjVoLTEyNHYtMjQ5ek0zNzUgODc1aDI0OXYyNDloLTYyNHYtMTI0aDM3NXYtMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJhY3V0ZSIgdW5pY29kZT0iJiN4YjQ7IiBob3Jpei1hZHYteD0iMzc1IiAKZD0iTTAgMTAwMGgxMjR2MTI0aC0xMjR2LTEyNHpNMTI1IDExMjVoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Im11IiB1bmljb2RlPSImI3hiNTsiIGhvcml6LWFkdi14PSIxMTI1IiAKZD0iTTAgMHYtMjUwaDI0OWwxIDI1MGgzNzR2MTI0aC0yNTBsMSA1MDFoMTI0djI0OWgtMjQ5di0xMjRsLTEyNSAtMXYtNjI0aC0xMjV2LTEyNXpNNzUwIDBoMjQ5djEyNGgtMTI1bDEgNjI2aDEyNHYxMjRoLTI0OXYtMTI0bC0xMjUgLTF2LTYyNGgxMjV2LTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0icGFyYWdyYXBoIiB1bmljb2RlPSImI3hiNjsiIGhvcml6LWFkdi14PSIxMTI1IiAKZD0iTTYyNSAwaDEyNGwxIDEwMDBoMTI1di0xMDAwaDEyNHYxMTI0aC0zNzR2LTQ5OWwtMzc2IC0xbDEgMzc2aDM3NHYxMjRoLTQ5OXYtMTI0bC0xMjUgLTF2LTM3NGgxMjV2LTEyNWg1MDB2LTUwMHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0icGVyaW9kY2VudGVyZWQiIHVuaWNvZGU9IiYjeGI3OyIgaG9yaXotYWR2LXg9IjM3NSIgCmQ9Ik0wIDM3NWgyNDl2MjQ5aC0yNDl2LTI0OXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iY2VkaWxsYSIgdW5pY29kZT0iJiN4Yjg7IiBob3Jpei1hZHYteD0iMzc1IiAKZD0iTTAgLTEyNWgxMjV2LTEyNWwtMTI1IC0xdi0xMjRoMjQ5djM3NGgtMjQ5di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InVuaTAwQjkiIHVuaWNvZGU9IiYjeGI5OyIgaG9yaXotYWR2LXg9IjM3NSIgCmQ9Ik0wIDI1MGgyNDl2ODc0aC0xMjR2LTEyNGgtMTI1di03NTB6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Im9yZG1hc2N1bGluZSIgdW5pY29kZT0iJiN4YmE7IiBob3Jpei1hZHYteD0iNzUwIiAKZD0iTTM3NSAxMjVoMjQ5djEyNGgtNjI0di0xMjRoMzc1ek0zNzUgMzc1aDEyNGwxIDEyNWgxMjR2NDk5aC0xMjV2MTI1aC0xMjR2LTYyNGwtMTI2IC0xbDEgNTAxaDEyNHYxMjRoLTI0OXYtMTI0bC0xMjUgLTF2LTQ5OWgxMjV2LTEyNWgyNTB6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Imd1aWxsZW1vdHJpZ2h0IiB1bmljb2RlPSImI3hiYjsiIGhvcml6LWFkdi14PSIxMDAwIiAKZD0iTTAgMGgxMjRsMSAxMjVoMTI0bDEgMTI1aDEyNGwxIDEyNWgxMjR2MTI0aC0xMjV2MTI1aC0xMjV2MTI1aC0xMjV2MTI1aC0xMjR2LTI0OWgxMjV2LTEyNWgxMjV2LTEyNWwtMTI1IC0xdi0xMjRoLTEyNXYtMjUwek0zNzUgMGgxMjRsMSAxMjVoMTI0bDEgMTI1aDEyNGwxIDEyNWgxMjR2MTI0aC0xMjV2MTI1aC0xMjV2MTI1aC0xMjV2MTI1aC0xMjR2LTI0OWgxMjV2LTEyNWgxMjV2LTEyNWwtMTI1IC0xdi0xMjRoLTEyNXYtMjUweiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJvbmVxdWFydGVyIiB1bmljb2RlPSImI3hiYzsiIGhvcml6LWFkdi14PSIxNTAwIiAKZD0iTTI1MCAwaDEyNGwxIDEyNWgxMjRsMSAzNzVoMTI0bDEgMzc1aDEyNHYyNDloLTEyNHYtMTI0bC0xMjUgLTF2LTM3NGwtMTI1IC0xdi0zNzRoLTEyNXYtMjUwek0xMDAwIDBoMjQ5bDEgMjUwaDEyNHYxMjRoLTEyNXY1MDBoLTM3NHYtMjQ5aDEyNXYtMjUwbC0xMjYgLTF2MjUwaC0xMjR2LTEyNGwtMTI1IC0xdi0yNDloMzc1di0yNTB6TTAgMjUwaDI0OXY4NzRoLTEyNHYtMTI0aC0xMjV2LTc1MHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ib25laGFsZiIgdW5pY29kZT0iJiN4YmQ7IiBob3Jpei1hZHYteD0iMTUwMCIgCmQ9Ik0yNTAgMGgxMjRsMSAxMjVoMTI0bDEgMzc1aDEyNGwxIDM3NWgxMjR2MjQ5aC0xMjR2LTEyNGwtMTI1IC0xdi0zNzRsLTEyNSAtMXYtMzc0aC0xMjV2LTI1MHpNNzUwIDBoNjI0djEyNGgtMzc1bDEgMTI2aDEyNGwxIDEyNWgxMjRsMSAxMjVoMTI0djI0OWgtMTI1djEyNWgtMzc0di0xMjRoMjUwdi0yNTBsLTEyNSAtMXYtMTI0bC0xMjUgLTF2LTEyNGgtMTI1di0yNTB6TTAgMjUwaDI0OXY4NzRoLTEyNHYtMTI0aC0xMjV2LTc1MHoKTTc1MCA2MjVoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InRocmVlcXVhcnRlcnMiIHVuaWNvZGU9IiYjeGJlOyIgaG9yaXotYWR2LXg9IjE4NzUiIApkPSJNNjI1IDBoMTI0bDEgMTI1aDEyNGwxIDM3NWgxMjRsMSAzNzVoMTI0djI0OWgtMTI0di0xMjRsLTEyNSAtMXYtMzc0bC0xMjUgLTF2LTM3NGgtMTI1di0yNTB6TTEzNzUgMGgyNDlsMSAyNTBoMTI0djEyNGgtMTI1djUwMGgtMzc0di0yNDloMTI1di0yNTBsLTEyNiAtMXYyNTBoLTEyNHYtMTI0bC0xMjUgLTF2LTI0OWgzNzV2LTI1MHpNMCAyNTBoNDk5bDEgMTI1aDEyNHYzNzRoLTI1MHYxMjVoLTEyNHYtMTI0bC0xMjUgLTF2LTEyNGgyNTAKdi0yNTBsLTI1MSAtMXYxMjVoLTEyNHYtMjQ5ek01MDAgODc1aDEyNHYyNDloLTYyNHYtMTI0aDM3NXYtMTI1aDEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0icXVlc3Rpb25kb3duIiB1bmljb2RlPSImI3hiZjsiIApkPSJNMTI1IDBoNDk5djEyNGgtMzc1bDEgMjUxaDEyNGwxIDEyNWgxMjR2MjQ5aC0yNDl2LTI0OWwtMTI1IC0xdi0xMjRsLTEyNSAtMXYtMjQ5aDEyNXYtMTI1ek02MjUgMTI1aDEyNHYxMjRoLTEyNHYtMTI0ek0zNzUgODc1aDEyNHYyNDloLTI0OXYtMjQ5aDEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iQWdyYXZlIiB1bmljb2RlPSImI3hjMDsiIApkPSJNMCAwaDI0OWwxIDUwMGgyNTB2LTUwMGgyNDl2OTk5aC0xMjV2MTI1aC0xMjR2LTQ5OWwtMjUxIC0xbDEgMzc2aDI0OXYxMjRoLTM3NHYtMTI0aC0xMjV2LTEwMDB6TTM3NSAxMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek0yNTAgMTM3NWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iQWFjdXRlIiB1bmljb2RlPSImI3hjMTsiIApkPSJNMCAwaDI0OWwxIDUwMGgyNTB2LTUwMGgyNDl2OTk5aC0xMjV2MTI1aC0xMjR2LTQ5OWwtMjUxIC0xbDEgMzc2aDI0OXYxMjRoLTM3NHYtMTI0aC0xMjV2LTEwMDB6TTI1MCAxMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek0zNzUgMTM3NWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iQWNpcmN1bWZsZXgiIHVuaWNvZGU9IiYjeGMyOyIgCmQ9Ik0wIDBoMjQ5bDEgNTAwaDI1MHYtNTAwaDI0OXY5OTloLTEyNXYxMjVoLTEyNHYtNDk5bC0yNTEgLTFsMSAzNzZoMjQ5djEyNGgtMzc0di0xMjRoLTEyNXYtMTAwMHpNMTI1IDEyNTBoNDk5djEyNGgtMTI1djEyNWgtMjQ5di0xMjRoLTEyNXYtMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJBdGlsZGUiIHVuaWNvZGU9IiYjeGMzOyIgCmQ9Ik0wIDBoMjQ5bDEgNTAwaDI1MHYtNTAwaDI0OXY5OTloLTEyNXYxMjVoLTEyNHYtNDk5bC0yNTEgLTFsMSAzNzZoMjQ5djEyNGgtMzc0di0xMjRoLTEyNXYtMTAwMHpNMCAxMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek0zNzUgMTI1MGgyNDl2MTI0aC0yNDl2LTEyNHpNMjUwIDEzNzVoMTI0djEyNGgtMjQ5di0xMjRoMTI1ek02MjUgMTM3NWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iQWRpZXJlc2lzIiB1bmljb2RlPSImI3hjNDsiIApkPSJNMCAwaDI0OWwxIDUwMGgyNTB2LTUwMGgyNDl2OTk5aC0xMjV2MTI1aC0xMjR2LTQ5OWwtMjUxIC0xbDEgMzc2aDI0OXYxMjRoLTM3NHYtMTI0aC0xMjV2LTEwMDB6TTEyNSAxMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek01MDAgMTI1MGgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iQXJpbmciIHVuaWNvZGU9IiYjeGM1OyIgCmQ9Ik0wIDBoMjQ5bDEgNTAwaDI1MHYtNTAwaDI0OXY5OTloLTEyNXYzNzVoLTEyNHYtNzQ5bC0yNTEgLTFsMSAzNzZoMjQ5djEyNGgtMjUwdjI1MGgtMTI0di0zNzRoLTEyNXYtMTAwMHpNMzc1IDEzNzVoMTI0djEyNGgtMjQ5di0xMjRoMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJBRSIgdW5pY29kZT0iJiN4YzY7IiBob3Jpei1hZHYteD0iMTI1MCIgCmQ9Ik0wIDBoMjQ5bDEgNTAwaDI1MHYtNTAwaDYyNHYxMjRoLTM3NWwxIDM3NmgyNDl2MTI0aC0yNTBsMSAzNzZoMzc0djEyNGgtNjI0di00OTlsLTI1MSAtMWwxIDM3NmgyNDl2MTI0aC0zNzR2LTEyNGgtMTI1di0xMDAweiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJDY2VkaWxsYSIgdW5pY29kZT0iJiN4Yzc7IiAKZD0iTTM3NSAtMzc1aDI0OXY0OTloLTM3NWwxIDg3NmgzNzR2MTI0aC00OTl2LTEyNGwtMTI1IC0xdi04NzRoMTI1di0xMjVoMTI1di0xMjVoMjUwdi0xMjVoLTEyNXYtMTI1ek02MjUgMTI1aDEyNHYxMjRoLTEyNHYtMTI0ek02MjUgODc1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJFZ3JhdmUiIHVuaWNvZGU9IiYjeGM4OyIgaG9yaXotYWR2LXg9Ijc1MCIgCmQ9Ik0wIDBoNjI0djEyNGgtMzc1bDEgMzc2aDI0OXYxMjRoLTI1MGwxIDM3NmgzNzR2MTI0aC02MjR2LTExMjR6TTI1MCAxMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek0xMjUgMTM3NWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iRWFjdXRlIiB1bmljb2RlPSImI3hjOTsiIGhvcml6LWFkdi14PSI3NTAiIApkPSJNMCAwaDYyNHYxMjRoLTM3NWwxIDM3NmgyNDl2MTI0aC0yNTBsMSAzNzZoMzc0djEyNGgtNjI0di0xMTI0ek0yNTAgMTI1MGgxMjR2MTI0aC0xMjR2LTEyNHpNMzc1IDEzNzVoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9IkVjaXJjdW1mbGV4IiB1bmljb2RlPSImI3hjYTsiIGhvcml6LWFkdi14PSI3NTAiIApkPSJNMCAwaDYyNHYxMjRoLTM3NWwxIDM3NmgyNDl2MTI0aC0yNTBsMSAzNzZoMzc0djEyNGgtNjI0di0xMTI0ek0wIDEyNTBoNDk5djEyNGgtMTI1djEyNWgtMjQ5di0xMjRoLTEyNXYtMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJFZGllcmVzaXMiIHVuaWNvZGU9IiYjeGNiOyIgaG9yaXotYWR2LXg9Ijc1MCIgCmQ9Ik0wIDBoNjI0djEyNGgtMzc1bDEgMzc2aDI0OXYxMjRoLTI1MGwxIDM3NmgzNzR2MTI0aC02MjR2LTExMjR6TTAgMTI1MGgxMjR2MTI0aC0xMjR2LTEyNHpNMzc1IDEyNTBoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9IklncmF2ZSIgdW5pY29kZT0iJiN4Y2M7IiBob3Jpei1hZHYteD0iMzc1IiAKZD0iTTAgMGgyNDl2MTEyNGgtMjQ5di0xMTI0ek0xMjUgMTI1MGgxMjR2MTI0aC0xMjR2LTEyNHpNMCAxMzc1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJJYWN1dGUiIHVuaWNvZGU9IiYjeGNkOyIgaG9yaXotYWR2LXg9IjM3NSIgCmQ9Ik0wIDBoMjQ5djExMjRoLTI0OXYtMTEyNHpNMCAxMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek0xMjUgMTM3NWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iSWNpcmN1bWZsZXgiIHVuaWNvZGU9IiYjeGNlOyIgaG9yaXotYWR2LXg9IjYyNSIgCmQ9Ik0xMjUgMGgyNDl2MTEyNGgtMjQ5di0xMTI0ek0wIDEyNTBoNDk5djEyNGgtMTI1djEyNWgtMjQ5di0xMjRoLTEyNXYtMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJJZGllcmVzaXMiIHVuaWNvZGU9IiYjeGNmOyIgaG9yaXotYWR2LXg9IjYyNSIgCmQ9Ik0xMjUgMGgyNDl2MTEyNGgtMjQ5di0xMTI0ek0wIDEyNTBoMTI0djEyNGgtMTI0di0xMjR6TTM3NSAxMjUwaDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJFdGgiIHVuaWNvZGU9IiYjeGQwOyIgaG9yaXotYWR2LXg9IjEwMDAiIApkPSJNMTI1IDBoNjI0bDEgMTI1aDEyNHY4NzRoLTEyNXYxMjVoLTEyNHYtOTk5bC0yNTEgLTFsMSAzNzZoMTI0djEyNGgtMTI1bDEgMzc2aDI0OXYxMjRoLTQ5OXYtNDk5bC0xMjUgLTF2LTEyNGgxMjV2LTUwMHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iTnRpbGRlIiB1bmljb2RlPSImI3hkMTsiIGhvcml6LWFkdi14PSIxMDAwIiAKZD0iTTAgMGgxMjRsMSA2MjVoMTI1di0xMjVoMTI1di0xMjVoMTI1di0xMjVoMTI1di0xMjVoMTI1di0xMjVoMTI0djExMjRoLTEyNHYtNjI0bC0xMjYgLTF2MTI1aC0xMjV2MTI1aC0xMjV2MTI1aC0xMjV2MTI1aC0xMjV2MTI1aC0xMjR2LTExMjR6TTEyNSAxMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek01MDAgMTI1MGgyNDl2MTI0aC0yNDl2LTEyNHpNMzc1IDEzNzVoMTI0djEyNGgtMjQ5di0xMjRoMTI1ek03NTAgMTM3NWgxMjR2MTI0aC0xMjQKdi0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Ik9ncmF2ZSIgdW5pY29kZT0iJiN4ZDI7IiAKZD0iTTEyNSAwaDQ5OWwxIDEyNWgxMjR2ODc0aC0xMjV2MTI1aC0xMjR2LTk5OWwtMjUxIC0xbDEgODc2aDI0OXYxMjRoLTM3NHYtMTI0bC0xMjUgLTF2LTg3NGgxMjV2LTEyNXpNMzc1IDEyNTBoMTI0djEyNGgtMTI0di0xMjR6TTI1MCAxMzc1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJPYWN1dGUiIHVuaWNvZGU9IiYjeGQzOyIgCmQ9Ik0xMjUgMGg0OTlsMSAxMjVoMTI0djg3NGgtMTI1djEyNWgtMTI0di05OTlsLTI1MSAtMWwxIDg3NmgyNDl2MTI0aC0zNzR2LTEyNGwtMTI1IC0xdi04NzRoMTI1di0xMjV6TTI1MCAxMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek0zNzUgMTM3NWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iT2NpcmN1bWZsZXgiIHVuaWNvZGU9IiYjeGQ0OyIgCmQ9Ik0xMjUgMGg0OTlsMSAxMjVoMTI0djg3NGgtMTI1djEyNWgtMTI0di05OTlsLTI1MSAtMWwxIDg3NmgyNDl2MTI0aC0zNzR2LTEyNGwtMTI1IC0xdi04NzRoMTI1di0xMjV6TTEyNSAxMjUwaDQ5OXYxMjRoLTEyNXYxMjVoLTI0OXYtMTI0aC0xMjV2LTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iT3RpbGRlIiB1bmljb2RlPSImI3hkNTsiIApkPSJNMTI1IDBoNDk5bDEgMTI1aDEyNHY4NzRoLTEyNXYxMjVoLTEyNHYtOTk5bC0yNTEgLTFsMSA4NzZoMjQ5djEyNGgtMzc0di0xMjRsLTEyNSAtMXYtODc0aDEyNXYtMTI1ek0wIDEyNTBoMTI0djEyNGgtMTI0di0xMjR6TTM3NSAxMjUwaDI0OXYxMjRoLTI0OXYtMTI0ek0yNTAgMTM3NWgxMjR2MTI0aC0yNDl2LTEyNGgxMjV6TTYyNSAxMzc1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJPZGllcmVzaXMiIHVuaWNvZGU9IiYjeGQ2OyIgCmQ9Ik0xMjUgMGg0OTlsMSAxMjVoMTI0djg3NGgtMTI1djEyNWgtMTI0di05OTlsLTI1MSAtMWwxIDg3NmgyNDl2MTI0aC0zNzR2LTEyNGwtMTI1IC0xdi04NzRoMTI1di0xMjV6TTEyNSAxMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek01MDAgMTI1MGgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ibXVsdGlwbHkiIHVuaWNvZGU9IiYjeGQ3OyIgCmQ9Ik0xMjUgMTI1aDEyNGwxIDEyNWgxMjRsMSAxMjVoMTI0djI0OWgtMjUwdjEyNWgtMTI1djEyNWgtMTI0di0yNDloMTI1di0xMjVoMTI1di0xMjVsLTEyNSAtMXYtMTI0bC0xMjUgLTF2LTEyNGgxMjV6TTUwMCAyNTBoMTI0djEyNGgtMTI0di0xMjR6TTYyNSAxMjVoMTI0djEyNGgtMTI0di0xMjR6TTUwMCA2MjVoMTI0djEyNGgtMTI0di0xMjR6TTYyNSA3NTBoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Ik9zbGFzaCIgdW5pY29kZT0iJiN4ZDg7IiAKZD0iTTAgMGg2MjRsMSAxMjVoMTI0djk5OWgtMjQ5di0yNDlsLTEyNSAtMXYtMjQ5aDEyNXYtNTAwbC0yNTEgLTFsMSAyNTFoMTI0bDEgMTI1aDEyNHYxMjRoLTI1MGwxIDM3NmgyNDl2MTI0aC0zNzR2LTEyNGgtMTI1di0xMDAweiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJVZ3JhdmUiIHVuaWNvZGU9IiYjeGQ5OyIgCmQ9Ik0xMjUgMGg0OTlsMSAxMjVoMTI0djk5OWgtMjQ5di05OTlsLTI1MSAtMXYxMDAwaC0yNDl2LTk5OWgxMjV2LTEyNXpNMzc1IDEyNTBoMTI0djEyNGgtMTI0di0xMjR6TTI1MCAxMzc1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJVYWN1dGUiIHVuaWNvZGU9IiYjeGRhOyIgCmQ9Ik0xMjUgMGg0OTlsMSAxMjVoMTI0djk5OWgtMjQ5di05OTlsLTI1MSAtMXYxMDAwaC0yNDl2LTk5OWgxMjV2LTEyNXpNMjUwIDEyNTBoMTI0djEyNGgtMTI0di0xMjR6TTM3NSAxMzc1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJVY2lyY3VtZmxleCIgdW5pY29kZT0iJiN4ZGI7IiAKZD0iTTEyNSAwaDQ5OWwxIDEyNWgxMjR2OTk5aC0yNDl2LTk5OWwtMjUxIC0xdjEwMDBoLTI0OXYtOTk5aDEyNXYtMTI1ek0xMjUgMTI1MGg0OTl2MTI0aC0xMjV2MTI1aC0yNDl2LTEyNGgtMTI1di0xMjV6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9IlVkaWVyZXNpcyIgdW5pY29kZT0iJiN4ZGM7IiAKZD0iTTEyNSAwaDQ5OWwxIDEyNWgxMjR2OTk5aC0yNDl2LTk5OWwtMjUxIC0xdjEwMDBoLTI0OXYtOTk5aDEyNXYtMTI1ek0xMjUgMTI1MGgxMjR2MTI0aC0xMjR2LTEyNHpNNTAwIDEyNTBoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9IllhY3V0ZSIgdW5pY29kZT0iJiN4ZGQ7IiAKZD0iTTI1MCAwaDI0OWwxIDUwMGgxMjRsMSAxMjVoMTI0djQ5OWgtMjQ5di00OTlsLTI1MSAtMXY1MDBoLTI0OXYtNDk5aDEyNXYtMTI1aDEyNXYtNTAwek0yNTAgMTI1MGgxMjR2MTI0aC0xMjR2LTEyNHpNMzc1IDEzNzVoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9IlRob3JuIiB1bmljb2RlPSImI3hkZTsiIApkPSJNMCAwaDI0OWwxIDI1MGgzNzRsMSAxMjVoMTI0djM3NGgtMTI1djEyNWgtMTI0di00OTlsLTI1MSAtMWwxIDM3NmgyNDl2MTI0aC0yNTB2MjUwaC0yNDl2LTExMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Imdlcm1hbmRibHMiIHVuaWNvZGU9IiYjeGRmOyIgCmQ9Ik0wIDBoMjQ5bDEgMTAwMGgyNTB2LTI1MGwtMTI1IC0xdi0yNDloMTI1di0zNzVsLTEyNSAtMXYtMTI0aDI0OWwxIDEyNWgxMjR2Mzc0aC0xMjVsMSAyNTFoMTI0djI0OWgtMTI1djEyNWgtNDk5di0xMjRoLTEyNXYtMTAwMHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iYWdyYXZlIiB1bmljb2RlPSImI3hlMDsiIApkPSJNMTI1IDBoNjI0djc0OWgtMTI1djEyNWgtNDk5di0xMjRoMzc1di0yNTBsLTM3NSAtMXYtMTI0aDM3NXYtMjUwbC0yNTEgLTF2MjUwaC0yNDl2LTI0OWgxMjV2LTEyNXpNMCA2MjVoMTI0djEyNGgtMTI0di0xMjR6TTM3NSAxMDAwaDEyNHYxMjRoLTEyNHYtMTI0ek0yNTAgMTEyNWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iYWFjdXRlIiB1bmljb2RlPSImI3hlMTsiIApkPSJNMTI1IDBoNjI0djc0OWgtMTI1djEyNWgtNDk5di0xMjRoMzc1di0yNTBsLTM3NSAtMXYtMTI0aDM3NXYtMjUwbC0yNTEgLTF2MjUwaC0yNDl2LTI0OWgxMjV2LTEyNXpNMCA2MjVoMTI0djEyNGgtMTI0di0xMjR6TTI1MCAxMDAwaDEyNHYxMjRoLTEyNHYtMTI0ek0zNzUgMTEyNWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iYWNpcmN1bWZsZXgiIHVuaWNvZGU9IiYjeGUyOyIgCmQ9Ik0xMjUgMGg2MjR2NzQ5aC0xMjV2MTI1aC00OTl2LTEyNGgzNzV2LTI1MGwtMzc1IC0xdi0xMjRoMzc1di0yNTBsLTI1MSAtMXYyNTBoLTI0OXYtMjQ5aDEyNXYtMTI1ek0wIDYyNWgxMjR2MTI0aC0xMjR2LTEyNHpNMTI1IDEwMDBoNDk5djEyNGgtMTI1djEyNWgtMjQ5di0xMjRoLTEyNXYtMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJhdGlsZGUiIHVuaWNvZGU9IiYjeGUzOyIgCmQ9Ik0xMjUgMGg2MjR2NzQ5aC0xMjV2MTI1aC00OTl2LTEyNGgzNzV2LTI1MGwtMzc1IC0xdi0xMjRoMzc1di0yNTBsLTI1MSAtMXYyNTBoLTI0OXYtMjQ5aDEyNXYtMTI1ek0wIDYyNWgxMjR2MTI0aC0xMjR2LTEyNHpNMCAxMDAwaDEyNHYxMjRoLTEyNHYtMTI0ek0zNzUgMTAwMGgyNDl2MTI0aC0yNDl2LTEyNHpNMjUwIDExMjVoMTI0djEyNGgtMjQ5di0xMjRoMTI1ek02MjUgMTEyNWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iYWRpZXJlc2lzIiB1bmljb2RlPSImI3hlNDsiIApkPSJNMTI1IDBoNjI0djc0OWgtMTI1djEyNWgtNDk5di0xMjRoMzc1di0yNTBsLTM3NSAtMXYtMTI0aDM3NXYtMjUwbC0yNTEgLTF2MjUwaC0yNDl2LTI0OWgxMjV2LTEyNXpNMCA2MjVoMTI0djEyNGgtMTI0di0xMjR6TTEyNSAxMDAwaDEyNHYxMjRoLTEyNHYtMTI0ek01MDAgMTAwMGgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iYXJpbmciIHVuaWNvZGU9IiYjeGU1OyIgCmQ9Ik0xMjUgMGg2MjR2NzQ5aC0xMjV2MTI1aC00OTl2LTEyNGgzNzV2LTI1MGwtMzc1IC0xdi0xMjRoMzc1di0yNTBsLTI1MSAtMXYyNTBoLTI0OXYtMjQ5aDEyNXYtMTI1ek0wIDYyNWgxMjR2MTI0aC0xMjR2LTEyNHpNMjUwIDEwMDBoMjQ5djEyNGgtMjQ5di0xMjR6TTUwMCAxMTI1aDEyNHYyNDloLTEyNHYtMjQ5ek0xMjUgMTEyNWgxMjR2MjQ5aC0xMjR2LTI0OXpNMzc1IDEzNzVoMTI0djEyNGgtMjQ5di0xMjRoMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJhZSIgdW5pY29kZT0iJiN4ZTY7IiBob3Jpei1hZHYteD0iMTM3NSIgCmQ9Ik0xMjUgMGg5OTl2MTI0aC0zNzVsMSAyNTFoNDk5djM3NGgtMTI1djEyNWgtMTI0di0zNzRsLTI1MSAtMWwxIDI1MWgyNDl2MTI0aC04NzR2LTEyNGgzNzV2LTI1MGwtMzc1IC0xdi0xMjRoMzc1di0yNTBsLTI1MSAtMXYyNTBoLTI0OXYtMjQ5aDEyNXYtMTI1ek0xMTI1IDEyNWgxMjR2MTI0aC0xMjR2LTEyNHpNMCA2MjVoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImNjZWRpbGxhIiB1bmljb2RlPSImI3hlNzsiIGhvcml6LWFkdi14PSI3NTAiIApkPSJNMjUwIC0zNzVoMjQ5djQ5OWgtMjUwbDEgNjI2aDI0OXYxMjRoLTM3NHYtMTI0bC0xMjUgLTF2LTYyNGgxMjV2LTEyNWgxMjV2LTEyNWgxMjV2LTEyNWgtMTI1di0xMjV6TTUwMCAxMjVoMTI0djEyNGgtMTI0di0xMjR6TTUwMCA2MjVoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImVncmF2ZSIgdW5pY29kZT0iJiN4ZTg7IiAKZD0iTTEyNSAwaDQ5OXYxMjRoLTM3NWwxIDI1MWg0OTl2Mzc0aC0xMjV2MTI1aC0xMjR2LTM3NGwtMjUxIC0xbDEgMjUxaDI0OXYxMjRoLTM3NHYtMTI0bC0xMjUgLTF2LTYyNGgxMjV2LTEyNXpNNjI1IDEyNWgxMjR2MTI0aC0xMjR2LTEyNHpNMzc1IDEwMDBoMTI0djEyNGgtMTI0di0xMjR6TTI1MCAxMTI1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJlYWN1dGUiIHVuaWNvZGU9IiYjeGU5OyIgCmQ9Ik0xMjUgMGg0OTl2MTI0aC0zNzVsMSAyNTFoNDk5djM3NGgtMTI1djEyNWgtMTI0di0zNzRsLTI1MSAtMWwxIDI1MWgyNDl2MTI0aC0zNzR2LTEyNGwtMTI1IC0xdi02MjRoMTI1di0xMjV6TTYyNSAxMjVoMTI0djEyNGgtMTI0di0xMjR6TTI1MCAxMDAwaDEyNHYxMjRoLTEyNHYtMTI0ek0zNzUgMTEyNWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iZWNpcmN1bWZsZXgiIHVuaWNvZGU9IiYjeGVhOyIgCmQ9Ik0xMjUgMGg0OTl2MTI0aC0zNzVsMSAyNTFoNDk5djM3NGgtMTI1djEyNWgtMTI0di0zNzRsLTI1MSAtMWwxIDI1MWgyNDl2MTI0aC0zNzR2LTEyNGwtMTI1IC0xdi02MjRoMTI1di0xMjV6TTYyNSAxMjVoMTI0djEyNGgtMTI0di0xMjR6TTEyNSAxMDAwaDQ5OXYxMjRoLTEyNXYxMjVoLTI0OXYtMTI0aC0xMjV2LTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iZWRpZXJlc2lzIiB1bmljb2RlPSImI3hlYjsiIApkPSJNMTI1IDBoNDk5djEyNGgtMzc1bDEgMjUxaDQ5OXYzNzRoLTEyNXYxMjVoLTEyNHYtMzc0bC0yNTEgLTFsMSAyNTFoMjQ5djEyNGgtMzc0di0xMjRsLTEyNSAtMXYtNjI0aDEyNXYtMTI1ek02MjUgMTI1aDEyNHYxMjRoLTEyNHYtMTI0ek0xMjUgMTAwMGgxMjR2MTI0aC0xMjR2LTEyNHpNNTAwIDEwMDBoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImlncmF2ZSIgdW5pY29kZT0iJiN4ZWM7IiBob3Jpei1hZHYteD0iMzc1IiAKZD0iTTAgMGgyNDl2ODc0aC0yNDl2LTg3NHpNMTI1IDEwMDBoMTI0djEyNGgtMTI0di0xMjR6TTAgMTEyNWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iaWFjdXRlIiB1bmljb2RlPSImI3hlZDsiIGhvcml6LWFkdi14PSIzNzUiIApkPSJNMCAwaDI0OXY4NzRoLTI0OXYtODc0ek0wIDEwMDBoMTI0djEyNGgtMTI0di0xMjR6TTEyNSAxMTI1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJpY2lyY3VtZmxleCIgdW5pY29kZT0iJiN4ZWU7IiBob3Jpei1hZHYteD0iNjI1IiAKZD0iTTEyNSAwaDI0OXY4NzRoLTI0OXYtODc0ek0wIDEwMDBoNDk5djEyNGgtMTI1djEyNWgtMjQ5di0xMjRoLTEyNXYtMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJpZGllcmVzaXMiIHVuaWNvZGU9IiYjeGVmOyIgaG9yaXotYWR2LXg9IjYyNSIgCmQ9Ik0xMjUgMGgyNDl2ODc0aC0yNDl2LTg3NHpNMCAxMDAwaDEyNHYxMjRoLTEyNHYtMTI0ek0zNzUgMTAwMGgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iZXRoIiB1bmljb2RlPSImI3hmMDsiIApkPSJNMTI1IDBoNDk5bDEgMTI1aDEyNHY3NDloLTEyNXYyNTBoLTQ5OXYtMTI0aDEyNXYtMTI1aDI1MHYtMTI1bC0zNzUgLTF2LTEyNGgzNzV2LTUwMGwtMjUxIC0xdjUwMGgtMjQ5di00OTloMTI1di0xMjV6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Im50aWxkZSIgdW5pY29kZT0iJiN4ZjE7IiAKZD0iTTAgMGgyNDlsMSA3NTBoMjUwdi03NTBoMjQ5djc0OWgtMTI1djEyNWgtNjI0di04NzR6TTAgMTAwMGgxMjR2MTI0aC0xMjR2LTEyNHpNMzc1IDEwMDBoMjQ5djEyNGgtMjQ5di0xMjR6TTI1MCAxMTI1aDEyNHYxMjRoLTI0OXYtMTI0aDEyNXpNNjI1IDExMjVoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Im9ncmF2ZSIgdW5pY29kZT0iJiN4ZjI7IiAKZD0iTTEyNSAwaDQ5OWwxIDEyNWgxMjR2NjI0aC0xMjV2MTI1aC0xMjR2LTc0OWwtMjUxIC0xbDEgNjI2aDI0OXYxMjRoLTM3NHYtMTI0bC0xMjUgLTF2LTYyNGgxMjV2LTEyNXpNMzc1IDEwMDBoMTI0djEyNGgtMTI0di0xMjR6TTI1MCAxMTI1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJvYWN1dGUiIHVuaWNvZGU9IiYjeGYzOyIgCmQ9Ik0xMjUgMGg0OTlsMSAxMjVoMTI0djYyNGgtMTI1djEyNWgtMTI0di03NDlsLTI1MSAtMWwxIDYyNmgyNDl2MTI0aC0zNzR2LTEyNGwtMTI1IC0xdi02MjRoMTI1di0xMjV6TTI1MCAxMDAwaDEyNHYxMjRoLTEyNHYtMTI0ek0zNzUgMTEyNWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ib2NpcmN1bWZsZXgiIHVuaWNvZGU9IiYjeGY0OyIgCmQ9Ik0xMjUgMGg0OTlsMSAxMjVoMTI0djYyNGgtMTI1djEyNWgtMTI0di03NDlsLTI1MSAtMWwxIDYyNmgyNDl2MTI0aC0zNzR2LTEyNGwtMTI1IC0xdi02MjRoMTI1di0xMjV6TTEyNSAxMDAwaDQ5OXYxMjRoLTEyNXYxMjVoLTI0OXYtMTI0aC0xMjV2LTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ib3RpbGRlIiB1bmljb2RlPSImI3hmNTsiIApkPSJNMTI1IDBoNDk5bDEgMTI1aDEyNHY2MjRoLTEyNXYxMjVoLTEyNHYtNzQ5bC0yNTEgLTFsMSA2MjZoMjQ5djEyNGgtMzc0di0xMjRsLTEyNSAtMXYtNjI0aDEyNXYtMTI1ek0wIDEwMDBoMTI0djEyNGgtMTI0di0xMjR6TTM3NSAxMDAwaDI0OXYxMjRoLTI0OXYtMTI0ek0yNTAgMTEyNWgxMjR2MTI0aC0yNDl2LTEyNGgxMjV6TTYyNSAxMTI1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJvZGllcmVzaXMiIHVuaWNvZGU9IiYjeGY2OyIgCmQ9Ik0xMjUgMGg0OTlsMSAxMjVoMTI0djYyNGgtMTI1djEyNWgtMTI0di03NDlsLTI1MSAtMWwxIDYyNmgyNDl2MTI0aC0zNzR2LTEyNGwtMTI1IC0xdi02MjRoMTI1di0xMjV6TTEyNSAxMDAwaDEyNHYxMjRoLTEyNHYtMTI0ek01MDAgMTAwMGgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iZGl2aWRlIiB1bmljb2RlPSImI3hmNzsiIGhvcml6LWFkdi14PSIxMDAwIiAKZD0iTTM3NSAxMjVoMTI0djEyNGgtMTI0di0xMjR6TTYyNSAzNzVoMjQ5djEyNGgtODc0di0xMjRoNjI1ek0zNzUgNjI1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJvc2xhc2giIHVuaWNvZGU9IiYjeGY4OyIgCmQ9Ik0wIDBoNjI0bDEgMTI1aDEyNHY3NDloLTI0OXYtMjQ5bC0xMjUgLTF2LTEyNGgxMjV2LTM3NWwtMjUxIC0xbDEgMTI2aDEyNHYyNDloLTEyNWwxIDI1MWgyNDl2MTI0aC0zNzR2LTEyNGgtMTI1di03NTB6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InVncmF2ZSIgdW5pY29kZT0iJiN4Zjk7IiAKZD0iTTEyNSAwaDYyNHY4NzRoLTI0OXYtNzQ5bC0yNTEgLTF2NzUwaC0yNDl2LTc0OWgxMjV2LTEyNXpNMzc1IDEwMDBoMTI0djEyNGgtMTI0di0xMjR6TTI1MCAxMTI1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ1YWN1dGUiIHVuaWNvZGU9IiYjeGZhOyIgCmQ9Ik0xMjUgMGg2MjR2ODc0aC0yNDl2LTc0OWwtMjUxIC0xdjc1MGgtMjQ5di03NDloMTI1di0xMjV6TTI1MCAxMDAwaDEyNHYxMjRoLTEyNHYtMTI0ek0zNzUgMTEyNWgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0idWNpcmN1bWZsZXgiIHVuaWNvZGU9IiYjeGZiOyIgCmQ9Ik0xMjUgMGg2MjR2ODc0aC0yNDl2LTc0OWwtMjUxIC0xdjc1MGgtMjQ5di03NDloMTI1di0xMjV6TTEyNSAxMDAwaDQ5OXYxMjRoLTEyNXYxMjVoLTI0OXYtMTI0aC0xMjV2LTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0idWRpZXJlc2lzIiB1bmljb2RlPSImI3hmYzsiIApkPSJNMTI1IDBoNjI0djg3NGgtMjQ5di03NDlsLTI1MSAtMXY3NTBoLTI0OXYtNzQ5aDEyNXYtMTI1ek0xMjUgMTAwMGgxMjR2MTI0aC0xMjR2LTEyNHpNNTAwIDEwMDBoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InlhY3V0ZSIgdW5pY29kZT0iJiN4ZmQ7IiAKZD0iTTAgLTI1MGgxMjR2MTI0aC0xMjR2LTEyNHpNMTI1IC0zNzVoNDk5bDEgMTI1aDEyNHYxMTI0aC0yNDl2LTc0OWwtMjUxIC0xdjc1MGgtMjQ5di03NDloMTI1di0xMjVoMzc1di0yNTBoLTM3NXYtMTI1ek0yNTAgMTAwMGgxMjR2MTI0aC0xMjR2LTEyNHpNMzc1IDExMjVoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InRob3JuIiB1bmljb2RlPSImI3hmZTsiIApkPSJNMCAwdi0yNTBoMjQ5bDEgMjUwaDM3NGwxIDEyNWgxMjR2NjI0aC0xMjV2MTI1aC0xMjR2LTc0OWwtMjUxIC0xbDEgNjI2aDI0OXYxMjRoLTI1MHYyNTBoLTI0OXYtMTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ieWRpZXJlc2lzIiB1bmljb2RlPSImI3hmZjsiIApkPSJNMCAtMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek0xMjUgLTM3NWg0OTlsMSAxMjVoMTI0djExMjRoLTI0OXYtNzQ5bC0yNTEgLTF2NzUwaC0yNDl2LTc0OWgxMjV2LTEyNWgzNzV2LTI1MGgtMzc1di0xMjV6TTUwMCAxMDAwaDEyNHYxMjRoLTEyNHYtMTI0ek0xMjUgMTAwMGgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iQW1hY3JvbiIgdW5pY29kZT0iJiN4MTAwOyIgaG9yaXotYWR2LXg9IjI1MCIgCmQ9Ik0wIDBoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Ik9FIiB1bmljb2RlPSImI3gxNTI7IiBob3Jpei1hZHYteD0iMTI1MCIgCmQ9Ik0xMjUgMGg5OTl2MTI0aC0zNzVsMSAzNzZoMjQ5djEyNGgtMjUwbDEgMzc2aDM3NHYxMjRoLTYyNHYtOTk5bC0yNTEgLTFsMSA4NzZoMjQ5djEyNGgtMzc0di0xMjRsLTEyNSAtMXYtODc0aDEyNXYtMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJvZSIgdW5pY29kZT0iJiN4MTUzOyIgaG9yaXotYWR2LXg9IjEzNzUiIApkPSJNMTI1IDBoOTk5djEyNGgtMzc1bDEgMjUxaDQ5OXYzNzRoLTEyNXYxMjVoLTEyNHYtMzc0bC0yNTEgLTFsMSAyNTFoMjQ5djEyNGgtNDk5di03NDlsLTI1MSAtMWwxIDYyNmgyNDl2MTI0aC0zNzR2LTEyNGwtMTI1IC0xdi02MjRoMTI1di0xMjV6TTExMjUgMTI1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJTY2Fyb24iIHVuaWNvZGU9IiYjeDE2MDsiIGhvcml6LWFkdi14PSI3NTAiIApkPSJNMTI1IDBoMzc0bDEgMTI1aDEyNHYzNzRoLTEyNXYxMjVoLTEyNXYxMjVoLTEyNWwxIDI1MWgyNDl2MTI0aC0zNzR2LTEyNGwtMTI1IC0xdi0zNzRoMTI1di0xMjVoMTI1di0xMjVoMTI1di0yNTBoLTI1MHYtMTI1ek0wIDEyNWgxMjR2MTI0aC0xMjR2LTEyNHpNNTAwIDg3NWgxMjR2MTI0aC0xMjR2LTEyNHpNMjUwIDEyNTBoMjQ5bDEgMTI1aDEyNHYxMjRoLTQ5OXYtMTI0aDEyNXYtMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJzY2Fyb24iIHVuaWNvZGU9IiYjeDE2MTsiIGhvcml6LWFkdi14PSI3NTAiIApkPSJNMTI1IDBoMzc0bDEgMTI1aDEyNHYyNDloLTEyNXYxMjVoLTEyNXYxMjVoLTEyNWwxIDEyNmgyNDl2MTI0aC0zNzR2LTEyNGwtMTI1IC0xdi0yNDloMTI1di0xMjVoMTI1di0xMjVoMTI1di0xMjVoLTI1MHYtMTI1ek0wIDEyNWgxMjR2MTI0aC0xMjR2LTEyNHpNNTAwIDYyNWgxMjR2MTI0aC0xMjR2LTEyNHpNMjUwIDEwMDBoMjQ5bDEgMTI1aDEyNHYxMjRoLTQ5OXYtMTI0aDEyNXYtMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJZZGllcmVzaXMiIHVuaWNvZGU9IiYjeDE3ODsiIApkPSJNMjUwIDBoMjQ5bDEgNTAwaDEyNGwxIDEyNWgxMjR2NDk5aC0yNDl2LTQ5OWwtMjUxIC0xdjUwMGgtMjQ5di00OTloMTI1di0xMjVoMTI1di01MDB6TTEyNSAxMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek01MDAgMTI1MGgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iZmxvcmluIiB1bmljb2RlPSImI3gxOTI7IiBob3Jpei1hZHYteD0iNjI1IiAKZD0iTTAgLTI1MGgyNDlsMSAxMjVoMTI0bDEgNzUwaDEyNHYxMjRoLTEyNWwxIDI1MWgxMjR2MTI0aC0yNDl2LTEyNGwtMTI1IC0xdi0yNDlsLTEyNSAtMXYtMTI0aDEyNXYtNzUwaC0xMjV2LTEyNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iY2lyY3VtZmxleCIgdW5pY29kZT0iJiN4MmM2OyIgaG9yaXotYWR2LXg9IjYyNSIgCmQ9Ik0wIDEwMDBoNDk5djEyNGgtMTI1djEyNWgtMjQ5di0xMjRoLTEyNXYtMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ0aWxkZSIgdW5pY29kZT0iJiN4MmRjOyIgCmQ9Ik0wIDEwMDBoMTI0djEyNGgtMTI0di0xMjR6TTM3NSAxMDAwaDI0OXYxMjRoLTI0OXYtMTI0ek0yNTAgMTEyNWgxMjR2MTI0aC0yNDl2LTEyNGgxMjV6TTYyNSAxMTI1aDEyNHYxMjRoLTEyNHYtMTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJlbmRhc2giIHVuaWNvZGU9IiYjeDIwMTM7IiBob3Jpei1hZHYteD0iNjI1IiAKZD0iTTI1MCAzNzVoMjQ5djEyNGgtNDk5di0xMjRoMjUweiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJlbWRhc2giIHVuaWNvZGU9IiYjeDIwMTQ7IiBob3Jpei1hZHYteD0iMTEyNSIgCmQ9Ik03NTAgMzc1aDI0OXYxMjRoLTk5OXYtMTI0aDc1MHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0icXVvdGVsZWZ0IiB1bmljb2RlPSImI3gyMDE4OyIgaG9yaXotYWR2LXg9IjM3NSIgCmQ9Ik0wIDYyNWgyNDl2MjQ5aC0xMjV2MTI1aC0xMjR2LTM3NHpNMTI1IDEwMDBoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InF1b3RlcmlnaHQiIHVuaWNvZGU9IiYjeDIwMTk7IiBob3Jpei1hZHYteD0iMzc1IiAKZD0iTTAgNjI1aDEyNHYxMjRoLTEyNHYtMTI0ek0xMjUgNzUwaDEyNHYzNzRoLTI0OXYtMjQ5aDEyNXYtMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJxdW90ZXNpbmdsYmFzZSIgdW5pY29kZT0iJiN4MjAxYTsiIGhvcml6LWFkdi14PSIzNzUiIApkPSJNMCAwaDEyNXYtMTI1aDEyNHYzNzRoLTI0OXYtMjQ5ek0wIC0yNTBoMTI0djEyNGgtMTI0di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InF1b3RlZGJsbGVmdCIgdW5pY29kZT0iJiN4MjAxYzsiIGhvcml6LWFkdi14PSI3NTAiIApkPSJNMzc1IDYyNWgyNDl2MjQ5aC0xMjV2MTI1aC0xMjR2LTM3NHpNMTI1IDYyNWgxMjR2MjQ5aC0xMjV2MTI1aC0xMjR2LTM3NGgxMjV6TTEyNSAxMDAwaDEyNHYxMjRoLTEyNHYtMTI0ek01MDAgMTAwMGgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0icXVvdGVkYmxyaWdodCIgdW5pY29kZT0iJiN4MjAxZDsiIGhvcml6LWFkdi14PSI3NTAiIApkPSJNMzc1IDYyNWgxMjR2MTI0aC0xMjR2LTEyNHpNMCA2MjVoMTI0djEyNGgtMTI0di0xMjR6TTEyNSA3NTBoMTI0djM3NGgtMjQ5di0yNDloMTI1di0xMjV6TTUwMCA3NTBoMTI0djM3NGgtMjQ5di0yNDloMTI1di0xMjV6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InF1b3RlZGJsYmFzZSIgdW5pY29kZT0iJiN4MjAxZTsiIGhvcml6LWFkdi14PSI3NTAiIApkPSJNMCAwaDEyNXYtMTI1aDEyNHYzNzRoLTI0OXYtMjQ5ek0wIC0yNTBoMTI0djEyNGgtMTI0di0xMjR6TTM3NSAtMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek0zNzUgMGgxMjV2LTEyNWgxMjR2Mzc0aC0yNDl2LTI0OXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iZGFnZ2VyIiB1bmljb2RlPSImI3gyMDIwOyIgaG9yaXotYWR2LXg9IjUwMCIgCmQ9Ik0xMjUgNTAwaDEyNGwxIDM3NWgxMjR2MTI0aC0xMjV2MTI1aC0xMjR2LTEyNGwtMTI1IC0xdi0xMjRoMTI1di0zNzV6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImRhZ2dlcmRibCIgdW5pY29kZT0iJiN4MjAyMTsiIGhvcml6LWFkdi14PSI1MDAiIApkPSJNMTI1IDM3NWgxMjRsMSAxMjVoMTI0djEyNGgtMTI1bDEgMjUxaDEyNHYxMjRoLTEyNXYxMjVoLTEyNHYtMTI0bC0xMjUgLTF2LTEyNGgxMjV2LTI1MGwtMTI1IC0xdi0xMjRoMTI1di0xMjV6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImJ1bGxldCIgdW5pY29kZT0iJiN4MjAyMjsiIGhvcml6LWFkdi14PSI3NTAiIApkPSJNMTI1IDI1MGgzNzRsMSAxMjVoMTI0djM3NGgtMTI1djEyNWgtMzc0di0xMjRsLTEyNSAtMXYtMzc0aDEyNXYtMTI1eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJlbGxpcHNpcyIgdW5pY29kZT0iJiN4MjAyNjsiIGhvcml6LWFkdi14PSIxMzc1IiAKZD0iTTAgMGgyNDl2MjQ5aC0yNDl2LTI0OXpNNTAwIDBoMjQ5djI0OWgtMjQ5di0yNDl6TTEwMDAgMGgyNDl2MjQ5aC0yNDl2LTI0OXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0icGVydGhvdXNhbmQiIHVuaWNvZGU9IiYjeDIwMzA7IiBob3Jpei1hZHYteD0iMTc1MCIgCmQ9Ik0yNTAgMGgxMjR2MTI0aC0xMjR2LTEyNHpNNzUwIDBoMjQ5djEyNGgtMjQ5di0xMjR6TTEyNTAgMGgyNDl2MTI0aC0yNDl2LTEyNHpNMTEyNSAxMjVoMTI0djI0OWgtMjQ5di0yNDloMTI1ek02MjUgMTI1aDEyNHYyNDloLTEyNHYtMjQ5ek0zNzUgMTI1aDEyNHYyNDloLTEyNHYtMjQ5ek0xNTAwIDEyNWgxMjR2MjQ5aC0xMjR2LTI0OXpNMTM3NSAzNzVoMTI0djEyNGgtMjQ5di0xMjRoMTI1ek04NzUgMzc1aDEyNHYxMjRoLTI0OXYtMTI0CmgxMjV6TTUwMCAzNzVoMTI0bDEgMjUwaDEyNGwxIDM3NWgxMjR2MTI0aC0zNzR2LTEyNGgxMjV2LTI1MGgtMTI1di0zNzV6TTI1MCA2MjVoMTI0djEyNGgtMjQ5di0xMjRoMTI1ek0wIDc1MGgxMjR2MjQ5aC0xMjR2LTI0OXpNMzc1IDc1MGgxMjR2MjQ5aC0xMjR2LTI0OXpNMTI1IDEwMDBoMjQ5djEyNGgtMjQ5di0xMjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Imd1aWxzaW5nbGxlZnQiIHVuaWNvZGU9IiYjeDIwMzk7IiBob3Jpei1hZHYteD0iNjI1IiAKZD0iTTM3NSAwaDEyNHYxMjRoLTEyNHYtMTI0ek0yNTAgMTI1aDEyNHYxMjRoLTEyNHYtMTI0ek0xMjUgMjUwaDEyNHYxMjRoLTEyNHYtMTI0ek0wIDM3NWgxMjR2MTI0aC0xMjR2LTEyNHpNMTI1IDUwMGgxMjR2MTI0aC0xMjR2LTEyNHpNMjUwIDYyNWgxMjR2MTI0aC0xMjR2LTEyNHpNMzc1IDc1MGgxMjR2MTI0aC0xMjR2LTEyNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iZ3VpbHNpbmdscmlnaHQiIHVuaWNvZGU9IiYjeDIwM2E7IiBob3Jpei1hZHYteD0iNjI1IiAKZD0iTTAgMGgxMjRsMSAxMjVoMTI0bDEgMTI1aDEyNGwxIDEyNWgxMjR2MTI0aC0xMjV2MTI1aC0xMjV2MTI1aC0xMjV2MTI1aC0xMjR2LTI0OWgxMjV2LTEyNWgxMjV2LTEyNWwtMTI1IC0xdi0xMjRoLTEyNXYtMjUweiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ0cmFkZW1hcmsiIHVuaWNvZGU9IiYjeDIxMjI7IiBob3Jpei1hZHYteD0iMTI1MCIgCmQ9Ik01MDAgNjI1aDEyNGwxIDI1MGgxMjR2MTI0aC0xMjV2MTI1aC0xMjR2LTQ5OXpNMTI1IDYyNWgxMjRsMSAzNzVoMTI0djEyNGgtMzc0di0xMjRoMTI1di0zNzV6TTc1MCA3NTBoMjUwdi0xMjVoMTI0djQ5OWgtMTI0di0xMjRsLTEyNSAtMXYtMTI0aC0xMjV2LTEyNXoiIC8+CiAgPC9mb250Pgo8L2RlZnM+PC9zdmc+Cg=="

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(13);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var interact = __webpack_require__(17); // draggable
exports.default = _vue2.default.directive('draggable', {
  bind: function bind(el, binding) {
    interact(el, {
      allowFrom: el.querySelector(binding.value)
    }).draggable({

      restrict: {
        restriction: '#desktop',
        endOnly: true,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
      },

      onmove: dragMoveListener
    });

    function dragMoveListener(event) {
      var target = event.target,
          x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
          y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

      target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    }

    window.dragMoveListener = dragMoveListener;
  }

});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(16);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(2)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * interact.js v1.2.8
 *
 * Copyright (c) 2012-2015 Taye Adeyemi <dev@taye.me>
 * Open source under the MIT License.
 * https://raw.github.com/taye/interact.js/master/LICENSE
 */
(function (realWindow) {
    'use strict';

    // return early if there's no window to work with (eg. Node.js)
    if (!realWindow) { return; }

    var // get wrapped window if using Shadow DOM polyfill
        window = (function () {
            // create a TextNode
            var el = realWindow.document.createTextNode('');

            // check if it's wrapped by a polyfill
            if (el.ownerDocument !== realWindow.document
                && typeof realWindow.wrap === 'function'
                && realWindow.wrap(el) === el) {
                // return wrapped window
                return realWindow.wrap(realWindow);
            }

            // no Shadow DOM polyfil or native implementation
            return realWindow;
        }()),

        document           = window.document,
        DocumentFragment   = window.DocumentFragment   || blank,
        SVGElement         = window.SVGElement         || blank,
        SVGSVGElement      = window.SVGSVGElement      || blank,
        SVGElementInstance = window.SVGElementInstance || blank,
        HTMLElement        = window.HTMLElement        || window.Element,

        PointerEvent = (window.PointerEvent || window.MSPointerEvent),
        pEventTypes,

        hypot = Math.hypot || function (x, y) { return Math.sqrt(x * x + y * y); },

        tmpXY = {},     // reduce object creation in getXY()

        documents       = [],   // all documents being listened to

        interactables   = [],   // all set interactables
        interactions    = [],   // all interactions

        dynamicDrop     = false,

        // {
        //      type: {
        //          selectors: ['selector', ...],
        //          contexts : [document, ...],
        //          listeners: [[listener, useCapture], ...]
        //      }
        //  }
        delegatedEvents = {},

        defaultOptions = {
            base: {
                accept        : null,
                actionChecker : null,
                styleCursor   : true,
                preventDefault: 'auto',
                origin        : { x: 0, y: 0 },
                deltaSource   : 'page',
                allowFrom     : null,
                ignoreFrom    : null,
                _context      : document,
                dropChecker   : null
            },

            drag: {
                enabled: false,
                manualStart: true,
                max: Infinity,
                maxPerElement: 1,

                snap: null,
                restrict: null,
                inertia: null,
                autoScroll: null,

                axis: 'xy'
            },

            drop: {
                enabled: false,
                accept: null,
                overlap: 'pointer'
            },

            resize: {
                enabled: false,
                manualStart: false,
                max: Infinity,
                maxPerElement: 1,

                snap: null,
                restrict: null,
                inertia: null,
                autoScroll: null,

                square: false,
                preserveAspectRatio: false,
                axis: 'xy',

                // use default margin
                margin: NaN,

                // object with props left, right, top, bottom which are
                // true/false values to resize when the pointer is over that edge,
                // CSS selectors to match the handles for each direction
                // or the Elements for each handle
                edges: null,

                // a value of 'none' will limit the resize rect to a minimum of 0x0
                // 'negate' will alow the rect to have negative width/height
                // 'reposition' will keep the width/height positive by swapping
                // the top and bottom edges and/or swapping the left and right edges
                invert: 'none'
            },

            gesture: {
                manualStart: false,
                enabled: false,
                max: Infinity,
                maxPerElement: 1,

                restrict: null
            },

            perAction: {
                manualStart: false,
                max: Infinity,
                maxPerElement: 1,

                snap: {
                    enabled     : false,
                    endOnly     : false,
                    range       : Infinity,
                    targets     : null,
                    offsets     : null,

                    relativePoints: null
                },

                restrict: {
                    enabled: false,
                    endOnly: false
                },

                autoScroll: {
                    enabled     : false,
                    container   : null,     // the item that is scrolled (Window or HTMLElement)
                    margin      : 60,
                    speed       : 300       // the scroll speed in pixels per second
                },

                inertia: {
                    enabled          : false,
                    resistance       : 10,    // the lambda in exponential decay
                    minSpeed         : 100,   // target speed must be above this for inertia to start
                    endSpeed         : 10,    // the speed at which inertia is slow enough to stop
                    allowResume      : true,  // allow resuming an action in inertia phase
                    zeroResumeDelta  : true,  // if an action is resumed after launch, set dx/dy to 0
                    smoothEndDuration: 300    // animate to snap/restrict endOnly if there's no inertia
                }
            },

            _holdDuration: 600
        },

        // Things related to autoScroll
        autoScroll = {
            interaction: null,
            i: null,    // the handle returned by window.setInterval
            x: 0, y: 0, // Direction each pulse is to scroll in

            // scroll the window by the values in scroll.x/y
            scroll: function () {
                var options = autoScroll.interaction.target.options[autoScroll.interaction.prepared.name].autoScroll,
                    container = options.container || getWindow(autoScroll.interaction.element),
                    now = new Date().getTime(),
                    // change in time in seconds
                    dtx = (now - autoScroll.prevTimeX) / 1000,
                    dty = (now - autoScroll.prevTimeY) / 1000,
                    vx, vy, sx, sy;

                // displacement
                if (options.velocity) {
                  vx = options.velocity.x;
                  vy = options.velocity.y;
                }
                else {
                  vx = vy = options.speed
                }
 
                sx = vx * dtx;
                sy = vy * dty;

                if (sx >= 1 || sy >= 1) {
                    if (isWindow(container)) {
                        container.scrollBy(autoScroll.x * sx, autoScroll.y * sy);
                    }
                    else if (container) {
                        container.scrollLeft += autoScroll.x * sx;
                        container.scrollTop  += autoScroll.y * sy;
                    }

                    if (sx >=1) autoScroll.prevTimeX = now;
                    if (sy >= 1) autoScroll.prevTimeY = now;
                }

                if (autoScroll.isScrolling) {
                    cancelFrame(autoScroll.i);
                    autoScroll.i = reqFrame(autoScroll.scroll);
                }
            },

            isScrolling: false,
            prevTimeX: 0,
            prevTimeY: 0,

            start: function (interaction) {
                autoScroll.isScrolling = true;
                cancelFrame(autoScroll.i);

                autoScroll.interaction = interaction;
                autoScroll.prevTimeX = new Date().getTime();
                autoScroll.prevTimeY = new Date().getTime();
                autoScroll.i = reqFrame(autoScroll.scroll);
            },

            stop: function () {
                autoScroll.isScrolling = false;
                cancelFrame(autoScroll.i);
            }
        },

        // Does the browser support touch input?
        supportsTouch = (('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch),

        // Does the browser support PointerEvents
        // Avoid PointerEvent bugs introduced in Chrome 55
        supportsPointerEvent = PointerEvent && !/Chrome/.test(navigator.userAgent),

        // Less Precision with touch input
        margin = supportsTouch || supportsPointerEvent? 20: 10,

        pointerMoveTolerance = 1,

        // for ignoring browser's simulated mouse events
        prevTouchTime = 0,

        // Allow this many interactions to happen simultaneously
        maxInteractions = Infinity,

        // Check if is IE9 or older
        actionCursors = (document.all && !window.atob) ? {
            drag    : 'move',
            resizex : 'e-resize',
            resizey : 's-resize',
            resizexy: 'se-resize',

            resizetop        : 'n-resize',
            resizeleft       : 'w-resize',
            resizebottom     : 's-resize',
            resizeright      : 'e-resize',
            resizetopleft    : 'se-resize',
            resizebottomright: 'se-resize',
            resizetopright   : 'ne-resize',
            resizebottomleft : 'ne-resize',

            gesture : ''
        } : {
            drag    : 'move',
            resizex : 'ew-resize',
            resizey : 'ns-resize',
            resizexy: 'nwse-resize',

            resizetop        : 'ns-resize',
            resizeleft       : 'ew-resize',
            resizebottom     : 'ns-resize',
            resizeright      : 'ew-resize',
            resizetopleft    : 'nwse-resize',
            resizebottomright: 'nwse-resize',
            resizetopright   : 'nesw-resize',
            resizebottomleft : 'nesw-resize',

            gesture : ''
        },

        actionIsEnabled = {
            drag   : true,
            resize : true,
            gesture: true
        },

        // because Webkit and Opera still use 'mousewheel' event type
        wheelEvent = 'onmousewheel' in document? 'mousewheel': 'wheel',

        eventTypes = [
            'dragstart',
            'dragmove',
            'draginertiastart',
            'dragend',
            'dragenter',
            'dragleave',
            'dropactivate',
            'dropdeactivate',
            'dropmove',
            'drop',
            'resizestart',
            'resizemove',
            'resizeinertiastart',
            'resizeend',
            'gesturestart',
            'gesturemove',
            'gestureinertiastart',
            'gestureend',

            'down',
            'move',
            'up',
            'cancel',
            'tap',
            'doubletap',
            'hold'
        ],

        globalEvents = {},

        // Opera Mobile must be handled differently
        isOperaMobile = navigator.appName == 'Opera' &&
            supportsTouch &&
            navigator.userAgent.match('Presto'),

        // scrolling doesn't change the result of getClientRects on iOS 7
        isIOS7 = (/iP(hone|od|ad)/.test(navigator.platform)
                         && /OS 7[^\d]/.test(navigator.appVersion)),

        // prefix matchesSelector
        prefixedMatchesSelector = 'matches' in Element.prototype?
                'matches': 'webkitMatchesSelector' in Element.prototype?
                    'webkitMatchesSelector': 'mozMatchesSelector' in Element.prototype?
                        'mozMatchesSelector': 'oMatchesSelector' in Element.prototype?
                            'oMatchesSelector': 'msMatchesSelector',

        // will be polyfill function if browser is IE8
        ie8MatchesSelector,

        // native requestAnimationFrame or polyfill
        reqFrame = realWindow.requestAnimationFrame,
        cancelFrame = realWindow.cancelAnimationFrame,

        // Events wrapper
        events = (function () {
            var useAttachEvent = ('attachEvent' in window) && !('addEventListener' in window),
                addEvent       = useAttachEvent?  'attachEvent': 'addEventListener',
                removeEvent    = useAttachEvent?  'detachEvent': 'removeEventListener',
                on             = useAttachEvent? 'on': '',

                elements          = [],
                targets           = [],
                attachedListeners = [];

            function add (element, type, listener, useCapture) {
                var elementIndex = indexOf(elements, element),
                    target = targets[elementIndex];

                if (!target) {
                    target = {
                        events: {},
                        typeCount: 0
                    };

                    elementIndex = elements.push(element) - 1;
                    targets.push(target);

                    attachedListeners.push((useAttachEvent ? {
                            supplied: [],
                            wrapped : [],
                            useCount: []
                        } : null));
                }

                if (!target.events[type]) {
                    target.events[type] = [];
                    target.typeCount++;
                }

                if (!contains(target.events[type], listener)) {
                    var ret;

                    if (useAttachEvent) {
                        var listeners = attachedListeners[elementIndex],
                            listenerIndex = indexOf(listeners.supplied, listener);

                        var wrapped = listeners.wrapped[listenerIndex] || function (event) {
                            if (!event.immediatePropagationStopped) {
                                event.target = event.srcElement;
                                event.currentTarget = element;

                                event.preventDefault = event.preventDefault || preventDef;
                                event.stopPropagation = event.stopPropagation || stopProp;
                                event.stopImmediatePropagation = event.stopImmediatePropagation || stopImmProp;

                                if (/mouse|click/.test(event.type)) {
                                    event.pageX = event.clientX + getWindow(element).document.documentElement.scrollLeft;
                                    event.pageY = event.clientY + getWindow(element).document.documentElement.scrollTop;
                                }

                                listener(event);
                            }
                        };

                        ret = element[addEvent](on + type, wrapped, Boolean(useCapture));

                        if (listenerIndex === -1) {
                            listeners.supplied.push(listener);
                            listeners.wrapped.push(wrapped);
                            listeners.useCount.push(1);
                        }
                        else {
                            listeners.useCount[listenerIndex]++;
                        }
                    }
                    else {
                        ret = element[addEvent](type, listener, useCapture || false);
                    }
                    target.events[type].push(listener);

                    return ret;
                }
            }

            function remove (element, type, listener, useCapture) {
                var i,
                    elementIndex = indexOf(elements, element),
                    target = targets[elementIndex],
                    listeners,
                    listenerIndex,
                    wrapped = listener;

                if (!target || !target.events) {
                    return;
                }

                if (useAttachEvent) {
                    listeners = attachedListeners[elementIndex];
                    listenerIndex = indexOf(listeners.supplied, listener);
                    wrapped = listeners.wrapped[listenerIndex];
                }

                if (type === 'all') {
                    for (type in target.events) {
                        if (target.events.hasOwnProperty(type)) {
                            remove(element, type, 'all');
                        }
                    }
                    return;
                }

                if (target.events[type]) {
                    var len = target.events[type].length;

                    if (listener === 'all') {
                        for (i = 0; i < len; i++) {
                            remove(element, type, target.events[type][i], Boolean(useCapture));
                        }
                        return;
                    } else {
                        for (i = 0; i < len; i++) {
                            if (target.events[type][i] === listener) {
                                element[removeEvent](on + type, wrapped, useCapture || false);
                                target.events[type].splice(i, 1);

                                if (useAttachEvent && listeners) {
                                    listeners.useCount[listenerIndex]--;
                                    if (listeners.useCount[listenerIndex] === 0) {
                                        listeners.supplied.splice(listenerIndex, 1);
                                        listeners.wrapped.splice(listenerIndex, 1);
                                        listeners.useCount.splice(listenerIndex, 1);
                                    }
                                }

                                break;
                            }
                        }
                    }

                    if (target.events[type] && target.events[type].length === 0) {
                        target.events[type] = null;
                        target.typeCount--;
                    }
                }

                if (!target.typeCount) {
                    targets.splice(elementIndex, 1);
                    elements.splice(elementIndex, 1);
                    attachedListeners.splice(elementIndex, 1);
                }
            }

            function preventDef () {
                this.returnValue = false;
            }

            function stopProp () {
                this.cancelBubble = true;
            }

            function stopImmProp () {
                this.cancelBubble = true;
                this.immediatePropagationStopped = true;
            }

            return {
                add: add,
                remove: remove,
                useAttachEvent: useAttachEvent,

                _elements: elements,
                _targets: targets,
                _attachedListeners: attachedListeners
            };
        }());

    function blank () {}

    function isElement (o) {
        if (!o || (typeof o !== 'object')) { return false; }

        var _window = getWindow(o) || window;

        return (/object|function/.test(typeof _window.Element)
            ? o instanceof _window.Element //DOM2
            : o.nodeType === 1 && typeof o.nodeName === "string");
    }
    function isWindow (thing) { return thing === window || !!(thing && thing.Window) && (thing instanceof thing.Window); }
    function isDocFrag (thing) { return !!thing && thing instanceof DocumentFragment; }
    function isArray (thing) {
        return isObject(thing)
                && (typeof thing.length !== undefined)
                && isFunction(thing.splice);
    }
    function isObject   (thing) { return !!thing && (typeof thing === 'object'); }
    function isFunction (thing) { return typeof thing === 'function'; }
    function isNumber   (thing) { return typeof thing === 'number'  ; }
    function isBool     (thing) { return typeof thing === 'boolean' ; }
    function isString   (thing) { return typeof thing === 'string'  ; }

    function trySelector (value) {
        if (!isString(value)) { return false; }

        // an exception will be raised if it is invalid
        document.querySelector(value);
        return true;
    }

    function extend (dest, source) {
        for (var prop in source) {
            dest[prop] = source[prop];
        }
        return dest;
    }

    var prefixedPropREs = {
      webkit: /(Movement[XY]|Radius[XY]|RotationAngle|Force)$/
    };

    function pointerExtend (dest, source) {
        for (var prop in source) {
          var deprecated = false;

          // skip deprecated prefixed properties
          for (var vendor in prefixedPropREs) {
            if (prop.indexOf(vendor) === 0 && prefixedPropREs[vendor].test(prop)) {
              deprecated = true;
              break;
            }
          }

          if (!deprecated) {
            dest[prop] = source[prop];
          }
        }
        return dest;
    }

    function copyCoords (dest, src) {
        dest.page = dest.page || {};
        dest.page.x = src.page.x;
        dest.page.y = src.page.y;

        dest.client = dest.client || {};
        dest.client.x = src.client.x;
        dest.client.y = src.client.y;

        dest.timeStamp = src.timeStamp;
    }

    function setEventXY (targetObj, pointers, interaction) {
        var pointer = (pointers.length > 1
                       ? pointerAverage(pointers)
                       : pointers[0]);

        getPageXY(pointer, tmpXY, interaction);
        targetObj.page.x = tmpXY.x;
        targetObj.page.y = tmpXY.y;

        getClientXY(pointer, tmpXY, interaction);
        targetObj.client.x = tmpXY.x;
        targetObj.client.y = tmpXY.y;

        targetObj.timeStamp = new Date().getTime();
    }

    function setEventDeltas (targetObj, prev, cur) {
        targetObj.page.x     = cur.page.x      - prev.page.x;
        targetObj.page.y     = cur.page.y      - prev.page.y;
        targetObj.client.x   = cur.client.x    - prev.client.x;
        targetObj.client.y   = cur.client.y    - prev.client.y;
        targetObj.timeStamp = new Date().getTime() - prev.timeStamp;

        // set pointer velocity
        var dt = Math.max(targetObj.timeStamp / 1000, 0.001);
        targetObj.page.speed   = hypot(targetObj.page.x, targetObj.page.y) / dt;
        targetObj.page.vx      = targetObj.page.x / dt;
        targetObj.page.vy      = targetObj.page.y / dt;

        targetObj.client.speed = hypot(targetObj.client.x, targetObj.page.y) / dt;
        targetObj.client.vx    = targetObj.client.x / dt;
        targetObj.client.vy    = targetObj.client.y / dt;
    }

    function isNativePointer (pointer) {
        return (pointer instanceof window.Event
            || (supportsTouch && window.Touch && pointer instanceof window.Touch));
    }

    // Get specified X/Y coords for mouse or event.touches[0]
    function getXY (type, pointer, xy) {
        xy = xy || {};
        type = type || 'page';

        xy.x = pointer[type + 'X'];
        xy.y = pointer[type + 'Y'];

        return xy;
    }

    function getPageXY (pointer, page) {
        page = page || {};

        // Opera Mobile handles the viewport and scrolling oddly
        if (isOperaMobile && isNativePointer(pointer)) {
            getXY('screen', pointer, page);

            page.x += window.scrollX;
            page.y += window.scrollY;
        }
        else {
            getXY('page', pointer, page);
        }

        return page;
    }

    function getClientXY (pointer, client) {
        client = client || {};

        if (isOperaMobile && isNativePointer(pointer)) {
            // Opera Mobile handles the viewport and scrolling oddly
            getXY('screen', pointer, client);
        }
        else {
          getXY('client', pointer, client);
        }

        return client;
    }

    function getScrollXY (win) {
        win = win || window;
        return {
            x: win.scrollX || win.document.documentElement.scrollLeft,
            y: win.scrollY || win.document.documentElement.scrollTop
        };
    }

    function getPointerId (pointer) {
        return isNumber(pointer.pointerId)? pointer.pointerId : pointer.identifier;
    }

    function getActualElement (element) {
        return (element instanceof SVGElementInstance
            ? element.correspondingUseElement
            : element);
    }

    function getWindow (node) {
        if (isWindow(node)) {
            return node;
        }

        var rootNode = (node.ownerDocument || node);

        return rootNode.defaultView || rootNode.parentWindow || window;
    }

    function getElementClientRect (element) {
        var clientRect = (element instanceof SVGElement
                            ? element.getBoundingClientRect()
                            : element.getClientRects()[0]);

        return clientRect && {
            left  : clientRect.left,
            right : clientRect.right,
            top   : clientRect.top,
            bottom: clientRect.bottom,
            width : clientRect.width || clientRect.right - clientRect.left,
            height: clientRect.height || clientRect.bottom - clientRect.top
        };
    }

    function getElementRect (element) {
        var clientRect = getElementClientRect(element);

        if (!isIOS7 && clientRect) {
            var scroll = getScrollXY(getWindow(element));

            clientRect.left   += scroll.x;
            clientRect.right  += scroll.x;
            clientRect.top    += scroll.y;
            clientRect.bottom += scroll.y;
        }

        return clientRect;
    }

    function getTouchPair (event) {
        var touches = [];

        // array of touches is supplied
        if (isArray(event)) {
            touches[0] = event[0];
            touches[1] = event[1];
        }
        // an event
        else {
            if (event.type === 'touchend') {
                if (event.touches.length === 1) {
                    touches[0] = event.touches[0];
                    touches[1] = event.changedTouches[0];
                }
                else if (event.touches.length === 0) {
                    touches[0] = event.changedTouches[0];
                    touches[1] = event.changedTouches[1];
                }
            }
            else {
                touches[0] = event.touches[0];
                touches[1] = event.touches[1];
            }
        }

        return touches;
    }

    function pointerAverage (pointers) {
        var average = {
            pageX  : 0,
            pageY  : 0,
            clientX: 0,
            clientY: 0,
            screenX: 0,
            screenY: 0
        };
        var prop;

        for (var i = 0; i < pointers.length; i++) {
            for (prop in average) {
                average[prop] += pointers[i][prop];
            }
        }
        for (prop in average) {
            average[prop] /= pointers.length;
        }

        return average;
    }

    function touchBBox (event) {
        if (!event.length && !(event.touches && event.touches.length > 1)) {
            return;
        }

        var touches = getTouchPair(event),
            minX = Math.min(touches[0].pageX, touches[1].pageX),
            minY = Math.min(touches[0].pageY, touches[1].pageY),
            maxX = Math.max(touches[0].pageX, touches[1].pageX),
            maxY = Math.max(touches[0].pageY, touches[1].pageY);

        return {
            x: minX,
            y: minY,
            left: minX,
            top: minY,
            width: maxX - minX,
            height: maxY - minY
        };
    }

    function touchDistance (event, deltaSource) {
        deltaSource = deltaSource || defaultOptions.deltaSource;

        var sourceX = deltaSource + 'X',
            sourceY = deltaSource + 'Y',
            touches = getTouchPair(event);


        var dx = touches[0][sourceX] - touches[1][sourceX],
            dy = touches[0][sourceY] - touches[1][sourceY];

        return hypot(dx, dy);
    }

    function touchAngle (event, prevAngle, deltaSource) {
        deltaSource = deltaSource || defaultOptions.deltaSource;

        var sourceX = deltaSource + 'X',
            sourceY = deltaSource + 'Y',
            touches = getTouchPair(event),
            dx = touches[0][sourceX] - touches[1][sourceX],
            dy = touches[0][sourceY] - touches[1][sourceY],
            angle = 180 * Math.atan(dy / dx) / Math.PI;

        if (isNumber(prevAngle)) {
            var dr = angle - prevAngle,
                drClamped = dr % 360;

            if (drClamped > 315) {
                angle -= 360 + (angle / 360)|0 * 360;
            }
            else if (drClamped > 135) {
                angle -= 180 + (angle / 360)|0 * 360;
            }
            else if (drClamped < -315) {
                angle += 360 + (angle / 360)|0 * 360;
            }
            else if (drClamped < -135) {
                angle += 180 + (angle / 360)|0 * 360;
            }
        }

        return  angle;
    }

    function getOriginXY (interactable, element) {
        var origin = interactable
                ? interactable.options.origin
                : defaultOptions.origin;

        if (origin === 'parent') {
            origin = parentElement(element);
        }
        else if (origin === 'self') {
            origin = interactable.getRect(element);
        }
        else if (trySelector(origin)) {
            origin = closest(element, origin) || { x: 0, y: 0 };
        }

        if (isFunction(origin)) {
            origin = origin(interactable && element);
        }

        if (isElement(origin))  {
            origin = getElementRect(origin);
        }

        origin.x = ('x' in origin)? origin.x : origin.left;
        origin.y = ('y' in origin)? origin.y : origin.top;

        return origin;
    }

    // http://stackoverflow.com/a/5634528/2280888
    function _getQBezierValue(t, p1, p2, p3) {
        var iT = 1 - t;
        return iT * iT * p1 + 2 * iT * t * p2 + t * t * p3;
    }

    function getQuadraticCurvePoint(startX, startY, cpX, cpY, endX, endY, position) {
        return {
            x:  _getQBezierValue(position, startX, cpX, endX),
            y:  _getQBezierValue(position, startY, cpY, endY)
        };
    }

    // http://gizma.com/easing/
    function easeOutQuad (t, b, c, d) {
        t /= d;
        return -c * t*(t-2) + b;
    }

    function nodeContains (parent, child) {
        while (child) {
            if (child === parent) {
                return true;
            }

            child = child.parentNode;
        }

        return false;
    }

    function closest (child, selector) {
        var parent = parentElement(child);

        while (isElement(parent)) {
            if (matchesSelector(parent, selector)) { return parent; }

            parent = parentElement(parent);
        }

        return null;
    }

    function parentElement (node) {
        var parent = node.parentNode;

        if (isDocFrag(parent)) {
            // skip past #shado-root fragments
            while ((parent = parent.host) && isDocFrag(parent)) {}

            return parent;
        }

        return parent;
    }

    function inContext (interactable, element) {
        return interactable._context === element.ownerDocument
                || nodeContains(interactable._context, element);
    }

    function testIgnore (interactable, interactableElement, element) {
        var ignoreFrom = interactable.options.ignoreFrom;

        if (!ignoreFrom || !isElement(element)) { return false; }

        if (isString(ignoreFrom)) {
            return matchesUpTo(element, ignoreFrom, interactableElement);
        }
        else if (isElement(ignoreFrom)) {
            return nodeContains(ignoreFrom, element);
        }

        return false;
    }

    function testAllow (interactable, interactableElement, element) {
        var allowFrom = interactable.options.allowFrom;

        if (!allowFrom) { return true; }

        if (!isElement(element)) { return false; }

        if (isString(allowFrom)) {
            return matchesUpTo(element, allowFrom, interactableElement);
        }
        else if (isElement(allowFrom)) {
            return nodeContains(allowFrom, element);
        }

        return false;
    }

    function checkAxis (axis, interactable) {
        if (!interactable) { return false; }

        var thisAxis = interactable.options.drag.axis;

        return (axis === 'xy' || thisAxis === 'xy' || thisAxis === axis);
    }

    function checkSnap (interactable, action) {
        var options = interactable.options;

        if (/^resize/.test(action)) {
            action = 'resize';
        }

        return options[action].snap && options[action].snap.enabled;
    }

    function checkRestrict (interactable, action) {
        var options = interactable.options;

        if (/^resize/.test(action)) {
            action = 'resize';
        }

        return  options[action].restrict && options[action].restrict.enabled;
    }

    function checkAutoScroll (interactable, action) {
        var options = interactable.options;

        if (/^resize/.test(action)) {
            action = 'resize';
        }

        return  options[action].autoScroll && options[action].autoScroll.enabled;
    }

    function withinInteractionLimit (interactable, element, action) {
        var options = interactable.options,
            maxActions = options[action.name].max,
            maxPerElement = options[action.name].maxPerElement,
            activeInteractions = 0,
            targetCount = 0,
            targetElementCount = 0;

        for (var i = 0, len = interactions.length; i < len; i++) {
            var interaction = interactions[i],
                otherAction = interaction.prepared.name,
                active = interaction.interacting();

            if (!active) { continue; }

            activeInteractions++;

            if (activeInteractions >= maxInteractions) {
                return false;
            }

            if (interaction.target !== interactable) { continue; }

            targetCount += (otherAction === action.name)|0;

            if (targetCount >= maxActions) {
                return false;
            }

            if (interaction.element === element) {
                targetElementCount++;

                if (otherAction !== action.name || targetElementCount >= maxPerElement) {
                    return false;
                }
            }
        }

        return maxInteractions > 0;
    }

    // Test for the element that's "above" all other qualifiers
    function indexOfDeepestElement (elements) {
        var dropzone,
            deepestZone = elements[0],
            index = deepestZone? 0: -1,
            parent,
            deepestZoneParents = [],
            dropzoneParents = [],
            child,
            i,
            n;

        for (i = 1; i < elements.length; i++) {
            dropzone = elements[i];

            // an element might belong to multiple selector dropzones
            if (!dropzone || dropzone === deepestZone) {
                continue;
            }

            if (!deepestZone) {
                deepestZone = dropzone;
                index = i;
                continue;
            }

            // check if the deepest or current are document.documentElement or document.rootElement
            // - if the current dropzone is, do nothing and continue
            if (dropzone.parentNode === dropzone.ownerDocument) {
                continue;
            }
            // - if deepest is, update with the current dropzone and continue to next
            else if (deepestZone.parentNode === dropzone.ownerDocument) {
                deepestZone = dropzone;
                index = i;
                continue;
            }

            if (!deepestZoneParents.length) {
                parent = deepestZone;
                while (parent.parentNode && parent.parentNode !== parent.ownerDocument) {
                    deepestZoneParents.unshift(parent);
                    parent = parent.parentNode;
                }
            }

            // if this element is an svg element and the current deepest is
            // an HTMLElement
            if (deepestZone instanceof HTMLElement
                && dropzone instanceof SVGElement
                && !(dropzone instanceof SVGSVGElement)) {

                if (dropzone === deepestZone.parentNode) {
                    continue;
                }

                parent = dropzone.ownerSVGElement;
            }
            else {
                parent = dropzone;
            }

            dropzoneParents = [];

            while (parent.parentNode !== parent.ownerDocument) {
                dropzoneParents.unshift(parent);
                parent = parent.parentNode;
            }

            n = 0;

            // get (position of last common ancestor) + 1
            while (dropzoneParents[n] && dropzoneParents[n] === deepestZoneParents[n]) {
                n++;
            }

            var parents = [
                dropzoneParents[n - 1],
                dropzoneParents[n],
                deepestZoneParents[n]
            ];

            child = parents[0].lastChild;

            while (child) {
                if (child === parents[1]) {
                    deepestZone = dropzone;
                    index = i;
                    deepestZoneParents = [];

                    break;
                }
                else if (child === parents[2]) {
                    break;
                }

                child = child.previousSibling;
            }
        }

        return index;
    }

    function Interaction () {
        this.target          = null; // current interactable being interacted with
        this.element         = null; // the target element of the interactable
        this.dropTarget      = null; // the dropzone a drag target might be dropped into
        this.dropElement     = null; // the element at the time of checking
        this.prevDropTarget  = null; // the dropzone that was recently dragged away from
        this.prevDropElement = null; // the element at the time of checking

        this.prepared        = {     // action that's ready to be fired on next move event
            name : null,
            axis : null,
            edges: null
        };

        this.matches         = [];   // all selectors that are matched by target element
        this.matchElements   = [];   // corresponding elements

        this.inertiaStatus = {
            active       : false,
            smoothEnd    : false,
            ending       : false,

            startEvent: null,
            upCoords: {},

            xe: 0, ye: 0,
            sx: 0, sy: 0,

            t0: 0,
            vx0: 0, vys: 0,
            duration: 0,

            resumeDx: 0,
            resumeDy: 0,

            lambda_v0: 0,
            one_ve_v0: 0,
            i  : null
        };

        if (isFunction(Function.prototype.bind)) {
            this.boundInertiaFrame = this.inertiaFrame.bind(this);
            this.boundSmoothEndFrame = this.smoothEndFrame.bind(this);
        }
        else {
            var that = this;

            this.boundInertiaFrame = function () { return that.inertiaFrame(); };
            this.boundSmoothEndFrame = function () { return that.smoothEndFrame(); };
        }

        this.activeDrops = {
            dropzones: [],      // the dropzones that are mentioned below
            elements : [],      // elements of dropzones that accept the target draggable
            rects    : []       // the rects of the elements mentioned above
        };

        // keep track of added pointers
        this.pointers    = [];
        this.pointerIds  = [];
        this.downTargets = [];
        this.downTimes   = [];
        this.holdTimers  = [];

        // Previous native pointer move event coordinates
        this.prevCoords = {
            page     : { x: 0, y: 0 },
            client   : { x: 0, y: 0 },
            timeStamp: 0
        };
        // current native pointer move event coordinates
        this.curCoords = {
            page     : { x: 0, y: 0 },
            client   : { x: 0, y: 0 },
            timeStamp: 0
        };

        // Starting InteractEvent pointer coordinates
        this.startCoords = {
            page     : { x: 0, y: 0 },
            client   : { x: 0, y: 0 },
            timeStamp: 0
        };

        // Change in coordinates and time of the pointer
        this.pointerDelta = {
            page     : { x: 0, y: 0, vx: 0, vy: 0, speed: 0 },
            client   : { x: 0, y: 0, vx: 0, vy: 0, speed: 0 },
            timeStamp: 0
        };

        this.downEvent   = null;    // pointerdown/mousedown/touchstart event
        this.downPointer = {};

        this._eventTarget    = null;
        this._curEventTarget = null;

        this.prevEvent = null;      // previous action event
        this.tapTime   = 0;         // time of the most recent tap event
        this.prevTap   = null;

        this.startOffset    = { left: 0, right: 0, top: 0, bottom: 0 };
        this.restrictOffset = { left: 0, right: 0, top: 0, bottom: 0 };
        this.snapOffsets    = [];

        this.gesture = {
            start: { x: 0, y: 0 },

            startDistance: 0,   // distance between two touches of touchStart
            prevDistance : 0,
            distance     : 0,

            scale: 1,           // gesture.distance / gesture.startDistance

            startAngle: 0,      // angle of line joining two touches
            prevAngle : 0       // angle of the previous gesture event
        };

        this.snapStatus = {
            x       : 0, y       : 0,
            dx      : 0, dy      : 0,
            realX   : 0, realY   : 0,
            snappedX: 0, snappedY: 0,
            targets : [],
            locked  : false,
            changed : false
        };

        this.restrictStatus = {
            dx         : 0, dy         : 0,
            restrictedX: 0, restrictedY: 0,
            snap       : null,
            restricted : false,
            changed    : false
        };

        this.restrictStatus.snap = this.snapStatus;

        this.pointerIsDown   = false;
        this.pointerWasMoved = false;
        this.gesturing       = false;
        this.dragging        = false;
        this.resizing        = false;
        this.resizeAxes      = 'xy';

        this.mouse = false;

        interactions.push(this);
    }

    Interaction.prototype = {
        getPageXY  : function (pointer, xy) { return   getPageXY(pointer, xy, this); },
        getClientXY: function (pointer, xy) { return getClientXY(pointer, xy, this); },
        setEventXY : function (target, ptr) { return  setEventXY(target, ptr, this); },

        pointerOver: function (pointer, event, eventTarget) {
            if (this.prepared.name || !this.mouse) { return; }

            var curMatches = [],
                curMatchElements = [],
                prevTargetElement = this.element;

            this.addPointer(pointer);

            if (this.target
                && (testIgnore(this.target, this.element, eventTarget)
                    || !testAllow(this.target, this.element, eventTarget))) {
                // if the eventTarget should be ignored or shouldn't be allowed
                // clear the previous target
                this.target = null;
                this.element = null;
                this.matches = [];
                this.matchElements = [];
            }

            var elementInteractable = interactables.get(eventTarget),
                elementAction = (elementInteractable
                                 && !testIgnore(elementInteractable, eventTarget, eventTarget)
                                 && testAllow(elementInteractable, eventTarget, eventTarget)
                                 && validateAction(
                                     elementInteractable.getAction(pointer, event, this, eventTarget),
                                     elementInteractable));

            if (elementAction && !withinInteractionLimit(elementInteractable, eventTarget, elementAction)) {
                 elementAction = null;
            }

            function pushCurMatches (interactable, selector) {
                if (interactable
                    && inContext(interactable, eventTarget)
                    && !testIgnore(interactable, eventTarget, eventTarget)
                    && testAllow(interactable, eventTarget, eventTarget)
                    && matchesSelector(eventTarget, selector)) {

                    curMatches.push(interactable);
                    curMatchElements.push(eventTarget);
                }
            }

            if (elementAction) {
                this.target = elementInteractable;
                this.element = eventTarget;
                this.matches = [];
                this.matchElements = [];
            }
            else {
                interactables.forEachSelector(pushCurMatches);

                if (this.validateSelector(pointer, event, curMatches, curMatchElements)) {
                    this.matches = curMatches;
                    this.matchElements = curMatchElements;

                    this.pointerHover(pointer, event, this.matches, this.matchElements);
                    events.add(eventTarget,
                                        supportsPointerEvent? pEventTypes.move : 'mousemove',
                                        listeners.pointerHover);
                }
                else if (this.target) {
                    if (nodeContains(prevTargetElement, eventTarget)) {
                        this.pointerHover(pointer, event, this.matches, this.matchElements);
                        events.add(this.element,
                                            supportsPointerEvent? pEventTypes.move : 'mousemove',
                                            listeners.pointerHover);
                    }
                    else {
                        this.target = null;
                        this.element = null;
                        this.matches = [];
                        this.matchElements = [];
                    }
                }
            }
        },

        // Check what action would be performed on pointerMove target if a mouse
        // button were pressed and change the cursor accordingly
        pointerHover: function (pointer, event, eventTarget, curEventTarget, matches, matchElements) {
            var target = this.target;

            if (!this.prepared.name && this.mouse) {

                var action;

                // update pointer coords for defaultActionChecker to use
                this.setEventXY(this.curCoords, [pointer]);

                if (matches) {
                    action = this.validateSelector(pointer, event, matches, matchElements);
                }
                else if (target) {
                    action = validateAction(target.getAction(this.pointers[0], event, this, this.element), this.target);
                }

                if (target && target.options.styleCursor) {
                    if (action) {
                        target._doc.documentElement.style.cursor = getActionCursor(action);
                    }
                    else {
                        target._doc.documentElement.style.cursor = '';
                    }
                }
            }
            else if (this.prepared.name) {
                this.checkAndPreventDefault(event, target, this.element);
            }
        },

        pointerOut: function (pointer, event, eventTarget) {
            if (this.prepared.name) { return; }

            // Remove temporary event listeners for selector Interactables
            if (!interactables.get(eventTarget)) {
                events.remove(eventTarget,
                                       supportsPointerEvent? pEventTypes.move : 'mousemove',
                                       listeners.pointerHover);
            }

            if (this.target && this.target.options.styleCursor && !this.interacting()) {
                this.target._doc.documentElement.style.cursor = '';
            }
        },

        selectorDown: function (pointer, event, eventTarget, curEventTarget) {
            var that = this,
                // copy event to be used in timeout for IE8
                eventCopy = events.useAttachEvent? extend({}, event) : event,
                element = eventTarget,
                pointerIndex = this.addPointer(pointer),
                action;

            this.holdTimers[pointerIndex] = setTimeout(function () {
                that.pointerHold(events.useAttachEvent? eventCopy : pointer, eventCopy, eventTarget, curEventTarget);
            }, defaultOptions._holdDuration);

            this.pointerIsDown = true;

            // Check if the down event hits the current inertia target
            if (this.inertiaStatus.active && this.target.selector) {
                // climb up the DOM tree from the event target
                while (isElement(element)) {

                    // if this element is the current inertia target element
                    if (element === this.element
                        // and the prospective action is the same as the ongoing one
                        && validateAction(this.target.getAction(pointer, event, this, this.element), this.target).name === this.prepared.name) {

                        // stop inertia so that the next move will be a normal one
                        cancelFrame(this.inertiaStatus.i);
                        this.inertiaStatus.active = false;

                        this.collectEventTargets(pointer, event, eventTarget, 'down');
                        return;
                    }
                    element = parentElement(element);
                }
            }

            // do nothing if interacting
            if (this.interacting()) {
                this.collectEventTargets(pointer, event, eventTarget, 'down');
                return;
            }

            function pushMatches (interactable, selector, context) {
                var elements = ie8MatchesSelector
                    ? context.querySelectorAll(selector)
                    : undefined;

                if (inContext(interactable, element)
                    && !testIgnore(interactable, element, eventTarget)
                    && testAllow(interactable, element, eventTarget)
                    && matchesSelector(element, selector, elements)) {

                    that.matches.push(interactable);
                    that.matchElements.push(element);
                }
            }

            // update pointer coords for defaultActionChecker to use
            this.setEventXY(this.curCoords, [pointer]);
            this.downEvent = event;

            while (isElement(element) && !action) {
                this.matches = [];
                this.matchElements = [];

                interactables.forEachSelector(pushMatches);

                action = this.validateSelector(pointer, event, this.matches, this.matchElements);
                element = parentElement(element);
            }

            if (action) {
                this.prepared.name  = action.name;
                this.prepared.axis  = action.axis;
                this.prepared.edges = action.edges;

                this.collectEventTargets(pointer, event, eventTarget, 'down');

                return this.pointerDown(pointer, event, eventTarget, curEventTarget, action);
            }
            else {
                // do these now since pointerDown isn't being called from here
                this.downTimes[pointerIndex] = new Date().getTime();
                this.downTargets[pointerIndex] = eventTarget;
                pointerExtend(this.downPointer, pointer);

                copyCoords(this.prevCoords, this.curCoords);
                this.pointerWasMoved = false;
            }

            this.collectEventTargets(pointer, event, eventTarget, 'down');
        },

        // Determine action to be performed on next pointerMove and add appropriate
        // style and event Listeners
        pointerDown: function (pointer, event, eventTarget, curEventTarget, forceAction) {
            if (!forceAction && !this.inertiaStatus.active && this.pointerWasMoved && this.prepared.name) {
                this.checkAndPreventDefault(event, this.target, this.element);

                return;
            }

            this.pointerIsDown = true;
            this.downEvent = event;

            var pointerIndex = this.addPointer(pointer),
                action;

            // If it is the second touch of a multi-touch gesture, keep the
            // target the same and get a new action if a target was set by the
            // first touch
            if (this.pointerIds.length > 1 && this.target._element === this.element) {
                var newAction = validateAction(forceAction || this.target.getAction(pointer, event, this, this.element), this.target);

                if (withinInteractionLimit(this.target, this.element, newAction)) {
                    action = newAction;
                }

                this.prepared.name = null;
            }
            // Otherwise, set the target if there is no action prepared
            else if (!this.prepared.name) {
                var interactable = interactables.get(curEventTarget);

                if (interactable
                    && !testIgnore(interactable, curEventTarget, eventTarget)
                    && testAllow(interactable, curEventTarget, eventTarget)
                    && (action = validateAction(forceAction || interactable.getAction(pointer, event, this, curEventTarget), interactable, eventTarget))
                    && withinInteractionLimit(interactable, curEventTarget, action)) {
                    this.target = interactable;
                    this.element = curEventTarget;
                }
            }

            var target = this.target,
                options = target && target.options;

            if (target && (forceAction || !this.prepared.name)) {
                action = action || validateAction(forceAction || target.getAction(pointer, event, this, curEventTarget), target, this.element);

                this.setEventXY(this.startCoords, this.pointers);

                if (!action) { return; }

                if (options.styleCursor) {
                    target._doc.documentElement.style.cursor = getActionCursor(action);
                }

                this.resizeAxes = action.name === 'resize'? action.axis : null;

                if (action === 'gesture' && this.pointerIds.length < 2) {
                    action = null;
                }

                this.prepared.name  = action.name;
                this.prepared.axis  = action.axis;
                this.prepared.edges = action.edges;

                this.snapStatus.snappedX = this.snapStatus.snappedY =
                    this.restrictStatus.restrictedX = this.restrictStatus.restrictedY = NaN;

                this.downTimes[pointerIndex] = new Date().getTime();
                this.downTargets[pointerIndex] = eventTarget;
                pointerExtend(this.downPointer, pointer);

                copyCoords(this.prevCoords, this.startCoords);
                this.pointerWasMoved = false;

                this.checkAndPreventDefault(event, target, this.element);
            }
            // if inertia is active try to resume action
            else if (this.inertiaStatus.active
                && curEventTarget === this.element
                && validateAction(target.getAction(pointer, event, this, this.element), target).name === this.prepared.name) {

                cancelFrame(this.inertiaStatus.i);
                this.inertiaStatus.active = false;

                this.checkAndPreventDefault(event, target, this.element);
            }
        },

        setModifications: function (coords, preEnd) {
            var target         = this.target,
                shouldMove     = true,
                shouldSnap     = checkSnap(target, this.prepared.name)     && (!target.options[this.prepared.name].snap.endOnly     || preEnd),
                shouldRestrict = checkRestrict(target, this.prepared.name) && (!target.options[this.prepared.name].restrict.endOnly || preEnd);

            if (shouldSnap    ) { this.setSnapping   (coords); } else { this.snapStatus    .locked     = false; }
            if (shouldRestrict) { this.setRestriction(coords); } else { this.restrictStatus.restricted = false; }

            if (shouldSnap && this.snapStatus.locked && !this.snapStatus.changed) {
                shouldMove = shouldRestrict && this.restrictStatus.restricted && this.restrictStatus.changed;
            }
            else if (shouldRestrict && this.restrictStatus.restricted && !this.restrictStatus.changed) {
                shouldMove = false;
            }

            return shouldMove;
        },

        setStartOffsets: function (action, interactable, element) {
            var rect = interactable.getRect(element),
                origin = getOriginXY(interactable, element),
                snap = interactable.options[this.prepared.name].snap,
                restrict = interactable.options[this.prepared.name].restrict,
                width, height;

            if (rect) {
                this.startOffset.left = this.startCoords.page.x - rect.left;
                this.startOffset.top  = this.startCoords.page.y - rect.top;

                this.startOffset.right  = rect.right  - this.startCoords.page.x;
                this.startOffset.bottom = rect.bottom - this.startCoords.page.y;

                if ('width' in rect) { width = rect.width; }
                else { width = rect.right - rect.left; }
                if ('height' in rect) { height = rect.height; }
                else { height = rect.bottom - rect.top; }
            }
            else {
                this.startOffset.left = this.startOffset.top = this.startOffset.right = this.startOffset.bottom = 0;
            }

            this.snapOffsets.splice(0);

            var snapOffset = snap && snap.offset === 'startCoords'
                                ? {
                                    x: this.startCoords.page.x - origin.x,
                                    y: this.startCoords.page.y - origin.y
                                }
                                : snap && snap.offset || { x: 0, y: 0 };

            if (rect && snap && snap.relativePoints && snap.relativePoints.length) {
                for (var i = 0; i < snap.relativePoints.length; i++) {
                    this.snapOffsets.push({
                        x: this.startOffset.left - (width  * snap.relativePoints[i].x) + snapOffset.x,
                        y: this.startOffset.top  - (height * snap.relativePoints[i].y) + snapOffset.y
                    });
                }
            }
            else {
                this.snapOffsets.push(snapOffset);
            }

            if (rect && restrict.elementRect) {
                this.restrictOffset.left = this.startOffset.left - (width  * restrict.elementRect.left);
                this.restrictOffset.top  = this.startOffset.top  - (height * restrict.elementRect.top);

                this.restrictOffset.right  = this.startOffset.right  - (width  * (1 - restrict.elementRect.right));
                this.restrictOffset.bottom = this.startOffset.bottom - (height * (1 - restrict.elementRect.bottom));
            }
            else {
                this.restrictOffset.left = this.restrictOffset.top = this.restrictOffset.right = this.restrictOffset.bottom = 0;
            }
        },

        /*\
         * Interaction.start
         [ method ]
         *
         * Start an action with the given Interactable and Element as tartgets. The
         * action must be enabled for the target Interactable and an appropriate number
         * of pointers must be held down – 1 for drag/resize, 2 for gesture.
         *
         * Use it with `interactable.<action>able({ manualStart: false })` to always
         * [start actions manually](https://github.com/taye/interact.js/issues/114)
         *
         - action       (object)  The action to be performed - drag, resize, etc.
         - interactable (Interactable) The Interactable to target
         - element      (Element) The DOM Element to target
         = (object) interact
         **
         | interact(target)
         |   .draggable({
         |     // disable the default drag start by down->move
         |     manualStart: true
         |   })
         |   // start dragging after the user holds the pointer down
         |   .on('hold', function (event) {
         |     var interaction = event.interaction;
         |
         |     if (!interaction.interacting()) {
         |       interaction.start({ name: 'drag' },
         |                         event.interactable,
         |                         event.currentTarget);
         |     }
         | });
        \*/
        start: function (action, interactable, element) {
            if (this.interacting()
                || !this.pointerIsDown
                || this.pointerIds.length < (action.name === 'gesture'? 2 : 1)) {
                return;
            }

            // if this interaction had been removed after stopping
            // add it back
            if (indexOf(interactions, this) === -1) {
                interactions.push(this);
            }

            // set the startCoords if there was no prepared action
            if (!this.prepared.name) {
                this.setEventXY(this.startCoords, this.pointers);
            }

            this.prepared.name  = action.name;
            this.prepared.axis  = action.axis;
            this.prepared.edges = action.edges;
            this.target         = interactable;
            this.element        = element;

            this.setStartOffsets(action.name, interactable, element);
            this.setModifications(this.startCoords.page);

            this.prevEvent = this[this.prepared.name + 'Start'](this.downEvent);
        },

        pointerMove: function (pointer, event, eventTarget, curEventTarget, preEnd) {
            if (this.inertiaStatus.active) {
                var pageUp   = this.inertiaStatus.upCoords.page;
                var clientUp = this.inertiaStatus.upCoords.client;

                var inertiaPosition = {
                    pageX  : pageUp.x   + this.inertiaStatus.sx,
                    pageY  : pageUp.y   + this.inertiaStatus.sy,
                    clientX: clientUp.x + this.inertiaStatus.sx,
                    clientY: clientUp.y + this.inertiaStatus.sy
                };

                this.setEventXY(this.curCoords, [inertiaPosition]);
            }
            else {
                this.recordPointer(pointer);
                this.setEventXY(this.curCoords, this.pointers);
            }

            var duplicateMove = (this.curCoords.page.x === this.prevCoords.page.x
                                 && this.curCoords.page.y === this.prevCoords.page.y
                                 && this.curCoords.client.x === this.prevCoords.client.x
                                 && this.curCoords.client.y === this.prevCoords.client.y);

            var dx, dy,
                pointerIndex = this.mouse? 0 : indexOf(this.pointerIds, getPointerId(pointer));

            // register movement greater than pointerMoveTolerance
            if (this.pointerIsDown && !this.pointerWasMoved) {
                dx = this.curCoords.client.x - this.startCoords.client.x;
                dy = this.curCoords.client.y - this.startCoords.client.y;

                this.pointerWasMoved = hypot(dx, dy) > pointerMoveTolerance;
            }

            if (!duplicateMove && (!this.pointerIsDown || this.pointerWasMoved)) {
                if (this.pointerIsDown) {
                    clearTimeout(this.holdTimers[pointerIndex]);
                }

                this.collectEventTargets(pointer, event, eventTarget, 'move');
            }

            if (!this.pointerIsDown) { return; }

            if (duplicateMove && this.pointerWasMoved && !preEnd) {
                this.checkAndPreventDefault(event, this.target, this.element);
                return;
            }

            // set pointer coordinate, time changes and speeds
            setEventDeltas(this.pointerDelta, this.prevCoords, this.curCoords);

            if (!this.prepared.name) { return; }

            if (this.pointerWasMoved
                // ignore movement while inertia is active
                && (!this.inertiaStatus.active || (pointer instanceof InteractEvent && /inertiastart/.test(pointer.type)))) {

                // if just starting an action, calculate the pointer speed now
                if (!this.interacting()) {
                    setEventDeltas(this.pointerDelta, this.prevCoords, this.curCoords);

                    // check if a drag is in the correct axis
                    if (this.prepared.name === 'drag') {
                        var absX = Math.abs(dx),
                            absY = Math.abs(dy),
                            targetAxis = this.target.options.drag.axis,
                            axis = (absX > absY ? 'x' : absX < absY ? 'y' : 'xy');

                        // if the movement isn't in the axis of the interactable
                        if (axis !== 'xy' && targetAxis !== 'xy' && targetAxis !== axis) {
                            // cancel the prepared action
                            this.prepared.name = null;

                            // then try to get a drag from another ineractable

                            var element = eventTarget;

                            // check element interactables
                            while (isElement(element)) {
                                var elementInteractable = interactables.get(element);

                                if (elementInteractable
                                    && elementInteractable !== this.target
                                    && !elementInteractable.options.drag.manualStart
                                    && elementInteractable.getAction(this.downPointer, this.downEvent, this, element).name === 'drag'
                                    && checkAxis(axis, elementInteractable)) {

                                    this.prepared.name = 'drag';
                                    this.target = elementInteractable;
                                    this.element = element;
                                    break;
                                }

                                element = parentElement(element);
                            }

                            // if there's no drag from element interactables,
                            // check the selector interactables
                            if (!this.prepared.name) {
                                var thisInteraction = this;

                                var getDraggable = function (interactable, selector, context) {
                                    var elements = ie8MatchesSelector
                                        ? context.querySelectorAll(selector)
                                        : undefined;

                                    if (interactable === thisInteraction.target) { return; }

                                    if (inContext(interactable, eventTarget)
                                        && !interactable.options.drag.manualStart
                                        && !testIgnore(interactable, element, eventTarget)
                                        && testAllow(interactable, element, eventTarget)
                                        && matchesSelector(element, selector, elements)
                                        && interactable.getAction(thisInteraction.downPointer, thisInteraction.downEvent, thisInteraction, element).name === 'drag'
                                        && checkAxis(axis, interactable)
                                        && withinInteractionLimit(interactable, element, 'drag')) {

                                        return interactable;
                                    }
                                };

                                element = eventTarget;

                                while (isElement(element)) {
                                    var selectorInteractable = interactables.forEachSelector(getDraggable);

                                    if (selectorInteractable) {
                                        this.prepared.name = 'drag';
                                        this.target = selectorInteractable;
                                        this.element = element;
                                        break;
                                    }

                                    element = parentElement(element);
                                }
                            }
                        }
                    }
                }

                var starting = !!this.prepared.name && !this.interacting();

                if (starting
                    && (this.target.options[this.prepared.name].manualStart
                        || !withinInteractionLimit(this.target, this.element, this.prepared))) {
                    this.stop(event);
                    return;
                }

                if (this.prepared.name && this.target) {
                    if (starting) {
                        this.start(this.prepared, this.target, this.element);
                    }

                    var shouldMove = this.setModifications(this.curCoords.page, preEnd);

                    // move if snapping or restriction doesn't prevent it
                    if (shouldMove || starting) {
                        this.prevEvent = this[this.prepared.name + 'Move'](event);
                    }

                    this.checkAndPreventDefault(event, this.target, this.element);
                }
            }

            copyCoords(this.prevCoords, this.curCoords);

            if (this.dragging || this.resizing) {
                this.autoScrollMove(pointer);
            }
        },

        dragStart: function (event) {
            var dragEvent = new InteractEvent(this, event, 'drag', 'start', this.element);

            this.dragging = true;
            this.target.fire(dragEvent);

            // reset active dropzones
            this.activeDrops.dropzones = [];
            this.activeDrops.elements  = [];
            this.activeDrops.rects     = [];

            if (!this.dynamicDrop) {
                this.setActiveDrops(this.element);
            }

            var dropEvents = this.getDropEvents(event, dragEvent);

            if (dropEvents.activate) {
                this.fireActiveDrops(dropEvents.activate);
            }

            return dragEvent;
        },

        dragMove: function (event) {
            var target = this.target,
                dragEvent  = new InteractEvent(this, event, 'drag', 'move', this.element),
                draggableElement = this.element,
                drop = this.getDrop(dragEvent, event, draggableElement);

            this.dropTarget = drop.dropzone;
            this.dropElement = drop.element;

            var dropEvents = this.getDropEvents(event, dragEvent);

            target.fire(dragEvent);

            if (dropEvents.leave) { this.prevDropTarget.fire(dropEvents.leave); }
            if (dropEvents.enter) {     this.dropTarget.fire(dropEvents.enter); }
            if (dropEvents.move ) {     this.dropTarget.fire(dropEvents.move ); }

            this.prevDropTarget  = this.dropTarget;
            this.prevDropElement = this.dropElement;

            return dragEvent;
        },

        resizeStart: function (event) {
            var resizeEvent = new InteractEvent(this, event, 'resize', 'start', this.element);

            if (this.prepared.edges) {
                var startRect = this.target.getRect(this.element);

                /*
                 * When using the `resizable.square` or `resizable.preserveAspectRatio` options, resizing from one edge
                 * will affect another. E.g. with `resizable.square`, resizing to make the right edge larger will make
                 * the bottom edge larger by the same amount. We call these 'linked' edges. Any linked edges will depend
                 * on the active edges and the edge being interacted with.
                 */
                if (this.target.options.resize.square || this.target.options.resize.preserveAspectRatio) {
                    var linkedEdges = extend({}, this.prepared.edges);

                    linkedEdges.top    = linkedEdges.top    || (linkedEdges.left   && !linkedEdges.bottom);
                    linkedEdges.left   = linkedEdges.left   || (linkedEdges.top    && !linkedEdges.right );
                    linkedEdges.bottom = linkedEdges.bottom || (linkedEdges.right  && !linkedEdges.top   );
                    linkedEdges.right  = linkedEdges.right  || (linkedEdges.bottom && !linkedEdges.left  );

                    this.prepared._linkedEdges = linkedEdges;
                }
                else {
                    this.prepared._linkedEdges = null;
                }

                // if using `resizable.preserveAspectRatio` option, record aspect ratio at the start of the resize
                if (this.target.options.resize.preserveAspectRatio) {
                    this.resizeStartAspectRatio = startRect.width / startRect.height;
                }

                this.resizeRects = {
                    start     : startRect,
                    current   : extend({}, startRect),
                    restricted: extend({}, startRect),
                    previous  : extend({}, startRect),
                    delta     : {
                        left: 0, right : 0, width : 0,
                        top : 0, bottom: 0, height: 0
                    }
                };

                resizeEvent.rect = this.resizeRects.restricted;
                resizeEvent.deltaRect = this.resizeRects.delta;
            }

            this.target.fire(resizeEvent);

            this.resizing = true;

            return resizeEvent;
        },

        resizeMove: function (event) {
            var resizeEvent = new InteractEvent(this, event, 'resize', 'move', this.element);

            var edges = this.prepared.edges,
                invert = this.target.options.resize.invert,
                invertible = invert === 'reposition' || invert === 'negate';

            if (edges) {
                var dx = resizeEvent.dx,
                    dy = resizeEvent.dy,

                    start      = this.resizeRects.start,
                    current    = this.resizeRects.current,
                    restricted = this.resizeRects.restricted,
                    delta      = this.resizeRects.delta,
                    previous   = extend(this.resizeRects.previous, restricted),

                    originalEdges = edges;

                // `resize.preserveAspectRatio` takes precedence over `resize.square`
                if (this.target.options.resize.preserveAspectRatio) {
                    var resizeStartAspectRatio = this.resizeStartAspectRatio;

                    edges = this.prepared._linkedEdges;

                    if ((originalEdges.left && originalEdges.bottom)
                        || (originalEdges.right && originalEdges.top)) {
                        dy = -dx / resizeStartAspectRatio;
                    }
                    else if (originalEdges.left || originalEdges.right) { dy = dx / resizeStartAspectRatio; }
                    else if (originalEdges.top || originalEdges.bottom) { dx = dy * resizeStartAspectRatio; }
                }
                else if (this.target.options.resize.square) {
                    edges = this.prepared._linkedEdges;

                    if ((originalEdges.left && originalEdges.bottom)
                        || (originalEdges.right && originalEdges.top)) {
                        dy = -dx;
                    }
                    else if (originalEdges.left || originalEdges.right) { dy = dx; }
                    else if (originalEdges.top || originalEdges.bottom) { dx = dy; }
                }

                // update the 'current' rect without modifications
                if (edges.top   ) { current.top    += dy; }
                if (edges.bottom) { current.bottom += dy; }
                if (edges.left  ) { current.left   += dx; }
                if (edges.right ) { current.right  += dx; }

                if (invertible) {
                    // if invertible, copy the current rect
                    extend(restricted, current);

                    if (invert === 'reposition') {
                        // swap edge values if necessary to keep width/height positive
                        var swap;

                        if (restricted.top > restricted.bottom) {
                            swap = restricted.top;

                            restricted.top = restricted.bottom;
                            restricted.bottom = swap;
                        }
                        if (restricted.left > restricted.right) {
                            swap = restricted.left;

                            restricted.left = restricted.right;
                            restricted.right = swap;
                        }
                    }
                }
                else {
                    // if not invertible, restrict to minimum of 0x0 rect
                    restricted.top    = Math.min(current.top, start.bottom);
                    restricted.bottom = Math.max(current.bottom, start.top);
                    restricted.left   = Math.min(current.left, start.right);
                    restricted.right  = Math.max(current.right, start.left);
                }

                restricted.width  = restricted.right  - restricted.left;
                restricted.height = restricted.bottom - restricted.top ;

                for (var edge in restricted) {
                    delta[edge] = restricted[edge] - previous[edge];
                }

                resizeEvent.edges = this.prepared.edges;
                resizeEvent.rect = restricted;
                resizeEvent.deltaRect = delta;
            }

            this.target.fire(resizeEvent);

            return resizeEvent;
        },

        gestureStart: function (event) {
            var gestureEvent = new InteractEvent(this, event, 'gesture', 'start', this.element);

            gestureEvent.ds = 0;

            this.gesture.startDistance = this.gesture.prevDistance = gestureEvent.distance;
            this.gesture.startAngle = this.gesture.prevAngle = gestureEvent.angle;
            this.gesture.scale = 1;

            this.gesturing = true;

            this.target.fire(gestureEvent);

            return gestureEvent;
        },

        gestureMove: function (event) {
            if (!this.pointerIds.length) {
                return this.prevEvent;
            }

            var gestureEvent;

            gestureEvent = new InteractEvent(this, event, 'gesture', 'move', this.element);
            gestureEvent.ds = gestureEvent.scale - this.gesture.scale;

            this.target.fire(gestureEvent);

            this.gesture.prevAngle = gestureEvent.angle;
            this.gesture.prevDistance = gestureEvent.distance;

            if (gestureEvent.scale !== Infinity &&
                gestureEvent.scale !== null &&
                gestureEvent.scale !== undefined  &&
                !isNaN(gestureEvent.scale)) {

                this.gesture.scale = gestureEvent.scale;
            }

            return gestureEvent;
        },

        pointerHold: function (pointer, event, eventTarget) {
            this.collectEventTargets(pointer, event, eventTarget, 'hold');
        },

        pointerUp: function (pointer, event, eventTarget, curEventTarget) {
            var pointerIndex = this.mouse? 0 : indexOf(this.pointerIds, getPointerId(pointer));

            clearTimeout(this.holdTimers[pointerIndex]);

            this.collectEventTargets(pointer, event, eventTarget, 'up' );
            this.collectEventTargets(pointer, event, eventTarget, 'tap');

            this.pointerEnd(pointer, event, eventTarget, curEventTarget);

            this.removePointer(pointer);
        },

        pointerCancel: function (pointer, event, eventTarget, curEventTarget) {
            var pointerIndex = this.mouse? 0 : indexOf(this.pointerIds, getPointerId(pointer));

            clearTimeout(this.holdTimers[pointerIndex]);

            this.collectEventTargets(pointer, event, eventTarget, 'cancel');
            this.pointerEnd(pointer, event, eventTarget, curEventTarget);

            this.removePointer(pointer);
        },

        // http://www.quirksmode.org/dom/events/click.html
        // >Events leading to dblclick
        //
        // IE8 doesn't fire down event before dblclick.
        // This workaround tries to fire a tap and doubletap after dblclick
        ie8Dblclick: function (pointer, event, eventTarget) {
            if (this.prevTap
                && event.clientX === this.prevTap.clientX
                && event.clientY === this.prevTap.clientY
                && eventTarget   === this.prevTap.target) {

                this.downTargets[0] = eventTarget;
                this.downTimes[0] = new Date().getTime();
                this.collectEventTargets(pointer, event, eventTarget, 'tap');
            }
        },

        // End interact move events and stop auto-scroll unless inertia is enabled
        pointerEnd: function (pointer, event, eventTarget, curEventTarget) {
            var endEvent,
                target = this.target,
                options = target && target.options,
                inertiaOptions = options && this.prepared.name && options[this.prepared.name].inertia,
                inertiaStatus = this.inertiaStatus;

            if (this.interacting()) {

                if (inertiaStatus.active && !inertiaStatus.ending) { return; }

                var pointerSpeed,
                    now = new Date().getTime(),
                    inertiaPossible = false,
                    inertia = false,
                    smoothEnd = false,
                    endSnap = checkSnap(target, this.prepared.name) && options[this.prepared.name].snap.endOnly,
                    endRestrict = checkRestrict(target, this.prepared.name) && options[this.prepared.name].restrict.endOnly,
                    dx = 0,
                    dy = 0,
                    startEvent;

                if (this.dragging) {
                    if      (options.drag.axis === 'x' ) { pointerSpeed = Math.abs(this.pointerDelta.client.vx); }
                    else if (options.drag.axis === 'y' ) { pointerSpeed = Math.abs(this.pointerDelta.client.vy); }
                    else   /*options.drag.axis === 'xy'*/{ pointerSpeed = this.pointerDelta.client.speed; }
                }
                else {
                    pointerSpeed = this.pointerDelta.client.speed;
                }

                // check if inertia should be started
                inertiaPossible = (inertiaOptions && inertiaOptions.enabled
                                   && this.prepared.name !== 'gesture'
                                   && event !== inertiaStatus.startEvent);

                inertia = (inertiaPossible
                           && (now - this.curCoords.timeStamp) < 50
                           && pointerSpeed > inertiaOptions.minSpeed
                           && pointerSpeed > inertiaOptions.endSpeed);

                if (inertiaPossible && !inertia && (endSnap || endRestrict)) {

                    var snapRestrict = {};

                    snapRestrict.snap = snapRestrict.restrict = snapRestrict;

                    if (endSnap) {
                        this.setSnapping(this.curCoords.page, snapRestrict);
                        if (snapRestrict.locked) {
                            dx += snapRestrict.dx;
                            dy += snapRestrict.dy;
                        }
                    }

                    if (endRestrict) {
                        this.setRestriction(this.curCoords.page, snapRestrict);
                        if (snapRestrict.restricted) {
                            dx += snapRestrict.dx;
                            dy += snapRestrict.dy;
                        }
                    }

                    if (dx || dy) {
                        smoothEnd = true;
                    }
                }

                if (inertia || smoothEnd) {
                    copyCoords(inertiaStatus.upCoords, this.curCoords);

                    this.pointers[0] = inertiaStatus.startEvent = startEvent =
                        new InteractEvent(this, event, this.prepared.name, 'inertiastart', this.element);

                    inertiaStatus.t0 = now;

                    target.fire(inertiaStatus.startEvent);

                    if (inertia) {
                        inertiaStatus.vx0 = this.pointerDelta.client.vx;
                        inertiaStatus.vy0 = this.pointerDelta.client.vy;
                        inertiaStatus.v0 = pointerSpeed;

                        this.calcInertia(inertiaStatus);

                        var page = extend({}, this.curCoords.page),
                            origin = getOriginXY(target, this.element),
                            statusObject;

                        page.x = page.x + inertiaStatus.xe - origin.x;
                        page.y = page.y + inertiaStatus.ye - origin.y;

                        statusObject = {
                            useStatusXY: true,
                            x: page.x,
                            y: page.y,
                            dx: 0,
                            dy: 0,
                            snap: null
                        };

                        statusObject.snap = statusObject;

                        dx = dy = 0;

                        if (endSnap) {
                            var snap = this.setSnapping(this.curCoords.page, statusObject);

                            if (snap.locked) {
                                dx += snap.dx;
                                dy += snap.dy;
                            }
                        }

                        if (endRestrict) {
                            var restrict = this.setRestriction(this.curCoords.page, statusObject);

                            if (restrict.restricted) {
                                dx += restrict.dx;
                                dy += restrict.dy;
                            }
                        }

                        inertiaStatus.modifiedXe += dx;
                        inertiaStatus.modifiedYe += dy;

                        inertiaStatus.i = reqFrame(this.boundInertiaFrame);
                    }
                    else {
                        inertiaStatus.smoothEnd = true;
                        inertiaStatus.xe = dx;
                        inertiaStatus.ye = dy;

                        inertiaStatus.sx = inertiaStatus.sy = 0;

                        inertiaStatus.i = reqFrame(this.boundSmoothEndFrame);
                    }

                    inertiaStatus.active = true;
                    return;
                }

                if (endSnap || endRestrict) {
                    // fire a move event at the snapped coordinates
                    this.pointerMove(pointer, event, eventTarget, curEventTarget, true);
                }
            }

            if (this.dragging) {
                endEvent = new InteractEvent(this, event, 'drag', 'end', this.element);

                var draggableElement = this.element,
                    drop = this.getDrop(endEvent, event, draggableElement);

                this.dropTarget = drop.dropzone;
                this.dropElement = drop.element;

                var dropEvents = this.getDropEvents(event, endEvent);

                if (dropEvents.leave) { this.prevDropTarget.fire(dropEvents.leave); }
                if (dropEvents.enter) {     this.dropTarget.fire(dropEvents.enter); }
                if (dropEvents.drop ) {     this.dropTarget.fire(dropEvents.drop ); }
                if (dropEvents.deactivate) {
                    this.fireActiveDrops(dropEvents.deactivate);
                }

                target.fire(endEvent);
            }
            else if (this.resizing) {
                endEvent = new InteractEvent(this, event, 'resize', 'end', this.element);
                target.fire(endEvent);
            }
            else if (this.gesturing) {
                endEvent = new InteractEvent(this, event, 'gesture', 'end', this.element);
                target.fire(endEvent);
            }

            this.stop(event);
        },

        collectDrops: function (element) {
            var drops = [],
                elements = [],
                i;

            element = element || this.element;

            // collect all dropzones and their elements which qualify for a drop
            for (i = 0; i < interactables.length; i++) {
                if (!interactables[i].options.drop.enabled) { continue; }

                var current = interactables[i],
                    accept = current.options.drop.accept;

                // test the draggable element against the dropzone's accept setting
                if ((isElement(accept) && accept !== element)
                    || (isString(accept)
                        && !matchesSelector(element, accept))) {

                    continue;
                }

                // query for new elements if necessary
                var dropElements = current.selector? current._context.querySelectorAll(current.selector) : [current._element];

                for (var j = 0, len = dropElements.length; j < len; j++) {
                    var currentElement = dropElements[j];

                    if (currentElement === element) {
                        continue;
                    }

                    drops.push(current);
                    elements.push(currentElement);
                }
            }

            return {
                dropzones: drops,
                elements: elements
            };
        },

        fireActiveDrops: function (event) {
            var i,
                current,
                currentElement,
                prevElement;

            // loop through all active dropzones and trigger event
            for (i = 0; i < this.activeDrops.dropzones.length; i++) {
                current = this.activeDrops.dropzones[i];
                currentElement = this.activeDrops.elements [i];

                // prevent trigger of duplicate events on same element
                if (currentElement !== prevElement) {
                    // set current element as event target
                    event.target = currentElement;
                    current.fire(event);
                }
                prevElement = currentElement;
            }
        },

        // Collect a new set of possible drops and save them in activeDrops.
        // setActiveDrops should always be called when a drag has just started or a
        // drag event happens while dynamicDrop is true
        setActiveDrops: function (dragElement) {
            // get dropzones and their elements that could receive the draggable
            var possibleDrops = this.collectDrops(dragElement, true);

            this.activeDrops.dropzones = possibleDrops.dropzones;
            this.activeDrops.elements  = possibleDrops.elements;
            this.activeDrops.rects     = [];

            for (var i = 0; i < this.activeDrops.dropzones.length; i++) {
                this.activeDrops.rects[i] = this.activeDrops.dropzones[i].getRect(this.activeDrops.elements[i]);
            }
        },

        getDrop: function (dragEvent, event, dragElement) {
            var validDrops = [];

            if (dynamicDrop) {
                this.setActiveDrops(dragElement);
            }

            // collect all dropzones and their elements which qualify for a drop
            for (var j = 0; j < this.activeDrops.dropzones.length; j++) {
                var current        = this.activeDrops.dropzones[j],
                    currentElement = this.activeDrops.elements [j],
                    rect           = this.activeDrops.rects    [j];

                validDrops.push(current.dropCheck(dragEvent, event, this.target, dragElement, currentElement, rect)
                                ? currentElement
                                : null);
            }

            // get the most appropriate dropzone based on DOM depth and order
            var dropIndex = indexOfDeepestElement(validDrops),
                dropzone  = this.activeDrops.dropzones[dropIndex] || null,
                element   = this.activeDrops.elements [dropIndex] || null;

            return {
                dropzone: dropzone,
                element: element
            };
        },

        getDropEvents: function (pointerEvent, dragEvent) {
            var dropEvents = {
                enter     : null,
                leave     : null,
                activate  : null,
                deactivate: null,
                move      : null,
                drop      : null
            };

            if (this.dropElement !== this.prevDropElement) {
                // if there was a prevDropTarget, create a dragleave event
                if (this.prevDropTarget) {
                    dropEvents.leave = {
                        target       : this.prevDropElement,
                        dropzone     : this.prevDropTarget,
                        relatedTarget: dragEvent.target,
                        draggable    : dragEvent.interactable,
                        dragEvent    : dragEvent,
                        interaction  : this,
                        timeStamp    : dragEvent.timeStamp,
                        type         : 'dragleave'
                    };

                    dragEvent.dragLeave = this.prevDropElement;
                    dragEvent.prevDropzone = this.prevDropTarget;
                }
                // if the dropTarget is not null, create a dragenter event
                if (this.dropTarget) {
                    dropEvents.enter = {
                        target       : this.dropElement,
                        dropzone     : this.dropTarget,
                        relatedTarget: dragEvent.target,
                        draggable    : dragEvent.interactable,
                        dragEvent    : dragEvent,
                        interaction  : this,
                        timeStamp    : dragEvent.timeStamp,
                        type         : 'dragenter'
                    };

                    dragEvent.dragEnter = this.dropElement;
                    dragEvent.dropzone = this.dropTarget;
                }
            }

            if (dragEvent.type === 'dragend' && this.dropTarget) {
                dropEvents.drop = {
                    target       : this.dropElement,
                    dropzone     : this.dropTarget,
                    relatedTarget: dragEvent.target,
                    draggable    : dragEvent.interactable,
                    dragEvent    : dragEvent,
                    interaction  : this,
                    timeStamp    : dragEvent.timeStamp,
                    type         : 'drop'
                };

                dragEvent.dropzone = this.dropTarget;
            }
            if (dragEvent.type === 'dragstart') {
                dropEvents.activate = {
                    target       : null,
                    dropzone     : null,
                    relatedTarget: dragEvent.target,
                    draggable    : dragEvent.interactable,
                    dragEvent    : dragEvent,
                    interaction  : this,
                    timeStamp    : dragEvent.timeStamp,
                    type         : 'dropactivate'
                };
            }
            if (dragEvent.type === 'dragend') {
                dropEvents.deactivate = {
                    target       : null,
                    dropzone     : null,
                    relatedTarget: dragEvent.target,
                    draggable    : dragEvent.interactable,
                    dragEvent    : dragEvent,
                    interaction  : this,
                    timeStamp    : dragEvent.timeStamp,
                    type         : 'dropdeactivate'
                };
            }
            if (dragEvent.type === 'dragmove' && this.dropTarget) {
                dropEvents.move = {
                    target       : this.dropElement,
                    dropzone     : this.dropTarget,
                    relatedTarget: dragEvent.target,
                    draggable    : dragEvent.interactable,
                    dragEvent    : dragEvent,
                    interaction  : this,
                    dragmove     : dragEvent,
                    timeStamp    : dragEvent.timeStamp,
                    type         : 'dropmove'
                };
                dragEvent.dropzone = this.dropTarget;
            }

            return dropEvents;
        },

        currentAction: function () {
            return (this.dragging && 'drag') || (this.resizing && 'resize') || (this.gesturing && 'gesture') || null;
        },

        interacting: function () {
            return this.dragging || this.resizing || this.gesturing;
        },

        clearTargets: function () {
            this.target = this.element = null;

            this.dropTarget = this.dropElement = this.prevDropTarget = this.prevDropElement = null;
        },

        stop: function (event) {
            if (this.interacting()) {
                autoScroll.stop();
                this.matches = [];
                this.matchElements = [];

                var target = this.target;

                if (target.options.styleCursor) {
                    target._doc.documentElement.style.cursor = '';
                }

                // prevent Default only if were previously interacting
                if (event && isFunction(event.preventDefault)) {
                    this.checkAndPreventDefault(event, target, this.element);
                }

                if (this.dragging) {
                    this.activeDrops.dropzones = this.activeDrops.elements = this.activeDrops.rects = null;
                }
            }

            this.clearTargets();

            this.pointerIsDown = this.snapStatus.locked = this.dragging = this.resizing = this.gesturing = false;
            this.prepared.name = this.prevEvent = null;
            this.inertiaStatus.resumeDx = this.inertiaStatus.resumeDy = 0;

            // remove pointers if their ID isn't in this.pointerIds
            for (var i = 0; i < this.pointers.length; i++) {
                if (indexOf(this.pointerIds, getPointerId(this.pointers[i])) === -1) {
                    this.pointers.splice(i, 1);
                }
            }
        },

        inertiaFrame: function () {
            var inertiaStatus = this.inertiaStatus,
                options = this.target.options[this.prepared.name].inertia,
                lambda = options.resistance,
                t = new Date().getTime() / 1000 - inertiaStatus.t0;

            if (t < inertiaStatus.te) {

                var progress =  1 - (Math.exp(-lambda * t) - inertiaStatus.lambda_v0) / inertiaStatus.one_ve_v0;

                if (inertiaStatus.modifiedXe === inertiaStatus.xe && inertiaStatus.modifiedYe === inertiaStatus.ye) {
                    inertiaStatus.sx = inertiaStatus.xe * progress;
                    inertiaStatus.sy = inertiaStatus.ye * progress;
                }
                else {
                    var quadPoint = getQuadraticCurvePoint(
                            0, 0,
                            inertiaStatus.xe, inertiaStatus.ye,
                            inertiaStatus.modifiedXe, inertiaStatus.modifiedYe,
                            progress);

                    inertiaStatus.sx = quadPoint.x;
                    inertiaStatus.sy = quadPoint.y;
                }

                this.pointerMove(inertiaStatus.startEvent, inertiaStatus.startEvent);

                inertiaStatus.i = reqFrame(this.boundInertiaFrame);
            }
            else {
                inertiaStatus.ending = true;

                inertiaStatus.sx = inertiaStatus.modifiedXe;
                inertiaStatus.sy = inertiaStatus.modifiedYe;

                this.pointerMove(inertiaStatus.startEvent, inertiaStatus.startEvent);
                this.pointerEnd(inertiaStatus.startEvent, inertiaStatus.startEvent);

                inertiaStatus.active = inertiaStatus.ending = false;
            }
        },

        smoothEndFrame: function () {
            var inertiaStatus = this.inertiaStatus,
                t = new Date().getTime() - inertiaStatus.t0,
                duration = this.target.options[this.prepared.name].inertia.smoothEndDuration;

            if (t < duration) {
                inertiaStatus.sx = easeOutQuad(t, 0, inertiaStatus.xe, duration);
                inertiaStatus.sy = easeOutQuad(t, 0, inertiaStatus.ye, duration);

                this.pointerMove(inertiaStatus.startEvent, inertiaStatus.startEvent);

                inertiaStatus.i = reqFrame(this.boundSmoothEndFrame);
            }
            else {
                inertiaStatus.ending = true;

                inertiaStatus.sx = inertiaStatus.xe;
                inertiaStatus.sy = inertiaStatus.ye;

                this.pointerMove(inertiaStatus.startEvent, inertiaStatus.startEvent);
                this.pointerEnd(inertiaStatus.startEvent, inertiaStatus.startEvent);

                inertiaStatus.smoothEnd =
                  inertiaStatus.active = inertiaStatus.ending = false;
            }
        },

        addPointer: function (pointer) {
            var id = getPointerId(pointer),
                index = this.mouse? 0 : indexOf(this.pointerIds, id);

            if (index === -1) {
                index = this.pointerIds.length;
            }

            this.pointerIds[index] = id;
            this.pointers[index] = pointer;

            return index;
        },

        removePointer: function (pointer) {
            var id = getPointerId(pointer),
                index = this.mouse? 0 : indexOf(this.pointerIds, id);

            if (index === -1) { return; }

            this.pointers   .splice(index, 1);
            this.pointerIds .splice(index, 1);
            this.downTargets.splice(index, 1);
            this.downTimes  .splice(index, 1);
            this.holdTimers .splice(index, 1);
        },

        recordPointer: function (pointer) {
            var index = this.mouse? 0: indexOf(this.pointerIds, getPointerId(pointer));

            if (index === -1) { return; }

            this.pointers[index] = pointer;
        },

        collectEventTargets: function (pointer, event, eventTarget, eventType) {
            var pointerIndex = this.mouse? 0 : indexOf(this.pointerIds, getPointerId(pointer));

            // do not fire a tap event if the pointer was moved before being lifted
            if (eventType === 'tap' && (this.pointerWasMoved
                // or if the pointerup target is different to the pointerdown target
                || !(this.downTargets[pointerIndex] && this.downTargets[pointerIndex] === eventTarget))) {
                return;
            }

            var targets = [],
                elements = [],
                element = eventTarget;

            function collectSelectors (interactable, selector, context) {
                var els = ie8MatchesSelector
                        ? context.querySelectorAll(selector)
                        : undefined;

                if (interactable._iEvents[eventType]
                    && isElement(element)
                    && inContext(interactable, element)
                    && !testIgnore(interactable, element, eventTarget)
                    && testAllow(interactable, element, eventTarget)
                    && matchesSelector(element, selector, els)) {

                    targets.push(interactable);
                    elements.push(element);
                }
            }

            while (element) {
                if (interact.isSet(element) && interact(element)._iEvents[eventType]) {
                    targets.push(interact(element));
                    elements.push(element);
                }

                interactables.forEachSelector(collectSelectors);

                element = parentElement(element);
            }

            // create the tap event even if there are no listeners so that
            // doubletap can still be created and fired
            if (targets.length || eventType === 'tap') {
                this.firePointers(pointer, event, eventTarget, targets, elements, eventType);
            }
        },

        firePointers: function (pointer, event, eventTarget, targets, elements, eventType) {
            var pointerIndex = this.mouse? 0 : indexOf(this.pointerIds, getPointerId(pointer)),
                pointerEvent = {},
                i,
                // for tap events
                interval, createNewDoubleTap;

            // if it's a doubletap then the event properties would have been
            // copied from the tap event and provided as the pointer argument
            if (eventType === 'doubletap') {
                pointerEvent = pointer;
            }
            else {
                pointerExtend(pointerEvent, event);
                if (event !== pointer) {
                    pointerExtend(pointerEvent, pointer);
                }

                pointerEvent.preventDefault           = preventOriginalDefault;
                pointerEvent.stopPropagation          = InteractEvent.prototype.stopPropagation;
                pointerEvent.stopImmediatePropagation = InteractEvent.prototype.stopImmediatePropagation;
                pointerEvent.interaction              = this;

                pointerEvent.timeStamp       = new Date().getTime();
                pointerEvent.originalEvent   = event;
                pointerEvent.originalPointer = pointer;
                pointerEvent.type            = eventType;
                pointerEvent.pointerId       = getPointerId(pointer);
                pointerEvent.pointerType     = this.mouse? 'mouse' : !supportsPointerEvent? 'touch'
                                                    : isString(pointer.pointerType)
                                                        ? pointer.pointerType
                                                        : [,,'touch', 'pen', 'mouse'][pointer.pointerType];
            }

            if (eventType === 'tap') {
                pointerEvent.dt = pointerEvent.timeStamp - this.downTimes[pointerIndex];

                interval = pointerEvent.timeStamp - this.tapTime;
                createNewDoubleTap = !!(this.prevTap && this.prevTap.type !== 'doubletap'
                       && this.prevTap.target === pointerEvent.target
                       && interval < 500);

                pointerEvent.double = createNewDoubleTap;

                this.tapTime = pointerEvent.timeStamp;
            }

            for (i = 0; i < targets.length; i++) {
                pointerEvent.currentTarget = elements[i];
                pointerEvent.interactable = targets[i];
                targets[i].fire(pointerEvent);

                if (pointerEvent.immediatePropagationStopped
                    ||(pointerEvent.propagationStopped && elements[i + 1] !== pointerEvent.currentTarget)) {
                    break;
                }
            }

            if (createNewDoubleTap) {
                var doubleTap = {};

                extend(doubleTap, pointerEvent);

                doubleTap.dt   = interval;
                doubleTap.type = 'doubletap';

                this.collectEventTargets(doubleTap, event, eventTarget, 'doubletap');

                this.prevTap = doubleTap;
            }
            else if (eventType === 'tap') {
                this.prevTap = pointerEvent;
            }
        },

        validateSelector: function (pointer, event, matches, matchElements) {
            for (var i = 0, len = matches.length; i < len; i++) {
                var match = matches[i],
                    matchElement = matchElements[i],
                    action = validateAction(match.getAction(pointer, event, this, matchElement), match);

                if (action && withinInteractionLimit(match, matchElement, action)) {
                    this.target = match;
                    this.element = matchElement;

                    return action;
                }
            }
        },

        setSnapping: function (pageCoords, status) {
            var snap = this.target.options[this.prepared.name].snap,
                targets = [],
                target,
                page,
                i;

            status = status || this.snapStatus;

            if (status.useStatusXY) {
                page = { x: status.x, y: status.y };
            }
            else {
                var origin = getOriginXY(this.target, this.element);

                page = extend({}, pageCoords);

                page.x -= origin.x;
                page.y -= origin.y;
            }

            status.realX = page.x;
            status.realY = page.y;

            page.x = page.x - this.inertiaStatus.resumeDx;
            page.y = page.y - this.inertiaStatus.resumeDy;

            var len = snap.targets? snap.targets.length : 0;

            for (var relIndex = 0; relIndex < this.snapOffsets.length; relIndex++) {
                var relative = {
                    x: page.x - this.snapOffsets[relIndex].x,
                    y: page.y - this.snapOffsets[relIndex].y
                };

                for (i = 0; i < len; i++) {
                    if (isFunction(snap.targets[i])) {
                        target = snap.targets[i](relative.x, relative.y, this);
                    }
                    else {
                        target = snap.targets[i];
                    }

                    if (!target) { continue; }

                    targets.push({
                        x: isNumber(target.x) ? (target.x + this.snapOffsets[relIndex].x) : relative.x,
                        y: isNumber(target.y) ? (target.y + this.snapOffsets[relIndex].y) : relative.y,

                        range: isNumber(target.range)? target.range: snap.range
                    });
                }
            }

            var closest = {
                    target: null,
                    inRange: false,
                    distance: 0,
                    range: 0,
                    dx: 0,
                    dy: 0
                };

            for (i = 0, len = targets.length; i < len; i++) {
                target = targets[i];

                var range = target.range,
                    dx = target.x - page.x,
                    dy = target.y - page.y,
                    distance = hypot(dx, dy),
                    inRange = distance <= range;

                // Infinite targets count as being out of range
                // compared to non infinite ones that are in range
                if (range === Infinity && closest.inRange && closest.range !== Infinity) {
                    inRange = false;
                }

                if (!closest.target || (inRange
                    // is the closest target in range?
                    ? (closest.inRange && range !== Infinity
                        // the pointer is relatively deeper in this target
                        ? distance / range < closest.distance / closest.range
                        // this target has Infinite range and the closest doesn't
                        : (range === Infinity && closest.range !== Infinity)
                            // OR this target is closer that the previous closest
                            || distance < closest.distance)
                    // The other is not in range and the pointer is closer to this target
                    : (!closest.inRange && distance < closest.distance))) {

                    if (range === Infinity) {
                        inRange = true;
                    }

                    closest.target = target;
                    closest.distance = distance;
                    closest.range = range;
                    closest.inRange = inRange;
                    closest.dx = dx;
                    closest.dy = dy;

                    status.range = range;
                }
            }

            var snapChanged;

            if (closest.target) {
                snapChanged = (status.snappedX !== closest.target.x || status.snappedY !== closest.target.y);

                status.snappedX = closest.target.x;
                status.snappedY = closest.target.y;
            }
            else {
                snapChanged = true;

                status.snappedX = NaN;
                status.snappedY = NaN;
            }

            status.dx = closest.dx;
            status.dy = closest.dy;

            status.changed = (snapChanged || (closest.inRange && !status.locked));
            status.locked = closest.inRange;

            return status;
        },

        setRestriction: function (pageCoords, status) {
            var target = this.target,
                restrict = target && target.options[this.prepared.name].restrict,
                restriction = restrict && restrict.restriction,
                page;

            if (!restriction) {
                return status;
            }

            status = status || this.restrictStatus;

            page = status.useStatusXY
                    ? page = { x: status.x, y: status.y }
                    : page = extend({}, pageCoords);

            if (status.snap && status.snap.locked) {
                page.x += status.snap.dx || 0;
                page.y += status.snap.dy || 0;
            }

            page.x -= this.inertiaStatus.resumeDx;
            page.y -= this.inertiaStatus.resumeDy;

            status.dx = 0;
            status.dy = 0;
            status.restricted = false;

            var rect, restrictedX, restrictedY;

            if (isString(restriction)) {
                if (restriction === 'parent') {
                    restriction = parentElement(this.element);
                }
                else if (restriction === 'self') {
                    restriction = target.getRect(this.element);
                }
                else {
                    restriction = closest(this.element, restriction);
                }

                if (!restriction) { return status; }
            }

            if (isFunction(restriction)) {
                restriction = restriction(page.x, page.y, this.element);
            }

            if (isElement(restriction)) {
                restriction = getElementRect(restriction);
            }

            rect = restriction;

            if (!restriction) {
                restrictedX = page.x;
                restrictedY = page.y;
            }
            // object is assumed to have
            // x, y, width, height or
            // left, top, right, bottom
            else if ('x' in restriction && 'y' in restriction) {
                restrictedX = Math.max(Math.min(rect.x + rect.width  - this.restrictOffset.right , page.x), rect.x + this.restrictOffset.left);
                restrictedY = Math.max(Math.min(rect.y + rect.height - this.restrictOffset.bottom, page.y), rect.y + this.restrictOffset.top );
            }
            else {
                restrictedX = Math.max(Math.min(rect.right  - this.restrictOffset.right , page.x), rect.left + this.restrictOffset.left);
                restrictedY = Math.max(Math.min(rect.bottom - this.restrictOffset.bottom, page.y), rect.top  + this.restrictOffset.top );
            }

            status.dx = restrictedX - page.x;
            status.dy = restrictedY - page.y;

            status.changed = status.restrictedX !== restrictedX || status.restrictedY !== restrictedY;
            status.restricted = !!(status.dx || status.dy);

            status.restrictedX = restrictedX;
            status.restrictedY = restrictedY;

            return status;
        },

        checkAndPreventDefault: function (event, interactable, element) {
            if (!(interactable = interactable || this.target)) { return; }

            var options = interactable.options,
                prevent = options.preventDefault;

            if (prevent === 'auto' && element && !/^(input|select|textarea)$/i.test(event.target.nodeName)) {
                // do not preventDefault on pointerdown if the prepared action is a drag
                // and dragging can only start from a certain direction - this allows
                // a touch to pan the viewport if a drag isn't in the right direction
                if (/down|start/i.test(event.type)
                    && this.prepared.name === 'drag' && options.drag.axis !== 'xy') {

                    return;
                }

                // with manualStart, only preventDefault while interacting
                if (options[this.prepared.name] && options[this.prepared.name].manualStart
                    && !this.interacting()) {
                    return;
                }

                event.preventDefault();
                return;
            }

            if (prevent === 'always') {
                event.preventDefault();
                return;
            }
        },

        calcInertia: function (status) {
            var inertiaOptions = this.target.options[this.prepared.name].inertia,
                lambda = inertiaOptions.resistance,
                inertiaDur = -Math.log(inertiaOptions.endSpeed / status.v0) / lambda;

            status.x0 = this.prevEvent.pageX;
            status.y0 = this.prevEvent.pageY;
            status.t0 = status.startEvent.timeStamp / 1000;
            status.sx = status.sy = 0;

            status.modifiedXe = status.xe = (status.vx0 - inertiaDur) / lambda;
            status.modifiedYe = status.ye = (status.vy0 - inertiaDur) / lambda;
            status.te = inertiaDur;

            status.lambda_v0 = lambda / status.v0;
            status.one_ve_v0 = 1 - inertiaOptions.endSpeed / status.v0;
        },

        autoScrollMove: function (pointer) {
            if (!(this.interacting()
                && checkAutoScroll(this.target, this.prepared.name))) {
                return;
            }

            if (this.inertiaStatus.active) {
                autoScroll.x = autoScroll.y = 0;
                return;
            }

            var top,
                right,
                bottom,
                left,
                options = this.target.options[this.prepared.name].autoScroll,
                container = options.container || getWindow(this.element);

            if (isWindow(container)) {
                left   = pointer.clientX < autoScroll.margin;
                top    = pointer.clientY < autoScroll.margin;
                right  = pointer.clientX > container.innerWidth  - autoScroll.margin;
                bottom = pointer.clientY > container.innerHeight - autoScroll.margin;
            }
            else {
                var rect = getElementClientRect(container);

                left   = pointer.clientX < rect.left   + autoScroll.margin;
                top    = pointer.clientY < rect.top    + autoScroll.margin;
                right  = pointer.clientX > rect.right  - autoScroll.margin;
                bottom = pointer.clientY > rect.bottom - autoScroll.margin;
            }

            autoScroll.x = (right ? 1: left? -1: 0);
            autoScroll.y = (bottom? 1:  top? -1: 0);

            if (!autoScroll.isScrolling) {
                // set the autoScroll properties to those of the target
                autoScroll.margin = options.margin;
                autoScroll.speed  = options.speed;

                autoScroll.start(this);
            }
        },

        _updateEventTargets: function (target, currentTarget) {
            this._eventTarget    = target;
            this._curEventTarget = currentTarget;
        }

    };

    function getInteractionFromPointer (pointer, eventType, eventTarget) {
        var i = 0, len = interactions.length,
            mouseEvent = (/mouse/i.test(pointer.pointerType || eventType)
                          // MSPointerEvent.MSPOINTER_TYPE_MOUSE
                          || pointer.pointerType === 4),
            interaction;

        var id = getPointerId(pointer);

        // try to resume inertia with a new pointer
        if (/down|start/i.test(eventType)) {
            for (i = 0; i < len; i++) {
                interaction = interactions[i];

                var element = eventTarget;

                if (interaction.inertiaStatus.active && interaction.target.options[interaction.prepared.name].inertia.allowResume
                    && (interaction.mouse === mouseEvent)) {
                    while (element) {
                        // if the element is the interaction element
                        if (element === interaction.element) {
                            return interaction;
                        }
                        element = parentElement(element);
                    }
                }
            }
        }

        // if it's a mouse interaction
        if (mouseEvent || !(supportsTouch || supportsPointerEvent)) {

            // find a mouse interaction that's not in inertia phase
            for (i = 0; i < len; i++) {
                if (interactions[i].mouse && !interactions[i].inertiaStatus.active) {
                    return interactions[i];
                }
            }

            // find any interaction specifically for mouse.
            // if the eventType is a mousedown, and inertia is active
            // ignore the interaction
            for (i = 0; i < len; i++) {
                if (interactions[i].mouse && !(/down/.test(eventType) && interactions[i].inertiaStatus.active)) {
                    return interaction;
                }
            }

            // create a new interaction for mouse
            interaction = new Interaction();
            interaction.mouse = true;

            return interaction;
        }

        // get interaction that has this pointer
        for (i = 0; i < len; i++) {
            if (contains(interactions[i].pointerIds, id)) {
                return interactions[i];
            }
        }

        // at this stage, a pointerUp should not return an interaction
        if (/up|end|out/i.test(eventType)) {
            return null;
        }

        // get first idle interaction
        for (i = 0; i < len; i++) {
            interaction = interactions[i];

            if ((!interaction.prepared.name || (interaction.target.options.gesture.enabled))
                && !interaction.interacting()
                && !(!mouseEvent && interaction.mouse)) {

                return interaction;
            }
        }

        return new Interaction();
    }

    function doOnInteractions (method) {
        return (function (event) {
            var interaction,
                eventTarget = getActualElement(event.path
                                               ? event.path[0]
                                               : event.target),
                curEventTarget = getActualElement(event.currentTarget),
                i;

            if (supportsTouch && /touch/.test(event.type)) {
                prevTouchTime = new Date().getTime();

                for (i = 0; i < event.changedTouches.length; i++) {
                    var pointer = event.changedTouches[i];

                    interaction = getInteractionFromPointer(pointer, event.type, eventTarget);

                    if (!interaction) { continue; }

                    interaction._updateEventTargets(eventTarget, curEventTarget);

                    interaction[method](pointer, event, eventTarget, curEventTarget);
                }
            }
            else {
                if (!supportsPointerEvent && /mouse/.test(event.type)) {
                    // ignore mouse events while touch interactions are active
                    for (i = 0; i < interactions.length; i++) {
                        if (!interactions[i].mouse && interactions[i].pointerIsDown) {
                            return;
                        }
                    }

                    // try to ignore mouse events that are simulated by the browser
                    // after a touch event
                    if (new Date().getTime() - prevTouchTime < 500) {
                        return;
                    }
                }

                interaction = getInteractionFromPointer(event, event.type, eventTarget);

                if (!interaction) { return; }

                interaction._updateEventTargets(eventTarget, curEventTarget);

                interaction[method](event, event, eventTarget, curEventTarget);
            }
        });
    }

    function InteractEvent (interaction, event, action, phase, element, related) {
        var client,
            page,
            target      = interaction.target,
            snapStatus  = interaction.snapStatus,
            restrictStatus  = interaction.restrictStatus,
            pointers    = interaction.pointers,
            deltaSource = (target && target.options || defaultOptions).deltaSource,
            sourceX     = deltaSource + 'X',
            sourceY     = deltaSource + 'Y',
            options     = target? target.options: defaultOptions,
            origin      = getOriginXY(target, element),
            starting    = phase === 'start',
            ending      = phase === 'end',
            coords      = starting? interaction.startCoords : interaction.curCoords;

        element = element || interaction.element;

        page   = extend({}, coords.page);
        client = extend({}, coords.client);

        page.x -= origin.x;
        page.y -= origin.y;

        client.x -= origin.x;
        client.y -= origin.y;

        var relativePoints = options[action].snap && options[action].snap.relativePoints ;

        if (checkSnap(target, action) && !(starting && relativePoints && relativePoints.length)) {
            this.snap = {
                range  : snapStatus.range,
                locked : snapStatus.locked,
                x      : snapStatus.snappedX,
                y      : snapStatus.snappedY,
                realX  : snapStatus.realX,
                realY  : snapStatus.realY,
                dx     : snapStatus.dx,
                dy     : snapStatus.dy
            };

            if (snapStatus.locked) {
                page.x += snapStatus.dx;
                page.y += snapStatus.dy;
                client.x += snapStatus.dx;
                client.y += snapStatus.dy;
            }
        }

        if (checkRestrict(target, action) && !(starting && options[action].restrict.elementRect) && restrictStatus.restricted) {
            page.x += restrictStatus.dx;
            page.y += restrictStatus.dy;
            client.x += restrictStatus.dx;
            client.y += restrictStatus.dy;

            this.restrict = {
                dx: restrictStatus.dx,
                dy: restrictStatus.dy
            };
        }

        this.pageX     = page.x;
        this.pageY     = page.y;
        this.clientX   = client.x;
        this.clientY   = client.y;

        this.x0        = interaction.startCoords.page.x - origin.x;
        this.y0        = interaction.startCoords.page.y - origin.y;
        this.clientX0  = interaction.startCoords.client.x - origin.x;
        this.clientY0  = interaction.startCoords.client.y - origin.y;
        this.ctrlKey   = event.ctrlKey;
        this.altKey    = event.altKey;
        this.shiftKey  = event.shiftKey;
        this.metaKey   = event.metaKey;
        this.button    = event.button;
        this.buttons   = event.buttons;
        this.target    = element;
        this.t0        = interaction.downTimes[0];
        this.type      = action + (phase || '');

        this.interaction = interaction;
        this.interactable = target;

        var inertiaStatus = interaction.inertiaStatus;

        if (inertiaStatus.active) {
            this.detail = 'inertia';
        }

        if (related) {
            this.relatedTarget = related;
        }

        // end event dx, dy is difference between start and end points
        if (ending) {
            if (deltaSource === 'client') {
                this.dx = client.x - interaction.startCoords.client.x;
                this.dy = client.y - interaction.startCoords.client.y;
            }
            else {
                this.dx = page.x - interaction.startCoords.page.x;
                this.dy = page.y - interaction.startCoords.page.y;
            }
        }
        else if (starting) {
            this.dx = 0;
            this.dy = 0;
        }
        // copy properties from previousmove if starting inertia
        else if (phase === 'inertiastart') {
            this.dx = interaction.prevEvent.dx;
            this.dy = interaction.prevEvent.dy;
        }
        else {
            if (deltaSource === 'client') {
                this.dx = client.x - interaction.prevEvent.clientX;
                this.dy = client.y - interaction.prevEvent.clientY;
            }
            else {
                this.dx = page.x - interaction.prevEvent.pageX;
                this.dy = page.y - interaction.prevEvent.pageY;
            }
        }
        if (interaction.prevEvent && interaction.prevEvent.detail === 'inertia'
            && !inertiaStatus.active
            && options[action].inertia && options[action].inertia.zeroResumeDelta) {

            inertiaStatus.resumeDx += this.dx;
            inertiaStatus.resumeDy += this.dy;

            this.dx = this.dy = 0;
        }

        if (action === 'resize' && interaction.resizeAxes) {
            if (options.resize.square) {
                if (interaction.resizeAxes === 'y') {
                    this.dx = this.dy;
                }
                else {
                    this.dy = this.dx;
                }
                this.axes = 'xy';
            }
            else {
                this.axes = interaction.resizeAxes;

                if (interaction.resizeAxes === 'x') {
                    this.dy = 0;
                }
                else if (interaction.resizeAxes === 'y') {
                    this.dx = 0;
                }
            }
        }
        else if (action === 'gesture') {
            this.touches = [pointers[0], pointers[1]];

            if (starting) {
                this.distance = touchDistance(pointers, deltaSource);
                this.box      = touchBBox(pointers);
                this.scale    = 1;
                this.ds       = 0;
                this.angle    = touchAngle(pointers, undefined, deltaSource);
                this.da       = 0;
            }
            else if (ending || event instanceof InteractEvent) {
                this.distance = interaction.prevEvent.distance;
                this.box      = interaction.prevEvent.box;
                this.scale    = interaction.prevEvent.scale;
                this.ds       = this.scale - 1;
                this.angle    = interaction.prevEvent.angle;
                this.da       = this.angle - interaction.gesture.startAngle;
            }
            else {
                this.distance = touchDistance(pointers, deltaSource);
                this.box      = touchBBox(pointers);
                this.scale    = this.distance / interaction.gesture.startDistance;
                this.angle    = touchAngle(pointers, interaction.gesture.prevAngle, deltaSource);

                this.ds = this.scale - interaction.gesture.prevScale;
                this.da = this.angle - interaction.gesture.prevAngle;
            }
        }

        if (starting) {
            this.timeStamp = interaction.downTimes[0];
            this.dt        = 0;
            this.duration  = 0;
            this.speed     = 0;
            this.velocityX = 0;
            this.velocityY = 0;
        }
        else if (phase === 'inertiastart') {
            this.timeStamp = interaction.prevEvent.timeStamp;
            this.dt        = interaction.prevEvent.dt;
            this.duration  = interaction.prevEvent.duration;
            this.speed     = interaction.prevEvent.speed;
            this.velocityX = interaction.prevEvent.velocityX;
            this.velocityY = interaction.prevEvent.velocityY;
        }
        else {
            this.timeStamp = new Date().getTime();
            this.dt        = this.timeStamp - interaction.prevEvent.timeStamp;
            this.duration  = this.timeStamp - interaction.downTimes[0];

            if (event instanceof InteractEvent) {
                var dx = this[sourceX] - interaction.prevEvent[sourceX],
                    dy = this[sourceY] - interaction.prevEvent[sourceY],
                    dt = this.dt / 1000;

                this.speed = hypot(dx, dy) / dt;
                this.velocityX = dx / dt;
                this.velocityY = dy / dt;
            }
            // if normal move or end event, use previous user event coords
            else {
                // speed and velocity in pixels per second
                this.speed = interaction.pointerDelta[deltaSource].speed;
                this.velocityX = interaction.pointerDelta[deltaSource].vx;
                this.velocityY = interaction.pointerDelta[deltaSource].vy;
            }
        }

        if ((ending || phase === 'inertiastart')
            && interaction.prevEvent.speed > 600 && this.timeStamp - interaction.prevEvent.timeStamp < 150) {

            var angle = 180 * Math.atan2(interaction.prevEvent.velocityY, interaction.prevEvent.velocityX) / Math.PI,
                overlap = 22.5;

            if (angle < 0) {
                angle += 360;
            }

            var left = 135 - overlap <= angle && angle < 225 + overlap,
                up   = 225 - overlap <= angle && angle < 315 + overlap,

                right = !left && (315 - overlap <= angle || angle <  45 + overlap),
                down  = !up   &&   45 - overlap <= angle && angle < 135 + overlap;

            this.swipe = {
                up   : up,
                down : down,
                left : left,
                right: right,
                angle: angle,
                speed: interaction.prevEvent.speed,
                velocity: {
                    x: interaction.prevEvent.velocityX,
                    y: interaction.prevEvent.velocityY
                }
            };
        }
    }

    InteractEvent.prototype = {
        preventDefault: blank,
        stopImmediatePropagation: function () {
            this.immediatePropagationStopped = this.propagationStopped = true;
        },
        stopPropagation: function () {
            this.propagationStopped = true;
        }
    };

    function preventOriginalDefault () {
        this.originalEvent.preventDefault();
    }

    function getActionCursor (action) {
        var cursor = '';

        if (action.name === 'drag') {
            cursor =  actionCursors.drag;
        }
        if (action.name === 'resize') {
            if (action.axis) {
                cursor =  actionCursors[action.name + action.axis];
            }
            else if (action.edges) {
                var cursorKey = 'resize',
                    edgeNames = ['top', 'bottom', 'left', 'right'];

                for (var i = 0; i < 4; i++) {
                    if (action.edges[edgeNames[i]]) {
                        cursorKey += edgeNames[i];
                    }
                }

                cursor = actionCursors[cursorKey];
            }
        }

        return cursor;
    }

    function checkResizeEdge (name, value, page, element, interactableElement, rect, margin) {
        // false, '', undefined, null
        if (!value) { return false; }

        // true value, use pointer coords and element rect
        if (value === true) {
            // if dimensions are negative, "switch" edges
            var width = isNumber(rect.width)? rect.width : rect.right - rect.left,
                height = isNumber(rect.height)? rect.height : rect.bottom - rect.top;

            if (width < 0) {
                if      (name === 'left' ) { name = 'right'; }
                else if (name === 'right') { name = 'left' ; }
            }
            if (height < 0) {
                if      (name === 'top'   ) { name = 'bottom'; }
                else if (name === 'bottom') { name = 'top'   ; }
            }

            if (name === 'left'  ) { return page.x < ((width  >= 0? rect.left: rect.right ) + margin); }
            if (name === 'top'   ) { return page.y < ((height >= 0? rect.top : rect.bottom) + margin); }

            if (name === 'right' ) { return page.x > ((width  >= 0? rect.right : rect.left) - margin); }
            if (name === 'bottom') { return page.y > ((height >= 0? rect.bottom: rect.top ) - margin); }
        }

        // the remaining checks require an element
        if (!isElement(element)) { return false; }

        return isElement(value)
                    // the value is an element to use as a resize handle
                    ? value === element
                    // otherwise check if element matches value as selector
                    : matchesUpTo(element, value, interactableElement);
    }

    function defaultActionChecker (pointer, interaction, element) {
        var rect = this.getRect(element),
            shouldResize = false,
            action = null,
            resizeAxes = null,
            resizeEdges,
            page = extend({}, interaction.curCoords.page),
            options = this.options;

        if (!rect) { return null; }

        if (actionIsEnabled.resize && options.resize.enabled) {
            var resizeOptions = options.resize;

            resizeEdges = {
                left: false, right: false, top: false, bottom: false
            };

            // if using resize.edges
            if (isObject(resizeOptions.edges)) {
                for (var edge in resizeEdges) {
                    resizeEdges[edge] = checkResizeEdge(edge,
                                                        resizeOptions.edges[edge],
                                                        page,
                                                        interaction._eventTarget,
                                                        element,
                                                        rect,
                                                        resizeOptions.margin || margin);
                }

                resizeEdges.left = resizeEdges.left && !resizeEdges.right;
                resizeEdges.top  = resizeEdges.top  && !resizeEdges.bottom;

                shouldResize = resizeEdges.left || resizeEdges.right || resizeEdges.top || resizeEdges.bottom;
            }
            else {
                var right  = options.resize.axis !== 'y' && page.x > (rect.right  - margin),
                    bottom = options.resize.axis !== 'x' && page.y > (rect.bottom - margin);

                shouldResize = right || bottom;
                resizeAxes = (right? 'x' : '') + (bottom? 'y' : '');
            }
        }

        action = shouldResize
            ? 'resize'
            : actionIsEnabled.drag && options.drag.enabled
                ? 'drag'
                : null;

        if (actionIsEnabled.gesture
            && interaction.pointerIds.length >=2
            && !(interaction.dragging || interaction.resizing)) {
            action = 'gesture';
        }

        if (action) {
            return {
                name: action,
                axis: resizeAxes,
                edges: resizeEdges
            };
        }

        return null;
    }

    // Check if action is enabled globally and the current target supports it
    // If so, return the validated action. Otherwise, return null
    function validateAction (action, interactable) {
        if (!isObject(action)) { return null; }

        var actionName = action.name,
            options = interactable.options;

        if ((  (actionName  === 'resize'   && options.resize.enabled )
            || (actionName      === 'drag'     && options.drag.enabled  )
            || (actionName      === 'gesture'  && options.gesture.enabled))
            && actionIsEnabled[actionName]) {

            if (actionName === 'resize' || actionName === 'resizeyx') {
                actionName = 'resizexy';
            }

            return action;
        }
        return null;
    }

    var listeners = {},
        interactionListeners = [
            'dragStart', 'dragMove', 'resizeStart', 'resizeMove', 'gestureStart', 'gestureMove',
            'pointerOver', 'pointerOut', 'pointerHover', 'selectorDown',
            'pointerDown', 'pointerMove', 'pointerUp', 'pointerCancel', 'pointerEnd',
            'addPointer', 'removePointer', 'recordPointer', 'autoScrollMove'
        ];

    for (var i = 0, len = interactionListeners.length; i < len; i++) {
        var name = interactionListeners[i];

        listeners[name] = doOnInteractions(name);
    }

    // bound to the interactable context when a DOM event
    // listener is added to a selector interactable
    function delegateListener (event, useCapture) {
        var fakeEvent = {},
            delegated = delegatedEvents[event.type],
            eventTarget = getActualElement(event.path
                                           ? event.path[0]
                                           : event.target),
            element = eventTarget;

        useCapture = useCapture? true: false;

        // duplicate the event so that currentTarget can be changed
        for (var prop in event) {
            fakeEvent[prop] = event[prop];
        }

        fakeEvent.originalEvent = event;
        fakeEvent.preventDefault = preventOriginalDefault;

        // climb up document tree looking for selector matches
        while (isElement(element)) {
            for (var i = 0; i < delegated.selectors.length; i++) {
                var selector = delegated.selectors[i],
                    context = delegated.contexts[i];

                if (matchesSelector(element, selector)
                    && nodeContains(context, eventTarget)
                    && nodeContains(context, element)) {

                    var listeners = delegated.listeners[i];

                    fakeEvent.currentTarget = element;

                    for (var j = 0; j < listeners.length; j++) {
                        if (listeners[j][1] === useCapture) {
                            listeners[j][0](fakeEvent);
                        }
                    }
                }
            }

            element = parentElement(element);
        }
    }

    function delegateUseCapture (event) {
        return delegateListener.call(this, event, true);
    }

    interactables.indexOfElement = function indexOfElement (element, context) {
        context = context || document;

        for (var i = 0; i < this.length; i++) {
            var interactable = this[i];

            if ((interactable.selector === element
                && (interactable._context === context))
                || (!interactable.selector && interactable._element === element)) {

                return i;
            }
        }
        return -1;
    };

    interactables.get = function interactableGet (element, options) {
        return this[this.indexOfElement(element, options && options.context)];
    };

    interactables.forEachSelector = function (callback) {
        for (var i = 0; i < this.length; i++) {
            var interactable = this[i];

            if (!interactable.selector) {
                continue;
            }

            var ret = callback(interactable, interactable.selector, interactable._context, i, this);

            if (ret !== undefined) {
                return ret;
            }
        }
    };

    /*\
     * interact
     [ method ]
     *
     * The methods of this variable can be used to set elements as
     * interactables and also to change various default settings.
     *
     * Calling it as a function and passing an element or a valid CSS selector
     * string returns an Interactable object which has various methods to
     * configure it.
     *
     - element (Element | string) The HTML or SVG Element to interact with or CSS selector
     = (object) An @Interactable
     *
     > Usage
     | interact(document.getElementById('draggable')).draggable(true);
     |
     | var rectables = interact('rect');
     | rectables
     |     .gesturable(true)
     |     .on('gesturemove', function (event) {
     |         // something cool...
     |     })
     |     .autoScroll(true);
    \*/
    function interact (element, options) {
        return interactables.get(element, options) || new Interactable(element, options);
    }

    /*\
     * Interactable
     [ property ]
     **
     * Object type returned by @interact
    \*/
    function Interactable (element, options) {
        this._element = element;
        this._iEvents = this._iEvents || {};

        var _window;

        if (trySelector(element)) {
            this.selector = element;

            var context = options && options.context;

            _window = context? getWindow(context) : window;

            if (context && (_window.Node
                    ? context instanceof _window.Node
                    : (isElement(context) || context === _window.document))) {

                this._context = context;
            }
        }
        else {
            _window = getWindow(element);

            if (isElement(element, _window)) {

                if (supportsPointerEvent) {
                    events.add(this._element, pEventTypes.down, listeners.pointerDown );
                    events.add(this._element, pEventTypes.move, listeners.pointerHover);
                }
                else {
                    events.add(this._element, 'mousedown' , listeners.pointerDown );
                    events.add(this._element, 'mousemove' , listeners.pointerHover);
                    events.add(this._element, 'touchstart', listeners.pointerDown );
                    events.add(this._element, 'touchmove' , listeners.pointerHover);
                }
            }
        }

        this._doc = _window.document;

        if (!contains(documents, this._doc)) {
            listenToDocument(this._doc);
        }

        interactables.push(this);

        this.set(options);
    }

    Interactable.prototype = {
        setOnEvents: function (action, phases) {
            if (action === 'drop') {
                if (isFunction(phases.ondrop)          ) { this.ondrop           = phases.ondrop          ; }
                if (isFunction(phases.ondropactivate)  ) { this.ondropactivate   = phases.ondropactivate  ; }
                if (isFunction(phases.ondropdeactivate)) { this.ondropdeactivate = phases.ondropdeactivate; }
                if (isFunction(phases.ondragenter)     ) { this.ondragenter      = phases.ondragenter     ; }
                if (isFunction(phases.ondragleave)     ) { this.ondragleave      = phases.ondragleave     ; }
                if (isFunction(phases.ondropmove)      ) { this.ondropmove       = phases.ondropmove      ; }
            }
            else {
                action = 'on' + action;

                if (isFunction(phases.onstart)       ) { this[action + 'start'         ] = phases.onstart         ; }
                if (isFunction(phases.onmove)        ) { this[action + 'move'          ] = phases.onmove          ; }
                if (isFunction(phases.onend)         ) { this[action + 'end'           ] = phases.onend           ; }
                if (isFunction(phases.oninertiastart)) { this[action + 'inertiastart'  ] = phases.oninertiastart  ; }
            }

            return this;
        },

        /*\
         * Interactable.draggable
         [ method ]
         *
         * Gets or sets whether drag actions can be performed on the
         * Interactable
         *
         = (boolean) Indicates if this can be the target of drag events
         | var isDraggable = interact('ul li').draggable();
         * or
         - options (boolean | object) #optional true/false or An object with event listeners to be fired on drag events (object makes the Interactable draggable)
         = (object) This Interactable
         | interact(element).draggable({
         |     onstart: function (event) {},
         |     onmove : function (event) {},
         |     onend  : function (event) {},
         |
         |     // the axis in which the first movement must be
         |     // for the drag sequence to start
         |     // 'xy' by default - any direction
         |     axis: 'x' || 'y' || 'xy',
         |
         |     // max number of drags that can happen concurrently
         |     // with elements of this Interactable. Infinity by default
         |     max: Infinity,
         |
         |     // max number of drags that can target the same element+Interactable
         |     // 1 by default
         |     maxPerElement: 2
         | });
        \*/
        draggable: function (options) {
            if (isObject(options)) {
                this.options.drag.enabled = options.enabled === false? false: true;
                this.setPerAction('drag', options);
                this.setOnEvents('drag', options);

                if (/^x$|^y$|^xy$/.test(options.axis)) {
                    this.options.drag.axis = options.axis;
                }
                else if (options.axis === null) {
                    delete this.options.drag.axis;
                }

                return this;
            }

            if (isBool(options)) {
                this.options.drag.enabled = options;

                return this;
            }

            return this.options.drag;
        },

        setPerAction: function (action, options) {
            // for all the default per-action options
            for (var option in options) {
                // if this option exists for this action
                if (option in defaultOptions[action]) {
                    // if the option in the options arg is an object value
                    if (isObject(options[option])) {
                        // duplicate the object
                        this.options[action][option] = extend(this.options[action][option] || {}, options[option]);

                        if (isObject(defaultOptions.perAction[option]) && 'enabled' in defaultOptions.perAction[option]) {
                            this.options[action][option].enabled = options[option].enabled === false? false : true;
                        }
                    }
                    else if (isBool(options[option]) && isObject(defaultOptions.perAction[option])) {
                        this.options[action][option].enabled = options[option];
                    }
                    else if (options[option] !== undefined) {
                        // or if it's not undefined, do a plain assignment
                        this.options[action][option] = options[option];
                    }
                }
            }
        },

        /*\
         * Interactable.dropzone
         [ method ]
         *
         * Returns or sets whether elements can be dropped onto this
         * Interactable to trigger drop events
         *
         * Dropzones can receive the following events:
         *  - `dropactivate` and `dropdeactivate` when an acceptable drag starts and ends
         *  - `dragenter` and `dragleave` when a draggable enters and leaves the dropzone
         *  - `dragmove` when a draggable that has entered the dropzone is moved
         *  - `drop` when a draggable is dropped into this dropzone
         *
         *  Use the `accept` option to allow only elements that match the given CSS selector or element.
         *
         *  Use the `overlap` option to set how drops are checked for. The allowed values are:
         *   - `'pointer'`, the pointer must be over the dropzone (default)
         *   - `'center'`, the draggable element's center must be over the dropzone
         *   - a number from 0-1 which is the `(intersection area) / (draggable area)`.
         *       e.g. `0.5` for drop to happen when half of the area of the
         *       draggable is over the dropzone
         *
         - options (boolean | object | null) #optional The new value to be set.
         | interact('.drop').dropzone({
         |   accept: '.can-drop' || document.getElementById('single-drop'),
         |   overlap: 'pointer' || 'center' || zeroToOne
         | }
         = (boolean | object) The current setting or this Interactable
        \*/
        dropzone: function (options) {
            if (isObject(options)) {
                this.options.drop.enabled = options.enabled === false? false: true;
                this.setOnEvents('drop', options);

                if (/^(pointer|center)$/.test(options.overlap)) {
                    this.options.drop.overlap = options.overlap;
                }
                else if (isNumber(options.overlap)) {
                    this.options.drop.overlap = Math.max(Math.min(1, options.overlap), 0);
                }
                if ('accept' in options) {
                  this.options.drop.accept = options.accept;
                }
                if ('checker' in options) {
                  this.options.drop.checker = options.checker;
                }

                return this;
            }

            if (isBool(options)) {
                this.options.drop.enabled = options;

                return this;
            }

            return this.options.drop;
        },

        dropCheck: function (dragEvent, event, draggable, draggableElement, dropElement, rect) {
            var dropped = false;

            // if the dropzone has no rect (eg. display: none)
            // call the custom dropChecker or just return false
            if (!(rect = rect || this.getRect(dropElement))) {
                return (this.options.drop.checker
                    ? this.options.drop.checker(dragEvent, event, dropped, this, dropElement, draggable, draggableElement)
                    : false);
            }

            var dropOverlap = this.options.drop.overlap;

            if (dropOverlap === 'pointer') {
                var page = getPageXY(dragEvent),
                    origin = getOriginXY(draggable, draggableElement),
                    horizontal,
                    vertical;

                page.x += origin.x;
                page.y += origin.y;

                horizontal = (page.x > rect.left) && (page.x < rect.right);
                vertical   = (page.y > rect.top ) && (page.y < rect.bottom);

                dropped = horizontal && vertical;
            }

            var dragRect = draggable.getRect(draggableElement);

            if (dropOverlap === 'center') {
                var cx = dragRect.left + dragRect.width  / 2,
                    cy = dragRect.top  + dragRect.height / 2;

                dropped = cx >= rect.left && cx <= rect.right && cy >= rect.top && cy <= rect.bottom;
            }

            if (isNumber(dropOverlap)) {
                var overlapArea  = (Math.max(0, Math.min(rect.right , dragRect.right ) - Math.max(rect.left, dragRect.left))
                                  * Math.max(0, Math.min(rect.bottom, dragRect.bottom) - Math.max(rect.top , dragRect.top ))),
                    overlapRatio = overlapArea / (dragRect.width * dragRect.height);

                dropped = overlapRatio >= dropOverlap;
            }

            if (this.options.drop.checker) {
                dropped = this.options.drop.checker(dragEvent, event, dropped, this, dropElement, draggable, draggableElement);
            }

            return dropped;
        },

        /*\
         * Interactable.dropChecker
         [ method ]
         *
         * DEPRECATED. Use interactable.dropzone({ checker: function... }) instead.
         *
         * Gets or sets the function used to check if a dragged element is
         * over this Interactable.
         *
         - checker (function) #optional The function that will be called when checking for a drop
         = (Function | Interactable) The checker function or this Interactable
         *
         * The checker function takes the following arguments:
         *
         - dragEvent (InteractEvent) The related dragmove or dragend event
         - event (TouchEvent | PointerEvent | MouseEvent) The user move/up/end Event related to the dragEvent
         - dropped (boolean) The value from the default drop checker
         - dropzone (Interactable) The dropzone interactable
         - dropElement (Element) The dropzone element
         - draggable (Interactable) The Interactable being dragged
         - draggableElement (Element) The actual element that's being dragged
         *
         > Usage:
         | interact(target)
         | .dropChecker(function(dragEvent,         // related dragmove or dragend event
         |                       event,             // TouchEvent/PointerEvent/MouseEvent
         |                       dropped,           // bool result of the default checker
         |                       dropzone,          // dropzone Interactable
         |                       dropElement,       // dropzone elemnt
         |                       draggable,         // draggable Interactable
         |                       draggableElement) {// draggable element
         |
         |   return dropped && event.target.hasAttribute('allow-drop');
         | }
        \*/
        dropChecker: function (checker) {
            if (isFunction(checker)) {
                this.options.drop.checker = checker;

                return this;
            }
            if (checker === null) {
                delete this.options.getRect;

                return this;
            }

            return this.options.drop.checker;
        },

        /*\
         * Interactable.accept
         [ method ]
         *
         * Deprecated. add an `accept` property to the options object passed to
         * @Interactable.dropzone instead.
         *
         * Gets or sets the Element or CSS selector match that this
         * Interactable accepts if it is a dropzone.
         *
         - newValue (Element | string | null) #optional
         * If it is an Element, then only that element can be dropped into this dropzone.
         * If it is a string, the element being dragged must match it as a selector.
         * If it is null, the accept options is cleared - it accepts any element.
         *
         = (string | Element | null | Interactable) The current accept option if given `undefined` or this Interactable
        \*/
        accept: function (newValue) {
            if (isElement(newValue)) {
                this.options.drop.accept = newValue;

                return this;
            }

            // test if it is a valid CSS selector
            if (trySelector(newValue)) {
                this.options.drop.accept = newValue;

                return this;
            }

            if (newValue === null) {
                delete this.options.drop.accept;

                return this;
            }

            return this.options.drop.accept;
        },

        /*\
         * Interactable.resizable
         [ method ]
         *
         * Gets or sets whether resize actions can be performed on the
         * Interactable
         *
         = (boolean) Indicates if this can be the target of resize elements
         | var isResizeable = interact('input[type=text]').resizable();
         * or
         - options (boolean | object) #optional true/false or An object with event listeners to be fired on resize events (object makes the Interactable resizable)
         = (object) This Interactable
         | interact(element).resizable({
         |     onstart: function (event) {},
         |     onmove : function (event) {},
         |     onend  : function (event) {},
         |
         |     edges: {
         |       top   : true,       // Use pointer coords to check for resize.
         |       left  : false,      // Disable resizing from left edge.
         |       bottom: '.resize-s',// Resize if pointer target matches selector
         |       right : handleEl    // Resize if pointer target is the given Element
         |     },
         |
         |     // Width and height can be adjusted independently. When `true`, width and
         |     // height are adjusted at a 1:1 ratio.
         |     square: false,
         |
         |     // Width and height can be adjusted independently. When `true`, width and
         |     // height maintain the aspect ratio they had when resizing started.
         |     preserveAspectRatio: false,
         |
         |     // a value of 'none' will limit the resize rect to a minimum of 0x0
         |     // 'negate' will allow the rect to have negative width/height
         |     // 'reposition' will keep the width/height positive by swapping
         |     // the top and bottom edges and/or swapping the left and right edges
         |     invert: 'none' || 'negate' || 'reposition'
         |
         |     // limit multiple resizes.
         |     // See the explanation in the @Interactable.draggable example
         |     max: Infinity,
         |     maxPerElement: 1,
         | });
        \*/
        resizable: function (options) {
            if (isObject(options)) {
                this.options.resize.enabled = options.enabled === false? false: true;
                this.setPerAction('resize', options);
                this.setOnEvents('resize', options);

                if (/^x$|^y$|^xy$/.test(options.axis)) {
                    this.options.resize.axis = options.axis;
                }
                else if (options.axis === null) {
                    this.options.resize.axis = defaultOptions.resize.axis;
                }

                if (isBool(options.preserveAspectRatio)) {
                    this.options.resize.preserveAspectRatio = options.preserveAspectRatio;
                }
                else if (isBool(options.square)) {
                    this.options.resize.square = options.square;
                }

                return this;
            }
            if (isBool(options)) {
                this.options.resize.enabled = options;

                return this;
            }
            return this.options.resize;
        },

        /*\
         * Interactable.squareResize
         [ method ]
         *
         * Deprecated. Add a `square: true || false` property to @Interactable.resizable instead
         *
         * Gets or sets whether resizing is forced 1:1 aspect
         *
         = (boolean) Current setting
         *
         * or
         *
         - newValue (boolean) #optional
         = (object) this Interactable
        \*/
        squareResize: function (newValue) {
            if (isBool(newValue)) {
                this.options.resize.square = newValue;

                return this;
            }

            if (newValue === null) {
                delete this.options.resize.square;

                return this;
            }

            return this.options.resize.square;
        },

        /*\
         * Interactable.gesturable
         [ method ]
         *
         * Gets or sets whether multitouch gestures can be performed on the
         * Interactable's element
         *
         = (boolean) Indicates if this can be the target of gesture events
         | var isGestureable = interact(element).gesturable();
         * or
         - options (boolean | object) #optional true/false or An object with event listeners to be fired on gesture events (makes the Interactable gesturable)
         = (object) this Interactable
         | interact(element).gesturable({
         |     onstart: function (event) {},
         |     onmove : function (event) {},
         |     onend  : function (event) {},
         |
         |     // limit multiple gestures.
         |     // See the explanation in @Interactable.draggable example
         |     max: Infinity,
         |     maxPerElement: 1,
         | });
        \*/
        gesturable: function (options) {
            if (isObject(options)) {
                this.options.gesture.enabled = options.enabled === false? false: true;
                this.setPerAction('gesture', options);
                this.setOnEvents('gesture', options);

                return this;
            }

            if (isBool(options)) {
                this.options.gesture.enabled = options;

                return this;
            }

            return this.options.gesture;
        },

        /*\
         * Interactable.autoScroll
         [ method ]
         **
         * Deprecated. Add an `autoscroll` property to the options object
         * passed to @Interactable.draggable or @Interactable.resizable instead.
         *
         * Returns or sets whether dragging and resizing near the edges of the
         * window/container trigger autoScroll for this Interactable
         *
         = (object) Object with autoScroll properties
         *
         * or
         *
         - options (object | boolean) #optional
         * options can be:
         * - an object with margin, distance and interval properties,
         * - true or false to enable or disable autoScroll or
         = (Interactable) this Interactable
        \*/
        autoScroll: function (options) {
            if (isObject(options)) {
                options = extend({ actions: ['drag', 'resize']}, options);
            }
            else if (isBool(options)) {
                options = { actions: ['drag', 'resize'], enabled: options };
            }

            return this.setOptions('autoScroll', options);
        },

        /*\
         * Interactable.snap
         [ method ]
         **
         * Deprecated. Add a `snap` property to the options object passed
         * to @Interactable.draggable or @Interactable.resizable instead.
         *
         * Returns or sets if and how action coordinates are snapped. By
         * default, snapping is relative to the pointer coordinates. You can
         * change this by setting the
         * [`elementOrigin`](https://github.com/taye/interact.js/pull/72).
         **
         = (boolean | object) `false` if snap is disabled; object with snap properties if snap is enabled
         **
         * or
         **
         - options (object | boolean | null) #optional
         = (Interactable) this Interactable
         > Usage
         | interact(document.querySelector('#thing')).snap({
         |     targets: [
         |         // snap to this specific point
         |         {
         |             x: 100,
         |             y: 100,
         |             range: 25
         |         },
         |         // give this function the x and y page coords and snap to the object returned
         |         function (x, y) {
         |             return {
         |                 x: x,
         |                 y: (75 + 50 * Math.sin(x * 0.04)),
         |                 range: 40
         |             };
         |         },
         |         // create a function that snaps to a grid
         |         interact.createSnapGrid({
         |             x: 50,
         |             y: 50,
         |             range: 10,              // optional
         |             offset: { x: 5, y: 10 } // optional
         |         })
         |     ],
         |     // do not snap during normal movement.
         |     // Instead, trigger only one snapped move event
         |     // immediately before the end event.
         |     endOnly: true,
         |
         |     relativePoints: [
         |         { x: 0, y: 0 },  // snap relative to the top left of the element
         |         { x: 1, y: 1 },  // and also to the bottom right
         |     ],  
         |
         |     // offset the snap target coordinates
         |     // can be an object with x/y or 'startCoords'
         |     offset: { x: 50, y: 50 }
         |   }
         | });
        \*/
        snap: function (options) {
            var ret = this.setOptions('snap', options);

            if (ret === this) { return this; }

            return ret.drag;
        },

        setOptions: function (option, options) {
            var actions = options && isArray(options.actions)
                    ? options.actions
                    : ['drag'];

            var i;

            if (isObject(options) || isBool(options)) {
                for (i = 0; i < actions.length; i++) {
                    var action = /resize/.test(actions[i])? 'resize' : actions[i];

                    if (!isObject(this.options[action])) { continue; }

                    var thisOption = this.options[action][option];

                    if (isObject(options)) {
                        extend(thisOption, options);
                        thisOption.enabled = options.enabled === false? false: true;

                        if (option === 'snap') {
                            if (thisOption.mode === 'grid') {
                                thisOption.targets = [
                                    interact.createSnapGrid(extend({
                                        offset: thisOption.gridOffset || { x: 0, y: 0 }
                                    }, thisOption.grid || {}))
                                ];
                            }
                            else if (thisOption.mode === 'anchor') {
                                thisOption.targets = thisOption.anchors;
                            }
                            else if (thisOption.mode === 'path') {
                                thisOption.targets = thisOption.paths;
                            }

                            if ('elementOrigin' in options) {
                                thisOption.relativePoints = [options.elementOrigin];
                            }
                        }
                    }
                    else if (isBool(options)) {
                        thisOption.enabled = options;
                    }
                }

                return this;
            }

            var ret = {},
                allActions = ['drag', 'resize', 'gesture'];

            for (i = 0; i < allActions.length; i++) {
                if (option in defaultOptions[allActions[i]]) {
                    ret[allActions[i]] = this.options[allActions[i]][option];
                }
            }

            return ret;
        },


        /*\
         * Interactable.inertia
         [ method ]
         **
         * Deprecated. Add an `inertia` property to the options object passed
         * to @Interactable.draggable or @Interactable.resizable instead.
         *
         * Returns or sets if and how events continue to run after the pointer is released
         **
         = (boolean | object) `false` if inertia is disabled; `object` with inertia properties if inertia is enabled
         **
         * or
         **
         - options (object | boolean | null) #optional
         = (Interactable) this Interactable
         > Usage
         | // enable and use default settings
         | interact(element).inertia(true);
         |
         | // enable and use custom settings
         | interact(element).inertia({
         |     // value greater than 0
         |     // high values slow the object down more quickly
         |     resistance     : 16,
         |
         |     // the minimum launch speed (pixels per second) that results in inertia start
         |     minSpeed       : 200,
         |
         |     // inertia will stop when the object slows down to this speed
         |     endSpeed       : 20,
         |
         |     // boolean; should actions be resumed when the pointer goes down during inertia
         |     allowResume    : true,
         |
         |     // boolean; should the jump when resuming from inertia be ignored in event.dx/dy
         |     zeroResumeDelta: false,
         |
         |     // if snap/restrict are set to be endOnly and inertia is enabled, releasing
         |     // the pointer without triggering inertia will animate from the release
         |     // point to the snaped/restricted point in the given amount of time (ms)
         |     smoothEndDuration: 300,
         |
         |     // an array of action types that can have inertia (no gesture)
         |     actions        : ['drag', 'resize']
         | });
         |
         | // reset custom settings and use all defaults
         | interact(element).inertia(null);
        \*/
        inertia: function (options) {
            var ret = this.setOptions('inertia', options);

            if (ret === this) { return this; }

            return ret.drag;
        },

        getAction: function (pointer, event, interaction, element) {
            var action = this.defaultActionChecker(pointer, interaction, element);

            if (this.options.actionChecker) {
                return this.options.actionChecker(pointer, event, action, this, element, interaction);
            }

            return action;
        },

        defaultActionChecker: defaultActionChecker,

        /*\
         * Interactable.actionChecker
         [ method ]
         *
         * Gets or sets the function used to check action to be performed on
         * pointerDown
         *
         - checker (function | null) #optional A function which takes a pointer event, defaultAction string, interactable, element and interaction as parameters and returns an object with name property 'drag' 'resize' or 'gesture' and optionally an `edges` object with boolean 'top', 'left', 'bottom' and right props.
         = (Function | Interactable) The checker function or this Interactable
         *
         | interact('.resize-drag')
         |   .resizable(true)
         |   .draggable(true)
         |   .actionChecker(function (pointer, event, action, interactable, element, interaction) {
         |
         |   if (interact.matchesSelector(event.target, '.drag-handle') {
         |     // force drag with handle target
         |     action.name = drag;
         |   }
         |   else {
         |     // resize from the top and right edges
         |     action.name  = 'resize';
         |     action.edges = { top: true, right: true };
         |   }
         |
         |   return action;
         | });
        \*/
        actionChecker: function (checker) {
            if (isFunction(checker)) {
                this.options.actionChecker = checker;

                return this;
            }

            if (checker === null) {
                delete this.options.actionChecker;

                return this;
            }

            return this.options.actionChecker;
        },

        /*\
         * Interactable.getRect
         [ method ]
         *
         * The default function to get an Interactables bounding rect. Can be
         * overridden using @Interactable.rectChecker.
         *
         - element (Element) #optional The element to measure.
         = (object) The object's bounding rectangle.
         o {
         o     top   : 0,
         o     left  : 0,
         o     bottom: 0,
         o     right : 0,
         o     width : 0,
         o     height: 0
         o }
        \*/
        getRect: function rectCheck (element) {
            element = element || this._element;

            if (this.selector && !(isElement(element))) {
                element = this._context.querySelector(this.selector);
            }

            return getElementRect(element);
        },

        /*\
         * Interactable.rectChecker
         [ method ]
         *
         * Returns or sets the function used to calculate the interactable's
         * element's rectangle
         *
         - checker (function) #optional A function which returns this Interactable's bounding rectangle. See @Interactable.getRect
         = (function | object) The checker function or this Interactable
        \*/
        rectChecker: function (checker) {
            if (isFunction(checker)) {
                this.getRect = checker;

                return this;
            }

            if (checker === null) {
                delete this.options.getRect;

                return this;
            }

            return this.getRect;
        },

        /*\
         * Interactable.styleCursor
         [ method ]
         *
         * Returns or sets whether the action that would be performed when the
         * mouse on the element are checked on `mousemove` so that the cursor
         * may be styled appropriately
         *
         - newValue (boolean) #optional
         = (boolean | Interactable) The current setting or this Interactable
        \*/
        styleCursor: function (newValue) {
            if (isBool(newValue)) {
                this.options.styleCursor = newValue;

                return this;
            }

            if (newValue === null) {
                delete this.options.styleCursor;

                return this;
            }

            return this.options.styleCursor;
        },

        /*\
         * Interactable.preventDefault
         [ method ]
         *
         * Returns or sets whether to prevent the browser's default behaviour
         * in response to pointer events. Can be set to:
         *  - `'always'` to always prevent
         *  - `'never'` to never prevent
         *  - `'auto'` to let interact.js try to determine what would be best
         *
         - newValue (string) #optional `true`, `false` or `'auto'`
         = (string | Interactable) The current setting or this Interactable
        \*/
        preventDefault: function (newValue) {
            if (/^(always|never|auto)$/.test(newValue)) {
                this.options.preventDefault = newValue;
                return this;
            }

            if (isBool(newValue)) {
                this.options.preventDefault = newValue? 'always' : 'never';
                return this;
            }

            return this.options.preventDefault;
        },

        /*\
         * Interactable.origin
         [ method ]
         *
         * Gets or sets the origin of the Interactable's element.  The x and y
         * of the origin will be subtracted from action event coordinates.
         *
         - origin (object | string) #optional An object eg. { x: 0, y: 0 } or string 'parent', 'self' or any CSS selector
         * OR
         - origin (Element) #optional An HTML or SVG Element whose rect will be used
         **
         = (object) The current origin or this Interactable
        \*/
        origin: function (newValue) {
            if (trySelector(newValue)) {
                this.options.origin = newValue;
                return this;
            }
            else if (isObject(newValue)) {
                this.options.origin = newValue;
                return this;
            }

            return this.options.origin;
        },

        /*\
         * Interactable.deltaSource
         [ method ]
         *
         * Returns or sets the mouse coordinate types used to calculate the
         * movement of the pointer.
         *
         - newValue (string) #optional Use 'client' if you will be scrolling while interacting; Use 'page' if you want autoScroll to work
         = (string | object) The current deltaSource or this Interactable
        \*/
        deltaSource: function (newValue) {
            if (newValue === 'page' || newValue === 'client') {
                this.options.deltaSource = newValue;

                return this;
            }

            return this.options.deltaSource;
        },

        /*\
         * Interactable.restrict
         [ method ]
         **
         * Deprecated. Add a `restrict` property to the options object passed to
         * @Interactable.draggable, @Interactable.resizable or @Interactable.gesturable instead.
         *
         * Returns or sets the rectangles within which actions on this
         * interactable (after snap calculations) are restricted. By default,
         * restricting is relative to the pointer coordinates. You can change
         * this by setting the
         * [`elementRect`](https://github.com/taye/interact.js/pull/72).
         **
         - options (object) #optional an object with keys drag, resize, and/or gesture whose values are rects, Elements, CSS selectors, or 'parent' or 'self'
         = (object) The current restrictions object or this Interactable
         **
         | interact(element).restrict({
         |     // the rect will be `interact.getElementRect(element.parentNode)`
         |     drag: element.parentNode,
         |
         |     // x and y are relative to the the interactable's origin
         |     resize: { x: 100, y: 100, width: 200, height: 200 }
         | })
         |
         | interact('.draggable').restrict({
         |     // the rect will be the selected element's parent
         |     drag: 'parent',
         |
         |     // do not restrict during normal movement.
         |     // Instead, trigger only one restricted move event
         |     // immediately before the end event.
         |     endOnly: true,
         |
         |     // https://github.com/taye/interact.js/pull/72#issue-41813493
         |     elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
         | });
        \*/
        restrict: function (options) {
            if (!isObject(options)) {
                return this.setOptions('restrict', options);
            }

            var actions = ['drag', 'resize', 'gesture'],
                ret;

            for (var i = 0; i < actions.length; i++) {
                var action = actions[i];

                if (action in options) {
                    var perAction = extend({
                            actions: [action],
                            restriction: options[action]
                        }, options);

                    ret = this.setOptions('restrict', perAction);
                }
            }

            return ret;
        },

        /*\
         * Interactable.context
         [ method ]
         *
         * Gets the selector context Node of the Interactable. The default is `window.document`.
         *
         = (Node) The context Node of this Interactable
         **
        \*/
        context: function () {
            return this._context;
        },

        _context: document,

        /*\
         * Interactable.ignoreFrom
         [ method ]
         *
         * If the target of the `mousedown`, `pointerdown` or `touchstart`
         * event or any of it's parents match the given CSS selector or
         * Element, no drag/resize/gesture is started.
         *
         - newValue (string | Element | null) #optional a CSS selector string, an Element or `null` to not ignore any elements
         = (string | Element | object) The current ignoreFrom value or this Interactable
         **
         | interact(element, { ignoreFrom: document.getElementById('no-action') });
         | // or
         | interact(element).ignoreFrom('input, textarea, a');
        \*/
        ignoreFrom: function (newValue) {
            if (trySelector(newValue)) {            // CSS selector to match event.target
                this.options.ignoreFrom = newValue;
                return this;
            }

            if (isElement(newValue)) {              // specific element
                this.options.ignoreFrom = newValue;
                return this;
            }

            return this.options.ignoreFrom;
        },

        /*\
         * Interactable.allowFrom
         [ method ]
         *
         * A drag/resize/gesture is started only If the target of the
         * `mousedown`, `pointerdown` or `touchstart` event or any of it's
         * parents match the given CSS selector or Element.
         *
         - newValue (string | Element | null) #optional a CSS selector string, an Element or `null` to allow from any element
         = (string | Element | object) The current allowFrom value or this Interactable
         **
         | interact(element, { allowFrom: document.getElementById('drag-handle') });
         | // or
         | interact(element).allowFrom('.handle');
        \*/
        allowFrom: function (newValue) {
            if (trySelector(newValue)) {            // CSS selector to match event.target
                this.options.allowFrom = newValue;
                return this;
            }

            if (isElement(newValue)) {              // specific element
                this.options.allowFrom = newValue;
                return this;
            }

            return this.options.allowFrom;
        },

        /*\
         * Interactable.element
         [ method ]
         *
         * If this is not a selector Interactable, it returns the element this
         * interactable represents
         *
         = (Element) HTML / SVG Element
        \*/
        element: function () {
            return this._element;
        },

        /*\
         * Interactable.fire
         [ method ]
         *
         * Calls listeners for the given InteractEvent type bound globally
         * and directly to this Interactable
         *
         - iEvent (InteractEvent) The InteractEvent object to be fired on this Interactable
         = (Interactable) this Interactable
        \*/
        fire: function (iEvent) {
            if (!(iEvent && iEvent.type) || !contains(eventTypes, iEvent.type)) {
                return this;
            }

            var listeners,
                i,
                len,
                onEvent = 'on' + iEvent.type,
                funcName = '';

            // Interactable#on() listeners
            if (iEvent.type in this._iEvents) {
                listeners = this._iEvents[iEvent.type];

                for (i = 0, len = listeners.length; i < len && !iEvent.immediatePropagationStopped; i++) {
                    funcName = listeners[i].name;
                    listeners[i](iEvent);
                }
            }

            // interactable.onevent listener
            if (isFunction(this[onEvent])) {
                funcName = this[onEvent].name;
                this[onEvent](iEvent);
            }

            // interact.on() listeners
            if (iEvent.type in globalEvents && (listeners = globalEvents[iEvent.type]))  {

                for (i = 0, len = listeners.length; i < len && !iEvent.immediatePropagationStopped; i++) {
                    funcName = listeners[i].name;
                    listeners[i](iEvent);
                }
            }

            return this;
        },

        /*\
         * Interactable.on
         [ method ]
         *
         * Binds a listener for an InteractEvent or DOM event.
         *
         - eventType  (string | array | object) The types of events to listen for
         - listener   (function) The function to be called on the given event(s)
         - useCapture (boolean) #optional useCapture flag for addEventListener
         = (object) This Interactable
        \*/
        on: function (eventType, listener, useCapture) {
            var i;

            if (isString(eventType) && eventType.search(' ') !== -1) {
                eventType = eventType.trim().split(/ +/);
            }

            if (isArray(eventType)) {
                for (i = 0; i < eventType.length; i++) {
                    this.on(eventType[i], listener, useCapture);
                }

                return this;
            }

            if (isObject(eventType)) {
                for (var prop in eventType) {
                    this.on(prop, eventType[prop], listener);
                }

                return this;
            }

            if (eventType === 'wheel') {
                eventType = wheelEvent;
            }

            // convert to boolean
            useCapture = useCapture? true: false;

            if (contains(eventTypes, eventType)) {
                // if this type of event was never bound to this Interactable
                if (!(eventType in this._iEvents)) {
                    this._iEvents[eventType] = [listener];
                }
                else {
                    this._iEvents[eventType].push(listener);
                }
            }
            // delegated event for selector
            else if (this.selector) {
                if (!delegatedEvents[eventType]) {
                    delegatedEvents[eventType] = {
                        selectors: [],
                        contexts : [],
                        listeners: []
                    };

                    // add delegate listener functions
                    for (i = 0; i < documents.length; i++) {
                        events.add(documents[i], eventType, delegateListener);
                        events.add(documents[i], eventType, delegateUseCapture, true);
                    }
                }

                var delegated = delegatedEvents[eventType],
                    index;

                for (index = delegated.selectors.length - 1; index >= 0; index--) {
                    if (delegated.selectors[index] === this.selector
                        && delegated.contexts[index] === this._context) {
                        break;
                    }
                }

                if (index === -1) {
                    index = delegated.selectors.length;

                    delegated.selectors.push(this.selector);
                    delegated.contexts .push(this._context);
                    delegated.listeners.push([]);
                }

                // keep listener and useCapture flag
                delegated.listeners[index].push([listener, useCapture]);
            }
            else {
                events.add(this._element, eventType, listener, useCapture);
            }

            return this;
        },

        /*\
         * Interactable.off
         [ method ]
         *
         * Removes an InteractEvent or DOM event listener
         *
         - eventType  (string | array | object) The types of events that were listened for
         - listener   (function) The listener function to be removed
         - useCapture (boolean) #optional useCapture flag for removeEventListener
         = (object) This Interactable
        \*/
        off: function (eventType, listener, useCapture) {
            var i;

            if (isString(eventType) && eventType.search(' ') !== -1) {
                eventType = eventType.trim().split(/ +/);
            }

            if (isArray(eventType)) {
                for (i = 0; i < eventType.length; i++) {
                    this.off(eventType[i], listener, useCapture);
                }

                return this;
            }

            if (isObject(eventType)) {
                for (var prop in eventType) {
                    this.off(prop, eventType[prop], listener);
                }

                return this;
            }

            var eventList,
                index = -1;

            // convert to boolean
            useCapture = useCapture? true: false;

            if (eventType === 'wheel') {
                eventType = wheelEvent;
            }

            // if it is an action event type
            if (contains(eventTypes, eventType)) {
                eventList = this._iEvents[eventType];

                if (eventList && (index = indexOf(eventList, listener)) !== -1) {
                    this._iEvents[eventType].splice(index, 1);
                }
            }
            // delegated event
            else if (this.selector) {
                var delegated = delegatedEvents[eventType],
                    matchFound = false;

                if (!delegated) { return this; }

                // count from last index of delegated to 0
                for (index = delegated.selectors.length - 1; index >= 0; index--) {
                    // look for matching selector and context Node
                    if (delegated.selectors[index] === this.selector
                        && delegated.contexts[index] === this._context) {

                        var listeners = delegated.listeners[index];

                        // each item of the listeners array is an array: [function, useCaptureFlag]
                        for (i = listeners.length - 1; i >= 0; i--) {
                            var fn = listeners[i][0],
                                useCap = listeners[i][1];

                            // check if the listener functions and useCapture flags match
                            if (fn === listener && useCap === useCapture) {
                                // remove the listener from the array of listeners
                                listeners.splice(i, 1);

                                // if all listeners for this interactable have been removed
                                // remove the interactable from the delegated arrays
                                if (!listeners.length) {
                                    delegated.selectors.splice(index, 1);
                                    delegated.contexts .splice(index, 1);
                                    delegated.listeners.splice(index, 1);

                                    // remove delegate function from context
                                    events.remove(this._context, eventType, delegateListener);
                                    events.remove(this._context, eventType, delegateUseCapture, true);

                                    // remove the arrays if they are empty
                                    if (!delegated.selectors.length) {
                                        delegatedEvents[eventType] = null;
                                    }
                                }

                                // only remove one listener
                                matchFound = true;
                                break;
                            }
                        }

                        if (matchFound) { break; }
                    }
                }
            }
            // remove listener from this Interatable's element
            else {
                events.remove(this._element, eventType, listener, useCapture);
            }

            return this;
        },

        /*\
         * Interactable.set
         [ method ]
         *
         * Reset the options of this Interactable
         - options (object) The new settings to apply
         = (object) This Interactable
        \*/
        set: function (options) {
            if (!isObject(options)) {
                options = {};
            }

            this.options = extend({}, defaultOptions.base);

            var i,
                actions = ['drag', 'drop', 'resize', 'gesture'],
                methods = ['draggable', 'dropzone', 'resizable', 'gesturable'],
                perActions = extend(extend({}, defaultOptions.perAction), options[action] || {});

            for (i = 0; i < actions.length; i++) {
                var action = actions[i];

                this.options[action] = extend({}, defaultOptions[action]);

                this.setPerAction(action, perActions);

                this[methods[i]](options[action]);
            }

            var settings = [
                    'accept', 'actionChecker', 'allowFrom', 'deltaSource',
                    'dropChecker', 'ignoreFrom', 'origin', 'preventDefault',
                    'rectChecker', 'styleCursor'
                ];

            for (i = 0, len = settings.length; i < len; i++) {
                var setting = settings[i];

                this.options[setting] = defaultOptions.base[setting];

                if (setting in options) {
                    this[setting](options[setting]);
                }
            }

            return this;
        },

        /*\
         * Interactable.unset
         [ method ]
         *
         * Remove this interactable from the list of interactables and remove
         * it's drag, drop, resize and gesture capabilities
         *
         = (object) @interact
        \*/
        unset: function () {
            events.remove(this._element, 'all');

            if (!isString(this.selector)) {
                events.remove(this, 'all');
                if (this.options.styleCursor) {
                    this._element.style.cursor = '';
                }
            }
            else {
                // remove delegated events
                for (var type in delegatedEvents) {
                    var delegated = delegatedEvents[type];

                    for (var i = 0; i < delegated.selectors.length; i++) {
                        if (delegated.selectors[i] === this.selector
                            && delegated.contexts[i] === this._context) {

                            delegated.selectors.splice(i, 1);
                            delegated.contexts .splice(i, 1);
                            delegated.listeners.splice(i, 1);

                            // remove the arrays if they are empty
                            if (!delegated.selectors.length) {
                                delegatedEvents[type] = null;
                            }
                        }

                        events.remove(this._context, type, delegateListener);
                        events.remove(this._context, type, delegateUseCapture, true);

                        break;
                    }
                }
            }

            this.dropzone(false);

            interactables.splice(indexOf(interactables, this), 1);

            return interact;
        }
    };

    function warnOnce (method, message) {
        var warned = false;

        return function () {
            if (!warned) {
                window.console.warn(message);
                warned = true;
            }

            return method.apply(this, arguments);
        };
    }

    Interactable.prototype.snap = warnOnce(Interactable.prototype.snap,
         'Interactable#snap is deprecated. See the new documentation for snapping at http://interactjs.io/docs/snapping');
    Interactable.prototype.restrict = warnOnce(Interactable.prototype.restrict,
         'Interactable#restrict is deprecated. See the new documentation for resticting at http://interactjs.io/docs/restriction');
    Interactable.prototype.inertia = warnOnce(Interactable.prototype.inertia,
         'Interactable#inertia is deprecated. See the new documentation for inertia at http://interactjs.io/docs/inertia');
    Interactable.prototype.autoScroll = warnOnce(Interactable.prototype.autoScroll,
         'Interactable#autoScroll is deprecated. See the new documentation for autoScroll at http://interactjs.io/docs/#autoscroll');
    Interactable.prototype.squareResize = warnOnce(Interactable.prototype.squareResize,
         'Interactable#squareResize is deprecated. See http://interactjs.io/docs/#resize-square');

    Interactable.prototype.accept = warnOnce(Interactable.prototype.accept,
         'Interactable#accept is deprecated. use Interactable#dropzone({ accept: target }) instead');
    Interactable.prototype.dropChecker = warnOnce(Interactable.prototype.dropChecker,
         'Interactable#dropChecker is deprecated. use Interactable#dropzone({ dropChecker: checkerFunction }) instead');
    Interactable.prototype.context = warnOnce(Interactable.prototype.context,
         'Interactable#context as a method is deprecated. It will soon be a DOM Node instead');

    /*\
     * interact.isSet
     [ method ]
     *
     * Check if an element has been set
     - element (Element) The Element being searched for
     = (boolean) Indicates if the element or CSS selector was previously passed to interact
    \*/
    interact.isSet = function(element, options) {
        return interactables.indexOfElement(element, options && options.context) !== -1;
    };

    /*\
     * interact.on
     [ method ]
     *
     * Adds a global listener for an InteractEvent or adds a DOM event to
     * `document`
     *
     - type       (string | array | object) The types of events to listen for
     - listener   (function) The function to be called on the given event(s)
     - useCapture (boolean) #optional useCapture flag for addEventListener
     = (object) interact
    \*/
    interact.on = function (type, listener, useCapture) {
        if (isString(type) && type.search(' ') !== -1) {
            type = type.trim().split(/ +/);
        }

        if (isArray(type)) {
            for (var i = 0; i < type.length; i++) {
                interact.on(type[i], listener, useCapture);
            }

            return interact;
        }

        if (isObject(type)) {
            for (var prop in type) {
                interact.on(prop, type[prop], listener);
            }

            return interact;
        }

        // if it is an InteractEvent type, add listener to globalEvents
        if (contains(eventTypes, type)) {
            // if this type of event was never bound
            if (!globalEvents[type]) {
                globalEvents[type] = [listener];
            }
            else {
                globalEvents[type].push(listener);
            }
        }
        // If non InteractEvent type, addEventListener to document
        else {
            events.add(document, type, listener, useCapture);
        }

        return interact;
    };

    /*\
     * interact.off
     [ method ]
     *
     * Removes a global InteractEvent listener or DOM event from `document`
     *
     - type       (string | array | object) The types of events that were listened for
     - listener   (function) The listener function to be removed
     - useCapture (boolean) #optional useCapture flag for removeEventListener
     = (object) interact
     \*/
    interact.off = function (type, listener, useCapture) {
        if (isString(type) && type.search(' ') !== -1) {
            type = type.trim().split(/ +/);
        }

        if (isArray(type)) {
            for (var i = 0; i < type.length; i++) {
                interact.off(type[i], listener, useCapture);
            }

            return interact;
        }

        if (isObject(type)) {
            for (var prop in type) {
                interact.off(prop, type[prop], listener);
            }

            return interact;
        }

        if (!contains(eventTypes, type)) {
            events.remove(document, type, listener, useCapture);
        }
        else {
            var index;

            if (type in globalEvents
                && (index = indexOf(globalEvents[type], listener)) !== -1) {
                globalEvents[type].splice(index, 1);
            }
        }

        return interact;
    };

    /*\
     * interact.enableDragging
     [ method ]
     *
     * Deprecated.
     *
     * Returns or sets whether dragging is enabled for any Interactables
     *
     - newValue (boolean) #optional `true` to allow the action; `false` to disable action for all Interactables
     = (boolean | object) The current setting or interact
    \*/
    interact.enableDragging = warnOnce(function (newValue) {
        if (newValue !== null && newValue !== undefined) {
            actionIsEnabled.drag = newValue;

            return interact;
        }
        return actionIsEnabled.drag;
    }, 'interact.enableDragging is deprecated and will soon be removed.');

    /*\
     * interact.enableResizing
     [ method ]
     *
     * Deprecated.
     *
     * Returns or sets whether resizing is enabled for any Interactables
     *
     - newValue (boolean) #optional `true` to allow the action; `false` to disable action for all Interactables
     = (boolean | object) The current setting or interact
    \*/
    interact.enableResizing = warnOnce(function (newValue) {
        if (newValue !== null && newValue !== undefined) {
            actionIsEnabled.resize = newValue;

            return interact;
        }
        return actionIsEnabled.resize;
    }, 'interact.enableResizing is deprecated and will soon be removed.');

    /*\
     * interact.enableGesturing
     [ method ]
     *
     * Deprecated.
     *
     * Returns or sets whether gesturing is enabled for any Interactables
     *
     - newValue (boolean) #optional `true` to allow the action; `false` to disable action for all Interactables
     = (boolean | object) The current setting or interact
    \*/
    interact.enableGesturing = warnOnce(function (newValue) {
        if (newValue !== null && newValue !== undefined) {
            actionIsEnabled.gesture = newValue;

            return interact;
        }
        return actionIsEnabled.gesture;
    }, 'interact.enableGesturing is deprecated and will soon be removed.');

    interact.eventTypes = eventTypes;

    /*\
     * interact.debug
     [ method ]
     *
     * Returns debugging data
     = (object) An object with properties that outline the current state and expose internal functions and variables
    \*/
    interact.debug = function () {
        var interaction = interactions[0] || new Interaction();

        return {
            interactions          : interactions,
            target                : interaction.target,
            dragging              : interaction.dragging,
            resizing              : interaction.resizing,
            gesturing             : interaction.gesturing,
            prepared              : interaction.prepared,
            matches               : interaction.matches,
            matchElements         : interaction.matchElements,

            prevCoords            : interaction.prevCoords,
            startCoords           : interaction.startCoords,

            pointerIds            : interaction.pointerIds,
            pointers              : interaction.pointers,
            addPointer            : listeners.addPointer,
            removePointer         : listeners.removePointer,
            recordPointer        : listeners.recordPointer,

            snap                  : interaction.snapStatus,
            restrict              : interaction.restrictStatus,
            inertia               : interaction.inertiaStatus,

            downTime              : interaction.downTimes[0],
            downEvent             : interaction.downEvent,
            downPointer           : interaction.downPointer,
            prevEvent             : interaction.prevEvent,

            Interactable          : Interactable,
            interactables         : interactables,
            pointerIsDown         : interaction.pointerIsDown,
            defaultOptions        : defaultOptions,
            defaultActionChecker  : defaultActionChecker,

            actionCursors         : actionCursors,
            dragMove              : listeners.dragMove,
            resizeMove            : listeners.resizeMove,
            gestureMove           : listeners.gestureMove,
            pointerUp             : listeners.pointerUp,
            pointerDown           : listeners.pointerDown,
            pointerMove           : listeners.pointerMove,
            pointerHover          : listeners.pointerHover,

            eventTypes            : eventTypes,

            events                : events,
            globalEvents          : globalEvents,
            delegatedEvents       : delegatedEvents,

            prefixedPropREs       : prefixedPropREs
        };
    };

    // expose the functions used to calculate multi-touch properties
    interact.getPointerAverage = pointerAverage;
    interact.getTouchBBox     = touchBBox;
    interact.getTouchDistance = touchDistance;
    interact.getTouchAngle    = touchAngle;

    interact.getElementRect         = getElementRect;
    interact.getElementClientRect   = getElementClientRect;
    interact.matchesSelector        = matchesSelector;
    interact.closest                = closest;

    /*\
     * interact.margin
     [ method ]
     *
     * Deprecated. Use `interact(target).resizable({ margin: number });` instead.
     * Returns or sets the margin for autocheck resizing used in
     * @Interactable.getAction. That is the distance from the bottom and right
     * edges of an element clicking in which will start resizing
     *
     - newValue (number) #optional
     = (number | interact) The current margin value or interact
    \*/
    interact.margin = warnOnce(function (newvalue) {
        if (isNumber(newvalue)) {
            margin = newvalue;

            return interact;
        }
        return margin;
    },
    'interact.margin is deprecated. Use interact(target).resizable({ margin: number }); instead.') ;

    /*\
     * interact.supportsTouch
     [ method ]
     *
     = (boolean) Whether or not the browser supports touch input
    \*/
    interact.supportsTouch = function () {
        return supportsTouch;
    };

    /*\
     * interact.supportsPointerEvent
     [ method ]
     *
     = (boolean) Whether or not the browser supports PointerEvents
    \*/
    interact.supportsPointerEvent = function () {
        return supportsPointerEvent;
    };

    /*\
     * interact.stop
     [ method ]
     *
     * Cancels all interactions (end events are not fired)
     *
     - event (Event) An event on which to call preventDefault()
     = (object) interact
    \*/
    interact.stop = function (event) {
        for (var i = interactions.length - 1; i >= 0; i--) {
            interactions[i].stop(event);
        }

        return interact;
    };

    /*\
     * interact.dynamicDrop
     [ method ]
     *
     * Returns or sets whether the dimensions of dropzone elements are
     * calculated on every dragmove or only on dragstart for the default
     * dropChecker
     *
     - newValue (boolean) #optional True to check on each move. False to check only before start
     = (boolean | interact) The current setting or interact
    \*/
    interact.dynamicDrop = function (newValue) {
        if (isBool(newValue)) {
            //if (dragging && dynamicDrop !== newValue && !newValue) {
                //calcRects(dropzones);
            //}

            dynamicDrop = newValue;

            return interact;
        }
        return dynamicDrop;
    };

    /*\
     * interact.pointerMoveTolerance
     [ method ]
     * Returns or sets the distance the pointer must be moved before an action
     * sequence occurs. This also affects tolerance for tap events.
     *
     - newValue (number) #optional The movement from the start position must be greater than this value
     = (number | Interactable) The current setting or interact
    \*/
    interact.pointerMoveTolerance = function (newValue) {
        if (isNumber(newValue)) {
            pointerMoveTolerance = newValue;

            return this;
        }

        return pointerMoveTolerance;
    };

    /*\
     * interact.maxInteractions
     [ method ]
     **
     * Returns or sets the maximum number of concurrent interactions allowed.
     * By default only 1 interaction is allowed at a time (for backwards
     * compatibility). To allow multiple interactions on the same Interactables
     * and elements, you need to enable it in the draggable, resizable and
     * gesturable `'max'` and `'maxPerElement'` options.
     **
     - newValue (number) #optional Any number. newValue <= 0 means no interactions.
    \*/
    interact.maxInteractions = function (newValue) {
        if (isNumber(newValue)) {
            maxInteractions = newValue;

            return this;
        }

        return maxInteractions;
    };

    interact.createSnapGrid = function (grid) {
        return function (x, y) {
            var offsetX = 0,
                offsetY = 0;

            if (isObject(grid.offset)) {
                offsetX = grid.offset.x;
                offsetY = grid.offset.y;
            }

            var gridx = Math.round((x - offsetX) / grid.x),
                gridy = Math.round((y - offsetY) / grid.y),

                newX = gridx * grid.x + offsetX,
                newY = gridy * grid.y + offsetY;

            return {
                x: newX,
                y: newY,
                range: grid.range
            };
        };
    };

    function endAllInteractions (event) {
        for (var i = 0; i < interactions.length; i++) {
            interactions[i].pointerEnd(event, event);
        }
    }

    function listenToDocument (doc) {
        if (contains(documents, doc)) { return; }

        var win = doc.defaultView || doc.parentWindow;

        // add delegate event listener
        for (var eventType in delegatedEvents) {
            events.add(doc, eventType, delegateListener);
            events.add(doc, eventType, delegateUseCapture, true);
        }

        if (supportsPointerEvent) {
            if (PointerEvent === win.MSPointerEvent) {
                pEventTypes = {
                    up: 'MSPointerUp', down: 'MSPointerDown', over: 'mouseover',
                    out: 'mouseout', move: 'MSPointerMove', cancel: 'MSPointerCancel' };
            }
            else {
                pEventTypes = {
                    up: 'pointerup', down: 'pointerdown', over: 'pointerover',
                    out: 'pointerout', move: 'pointermove', cancel: 'pointercancel' };
            }

            events.add(doc, pEventTypes.down  , listeners.selectorDown );
            events.add(doc, pEventTypes.move  , listeners.pointerMove  );
            events.add(doc, pEventTypes.over  , listeners.pointerOver  );
            events.add(doc, pEventTypes.out   , listeners.pointerOut   );
            events.add(doc, pEventTypes.up    , listeners.pointerUp    );
            events.add(doc, pEventTypes.cancel, listeners.pointerCancel);

            // autoscroll
            events.add(doc, pEventTypes.move, listeners.autoScrollMove);
        }
        else {
            events.add(doc, 'mousedown', listeners.selectorDown);
            events.add(doc, 'mousemove', listeners.pointerMove );
            events.add(doc, 'mouseup'  , listeners.pointerUp   );
            events.add(doc, 'mouseover', listeners.pointerOver );
            events.add(doc, 'mouseout' , listeners.pointerOut  );

            events.add(doc, 'touchstart' , listeners.selectorDown );
            events.add(doc, 'touchmove'  , listeners.pointerMove  );
            events.add(doc, 'touchend'   , listeners.pointerUp    );
            events.add(doc, 'touchcancel', listeners.pointerCancel);

            // autoscroll
            events.add(doc, 'mousemove', listeners.autoScrollMove);
            events.add(doc, 'touchmove', listeners.autoScrollMove);
        }

        events.add(win, 'blur', endAllInteractions);

        try {
            if (win.frameElement) {
                var parentDoc = win.frameElement.ownerDocument,
                    parentWindow = parentDoc.defaultView;

                events.add(parentDoc   , 'mouseup'      , listeners.pointerEnd);
                events.add(parentDoc   , 'touchend'     , listeners.pointerEnd);
                events.add(parentDoc   , 'touchcancel'  , listeners.pointerEnd);
                events.add(parentDoc   , 'pointerup'    , listeners.pointerEnd);
                events.add(parentDoc   , 'MSPointerUp'  , listeners.pointerEnd);
                events.add(parentWindow, 'blur'         , endAllInteractions );
            }
        }
        catch (error) {
            interact.windowParentError = error;
        }

        // prevent native HTML5 drag on interact.js target elements
        events.add(doc, 'dragstart', function (event) {
            for (var i = 0; i < interactions.length; i++) {
                var interaction = interactions[i];

                if (interaction.element
                    && (interaction.element === event.target
                        || nodeContains(interaction.element, event.target))) {

                    interaction.checkAndPreventDefault(event, interaction.target, interaction.element);
                    return;
                }
            }
        });

        if (events.useAttachEvent) {
            // For IE's lack of Event#preventDefault
            events.add(doc, 'selectstart', function (event) {
                var interaction = interactions[0];

                if (interaction.currentAction()) {
                    interaction.checkAndPreventDefault(event);
                }
            });

            // For IE's bad dblclick event sequence
            events.add(doc, 'dblclick', doOnInteractions('ie8Dblclick'));
        }

        documents.push(doc);
    }

    listenToDocument(document);

    function indexOf (array, target) {
        for (var i = 0, len = array.length; i < len; i++) {
            if (array[i] === target) {
                return i;
            }
        }

        return -1;
    }

    function contains (array, target) {
        return indexOf(array, target) !== -1;
    }

    function matchesSelector (element, selector, nodeList) {
        if (ie8MatchesSelector) {
            return ie8MatchesSelector(element, selector, nodeList);
        }

        // remove /deep/ from selectors if shadowDOM polyfill is used
        if (window !== realWindow) {
            selector = selector.replace(/\/deep\//g, ' ');
        }

        return element[prefixedMatchesSelector](selector);
    }

    function matchesUpTo (element, selector, limit) {
        while (isElement(element)) {
            if (matchesSelector(element, selector)) {
                return true;
            }

            element = parentElement(element);

            if (element === limit) {
                return matchesSelector(element, selector);
            }
        }

        return false;
    }

    // For IE8's lack of an Element#matchesSelector
    // taken from http://tanalin.com/en/blog/2012/12/matches-selector-ie8/ and modified
    if (!(prefixedMatchesSelector in Element.prototype) || !isFunction(Element.prototype[prefixedMatchesSelector])) {
        ie8MatchesSelector = function (element, selector, elems) {
            elems = elems || element.parentNode.querySelectorAll(selector);

            for (var i = 0, len = elems.length; i < len; i++) {
                if (elems[i] === element) {
                    return true;
                }
            }

            return false;
        };
    }

    // requestAnimationFrame polyfill
    (function() {
        var lastTime = 0,
            vendors = ['ms', 'moz', 'webkit', 'o'];

        for(var x = 0; x < vendors.length && !realWindow.requestAnimationFrame; ++x) {
            reqFrame = realWindow[vendors[x]+'RequestAnimationFrame'];
            cancelFrame = realWindow[vendors[x]+'CancelAnimationFrame'] || realWindow[vendors[x]+'CancelRequestAnimationFrame'];
        }

        if (!reqFrame) {
            reqFrame = function(callback) {
                var currTime = new Date().getTime(),
                    timeToCall = Math.max(0, 16 - (currTime - lastTime)),
                    id = setTimeout(function() { callback(currTime + timeToCall); },
                  timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
        }

        if (!cancelFrame) {
            cancelFrame = function(id) {
                clearTimeout(id);
            };
        }
    }());

    /* global exports: true, module, define */

    // http://documentcloud.github.io/underscore/docs/underscore.html#section-11
    if (true) {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = interact;
        }
        exports.interact = interact;
    }
    // AMD
    else if (typeof define === 'function' && define.amd) {
        define('interact', function() {
            return interact;
        });
    }
    else {
        realWindow.interact = interact;
    }

} (typeof window === 'undefined'? undefined : window));


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.directive('include', {
  bind: function bind(el, binding) {
    fetch(binding.value).then(function (response) {
      return response.text();
    }).then(function (text) {
      el.innerHTML = text;
    }).catch(console.error.bind(console));
  }
}); // include

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _data = __webpack_require__(20);

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: _data2.default,
  message: 'hello',
  content: {},
  drag: true,
  open: false
}; // data

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {"generic":{"message":"window","items":[{"icon":"document","name":"Document"},{"icon":"app","name":"App"},{"icon":"folder","name":"Folder"},{"icon":"document","name":"File"}]},"another":{"message":"another","items":[{"icon":"document","name":"Document"}]},"trash":{"message":"trash","items":[{"icon":"document","name":"Document"}]}}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _svg = __webpack_require__(4);

var _svg2 = _interopRequireDefault(_svg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// components
exports.default = {
  'window': {
    template: '#window',
    props: ['post'],
    methods: {
      svg: _svg2.default
    }
  }
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (event) {
  this.clear();
  event.target.classList.add('is-active');
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (event) {
  document.querySelectorAll('.has-dropdown').forEach(function (selector) {
    selector.classList.remove('is-active');
  });
};

/***/ })
/******/ ]);