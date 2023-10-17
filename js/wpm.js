export function calculateWPM(textWords, seconds) {
    const minutes = seconds / 60;
    const wpm = Math.round((textWords / minutes));
    
    return wpm
  }
  