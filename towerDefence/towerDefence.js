import { collidePointWithCircle } from "./collision.js";
import IMAGES from "./images/index.js";
import { useTool } from "./toolkit.js";

import Environment from "./components/environment.js";
import Monster from "./components/monster.js";

let game = document.querySelector("#game");
let ctx = game.getContext("2d");

//let ghostImg = document.querySelector("#ghost");

function drawChar({ x, y, size, image }, showBg = false) {
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `${size}px Arial`;
  ctx.fillStyle = "magenta";
  // ctx.beginPath();
  // ctx.ellipse(
  //   x + size / 2,
  //   y + size / 2,
  //   size / 2,
  //   size / 2,
  //   0,
  //   0,
  //   2 * Math.PI
  // );
  //ctx.fill();
  if (showBg) {
    ctx.fillRect(x, y, size, size);
  }
  // ctx.fillText("👻", x + size / 2, y + size / 2 + (size / 25) * 2);
  ctx.drawImage(image, x, y, size, size);
}

let gameObjects = [
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

  for (let envObject of gameObjects) {
    // let collided = collidePointWithCircle(mousePoint, {
    //   cx: tree.x + tree.size / 2,
    //   cy: tree.y + tree.size / 2,
    //   r: tree.size / 2
    // });

    envObject.draw(ctx);
    //drawChar(tree);
  }

  for (let envObject of gameObjects) {
    // monster.x += monster.vx;
    // monster.y += monster.vy;
    envObject.update();
  }

  requestAnimationFrame(gameLoop);
}

gameLoop();

game.addEventListener("click", function({ layerX: x, layerY: y }) {
  useTool(gameObjects, { x, y });
});

//game.addEventListener("mousemove", highlightEnv);
//let mousePoint = { x: 0, y: 0 };
// function highlightEnv(event) {
//   mousePoint = { x: event.layerX, y: event.layerY };
// }
