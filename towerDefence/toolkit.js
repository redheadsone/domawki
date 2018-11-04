import IMAGES from "./images/index.js";
import Environment from "./components/environment.js";
import Monster from "./components/monster.js";

const tools = [
  {
    image: IMAGES.PINE,
    //function
    action(gameObjects, { x, y }) {
      let size = 70;

      gameObjects.push(
        new Environment({
          x: x - size / 2,
          y: y - size / 2,
          image: currentTool,
          size: size
        })
      );
    }
  },
  {
    image: IMAGES.OAK,
    //function
    action(gameObjects, { x, y }) {
      let size = 80;

      gameObjects.push(
        new Environment({
          x: x - size / 2,
          y: y - size / 2,
          image: currentTool,
          size: size
        })
      );
    }
  },
  {
    image: IMAGES.GHOST,
    //function
    action(gameObjects, { x, y }) {
      let size = 50;

      gameObjects.push(
        new Monster({
          x: x - size / 2,
          y: y - size / 2,
          vx: 1,
          vy: 1,
          image: currentTool,
          size: size
        })
      );
    }
  },
  {
    image: IMAGES.FAIRY,
    //function
    action(gameObjects, { x, y }) {
      let size = 20;

      gameObjects.push(
        new Monster({
          x: x - size / 2,
          y: y - size / 2,
          vx: 3,
          vy: 3,
          image: currentTool,
          size: size
        })
      );
    }
  }
];

let controls = document.querySelector(".controls");

for (let tool of tools) {
  let toolButton = tool.image;
  toolButton.classList.add("tool");
  toolButton.setAttribute("tabindex", 0);
  toolButton.action = tool.action;
  controls.appendChild(toolButton);
}

let currentTool = null;
function selectTool(event) {
  if (event.target.classList.contains("tool")) {
    currentTool = event.target;
  }
}

export function useTool(gameObjects, mousePosition) {
  currentTool.action(gameObjects, mousePosition);
}

controls.addEventListener("click", selectTool);

//todo: create button to save level!
// use JSON.stringify() method on monsters/trees/ etc. array to get string with all stuff inside
// THEN store everything to localStorage - read about this!
