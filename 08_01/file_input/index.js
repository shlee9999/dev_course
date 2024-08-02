const $myFile = document.querySelector('#myFile');
const $imgEle = document.querySelector('.log img');
console.log($myFile, $imgEle);
const reader = new FileReader();
$myFile.addEventListener('load');
