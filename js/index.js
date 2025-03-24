const form = document.getElementById("form");
const cursor = document.getElementById("cursor");
const button = document.querySelector(".button");
const img = document.querySelector(".fish");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  // prevent - превентивно
  // Default - за замовчуванням
  e.preventDefault();
  console.log(e);
}

document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);
cursor.addEventListener("mousedown", onMouseDown);
cursor.addEventListener("mouseup", onMouseUP);
cursor.addEventListener("click", onClick);
document.addEventListener("mousemove", onMouseMove);
document.addEventListener("contextmenu", onRightClick);
button.addEventListener("mouseover", onMouseOver);
button.addEventListener("mouseout", onMouseOut);

function onKeyDown(e) {
  //
  e.preventDefault();
  // console.log(e);
  // console.log("code", e.code);
  // console.log("key", e.key);
  if ((e.metaKey || e.ctrlKey) && e.code === "KeyS") {
    console.log("ctrl");
  }

  if ((e.metaKey || e.ctrlKey) && e.code === "KeyD") {
    console.log("D");
  }
  if (e.code === "Escape") {
    document.body.style.backgroundColor = "black";
  }
}

function onKeyUp(e) {
  console.log("code keyUP", e.code);
  console.log("key keyUP", e.key);
  if (e.code === "Escape") {
    document.body.style.backgroundColor = "white";
  }
}

function onMouseDown(e) {
  // console.log("onMouseDown", e);
}
function onMouseUP(e) {
  // console.log("onMouseUp", e);
}
function onClick(e) {
  // console.log("onClick", e);
}

function onMouseMove(e) {
  // console.log("e.clientX", e.clientX);
  // console.log("e.clientY", e.clientY);
  // console.log("e.pageX", e.pageX);
  // console.log("e.pageY", e.pageY);

  cursor.style.top = `${e.pageY + 20}px`;
  cursor.style.left = `${e.pageX + 20}px`;
  // console.log(cursor);
}

function onRightClick(e) {
  // e.preventDefault();
  console.log("asd");
}

function onMouseOver(e) {
  console.log(e);
  img.src = "";
}

function onMouseOut(e) {
  img.src = "../riba.png";
}
