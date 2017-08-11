import draggable from './directives/draggable'
import include from './directives/include'
import data from './data'
import components from './components'
import update from './methods/update'
import breakpoint from './methods/breakpoint'

Vue.prototype.$http = axios

new Vue({
  el: '#desktop',

  data: data,

  components: components,

  methods: {
    update: update,
    breakpoint: breakpoint
  },

  mounted: function() {
    this.update()
  }
});
