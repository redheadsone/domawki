import GameComponent from "./game-component.js";
import { createGameComponent, delay } from "./index.js";

export default class Spawner extends GameComponent {
  constructor(props) {
    super(props);

    this.spawnEntries();

    console.log("spawn");
  }

  update() {}

  async spawnEntries() {
    while (true) {
      for (let entry of this.entries) {
        entry.x = this.x;
        entry.y = this.y;

        let go = createGameComponent(entry);

        this.getContext().push(go);

        //wait 1s
        await delay(this.interval);
      }
    }
  }
}
