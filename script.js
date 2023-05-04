function getComputerChoice() {
    const choiceArray = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choiceArray.length);
    return choiceArray[randomIndex];
  }
  
  function playRound(playerInput, computerSelection) {
    let playerSelection = playerInput.trim().toLowerCase();
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")
    ) {
      playerScore++;
      return `${playerSelection} beats ${computerSelection}. Player Wins the round!`;
    } else if (
      (playerSelection === "scissors" && computerSelection === "rock") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "rock" && computerSelection === "paper")
    ) {
      computerScore++;
      return `${computerSelection} beats ${playerSelection}. Computer Wins the round!`;
    } else {
      return "Invalid Selection!";
    }
  }
  
  let playerScore = 0;
  let computerScore = 0;
  
  function game() {
    for (let i = 0; i < 5; i++) {
      let playerInput = prompt("Please make your selection! Enter 'rock', 'paper' or 'scissors':", "");
      let computerSelection = getComputerChoice();
      let result = playRound(playerInput, computerSelection);
      console.log(result);
    }
    if (playerScore === computerScore) {
      console.log(`No Winner! Player : ${playerScore} Computer : ${computerScore}`);
    } else if (computerScore > playerScore) {
      console.log(`Computer wins the game! Player : ${playerScore} Computer : ${computerScore}`);
    } else {
      console.log(`Player wins the game! Player : ${playerScore} Computer : ${computerScore}`);
    }
  }
  
  game();
  