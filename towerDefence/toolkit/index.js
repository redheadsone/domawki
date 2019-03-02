import IMAGES from "../images/index.js";
import { collidePointWithCircle } from "../collision.js";
import { Monster, Spawner } from "../components/index.js";
import { getImage } from "../components/game-component.js";
import { environmentTools } from "./environment-tools.js";

let monstersSize = 40;

const tools = [
  {
    image: IMAGES.SCISSORS,
    action(gameObjects, { x, y }) {
      function IsThatObject(gameObject) {
        let collided = collidePointWithCircle(
          { x, y },
          {
            cx: gameObject.x + gameObject.size / 2,
            cy: gameObject.y + gameObject.size / 2,
            r: gameObject.size / 2
          }
        );

        return collided;
      }

      const GOIndex = gameObjects.findIndex(IsThatObject);
      if (GOIndex < 0) return;
      gameObjects.splice(GOIndex, 1);
    }
  },
  {
    image: IMAGES.DEBUG,
    action(gameObjects, { x, y }) {
      let size = 30;

      gameObjects.push(
        new Spawner({
          x: x - size / 2,
          y: y - size / 2,
          image: this.image,
          size: size,
          interval: 500,
          waveCount: 4,
          waveInterval: 1500,
          //TODO: use create gc factory instead
          getContext() {
            return gameObjects;
          },

          entries: [
            {
              x: 386,
              y: 506,
              size: 50,
              image: IMAGES.SCORPION,
              vx: 2,
              vy: 2,
              "@class": Monster.name
            },
            {
              x: 386,
              y: 506,
              size: 50,
              image: IMAGES.JINNY,
              vx: 2,
              vy: 2,
              "@class": Monster.name
            },
            {
              x: 386,
              y: 506,
              size: 50,
              image: IMAGES.DRAGON,
              vx: 2,
              vy: 2,
              "@class": Monster.name
            }
          ]
        })
      );
    }
  },
  ...environmentTools,
  {
    image: IMAGES.GHOST,
    //function
    action(gameObjects, { x, y }) {
      let size = monstersSize;

      gameObjects.push(
        new Monster({
          x: x - size / 2,
          y: y - size / 2,
          vx: 1,
          vy: 1,
          image: this.image,
          size: size
        })
      );
    }
  },
  {
    image: IMAGES.SPIDER,
    //function
    action(gameObjects, { x, y }) {
      let size = monstersSize;

      gameObjects.push(
        new Monster({
          x: x - size / 2,
          y: y - size / 2,
          vx: 1,
          vy: 1,
          image: this.image,
          size: size
        })
      );
    }
  },
  {
    image: IMAGES.FAIRY,
    //function
    action(gameObjects, { x, y }) {
      let size = monstersSize;

      gameObjects.push(
        new Monster({
          x: x - size / 2,
          y: y - size / 2,
          vx: 1,
          vy: 1,
          image: this.image,
          size: size
        })
      );
    }
  },
  {
    image: IMAGES.WORM,
    //function
    action(gameObjects, { x, y }) {
      let size = monstersSize;

      gameObjects.push(
        new Monster({
          x: x - size / 2,
          y: y - size / 2,
          vx: 1,
          vy: 1,
          image: this.image,
          size: size
        })
      );
    }
  }
];

let toolsEl = document.querySelector(".tools");

for (let tool of tools) {
  let toolButton = getImage(tool.image);
  toolButton.classList.add("tool");
  toolButton.setAttribute("tabindex", 0);
  toolButton.action = (...args) => tool.action(...args);

  toolsEl.appendChild(toolButton);
}

let currentTool = null;
function selectTool(event) {
  if (event.target.classList.contains("tool")) {
    currentTool = event.target;
  }
}

export function useTool(gameObjects, mousePosition) {
  if (currentTool) {
    currentTool.action(gameObjects, mousePosition);
  }
}

toolsEl.addEventListener("click", selectTool);

//todo: create button to save level!
// use JSON.stringify() method on monsters/trees/ etc. array to get string with all stuff inside
// THEN store everything to localStorage - read about this!
