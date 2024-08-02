const $sun = document.querySelector('.sun');
const $con = document.querySelector('.con');
console.log($con);
// $sun.addEventListener('dragstart', (e) => {
//   console.log('dragstart');
// });
// $sun.addEventListener('drag', (e) => {
//   console.log('drag');
// });
// $sun.addEventListener('dragend', (e) => {
//   console.log('dragend');
// });
// $sun.addEventListener('dragenter', (e) => {
//   console.log('dragenter');
// });
$con.addEventListener('dragover', (e) => {
  console.log('dragover');
  e.preventDefault(); //! 이게 있어야 drop
});
// $sun.addEventListener('dragleave', (e) => {
//   console.log('dragleave');
// });
$con.addEventListener('drop', (e) => {
  console.log('drop'); // ?
});
