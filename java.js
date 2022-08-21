

let player = prompt("Rock,Paper or Scissors...???");
console.log(player);

function a () {
let computer = Math.floor(Math.random()*10);
console.log(computer);

let choice;
if (computer <=3) {choice="rock"}
    else if (computer <=6 , computer >=4) {choice="paper"}
    else if (computer > 6) {choice = "scissors"}
    else {"Fuck this"}
console.log(choice);

let winner;
let w1="player wins";
let w2="computer wins";
let w0="tie";

if (player === choice) {winner=w0}
else if (player === "rock") {
    if (choice === "paper") {
        winner = w2
    }
    else {winner = w1  }
}
else if (player === "rock") {
    if (choice === "scissors") {
        winner = w1
    }
    else {winner = w2}
}
else if (player === "paper") {
        if (choice === "scissors") {
            winner = w2
        }
        else {winner = w1}
    }
else if (player === "scissors") {
        if (choice === "rock") {
            winner = w2
        }
        else {winner = w1}

}
console.log(winner);
}

a();