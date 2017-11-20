// toggle
export default function( event ) {
  document.querySelectorAll('.has-dropdown').forEach(( selector ) => {
    selector.classList.remove('is-active')
  })
}
