const API = "https://poetrydb.org/author/Emily%20Dickinson"

async function getArrayOfines() {
  try {
    const response = await fetch(API);
    const data = await response.json();

    // Filter poems with linecount > 15
    const poemsWithMoreThan15Lines = data.filter(
      (poem) => parseInt(poem.linecount) > 20
    );

    if (poemsWithMoreThan15Lines.length > 0) {
        //generates a random index 
      const randomPoem =
        poemsWithMoreThan15Lines[
          Math.floor(Math.random() * poemsWithMoreThan15Lines.length)
        ];
      const poemLines = randomPoem.lines;
      return poemLines;
    
    } else {
      console.log("No poems with more than 15 lines found.");
      return [];
    }
  } catch (error) {
    console.log("Error: ", error);
    return [];
  }
}

//this function split the sentences into separate words
function words(anyArrayOfLines) {
  const words = anyArrayOfLines
    .join(" ") // Join the poem lines into a single string
    .split(/\s+/) // Split by one or more whitespace characters
    .map((word) => word.toLowerCase()) // Transform to lowercase
    .map((word) => word.replace(/[^a-z]/g, "")) // Remove non-alphabetic characters
    .filter((word) => word.length > 2);
  return words;
  
} 
async function finalString() {
      const arrayOfLines = await getArrayOfines()
      const arrayOfWords = words(arrayOfLines);
      return arrayOfWords; // Return the array of words directly
  }

export { finalString };