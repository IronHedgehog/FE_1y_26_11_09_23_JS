// Повідомити JS що елемент існує(знайти посилання на нього)
// querySelector
// querySelectorAll
// getElementById

const heading = document.getElementById("qwe");

console.log(heading);
//Що зробити з знайденим елементом?
// При кліку змінювати текст заголовку
// При кліку
// змінювати текст заголовку

heading.addEventListener("click", onClick);

function onClick(e) {
  const startContent = heading.textContent;
  switch (startContent) {
    case "Hello world":
      heading.textContent = "Hello,Artem!";
      break;

    case "Hello,Artem!":
      heading.textContent = "Hello world";
      break;

    default:
      heading.textContent = "Привіт, анонім";
      break;
  }
}

// ЦИКЛИ

//for - ключове слово яке дозволяє створити цикл
//let index = 0;  - створили змінну index і присвоїли значення 0 (лічильник)
//index < array.length; - умова завершення циклу(як тільки умова не виконується цикл зупиняється)
//index++; - додавання одинички до змінної index(спрацьовує кожної ітерації)
// ітерація - виконання циклу один раз

for (let index = 0; index <= 100; index = index + 101) {
  console.log(index);
}

let counter = 0;

while (counter <= 10) {
  console.log(counter);
  counter++;
}

let clients = 2;
const maxClients = 30;

while (clients < maxClients) {
  console.log(clients);
  clients++;
}

// let authorize = false;

// while (authorize !== true) {
//   let value = prompt("Введіть нік для реєстрації");
//   if (value === "Artem") {
//     authorize = true;
//     break;
//   } else {
//     value = prompt("Введіть  правильний нік для реєстрації");
//   }
// }

for (let index = 0; index < 100; index++) {
  if (index % 2 === 1) {
    continue; // пропустити та продовжити з наступного елементу
  }
  console.log(index);
}
