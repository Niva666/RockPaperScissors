let playerGame = confirm("Shall we play Rock,Paper,Scissors??")

if (playerGame) {
    for (i = 1; i <= 5;i++) {
        alert("round " + i);
    let playerChoice = prompt("Eneter Rock,Paper or Scissors...???");

    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
            if(playerOne === "rock" 
            || playerOne === "paper" 
            || playerOne === "scissors") 
            {   console.log(playerOne)
                let computer = Math.floor(Math.random()*10);

                let choice;
                computer <=3 ? choice="rock" 
                : computer <=6 && computer >=4 ? choice="paper"
                : computer > 6 ? choice = "scissors"
                : "dick"
                alert(choice);

                let winner;
                let w1="player wins";
                let w2="computer wins";
                let w0="tie";

                playerOne === choice ? winner = w0
                : playerOne === "rock" && choice === "paper" ? winner = w2 
                : playerOne === "paper" && choice === "scissors" ? winner = w2 
                : playerOne === "scissors" && choice === "rock" ? winner = w2
                : winner = w1;
                alert(winner);


                

                let playAgain= confirm("Play Again");
                playAgain ? location.reload () : alert("Thanks for playing!");
                }
            else{alert("You didnt enter Rock, Paper or Scissors, Dude! This is a joke."
             + "ON YOU!!!");}
    }
    else {alert("I guess you really wanted to waste your Time!?")}
} }  
 else {alert("Ok, why did you click on this Programm then," + 
        "do something else then, dont waist my time then!!!")}