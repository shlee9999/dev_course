const $sun = document.querySelector('.sun');
$sun.addEventListener('mousedown', () => {
  $sun.addEventListener('mousemove', onMouseMove);
  $sun.addEventListener('mouseup', onMouseUp);
});

function onMouseMove(e) {
  $sun.style.transform = `translate(${e.pageX - 50}px,${e.pageY - 50}px)`;
}
function onMouseUp(e) {
  $sun.removeEventListener('mousemove', onMouseMove);
}
