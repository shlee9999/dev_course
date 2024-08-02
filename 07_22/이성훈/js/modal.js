$hambModal = document.querySelector('.hamb-modal');
$modalWrapper = document.querySelector('.modal-wrapper');
$root = document.documentElement;

const openHambModal = () => {
  $hambModal.classList.add('open');
  $modalWrapper.classList.add('open');
  console.log($hambModal.classList);
  $root.style.overflowY = 'hidden';
};
const closeHambModal = () => {
  $hambModal.classList.remove('open');
  $modalWrapper.classList.remove('open');
  console.log($hambModal.classList);
  $root.style.overflowY = 'visible';
};
window.addEventListener('resize', function () {
  if (window.innerWidth > 800 && $hambModal.classList.contains('open')) {
    $hambModal.classList.remove('open');
    $modalWrapper.classList.remove('open');
  }
});
