// BOM - браузерна модель документа

// console.log(navigator);

// if (navigator.geolocation) {
//   const coords = navigator.geolocation.getCurrentPosition(
//     (position) => {
//       console.log(position);
//     },
//     (error) => {
//       console.log(error.message);
//       console.log(navigator.language);
//     }
//   );
//   console.log(coords);
// } else {
//   console.log("Ваш браузер не підтримує");
// }

// const browserInfo = `Браузер ${navigator.appCodeName}, ${navigator.appVersion}`;

// console.log(browserInfo);

// DOM
// querySelector - пошуковий метод який знаходить перше співпадіння після чого припиняє пошуки
const input1 = document.querySelector("#input1");
const input2 = document.querySelector(".input2");
const button = document.querySelector(`.form [type="button"]`);
const buttons = document.querySelectorAll(`[type="button"]`);
const form = document.querySelector(".form");
const h1 = document.getElementById("h1");
console.log(input1);
console.log(input2);
console.log(button);
console.log(buttons);

console.log(input1.value);
console.log(input2.value);

// input1.value = "abc";
// input2.value = "qwe";

if (input1.value && input2.value) {
  console.log("Значення є");
  input1.style.backgroundColor = "green";
  input2.style.backgroundColor = "green";
} else {
  // input1.style.backgroundColor = "red";
  // input2.style.backgroundColor = "red";

  input1.classList.add("inputtt");
  input2.classList.add("inputtt");
  // input2.classList.remove("inputtt");
  // input2.classList.toggle("inputtt");
  // true or false
  console.log(input2.classList.contains("inputtt")); // метод який робить все навпаки
  console.log("Значень немає");
}
// textContent - показує текстове наповнення тегу(DOM-вузла)
console.log(h1.textContent);

h1.textContent = "Допобачення";
// children - повертає всі детячі елементи
console.log(form.children);

console.log(form.lastElementChild);
console.log(form.nextElementSibling);
console.log(form.previousElementSibling);
