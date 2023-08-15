import { Notify } from 'notiflix';

const formEl = document.querySelector('.form');
const inpDelayEl = document.querySelector('[name=delay]');
const inpStepEl = document.querySelector('[name=step]');
const inpAmountEl = document.querySelector('[name=amount]');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

formEl.addEventListener('submit', whenSub);

function whenSub(e) {
  e.preventDefault();
  let delay = Number(inpDelayEl.value);
  let step = Number(inpStepEl.value);
  let amount = Number(inpAmountEl.value);
  let position = 0;

  for (let i = 1; i <= amount; i += 1) {
    position = i;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
  formEl.reset();
}
