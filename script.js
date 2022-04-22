const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const increaseBtnEl = document.getElementById('increase');
const decreaseBtnEl = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorPickerEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

let size = 20;
let isPressed = false;
let color = 'black';
let x = undefined;
let y = undefined;

canvas.addEventListener('mousedown', () => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener('mouseup', () => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  context.beginPath();
  context.arc(x, y, size, 0, Math.PI * 2);
  context.fillStyle = color;
  context.fill();
}

function drawLine(x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.strokeStyle = color;
  context.lineWidth = size;
  context.stroke();
}

increaseBtnEl.addEventListener('click', () => {
  size += 5;
  if (size > 50) {
    size = 50;
  }

  updateSizeOnScreen();
});

decreaseBtnEl.addEventListener('click', () => {
  size -= 5;
  if (size < 5) {
    size = 5;
  }

  updateSizeOnScreen();
});

colorPickerEl.addEventListener('change', (e) => {
  color = e.target.value;
})

clearEl.addEventListener('click', () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
})

function updateSizeOnScreen() {
  sizeEl.innerText = size;
}