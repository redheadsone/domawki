import GameComponent from "./game-component.js";
import { delay } from "./index.js";

export default class Monster extends GameComponent {
  constructor(props) {
    super(props);

    this.ai();
  }

  async ai() {
    while (true) {
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

      this.x += this.vx;
      this.y += this.vy;
      //wait 1s
      await delay(10);
    }
  }

  update() {
    // if (this.y > 600 - this.size) {
    //   this.vy *= -1;
    // }
    // if (this.x > 800 - this.size) {
    //   this.vx *= -1;
    // }
    // if (this.y < 0) {
    //   this.vy *= -1;
    // }
    // if (this.x < 0) {
    //   this.vx *= -1;
    // }
  }
}
