import IMAGES from "../images/index.js";

const defaults = {
  x: 0,
  y: 0,
  size: 50,
  image: IMAGES.DEBUG
};

export default class GameComponent {
  constructor(props) {
    Object.assign(this, defaults, props);
  }

  draw(ctx) {
    let { x, y, size, image } = this;
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
    // if (showBg) {
    //   ctx.fillRect(x, y, size, size);
    // }
    // ctx.fillText("👻", x + size / 2, y + size / 2 + (size / 25) * 2);
    ctx.drawImage(image, x, y, size, size);
  }

  update() {}
}
