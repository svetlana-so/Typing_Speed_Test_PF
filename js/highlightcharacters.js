export function highlightCharacters(correctCharacters, typedCharacters) {
    correctCharacters.forEach((characterSpan, index) => {
      const character = typedCharacters[index];
      if (character == null) {
        characterSpan.classList.remove('correct', 'incorrect');
      } else if (character === characterSpan.innerText) {
        characterSpan.classList.add('correct');
        characterSpan.classList.remove('incorrect');
      } else {
        characterSpan.classList.remove('correct');
        characterSpan.classList.add('incorrect');
      }
    });
  }