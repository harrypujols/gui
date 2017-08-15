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

var _breakpoint = require('./methods/breakpoint');

var _breakpoint2 = _interopRequireDefault(_breakpoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.prototype.$http = axios;

new Vue({
  el: '#stage',

  data: _data2.default,

  components: _components2.default,

  methods: {
    update: _update2.default,
    breakpoint: _breakpoint2.default
  },

  mounted: function mounted() {
    this.update();
  }
});

},{"./components":2,"./data":3,"./directives/draggable":4,"./directives/include":5,"./methods/breakpoint":6,"./methods/update":7}],2:[function(require,module,exports){
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
  open: false,
  toggle: false
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

exports.default = function () {
  var breakpoint = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
  return breakpoint;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvaW5kZXguanMiLCJzcmMvanMvZGF0YS9pbmRleC5qcyIsInNyYy9qcy9kaXJlY3RpdmVzL2RyYWdnYWJsZS5qcyIsInNyYy9qcy9kaXJlY3RpdmVzL2luY2x1ZGUuanMiLCJzcmMvanMvbWV0aG9kcy9icmVha3BvaW50LmpzIiwic3JjL2pzL21ldGhvZHMvdXBkYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQUksU0FBSixDQUFjLEtBQWQsR0FBc0IsS0FBdEI7O0FBRUEsSUFBSSxHQUFKLENBQVE7QUFDTixNQUFJLFFBREU7O0FBR04sc0JBSE07O0FBS04sa0NBTE07O0FBT04sV0FBUztBQUNQLDRCQURPO0FBRVA7QUFGTyxHQVBIOztBQVlOLFdBQVMsbUJBQVc7QUFDbEIsU0FBSyxNQUFMO0FBQ0Q7QUFkSyxDQUFSOzs7Ozs7OztBQ1RBO2tCQUNlO0FBQ2IsWUFBVTtBQUNSLGNBQVUsU0FERjtBQUVSLFdBQU8sQ0FBQyxNQUFEO0FBRkM7QUFERyxDOzs7Ozs7OztBQ0RmO2tCQUNlO0FBQ2IsWUFBVSxtQkFERztBQUViLFdBQVMsT0FGSTtBQUdiLFdBQVMsRUFISTtBQUliLFFBQU0sSUFKTztBQUtiLFFBQU0sS0FMTztBQU1iLFVBQVE7QUFOSyxDOzs7Ozs7OztBQ0RmO2tCQUNlLElBQUksU0FBSixDQUFjLFdBQWQsRUFBMkI7QUFDeEMsUUFBTSxjQUFTLEVBQVQsRUFBYSxPQUFiLEVBQXNCO0FBQzFCLGFBQVMsRUFBVCxFQUFhO0FBQ1gsaUJBQVcsR0FBRyxhQUFILENBQWtCLFFBQVEsS0FBMUI7QUFEQSxLQUFiLEVBR0MsU0FIRCxDQUdXOztBQUVULGdCQUFVO0FBQ1IscUJBQWEsVUFETDtBQUVSLGlCQUFTLElBRkQ7QUFHUixxQkFBYSxFQUFFLEtBQUssQ0FBUCxFQUFVLE1BQU0sQ0FBaEIsRUFBbUIsUUFBUSxDQUEzQixFQUE4QixPQUFPLENBQXJDO0FBSEwsT0FGRDs7QUFRVCxjQUFRO0FBUkMsS0FIWDs7QUFjQSxhQUFTLGdCQUFULENBQTJCLEtBQTNCLEVBQWtDO0FBQ2hDLFVBQUksU0FBUyxNQUFNLE1BQW5CO0FBQUEsVUFDQSxJQUFJLENBQUMsV0FBVyxPQUFPLFlBQVAsQ0FBb0IsUUFBcEIsQ0FBWCxLQUE2QyxDQUE5QyxJQUFtRCxNQUFNLEVBRDdEO0FBQUEsVUFFQSxJQUFJLENBQUMsV0FBVyxPQUFPLFlBQVAsQ0FBb0IsUUFBcEIsQ0FBWCxLQUE2QyxDQUE5QyxJQUFtRCxNQUFNLEVBRjdEOztBQUlBLGFBQU8sS0FBUCxDQUFhLGVBQWIsR0FDQSxPQUFPLEtBQVAsQ0FBYSxTQUFiLEdBQ0UsZUFBZSxDQUFmLEdBQW1CLE1BQW5CLEdBQTRCLENBQTVCLEdBQWdDLEtBRmxDOztBQUlBLGFBQU8sWUFBUCxDQUFvQixRQUFwQixFQUE4QixDQUE5QjtBQUNBLGFBQU8sWUFBUCxDQUFvQixRQUFwQixFQUE4QixDQUE5QjtBQUNEOztBQUVELFdBQU8sZ0JBQVAsR0FBMEIsZ0JBQTFCO0FBQ0Q7O0FBOUJ1QyxDQUEzQixDOzs7Ozs7OztBQ0RmO2tCQUNlLElBQUksU0FBSixDQUFjLFNBQWQsRUFBeUI7QUFDdEMsUUFBTSxjQUFXLEVBQVgsRUFBZSxPQUFmLEVBQXlCO0FBQzdCLFVBQU8sUUFBUSxLQUFmLEVBQ0MsSUFERCxDQUNPO0FBQUEsYUFBWSxTQUFTLElBQVQsRUFBWjtBQUFBLEtBRFAsRUFFQyxJQUZELENBRU8sZ0JBQVE7QUFDWCxTQUFHLFNBQUgsR0FBZSxJQUFmO0FBQ0gsS0FKRCxFQUtDLEtBTEQsQ0FLTyxRQUFRLEtBQVIsQ0FBYyxJQUFkLENBQW1CLE9BQW5CLENBTFA7QUFNRjtBQVJzQyxDQUF6QixDOzs7Ozs7Ozs7a0JDQUEsWUFBVztBQUN4QixNQUFJLGFBQWEsT0FBTyxnQkFBUCxDQUF3QixTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBeEIsRUFBd0QsU0FBeEQsRUFBbUUsZ0JBQW5FLENBQW9GLFNBQXBGLEVBQStGLE9BQS9GLENBQXVHLEtBQXZHLEVBQThHLEVBQTlHLENBQWpCO0FBQ0EsU0FBTyxVQUFQO0FBQ0QsQzs7Ozs7Ozs7O2tCQ0hjLFlBQVc7QUFDeEIsTUFBSSxPQUFPLElBQVg7QUFDQSxPQUFLLEtBQUwsQ0FBVztBQUNULFNBQUssS0FBSyxRQUREO0FBRVQsWUFBUTtBQUZDLEdBQVgsRUFJQyxJQUpELENBSU0sVUFBUyxNQUFULEVBQWlCO0FBQ3JCLFNBQUssT0FBTCxHQUFlLE9BQU8sSUFBdEI7QUFDRCxHQU5ELEVBT0MsS0FQRCxDQU9PLFVBQVMsS0FBVCxFQUFlO0FBQ3BCLFlBQVEsR0FBUixDQUFZLEtBQVo7QUFDRCxHQVREO0FBVUQsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgZHJhZ2dhYmxlIGZyb20gJy4vZGlyZWN0aXZlcy9kcmFnZ2FibGUnXG5pbXBvcnQgaW5jbHVkZSBmcm9tICcuL2RpcmVjdGl2ZXMvaW5jbHVkZSdcbmltcG9ydCBkYXRhIGZyb20gJy4vZGF0YSdcbmltcG9ydCBjb21wb25lbnRzIGZyb20gJy4vY29tcG9uZW50cydcbmltcG9ydCB1cGRhdGUgZnJvbSAnLi9tZXRob2RzL3VwZGF0ZSdcbmltcG9ydCBicmVha3BvaW50IGZyb20gJy4vbWV0aG9kcy9icmVha3BvaW50J1xuXG5WdWUucHJvdG90eXBlLiRodHRwID0gYXhpb3NcblxubmV3IFZ1ZSh7XG4gIGVsOiAnI3N0YWdlJyxcblxuICBkYXRhOiBkYXRhLFxuXG4gIGNvbXBvbmVudHM6IGNvbXBvbmVudHMsXG5cbiAgbWV0aG9kczoge1xuICAgIHVwZGF0ZTogdXBkYXRlLFxuICAgIGJyZWFrcG9pbnQ6IGJyZWFrcG9pbnRcbiAgfSxcblxuICBtb3VudGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnVwZGF0ZSgpXG4gIH1cbn0pO1xuIiwiLy8gY29tcG9uZW50c1xuZXhwb3J0IGRlZmF1bHQge1xuICAnd2luZG93Jzoge1xuICAgIHRlbXBsYXRlOiAnI3dpbmRvdycsXG4gICAgcHJvcHM6IFsncG9zdCddXG4gIH1cbn1cbiIsIi8vIGRhdGFcbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YWZpbGU6ICcuLi9kYXRhL2RhdGEuanNvbicsXG4gIG1lc3NhZ2U6ICdoZWxsbycsXG4gIGNvbnRlbnQ6IHt9LFxuICBkcmFnOiB0cnVlLFxuICBvcGVuOiBmYWxzZSxcbiAgdG9nZ2xlOiBmYWxzZVxufVxuIiwiLy8gZHJhZ2dhYmxlXG5leHBvcnQgZGVmYXVsdCBWdWUuZGlyZWN0aXZlKCdkcmFnZ2FibGUnLCB7XG4gIGJpbmQ6IGZ1bmN0aW9uKGVsLCBiaW5kaW5nKSB7XG4gICAgaW50ZXJhY3QoZWwsIHtcbiAgICAgIGFsbG93RnJvbTogZWwucXVlcnlTZWxlY3RvciggYmluZGluZy52YWx1ZSApXG4gICAgfSlcbiAgICAuZHJhZ2dhYmxlKHtcblxuICAgICAgcmVzdHJpY3Q6IHtcbiAgICAgICAgcmVzdHJpY3Rpb246ICcjZGVza3RvcCcsXG4gICAgICAgIGVuZE9ubHk6IHRydWUsXG4gICAgICAgIGVsZW1lbnRSZWN0OiB7IHRvcDogMCwgbGVmdDogMCwgYm90dG9tOiAxLCByaWdodDogMSB9XG4gICAgICB9LFxuXG4gICAgICBvbm1vdmU6IGRyYWdNb3ZlTGlzdGVuZXJcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gZHJhZ01vdmVMaXN0ZW5lciAoZXZlbnQpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQsXG4gICAgICB4ID0gKHBhcnNlRmxvYXQodGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS14JykpIHx8IDApICsgZXZlbnQuZHgsXG4gICAgICB5ID0gKHBhcnNlRmxvYXQodGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS15JykpIHx8IDApICsgZXZlbnQuZHk7XG5cbiAgICAgIHRhcmdldC5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPVxuICAgICAgdGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9XG4gICAgICAgICd0cmFuc2xhdGUoJyArIHggKyAncHgsICcgKyB5ICsgJ3B4KSc7XG5cbiAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEteCcsIHgpO1xuICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS15JywgeSk7XG4gICAgfVxuXG4gICAgd2luZG93LmRyYWdNb3ZlTGlzdGVuZXIgPSBkcmFnTW92ZUxpc3RlbmVyO1xuICB9XG5cbn0pXG4iLCIvLyBpbmNsdWRlXG5leHBvcnQgZGVmYXVsdCBWdWUuZGlyZWN0aXZlKCdpbmNsdWRlJywge1xuICBiaW5kOiBmdW5jdGlvbiAoIGVsLCBiaW5kaW5nICkge1xuICAgIGZldGNoKCBiaW5kaW5nLnZhbHVlIClcbiAgICAudGhlbiggcmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpIClcbiAgICAudGhlbiggdGV4dCA9PiB7XG4gICAgICAgIGVsLmlubmVySFRNTCA9IHRleHQ7XG4gICAgfSlcbiAgICAuY2F0Y2goY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUpKTtcbiB9XG59KVxuIiwiLy8gYnJlYWtwb2ludFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBicmVha3BvaW50ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLCAnOmJlZm9yZScpLmdldFByb3BlcnR5VmFsdWUoJ2NvbnRlbnQnKS5yZXBsYWNlKC9cXFwiL2csICcnKTtcbiAgcmV0dXJuIGJyZWFrcG9pbnQ7XG59XG4iLCIvLyB1cGRhdGVcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgdGhhdCA9IHRoaXNcbiAgdGhpcy4kaHR0cCh7XG4gICAgdXJsOiB0aGlzLmRhdGFmaWxlLFxuICAgIG1ldGhvZDogJ0dFVCdcbiAgfSlcbiAgLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgdGhhdC5jb250ZW50ID0gcmVzdWx0LmRhdGFcbiAgfSlcbiAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKXtcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgfSlcbn1cbiJdfQ==
