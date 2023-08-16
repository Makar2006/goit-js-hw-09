const btnStartEL = document.querySelector('[data-start]');
const btnStopEL = document.querySelector('[data-stop]');

btnStartEL.addEventListener('click', whenStart);
btnStopEL.addEventListener('click', whenStop);
btnStopEL.disabled = true;
let timer;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function whenStart() {
  whenClick();
  timer = setInterval(() => {
    whenClick();
  }, 1000);
  updateDisabled(true, false);
}
function whenStop() {
  clearInterval(timer);
  updateDisabled(false, true);
}

function updateDisabled(a, b) {
  btnStartEL.disabled = a;
  btnStopEL.disabled = b;
}

function whenClick() {
  const randColor = getRandomHexColor();
  document.body.style.backgroundColor = randColor;
}
