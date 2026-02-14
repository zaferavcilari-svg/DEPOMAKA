
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const worldSize = 8000;
const pixelSize = 4;

let offsetX = worldSize / 2 - canvas.width / 2;
let offsetY = worldSize / 2 - canvas.height / 2;

let selectedColor = "red";
const pixels = {};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // dünya
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(-offsetX, -offsetY, worldSize, worldSize);

  for (let key in pixels) {
    const [x, y] = key.split("_").map(Number);
    ctx.fillStyle = pixels[key];
    ctx.fillRect(x - offsetX, y - offsetY, pixelSize, pixelSize);
  }
}

canvas.addEventListener("click", (e) => {
  const x = Math.floor((e.clientX + offsetX) / pixelSize) * pixelSize;
  const y = Math.floor((e.clientY + offsetY) / pixelSize) * pixelSize;
  pixels[`${x}_${y}`] = selectedColor;
  draw();
});

let dragging = false;
let startX, startY;

canvas.addEventListener("mousedown", (e) => {
  dragging = true;
  startX = e.clientX;
  startY = e.clientY;
});

canvas.addEventListener("mousemove", (e) => {
  if (!dragging) return;

  offsetX -= e.clientX - startX;
  offsetY -= e.clientY - startY;

  startX = e.clientX;
  startY = e.clientY;

  draw();
});

canvas.addEventListener("mouseup", () => dragging = false);
canvas.addEventListener("mouseleave", () => dragging = false);

draw();
