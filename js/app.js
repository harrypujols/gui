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
      bind: function(el) {
        var drag = this.drag

        el.onmousedown = function(e) {
          drag = true
          this.classList.add('dragging')
        },

        el.onmousemove = function(e) {
          var w = this.offsetWidth / 2
          var h = this.offsetHeight / 2
          if ( drag === true ) {
            var x = e.clientX - w
            var y = e.clientY - h
            var pos = 'position:absolute; left:' + x + 'px; top:' + y + 'px;'
            this.setAttribute('style', pos)
          }
        },

        el.onmouseup = function() {
          drag = false;
          this.classList.remove('dragging')
        }
      }
    },

    include: {
      bind: function (el, binding) {
        var url = 'img/' + binding.expression + '.svg'
        var request = new XMLHttpRequest()
        request.open('GET', url, true)
        request.onreadystatechange = function() {
          if (this.readyState !== 4) return
          if (this.status !== 200) return
          el.innerHTML = this.responseText
        }
        request.send();
     }
    }
  }
});
