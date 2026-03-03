/* FUNCTIONS */
function randomNumberBetween(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + 1);
}

// CREATE a Function called getComputerChoice() with no parameters and returns a result.
function getComputerChoice() {
  let result = randomNumberBetween(MAX, MIN);
  switch (result) {
    case 1:
      return "ROCK";
    case 2:
      return "PAPER";
    case 3:
      return "SCISSOR";
  }
}

function validatePlayerWinner() {
  let playerWinsText = "The player beats the computer!";
  let cpuWinsText = "The computer beats you hardly!";

  return humanScore > 5 ? playerWinsText : cpuWinsText;
}

const MAX = 3;
const MIN = 1;

const humanScoreSpan = document.querySelector("#human-score");
const computerScoreSpan = document.querySelector("#computer-score");

let humanScore = parseInt(humanScoreSpan.textContent);
let computerScore = parseInt(computerScoreSpan.textContent);

const rpsButton = document.querySelectorAll(".rps-button");
