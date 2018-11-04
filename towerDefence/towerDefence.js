import { collidePointWithCircle } from "./collision.js";
import Environment from "./environment.js";
import IMAGES from "./images/index.js";
import { useTool } from "./toolkit.js";

let game = document.querySelector("#game");
let ctx = game.getContext("2d");

let monsterSize = 50;

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

let trees = [
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
  })
];

//todo: put all monsters to array,
//add new monsters by click
//all monsters should move same way as ghost

function createMonster({ x, y, vx, vy, image }) {
  return {
    image: image,
    size: monsterSize,
    x: x,
    y: y,
    vx: vx,
    vy: vy
  };
}
let monsters = [
  createMonster({
    image: IMAGES.VAMPIRE,
    x: 40,
    y: 160,
    vx: -1,
    vy: -1
  }),
  createMonster({
    image: IMAGES.SNAIL,
    x: 80,
    y: 200,
    vx: 2,
    vy: 2
  })
];

function gameLoop() {
  ctx.clearRect(0, 0, game.width, game.height);

  //todo: draw all monsters, not just one ghost
  for (let monster of monsters) {
    drawChar(monster);
  }

  for (let tree of trees) {
    // let collided = collidePointWithCircle(mousePoint, {
    //   cx: tree.x + tree.size / 2,
    //   cy: tree.y + tree.size / 2,
    //   r: tree.size / 2
    // });
    drawChar(tree);
  }

  for (let monster of monsters) {
    monster.x += monster.vx;
    monster.y += monster.vy;
  }

  //todo: this logic should work for each monster in monsters array!

  //todo: these checks too! move all that shit to separate function!
  // and call it for each monster
  for (let monster of monsters) {
    if (monster.y > game.height - monster.size) {
      monster.vy *= -1;
    }
    if (monster.x > game.width - monster.size) {
      monster.vx *= -1;
    }
    if (monster.y < 0) {
      monster.vy *= -1;
    }
    if (monster.x < 0) {
      monster.vx *= -1;
    }
  }

  requestAnimationFrame(gameLoop);
}

gameLoop();

game.addEventListener("click", function({ layerX: x, layerY: y }) {
  useTool(trees, { x, y });
});

//game.addEventListener("mousemove", highlightEnv);
//let mousePoint = { x: 0, y: 0 };
// function highlightEnv(event) {
//   mousePoint = { x: event.layerX, y: event.layerY };
// }
