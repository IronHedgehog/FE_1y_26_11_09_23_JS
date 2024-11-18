// 1. Створити змінні celsius, fahrenheit для зберігання температури за Цельсієм та
// Фаренгейтом. Перевести температуру з Цельсія у Фаренгейти за допомогою
// формули та вивести результат в консоль.

let celsius = 5;

const fahrenheit = (celsius * 9) / 5 + 32;

console.log(fahrenheit);

const js = "asdaqweazxc";

console.log(js.length - 1);
// .indexOf - шукає перше співпадіння
// чутливий до регістру
// indexOf - не знайшов елемент він виводить -1
console.log(js.toLowerCase().indexOf("a", 5));

const a = 1;

const b = "1";

const c = 1;
// конкатинація
// 1) a + b  = строка 11
// 2)b + c = строка 11 + (конкатинація{додавання} рядків) число 1
console.log(a + b + c); //111

// const name = prompt("Введіть імʼя");

// alert("Привіт " + name);
// length - властивість , яка повертає довжину рядка
const superLongString = "SuperLongWord";

console.log(superLongString.length);
// .toLowerCase() - приводить усе до маленьких літер
console.log(superLongString.toLowerCase());
// .toLowerCase() - приводить усе до великих літер
console.log(superLongString.toUpperCase());

const spamWord = "sale";

const message = "super SALLE today";

// .includes - перевірив чи є у рядку spamWord
// Повертає boolean type (true or false)
// .includes - чутливий до регістру (маленькі та великі букви)

if (message.toLowerCase().includes(spamWord)) {
  console.log("Тут є спам, треба видалить");
} else {
  console.log("Спаму немає, можна показувать користувачу");
}

const string1 = "Hello, world";

string1.toLowerCase();
// .startsWith - МОжемо перевірити з чого складаєься початок речення
console.log(string1.toLowerCase().startsWith("e"));
console.log(string1.toLowerCase().endsWith(".com"));

const name1 = "       Artem       ";
// trim() - обрізає пробіли з початку та кінця
console.log(name1);
console.log(name1.trim());

// const
const minutes = "34400000";

const string2 = "qweasdzxc";

console.log(minutes.padStart(2, "0"));
console.log(string2.padEnd(20, "..."));

const abc = "abc";

const qwe = "qwe";

console.log(abc + qwe);

// const summ = prompt("Введіть суму яку бажаєте витратити");
// const name2 = prompt(" Введіть імʼя");

// console.log(`Привіт, ${name2} ти зробив замовлення на ${summ} грн`);

//Отримуєм поточну кількість хвилин 1000
// 1000
const hours = Math.floor(1100 / 60);
const minutesLeft = 1030 % 60;
console.log(typeof minutesLeft);

const formatMinutes = minutesLeft.toString().padStart(2, "0");
const formatHours = hours.toString().padStart(2, "0");
console.log(`${formatHours} ${formatMinutes}`);
