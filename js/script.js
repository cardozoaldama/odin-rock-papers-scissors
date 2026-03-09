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
      textResult = "ROCK";
      break;
    case 2:
      textResult = "PAPER";
      break;
    case 3:
      textResult = "SCISSOR";
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
  if (humanChoice === "ROCK" && computerChoice === "SCISSOR") {
    humanScore++;
  } else if (computerChoice === "ROCK" && humanChoice === "SCISSOR") {
    computerScore++;
  } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
    humanScore++;
  } else if (computerChoice === "PAPER" && humanChoice === "ROCK") {
    computerScore++;
  } else if (humanChoice === "SCISSOR" && computerChoice === "PAPER") {
    humanScore++;
  } else if (computerChoice === "SCISSOR" && humanChoice === "PAPER") {
    computerScore++;
  } else {
    console.log("It is just a draw...");
  }
  humanScoreSpan.textContent = humanScore;
  computerScoreSpan.textContent = computerScore;
}

const MAX = 3;
const MIN = 1;

const humanScoreSpan = document.getElementById("human-score");
const computerScoreSpan = document.getElementById("computer-score");

let humanScore = parseInt(humanScoreSpan.textContent);
let computerScore = parseInt(computerScoreSpan.textContent);

const rpsButton = document.querySelectorAll(".rps-button");

const rpsRockText = document.querySelector(".rock-button__text").textContent;
const rpsPaperText = document.querySelector(".paper-button__text").textContent;
const rpsScissorText = document.querySelector(".paper-button__text").textContent;

const computerResultMessage = document.getElementById("result-message");

rpsButton.item(0).addEventListener("click", () => {
  playRound(rpsRockText, getComputerChoice());
});

rpsButton.item(1).addEventListener("click", () => {
  playRound(rpsPaperText, getComputerChoice());
});

rpsButton.item(2).addEventListener("click", () => {
  playRound(rpsScissorText, getComputerChoice());
});
