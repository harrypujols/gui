export default Vue.directive('include', {
  bind: function (el, binding) {
    var url = binding.value
    var request = new XMLHttpRequest()
    request.open('GET', url, true)
    request.onreadystatechange = function() {
      if (this.readyState !== 4) return
      if (this.status !== 200) return
      el.innerHTML = this.responseText
    }
    request.send();
 }
})
