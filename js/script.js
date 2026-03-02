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

const MAX = 3;
const MIN = 1;

const humanScore = document.querySelector("#human-score");
const computerScore = document.querySelector("#computer-score");

const rpsButton = document.querySelectorAll(".rps-button");
