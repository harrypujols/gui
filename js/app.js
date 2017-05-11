(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

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
  },

  directives: {
    draggable: {
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
    },

    include: {
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
    }
  }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxHQUFKLENBQVE7QUFDTixNQUFJLFVBREU7O0FBR04sUUFBTTtBQUNKLGFBQVMsYUFETDtBQUVKLFVBQU07QUFGRixHQUhBOztBQVFOLGNBQVk7QUFDVixjQUFVO0FBQ1IsZ0JBQVU7QUFERjtBQURBLEdBUk47O0FBY04sY0FBWTtBQUNWLGVBQVc7QUFDVCxZQUFNLGNBQVMsRUFBVCxFQUFhO0FBQ2pCLFlBQUksT0FBTyxHQUFHLElBQWQ7O0FBRUEsV0FBRyxXQUFILEdBQWlCLFVBQVMsQ0FBVCxFQUFZO0FBQzNCLGlCQUFPLElBQVA7QUFDQSxhQUFHLFNBQUgsQ0FBYSxHQUFiLENBQWlCLFVBQWpCO0FBQ0QsU0FIRCxFQUtBLEdBQUcsV0FBSCxHQUFpQixVQUFTLENBQVQsRUFBWTtBQUMzQixjQUFJLElBQUksR0FBRyxXQUFILEdBQWlCLENBQXpCO0FBQ0EsY0FBSSxJQUFJLEdBQUcsWUFBSCxHQUFrQixDQUExQjtBQUNBLGNBQUssU0FBUyxJQUFkLEVBQXFCO0FBQ25CLGdCQUFJLElBQUksRUFBRSxPQUFGLEdBQVksQ0FBcEI7QUFDQSxnQkFBSSxJQUFJLEVBQUUsT0FBRixHQUFZLENBQXBCO0FBQ0EsZ0JBQUksTUFBTSw2QkFBNkIsQ0FBN0IsR0FBaUMsVUFBakMsR0FBOEMsQ0FBOUMsR0FBa0QsS0FBNUQ7QUFDQSxlQUFHLFlBQUgsQ0FBZ0IsT0FBaEIsRUFBeUIsR0FBekI7QUFDRDtBQUNGLFNBZEQsRUFnQkEsR0FBRyxTQUFILEdBQWUsWUFBVztBQUN4QixpQkFBTyxLQUFQO0FBQ0EsYUFBRyxTQUFILENBQWEsTUFBYixDQUFvQixVQUFwQjtBQUNELFNBbkJEO0FBb0JEO0FBeEJRLEtBREQ7O0FBNEJWLGFBQVM7QUFDUCxZQUFNLGNBQVUsRUFBVixFQUFjLE9BQWQsRUFBdUI7QUFDM0IsWUFBSSxNQUFNLFFBQVEsS0FBbEI7QUFDQSxZQUFJLFVBQVUsSUFBSSxjQUFKLEVBQWQ7QUFDQSxnQkFBUSxJQUFSLENBQWEsS0FBYixFQUFvQixHQUFwQixFQUF5QixJQUF6QjtBQUNBLGdCQUFRLGtCQUFSLEdBQTZCLFlBQVc7QUFDdEMsY0FBSSxLQUFLLFVBQUwsS0FBb0IsQ0FBeEIsRUFBMkI7QUFDM0IsY0FBSSxLQUFLLE1BQUwsS0FBZ0IsR0FBcEIsRUFBeUI7QUFDekIsYUFBRyxTQUFILEdBQWUsS0FBSyxZQUFwQjtBQUNELFNBSkQ7QUFLQSxnQkFBUSxJQUFSO0FBQ0Y7QUFYTztBQTVCQztBQWROLENBQVIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibmV3IFZ1ZSh7XG4gIGVsOiAnI2Rlc2t0b3AnLFxuXG4gIGRhdGE6IHtcbiAgICBtZXNzYWdlOiAnSGVsbG8gV29ybGQnLFxuICAgIGRyYWc6IHRydWVcbiAgfSxcblxuICBjb21wb25lbnRzOiB7XG4gICAgJ3dpbmRvdyc6IHtcbiAgICAgIHRlbXBsYXRlOiAnI3dpbmRvdydcbiAgICB9XG4gIH0sXG5cbiAgZGlyZWN0aXZlczoge1xuICAgIGRyYWdnYWJsZToge1xuICAgICAgYmluZDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgdmFyIGRyYWcgPSBlbC5kcmFnXG5cbiAgICAgICAgZWwub25tb3VzZWRvd24gPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgZHJhZyA9IHRydWVcbiAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpXG4gICAgICAgIH0sXG5cbiAgICAgICAgZWwub25tb3VzZW1vdmUgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgdmFyIHcgPSBlbC5vZmZzZXRXaWR0aCAvIDJcbiAgICAgICAgICB2YXIgaCA9IGVsLm9mZnNldEhlaWdodCAvIDJcbiAgICAgICAgICBpZiAoIGRyYWcgPT09IHRydWUgKSB7XG4gICAgICAgICAgICB2YXIgeCA9IGUuY2xpZW50WCAtIHdcbiAgICAgICAgICAgIHZhciB5ID0gZS5jbGllbnRZIC0gaFxuICAgICAgICAgICAgdmFyIHBvcyA9ICdwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDonICsgeCArICdweDsgdG9wOicgKyB5ICsgJ3B4OydcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBwb3MpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGVsLm9ubW91c2V1cCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGRyYWcgPSBmYWxzZTtcbiAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaW5jbHVkZToge1xuICAgICAgYmluZDogZnVuY3Rpb24gKGVsLCBiaW5kaW5nKSB7XG4gICAgICAgIHZhciB1cmwgPSBiaW5kaW5nLnZhbHVlXG4gICAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcbiAgICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCB1cmwsIHRydWUpXG4gICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuXG4gICAgICAgICAgaWYgKHRoaXMuc3RhdHVzICE9PSAyMDApIHJldHVyblxuICAgICAgICAgIGVsLmlubmVySFRNTCA9IHRoaXMucmVzcG9uc2VUZXh0XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdC5zZW5kKCk7XG4gICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuIl19
