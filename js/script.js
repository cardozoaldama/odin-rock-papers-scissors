/* FUNCTIONS */

// CREATE a Function called randomNumberBetween() with max and min and returns a result.
function randomNumberBetween(max, min)
{
    // This operation is kind of precision.
    return Math.floor(Math.random() * (max - min + 1) + 1);
}

// CREATE a Function called getComputerChoice() with no parameters and returns a result.
function getComputerChoice()
{
    // SET result to 0.
    let result = 0;
    // Round to the floor the operation.
    result = randomNumberBetween(3, 1);
    /*
        Number 1: Rock.
        Number 2: Paper.
        Number 3: Scissor.
    */
    // Conditionals:
    // A rock:
    if (result === 1)
    {
        return 'ROCK';
    }
    // A paper:
    else if (result === 2)
    {
        return 'PAPER';
    }
    // A scissor:
    else
    {
        return 'SCISSOR';
    }
}

// CREATE a Function called playRound() with pj and cpu which Returns a result.
// The parameters are the player's choice and computer's choice respectively.
function playRound(pj, cpu)
{
    // SET result to 'empty text'.
    let result = '';
    if (pj == cpu)
    {
        // Assign a draw in result.
         result = 'It is a draw!';
    }
    else if (pj == 'ROCK' && cpu == 'SCISSOR')
    {
        // Rock beats Scissors.
        result = 'You win! ' + pj + ' beats ' + cpu;
    }
    else if (pj == 'PAPER' && cpu == 'ROCK')
    {
        // Paper beats Rock.
        result = 'You win! ' + pj + ' beats ' + cpu;
    }
    else if (pj == 'SCISSOR' && cpu == 'PAPER')
    {
        // Scissors beats Paper.
        result = 'You win! ' + pj + ' beats ' + cpu;
    }
    else
    {
        result = 'You write ' + pj + ' incorrectly';
    }
    return result;
}

// -------------

// Where the logic begins:
console.log('ROCK, PAPERS, SCISSORS!');

// Main variables:
// SET playerSelection to empty text.
let playerSelection = '';
// SET computerSelection to empty text.
let computerSelection = '';
// ASSIGN computerSelection called a function getComputerChoice().
computerSelection = getComputerChoice();
// ASK the user for "Rock, Paper, or Scissor?" and assign the value in playerSelection:
playerSelection = prompt('Write one of these: Rock, Paper, or Scissors.');
// Convert playerSelection in all uppercase:
playerSelection = playerSelection.toUpperCase();
// PRINT a Function called playRound() with playerSelection and computerSelection Returning "result":
console.log('');