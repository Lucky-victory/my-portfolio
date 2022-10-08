const outerCircleSeconds = document.querySelector("[data-seconds-outer]");
const outerCircleMinutes = document.querySelector("[data-minutes-outer]");
const outerCircleHours = document.querySelector("[data-hours-outer]");
const outerCircleDays = document.querySelector("[data-days-outer]");
const timerSeconds = document.querySelector("[data-timer-seconds]");
const timerMinutes = document.querySelector("[data-timer-minutes]");
const timerHours = document.querySelector("[data-timer-hours]");
const timerDays = document.querySelector("[data-timer-days]");
const circleTotalLength = 380;
const startDate = "2022-10-30T00:00:00";
const startDay = new Date(startDate).getTime();
const intervalId = setInterval(() => {
  const today = new Date().getTime();
  const timeDiff = startDay - today;
  const time = new Date(timeDiff);

  if (timeDiff <= 0) {
    clearInterval(intervalId);
    return;
  }
  setTimerSeconds(time);
  setTimerMinutes(time);
  setTimerHours(time);
  setTimerDays(timeDiff);
}, 1000);

function setTimerSeconds(time) {
  const sec = new Date(time).getSeconds();

  const secondsPercent = circleTotalLength - (circleTotalLength / 60) * sec;

  timerSeconds.textContent = sec < 10 ? "0" + sec : sec;

  outerCircleSeconds.style.strokeDashoffset = secondsPercent;
}
function setTimerMinutes(time) {
  const min = new Date(time).getMinutes();

  const minutesPercent = circleTotalLength - (circleTotalLength / 60) * min;

  timerMinutes.textContent = min < 10 ? "0" + min : min;

  outerCircleMinutes.style.strokeDashoffset = minutesPercent;
}
function setTimerHours(time) {
  const hr = new Date(time).getHours() - 1;
  const hoursPercent = circleTotalLength - (circleTotalLength / 24) * hr;

  timerHours.textContent = hr;

  outerCircleHours.style.strokeDashoffset = hoursPercent;
}
function setTimerDays(timeDiff) {
  const oneDay = 24 * 60 * 60 * 1000;
  const days = Math.floor(timeDiff / oneDay);
  const daysPercent = circleTotalLength - (circleTotalLength / 30) * days;

  timerDays.textContent = days;

  outerCircleDays.style.strokeDashoffset = daysPercent;
}
