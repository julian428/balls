const ball = document.getElementById("ball");
const ground = document.getElementById("ground");
const container = document.getElementById("container");

window.onload = () => {
  document.getElementById("button").addEventListener("click", drop);
};

const drop = () => {
  const stop = ground.clientHeight - ground.clientHeight / 3;
  const start = container.clientHeight - ball.clientHeight;
  let falling = true;
  let momentum = -0.3;
  ball.style.bottom = start + "px";
  let ball_position = start;
  const inter = setInterval(() => {
    if (falling) {
      if (ball_position + momentum <= stop) {
        momentum *= -1;
        falling = false;
      }
      momentum += momentum * 0.05;
      ball.style.bottom = (ball_position += momentum) + "px";
    } else {
      if (ball_position - momentum >= start || momentum <= 1) {
        momentum *= -1;
        falling = true;
      }
      ball.style.bottom = (ball_position += momentum) + "px";
      momentum /= 1.1;
      if (momentum < 1 && ball_position <= stop + 1) clearInterval(inter);
    }
  }, 7);
};
