// JavaScript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var isDrawing = false;
var lastX = 0;
var lastY = 0;

function startDrawing(e) {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

function draw(e) {
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

function stopDrawing() {
  isDrawing = false;
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

document.getElementById('saveBtn').addEventListener('click', function () {
  var dataURL = canvas.toDataURL('image/png');
  var link = document.createElement('a');
  link.download = 'mi_dibujo.png';
  link.href = dataURL;
  link.click();
});

document.getElementById('clearBtn').addEventListener('click', clearCanvas);
