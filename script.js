const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const statusBox = document.querySelector(".status");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerSelection = "";
let roundCounter = 0;

rockBtn.addEventListener("click", function () {
  playerSelection = rockBtn.id;
  playRound(playerSelection);
});

paperBtn.addEventListener("click", function () {
  playerSelection = paperBtn.id;
  playRound(playerSelection);
});

scissorsBtn.addEventListener("click", function () {
  playerSelection = scissorsBtn.id;
  playRound(playerSelection);
});

function getComputerChoice() {
  const choiceArray = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choiceArray.length);
  return choiceArray[randomIndex];
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  if (playerSelection === computerSelection) {
    const para = document.createElement("p");
    para.textContent = "It's a tie!";
    statusBox.textContent = "";
    statusBox.appendChild(para);
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore++;
    playerScoreDisplay.textContent = `Score: ${playerScore}`;
    const para = document.createElement("p");
    para.textContent = `${
      playerSelection[0].toUpperCase() + playerSelection.substring(1)
    } beats ${
      computerSelection[0].toUpperCase() + computerSelection.substring(1)
    }. Player Wins the round!`;
    statusBox.textContent = "";
    statusBox.appendChild(para);
  } else if (
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "rock" && computerSelection === "paper")
  ) {
    computerScore++;
    computerScoreDisplay.textContent = `Score: ${computerScore}`;
    const para = document.createElement("p");
    para.textContent = `${
      computerSelection[0].toUpperCase() + computerSelection.substring(1)
    } beats ${
      playerSelection[0].toUpperCase() + playerSelection.substring(1)
    }. Computer Wins the round!`;
    statusBox.textContent = "";
    statusBox.appendChild(para);
  }
  roundCounter++;
  if (roundCounter === 5) {
    let winner;
    if (playerScore === computerScore) {
      winner = `No Winner!`;
    } else if (computerScore > playerScore) {
      winner = `Computer wins the game!

      Computer : ${computerScore} Player : ${playerScore}`;
    } else {
      winner = `Player wins the game! 

      Player : ${playerScore} Computer : ${computerScore}`;
    }
    const para = document.createElement("p");
    para.innerText = `Game Over! 
    
    ${winner}`;
    statusBox.appendChild(para);

    // Reset the game
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = "Score: 0";
    computerScoreDisplay.textContent = "Score: 0";
    roundCounter = 0;
  }
}
