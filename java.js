function getComputerChoice () {
    let choice;
        let computer = Math.floor(Math.random()*10);
                computer <=3 ? choice="rock" 
                : computer <=6 && computer >=4 ? choice="paper"
                : computer > 6 ? choice = "scissors"
                : "dick"
                alert("Computerchoice: " + choice);
                return(choice);
}

function getPlayerChoice () {


    let playerChoice = prompt("Eneter Rock,Paper or Scissors...???");
    if (playerChoice){
    let playerOne = playerChoice.trim().toLowerCase();
    
        if(playerOne === "rock" 
        || playerOne === "paper" 
        || playerOne === "scissors") 
        {
        alert("PlayerChoice: " + playerOne);
        return(playerOne);
}  } else {alert("You came alll this way just to give up now...dude...now you Play!!!")}return;}


function playRound (playerSelection,computerSelection) {     


let userscore=0;
let compscore=0;

let a = confirm("Wanne play a game?")
if (a) {
let a = prompt("How many rounds do you wanne play?")
if(a != typeof(String) && a>0){
for(i = 1; i <= a; i++){
    alert("Round: " + i)
    
playerSelection = getPlayerChoice();
computerSelection = getComputerChoice();


if (playerSelection === computerSelection) {alert("Tie Game"), i-=1, alert("Same Round:")}

else if (playerSelection === "rock" && computerSelection === "scissors") 
{ alert("Player is the winner", + ("Playerscore :" +(userscore+=1)))}

else if(playerSelection === "paper" && computerSelection === "rock") 
{ alert("Player is the winner", +("Playerscore :" +(userscore+=1)))}

else if(playerSelection === "scissors" && computerSelection === "paper") 
{ alert("Player is the winner", +("Playerscore :" +(userscore+=1)))}

else {alert("Computer is the winner", +("Computerscore: " + (compscore+=1) ))}
} 

if(userscore>compscore) {alert("YOU WON!!!!YOU GO GET YOUR DREAMS")}
else if (userscore<compscore) {alert("GAME OVER")}
else{""}
}
else {alert("You like wasting Time?....Bye!!!")}
}
else{alert("OK,bye")}
return;


}
function alertFunction () {
playRound();}