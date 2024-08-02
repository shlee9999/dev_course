const fulfilled = new Promise((resolve) => resolve(1)).then((res) =>
  console.log(res)
);
console.log(fulfilled);
