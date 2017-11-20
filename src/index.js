import scss from './sass/styles.scss'
import draggable from './js/directives/draggable'
import include from './js/directives/include'
import data from './js/data'
import components from './js/components'
import toggle from './js/methods/toggle'
import clear from './js/methods/clear'
import svg from './js/methods/svg'

import Vue from 'vue'

new Vue({
  el: '#stage',

  data,

  components,

  methods: {
    toggle,
    clear,
    svg
  },

  // mounted: function() {
  //
  // }
});
