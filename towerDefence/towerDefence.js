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

const gameComponents = [];

function gameLoop() {
  ctx.clearRect(0, 0, game.width, game.height);

  for (let go of gameComponents
    .slice()
    .sort((a, b) => a.y + a.size - b.y - b.size)) {
    // let collided = collidePointWithCircle(mousePoint, {
    //   cx: tree.x + tree.size / 2,
    //   cy: tree.y + tree.size / 2,
    //   r: tree.size / 2
    // });

    go.draw(ctx);
  }

  for (let go of gameComponents) {
    go.update();
  }

  requestAnimationFrame(gameLoop);
}

gameLoop();

let toolActive = true;

game.addEventListener("click", function({ layerX: x, layerY: y }) {
  // console.log(x, y);
  toolActive && useTool(gameComponents, { x, y });
});

function saveLevel() {
  let levelData = JSON.stringify(gameComponents);

  saveFile({ data: levelData, fileName: "level.json", type: "text/json" });
}

function loadLevelFile() {
  function loadLevel(levelData) {
    let gamecomps = JSON.parse(levelData).map(
      createGameComponentFactory(gameComponents)
    );

    gameComponents.splice(0);
    if (gamecomps.length > 0) {
      gameComponents.push(...gamecomps);
    }
  }

  loadFile(loadLevel);
}

document.querySelector(".btn-save").addEventListener("click", saveLevel);
document.querySelector(".btn-load").addEventListener("click", loadLevelFile);
