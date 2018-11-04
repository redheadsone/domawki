import IMAGES from "./images/index.js";
let controls = document.querySelector(".controls");

for (let imageName in IMAGES) {
  let toolButton = IMAGES[imageName];
  toolButton.classList.add("tool");
  toolButton.setAttribute("tabindex", 0);
  controls.appendChild(toolButton);
}

let currentToolImg = null;
function selectTool(event) {
  if (event.target.classList.contains("tool")) {
    currentToolImg = event.target;
  }
}

export function useTool(gameObjects, { x, y }) {
  let size = 50;

  gameObjects.push({
    x: x - size / 2,
    y: y - size / 2,

    image: currentToolImg,
    size: size
  });
}

controls.addEventListener("click", selectTool);

//todo: create button to save level!
// use JSON.stringify() method on monsters/trees/ etc. array to get string with all stuff inside
// THEN store everything to localStorage - read about this!
