const $silderUl = document.querySelector('.sliderUl');
const $sliderDot = document.querySelector('.slider-dot');
let diff = 0;
const onClickNumberBtn = (number) => {
  clickedBtn = 'number';
  diff = Math.abs(visibleImgNumber - number);
  let cnt = 0;
  const fn = () => {
    console.log('hello');
    $silderUl.style.transition = `transform ${1 / diff}s`;
    if (visibleImgNumber > number) {
      $silderUl.style.transform = `translate(calc(100% / 3 * 0), 0)`;
    } else {
      $silderUl.style.transform = `translate(calc(-100% / 3 * 2), 0)`;
    }
    cnt++;
    setTimeout(() => {
      if (cnt < diff) fn();
    }, 100);
  };
  fn();
};
$sliderDot.addEventListener('click', function (e) {
  onClickNumberBtn(+e.target.closest('span')?.textContent ?? visibleImgNumber);
});
$silderUl.prepend($silderUl.lastElementChild);
const [$prevBtn, $nextBtn] = document.querySelectorAll('.btn');
let visibleImgNumber = 1;
let clickedBtn = ''; // prev || next
const onClickPrevBtn = function (e) {
  clickedBtn = 'prev';
  $silderUl.style.transform = `translate(calc(100% / 3 * 0), 0)`;
};
const onClickNextBtn = function (e) {
  clickedBtn = 'next';
  $silderUl.style.transform = `translate(calc(-100% / 3 * 2), 0)`;
};

const transitionend = (e) => {
  if (clickedBtn === 'number') {
    if (diff > 0) $silderUl.prepend($silderUl.lastElementChild);
    else $silderUl.appendChild($silderUl.firstElementChild);
    diff = 0;
    return;
  }
  if (clickedBtn === 'prev') $silderUl.prepend($silderUl.lastElementChild);
  if (clickedBtn === 'next') $silderUl.appendChild($silderUl.firstElementChild);
  $silderUl.style.transition = `none`;
  $silderUl.style.transform = `translate(calc(-100% / 3), 0)`;
  visibleImgNumber = +$silderUl.childNodes[1].textContent;
  setTimeout(() => {
    $silderUl.style.transition = `transform 1s`;
  }, 0);
};

$prevBtn.addEventListener('click', onClickPrevBtn);
$nextBtn.addEventListener('click', onClickNextBtn);
$silderUl.addEventListener('transitionend', transitionend);
