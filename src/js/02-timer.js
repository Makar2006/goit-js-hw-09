import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix, { Report } from 'notiflix';

const inputEl = document.getElementById('datetime-picker');
const buttonEl = document.querySelector('[data-start]');
const spanDayEl = document.querySelector('[data-days]');
const spanHourEl = document.querySelector('[data-hours]');
const spanMinEl = document.querySelector('[data-minutes]');
const spanSecEl = document.querySelector('[data-seconds]');
buttonEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const now = new Date();
    if (selectedDates[0].getTime() < now) {
      buttonEl.disabled = true;

      Notiflix.Report.warning(
        'Warning',
        'Wrong date. Choose future date!!!',
        'Ok'
      );
    } else {
      buttonEl.disabled = false;
    }
  },
};
flatpickr(inputEl, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);

  const hours = Math.floor((ms % day) / hour);

  const minutes = Math.floor(((ms % day) % hour) / minute);

  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

buttonEl.addEventListener('click', onClick);

function onClick() {
  let timer = setInterval(() => {
    let count = new Date(inputEl.value) - new Date();
    if (count >= 0) {
      let timerAswer = convertMs(count);
      spanDayEl.textContent = timerAswer.days;
      spanHourEl.textContent = timerAswer.hours;
      spanMinEl.textContent = timerAswer.minutes;
      spanSecEl.textContent = timerAswer.seconds;
    } else if (count < 0) {
      Notiflix.Report.success('Wow', 'Congratulations!!!!', 'Thanks');
      clearInterval(timer);
    }
  }, 1000);
}
