// const button = document.getElementById("button");
// 1- знайти елемент(отримати посилання на html елемент який вас цікавить)
const button = document.querySelector(".button");
const input = document.querySelector("#input");
const form = document.querySelector(".form");
const check = document.querySelector("#check");
// .addEventListener - додати слухача події
// 2 - Після того як ми знайшли елемент  ми маємо повісити на нього слухач події(addEventListener)
button.addEventListener("click", onClick);
// e - обʼєкт події
let counter = 0;
// 3- Створити функцію(обробник події) з вказівками як js має реагувати на цю подію
function onClick(event) {
  // target - це елемент на якому відбулась подія
  console.log(event.target);
  counter++;

  if (counter === 1) {
    button.removeEventListener("click", onClick);
  }
  console.log(`Я клікнув ${counter} разів`);
}

// 1- знайти елемент(отримати посилання на html елемент який вас цікавить)
// 2 - Після того як ми знайшли елемент  ми маємо повісити на нього слухач події(addEventListener)
// 3- Створити функцію(обробник події) з вказівками як js має реагувати на цю подію
// input - ввід тексту
input.addEventListener("input", onInput);

function onInput(e) {
  const inputValue = e.target.value;

  console.log(inputValue);
}

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  // КОли ми відправляємо форму то сторінка за замовчуванням самотсійно оновлюється,щоб цьому запобігти ми використовуємо   e.preventDefault(); - що означає заблокувати поведінку за замовчуванням
  e.preventDefault();
  const emailValue = e.target.elements.email.value;
  const passwordValue = e.target.elements.password.value;
  console.log(emailValue);
  console.log(passwordValue);
}
// Подія активації інтерактивного елементу
input.addEventListener("focus", onFocus);

function onFocus(e) {
  input.style.border = "1px solid red";
  input.style.outline = "none";
}
// blur - подія втрати фокусу
input.addEventListener("blur", onBlur);

function onBlur(e) {
  const value = e.target.value;
  if (value.length < 6) {
    console.log("Пароль занадто слабкий");
    input.style.border = "1px solid red";
  } else {
    input.style.border = "none";
    input.style.outline = "1px solid black";
  }
}
// 
check.addEventListener("change", onChange);

function onChange(e) {
  console.log(e.target.checked);
  if (!e.target.checked) {
    button.disabled = true;
  }
}
