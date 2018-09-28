let fieldElement = document.body.querySelector(".field");
let ballElement = document.body.querySelector(".ball");

fieldElement.addEventListener("click", moveBall);
function moveBall(event) {
  // нашли середину мяча в квадрате
  let offset = 100 / 2;
  let sizeField = 500 - offset * 2;
  let x = event.layerX - offset;
  let y = event.layerY - offset;
  if (x > sizeField) {
    x = sizeField;
  }
  if (y > sizeField) {
    y = sizeField;
  }
  if (x < 0) {
    x = 0;
  }
  if (y < 0) {
    y = 0;
  }
  ballElement.style.left = x + "px";
  ballElement.style.top = y + "px";
  console.log(event);
}
