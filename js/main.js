import { fetchDataAndDisplay, arrayOfWordsFromApi } from "./displaytext.js";
import { startTimer } from "./timer.js";
import { calculateWPM } from "./wpm.js";
import { accuracy } from "./accuracy.js";
import { highlightCharacters } from "./highlightcharacters.js";
const textDiv = document.getElementById("text-div");
const textInputElement = document.getElementById("user-input");
const restartButton = document.getElementById("restart-button");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");
const arrayFromApiwithWords = arrayOfWordsFromApi;

let correctWords = 0; // Track the current word index
let typedWords = 0;

//for the table
const metricsTable = document.getElementById("metrics-table");
let timeInterval = 1;

// Call the function to start fetching data and displaying it
fetchDataAndDisplay();

textInputElement.addEventListener("input", () => {
  startTimer();
  const arrayQuote = textDiv.querySelectorAll("span");
  const arrayValue = textInputElement.value.split("");
  correctWords = 0;
  highlightCharacters(arrayQuote, arrayValue);

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
  console.log(userWords.length);
  console.log(correctWords);
});

function updateMetricsTable() {
  // Create a new row for the metrics table
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
      <td>${timeInterval} min</td>
      <td>${calculateWPM(correctWords, timeInterval)}</td>
      <td>${accuracy(typedWords, correctWords)}%</td>
  `;

  // Add the new row to the table
  metricsTable.appendChild(newRow);

  timeInterval++; // Increment the time interval
}

// Call this function whenever you want to update the metrics table
updateMetricsTable();

restartButton.addEventListener("click", () => {
  location.reload();
});

// function clearOutInput() {
//   const textInnerElement = document.getElementById('user-input')
//   textInnerElement.value = null;
// }
