import { Notify } from 'notiflix';

const formEl = document.querySelector('.form');

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
  let delay = Number(formEl.elements.delay.value);
  let step = Number(formEl.elements.step.value);
  let amount = Number(formEl.elements.amount.value);
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
