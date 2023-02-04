const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');


buttonStart.addEventListener('click', onBtnStart);
buttonStop.addEventListener('click', onBtnStop);

let intervalId = null;
let isActive = false;

function onBtnStart() {
  if (isActive) {
    return;
  }
  isActive = true;
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onBtnStop() {
  clearInterval(intervalId);
  isActive = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
