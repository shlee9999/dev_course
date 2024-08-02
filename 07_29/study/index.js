const $btnsCon = document.querySelector('.btnsCon');
const $bar = document.createElement('span');
const $sec = document.querySelector('.sec');
const $listCon = document.querySelector('.listCon');
$bar.classList.add('bar');
$sec.appendChild($bar);

$btnsCon.addEventListener('click', (e) => {
  const childNodeList = [...$btnsCon.children];
  const $li = e.target.closest('li');
  let liIdx = childNodeList.indexOf($li);
  const newWidth = e.target.offsetWidth;
  const newLeft = e.target.offsetLeft;
  $btnsCon.querySelector('.on').classList.remove('on');
  $listCon.querySelector('.on').classList.remove('on');
  $li.classList.add('on');
  $bar.style.cssText = `width:${newWidth}px; left:${newLeft}px; transition:left 0.2s, width 0.2s`;
  $listCon.children[liIdx].classList.add('on');
});
