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
    }, el.onmouseup = function () {
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
    message: 'Hello World',
    drag: true
  },

  components: {
    'window': {
      template: '#window'
    }
  }
});

},{"./directives/draggable":1,"./directives/include":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9kaXJlY3RpdmVzL2RyYWdnYWJsZS5qcyIsImpzL2RpcmVjdGl2ZXMvaW5jbHVkZS5qcyIsImpzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7a0JDQWUsSUFBSSxTQUFKLENBQWMsV0FBZCxFQUEyQjtBQUN4QyxRQUFNLGNBQVMsRUFBVCxFQUFhO0FBQ2pCLFFBQUksT0FBTyxHQUFHLElBQWQ7O0FBRUEsT0FBRyxXQUFILEdBQWlCLFVBQVMsQ0FBVCxFQUFZO0FBQzNCLGFBQU8sSUFBUDtBQUNBLFNBQUcsU0FBSCxDQUFhLEdBQWIsQ0FBaUIsVUFBakI7QUFDRCxLQUhELEVBS0EsR0FBRyxXQUFILEdBQWlCLFVBQVMsQ0FBVCxFQUFZO0FBQzNCLFVBQUksSUFBSSxHQUFHLFdBQUgsR0FBaUIsQ0FBekI7QUFDQSxVQUFJLElBQUksR0FBRyxZQUFILEdBQWtCLENBQTFCO0FBQ0EsVUFBSyxTQUFTLElBQWQsRUFBcUI7QUFDbkIsWUFBSSxJQUFJLEVBQUUsT0FBRixHQUFZLENBQXBCO0FBQ0EsWUFBSSxJQUFJLEVBQUUsT0FBRixHQUFZLENBQXBCO0FBQ0EsWUFBSSxNQUFNLDZCQUE2QixDQUE3QixHQUFpQyxVQUFqQyxHQUE4QyxDQUE5QyxHQUFrRCxLQUE1RDtBQUNBLFdBQUcsWUFBSCxDQUFnQixPQUFoQixFQUF5QixHQUF6QjtBQUNEO0FBQ0YsS0FkRCxFQWdCQSxHQUFHLFNBQUgsR0FBZSxZQUFXO0FBQ3hCLGFBQU8sS0FBUDtBQUNBLFNBQUcsU0FBSCxDQUFhLE1BQWIsQ0FBb0IsVUFBcEI7QUFDRCxLQW5CRDtBQW9CRDtBQXhCdUMsQ0FBM0IsQzs7Ozs7Ozs7a0JDQUEsSUFBSSxTQUFKLENBQWMsU0FBZCxFQUF5QjtBQUN0QyxRQUFNLGNBQVUsRUFBVixFQUFjLE9BQWQsRUFBdUI7QUFDM0IsUUFBSSxNQUFNLFFBQVEsS0FBbEI7QUFDQSxRQUFJLFVBQVUsSUFBSSxjQUFKLEVBQWQ7QUFDQSxZQUFRLElBQVIsQ0FBYSxLQUFiLEVBQW9CLEdBQXBCLEVBQXlCLElBQXpCO0FBQ0EsWUFBUSxrQkFBUixHQUE2QixZQUFXO0FBQ3RDLFVBQUksS0FBSyxVQUFMLEtBQW9CLENBQXhCLEVBQTJCO0FBQzNCLFVBQUksS0FBSyxNQUFMLEtBQWdCLEdBQXBCLEVBQXlCO0FBQ3pCLFNBQUcsU0FBSCxHQUFlLEtBQUssWUFBcEI7QUFDRCxLQUpEO0FBS0EsWUFBUSxJQUFSO0FBQ0Y7QUFYc0MsQ0FBekIsQzs7Ozs7QUNBZjs7OztBQUNBOzs7Ozs7QUFDQSxJQUFJLEdBQUosQ0FBUTtBQUNOLE1BQUksVUFERTs7QUFHTixRQUFNO0FBQ0osYUFBUyxhQURMO0FBRUosVUFBTTtBQUZGLEdBSEE7O0FBUU4sY0FBWTtBQUNWLGNBQVU7QUFDUixnQkFBVTtBQURGO0FBREE7QUFSTixDQUFSIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBkZWZhdWx0IFZ1ZS5kaXJlY3RpdmUoJ2RyYWdnYWJsZScsIHtcbiAgYmluZDogZnVuY3Rpb24oZWwpIHtcbiAgICB2YXIgZHJhZyA9IGVsLmRyYWdcblxuICAgIGVsLm9ubW91c2Vkb3duID0gZnVuY3Rpb24oZSkge1xuICAgICAgZHJhZyA9IHRydWVcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJylcbiAgICB9LFxuXG4gICAgZWwub25tb3VzZW1vdmUgPSBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgdyA9IGVsLm9mZnNldFdpZHRoIC8gMlxuICAgICAgdmFyIGggPSBlbC5vZmZzZXRIZWlnaHQgLyAyXG4gICAgICBpZiAoIGRyYWcgPT09IHRydWUgKSB7XG4gICAgICAgIHZhciB4ID0gZS5jbGllbnRYIC0gd1xuICAgICAgICB2YXIgeSA9IGUuY2xpZW50WSAtIGhcbiAgICAgICAgdmFyIHBvcyA9ICdwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDonICsgeCArICdweDsgdG9wOicgKyB5ICsgJ3B4OydcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsIHBvcylcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZWwub25tb3VzZXVwID0gZnVuY3Rpb24oKSB7XG4gICAgICBkcmFnID0gZmFsc2U7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpXG4gICAgfVxuICB9XG59KVxuIiwiZXhwb3J0IGRlZmF1bHQgVnVlLmRpcmVjdGl2ZSgnaW5jbHVkZScsIHtcbiAgYmluZDogZnVuY3Rpb24gKGVsLCBiaW5kaW5nKSB7XG4gICAgdmFyIHVybCA9IGJpbmRpbmcudmFsdWVcbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG4gICAgcmVxdWVzdC5vcGVuKCdHRVQnLCB1cmwsIHRydWUpXG4gICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgIT09IDQpIHJldHVyblxuICAgICAgaWYgKHRoaXMuc3RhdHVzICE9PSAyMDApIHJldHVyblxuICAgICAgZWwuaW5uZXJIVE1MID0gdGhpcy5yZXNwb25zZVRleHRcbiAgICB9XG4gICAgcmVxdWVzdC5zZW5kKCk7XG4gfVxufSlcbiIsImltcG9ydCBkcmFnZ2FibGUgZnJvbSAnLi9kaXJlY3RpdmVzL2RyYWdnYWJsZSdcbmltcG9ydCBpbmNsdWRlIGZyb20gJy4vZGlyZWN0aXZlcy9pbmNsdWRlJ1xubmV3IFZ1ZSh7XG4gIGVsOiAnI2Rlc2t0b3AnLFxuXG4gIGRhdGE6IHtcbiAgICBtZXNzYWdlOiAnSGVsbG8gV29ybGQnLFxuICAgIGRyYWc6IHRydWVcbiAgfSxcblxuICBjb21wb25lbnRzOiB7XG4gICAgJ3dpbmRvdyc6IHtcbiAgICAgIHRlbXBsYXRlOiAnI3dpbmRvdydcbiAgICB9XG4gIH1cbn0pO1xuIl19
