const form = document.getElementById("form");
const target = document.getElementById("target");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  // prevent - превентивно
  // Default - за замовчуванням
  e.preventDefault();
  console.log(e);
}

document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);
target.addEventListener("mousedown", onMouseDown);
target.addEventListener("mouseup", onMouseUP);
target.addEventListener("click", onClick);
target.addEventListener("mousemove", onMouseMove);

function onKeyDown(e) {
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
  console.log("onMouseDown", e);
}
function onMouseUP(e) {
  console.log("onMouseUp", e);
}
function onClick(e) {
  console.log("onClcik", e);
}

function onMouseMove(e) {
  console.log("e.clientX", e.clientX);
  console.log("e.clientY", e.clientY);
  console.log("e.pageX", e.pageX);
  console.log("e.pageY", e.pageY);
}
