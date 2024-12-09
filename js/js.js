let pro = 100;
let normal = 50;
let elit = 500;
let eli = 400;
let el = 300;

let cost;
const user = pro;

if (user === pro) {
  console.log("Підписка PRO");
} else if (user === normal) {
  console.log("Підписка норм");
} else if (user === elit) {
  console.log("Підписка elit");
} else if (user === eli) {
  console.log("Підписка eli");
} else if (user === el) {
  console.log("Підписка el");
} else {
  console.log("Ви не підписані");
}

// key - це елемент для порівняння
switch (user) {
  case pro:
    console.log("Підписка PRO");
    break; // Зупинка виконання switch

  case normal:
    console.log("Підписка normal");

  case elit:
    console.log("Підписка elit");

  case eli:
    console.log("Підписка eli");

  case el:
    console.log("Підписка el");

  default:
    console.log("У вас немає підписки");
}
// Змінні створені в глобальній області бачення доступні усюди
// const a = 5;

// if (condition) {
// }

// function name(params) {}

// {} - блок у якому ми будемо зберігати код,
{
  // b - створено всередені блоку тому доступно лише всередині нього
  const b = 5;

  console.log(b);
  {
    const a = 5;
    console.log(a + b);

    {
      console.log(a);
    }
  }
}
