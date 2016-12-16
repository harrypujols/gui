new Vue({
  el: '#desktop',
  data: {
    message: 'Hello World',
    drag: true
  },

  directives: {
    draggable: {
      bind: function() {
        var drag = this.drag

        this.el.onmousedown = function(e) {
          drag = true
        }

        this.el.onmousemove = function(e) {
          var w = this.offsetWidth / 2
          var h = this.offsetHeight / 2
          
          if ( drag === true ) {
            var x = e.clientX - w
            var y = e.clientY - h
            console.log (x)
            console.log(y)
            var pos = 'position:absolute;left:' + x + 'px;top:' + y + 'px;cursor:move;'
            this.setAttribute('style', pos)
          }
          this.classList.add('dragging')
          console.log('dragging...')
        }

        this.el.onmouseup = function() {
          drag = false;
          this.classList.remove('dragging')
        }
      }
    }
  },

  methods: {

  }
})
