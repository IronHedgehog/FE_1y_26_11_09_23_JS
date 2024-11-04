// Математичні оператори

// + - / *  - звичайні

// % - остача від ділення, ** - піднесення до ступеню

const number1 = 8;
const number2 = 3;

// console.log(number1 + number2); // number1 = 10, number2 = 7 = 17
// console.log(number1 - number2); // number1 = 10, number2 = 7 = 17
// console.log(number1 * number2); // number1 = 10, number2 = 7 = 17
// console.log(number1 / number2); // number1 = 10, number2 = 7 = 17
// console.log(number1 % number2); // number1 = 10, number2 = 7 = 17
// console.log(number1 ** number2); // number1 = 10, number2 = 7 = 17

// Оператори порівняння

// > => <= <

//  == === !== !=

// КОли ви порівнюєте ви завжди отримуєте boolean (true or false)

// console.log(number1 > number2); // 8 > 3 - true
// console.log(number1 >= number2); // 8 >= 3 - true
// console.log(number1 <= number2); // 8 <= 3 - false
// console.log(number1 < number2); // 8 < 3 - false

// console.log(number1 == number2); // 8 == 3 -false
// // == - рівність (Значення мають бути рівними)
// console.log("8" == 8); // "8" == 8 - true
// // === - сувора рівність (типи даних мають співпадати, значння мають співпадати)
// console.log("8" === 8); // 8 == 3 - false

// console.log("8" != 8);
// console.log("8" !== 8);

// console.log(8 + "8"); // = 88

// приведення до числа

// Number
const number3 = "30";

console.log(typeof number3);

console.log(typeof Number(number3));

const age = "abcAhaha15";
// console.log(Number(age)); // Not a Number
// Перебирає строку і отримує з неї ціле число з початку рядка
// console.log(Number.parseInt(age));

const kg = "10.56.10kg";

// console.log(Number.parseInt(kg));
// console.log(Number.parseFloat(kg));

//перевірка на число

// isNaN

const number4 = "abc";
// Чи число яке я передав дорівнює NaN
console.log(!Number.isNaN(10));

console.log((0.1 * 10 + 0.2 * 10) / 10);
console.log(0.1 + 0.2);

const number5 = 10.1;

// MATH
// floor - округлення до меншого цілого числа
console.log(Math.floor(number5));
// .round - округлення за правилами математики
console.log(Math.round(number5));

//Math.ceil - округлення до більшого
console.log(Math.ceil(number5));

// Math.random() - дозволяє зарандомити випадкове число
console.log(Math.floor(Math.random() * 5 + 1));
// піднесення до ступеню
console.log(Math.pow(20, 2));

console.log(20 ** 2);

console.log(Math.max(200, 100, 400, 300, 230402));
console.log(Math.min(200, 100, 400, 300, 230402));

console.log(Math.PI);
