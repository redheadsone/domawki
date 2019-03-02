import GameComponent from "./game-component.js";
import { createGameComponent, delay } from "./index.js";

export default class Spawner extends GameComponent {
  constructor(props) {
    super(props);

    this.spawnEntries();
  }

  update() {}

  async spawnEntries() {
    //todo: bug on save when wave is generating
    while (this.waveCount-- > 0) {
      for (let entry of this.entries) {
        entry.x = this.x;
        entry.y = this.y;

        let go = createGameComponent(entry);

        this.getContext().push(go);

        await delay(this.interval);
      } //end wave
      await delay(this.waveInterval);
    }
  }
}
