import IMAGES from "./images/index.js";
import { useTool } from "./toolkit/index.js";

import {
  Monster,
  Environment,
  createGameComponentFactory
} from "./components/index.js";
import { saveFile, loadFile } from "./file-helper.js";

let game = document.querySelector("#game");
let ctx = game.getContext("2d");

const gameObjects = [
  new Environment({
    x: 20,
    y: 20,
    image: IMAGES.OAK
  }),
  new Environment({
    x: 300,
    y: 70,
    image: IMAGES.PINE
  }),
  new Environment({
    x: 150,
    y: 150,
    image: IMAGES.MUSHROOM,
    size: 20
  }),
  new Environment({
    x: 200,
    y: 200,
    image: IMAGES.FLOWER,
    size: 40
  }),
  new Monster({
    image: IMAGES.VAMPIRE,
    x: 40,
    y: 160,
    vx: -1,
    vy: -1
  }),
  new Monster({
    image: IMAGES.SNAIL,
    x: 80,
    y: 200,
    vx: 2,
    vy: 2
  })
];

function gameLoop() {
  ctx.clearRect(0, 0, game.width, game.height);

  for (let go of gameObjects
    .slice()
    .sort((a, b) => a.y + a.size - b.y - b.size)) {
    // let collided = collidePointWithCircle(mousePoint, {
    //   cx: tree.x + tree.size / 2,
    //   cy: tree.y + tree.size / 2,
    //   r: tree.size / 2
    // });

    go.draw(ctx);
    //drawChar(tree);
  }

  for (let go of gameObjects) {
    // monster.x += monster.vx;
    // monster.y += monster.vy;
    go.update();
  }

  requestAnimationFrame(gameLoop);
}

gameLoop();

let toolActive = true;

game.addEventListener("click", function({ layerX: x, layerY: y }) {
  // console.log(x, y);
  toolActive && useTool(gameObjects, { x, y });
});

function saveLevel() {
  let levelData = JSON.stringify(gameObjects);

  saveFile({ data: levelData, fileName: "level.json", type: "text/json" });
}

function loadLevelFile() {
  function loadLevel(levelData) {
    let gamecomps = JSON.parse(levelData).map(
      createGameComponentFactory(gameObjects)
    );

    gameObjects.splice(0);
    if (gamecomps.length > 0) {
      gameObjects.push(...gamecomps);
    }
  }

  loadFile(loadLevel);
}

document.querySelector(".btn-save").addEventListener("click", saveLevel);
document.querySelector(".btn-load").addEventListener("click", loadLevelFile);

// game.addEventListener("mousedown", () => (toolActive = true));
// game.addEventListener("mouseup", () => (toolActive = false));

// game.addEventListener("mousemove", function({ layerX: x, layerY: y }) {
//   toolActive && useTool(gameObjects, { x, y });
// });

//game.addEventListener("mousemove", highlightEnv);
//let mousePoint = { x: 0, y: 0 };
// function highlightEnv(event) {
//   mousePoint = { x: event.layerX, y: event.layerY };
// }
