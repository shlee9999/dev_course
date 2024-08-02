input = ['바나나', '딸기', '포도', '딸기'];

function strawToKiwi(arr) {
  var temp = Array.from(arr);
  for (var i = 0; i < arr.length; i++) {
    temp[i] = arr[i] === '딸기' ? '키위' : arr[i];
  }
  return temp;
}

// const strawToKiwi = (arr) => arr.map((item) => (item === '딸기' ? '키위' : item));

function countStraw(arr) {
  var cnt = 0;
  arr.forEach((fruit) => {
    if (fruit === '딸기') {
      cnt++;
    }
  });
  return cnt;
}
// console.log(input);
// console.log(countStraw(input));

var products = [
  { name: '사이다', price: 1 },
  { name: '쿠키', price: 5 },
  { name: '설탕', price: 2 },
  { name: '쿠키', price: 3 },
  { name: '김밥', price: 4 },
];

products.sort((a, b) => a.name.localeCompare(b.name));
console.log(products);

const map = new Map([
  ['key1', '사과'],
  ['key2', '바나나'],
]);

map.forEach((value, key) => console.log(key, value));
map.keys(); // { 'key1', 'key2' }
map.values(); // { '사과', '바나나' }
map.entries(); // { [ 'key1', '사과' ], [ 'key2', '바나나' ] }
map.set('key3', '키위');
console.log(map.delete('key3')); // boolean 반환. delete 성공 시 true
map.clear(); // 초기화
