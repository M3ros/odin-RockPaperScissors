let userScore = parseInt(0);
let cpuScore = parseInt(0);
let win = "You Win!"
let lose = "You Lose!"
let tie = "It's a Tie!"







function computerPlay () {
   let random = Math.random();
    if (random <= 0.3333) {
        return "paper";
    } else if (random >= 0.6666) {
        return "rock";
    } else {
        return "scissors";
    }
  }

  function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "paper") {
            cpuScore++;
            return lose;
        } else if (computerSelection === "rock") {
            return tie;
        } else {
            userScore++;
            return win;
        }
    }

    if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "paper") {
            userScore++;
            return win;
        } else if (computerSelection === "rock") {
            cpuScore++;
            return lose;
        } else {
            return tie;
        }
    }

    if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "paper") {
            return tie;
        } else if (computerSelection === "rock") {
            userScore++;
            return win;
        } else {
            cpuScore++;
            return lose;
        }
    }
}
let i = 0
function game(){
  let playerSelection = prompt("Pick a move");
  const computerSelection = computerPlay()
  console.log(playRound(playerSelection, computerSelection))
  console.log("your score = " + userScore);
  console.log("Computer's score = " + cpuScore);
  i++;
  if (i !== 5) {
      game();
  } else {
      alert("Game Over=> User("+userScore+") vs Computer("+cpuScore+")");
  }
}
  game();
  
