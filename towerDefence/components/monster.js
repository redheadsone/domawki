import GameComponent from "./game-component.js";

let monsterSize = 50;

export default class Monster extends GameComponent {
  //   constructor({ x = 0, y = 0, vx = 0, vy = 0, size = monsterSize, image }) {
  //     //let this={};
  //     this.x = x;
  //     this.y = y;
  //     this.vx = vx;
  //     this.vy = vy;
  //     this.size = size;
  //     this.image = image;
  //     //return this;
  //   }
  //   draw() {}

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.y > 600 - this.size) {
      this.vy *= -1;
    }
    if (this.x > 800 - this.size) {
      this.vx *= -1;
    }
    if (this.y < 0) {
      this.vy *= -1;
    }
    if (this.x < 0) {
      this.vx *= -1;
    }
  }
}
