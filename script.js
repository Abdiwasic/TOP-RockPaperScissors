const bodyEl = document.querySelector("body");
const btns = document.querySelectorAll(".btn");
const result = document.querySelector(".result");
const computerScoreSpan = document.querySelector(".computer-score");
const playerScoreSpan = document.querySelector(".player-score");
const gameResult = document.querySelector(".game-result");

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3) + 1;
  switch (random) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
  }
}
let humanScore = 0;
let computerScore = 0;

function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (
      (humanChoice === "rock" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "rock")
    ) {
      result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
      computerScore += 1;
      computerScoreSpan.textContent = computerScore;
    } else if (
      (computerChoice === "rock" && humanChoice === "paper") ||
      (computerChoice === "paper" && humanChoice === "scissors") ||
      (computerChoice === "scissors" && humanChoice === "rock")
    ) {
      result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
      humanScore += 1;
      playerScoreSpan.textContent = humanScore;
    } else {
      result.textContent = `Draw! ${humanChoice} and ${computerChoice}`;
    }

    if (computerScore === 5) {
      btns.forEach((btn) => btn.remove());
      bodyEl.removeChild(result);
      gameResult.textContent = `Game Over! Computer wins the game`;
    } else if (humanScore === 5) {
      btns.forEach((btn) => btn.remove());
      bodyEl.removeChild(result);
      gameResult.textContent = `Game Over! player wins the game`;
    }
  }

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      playRound(e.target.id, getComputerChoice());
    });
  });
}

playGame();
