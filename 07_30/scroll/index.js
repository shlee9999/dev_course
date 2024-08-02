const $parent = document.querySelector('.parent');
$parent.addEventListener('scroll', (e) => {
  console.log(e.target.scrollTop);
  e.target.scrollTop = 0;
});
