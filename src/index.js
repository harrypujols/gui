import scss from './sass/styles.scss'
import draggable from './js/directives/draggable'
import include from './js/directives/include'
import data from './js/data'
import components from './js/components'
import update from './js/methods/update'
import toggle from './js/methods/toggle'
import clear from './js/methods/clear'

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
