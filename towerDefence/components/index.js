import Monster from "./monster.js";
import Environment from "./environment.js";
import GameComponent from "./game-component.js";
import Spawner from "./spawner.js";

const gameClasses = [Monster, Environment, Spawner];

function createGameComponent(props) {
  //    {"x":386,"y":506,"size":50,"image":{"path":"monsters/snail_1f40c.png"},"vx":2,"vy":2,"@class":"Monster"}

  //const props = JSON.parse(jsonText);

  const currentClass = gameClasses.find(
    gameClass => gameClass.name === props["@class"]
  );

  return new currentClass(props);
}

export function delay(timeout) {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export { Monster, Environment, Spawner, GameComponent, createGameComponent };
