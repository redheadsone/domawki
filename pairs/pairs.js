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

  if (currentElement.classList.contains("cell") === true) {
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

      setTimeout(function() {
        if (char1 === char2) {
          openedElement.classList.add("disabled");
          currentElement.classList.add("disabled");
          openedElement = null;
        } else {
          currentElement.classList.remove("selected");
          openedElement.classList.remove("selected");
          openedElement = null;
        }
      }, 500);
    }
  }
}

document.body.onclick = selectCell;

fillBoard();
