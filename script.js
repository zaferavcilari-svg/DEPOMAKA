const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

const gridSize = 50;
const pixelSize = 10;

canvas.width = gridSize * pixelSize;
canvas.height = gridSize * pixelSize;

canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = Math.floor((e.clientX - rect.left) / pixelSize);
  const y = Math.floor((e.clientY - rect.top) / pixelSize);

  const color = document.getElementById("colorPicker").value;

  ctx.fillStyle = color;
  ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
});
