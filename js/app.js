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
    fetch(binding.value).then(function (response) {
      return response.text();
    }).then(function (text) {
      el.innerHTML = text;
    }).catch(console.error.bind(console));
  }
});

},{}],3:[function(require,module,exports){
'use strict';

var _draggable = require('./directives/draggable');

var _draggable2 = _interopRequireDefault(_draggable);

var _include = require('./directives/include');

var _include2 = _interopRequireDefault(_include);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.prototype.$http = axios;

new Vue({
  el: '#desktop',

  data: {
    datafile: '../data/data.json',
    message: 'hello',
    content: {},
    drag: true
  },

  components: {
    'window': {
      template: '#window',
      props: ['post']
    }
  },

  methods: {
    update: function update() {
      var that = this;
      this.$http({
        url: this.datafile,
        method: 'GET'
      }).then(function (result) {
        that.content = result.data;
      }).catch(function (error) {
        console.log(error);
      });
    },

    breakpoint: function breakpoint() {
      var breakpoint = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
      return breakpoint;
    }
  },

  mounted: function mounted() {
    this.update();
  }
});

},{"./directives/draggable":1,"./directives/include":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9kaXJlY3RpdmVzL2RyYWdnYWJsZS5qcyIsImpzL2RpcmVjdGl2ZXMvaW5jbHVkZS5qcyIsImpzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7a0JDQWUsSUFBSSxTQUFKLENBQWMsV0FBZCxFQUEyQjtBQUN4QyxRQUFNLGNBQVMsRUFBVCxFQUFhO0FBQ2pCLFFBQUksT0FBTyxHQUFHLElBQWQ7O0FBRUEsT0FBRyxXQUFILEdBQWlCLFVBQVMsQ0FBVCxFQUFZO0FBQzNCLGFBQU8sSUFBUDtBQUNBLFNBQUcsU0FBSCxDQUFhLEdBQWIsQ0FBaUIsVUFBakI7QUFDRCxLQUhELEVBS0EsR0FBRyxXQUFILEdBQWlCLFVBQVMsQ0FBVCxFQUFZO0FBQzNCLFVBQUksSUFBSSxHQUFHLFdBQUgsR0FBaUIsQ0FBekI7QUFDQSxVQUFJLElBQUksR0FBRyxZQUFILEdBQWtCLENBQTFCO0FBQ0EsVUFBSyxTQUFTLElBQWQsRUFBcUI7QUFDbkIsWUFBSSxJQUFJLEVBQUUsT0FBRixHQUFZLENBQXBCO0FBQ0EsWUFBSSxJQUFJLEVBQUUsT0FBRixHQUFZLENBQXBCO0FBQ0EsWUFBSSxNQUFNLDZCQUE2QixDQUE3QixHQUFpQyxVQUFqQyxHQUE4QyxDQUE5QyxHQUFrRCxLQUE1RDtBQUNBLFdBQUcsWUFBSCxDQUFnQixPQUFoQixFQUF5QixHQUF6QjtBQUNEO0FBQ0YsS0FkRCxFQWdCQSxHQUFHLFlBQUgsR0FBa0IsWUFBVztBQUMzQixhQUFPLEtBQVA7QUFDQSxTQUFHLFNBQUgsQ0FBYSxNQUFiLENBQW9CLFVBQXBCO0FBQ0QsS0FuQkQ7QUFvQkQ7QUF4QnVDLENBQTNCLEM7Ozs7Ozs7O2tCQ0FBLElBQUksU0FBSixDQUFjLFNBQWQsRUFBeUI7QUFDdEMsUUFBTSxjQUFVLEVBQVYsRUFBYyxPQUFkLEVBQXVCO0FBQzNCLFVBQU8sUUFBUSxLQUFmLEVBQ0MsSUFERCxDQUNPO0FBQUEsYUFBWSxTQUFTLElBQVQsRUFBWjtBQUFBLEtBRFAsRUFFQyxJQUZELENBRU8sZ0JBQVE7QUFDWCxTQUFHLFNBQUgsR0FBZSxJQUFmO0FBQ0gsS0FKRCxFQUtDLEtBTEQsQ0FLTyxRQUFRLEtBQVIsQ0FBYyxJQUFkLENBQW1CLE9BQW5CLENBTFA7QUFNRjtBQVJzQyxDQUF6QixDOzs7OztBQ0FmOzs7O0FBQ0E7Ozs7OztBQUVBLElBQUksU0FBSixDQUFjLEtBQWQsR0FBc0IsS0FBdEI7O0FBRUEsSUFBSSxHQUFKLENBQVE7QUFDTixNQUFJLFVBREU7O0FBR04sUUFBTTtBQUNKLGNBQVUsbUJBRE47QUFFSixhQUFTLE9BRkw7QUFHSixhQUFTLEVBSEw7QUFJSixVQUFNO0FBSkYsR0FIQTs7QUFVTixjQUFZO0FBQ1YsY0FBVTtBQUNSLGdCQUFVLFNBREY7QUFFUixhQUFPLENBQUMsTUFBRDtBQUZDO0FBREEsR0FWTjs7QUFpQk4sV0FBUztBQUNQLFlBQVEsa0JBQVc7QUFDakIsVUFBSSxPQUFPLElBQVg7QUFDQSxXQUFLLEtBQUwsQ0FBVztBQUNULGFBQUssS0FBSyxRQUREO0FBRVQsZ0JBQVE7QUFGQyxPQUFYLEVBSUMsSUFKRCxDQUlNLFVBQVMsTUFBVCxFQUFpQjtBQUNyQixhQUFLLE9BQUwsR0FBZSxPQUFPLElBQXRCO0FBQ0QsT0FORCxFQU9DLEtBUEQsQ0FPTyxVQUFTLEtBQVQsRUFBZTtBQUNwQixnQkFBUSxHQUFSLENBQVksS0FBWjtBQUNELE9BVEQ7QUFVRCxLQWJNOztBQWVQLGdCQUFZLHNCQUFXO0FBQ3JCLFVBQUksYUFBYSxPQUFPLGdCQUFQLENBQXdCLFNBQVMsYUFBVCxDQUF1QixNQUF2QixDQUF4QixFQUF3RCxTQUF4RCxFQUFtRSxnQkFBbkUsQ0FBb0YsU0FBcEYsRUFBK0YsT0FBL0YsQ0FBdUcsS0FBdkcsRUFBOEcsRUFBOUcsQ0FBakI7QUFDQSxhQUFPLFVBQVA7QUFDRDtBQWxCTSxHQWpCSDs7QUFzQ04sV0FBUyxtQkFBVztBQUNsQixTQUFLLE1BQUw7QUFDRDtBQXhDSyxDQUFSIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBkZWZhdWx0IFZ1ZS5kaXJlY3RpdmUoJ2RyYWdnYWJsZScsIHtcbiAgYmluZDogZnVuY3Rpb24oZWwpIHtcbiAgICB2YXIgZHJhZyA9IGVsLmRyYWdcblxuICAgIGVsLm9ubW91c2Vkb3duID0gZnVuY3Rpb24oZSkge1xuICAgICAgZHJhZyA9IHRydWVcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJylcbiAgICB9LFxuXG4gICAgZWwub25tb3VzZW1vdmUgPSBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgdyA9IGVsLm9mZnNldFdpZHRoIC8gMlxuICAgICAgdmFyIGggPSBlbC5vZmZzZXRIZWlnaHQgLyAyXG4gICAgICBpZiAoIGRyYWcgPT09IHRydWUgKSB7XG4gICAgICAgIHZhciB4ID0gZS5jbGllbnRYIC0gd1xuICAgICAgICB2YXIgeSA9IGUuY2xpZW50WSAtIGhcbiAgICAgICAgdmFyIHBvcyA9ICdwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDonICsgeCArICdweDsgdG9wOicgKyB5ICsgJ3B4OydcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsIHBvcylcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZWwub25tb3VzZWxlYXZlID0gZnVuY3Rpb24oKSB7XG4gICAgICBkcmFnID0gZmFsc2U7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpXG4gICAgfVxuICB9XG59KVxuIiwiZXhwb3J0IGRlZmF1bHQgVnVlLmRpcmVjdGl2ZSgnaW5jbHVkZScsIHtcbiAgYmluZDogZnVuY3Rpb24gKGVsLCBiaW5kaW5nKSB7XG4gICAgZmV0Y2goIGJpbmRpbmcudmFsdWUgKVxuICAgIC50aGVuKCByZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkgKVxuICAgIC50aGVuKCB0ZXh0ID0+IHtcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gdGV4dDtcbiAgICB9KVxuICAgIC5jYXRjaChjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSkpO1xuIH1cbn0pXG4iLCJpbXBvcnQgZHJhZ2dhYmxlIGZyb20gJy4vZGlyZWN0aXZlcy9kcmFnZ2FibGUnXG5pbXBvcnQgaW5jbHVkZSBmcm9tICcuL2RpcmVjdGl2ZXMvaW5jbHVkZSdcblxuVnVlLnByb3RvdHlwZS4kaHR0cCA9IGF4aW9zXG5cbm5ldyBWdWUoe1xuICBlbDogJyNkZXNrdG9wJyxcblxuICBkYXRhOiB7XG4gICAgZGF0YWZpbGU6ICcuLi9kYXRhL2RhdGEuanNvbicsXG4gICAgbWVzc2FnZTogJ2hlbGxvJyxcbiAgICBjb250ZW50OiB7fSxcbiAgICBkcmFnOiB0cnVlXG4gIH0sXG5cbiAgY29tcG9uZW50czoge1xuICAgICd3aW5kb3cnOiB7XG4gICAgICB0ZW1wbGF0ZTogJyN3aW5kb3cnLFxuICAgICAgcHJvcHM6IFsncG9zdCddXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgICB0aGlzLiRodHRwKHtcbiAgICAgICAgdXJsOiB0aGlzLmRhdGFmaWxlLFxuICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgIHRoYXQuY29udGVudCA9IHJlc3VsdC5kYXRhXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKXtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBicmVha3BvaW50OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBicmVha3BvaW50ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLCAnOmJlZm9yZScpLmdldFByb3BlcnR5VmFsdWUoJ2NvbnRlbnQnKS5yZXBsYWNlKC9cXFwiL2csICcnKTtcbiAgICAgIHJldHVybiBicmVha3BvaW50O1xuICAgIH1cbiAgfSxcblxuICBtb3VudGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnVwZGF0ZSgpXG4gIH1cbn0pO1xuIl19
