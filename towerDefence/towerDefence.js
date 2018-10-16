let game = document.querySelector("#game");
let ctx = game.getContext("2d");
let treeSize = 60;
let monsterSize = 40;

//let ghostImg = document.querySelector("#ghost");

function getImage(path) {
  //todo:
  // create <img> element - tipa let img = ....+++
  let imgElement = document.createElement("img");

  // set 'src' attribute to it+++
  imgElement.src = "images/" + path;

  imgElement.setAttribute("hidden", "");

  // set 'hidden' attribute true?????

  // ??? add element to body+-
  document.body.appendChild(imgElement);

  // return this element from func +++
  return imgElement; //image - tipa return img
}

getImage("environment/deciduous-tree_1f333.png");
getImage("monsters/ghost_1f47b.png");
getImage("monsters/ghost_1f47b.png");

function addTree(event) {
  trees.push(
    createTree({
      x: event.layerX - treeSize / 2,
      y: event.layerY - treeSize / 2
    })
  );
}
game.addEventListener("click", addTree);

function drawChar({ x, y, size, image }) {
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `${size}px Arial`;
  ctx.fillStyle = "magenta";
  //ctx.fillRect(x, y, size, size);
  // ctx.fillText("👻", x + size / 2, y + size / 2 + (size / 25) * 2);
  ctx.drawImage(image, x, y, size, size);
}

function createTree({ x, y }) {
  return {
    image: getImage("environment/evergreen-tree_1f332.png"),
    size: treeSize,
    x: x,
    y: y
  };
}

let trees = [
  createTree({
    x: 20,
    y: 20
  }),
  createTree({
    x: 300,
    y: 70
  }),
  createTree({
    x: 150,
    y: 150
  }),
  createTree({
    x: 200,
    y: 200
  })
];

//todo: put all monsters to array,
//add new monsters by click
//all monsters should move same way as ghost
let ghost = {
  x: 30,
  y: 30,
  vx: 1,
  vy: 1,
  size: monsterSize,
  image: getImage("monsters/ghost_1f47b.png")
};

function gameLoop() {
  ctx.clearRect(0, 0, game.width, game.height);

  //todo: draw all monsters, not just one ghost
  drawChar(ghost);

  for (let tree of trees) {
    drawChar(tree);
  }

  //todo: this logic should work for each monster in monsters array!
  ghost.x += ghost.vx;
  ghost.y += ghost.vy;

  //todo: these checks too! move all that shit to separate function!
  // and call it for each monster
  if (ghost.y > game.height - ghost.size) {
    ghost.vy *= -1;
  }
  if (ghost.x > game.width - ghost.size) {
    ghost.vx *= -1;
  }
  if (ghost.y < 0) {
    ghost.vy *= -1;
  }
  if (ghost.x < 0) {
    ghost.vx *= -1;
  }

  requestAnimationFrame(gameLoop);
}

//todo: create button to save level!
// use JSON.stringify() method on monsters/trees/ etc. array to get string with all stuff inside
// THEN store everything to localStorage - read about this!

gameLoop();
