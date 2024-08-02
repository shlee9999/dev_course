const $form = document.querySelector('form');
const $myText = document.querySelector('#myText');
const $textList = document.querySelector('.textList');
console.log($textList);
const onSubmit = (e) => {
  e.preventDefault();
  const inputText = $myText.value;
  if (inputText.trim() !== '') {
    const newItem = document.createElement('li');
    const newItemText = document.createElement('span');
    newItem.textContent = '- ';
    newItemText.textContent = inputText;
    newItem.appendChild(newItemText);
    $textList.appendChild(newItem);
    $myText.value = '';
  } else {
    console.log('err');
  }
};

$form.addEventListener('submit', onSubmit);
