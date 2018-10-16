let board = document.body.querySelector(".board");

const characters = ["🧛‍", "🧙‍", "🧞‍", "🧝‍", "🧜", "👽", "👻", "👹"];
const closedCell = "❓";
//value = char
function createCell(value) {
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
  return cellElement;
}

let timerElement = document.getElementById("timer");
let timeLeft = 0;

let timerId;

function isVictory() {
  let victory =
    board.querySelectorAll(".disabled").length === board.children.length;
  return victory;
}

function timer() {
  timerElement.textContent = timeLeft;
  timeLeft--;
  if (timeLeft < 0) {
    alert("Game over");

    //disable board
  } else if (isVictory()) {
    alert("Victory!");
  } else {
    timerId = setTimeout(timer, 1000);
  }
}

function startGame() {
  fillBoard();
  timeLeft = 50;
  clearTimeout(timerId);
  timer();
}

function random(max) {
  return Math.floor(Math.random() * max);
}

function fillBoard() {
  //ощищаем поле чтобы повторно не создавалось новое рядом
  board.innerHTML = "";

  let pairs = characters.concat(characters);
  const count = pairs.length;
  for (let x = 0; x < count; x++) {
    let randomIndex = random(pairs.length);
    let charToAdd = pairs.splice(randomIndex, 1);
    let cellElement = createCell(charToAdd);
    board.append(cellElement);
  }
}

let openedElement = null;
let flipFlopTimerId;

function selectCell(event) {
  let currentElement = event.target.parentElement;

  if (currentElement.classList.contains("cell") === false) {
    return;
  }

  if (openedElement === null) {
    openedElement = currentElement;
    currentElement.classList.add("selected");
    return;
  }

  if (openedElement === currentElement) {
    openedElement.classList.remove("selected");
    openedElement = null;
    return;
  }

  //if 2nd selected
  currentElement.classList.add("selected");

  let char1 = openedElement.querySelector(".char").textContent;
  let char2 = currentElement.querySelector(".char").textContent;

  flipFlopTimerId = setTimeout(function() {
    if (char1 === char2) {
      hideCards(openedElement, currentElement);
      openedElement = null;
    } else {
      flipCards(openedElement, currentElement);
      openedElement = null;
    }
  }, 500);
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
