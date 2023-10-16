import { fetchDataAndDisplay, arrayOfWordsFromApi } from "./displaytext.js";
import { startTimer } from "./timer.js";
import { calculateWPM } from "./wpm.js";
import { accuracy } from "./accuracy.js";
import { highlightCharacters } from "./highlightcharacters.js";
import { updateChart } from "./chartuppdate.js";
import { resetTest } from "./resetTest.js";

const textDiv = document.getElementById("text-div");
const textInputElement = document.getElementById("user-input");
const restartButton = document.getElementById("restart-button");
const resetButton = document.getElementById("reset-button");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");
const arrayFromApiwithWords = arrayOfWordsFromApi;

let correctWords = 0; // Track the current word index
let typedWords = 0;
let attempts = JSON.parse(localStorage.getItem("attempts")) || [];

fetchDataAndDisplay();
if (!localStorage.getItem("attempts")) {
  localStorage.setItem("attempts", JSON.stringify([]));
}

textInputElement.addEventListener("input", () => {
  startTimer();
  const arrayQuote = textDiv.querySelectorAll("span");
  const arrayValue = textInputElement.value.split("");
  highlightCharacters(arrayQuote, arrayValue);

  correctWords = 0;
  const userWords = textInputElement.value.split(" "); //its an array

  for (let i = 0; i < userWords.length; i++) {
    if (arrayFromApiwithWords[i] === userWords[i]) {
      correctWords += 1;
    }
  }

  wpmDisplay.innerText = calculateWPM(correctWords, 60);
  typedWords = userWords.length;
  accuracyDisplay.innerHTML = accuracy(userWords.length, correctWords);

  //for checking
  console.log(userWords);
  console.log(correctWords);
});

function handleRestart() {
  const finalAttemptResult = {
    attempt: attempts.length + 1,
    wpm: calculateWPM(correctWords, 60),
    accuracy: accuracy(typedWords, correctWords),
  };

  attempts.push(finalAttemptResult);

  // Save the updated attempts in local storage
  localStorage.setItem("attempts", JSON.stringify(attempts));

  location.reload(); // Reload the page
}

resetButton.addEventListener("click", resetTest);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && event.target === document.body) {
    resetTest(); // Call the resetTest function to reset the test
  }
});

restartButton.addEventListener("click", handleRestart);
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.target === document.body) {
    handleRestart(); // Call the combined function to handle restarting and resetting
  }
});

updateChart(attempts);
