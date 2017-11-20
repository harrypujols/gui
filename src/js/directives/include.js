// include
import Vue from 'vue'

export default Vue.directive('include', {
  bind: function ( el, binding ) {
    fetch( binding.value )
    .then( response => response.text() )
    .then( text => {
        el.innerHTML = text;
    })
    .catch(console.error.bind(console));
 }
})
