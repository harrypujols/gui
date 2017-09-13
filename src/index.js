import scss from './sass/styles.scss'
import draggable from './js/directives/draggable'
import include from './js/directives/include'
import data from './js/data'
import components from './js/components'
import toggle from './js/methods/toggle'
import clear from './js/methods/clear'
import svg from './js/methods/svg'

new Vue({
  el: '#stage',

  data: data,

  components: components,

  methods: {
    toggle: toggle,
    clear: clear,
    svg: svg
  },

  mounted: function() {

  }
});
