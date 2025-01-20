const book = {
  // ключ - ЗАВЖДИ СТРОКА: значення - може бути, будь яким.
  author: "Petro",
  title: "Around the world",
  genre: ["fantasy", "action"],
  amountOfStorinka: 500,
};
// Якщо ми хочемо використати дані, будь-якого, поля обʼєкта ми маємо звернутись за імʼям до обʼєкта та через крапку обрати необхідний ключ
console.log(`Я прочитав класну книгу під назвою ${book.title}`);

console.log(`Я прочитав класну книгу під назвою ${book["title"]}`);
// delete - видаляє властивості обʼєкта
delete book.title;

console.log(book);

book.year = 2025;
console.log(book.year);

console.log(book);
//

const bookTitle = "test book";

const bookYear = 2025;

const bookAuthor = "Test author";

const newBook = {
  bookTitle,
  bookYear,
  bookAuthor,
};

const library = {
  name: "Library",
  amountOfBooks: 1000,
  books: [],
  // ES5
  addBook: function (title) {
    // this - контекст
    // this В  ОБ'ЄКТІ завжди є посиланням на обʼєкто в якому знаходиться
    // this === library
    this.books.push(title);
  },
};

library.addBook("test title");

console.log(library);
