import draggable from './directives/draggable'
import include from './directives/include'
import data from './data'
import components from './components'
import update from './methods/update'

Vue.prototype.$http = axios

new Vue({
  el: '#stage',

  data: data,

  components: components,

  methods: {
    update: update
  },

  mounted: function() {
    this.update()
  }
});
