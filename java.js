

let player = prompt("Rock,Paper or Scissors...???");
console.log(player);

function a () {
let computer = Math.floor(Math.random()*10);
console.log(computer);

let choice;
computer <=3 ? choice="rock" 
: computer <=6 && computer >=4 ? choice="paper"
: computer > 6 ? choice = "scissors"
: "dick"
console.log(choice);


let winner;
let w1="player wins";
let w2="computer wins";
let w0="tie";

player === choice ? winner=w0
: player === "rock" && choice === "paper" ? winner = w2 
: player === "paper" && choice === "scissors" ? winner = w2 
: player === "scissors" && choice === "rock" ? winner = w2
: winner = w1;
console.log(winner);
}
a();