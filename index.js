let timerInterval;
let elapsedTime = 0;
let isRunning = false;

const display = document.getElementById('display');
const lapsContainer = document.getElementById('laps');

document.getElementById('start').addEventListener('click', () => {
  if (!isRunning) {
    isRunning = true;
    timerInterval = setInterval(() => {
      elapsedTime += 10; // Increase time in milliseconds
      display.textContent = formatTime(elapsedTime);
    }, 10);
  }
});

document.getElementById('pause').addEventListener('click', () => {
  clearInterval(timerInterval);
  isRunning = false;
});

document.getElementById('reset').addEventListener('click', () => {
  clearInterval(timerInterval);
  isRunning = false;
  elapsedTime = 0;
  display.textContent = "00:00:00";
  lapsContainer.innerHTML = ""; // Clear lap times
});

document.getElementById('lap').addEventListener('click', () => {
  if (isRunning) {
    const lapTime = document.createElement('li');
    lapTime.textContent = formatTime(elapsedTime);
    lapsContainer.appendChild(lapTime);
  }
});

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const milliseconds = Math.floor((ms % 1000) / 10);

  return `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
}

function pad(number) {
  return number < 10 ? '0' + number : number;
}
