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
    }
  },

  mounted: function mounted() {
    this.update();
  }
});

},{"./directives/draggable":1,"./directives/include":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9kaXJlY3RpdmVzL2RyYWdnYWJsZS5qcyIsImpzL2RpcmVjdGl2ZXMvaW5jbHVkZS5qcyIsImpzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7a0JDQWUsSUFBSSxTQUFKLENBQWMsV0FBZCxFQUEyQjtBQUN4QyxRQUFNLGNBQVMsRUFBVCxFQUFhO0FBQ2pCLFFBQUksT0FBTyxHQUFHLElBQWQ7O0FBRUEsT0FBRyxXQUFILEdBQWlCLFVBQVMsQ0FBVCxFQUFZO0FBQzNCLGFBQU8sSUFBUDtBQUNBLFNBQUcsU0FBSCxDQUFhLEdBQWIsQ0FBaUIsVUFBakI7QUFDRCxLQUhELEVBS0EsR0FBRyxXQUFILEdBQWlCLFVBQVMsQ0FBVCxFQUFZO0FBQzNCLFVBQUksSUFBSSxHQUFHLFdBQUgsR0FBaUIsQ0FBekI7QUFDQSxVQUFJLElBQUksR0FBRyxZQUFILEdBQWtCLENBQTFCO0FBQ0EsVUFBSyxTQUFTLElBQWQsRUFBcUI7QUFDbkIsWUFBSSxJQUFJLEVBQUUsT0FBRixHQUFZLENBQXBCO0FBQ0EsWUFBSSxJQUFJLEVBQUUsT0FBRixHQUFZLENBQXBCO0FBQ0EsWUFBSSxNQUFNLDZCQUE2QixDQUE3QixHQUFpQyxVQUFqQyxHQUE4QyxDQUE5QyxHQUFrRCxLQUE1RDtBQUNBLFdBQUcsWUFBSCxDQUFnQixPQUFoQixFQUF5QixHQUF6QjtBQUNEO0FBQ0YsS0FkRCxFQWdCQSxHQUFHLFlBQUgsR0FBa0IsWUFBVztBQUMzQixhQUFPLEtBQVA7QUFDQSxTQUFHLFNBQUgsQ0FBYSxNQUFiLENBQW9CLFVBQXBCO0FBQ0QsS0FuQkQ7QUFvQkQ7QUF4QnVDLENBQTNCLEM7Ozs7Ozs7O2tCQ0FBLElBQUksU0FBSixDQUFjLFNBQWQsRUFBeUI7QUFDdEMsUUFBTSxjQUFVLEVBQVYsRUFBYyxPQUFkLEVBQXVCO0FBQzNCLFFBQUksTUFBTSxRQUFRLEtBQWxCO0FBQ0EsUUFBSSxVQUFVLElBQUksY0FBSixFQUFkO0FBQ0EsWUFBUSxJQUFSLENBQWEsS0FBYixFQUFvQixHQUFwQixFQUF5QixJQUF6QjtBQUNBLFlBQVEsa0JBQVIsR0FBNkIsWUFBVztBQUN0QyxVQUFJLEtBQUssVUFBTCxLQUFvQixDQUF4QixFQUEyQjtBQUMzQixVQUFJLEtBQUssTUFBTCxLQUFnQixHQUFwQixFQUF5QjtBQUN6QixTQUFHLFNBQUgsR0FBZSxLQUFLLFlBQXBCO0FBQ0QsS0FKRDtBQUtBLFlBQVEsSUFBUjtBQUNGO0FBWHNDLENBQXpCLEM7Ozs7O0FDQWY7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSSxTQUFKLENBQWMsS0FBZCxHQUFzQixLQUF0Qjs7QUFFQSxJQUFJLEdBQUosQ0FBUTtBQUNOLE1BQUksVUFERTs7QUFHTixRQUFNO0FBQ0osY0FBVSxtQkFETjtBQUVKLGFBQVMsT0FGTDtBQUdKLGFBQVMsRUFITDtBQUlKLFVBQU07QUFKRixHQUhBOztBQVVOLGNBQVk7QUFDVixjQUFVO0FBQ1IsZ0JBQVUsU0FERjtBQUVSLGFBQU8sQ0FBQyxNQUFEO0FBRkM7QUFEQSxHQVZOOztBQWlCTixXQUFTO0FBQ1AsWUFBUSxrQkFBVztBQUNqQixVQUFJLE9BQU8sSUFBWDtBQUNBLFdBQUssS0FBTCxDQUFXO0FBQ1QsYUFBSyxLQUFLLFFBREQ7QUFFVCxnQkFBUTtBQUZDLE9BQVgsRUFJQyxJQUpELENBSU0sVUFBUyxNQUFULEVBQWlCO0FBQ3JCLGFBQUssT0FBTCxHQUFlLE9BQU8sSUFBdEI7QUFDRCxPQU5ELEVBT0MsS0FQRCxDQU9PLFVBQVMsS0FBVCxFQUFlO0FBQ3BCLGdCQUFRLEdBQVIsQ0FBWSxLQUFaO0FBQ0QsT0FURDtBQVVEO0FBYk0sR0FqQkg7O0FBaUNOLFdBQVMsbUJBQVc7QUFDbEIsU0FBSyxNQUFMO0FBQ0Q7QUFuQ0ssQ0FBUiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZGVmYXVsdCBWdWUuZGlyZWN0aXZlKCdkcmFnZ2FibGUnLCB7XG4gIGJpbmQ6IGZ1bmN0aW9uKGVsKSB7XG4gICAgdmFyIGRyYWcgPSBlbC5kcmFnXG5cbiAgICBlbC5vbm1vdXNlZG93biA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGRyYWcgPSB0cnVlXG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpXG4gICAgfSxcblxuICAgIGVsLm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIHcgPSBlbC5vZmZzZXRXaWR0aCAvIDJcbiAgICAgIHZhciBoID0gZWwub2Zmc2V0SGVpZ2h0IC8gMlxuICAgICAgaWYgKCBkcmFnID09PSB0cnVlICkge1xuICAgICAgICB2YXIgeCA9IGUuY2xpZW50WCAtIHdcbiAgICAgICAgdmFyIHkgPSBlLmNsaWVudFkgLSBoXG4gICAgICAgIHZhciBwb3MgPSAncG9zaXRpb246YWJzb2x1dGU7IGxlZnQ6JyArIHggKyAncHg7IHRvcDonICsgeSArICdweDsnXG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBwb3MpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVsLm9ubW91c2VsZWF2ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgZHJhZyA9IGZhbHNlO1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKVxuICAgIH1cbiAgfVxufSlcbiIsImV4cG9ydCBkZWZhdWx0IFZ1ZS5kaXJlY3RpdmUoJ2luY2x1ZGUnLCB7XG4gIGJpbmQ6IGZ1bmN0aW9uIChlbCwgYmluZGluZykge1xuICAgIHZhciB1cmwgPSBiaW5kaW5nLnZhbHVlXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuICAgIHJlcXVlc3Qub3BlbignR0VUJywgdXJsLCB0cnVlKVxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm5cbiAgICAgIGlmICh0aGlzLnN0YXR1cyAhPT0gMjAwKSByZXR1cm5cbiAgICAgIGVsLmlubmVySFRNTCA9IHRoaXMucmVzcG9uc2VUZXh0XG4gICAgfVxuICAgIHJlcXVlc3Quc2VuZCgpO1xuIH1cbn0pXG4iLCJpbXBvcnQgZHJhZ2dhYmxlIGZyb20gJy4vZGlyZWN0aXZlcy9kcmFnZ2FibGUnXG5pbXBvcnQgaW5jbHVkZSBmcm9tICcuL2RpcmVjdGl2ZXMvaW5jbHVkZSdcblxuVnVlLnByb3RvdHlwZS4kaHR0cCA9IGF4aW9zXG5cbm5ldyBWdWUoe1xuICBlbDogJyNkZXNrdG9wJyxcblxuICBkYXRhOiB7XG4gICAgZGF0YWZpbGU6ICcuLi9kYXRhL2RhdGEuanNvbicsXG4gICAgbWVzc2FnZTogJ2hlbGxvJyxcbiAgICBjb250ZW50OiB7fSxcbiAgICBkcmFnOiB0cnVlXG4gIH0sXG5cbiAgY29tcG9uZW50czoge1xuICAgICd3aW5kb3cnOiB7XG4gICAgICB0ZW1wbGF0ZTogJyN3aW5kb3cnLFxuICAgICAgcHJvcHM6IFsncG9zdCddXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgICB0aGlzLiRodHRwKHtcbiAgICAgICAgdXJsOiB0aGlzLmRhdGFmaWxlLFxuICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgIHRoYXQuY29udGVudCA9IHJlc3VsdC5kYXRhXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKXtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICB9KVxuICAgIH1cbiAgfSxcblxuICBtb3VudGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnVwZGF0ZSgpXG4gIH1cbn0pO1xuIl19
