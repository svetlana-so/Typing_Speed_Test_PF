export function accuracy(totalWords, typedWords) {
  const accuracy = (typedWords * 100) / totalWords;
  return Math.floor(accuracy);
}
