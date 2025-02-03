const obj = {
  // властивість обʼєкту - це пара ключ значення
  name: "Petro",
  age: 40,
  chill: function (time) {
    console.log(`${this.name} відпочиває ${time} часу`);
  },
};
// 1) -  const
// 2) {}, [] - деструктуризація
// 3) = назва елементу для деструктуризації
// 4) Вписати в середину назву ключа значення якого вам потрібно
// const { a, b, c } = obj;

// Параметри за замовчуванням
const { name: userName = "Artem", age: userAge = 40, c = 1 } = obj;

const name = "milk";

// console.log(a, b, c);

const book = {
  title: "rings",
  year: 2000,
  author: "Author",
  object: {
    yearrr: 300,
    asd: "qwe",
  },
  arr: [1, 2, 3],
};

const { title, ...bookVlastivosti } = book;

console.log(title, bookVlastivosti);

const {
  object: { yearrr, asd },
  arr: [item1, item2, item3],
} = book;

console.log(yearrr, asd, item1, item2, item3);

const arr = [1, 2, 3, 4, 545, 6, 7, 8, 8, 10];

const [firstElement] = arr;
console.log(firstElement);

const [item11, item22, item4, ...rest] = arr;

let red, green, blue; //rgb

// [red, green, blue] = arr;

const [, , , , , , , item1111] = arr;
// console.log(red, green, blue);
console.log(item1111);

const arr2 = [1, 2];

const [first, second] = arr2;

console.log(first, second);

console.log(arr2[0], arr2[1]);

const musicLibrary = {
  count: 1,
  artists: [
    {
      name: "The Beatles",
      albums: [
        {
          title: "Sgt. Pepper's Lonely Hearts Club Band",
          year: 1967,
          tracks: [
            { title: "With a Little Help from My Friends", duration: "2:44" },
            { title: "Lucy in the Sky with Diamonds", duration: "3:28" },
            { title: "A Day in the Life", duration: "5:33" },
          ],
        },
      ],
    },
  ],
};

const {
  artists: [
    {
      albums: [
        {
          tracks: [{ title: track1 }, { title: track2 }],
        },
      ],
    },
  ],
} = musicLibrary;

const artists = musicLibrary.artists;

for (let index = 0; index < artists.length; index++) {
  const element = artists[index];
  const albums = element.albums;
  for (let index = 0; index < albums.length; index++) {
    const element = albums[index];
    const track = element.tracks;
    for (let index = 0; index < track.length; index++) {
      const element = track[index];
      console.log(element.title, element.duration);
    }
  }
}
