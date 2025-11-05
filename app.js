const hangmanBox = document.querySelectorAll("hangman-character-box");
const maxWrongAttempts = 6;
const numberOfTries = 0;
const words = [
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
];
const hangmanImage = [
  "stage0.svg",
  "stage1.svg",
  "stage2.svg",
  "stage3.svg",
  "stage4.svg",
  "stage5.svg",
  "stage-6.svg",
];

const generateRandomWord = () => {
    
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
};

const selectedWord = generateRandomWord();
console.log(selectedWord);
const getGuessedInput = () => {
    const guessInput = document.querySelector("input").value().trim();
  const guessedInput = guessInput.value;
  if (guessedInput.length > 1 || guessedInput.length === 0) {
    alert("Please enter a single letter.");
    return null;
  }
  guessInput.value = "";
  console.log(guessedInput);
  return guessedInput;
};
