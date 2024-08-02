// const $box = document.querySelector('.box');
// // $box.addEventListener('mousedown', () => {
// //   document.addEventListener('mousemove', onMouseMove);
// // });
// // document.addEventListener('mouseup', () => {
// //   document.removeEventListener('mousemove', onMouseMove);
// // });
// const boxInfo = $box.getBoundingClientRect();
// const boxTop = boxInfo.top;
// const boxLeft = boxInfo.left;
// const boxWidth = boxInfo.width;
// const boxHeight = boxInfo.height;

// function onMouseMove(e) {
//   $box.style.transform = `translate(${e.pageX - boxLeft - boxWidth / 2}px, ${
//     e.pageY - boxTop - boxHeight / 2
//   }px)`;
// }

//? 모던 자바스크립트 딥 다이브 참고 - 시작 했을 때 마우스의 위치를 이용
// const $box = document.querySelector('.box');
// const initialMousePos = {
//   x: 0,
//   y: 0,
// };
// $box.addEventListener('mousedown', (e) => {
//   //드래그 시작
//   initialMousePos.x = e.pageX;
//   initialMousePos.y = e.pageY;
// });
// document.addEventListener('mousemove', (e2) =>
//   onMouseMove(e2, initialMousePos)
// );
// $box.addEventListener('mouseup', () => {
//   document.removeEventListener('mousemove', onMouseMove);
// });
// function onMouseMove(e, initialMousePos) {
//   console.log(e.pageX - initialMousePos.x, e.pageY - initialMousePos.y);
//   return function () {
//     $box.style.transform = `translate(${e.pageX - initialMousePos.x}px,${
//       e.pageY - initialMousePos.y
//     }px)`;
//   };
// }

const $box = document.querySelector('.box');
const initialMousePos = {
  x: 0,
  y: 0,
};
const offset = { x: 0, y: 0 };
const move = (e) => {
  offset.x = e.clientX - initialMousePos.x;
  offset.y = e.clientY - initialMousePos.y;
  console.log(offset);
  $box.style.transform = `translate3d(${offset.x}px, ${offset.y}px,0)`;
};
$box.addEventListener('mousedown', (e) => {
  initialMousePos.x = e.clientX - offset.x;
  initialMousePos.y = e.clientY - offset.y;
  document.addEventListener('mousemove', move);
});
document.addEventListener('mouseup', () => {
  document.removeEventListener('mousemove', move);
});
