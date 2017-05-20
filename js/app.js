(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Vue.directive('draggable', {
  bind: function bind(el) {
    var drag = el.drag;

    el.onmousedown = function (e) {
      drag = true;
      el.classList.add('dragging');
    }, el.onmousemove = function (e) {
      var w = el.offsetWidth / 2;
      var h = el.offsetHeight / 2;
      if (drag === true) {
        var x = e.clientX - w;
        var y = e.clientY - h;
        var pos = 'position:absolute; left:' + x + 'px; top:' + y + 'px;';
        el.setAttribute('style', pos);
      }
    }, el.onmouseleave = function () {
      drag = false;
      el.classList.remove('dragging');
    };
  }
});

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Vue.directive('include', {
  bind: function bind(el, binding) {
    var url = binding.value;
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onreadystatechange = function () {
      if (this.readyState !== 4) return;
      if (this.status !== 200) return;
      el.innerHTML = this.responseText;
    };
    request.send();
  }
});

},{}],3:[function(require,module,exports){
'use strict';

var _draggable = require('./directives/draggable');

var _draggable2 = _interopRequireDefault(_draggable);

var _include = require('./directives/include');

var _include2 = _interopRequireDefault(_include);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new Vue({
  el: '#desktop',

  data: {
    message: 'window',
    drag: true
  },

  components: {
    'window': {
      template: '#window',
      props: ['text']
    }
  }
});

},{"./directives/draggable":1,"./directives/include":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9kaXJlY3RpdmVzL2RyYWdnYWJsZS5qcyIsImpzL2RpcmVjdGl2ZXMvaW5jbHVkZS5qcyIsImpzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7a0JDQWUsSUFBSSxTQUFKLENBQWMsV0FBZCxFQUEyQjtBQUN4QyxRQUFNLGNBQVMsRUFBVCxFQUFhO0FBQ2pCLFFBQUksT0FBTyxHQUFHLElBQWQ7O0FBRUEsT0FBRyxXQUFILEdBQWlCLFVBQVMsQ0FBVCxFQUFZO0FBQzNCLGFBQU8sSUFBUDtBQUNBLFNBQUcsU0FBSCxDQUFhLEdBQWIsQ0FBaUIsVUFBakI7QUFDRCxLQUhELEVBS0EsR0FBRyxXQUFILEdBQWlCLFVBQVMsQ0FBVCxFQUFZO0FBQzNCLFVBQUksSUFBSSxHQUFHLFdBQUgsR0FBaUIsQ0FBekI7QUFDQSxVQUFJLElBQUksR0FBRyxZQUFILEdBQWtCLENBQTFCO0FBQ0EsVUFBSyxTQUFTLElBQWQsRUFBcUI7QUFDbkIsWUFBSSxJQUFJLEVBQUUsT0FBRixHQUFZLENBQXBCO0FBQ0EsWUFBSSxJQUFJLEVBQUUsT0FBRixHQUFZLENBQXBCO0FBQ0EsWUFBSSxNQUFNLDZCQUE2QixDQUE3QixHQUFpQyxVQUFqQyxHQUE4QyxDQUE5QyxHQUFrRCxLQUE1RDtBQUNBLFdBQUcsWUFBSCxDQUFnQixPQUFoQixFQUF5QixHQUF6QjtBQUNEO0FBQ0YsS0FkRCxFQWdCQSxHQUFHLFlBQUgsR0FBa0IsWUFBVztBQUMzQixhQUFPLEtBQVA7QUFDQSxTQUFHLFNBQUgsQ0FBYSxNQUFiLENBQW9CLFVBQXBCO0FBQ0QsS0FuQkQ7QUFvQkQ7QUF4QnVDLENBQTNCLEM7Ozs7Ozs7O2tCQ0FBLElBQUksU0FBSixDQUFjLFNBQWQsRUFBeUI7QUFDdEMsUUFBTSxjQUFVLEVBQVYsRUFBYyxPQUFkLEVBQXVCO0FBQzNCLFFBQUksTUFBTSxRQUFRLEtBQWxCO0FBQ0EsUUFBSSxVQUFVLElBQUksY0FBSixFQUFkO0FBQ0EsWUFBUSxJQUFSLENBQWEsS0FBYixFQUFvQixHQUFwQixFQUF5QixJQUF6QjtBQUNBLFlBQVEsa0JBQVIsR0FBNkIsWUFBVztBQUN0QyxVQUFJLEtBQUssVUFBTCxLQUFvQixDQUF4QixFQUEyQjtBQUMzQixVQUFJLEtBQUssTUFBTCxLQUFnQixHQUFwQixFQUF5QjtBQUN6QixTQUFHLFNBQUgsR0FBZSxLQUFLLFlBQXBCO0FBQ0QsS0FKRDtBQUtBLFlBQVEsSUFBUjtBQUNGO0FBWHNDLENBQXpCLEM7Ozs7O0FDQWY7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSSxHQUFKLENBQVE7QUFDTixNQUFJLFVBREU7O0FBR04sUUFBTTtBQUNKLGFBQVMsUUFETDtBQUVKLFVBQU07QUFGRixHQUhBOztBQVFOLGNBQVk7QUFDVixjQUFVO0FBQ1IsZ0JBQVUsU0FERjtBQUVSLGFBQU8sQ0FBQyxNQUFEO0FBRkM7QUFEQTtBQVJOLENBQVIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGRlZmF1bHQgVnVlLmRpcmVjdGl2ZSgnZHJhZ2dhYmxlJywge1xuICBiaW5kOiBmdW5jdGlvbihlbCkge1xuICAgIHZhciBkcmFnID0gZWwuZHJhZ1xuXG4gICAgZWwub25tb3VzZWRvd24gPSBmdW5jdGlvbihlKSB7XG4gICAgICBkcmFnID0gdHJ1ZVxuICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmcnKVxuICAgIH0sXG5cbiAgICBlbC5vbm1vdXNlbW92ZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciB3ID0gZWwub2Zmc2V0V2lkdGggLyAyXG4gICAgICB2YXIgaCA9IGVsLm9mZnNldEhlaWdodCAvIDJcbiAgICAgIGlmICggZHJhZyA9PT0gdHJ1ZSApIHtcbiAgICAgICAgdmFyIHggPSBlLmNsaWVudFggLSB3XG4gICAgICAgIHZhciB5ID0gZS5jbGllbnRZIC0gaFxuICAgICAgICB2YXIgcG9zID0gJ3Bvc2l0aW9uOmFic29sdXRlOyBsZWZ0OicgKyB4ICsgJ3B4OyB0b3A6JyArIHkgKyAncHg7J1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgcG9zKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbC5vbm1vdXNlbGVhdmUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGRyYWcgPSBmYWxzZTtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJylcbiAgICB9XG4gIH1cbn0pXG4iLCJleHBvcnQgZGVmYXVsdCBWdWUuZGlyZWN0aXZlKCdpbmNsdWRlJywge1xuICBiaW5kOiBmdW5jdGlvbiAoZWwsIGJpbmRpbmcpIHtcbiAgICB2YXIgdXJsID0gYmluZGluZy52YWx1ZVxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcbiAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSlcbiAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuXG4gICAgICBpZiAodGhpcy5zdGF0dXMgIT09IDIwMCkgcmV0dXJuXG4gICAgICBlbC5pbm5lckhUTUwgPSB0aGlzLnJlc3BvbnNlVGV4dFxuICAgIH1cbiAgICByZXF1ZXN0LnNlbmQoKTtcbiB9XG59KVxuIiwiaW1wb3J0IGRyYWdnYWJsZSBmcm9tICcuL2RpcmVjdGl2ZXMvZHJhZ2dhYmxlJ1xuaW1wb3J0IGluY2x1ZGUgZnJvbSAnLi9kaXJlY3RpdmVzL2luY2x1ZGUnXG5cbm5ldyBWdWUoe1xuICBlbDogJyNkZXNrdG9wJyxcblxuICBkYXRhOiB7XG4gICAgbWVzc2FnZTogJ3dpbmRvdycsXG4gICAgZHJhZzogdHJ1ZVxuICB9LFxuXG4gIGNvbXBvbmVudHM6IHtcbiAgICAnd2luZG93Jzoge1xuICAgICAgdGVtcGxhdGU6ICcjd2luZG93JyxcbiAgICAgIHByb3BzOiBbJ3RleHQnXVxuICAgIH1cbiAgfVxufSk7XG4iXX0=
