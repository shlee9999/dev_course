// // 배열 선언하기
// let arr1 = new Array(); // []
// let arr2 = new Array(10); // [ <10 empty items> ]
// let arr3 = []; // []
// let arr4 = new Array(1, 2, 3, 4, 'hello', 'world'); // [ 1, 2, 3, 4, 'hello', 'world' ]
// let arr5 = [1, 2, 3, 4, 'hello', 'world']; // [ 1, 2, 3, 4, 'hello', 'world' ]

// // 값 추가
// arr1.push(0, 1); // [ 0, 1 ]
// arr1[arr1.length] = 2; //[ 0, 1, 2 ]
// arr1[5] = 4; // [ 0, 1, 2, <2 empty items>, 4 ]  empty items 요소들은 undefined임

//값 삭제
// delete arr1[0]; // [ <1 empty item>, 1, 2, <2 empty items>, 4 ] 자리는 남아 있다.

// let arr1 = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
// let val = arr1.splice(2, 3, 100, 100, 100, 100); // 지운 것들을 val에 배열로 저장 가능
// 2번 인덱스부터 3개를 지우고 100, 100, 100, 100을 넣는다

let arr1 = [0, 1, 2, 3, 4, 5];
console.log(arr1.unshift(1, 2));
console.log({ arr1 });
