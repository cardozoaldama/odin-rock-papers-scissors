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

function getHumanChoice() {
  playerSelection = prompt('Write one of these: Rock, Paper, or Scissor.');
  return playerSelection.toUpperCase();
}

function playGame() {
  let humanChoice;
  let computerChoice;
  let result;
  // CREATE a Function called playRound() with humanChoice and computerChoice which Returns a result.
  // The parameters are the player's choice and computer's choice respectively.
  function playRound(humanChoice, computerChoice) {
    // SET result to 'empty text'.
    let result = '';
    if (humanChoice == computerChoice) {
      // Assign a draw in result.
      result = 'It is a draw!';
    }
    else if (humanChoice == 'ROCK' && computerChoice == 'SCISSOR') {
      // Rock beats Scissors.
      result = 'You win! ' + humanChoice + ' beats ' + computerChoice;
      humanScore++;
    }
    else if (computerChoice == 'ROCK' && humanChoice == 'SCISSOR') {
      result = 'You LOST! ' + computerChoice + ' beats ' + humanChoice;
      computerScore++;
    }
    else if (humanChoice == 'PAPER' && computerChoice == 'ROCK') {
      // Paper beats Rock.
      result = 'You win! ' + humanChoice + ' beats ' + computerChoice;
      humanScore++;
    }
    else if (computerChoice == 'PAPER' && humanChoice == 'ROCK') {
      // Paper beats Rock.
      result = 'You LOST! ' + computerChoice + ' beats ' + humanChoice;
      computerScore++;
    }
    else if (humanChoice == 'SCISSOR' && computerChoice == 'PAPER') {
      // Scissors beats Paper.
      result = 'You win! ' + humanChoice + ' beats ' + computerChoice;
      humanScore++;
    }
    else if (computerChoice == 'SCISSOR' && humanChoice == 'PAPER') {
      // Scissors beats Paper.
      result = 'You LOST! ' + computerChoice + ' beats ' + humanChoice;
      computerScore++;
    }
    else {
      // If nothing was written correctly:
      result = 'You write ' + humanChoice + ' incorrectly';
    }
    // Return the final result:
    return result;
  }

}


const MAX = 3;
const MIN = 1;

let humanScore = 0;
let computerScore = 0;

// Where the logic begins:
console.log('ROCK, PAPERS, SCISSORS!');
playGame();

console.log('FINAL POINTS');
console.log('Human score', humanScore);
console.log('Computer score', computerScore);
if (humanScore > computerScore) {
  console.log('You win, human!');
}
else {
  console.log('So bad... Computer wins!');
}
