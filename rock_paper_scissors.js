function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        return "Rock";
    } else if (computerChoice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}


function roundOfGame() {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();

    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "It's a tie!"
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        return "You lose";
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        return "You win";
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        return "You lose";
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        return "You win";
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        return "You win";
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        return "You lose";
    } else {
        return roundOfGame()
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundResult = roundOfGame();
    if (roundResult === "You win") {
        playerScore++ 
    } else if (roundResult === "You lose") {
        computerScore++;
    } 
    console.log(`${roundResult}\nPlayer score: ${playerScore}\nComputer score: ${computerScore}`);

    roundResult = roundOfGame();
    if (roundResult === "You win") {
        playerScore++ 
    } else if (roundResult === "You lose") {
        computerScore++;
    } 
    console.log(`${roundResult}\nPlayer score: ${playerScore}\nComputer score: ${computerScore}`);

    roundResult = roundOfGame();
    if (roundResult === "You win") {
        playerScore++ 
    } else if (roundResult === "You lose") {
        computerScore++;
    } 
    console.log(`${roundResult}\nPlayer score: ${playerScore}\nComputer score: ${computerScore}`);

    roundResult = roundOfGame();
    if (roundResult === "You win") {
        playerScore++ 
    } else if (roundResult === "You lose") {
        computerScore++;
    } 
    console.log(`${roundResult}\nPlayer score: ${playerScore}\nComputer score: ${computerScore}`);

    roundResult = roundOfGame();
    if (roundResult === "You win") {
        playerScore++ 
    } else if (roundResult === "You lose") {
        computerScore++;
    } 
    console.log(`${roundResult}\nPlayer score: ${playerScore}\nComputer score: ${computerScore}`);
}

game();