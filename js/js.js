// що таке змінна - коробочка в яку ми можемо зберігти будь-яке значення
// Змінна збергіється в памʼяті
// Для того щоб виділити памʼять під зберігання чого небудь вам необхідно знати два слова const та let

// const - не змінюють своє значення
const name = "Artem";

let age = 23;

age = age + 1;

console.log(age);
// .log() - дозволяє вивести в консоль повідомлення
console.log("Hello world!");

const multiply = 2 ** 10;

console.log(multiply);

// Типи даних

//

const string = "asdqwezxc";

const number = 10;
// Правда не правда , так або ні
const boolean = true || false;

console.log(1 < 10); // true

console.log(1 > 10); // false

console.log(2 ** 53 + 1);
console.log(2 ** 53 + 3);
// bigint -
// typeof - показує тип даних
console.log(typeof 9007199254740994n);

const nulll = null;

console.log(null);

const undef = undefined;

// alert,prompt,confirm
//
// alert("Сервер барахлить");

// методи вводу

// const message = prompt("Скільки вам років?");

// console.log(typeof message);

// const isOk = confirm("Чи погоджуєтесь ви з правилами поведінки на сайті?"); // boolean - true || false

// console.log(isOk);

// Тут питання Створити скрипт який виводить спливаюче попередження за допомогою alert(). Вивести повідомлення про те, що дія небезпечна та попросити користувача підтвердити дію за допомогою confirm(). Якщо користувач підтверджує дію, вивести повідомлення "Дякую за підтвердження!". Якщо користувач відмовляється, вивести повідомлення .

// розгалудження коду

// alert("дія небезпечна");

// let userChose = confirm("підтвердити дію?");
// console.log(event);

// if (userChose === true) {
//   alert("Дякую за підтвердження!");
// } else {
//   alert("Дію відмінено!");
// }

// метод - це дія
// щоб викликати дію ми маємо записати круглі дужки
console.error("Error");
// window.alert("Привіт");
// window.confirm("Привіт?");

const namme = prompt("Введіть імʼя");

// alert("Дякуєм за покупку " + namme);
// alert(`Дякуєм за покупку ${namme}`);
// Властивість
// alert("Кількість буковок(Довжина рядка) = " + namme.length);
// alert("Чи є А велика? = " + namme.includes("A"));

alert("Привіт");
