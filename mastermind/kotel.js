const combinationLength = 4;

function selectBall(event) {
  let element = event.target;
  console.log("selected", element);

  if (element.classList.contains("cell")) {
    console.log();

    addBall(element.getAttribute("color"));
  }
}

let currentCombination = [];

//row current
let currentRow = document.body.querySelector(".row.current");

function addBall(color) {
  //<div class="cell" color="f"></div>

  let ball = document.createElement("div");
  ball.classList.add("cell");
  ball.setAttribute("color", color);
  currentRow.appendChild(ball);

  currentCombination.push(color);
  if (currentCombination.length === 4) {
  }
}

function checkCombination() {
  // <div class="check">
  //     <div class="cell mini bull"></div>
  //     <div class="cell mini cow"></div>
  //     <div class="cell mini bull"></div>
  //     <div class="cell mini "></div>
  // </div>
}
let colors = ["a", "b", "c", "d", "e", "f"];
let enigma = [];

function generateCombination() {
  let result = [];
  for (let i = 0; i < combinationLength; i++) {
    let colorIndex = Math.round(Math.random() * (colors.length - 1));
    let randomColor = colors[colorIndex];
    result.push(randomColor);
  }

  return result;
}

let ballsContainer = document.body.querySelector(".controls");
ballsContainer.addEventListener("click", selectBall);
