const $btnsCon = document.querySelector('.btnsCon');
let selectedMenuIdx = -1;
const $bar = document.createElement('span');
$bar.classList.add('bar');
const $sec = document.querySelector('.sec');
$sec.appendChild($bar);
$btnsCon.addEventListener('click', (e) => {
  $btnsCon.querySelector('.on').classList.remove('on');
  const $li = e.target.closest('li');
  $li.classList.add('on');
  const newWidth = e.target.offsetWidth;
  const newLeft = e.target.offsetLeft;
  $bar.style.cssText = `width:${newWidth}px; left:${newLeft}px`;
});
