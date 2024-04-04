// module aliases

const { Engine, Render, Runner, World, Bodies, Body, Events } = Matter;

const windowX = window.innerWidth;
const windowY = window.innerHeight;
const bodyX = 10;

const engine = Engine.create();
// engine.world.Gravity.y = 0;
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false,
    width: windowX,
    height: windowY,
  },
});

Render.run(render);
Runner.run(Runner.create(), engine);

const floor = Bodies.rectangle(windowX / 2, windowY, windowX, 100, {
  isStatic: true,
  render: { fillStyle: "none" },
});
World.add(world, floor);

export const addBall = (posX, posY) => {
  //   const img = new Image();
  //   img.src = "./svg-icons/wuu2yeiw.bmp";

  const ballRadius = Math.min(bodyX, bodyX) / 4;
  const ball = Bodies.circle(posX, posY, ballRadius, {
    label: "ball",
    render: {
      sprite: { texture: "./svg-icons/wuu2yeiw.bmp", xScale: 0.1, yScale: 0.1 },
    },
  });
  const velX = Math.floor(Math.random() * 10 - 5);
  const velY = Math.floor(Math.random() * 10 + 1) * -1;
  const velAngular = (Math.random() * 10 - 5) / 60;

  Body.setVelocity(ball, { x: velX, y: velY });
  Body.setAngularVelocity(ball, velAngular);
  World.add(world, ball);
};
