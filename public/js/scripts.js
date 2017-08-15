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

var _clear = require('./methods/clear');

var _clear2 = _interopRequireDefault(_clear);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.prototype.$http = axios;

new Vue({
  el: '#stage',

  data: _data2.default,

  components: _components2.default,

  methods: {
    update: _update2.default,
    toggle: _toggle2.default,
    clear: _clear2.default
  },

  mounted: function mounted() {
    this.update();
  }
});

},{"./components":2,"./data":3,"./directives/draggable":4,"./directives/include":5,"./methods/clear":6,"./methods/toggle":7,"./methods/update":8}],2:[function(require,module,exports){
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
  event.target.classList.remove('is-active');
};

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (event) {
  event.target.classList.toggle('is-active');
};

},{}],8:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvaW5kZXguanMiLCJzcmMvanMvZGF0YS9pbmRleC5qcyIsInNyYy9qcy9kaXJlY3RpdmVzL2RyYWdnYWJsZS5qcyIsInNyYy9qcy9kaXJlY3RpdmVzL2luY2x1ZGUuanMiLCJzcmMvanMvbWV0aG9kcy9jbGVhci5qcyIsInNyYy9qcy9tZXRob2RzL3RvZ2dsZS5qcyIsInNyYy9qcy9tZXRob2RzL3VwZGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQUksU0FBSixDQUFjLEtBQWQsR0FBc0IsS0FBdEI7O0FBRUEsSUFBSSxHQUFKLENBQVE7QUFDTixNQUFJLFFBREU7O0FBR04sc0JBSE07O0FBS04sa0NBTE07O0FBT04sV0FBUztBQUNQLDRCQURPO0FBRVAsNEJBRk87QUFHUDtBQUhPLEdBUEg7O0FBYU4sV0FBUyxtQkFBVztBQUNsQixTQUFLLE1BQUw7QUFDRDtBQWZLLENBQVI7Ozs7Ozs7O0FDVkE7a0JBQ2U7QUFDYixZQUFVO0FBQ1IsY0FBVSxTQURGO0FBRVIsV0FBTyxDQUFDLE1BQUQ7QUFGQztBQURHLEM7Ozs7Ozs7O0FDRGY7a0JBQ2U7QUFDYixZQUFVLG1CQURHO0FBRWIsV0FBUyxPQUZJO0FBR2IsV0FBUyxFQUhJO0FBSWIsUUFBTSxJQUpPO0FBS2IsUUFBTTtBQUxPLEM7Ozs7Ozs7O0FDRGY7a0JBQ2UsSUFBSSxTQUFKLENBQWMsV0FBZCxFQUEyQjtBQUN4QyxRQUFNLGNBQVMsRUFBVCxFQUFhLE9BQWIsRUFBc0I7QUFDMUIsYUFBUyxFQUFULEVBQWE7QUFDWCxpQkFBVyxHQUFHLGFBQUgsQ0FBa0IsUUFBUSxLQUExQjtBQURBLEtBQWIsRUFHQyxTQUhELENBR1c7O0FBRVQsZ0JBQVU7QUFDUixxQkFBYSxVQURMO0FBRVIsaUJBQVMsSUFGRDtBQUdSLHFCQUFhLEVBQUUsS0FBSyxDQUFQLEVBQVUsTUFBTSxDQUFoQixFQUFtQixRQUFRLENBQTNCLEVBQThCLE9BQU8sQ0FBckM7QUFITCxPQUZEOztBQVFULGNBQVE7QUFSQyxLQUhYOztBQWNBLGFBQVMsZ0JBQVQsQ0FBMkIsS0FBM0IsRUFBa0M7QUFDaEMsVUFBSSxTQUFTLE1BQU0sTUFBbkI7QUFBQSxVQUNBLElBQUksQ0FBQyxXQUFXLE9BQU8sWUFBUCxDQUFvQixRQUFwQixDQUFYLEtBQTZDLENBQTlDLElBQW1ELE1BQU0sRUFEN0Q7QUFBQSxVQUVBLElBQUksQ0FBQyxXQUFXLE9BQU8sWUFBUCxDQUFvQixRQUFwQixDQUFYLEtBQTZDLENBQTlDLElBQW1ELE1BQU0sRUFGN0Q7O0FBSUEsYUFBTyxLQUFQLENBQWEsZUFBYixHQUNBLE9BQU8sS0FBUCxDQUFhLFNBQWIsR0FDRSxlQUFlLENBQWYsR0FBbUIsTUFBbkIsR0FBNEIsQ0FBNUIsR0FBZ0MsS0FGbEM7O0FBSUEsYUFBTyxZQUFQLENBQW9CLFFBQXBCLEVBQThCLENBQTlCO0FBQ0EsYUFBTyxZQUFQLENBQW9CLFFBQXBCLEVBQThCLENBQTlCO0FBQ0Q7O0FBRUQsV0FBTyxnQkFBUCxHQUEwQixnQkFBMUI7QUFDRDs7QUE5QnVDLENBQTNCLEM7Ozs7Ozs7O0FDRGY7a0JBQ2UsSUFBSSxTQUFKLENBQWMsU0FBZCxFQUF5QjtBQUN0QyxRQUFNLGNBQVcsRUFBWCxFQUFlLE9BQWYsRUFBeUI7QUFDN0IsVUFBTyxRQUFRLEtBQWYsRUFDQyxJQURELENBQ087QUFBQSxhQUFZLFNBQVMsSUFBVCxFQUFaO0FBQUEsS0FEUCxFQUVDLElBRkQsQ0FFTyxnQkFBUTtBQUNYLFNBQUcsU0FBSCxHQUFlLElBQWY7QUFDSCxLQUpELEVBS0MsS0FMRCxDQUtPLFFBQVEsS0FBUixDQUFjLElBQWQsQ0FBbUIsT0FBbkIsQ0FMUDtBQU1GO0FBUnNDLENBQXpCLEM7Ozs7Ozs7OztrQkNBQSxVQUFVLEtBQVYsRUFBa0I7QUFDL0IsUUFBTSxNQUFOLENBQWEsU0FBYixDQUF1QixNQUF2QixDQUE4QixXQUE5QjtBQUNELEM7Ozs7Ozs7OztrQkNGYyxVQUFVLEtBQVYsRUFBa0I7QUFDL0IsUUFBTSxNQUFOLENBQWEsU0FBYixDQUF1QixNQUF2QixDQUE4QixXQUE5QjtBQUNELEM7Ozs7Ozs7OztrQkNGYyxZQUFXO0FBQ3hCLE1BQUksT0FBTyxJQUFYO0FBQ0EsT0FBSyxLQUFMLENBQVc7QUFDVCxTQUFLLEtBQUssUUFERDtBQUVULFlBQVE7QUFGQyxHQUFYLEVBSUMsSUFKRCxDQUlNLFVBQVMsTUFBVCxFQUFpQjtBQUNyQixTQUFLLE9BQUwsR0FBZSxPQUFPLElBQXRCO0FBQ0QsR0FORCxFQU9DLEtBUEQsQ0FPTyxVQUFTLEtBQVQsRUFBZTtBQUNwQixZQUFRLEdBQVIsQ0FBWSxLQUFaO0FBQ0QsR0FURDtBQVVELEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IGRyYWdnYWJsZSBmcm9tICcuL2RpcmVjdGl2ZXMvZHJhZ2dhYmxlJ1xuaW1wb3J0IGluY2x1ZGUgZnJvbSAnLi9kaXJlY3RpdmVzL2luY2x1ZGUnXG5pbXBvcnQgZGF0YSBmcm9tICcuL2RhdGEnXG5pbXBvcnQgY29tcG9uZW50cyBmcm9tICcuL2NvbXBvbmVudHMnXG5pbXBvcnQgdXBkYXRlIGZyb20gJy4vbWV0aG9kcy91cGRhdGUnXG5pbXBvcnQgdG9nZ2xlIGZyb20gJy4vbWV0aG9kcy90b2dnbGUnXG5pbXBvcnQgY2xlYXIgZnJvbSAnLi9tZXRob2RzL2NsZWFyJ1xuXG5WdWUucHJvdG90eXBlLiRodHRwID0gYXhpb3NcblxubmV3IFZ1ZSh7XG4gIGVsOiAnI3N0YWdlJyxcblxuICBkYXRhOiBkYXRhLFxuXG4gIGNvbXBvbmVudHM6IGNvbXBvbmVudHMsXG5cbiAgbWV0aG9kczoge1xuICAgIHVwZGF0ZTogdXBkYXRlLFxuICAgIHRvZ2dsZTogdG9nZ2xlLFxuICAgIGNsZWFyOiBjbGVhclxuICB9LFxuXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMudXBkYXRlKClcbiAgfVxufSk7XG4iLCIvLyBjb21wb25lbnRzXG5leHBvcnQgZGVmYXVsdCB7XG4gICd3aW5kb3cnOiB7XG4gICAgdGVtcGxhdGU6ICcjd2luZG93JyxcbiAgICBwcm9wczogWydwb3N0J11cbiAgfVxufVxuIiwiLy8gZGF0YVxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhZmlsZTogJy4uL2RhdGEvZGF0YS5qc29uJyxcbiAgbWVzc2FnZTogJ2hlbGxvJyxcbiAgY29udGVudDoge30sXG4gIGRyYWc6IHRydWUsXG4gIG9wZW46IGZhbHNlXG59XG4iLCIvLyBkcmFnZ2FibGVcbmV4cG9ydCBkZWZhdWx0IFZ1ZS5kaXJlY3RpdmUoJ2RyYWdnYWJsZScsIHtcbiAgYmluZDogZnVuY3Rpb24oZWwsIGJpbmRpbmcpIHtcbiAgICBpbnRlcmFjdChlbCwge1xuICAgICAgYWxsb3dGcm9tOiBlbC5xdWVyeVNlbGVjdG9yKCBiaW5kaW5nLnZhbHVlIClcbiAgICB9KVxuICAgIC5kcmFnZ2FibGUoe1xuXG4gICAgICByZXN0cmljdDoge1xuICAgICAgICByZXN0cmljdGlvbjogJyNkZXNrdG9wJyxcbiAgICAgICAgZW5kT25seTogdHJ1ZSxcbiAgICAgICAgZWxlbWVudFJlY3Q6IHsgdG9wOiAwLCBsZWZ0OiAwLCBib3R0b206IDEsIHJpZ2h0OiAxIH1cbiAgICAgIH0sXG5cbiAgICAgIG9ubW92ZTogZHJhZ01vdmVMaXN0ZW5lclxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBkcmFnTW92ZUxpc3RlbmVyIChldmVudCkge1xuICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldCxcbiAgICAgIHggPSAocGFyc2VGbG9hdCh0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXgnKSkgfHwgMCkgKyBldmVudC5keCxcbiAgICAgIHkgPSAocGFyc2VGbG9hdCh0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXknKSkgfHwgMCkgKyBldmVudC5keTtcblxuICAgICAgdGFyZ2V0LnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9XG4gICAgICB0YXJnZXQuc3R5bGUudHJhbnNmb3JtID1cbiAgICAgICAgJ3RyYW5zbGF0ZSgnICsgeCArICdweCwgJyArIHkgKyAncHgpJztcblxuICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS14JywgeCk7XG4gICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdkYXRhLXknLCB5KTtcbiAgICB9XG5cbiAgICB3aW5kb3cuZHJhZ01vdmVMaXN0ZW5lciA9IGRyYWdNb3ZlTGlzdGVuZXI7XG4gIH1cblxufSlcbiIsIi8vIGluY2x1ZGVcbmV4cG9ydCBkZWZhdWx0IFZ1ZS5kaXJlY3RpdmUoJ2luY2x1ZGUnLCB7XG4gIGJpbmQ6IGZ1bmN0aW9uICggZWwsIGJpbmRpbmcgKSB7XG4gICAgZmV0Y2goIGJpbmRpbmcudmFsdWUgKVxuICAgIC50aGVuKCByZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkgKVxuICAgIC50aGVuKCB0ZXh0ID0+IHtcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gdGV4dDtcbiAgICB9KVxuICAgIC5jYXRjaChjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSkpO1xuIH1cbn0pXG4iLCIvLyB0b2dnbGVcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpXG59XG4iLCIvLyB0b2dnbGVcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpXG59XG4iLCIvLyB1cGRhdGVcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgdGhhdCA9IHRoaXNcbiAgdGhpcy4kaHR0cCh7XG4gICAgdXJsOiB0aGlzLmRhdGFmaWxlLFxuICAgIG1ldGhvZDogJ0dFVCdcbiAgfSlcbiAgLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgdGhhdC5jb250ZW50ID0gcmVzdWx0LmRhdGFcbiAgfSlcbiAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKXtcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgfSlcbn1cbiJdfQ==
