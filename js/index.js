import draggable from './directives/draggable'
import include from './directives/include'

new Vue({
  el: '#desktop',

  data: {
    message: 'window',
    drag: true
  },

  components: {
    'window': {
      template: '#window',
      props: ['text'],
      data: function() {
        return {
          items: [1, 2, 3, 4]
        }
      }
    }
  }
});
