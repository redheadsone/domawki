let board = document.body.querySelector(".board");

const characters = ["🧛‍", "🧙‍", "🧞‍", "🧝‍", "🧜", "👽", "👻", "👹"];
const closedCell = "❓";

function addCell(value) {
  let cellElement = document.createElement("div");
  cellElement.classList.add("cell");

  let bgElement = document.createElement("div");
  bgElement.classList.add("bg");
  bgElement.textContent = "❓";

  let charElement = document.createElement("div");
  charElement.classList.add("char");
  charElement.textContent = value;

  cellElement.append(bgElement);
  cellElement.append(charElement);

  //cellElement.textContent = value;
  board.append(cellElement);
}

let timerElement = document.getElementById("timer");
let timeLeft = 0;

function timer() {
  timerElement.textContent = timeLeft;
  timeLeft--;
  if (timeLeft < 0) {
    alert("Game over");
  } else {
    setTimeout(timer, 1000);
  }
}

function startGame() {
  fillBoard();
  timeLeft = 50;
  timer();
}

function random(max) {
  return Math.floor(Math.random() * max);
}

function fillBoard() {
  let pairs = characters.concat(characters);
  const count = pairs.length;
  for (let x = 0; x < count; x++) {
    let randomIndex = random(pairs.length);
    let charToAdd = pairs.splice(randomIndex, 1);
    addCell(charToAdd);
  }
}

let openedElement = null;

function selectCell(event) {
  let currentElement = event.target.parentElement;

  if (currentElement.classList.contains("cell") === false) {
    return;
  }

  if (openedElement === null) {
    openedElement = currentElement;
    currentElement.classList.add("selected");
  } else {
    if (openedElement === currentElement) {
      openedElement.classList.remove("selected");
      openedElement = null;
      return;
    }

    currentElement.classList.add("selected");

    let char1 = openedElement.querySelector(".char").textContent;
    let char2 = currentElement.querySelector(".char").textContent;

    if (char1 === char2) {
      setTimeout(function() {
        hideCards(openedElement, currentElement);
        openedElement = null;
      }, 500);
    } else {
      setTimeout(function() {
        flipCards(openedElement, currentElement);
        openedElement = null;
      }, 500);
    }
  }
}

function flipCards(elem1, elem2) {
  elem1.classList.remove("selected");
  elem2.classList.remove("selected");
}
function hideCards(elem1, elem2) {
  elem1.classList.add("disabled");
  elem2.classList.add("disabled");
}

let buttonStart = document.querySelector(".btn-start");
document.body.onclick = selectCell;

buttonStart.onclick = startGame;

//buttonStart.addEventListener('click', startGame);
