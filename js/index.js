getSum();
// ab(5, 5);

// function - створи(задекларуй) нам функцію
// name - імʼя функції (англ.букв. get put patch post, )
// (params) - це те що наша функція отримує ззовні для роботи
//{} - тіло функції, де ми записуєм код який має виконатись при виклику

const function2 = function () {
  console.log("Початок виконання функції2");
};

// Функціональний вираз
const function1 = function () {
  console.log("Початок виконання функції1");
  function2();
  console.log("Продовження виконання коду функції1");
};

console.log("Виконання основного коду");

function1();

console.log(" Продовження виконнання основного коду");
// a, b - параметри які ми отримуємо при виклиці нашої функції
function function3(a = 0, b = 0) {
  console.log(a);
  console.log(b);
  console.log(a + b);
}

function3(10, 20);

function hello(name) {
  // return - завершує виконання функції та повертає її результат
  if (typeof name === "undefined") {
    console.log("Імʼя не вказано але привіт");
    return;
  }

  // if (typeof name === "undefined") {
  //   console.log(`Привіт, Anonym`);
  // }
  console.log(`Привіт, ${name}`);
}

hello();

function name(params) {
  const a = 5;
}

const add = function () {
  // arguments - дозволяє отримати всі аргументи які користувач відправив нам для обробки але у вигляді псевдомасиву

  // Щоб перетворити псевдомасив в масив  Array.from()
  const args = Array.from(arguments);
  console.log(args);
};

add(1, 2, 3, 4, 4, 5, 6, 67, 78, 8, 9, 9, 10);

function getSum(number1 = 0, number2 = 0) {
  // typeof - повертає тип даних який зберігається у змінній
  console.log(typeof number1);
  console.log(typeof number2);
  // якщо параметри числа то додаються як числа
  if (typeof number1 === "number" && typeof number2 === "number") {
    console.log(number1 + number2);
  }
  // якщо хоча б один елемент є строкою ми додаєм їх як строки
  if (typeof number1 === "string" || typeof number2 === "string") {
    console.log(number1 + number2);
  }

  // console.log("number1: ", number1);
  // console.log("number2: ", number2);
  // console.log("sum: ", number1 + number2);
}
// Функціональний вираз
const ab = function (material, robitnik) {
  console.log(material + robitnik);
};

ab("Derevo", false);

console.log(Number("asd"));

console.log(prompt("null"));

console.log(typeof ab);
// function declaration
// function ab(a, b) {
//   console.log(a + b);
// }

// ab();
