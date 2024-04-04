import { addBall } from "./matter.js";

const canvas = document.querySelector("canvas");
canvas.addEventListener("click", function (e) {
  addBall(e.screenX, e.offsetY);
});
