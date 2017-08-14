// draggable
export default Vue.directive('draggable', {
  bind: function(el) {
    interact(el, {
      allowFrom: el.querySelector('.drag-point')
    })
    .draggable({

      restrict: {
        restriction: '#screen',
        endOnly: true,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
      },

      onmove: dragMoveListener
    })

    function dragMoveListener (event) {
      var target = event.target,
      x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
      y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

      target.style.webkitTransform =
      target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';

      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    }

    window.dragMoveListener = dragMoveListener;
  }

})
