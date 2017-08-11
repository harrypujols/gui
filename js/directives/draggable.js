// draggable
export default Vue.directive('draggable', {
  bind: function(el) {
    var drag = el.drag

    el.onmousedown = function(e) {
      drag = true
      el.classList.add('dragging')
    },

    el.onmousemove = function(e) {
      var w = el.offsetWidth / 2
      var h = el.offsetHeight / 2
      if ( drag === true ) {
        var x = e.clientX - w
        var y = e.clientY - h
        var pos = 'position:absolute; left:' + x + 'px; top:' + y + 'px;'
        el.setAttribute('style', pos)
      }
    },

    el.onmouseleave = function() {
      drag = false;
      el.classList.remove('dragging')
    }
  }
})
