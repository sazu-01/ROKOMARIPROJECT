const bookShowcase = document.querySelector(".book-showcase");
const book = document.querySelector(".book");
const body = document.querySelector("body");

let prevRotation = 0;
let accumulatedRotation = 0;
const sensitivity = 2;

function handleMouseMove(event) {
  const newX = event.clientX;
  const rotationDelta = newX - prevRotation;

  accumulatedRotation += rotationDelta;

  book.style.transform = `rotateY(${accumulatedRotation}deg)`;

  prevRotation = newX;
}

function handleMouseDown(event) {
  prevRotation = event.clientX;
  body.style.cursor = "grabbing";

  document.addEventListener("mousemove", handleMouseMove);
}

function handleMouseUp() {
  document.removeEventListener("mousemove", handleMouseMove);
  body.style.cursor = "default";

  prevRotation += accumulatedRotation;
  accumulatedRotation = 0;
}

bookShowcase.addEventListener("mousedown", handleMouseDown);
document.addEventListener("mouseup", handleMouseUp);
