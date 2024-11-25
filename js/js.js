console.log(true && false); // false
console.log(0 && 1); // 0
// && - вимагає щоб усі умови виконувались або повертає елемент на якому все зламалось

console.log(false || true || false); //true
console.log("" || "false" || 1); //

console.log((!false && "Petro") || ("Mykola" && !"")); //

// || - вимагає,щоб хоча б одна умова була вірною - повертає першу правду

const num = 20;

// range - перевірка чи входить в певний діапазон наше число
const result = num >= 1 && num <= 20;

console.log(result); // false

console.log(!0); // true
console.log(!1); // false

//

// false &&  (і шось ще що опертаор і навіть читати не буде)
// бачить перше true вам його повертає все інше навіть не дивиться
// true || (шось ще)

// РОЗГАЛУДЖЕННЯ

// ЯКЩО
// 'Petro" - true
// Коли if перевіряє умову у круглих дужках то він все що там є автоматично приводить до boolean

const subscribe = true;

// все що потрапляє до круглих дужок if перетврюється на boolean
if (subscribe === true) {
  console.log("Petro");
} else {
  console.log("Не Петро");
}

let cost;
const sub = "yes";

// ELSE IF|

if (sub === "free") {
  cost = 0;
} else if (sub === "pro") {
  cost = 199;
} else if (sub === "Premium") {
  cost = 500;
} else {
  console.log("Такої підписки ще нема у продажі злий хацкер");
}

console.log(cost);

// Тернарний (потрійний) оператор

const type = "button";

console.log(
  type === "button" ? console.log("Кнопка") : console.log("Ти не кнопка")
);

if (type === "button") {
  console.log("Ти кнопка");
} else {
  console.log("Ти не кнопка");
}

const name = "Artem";

const string = `Привіт, ${name}`;


