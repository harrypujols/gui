(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _draggable = require('./directives/draggable');

var _draggable2 = _interopRequireDefault(_draggable);

var _include = require('./directives/include');

var _include2 = _interopRequireDefault(_include);

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

var _components = require('./components');

var _components2 = _interopRequireDefault(_components);

var _update = require('./methods/update');

var _update2 = _interopRequireDefault(_update);

var _toggle = require('./methods/toggle');

var _toggle2 = _interopRequireDefault(_toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.prototype.$http = axios;

new Vue({
  el: '#stage',

  data: _data2.default,

  components: _components2.default,

  methods: {
    update: _update2.default,
    toggle: _toggle2.default
  },

  mounted: function mounted() {
    this.update();
  }
});

},{"./components":2,"./data":3,"./directives/draggable":4,"./directives/include":5,"./methods/toggle":6,"./methods/update":7}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// components
exports.default = {
  'window': {
    template: '#window',
    props: ['post']
  }
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// data
exports.default = {
  datafile: '../data/data.json',
  message: 'hello',
  content: {},
  drag: true,
  open: false
};

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// draggable
exports.default = Vue.directive('draggable', {
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

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// include
exports.default = Vue.directive('include', {
  bind: function bind(el, binding) {
    fetch(binding.value).then(function (response) {
      return response.text();
    }).then(function (text) {
      el.innerHTML = text;
    }).catch(console.error.bind(console));
  }
});

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (event) {
  event.target.classList.toggle('is-active');
};

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var that = this;
  this.$http({
    url: this.datafile,
    method: 'GET'
  }).then(function (result) {
    that.content = result.data;
  }).catch(function (error) {
    console.log(error);
  });
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvaW5kZXguanMiLCJzcmMvanMvZGF0YS9pbmRleC5qcyIsInNyYy9qcy9kaXJlY3RpdmVzL2RyYWdnYWJsZS5qcyIsInNyYy9qcy9kaXJlY3RpdmVzL2luY2x1ZGUuanMiLCJzcmMvanMvbWV0aG9kcy90b2dnbGUuanMiLCJzcmMvanMvbWV0aG9kcy91cGRhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSSxTQUFKLENBQWMsS0FBZCxHQUFzQixLQUF0Qjs7QUFFQSxJQUFJLEdBQUosQ0FBUTtBQUNOLE1BQUksUUFERTs7QUFHTixzQkFITTs7QUFLTixrQ0FMTTs7QUFPTixXQUFTO0FBQ1AsNEJBRE87QUFFUDtBQUZPLEdBUEg7O0FBWU4sV0FBUyxtQkFBVztBQUNsQixTQUFLLE1BQUw7QUFDRDtBQWRLLENBQVI7Ozs7Ozs7O0FDVEE7a0JBQ2U7QUFDYixZQUFVO0FBQ1IsY0FBVSxTQURGO0FBRVIsV0FBTyxDQUFDLE1BQUQ7QUFGQztBQURHLEM7Ozs7Ozs7O0FDRGY7a0JBQ2U7QUFDYixZQUFVLG1CQURHO0FBRWIsV0FBUyxPQUZJO0FBR2IsV0FBUyxFQUhJO0FBSWIsUUFBTSxJQUpPO0FBS2IsUUFBTTtBQUxPLEM7Ozs7Ozs7O0FDRGY7a0JBQ2UsSUFBSSxTQUFKLENBQWMsV0FBZCxFQUEyQjtBQUN4QyxRQUFNLGNBQVMsRUFBVCxFQUFhLE9BQWIsRUFBc0I7QUFDMUIsYUFBUyxFQUFULEVBQWE7QUFDWCxpQkFBVyxHQUFHLGFBQUgsQ0FBa0IsUUFBUSxLQUExQjtBQURBLEtBQWIsRUFHQyxTQUhELENBR1c7O0FBRVQsZ0JBQVU7QUFDUixxQkFBYSxVQURMO0FBRVIsaUJBQVMsSUFGRDtBQUdSLHFCQUFhLEVBQUUsS0FBSyxDQUFQLEVBQVUsTUFBTSxDQUFoQixFQUFtQixRQUFRLENBQTNCLEVBQThCLE9BQU8sQ0FBckM7QUFITCxPQUZEOztBQVFULGNBQVE7QUFSQyxLQUhYOztBQWNBLGFBQVMsZ0JBQVQsQ0FBMkIsS0FBM0IsRUFBa0M7QUFDaEMsVUFBSSxTQUFTLE1BQU0sTUFBbkI7QUFBQSxVQUNBLElBQUksQ0FBQyxXQUFXLE9BQU8sWUFBUCxDQUFvQixRQUFwQixDQUFYLEtBQTZDLENBQTlDLElBQW1ELE1BQU0sRUFEN0Q7QUFBQSxVQUVBLElBQUksQ0FBQyxXQUFXLE9BQU8sWUFBUCxDQUFvQixRQUFwQixDQUFYLEtBQTZDLENBQTlDLElBQW1ELE1BQU0sRUFGN0Q7O0FBSUEsYUFBTyxLQUFQLENBQWEsZUFBYixHQUNBLE9BQU8sS0FBUCxDQUFhLFNBQWIsR0FDRSxlQUFlLENBQWYsR0FBbUIsTUFBbkIsR0FBNEIsQ0FBNUIsR0FBZ0MsS0FGbEM7O0FBSUEsYUFBTyxZQUFQLENBQW9CLFFBQXBCLEVBQThCLENBQTlCO0FBQ0EsYUFBTyxZQUFQLENBQW9CLFFBQXBCLEVBQThCLENBQTlCO0FBQ0Q7O0FBRUQsV0FBTyxnQkFBUCxHQUEwQixnQkFBMUI7QUFDRDs7QUE5QnVDLENBQTNCLEM7Ozs7Ozs7O0FDRGY7a0JBQ2UsSUFBSSxTQUFKLENBQWMsU0FBZCxFQUF5QjtBQUN0QyxRQUFNLGNBQVcsRUFBWCxFQUFlLE9BQWYsRUFBeUI7QUFDN0IsVUFBTyxRQUFRLEtBQWYsRUFDQyxJQURELENBQ087QUFBQSxhQUFZLFNBQVMsSUFBVCxFQUFaO0FBQUEsS0FEUCxFQUVDLElBRkQsQ0FFTyxnQkFBUTtBQUNYLFNBQUcsU0FBSCxHQUFlLElBQWY7QUFDSCxLQUpELEVBS0MsS0FMRCxDQUtPLFFBQVEsS0FBUixDQUFjLElBQWQsQ0FBbUIsT0FBbkIsQ0FMUDtBQU1GO0FBUnNDLENBQXpCLEM7Ozs7Ozs7OztrQkNBQSxVQUFVLEtBQVYsRUFBa0I7QUFDL0IsUUFBTSxNQUFOLENBQWEsU0FBYixDQUF1QixNQUF2QixDQUE4QixXQUE5QjtBQUNELEM7Ozs7Ozs7OztrQkNGYyxZQUFXO0FBQ3hCLE1BQUksT0FBTyxJQUFYO0FBQ0EsT0FBSyxLQUFMLENBQVc7QUFDVCxTQUFLLEtBQUssUUFERDtBQUVULFlBQVE7QUFGQyxHQUFYLEVBSUMsSUFKRCxDQUlNLFVBQVMsTUFBVCxFQUFpQjtBQUNyQixTQUFLLE9BQUwsR0FBZSxPQUFPLElBQXRCO0FBQ0QsR0FORCxFQU9DLEtBUEQsQ0FPTyxVQUFTLEtBQVQsRUFBZTtBQUNwQixZQUFRLEdBQVIsQ0FBWSxLQUFaO0FBQ0QsR0FURDtBQVVELEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IGRyYWdnYWJsZSBmcm9tICcuL2RpcmVjdGl2ZXMvZHJhZ2dhYmxlJ1xuaW1wb3J0IGluY2x1ZGUgZnJvbSAnLi9kaXJlY3RpdmVzL2luY2x1ZGUnXG5pbXBvcnQgZGF0YSBmcm9tICcuL2RhdGEnXG5pbXBvcnQgY29tcG9uZW50cyBmcm9tICcuL2NvbXBvbmVudHMnXG5pbXBvcnQgdXBkYXRlIGZyb20gJy4vbWV0aG9kcy91cGRhdGUnXG5pbXBvcnQgdG9nZ2xlIGZyb20gJy4vbWV0aG9kcy90b2dnbGUnXG5cblZ1ZS5wcm90b3R5cGUuJGh0dHAgPSBheGlvc1xuXG5uZXcgVnVlKHtcbiAgZWw6ICcjc3RhZ2UnLFxuXG4gIGRhdGE6IGRhdGEsXG5cbiAgY29tcG9uZW50czogY29tcG9uZW50cyxcblxuICBtZXRob2RzOiB7XG4gICAgdXBkYXRlOiB1cGRhdGUsXG4gICAgdG9nZ2xlOiB0b2dnbGVcbiAgfSxcblxuICBtb3VudGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnVwZGF0ZSgpXG4gIH1cbn0pO1xuIiwiLy8gY29tcG9uZW50c1xuZXhwb3J0IGRlZmF1bHQge1xuICAnd2luZG93Jzoge1xuICAgIHRlbXBsYXRlOiAnI3dpbmRvdycsXG4gICAgcHJvcHM6IFsncG9zdCddXG4gIH1cbn1cbiIsIi8vIGRhdGFcbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YWZpbGU6ICcuLi9kYXRhL2RhdGEuanNvbicsXG4gIG1lc3NhZ2U6ICdoZWxsbycsXG4gIGNvbnRlbnQ6IHt9LFxuICBkcmFnOiB0cnVlLFxuICBvcGVuOiBmYWxzZVxufVxuIiwiLy8gZHJhZ2dhYmxlXG5leHBvcnQgZGVmYXVsdCBWdWUuZGlyZWN0aXZlKCdkcmFnZ2FibGUnLCB7XG4gIGJpbmQ6IGZ1bmN0aW9uKGVsLCBiaW5kaW5nKSB7XG4gICAgaW50ZXJhY3QoZWwsIHtcbiAgICAgIGFsbG93RnJvbTogZWwucXVlcnlTZWxlY3RvciggYmluZGluZy52YWx1ZSApXG4gICAgfSlcbiAgICAuZHJhZ2dhYmxlKHtcblxuICAgICAgcmVzdHJpY3Q6IHtcbiAgICAgICAgcmVzdHJpY3Rpb246ICcjZGVza3RvcCcsXG4gICAgICAgIGVuZE9ubHk6IHRydWUsXG4gICAgICAgIGVsZW1lbnRSZWN0OiB7IHRvcDogMCwgbGVmdDogMCwgYm90dG9tOiAxLCByaWdodDogMSB9XG4gICAgICB9LFxuXG4gICAgICBvbm1vdmU6IGRyYWdNb3ZlTGlzdGVuZXJcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gZHJhZ01vdmVMaXN0ZW5lciAoZXZlbnQpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQsXG4gICAgICB4ID0gKHBhcnNlRmxvYXQodGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS14JykpIHx8IDApICsgZXZlbnQuZHgsXG4gICAgICB5ID0gKHBhcnNlRmxvYXQodGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS15JykpIHx8IDApICsgZXZlbnQuZHk7XG5cbiAgICAgIHRhcmdldC5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPVxuICAgICAgdGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9XG4gICAgICAgICd0cmFuc2xhdGUoJyArIHggKyAncHgsICcgKyB5ICsgJ3B4KSc7XG5cbiAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEteCcsIHgpO1xuICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS15JywgeSk7XG4gICAgfVxuXG4gICAgd2luZG93LmRyYWdNb3ZlTGlzdGVuZXIgPSBkcmFnTW92ZUxpc3RlbmVyO1xuICB9XG5cbn0pXG4iLCIvLyBpbmNsdWRlXG5leHBvcnQgZGVmYXVsdCBWdWUuZGlyZWN0aXZlKCdpbmNsdWRlJywge1xuICBiaW5kOiBmdW5jdGlvbiAoIGVsLCBiaW5kaW5nICkge1xuICAgIGZldGNoKCBiaW5kaW5nLnZhbHVlIClcbiAgICAudGhlbiggcmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpIClcbiAgICAudGhlbiggdGV4dCA9PiB7XG4gICAgICAgIGVsLmlubmVySFRNTCA9IHRleHQ7XG4gICAgfSlcbiAgICAuY2F0Y2goY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUpKTtcbiB9XG59KVxuIiwiLy8gdG9nZ2xlXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKVxufVxuIiwiLy8gdXBkYXRlXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIHRoYXQgPSB0aGlzXG4gIHRoaXMuJGh0dHAoe1xuICAgIHVybDogdGhpcy5kYXRhZmlsZSxcbiAgICBtZXRob2Q6ICdHRVQnXG4gIH0pXG4gIC50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgIHRoYXQuY29udGVudCA9IHJlc3VsdC5kYXRhXG4gIH0pXG4gIC5jYXRjaChmdW5jdGlvbihlcnJvcil7XG4gICAgY29uc29sZS5sb2coZXJyb3IpXG4gIH0pXG59XG4iXX0=
