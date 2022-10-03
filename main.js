const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height / 2;
let isMouseDown = false;
let color = "black";

const drawPositions = [];

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "green";
  ctx.fillRect(30, 30, 50, 50);

  ctx.fillStyle = "red";
  ctx.fillRect(100, 30, 50, 50);

  ctx.fillStyle = "blue";
  ctx.fillRect(170, 30, 50, 50);

  ctx.fillStyle = "black";
  ctx.fillRect(240, 30, 50, 50);

  drawPositions.forEach((position) => {
    ctx.fillStyle = position.color;
    ctx.beginPath();
    ctx.arc(position.x, position.y, 5, 0, 2 * Math.PI);
    ctx.fill();
  });

  requestAnimationFrame(render);
}

canvas.addEventListener("click", (event) => {
  if (
    event.offsetX >= 30 &&
    event.offsetX <= 80 &&
    event.offsetY >= 30 &&
    event.offsetY <= 80
  ) {
    color = "green";
  }

  if (
    event.offsetX >= 100 &&
    event.offsetX <= 150 &&
    event.offsetY >= 30 &&
    event.offsetY <= 80
  ) {
    color = "red";
  }

  if (
    event.offsetX >= 170 &&
    event.offsetX <= 220 &&
    event.offsetY >= 30 &&
    event.offsetY <= 80
  ) {
    color = "blue";
  }

  if (
    event.offsetX >= 240 &&
    event.offsetX <= 290 &&
    event.offsetY >= 30 &&
    event.offsetY <= 80
  ) {
    color = "black";
  }
});

canvas.addEventListener("mousemove", (event) => {
  x = event.offsetX;
  y = event.offsetY;
});

canvas.addEventListener("mousedown", (event) => {
  if (
    ((event.offsetX >= 30 && event.offsetX <= 80) ||
      (event.offsetX >= 100 && event.offsetX <= 150) ||
      (event.offsetX >= 170 && event.offsetX <= 220) ||
      (event.offsetX >= 240 && event.offsetX <= 290)) &&
    event.offsetY >= 30 &&
    event.offsetY <= 80
  ) {
    return;
  }

  isMouseDown = true;
});

canvas.addEventListener("mouseup", () => {
  isMouseDown = false;
});

canvas.addEventListener("mousemove", (event) => {
  if (!isMouseDown) return;
  drawPositions.push({ x: event.offsetX, y: event.offsetY, color });
});

render();
