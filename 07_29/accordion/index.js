const $listCon = document.querySelector('.listCon');
$listCon.addEventListener('click', (e) => {
  const $previousActiveItem = $listCon.querySelector('.active');
  const $currentItem = e.target.closest('li');
  if (!$currentItem) return;
  $previousActiveItem?.classList.remove('active');
  $currentItem.classList.toggle('active', $previousActiveItem !== $currentItem);
});
