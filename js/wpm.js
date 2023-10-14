export function calculateWPM(words, time) {
    const textWords = words;
    const seconds = time;
    
    const minutes = seconds / 60;
    const wpm = Math.round((textWords / minutes));
    
    return wpm
  }
  