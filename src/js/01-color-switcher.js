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
  setTimeout(() => {
    randColor = getRandomHexColor();
    document.body.style.backgroundColor = randColor;
  }, 0);
  timerC = setInterval(() => {
    randColor = getRandomHexColor();
    document.body.style.backgroundColor = randColor;
  }, 1000);
  btnStartEL.disabled = true;
  btnStopEL.disabled = false;
}
function whenStop() {
  clearInterval(timerC);
  btnStartEL.disabled = false;
  btnStopEL.disabled = true;
}
