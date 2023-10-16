import { calculateWPM } from "./wpm.js";
import { accuracy } from "./accuracy.js";

export function updateAttemptsAndLocalStorage(arg1, arg2, arg3) {
    let attempts = arg1;
    let correctWords = arg2;
    let typedWords = arg3;
    const previousAttempt = attempts[attempts.length - 1];
    const finalAttemptResult = {
      attempt: attempts.length + 1,
      wpm: calculateWPM(correctWords, 60),
      accuracy: accuracy(typedWords, correctWords),
    };
  
    attempts.push(finalAttemptResult);
    let progressMessage = "No progress";
    if (previousAttempt) {
      if (finalAttemptResult.wpm > previousAttempt.wpm) {
        progressMessage = "You've made progress!";
      } else if (finalAttemptResult.wpm < previousAttempt.wpm) {
        progressMessage = "Your speed has decreased.";
      }
    }
    finalAttemptResult.progress = progressMessage;
  
    // Display the progress message in the "progress" div
    const progressDiv = document.getElementById("progress");
    progressDiv.textContent = progressMessage;
  
    // Save the updated attempts in local storage
    localStorage.setItem("attempts", JSON.stringify(attempts));
  }