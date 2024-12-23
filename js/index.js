// В масиві може бути, що завгодно
// Масиви містять однотипний вміст
const array = ["Artem", 15, false, null, undefined];
const names = ["Artem", "Petro", "Anton"];
const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// щоб отримати довжину масиву ми використовуємо властивість length
// всі індекси розразовуються з 0
// Індекс завжди на 1 менший за довжину
console.log(grades.length);

// Як витягнути значення з масиву
console.log(grades[0]);

names.length = 100;
names.length = 1;
//

// i < grades.length - поки індекс менший за довжину масиву

let counter = 0;

for (let i = 0; i < grades.length; i++) {
  const grade = grades[i];
  counter += grade;
}

console.log(counter);
// for of - не має індексу

for (const grade of grades) {
  counter -= grade;
}

console.log(counter);

const numbers = [];

for (let i = 0; i < 10000; i++) {
  // numbers[i] - numbers - назва масиву [i] - індекс масиву
  numbers[i] = i + 1;
}

const randomWinner = Math.floor(Math.random() * 10000);

for (let i = 0; i < numbers.length; i++) {
  if (i === randomWinner) {
    console.log(`Переміг ${i}`);
    break;
  }
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let counter1 = 0;

for (let i = 0; i < matrix.length; i++) {
  const matrixEl = matrix[i];
  for (let j = 0; j < matrixEl.length; j++) {
    const element = matrixEl[j];
    counter1 += element;
  }
}

console.log(counter1);

const name = "Artem";

for (const letter of name) {
  console.log(letter);
}
