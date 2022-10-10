const yes = document.querySelector('.yes');
const no = document.querySelector('.no');
const signs = document.querySelector('.signs');
const play = document.querySelector('.play');
const bye = document.querySelector('.bye');
const bro = document.querySelector('.bro');
const bro2 = document.querySelector('.bro2');
const winner = document.querySelector('.winner');
const sign = document.querySelectorAll(".sign");
const ps = document.querySelector(".ps");
const cs = document.querySelector(".cs");
const round = document.querySelector(".round");
const tie = document.querySelector(".Tie");
const gameWinner = document.querySelector('.gameWinner');

function revealSigns () {
    if(play.style.display != "none") {
        signs.style.display = "block"
        play.style.display = "none"
    } 
}

function goodBye () {
    if(play.style.display != "none")
        bye.style.display = "block"
        play.style.display = "none"
} 

no.addEventListener('click', goodBye);
yes.addEventListener('click' , revealSigns);

let userscore = 0;
let compscore = 0;
let tiescore = 0;
let playerChoise;
let computerChoice;


function playerTurn () {
    sign.forEach((sign) => {
        sign.addEventListener("click", function () {   
            playerChoise = sign.textContent;
            bro.textContent = "Player Chose: " + playerChoise ; 
            return(playerChoise);
        })
    })
}

function computerTurn () {
    let computer = ["rock","paper","scissors"];
    computerChoice = computer[Math.floor(Math.random()*3)];
    bro2.innerHTML = `Computer Chose: ${computerChoice}`;
    return(computerChoice);
    
}

function playRound () {

    if(playerChoise===computerChoice){winner.innerHTML="Tie", tie.innerHTML= 'Ties: '+ (tiescore+=1)}
    else if (playerChoise==='rock'&& computerChoice==='scissors'){winner.innerHTML="Player won the Round",ps.innerHTML='Player Score: ' + (userscore+=1)}
    else if (playerChoise==='paper'&& computerChoice==='rock'){winner.innerHTML="Player won the Round",ps.innerHTML='Player Score: ' +(userscore+=1)}
    else if (playerChoise==='scissors'&& computerChoice==='paper'){winner.innerHTML="Player won the Round",ps.innerHTML='Player Score: ' +(userscore+=1)}
    else{winner.innerHTML="Computer won the Round",cs.innerHTML='Computer Score: ' + (compscore+=1)}
}

function points () {

            if(userscore===5) {gameWinner.innerHTML=("YOU WON!!!!YOU GO GET YOUR DREAMS")}
            else if (compscore===5) {gameWinner.innerHTML=("GAME OVER")}
            else if(tiescore===10){gameWinner.innerHTML=("Tie Game")}

}
function Game () {
    
    
    sign.forEach((sign) => {
        sign.addEventListener("click", function () {   
            
            playerTurn();
            computerTurn ();
            playRound ();

            points();
        })

        })}
    


Game();