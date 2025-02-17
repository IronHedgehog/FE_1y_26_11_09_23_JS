const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,

    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,

    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,

    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,

    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,

    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,

    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,

    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

const numbers = [1, 2, 3, 4, 5];

// 0 - акумулятор
console.log(
  numbers.reduce((acc, number) => {
    console.log(acc);
    console.log(number);
    return acc + number;
  }, 0)
);

console.log(
  users.reduce((acc, user) => {
    return acc + user.balance;
  }, 0)
);

console.log(
  numbers.reduce((acc, number, idx) => {
    // push - повертає довжину оновленого масиву після додавання
    // acc.push(idx);
    // return acc
    console.log(acc);
    acc.push(idx);
    return acc;
  }, [])
);

// Метод reduce - може збирати, може збирати обʼєкти(Він може замінити всі перебираючі методи масиву)

// Метод sort

const numbers2 = [5, 3, 2, 4, 1, 0, 7, 6, 10, 8, 9, 11, 12, 13, 14, 21, 35, 46];

console.log(numbers2.sort());
console.log(
  numbers2.sort((number1, number2) => {
    return number2 - number1;
  })
);

console.log(
  numbers2.sort((number1, number2) => {
    return number1 - number2;
  })
);

const names = ["Artem", "Yuna", "Olexandr", "Max", "Nikita"];

console.log(names.sort());

const abc = ["b", "c", "w", "r"];

console.log(
  abc.sort((a, b) => {
    return a.localeCompare(b);
  })
);

console.table(
  users
    .filter((user) => user.eyeColor === "brown")
    .sort((a, b) => b.balance - a.balance)
    .map((user) => user.name)
);
