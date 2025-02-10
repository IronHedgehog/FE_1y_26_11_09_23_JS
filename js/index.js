// impera - рецепт фільтрації масиву

const numbers = [12, 3, 45, 2, 3, 46];
const filteredArray = [];

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  if (element < 20) {
    filteredArray.push(element);
  }
}

// console.log(filteredArray);

// Declaration code - Замовлення готового результату
const declarationNumbers = [100, 200, 300, 400, 1, 2, 3, 4, 1012, 20102];

const declarationFilterNumbers = declarationNumbers.filter((number) => {
  return number < 1000;
});

// console.log(declarationFilterNumbers);

// Функції з побічними ефектами(Видозмінює початковий вигляд параметрів які ми передаєм)
// console.log("ДО : ", numbers);

const dirtyAdd = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + value;
  }
  return arr;
};

// console.log(dirtyAdd(numbers, 10));

// console.log("Після :", numbers);

// чиста функція(функція,що не видозмінює початкові дані)

const pureAdd = (arr, value) => {
  const addedArr = [];

  for (let i = 0; i < arr.length; i++) {
    addedArr.push(arr[i] + value);
  }
  return addedArr;
};

// console.log("pureAdd :", pureAdd(declarationNumbers, 1000));

// console.log("default:", declarationNumbers);

const arr = [1, 2, 3, 4, 5];
// функція з домішками (псує початкові дані)
function dirty(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] / 2;
  }

  return arr;
}

// console.log("Результат роботи функції з домішками ", dirty(arr));

// console.log("Початковий масив", arr);

function pure(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  console.log(result);
  return result;
}

// console.log("Результат роботи чистої функції ", pure(arr));

// console.log("Початковий масив", arr);

// Перебираючі методи масиву

// foreach

const arr1 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

arr1.forEach((number, index) => {
  console.log(number, index);
});

const multi = arr1.map((number) => {
  return number / 2;
});

console.log(multi);

console.log(arr1);

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterArr3 = arr3.filter((number) => {
  return number < 9;
});

console.log(filterArr3);

const findTen = arr3.find((number) => {
  return number === 11;
});

console.log(findTen);
