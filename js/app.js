Vue.component('window', {
  template: '#window'
})

Vue.directive('draggable', {
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
})

new Vue({
  el: '#desktop',
  data: {
    message: 'Hello World',
    drag: true
  },

  // directives: {
  //   draggable: {
  //
  //   }
  // },

  methods: {

  }
})
