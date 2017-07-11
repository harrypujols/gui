import draggable from './directives/draggable'
import include from './directives/include'

Vue.prototype.$http = axios

new Vue({
  el: '#desktop',

  data: {
    datafile: '../data/data.json',
    message: 'hello',
    content: {},
    drag: true
  },

  components: {
    'window': {
      template: '#window',
      props: ['post']
    }
  },

  methods: {
    update: function() {
      var that = this
      this.$http({
        url: this.datafile,
        method: 'GET'
      })
      .then(function(result) {
        that.content = result.data
      })
      .catch(function(error){
        console.log(error)
      })
    },

    breakpoint: function() {
      var breakpoint = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
      return breakpoint;
    }
  },

  mounted: function() {
    this.update()
  }
});
