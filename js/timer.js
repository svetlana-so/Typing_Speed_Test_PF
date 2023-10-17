import { updateAttemptsAndLocalStorage } from "./updateLocalStorage.js";
import { attempts, correctWords, typedWords } from "./main.js";
import { updateChart } from "./chartuppdate.js";

const timer = document.getElementById("timer");
const textInputElement = document.getElementById("user-input");

let countdown = 60;
timer.innerText = countdown;
let timerInterval;

function closeCustomAlert() {
  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}

// Inside the startTimer function, display the overlay and change the button's ID
function startTimer() {
  timer.innerText = countdown;

  if (!timerInterval) {
    timerInterval = setInterval(() => {
      countdown -= 1;
      timer.innerText = countdown;

      if (countdown <= 0) {
        clearInterval(timerInterval);
        // Display the overlay when the timer is over
        const overlay = document.getElementById("overlay");
        overlay.style.display = "flex";
        textInputElement.disabled = true;

        const okButton = document.getElementById("ok-button");
        okButton.addEventListener("click", () => {
          closeCustomAlert();
          updateAttemptsAndLocalStorage(attempts, correctWords, typedWords);
          updateChart(attempts);
        });
      }
    }, 1000);
  }
}

export { startTimer };
