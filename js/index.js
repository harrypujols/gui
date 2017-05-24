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
      props: ['post'],
      data: function() {
        return {
          items: [1, 2, 3, 4]
        }
      }
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
    }
  },

  mounted: function() {
    this.update()
  }
});
