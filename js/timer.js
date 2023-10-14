const timer = document.getElementById('timer');
const textInputElement = document.getElementById('user-input')
let countdown = 10;
let timerInterval;

function startTimer() {
  timer.innerText = countdown;

  // Check if the timer is already running
  if (!timerInterval) {
    timerInterval = setInterval(() => {
      countdown -= 1; 
      timer.innerText = countdown;

      // Check if the countdown has reached zero
      if (countdown <= 0) {
        clearInterval(timerInterval); // Stop the timer
        alert('Time is over!'); 
        textInputElement.disabled = true;

        
      }
    }, 1000);
  }
}

export {startTimer}