function getComputerChoice() {
    const random = Math.floor(Math.random() * 3) + 1;
    
    switch (random) {
        case 1:
            return "rock"
            break;
        case 2:
            return "paper";
            break;
        case 3: 
            return "scissors";
            break;
    }
}

function getHumanChoice() {
    const userInput = prompt("What are you choosing: rock, paper or Scissors");
    return userInput;
}

let humanScore = 0;
let computerScore = 0;



function playGame() {
    function playRound(humanChoice, computerChoice) {
        const caseInsHumanChoice = humanChoice
        if (caseInsHumanChoice === "rock" && computerChoice === "paper" ||
            caseInsHumanChoice === "paper" && computerChoice === "scissors" ||
            caseInsHumanChoice === "scissors" && computerChoice === "rock" ) {
            console.log(`You lose! ${computerChoice} beats ${caseInsHumanChoice}`);
            computerScore += 1;
        } else if (
            computerChoice === "rock" && caseInsHumanChoice === "paper" ||
            computerChoice === "paper" && caseInsHumanChoice === "scissors" ||
            computerChoice === "scissors" && caseInsHumanChoice === "rock"
        ) {
            console.log(`You win! ${caseInsHumanChoice} beats ${computerChoice}`);
            humanScore += 1;
        } else {
            console.log(`Draw! ${caseInsHumanChoice} and ${computerChoice}`) 
        }
    
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    

    
}
for (let i = 1; i <= 5; i++) {
    playGame();
}
console.log(`HumanScore: ${humanScore} ComputerScore: ${computerScore}`);

if (humanScore > computerScore) {
    console.log("Game Over: Player wins the game")
} else {
    console.log("Game Over: Computer wins the game");
}