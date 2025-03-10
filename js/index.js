const data = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
  {
    userId: 1,
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  },
  {
    userId: 1,
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
  },
  {
    userId: 1,
    id: 7,
    title: "magnam facilis autem",
    body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
  },
  {
    userId: 1,
    id: 8,
    title: "dolorem dolore est ipsam",
    body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
  },
  {
    userId: 1,
    id: 9,
    title: "nesciunt iure omnis dolorem tempora et accusantium",
    body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
  },
  {
    userId: 1,
    id: 10,
    title: "optio molestias id quia eum",
    body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
  },
  {
    userId: 2,
    id: 11,
    title: "et ea vero quia laudantium autem",
    body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
  },
  {
    userId: 2,
    id: 12,
    title: "in quibusdam tempore odit est dolorem",
    body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
  },
];

const div = document.getElementById("div");

const title = document.createElement("h1");
const title2 = document.createElement("h1");
title.textContent = "Something!";
title2.textContent = "Something2!";

const a = document.createElement("a");

const img = document.createElement("img");

img.src = "https://images.prom.ua/2987667453_w600_h600_2987667453.jpg";

a.href = "https://google.com";
a.textContent = "Google";

div.append(title, title2);

div.prepend(a);
div.prepend(img);

// before after

const p = document.createElement("p");

p.textContent = "<span>asdas</span>";
div.before(p);

const div2 = document.createElement("div");
div2.id = "div2";
div2.append(p, img, title);

div.after(div2);

const ul = document.querySelector(".ul");
const li = document.querySelector(".li");
const ulLastElement = document.querySelector(".li:nth-child(3)");

console.log(ulLastElement);
ul.insertBefore(img, ulLastElement);

ul.remove();

// document.body.innerHTML = "<h1>qwe</h1> <h2>zxc</h2>";

const ull = document.querySelector(".test");
console.log(ull);
// перший параметр, обʼєднання методів prepend, apend,before, after

const post = {
  userId: 10,
  id: 60,
  title: "ALO",
  body: "HELLO",
};

data.push(post);

const markup = data
  .map(({ title, body }) => {
    return `<li class="li">
    <p>${title}</p>
    <p>${body}</p>
    </li>`;
  })
  .join(" ");

ull.insertAdjacentHTML("beforeend", markup);

console.log(markup);

ull.setAttribute("id", "qwe");

// ull.id = "qwe";

console.log(ull.getAttribute("id"));

console.log(ull.hasAttribute("id"));

ull.removeAttribute("id");

console.log(ull.attributes);
