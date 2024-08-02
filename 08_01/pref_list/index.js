const PREF_LIST = [
  { value: 1100, name: '서울' },
  { value: 3611, name: '세종' },
  { value: 2600, name: '부산' },
  { value: 2700, name: '대구' },
  { value: 2800, name: '인천' },
  { value: 2900, name: '광주' },
  { value: 3000, name: '대전' },
  { value: 3100, name: '울산' },
  { value: 5011, name: '제주' },
  { value: 5013, name: '서귀포' },
  { value: 4111, name: '수원' },
  { value: 4128, name: '고양' },
  { value: 4113, name: '성남' },
  { value: 4119, name: '용인' },
  { value: 4117, name: '부천' },
  { value: 4127, name: '안산' },
  { value: 4122, name: '평택' },
  { value: 4115, name: '의정부' },
  { value: 4157, name: '김포' },
  { value: 4159, name: '광명' },
  { value: 4141, name: '하남' },
  { value: 4145, name: '광주' },
];

const $select = document.querySelector('select');
const $regionNumber = document.querySelector('.region_number_result');
const frag = new DocumentFragment();

PREF_LIST.forEach((pref) => {
  const newOption = document.createElement('option');
  newOption.textContent = pref.name;
  frag.appendChild(newOption);
});

$select.appendChild(frag);
$select.addEventListener('change', () => {
  console.log($select.textContent);
  $regionNumber.textContent = PREF_LIST.find(
    (pref) => pref.name === $select.value
  )?.value;
});
