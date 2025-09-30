/* FUNCTIONS */

const MAX = 3;
const MIN = 1;

let humanScore = 0;
let computerScore = 0;

// CREATE a Function called randomNumberBetween() with max and min and returns a result.
function randomNumberBetween(max, min) {
    // This operation is kind of precision.
    return Math.floor(Math.random() * (max - min + 1) + 1);
}

// CREATE a Function called getComputerChoice() with no parameters and returns a result.
function getComputerChoice() {
    // SET result to 0.
    let result = 0;
    // Round to the floor the operation.
    result = randomNumberBetween(MAX, MIN);
    /*
        Number 1: Rock.
        Number 2: Paper.
        Number 3: Scissor.
    */
    // Conditionals:
    // A rock:
    if (result === 1) {
        return 'ROCK';
    }
    // A paper:
    else if (result === 2) {
        return 'PAPER';
    }
    // A scissor:
    else {
        return 'SCISSOR';
    }
}

function getHumanChoice() {
    playerSelection = prompt('Write one of these: Rock, Paper, or Scissor.');
    return playerSelection.toUpperCase();
}

// Where the logic begins:
console.log('ROCK, PAPERS, SCISSORS!');

// MAIN FUNCTION GAME:

function game() {
    // Main variables:
    // SET playerSelection to empty text.
    let playerSelection = '';
    // SET computerSelection to empty text.
    let computerSelection = '';
    // ASSIGN computerSelection called a function getComputerChoice().
    computerSelection = getComputerChoice();
    // ASK the user for "Rock, Paper, or Scissor?" and assign the value in playerSelection:
    playerSelection = prompt('Write one of these: Rock, Paper, or Scissor.');
    // Convert playerSelection in all uppercase:
    playerSelection = playerSelection.toUpperCase();
    // PRINT a Function called playRound() with playerSelection and computerSelection Returning "result":
    console.log(playRound(playerSelection, computerSelection));
}

function playGame() {
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
        }
        else if (humanChoice == 'PAPER' && computerChoice == 'ROCK') {
            // Paper beats Rock.
            result = 'You win! ' + humanChoice + ' beats ' + computerChoice;
        }
        else if (humanChoice == 'SCISSOR' && computerChoice == 'PAPER') {
            // Scissors beats Paper.
            result = 'You win! ' + humanChoice + ' beats ' + computerChoice;
        }
        else {
            // If nothing was written correctly:
            result = 'You write ' + humanChoice + ' incorrectly';
        }
        // Return the final result:
        return result;
    }
}

// Gaming beats-of-five!
game();
game();
game();
game();
game();