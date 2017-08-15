import draggable from './directives/draggable'
import include from './directives/include'
import data from './data'
import components from './components'
import update from './methods/update'
import toggle from './methods/toggle'
import clear from './methods/clear'

Vue.prototype.$http = axios

new Vue({
  el: '#stage',

  data: data,

  components: components,

  methods: {
    update: update,
    toggle: toggle,
    clear: clear
  },

  mounted: function() {
    this.update()
  }
});
