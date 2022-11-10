let randomNumber = Math.floor(Math.random()) + 1;

const guessField = document.querySelector(".guessField");
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const bigOrSmall = document.querySelector("bigOrSmall");
const guessSubmit = document.querySelector(".guessSubmit");

let guessCount = 1;
let resetButton;

//function that checks the guess
function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guessCount.textContent = "Previous guess:";
  }
  guesses.textContent += userGuess + "";

  if (userGuess === randomNumber) {
    lastResult.textContent = "Well done, you got it right!";
    lastResult.style.backgroundColor = "green";
    bigOrSmall.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!GAME OVER!!!";
    setGameOver();
  } else {
    lastResult.textContent = "WRONG!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      bigOrSmall.textContent = "Last guess was too small!";
    } else if (userGuess > randomNumber) {
      bigOrSmall.textContent = "Last guess was too big!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Restart";
  document.body.appendChild(resetButton);
  document.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }
  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random()) + 1;
}
