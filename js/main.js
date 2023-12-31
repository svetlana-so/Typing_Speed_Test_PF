import { fetchDataAndDisplay, arrayOfWordsFromApi } from "./displaytext.js";
import { startTimer } from "./timer.js";
import { calculateWPM } from "./wpm.js";
import { accuracy } from "./accuracy.js";
import { highlightCharacters } from "./highlightcharacters.js";
import { resetTest } from "./resetTest.js";

const textDiv = document.getElementById("text-div");
const textInputElement = document.getElementById("user-input");
const restartButton = document.getElementById("restart-button");
const resetButton = document.getElementById("reset-button");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");

let correctWords = 0;
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
  const userWords = textInputElement.value.split(" ");

  for (let i = 0; i < userWords.length; i++) {
    if (arrayOfWordsFromApi[i] === userWords[i]) {
      correctWords += 1;
    }
  }

  wpmDisplay.innerText = calculateWPM(correctWords, 60);
  typedWords = userWords.length;
  accuracyDisplay.innerHTML = accuracy(userWords.length, correctWords);

  console.log(userWords);
  console.log(correctWords);
});

function handleRestart() {
  location.reload();
}

resetButton.addEventListener("click", resetTest);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && event.target === document.body) {
    resetTest();
  }
});

restartButton.addEventListener("click", handleRestart);
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.target === document.body) {
    handleRestart();
  }
});

export { attempts, correctWords, typedWords };
