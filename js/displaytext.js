import { finalString } from "./api.js";

const arrayOfWordsFromApi = await finalString();
async function fetchDataAndDisplay() {
    try {
      const textDiv = document.getElementById('text-div')
      textDiv.innerHTML = ''
      // Join the array of words into a single string
      const textToDisplay = arrayOfWordsFromApi.join(' ');

      textToDisplay.split('').forEach(char => {
        const charSpan = document.createElement('span') 
        charSpan.innerText = char
        textDiv.appendChild(charSpan)
      })
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

export {fetchDataAndDisplay, arrayOfWordsFromApi}  

