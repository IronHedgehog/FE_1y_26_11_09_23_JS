const array = ["Привіт", "Світ", "asd", "qwe"];

console.log(array.join(","));

const message = ["Вітаю", "Ви", "виграли", "в", "лотерею"];

console.log(message.join(" "));

const string = "Привіт,Фві, фівщлзфів";
// split - метод строки який дозволяє перетворити строку в масив за розділювачем
console.log(string.split(","));

const arr1 = [1, 2, 3, 4, 5];

console.log(arr1.indexOf(3));

console.log(arr1.includes(6));

const names = ["Petro", "Artem", "Mykola"];

if (names.includes("Artem")) {
  console.log("Запускаєм код");
}

// ------------------------  PUSH,POP,SHIFT,UNSHIFT ----------------------//

const number = [1, 2, 3, 4, 5];
// Метод пуш повертає кількість елементів в масиві
number.push(6, 7, 8, 9, 10);

console.log(number);
// pop - Видаляє елемент з кінця масиву та повератає вам видалений елемент
console.log(number.pop());

console.log(number);

number.unshift(0);

console.log(number);
// shift - він дозволяє видаляти з початку масиву
number.shift();

console.log(number);

// -------------------------- SLICE ,SPLICE --------------------------- //

//
const newNumbers = number.slice();

newNumbers.push(11, 12, 13, 14, 15);

const startNumbers = newNumbers.slice(0, 5);
console.log(number);
console.log(startNumbers);
console.log(newNumbers);

const spliceNumbers = newNumbers.splice(
  5,
  7,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26
);

console.log(spliceNumbers);
console.log(newNumbers);

const number1 = [1, 2, 3, 4, 5];
const number2 = [6, 7, 8, 9, 10];
const number3 = [11, 12, 13, 14, 15];

const number1PlusNumber2 = number2.concat(number1, number3);

console.log(number1PlusNumber2);
