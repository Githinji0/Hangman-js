const hangmanBox = document.querySelectorAll(".hangman-character-box");
const wordDisplay = document.querySelector(".character-box");

const maxWrongAttempts = 6;
let numberOfTries = 0;

const correctGuesses = [];
const wrongGuesses = [];

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
  "stage6.svg",
];

hangmanBox[0].innerHTML = `<img src="${hangmanImage[2]}" alt="stage-0">`;

const generateRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
};

const selectedWord = generateRandomWord();
console.log("Selected word:", selectedWord);
const diplayNumberOfLetters = () => {
  for (let i = 0; i < selectedWord.length; i++) {
    displayedWord.push("_");
  }
};

const getGuessedInput = () => {
  const guessInput = document.querySelector("input");
  const guessedInput = guessInput.value.trim();
  if (guessedInput.length !== 1) {
    alert("Please enter a single letter.");
    return null;
  }

  guessInput.value = "";
  console.log("Guessed letter:", guessedInput);
  return guessedInput;
};
const diplayCharacters = () => {
  let displayedWord = selectedWord.split("").map(() => "_");
  wordDisplay.innerHTML = displayedWord.join(" ");
};
diplayCharacters()