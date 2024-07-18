let startTime; // To store time when start button is clicked
let elapsedTime = 0; // Total elapsed time in milliseconds
let timerInterval; // Interval to keep track of elapsed time
let laps = []; // Array to store lap timings

const display = document.getElementById('display');
const lapsList = document.getElementById('laps');

function formatTime(milliseconds) {
    let date = new Date(milliseconds);
    let minutes = date.getUTCMinutes().toString().padStart(2, '0');
    let seconds = date.getUTCSeconds().toString().padStart(2, '0');
    let millis = date.getUTCMilliseconds().toString().padStart(3, '0');
    return `${minutes}:${seconds}.${millis}`;
}

function printTime() {
    display.textContent = formatTime(elapsedTime);
}

function startStopwatch() {
    if (!startTime) {
        startTime = Date.now() - elapsedTime;
    }
    timerInterval = setInterval(function() {
        elapsedTime = Date.now() - startTime;
        printTime();
    }, 10); // Update display every 10ms
}

function pauseStopwatch() {
    clearInterval(timerInterval);
}

function resetStopwatch() {
    clearInterval(timerInterval);
    startTime = null;
    elapsedTime = 0;
    laps = [];
    display.textContent = '00:00.000';
    lapsList.innerHTML = '';
}

function lap() {
    let lapTime = elapsedTime;
    laps.push(lapTime);
    let lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${laps.length}: ${formatTime(lapTime)}`;
    lapsList.appendChild(lapItem);
}
