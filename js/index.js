const book = {
  author: "name",
  isOk: true,
  quantity: 100,
};

const human = {
  weight: 3,
  goWalk: function () {
    console.log("Пішов гулять");
  },
};

const city = {
  name: "Kyiv",
  geolocation: {
    longitude: 10230123,
    drygii: 18927398178923,
  },
  languages: ["UK", "UA"],
};

console.log(human.weight);

human.goWalk();

// FOR...IN..

for (const key in book) {
  console.log("KEYS, ", key); // ключі
  console.log("Value, ", book[key]); // значення
}

const empty = {};
// OBJECT
// keys - завжди масив ключів обʼєкту
const keys = Object.keys(empty);
console.log(keys);
// .values - завжди масив значень обʼєкту
const values = Object.values(human);
console.log(values);
// .entries - завжди масив масивів  ключ значення
const entries = Object.entries(city);
console.log(entries);

// ...REST - збір значень у масив ...Spread - розпорошення

const numbers = [123, 1, 4, 4, 67, -20, 674, 56, 34, 412, 31, 45, 34, 6];

// console.log(object);

console.log(Math.min(...numbers));
console.log(
  Math.min(12, 3, 45, 64, 6, 3424, 12, 3, 15, 36, 43, 12, 3, 123, 1, 23)
);

function calculator(a, b, c, ...rest) {
  console.log(a, b, c, rest);
}

calculator(1, 23, 4, 45, 6, 5, 67, 3, 1, 23, 1, 23);

const copyNumbers = numbers.slice();
console.log(copyNumbers);
console.log(numbers);
// console.log(copyNumbers === numbers);

const copyCopyNumbers = [...copyNumbers];
console.log(copyCopyNumbers);

const bookPlus = { book2: "cool", ...book, book3: "awesome", book4: "LUX" };

const bookPLUSPLUS = { ...bookPlus, book2: "bad", book3: "neLux" };

console.log(bookPlus);
console.log(bookPLUSPLUS);
