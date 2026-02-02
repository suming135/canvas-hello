import './style.css';

const canvas = document.getElementById('stage');
const ctx = canvas.getContext('2d');

const fit = () => {
  const { innerWidth, innerHeight } = window;
  canvas.width = innerWidth;
  canvas.height = innerHeight;
};

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#111';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#f2f2f2';
  ctx.font = '48px "Courier New", monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('hello world', canvas.width / 2, canvas.height / 2);
};

fit();
draw();
window.addEventListener('resize', () => {
  fit();
  draw();
});
