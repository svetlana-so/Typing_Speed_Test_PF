
export function accuracy(arg1, arg2) {
    const totalWords = arg1;
    const typedWords = arg2;

    const accuracy = (typedWords*100)/totalWords;
    return Math.floor(accuracy)
}

