// колбек - функція яка сама по собі ніколи не відпрацьовує(сервісна функція)
const getMaterials = function (money) {
  console.log(`За такі кошти (${money}) ми пропунуємо такі матеріали`);
};
// колбек - функція яка сама по собі ніколи не відпрацьовує(сервісна функція яка викликається у інших функціях(функціях вищого порядку))
const builders = function (money) {
  console.log(`За такі кошти (${money}) ми пропунуємо таких робітників`);
};

// Функція вищого порядку(приймає параметрами інші функції)
const buildHouse = function (money, getMaterials, builders) {
  getMaterials(money);
};

buildHouse(1000, getMaterials, builders);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//callback
const filter = function (arr, userChoice) {
  // const filteredArr = [];

  // return filteredArr;

  // for (let i = 0; i < arr.length; i++) {
  //   const element = arr[i];
  //   if (element.incl) {
  //     filteredArr.push(element);
  //   }
  // }

  return !arr.includes(userChoice);
};

const filterModified = (arr, userChoice) => !arr.includes(userChoice);

// Функція вищого порядку
const userInput = function (filter) {
  const input = [1];
  while (true) {
    const userInput = prompt(
      "Введіть значення. Якщо воно вже існує, його не буде додано."
    );
    if (userInput === null) break;
    if (filter(input, userInput)) {
      input.push(userInput);
    } else {
      console.log("Елемент вже є");
    }
  }
  console.log(input);
};

// userInput(filter);

// const add = function (a, b, c) {
//   console.log(a + b + c);
// };

// add(1, 2, 3);
// =>
const add = (a, b, c) => {
  return a + b + c;
  // console.log(a - b - c);
};
add(1, 2, 3);

const t = (x) => console.log(x);

const y = () => console.log(2);
