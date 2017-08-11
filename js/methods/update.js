export default function() {
  var that = this
  this.$http({
    url: this.datafile,
    method: 'GET'
  })
  .then(function(result) {
    that.content = result.data
  })
  .catch(function(error){
    console.log(error)
  })
}
