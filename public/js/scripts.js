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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.prototype.$http = axios;

new Vue({
  el: '#stage',

  data: _data2.default,

  components: _components2.default,

  methods: {
    update: _update2.default
  },

  mounted: function mounted() {
    this.update();
  }
});

},{"./components":2,"./data":3,"./directives/draggable":4,"./directives/include":5,"./methods/update":6}],2:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvaW5kZXguanMiLCJzcmMvanMvZGF0YS9pbmRleC5qcyIsInNyYy9qcy9kaXJlY3RpdmVzL2RyYWdnYWJsZS5qcyIsInNyYy9qcy9kaXJlY3RpdmVzL2luY2x1ZGUuanMiLCJzcmMvanMvbWV0aG9kcy91cGRhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQUksU0FBSixDQUFjLEtBQWQsR0FBc0IsS0FBdEI7O0FBRUEsSUFBSSxHQUFKLENBQVE7QUFDTixNQUFJLFFBREU7O0FBR04sc0JBSE07O0FBS04sa0NBTE07O0FBT04sV0FBUztBQUNQO0FBRE8sR0FQSDs7QUFXTixXQUFTLG1CQUFXO0FBQ2xCLFNBQUssTUFBTDtBQUNEO0FBYkssQ0FBUjs7Ozs7Ozs7QUNSQTtrQkFDZTtBQUNiLFlBQVU7QUFDUixjQUFVLFNBREY7QUFFUixXQUFPLENBQUMsTUFBRDtBQUZDO0FBREcsQzs7Ozs7Ozs7QUNEZjtrQkFDZTtBQUNiLFlBQVUsbUJBREc7QUFFYixXQUFTLE9BRkk7QUFHYixXQUFTLEVBSEk7QUFJYixRQUFNLElBSk87QUFLYixRQUFNLEtBTE87QUFNYixVQUFRO0FBTkssQzs7Ozs7Ozs7QUNEZjtrQkFDZSxJQUFJLFNBQUosQ0FBYyxXQUFkLEVBQTJCO0FBQ3hDLFFBQU0sY0FBUyxFQUFULEVBQWEsT0FBYixFQUFzQjtBQUMxQixhQUFTLEVBQVQsRUFBYTtBQUNYLGlCQUFXLEdBQUcsYUFBSCxDQUFrQixRQUFRLEtBQTFCO0FBREEsS0FBYixFQUdDLFNBSEQsQ0FHVzs7QUFFVCxnQkFBVTtBQUNSLHFCQUFhLFVBREw7QUFFUixpQkFBUyxJQUZEO0FBR1IscUJBQWEsRUFBRSxLQUFLLENBQVAsRUFBVSxNQUFNLENBQWhCLEVBQW1CLFFBQVEsQ0FBM0IsRUFBOEIsT0FBTyxDQUFyQztBQUhMLE9BRkQ7O0FBUVQsY0FBUTtBQVJDLEtBSFg7O0FBY0EsYUFBUyxnQkFBVCxDQUEyQixLQUEzQixFQUFrQztBQUNoQyxVQUFJLFNBQVMsTUFBTSxNQUFuQjtBQUFBLFVBQ0EsSUFBSSxDQUFDLFdBQVcsT0FBTyxZQUFQLENBQW9CLFFBQXBCLENBQVgsS0FBNkMsQ0FBOUMsSUFBbUQsTUFBTSxFQUQ3RDtBQUFBLFVBRUEsSUFBSSxDQUFDLFdBQVcsT0FBTyxZQUFQLENBQW9CLFFBQXBCLENBQVgsS0FBNkMsQ0FBOUMsSUFBbUQsTUFBTSxFQUY3RDs7QUFJQSxhQUFPLEtBQVAsQ0FBYSxlQUFiLEdBQ0EsT0FBTyxLQUFQLENBQWEsU0FBYixHQUNFLGVBQWUsQ0FBZixHQUFtQixNQUFuQixHQUE0QixDQUE1QixHQUFnQyxLQUZsQzs7QUFJQSxhQUFPLFlBQVAsQ0FBb0IsUUFBcEIsRUFBOEIsQ0FBOUI7QUFDQSxhQUFPLFlBQVAsQ0FBb0IsUUFBcEIsRUFBOEIsQ0FBOUI7QUFDRDs7QUFFRCxXQUFPLGdCQUFQLEdBQTBCLGdCQUExQjtBQUNEOztBQTlCdUMsQ0FBM0IsQzs7Ozs7Ozs7QUNEZjtrQkFDZSxJQUFJLFNBQUosQ0FBYyxTQUFkLEVBQXlCO0FBQ3RDLFFBQU0sY0FBVyxFQUFYLEVBQWUsT0FBZixFQUF5QjtBQUM3QixVQUFPLFFBQVEsS0FBZixFQUNDLElBREQsQ0FDTztBQUFBLGFBQVksU0FBUyxJQUFULEVBQVo7QUFBQSxLQURQLEVBRUMsSUFGRCxDQUVPLGdCQUFRO0FBQ1gsU0FBRyxTQUFILEdBQWUsSUFBZjtBQUNILEtBSkQsRUFLQyxLQUxELENBS08sUUFBUSxLQUFSLENBQWMsSUFBZCxDQUFtQixPQUFuQixDQUxQO0FBTUY7QUFSc0MsQ0FBekIsQzs7Ozs7Ozs7O2tCQ0FBLFlBQVc7QUFDeEIsTUFBSSxPQUFPLElBQVg7QUFDQSxPQUFLLEtBQUwsQ0FBVztBQUNULFNBQUssS0FBSyxRQUREO0FBRVQsWUFBUTtBQUZDLEdBQVgsRUFJQyxJQUpELENBSU0sVUFBUyxNQUFULEVBQWlCO0FBQ3JCLFNBQUssT0FBTCxHQUFlLE9BQU8sSUFBdEI7QUFDRCxHQU5ELEVBT0MsS0FQRCxDQU9PLFVBQVMsS0FBVCxFQUFlO0FBQ3BCLFlBQVEsR0FBUixDQUFZLEtBQVo7QUFDRCxHQVREO0FBVUQsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgZHJhZ2dhYmxlIGZyb20gJy4vZGlyZWN0aXZlcy9kcmFnZ2FibGUnXG5pbXBvcnQgaW5jbHVkZSBmcm9tICcuL2RpcmVjdGl2ZXMvaW5jbHVkZSdcbmltcG9ydCBkYXRhIGZyb20gJy4vZGF0YSdcbmltcG9ydCBjb21wb25lbnRzIGZyb20gJy4vY29tcG9uZW50cydcbmltcG9ydCB1cGRhdGUgZnJvbSAnLi9tZXRob2RzL3VwZGF0ZSdcblxuVnVlLnByb3RvdHlwZS4kaHR0cCA9IGF4aW9zXG5cbm5ldyBWdWUoe1xuICBlbDogJyNzdGFnZScsXG5cbiAgZGF0YTogZGF0YSxcblxuICBjb21wb25lbnRzOiBjb21wb25lbnRzLFxuXG4gIG1ldGhvZHM6IHtcbiAgICB1cGRhdGU6IHVwZGF0ZVxuICB9LFxuXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMudXBkYXRlKClcbiAgfVxufSk7XG4iLCIvLyBjb21wb25lbnRzXG5leHBvcnQgZGVmYXVsdCB7XG4gICd3aW5kb3cnOiB7XG4gICAgdGVtcGxhdGU6ICcjd2luZG93JyxcbiAgICBwcm9wczogWydwb3N0J11cbiAgfVxufVxuIiwiLy8gZGF0YVxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhZmlsZTogJy4uL2RhdGEvZGF0YS5qc29uJyxcbiAgbWVzc2FnZTogJ2hlbGxvJyxcbiAgY29udGVudDoge30sXG4gIGRyYWc6IHRydWUsXG4gIG9wZW46IGZhbHNlLFxuICB0b2dnbGU6IGZhbHNlXG59XG4iLCIvLyBkcmFnZ2FibGVcbmV4cG9ydCBkZWZhdWx0IFZ1ZS5kaXJlY3RpdmUoJ2RyYWdnYWJsZScsIHtcbiAgYmluZDogZnVuY3Rpb24oZWwsIGJpbmRpbmcpIHtcbiAgICBpbnRlcmFjdChlbCwge1xuICAgICAgYWxsb3dGcm9tOiBlbC5xdWVyeVNlbGVjdG9yKCBiaW5kaW5nLnZhbHVlIClcbiAgICB9KVxuICAgIC5kcmFnZ2FibGUoe1xuXG4gICAgICByZXN0cmljdDoge1xuICAgICAgICByZXN0cmljdGlvbjogJyNkZXNrdG9wJyxcbiAgICAgICAgZW5kT25seTogdHJ1ZSxcbiAgICAgICAgZWxlbWVudFJlY3Q6IHsgdG9wOiAwLCBsZWZ0OiAwLCBib3R0b206IDEsIHJpZ2h0OiAxIH1cbiAgICAgIH0sXG5cbiAgICAgIG9ubW92ZTogZHJhZ01vdmVMaXN0ZW5lclxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBkcmFnTW92ZUxpc3RlbmVyIChldmVudCkge1xuICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldCxcbiAgICAgIHggPSAocGFyc2VGbG9hdCh0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXgnKSkgfHwgMCkgKyBldmVudC5keCxcbiAgICAgIHkgPSAocGFyc2VGbG9hdCh0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXknKSkgfHwgMCkgKyBldmVudC5keTtcblxuICAgICAgdGFyZ2V0LnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9XG4gICAgICB0YXJnZXQuc3R5bGUudHJhbnNmb3JtID1cbiAgICAgICAgJ3RyYW5zbGF0ZSgnICsgeCArICdweCwgJyArIHkgKyAncHgpJztcblxuICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS14JywgeCk7XG4gICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdkYXRhLXknLCB5KTtcbiAgICB9XG5cbiAgICB3aW5kb3cuZHJhZ01vdmVMaXN0ZW5lciA9IGRyYWdNb3ZlTGlzdGVuZXI7XG4gIH1cblxufSlcbiIsIi8vIGluY2x1ZGVcbmV4cG9ydCBkZWZhdWx0IFZ1ZS5kaXJlY3RpdmUoJ2luY2x1ZGUnLCB7XG4gIGJpbmQ6IGZ1bmN0aW9uICggZWwsIGJpbmRpbmcgKSB7XG4gICAgZmV0Y2goIGJpbmRpbmcudmFsdWUgKVxuICAgIC50aGVuKCByZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkgKVxuICAgIC50aGVuKCB0ZXh0ID0+IHtcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gdGV4dDtcbiAgICB9KVxuICAgIC5jYXRjaChjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSkpO1xuIH1cbn0pXG4iLCIvLyB1cGRhdGVcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgdGhhdCA9IHRoaXNcbiAgdGhpcy4kaHR0cCh7XG4gICAgdXJsOiB0aGlzLmRhdGFmaWxlLFxuICAgIG1ldGhvZDogJ0dFVCdcbiAgfSlcbiAgLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgdGhhdC5jb250ZW50ID0gcmVzdWx0LmRhdGFcbiAgfSlcbiAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKXtcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgfSlcbn1cbiJdfQ==
