let treeSize = 70;

export default class Environment {
  constructor({ x = 0, y = 0, size = treeSize, image }) {
    //let this={};

    this.x = x;
    this.y = y;
    this.size = size;
    this.image = image;

    //return this;
  }
}

// function createTree({ x, y }) {
//   return {
//     image: IMAGES.OAK,
//     size: treeSize,
//     x: x,
//     y: y
//   };
// }
