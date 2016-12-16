new Vue({
  el: '#desktop',
  data: {
    message: 'Hello World',
    drag: true
  },

  directives: {
    include: function() {
      var url = this.expression
      var that = this
      var request = new XMLHttpRequest()
      request.open('GET', url, true)
      request.onreadystatechange = function() {
        if (this.readyState !== 4) return
        if (this.status !== 200) return
        that.el.innerHTML = this.responseText
      }
      request.send();
    },

    draggable: {
      bind: function() {
        var drag = this.drag

        this.el.onmousedown = function(e) {
          drag = true
          this.classList.add('dragging')
          console.log('dragging...')
        },

        this.el.onmousemove = function(e) {
          var w = this.offsetWidth / 2
          var h = this.offsetHeight / 2
          if ( drag === true ) {
            var x = e.clientX - w
            var y = e.clientY - h
            console.log (x)
            console.log(y)
            var pos = 'position:absolute;left:' + x + 'px;top:' + y + 'px;'
            this.setAttribute('style', pos)
          }
        },

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
