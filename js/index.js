// Spaghetti code - процедурний коді

const name = "Petro";
const yearOfBirth = 1990;

const calculateAge = (yearOfBirth) => {
  const yearNow = 2025;
  return yearNow - yearOfBirth;
};

console.log(calculateAge(yearOfBirth));

const petro = {
  name: "Petro",
  yearOfBirth: 1990,

  calculateAge: function () {
    return 2025 - this.yearOfBirth;
  },
};

console.log(petro.calculateAge());

// До ES6
//Стрілка вона не має ключового методу this
// Конструктор
const Human = function (name, yearOfBirth) {
  //console.log(this); // Human {}
  this.name = name;
  this.yearOfBirth = yearOfBirth;

  // НІКОЛИ ТАК НЕ РОБИТИ
  // this.calculateAge =function () {
  //   return 2025 - this.yearOfBirth;
  // };
};

Human.prototype.calculateAge = function () {
  return 2025 - this.yearOfBirth;
};

// const obj = Object.create();

const petro1 = new Human("Petro", 1990);

// 1. NEW - створює пустний новий обʼєкт
// 2. КОли ми викликаємо функцію. this = {}
// 3. {} - повʼязаний з прототипом
// 4. Функція автоматично повертає {}
console.log(petro1);

const Maksim = new Human("Maksim", 2000);
console.log(Maksim.calculateAge());
const Yuna = new Human("Yuna", 2001);

console.log(Yuna.calculateAge());

const arr = [1, 2, 3, 45, 6];

// function plus(arr) {
//   return arr[1] + 10;
// }

Array.prototype.plus = function () {
  return (this[0] += 10);
};

//  Креслення вашого обʼєкту
// Клас - синтаксичний цукор
// oop - 4 принципи
// Абстракція
// Інкапсуляція - дозволяє закрити ваші поля конструктору у середині класу
// Наслідування - дозволяє не дублювати код а його наслідувати
// Поліморфізм -(багато форм) - дозволяє переписувати одну і ту ж  функцію у різних класах під потреби класу

class User {
  // Приватні властивості(Властивості доступ до яких буде лише у середині цього класу) мають бути оголошень обовʼязково, до конструктора
  #email;
  #yearOfBirth;
  #password;

  constructor(email, yearOfBirth, password, nickname) {
    this.#email = email;
    this.#yearOfBirth = yearOfBirth;
    this.#password = password;
    this.nickname = nickname;
  }

  calculateAge() {
    console.log("Вік користувача");
    return 2025 - this.yearOfBirth;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    return (this.#email = newEmail);
  }
}

const petro2 = new User("asd@asd.com", 1990, "QWERTY12345!", "Petia");

petro2.calculateAge();
console.log(petro2.email);
petro2.email = "petro@gmail.com";

console.log(petro2);
console.log(petro2.email);
// class expression
// const Admin = class {

// };
// class declaration
class Admin extends User {
  constructor(email, password, yearOfBirth, nickname, permissions) {
    // Дозволяє використовувати батьківський конструктор
    super(email, yearOfBirth, password, nickname);
    this.permissions = permissions;
  }
  calculateAge() {
    console.log("Вік Адміна");
  }
}

const Maxim = new Admin(
  "Maxim@gmail.com",
  "QWERTY12345@",
  2005,
  "MAX",
  "ADMIN"
);

Maxim.calculateAge();

class Author extends User {
  constructor(email, yearOfBirth, password, nickname, plushka) {
    super(email, yearOfBirth, password, nickname);

    this.plushka = plushka;
  }
  calculateAge() {
    console.log("Вік автора");
  }
}

const contentMaker = new Author("Qwe", 123, "qwe", "qwe", "Make COntent");

console.log(contentMaker.calculateAge());
