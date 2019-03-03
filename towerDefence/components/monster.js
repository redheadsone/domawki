import GameComponent from "./game-component.js";
import { delay } from "./index.js";
import { collidePointWithCircle } from "../collision.js";

export default class Monster extends GameComponent {
  constructor(props) {
    super(props);

    this.ai();
  }

  async ai() {
    this.targets = [
      { x: 0, y: 0 },
      { x: 0, y: 600 },
      { x: 600, y: 0 },
      { x: 200, y: 100 }
    ].map(props => new GameComponent(props));

    //let GameComponents = this.getContext();

    GameComponents.push(...this.targets);

    for (let target of this.targets) {
      while (
        !collidePointWithCircle(target, {
          cx: this.x,
          cy: this.y,
          r: this.size
        })
      ) {
        let distance = { x: target.x - this.x, y: target.y - this.y };

        let length = Math.sqrt(distance.x ** 2 + distance.y ** 2);

        let direction = { x: distance.x / length, y: distance.y / length };

        //for (;;) {}

        this.x += direction.x * this.speed;
        this.y += direction.y * this.speed;

        await delay(10);
      }

      await delay(1000);
    }
  }
}
