function getComputerChoice () {
    let choice;
        let computer = Math.floor(Math.random()*10);
                computer <=3 ? choice="rock" 
                : computer <=6 && computer >=4 ? choice="paper"
                : computer > 6 ? choice = "scissors"
                : "dick"
                alert("Computer choice: " + choice);
                return(choice);
}
function getPlayerChoice () {


    let playerChoice = prompt("Eneter Rock,Paper or Scissors...???");
    
    if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    {
        if(playerOne === "rock" 
        || playerOne === "paper" 
        || playerOne === "scissors") 
        {
        return(playerChoice);}
        else {alert("Didnt enter value!")} 
    }
    }
    else {alert("You like wasting Time")}
} 
function playRound (playerSelection,computerSelection) {     

playerSelection = getPlayerChoice();
computerSelection = getComputerChoice();

let winner;
let w0 = ("Tie Game");
let w1 = ("Player is the winner");
let w2 = ("Computer is the winner");
let userscore=0;
let compscore=0;

playerSelection === computerSelection ? winner = w0
: playerSelection === "rock" && computerSelection === "scissors" ? winner = w1
: playerSelection === "paper" && computerSelection === "rock" ? winner = w1
: playerSelection === "scissors" && computerSelection === "paper" ? winner = w1
: winner = w2;
alert(winner);

}
function playGame() {


let winner;
let w0 = ("Tie Game");
let w1 = ("Player is the winner");
let w2 = ("Computer is the winner");
let userscore=0;
let compscore=0;
let letsPlay = confirm("Play a game?")
if(letsPlay){  
{for (let i = 1; i <= 5; i++) {
alert (`Round : ${i}`);
playRound();
}
}}
else{alert("Thanks")
}
}
playGame();