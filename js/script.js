/* FUNCTIONS */
function randomNumberBetween(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + 1);
}

// CREATE a Function called getComputerChoice() with no parameters and returns a result.
function getComputerChoice() {
  let result = randomNumberBetween(MAX, MIN);
  let textResult = "";

  switch (result) {
    case 1:
      textResult = ROCK_TXT;
      break;
    case 2:
      textResult = PAPER_TXT;
      break;
    case 3:
      textResult = SCISSOR_TXT;
      break;
  }

  computerResultMessage.textContent = "I have choose " + textResult + "!";
  return textResult;
}

function validatePlayerWinner() {
  let playerWinsText = "The player beats the computer!";
  let cpuWinsText = "The computer beats you hardly!";

  return humanScore >= 5 ? playerWinsText : cpuWinsText;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === ROCK_TXT && computerChoice === SCISSOR_TXT) {
    humanScore++;
  } else if (computerChoice === ROCK_TXT && humanChoice === SCISSOR_TXT) {
    computerScore++;
  } else if (humanChoice === PAPER_TXT && computerChoice === ROCK_TXT) {
    humanScore++;
  } else if (computerChoice === PAPER_TXT && humanChoice === ROCK_TXT) {
    computerScore++;
  } else if (humanChoice === SCISSOR_TXT && computerChoice === PAPER_TXT) {
    humanScore++;
  } else if (computerChoice === SCISSOR_TXT && humanChoice === PAPER_TXT) {
    computerScore++;
  } else {
    computerResultMessage.textContent = "It is just a draw...";
  }
  humanScoreSpan.textContent = humanScore;
  computerScoreSpan.textContent = computerScore;
}

const MAX = 3;
const MIN = 1;

const ROCK_TXT = "ROCK";
const PAPER_TXT = "PAPER";
const SCISSOR_TXT = "SCISSOR";

const humanScoreSpan = document.getElementById("human-score");
const computerScoreSpan = document.getElementById("computer-score");

let humanScore = parseInt(humanScoreSpan.textContent);
let computerScore = parseInt(computerScoreSpan.textContent);

const rpsButton = document.querySelectorAll(".rps-button");

const computerResultMessage = document.getElementById("result-message");

rpsButton.item(0).addEventListener("click", () => {
  playRound(ROCK_TXT, getComputerChoice());
});

rpsButton.item(1).addEventListener("click", () => {
  playRound(PAPER_TXT, getComputerChoice());
});

rpsButton.item(2).addEventListener("click", () => {
  playRound(SCISSOR_TXT, getComputerChoice());
});
