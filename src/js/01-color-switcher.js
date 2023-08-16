const btnStartEL = document.querySelector('[data-start]');
const btnStopEL = document.querySelector('[data-stop]');

btnStartEL.addEventListener('click', whenStart);
btnStopEL.addEventListener('click', whenStop);
btnStopEL.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function whenStart() {
  whenClick();
  const timerC = setInterval(() => {
    const randColor = getRandomHexColor();
    document.body.style.backgroundColor = randColor;
  }, 1000);
  updatedisabled(true, false);
}
function whenStop() {
  clearInterval(timerC);
  updatedisabled(false, true);
}

function updatedisabled(a, b) {
  btnStartEL.disabled = a;
  btnStopEL.disabled = b;
}

function whenClick() {
  const randColor = getRandomHexColor();
  document.body.style.backgroundColor = randColor;
}
