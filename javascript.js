let userScore = 0
let cpuScore = 0
let tie = 0
const playerSelection = prompt();
const computerSelection = computerPlay();
let r = "Rock"
let s = "Scissors"
let p = "Paper"







function computerPlay () {
let computerChoice = ["Rock", "Paper", "Scissors"];
return computerChoice[Math.floor(Math.random()*computerChoice.length)];
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        
    console.log("Tie");
    tie++
    return tie;
    
    } else if (playerSelection===r&&computerSelection===s || playerSelection===p&&computerSelection===r || playerSelection===s&&computerSelection===p){
        
    console.log("You Win! " + playerSelection + " beats " + computerSelection + "!");
    userScore++
    return userScore;
    }
    else {
        
    console.log("You Lose! " + computerSelection + " beats " + playerSelection + "!");
    cpuScore++
    return cpuScore
    }
  }
  playRound(playerSelection, computerSelection)
  console.log(tie, userScore, cpuScore)

  function game(){
    for (let i = 0; (userScore + cpuScore) < 5; i++) {
        playRound(playerSelection, computerSelection)
        console.log(`The current score is: Player - ${userScore}, Computer - ${cpuScore}.`);
    }
    
  }
  game()
  
