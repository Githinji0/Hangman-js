const hangmanBox = document.querySelectorAll("hangman-character-box")
const guessInput = document.querySelectorAll("input")
const maxWrongAttempts = 6;
const numberOfTries = 0;
const words =[
    "javascript",
    "hangman",
    "programming",
    "developer",
    "function",
    "variable",
    "object",
    "array",
    "browser",
    "document",
    "event",

]
const hangmanImage = [
    "stage0.svg",
    "stage1.svg",
    "stage2.svg",
    "stage3.svg",
    "stage4.svg",
    "stage5.svg",
    "stage-6.svg",
]

const generateRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}
const selectedWord = generateRandomWord();
console.log(selectedWord);

