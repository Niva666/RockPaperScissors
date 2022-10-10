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
const tie = document.querySelector(".tie");
const gameWinner = document.querySelector('.gameWinner');
const again = document.querySelector('.again');
const yes2 = document.querySelector('yes2');
const no2 = document.querySelector('.no2');

function revealSigns () {
    if(play.style.display != "none") {
        signs.style.display = "block"
        play.style.display = "none"
        round.style.display = "block"
        tie.style.display = "block"
        ps.style.display = "block"
        cs.style.display = "block"

    } 
}

function goodBye () {
    if(play.style.display != "none")
        bye.style.display = "block"
        play.style.display = "none"
} 
function againHide () {
        round.style.display = "none"
        tie.style.display = "none"
        ps.style.display = "none"
        cs.style.display = "none"
        bro.style.display = "none"
        bro2.style.display = "none"
        winner.style.display = "none"
        signs.style.display = "none"
}

let userscore = 0;
let compscore = 0;
let tiescore = 0;
let roundcount = 0;
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
    
    if(playerChoise===computerChoice){winner.innerHTML="Tie", tie.innerHTML= 'Ties: '+ (tiescore+=1),
    round.innerHTML = 'Round: ' + (roundcount+=1)}
    else if (playerChoise==='rock'&& computerChoice==='scissors')
    {winner.innerHTML="Player won the Round",ps.innerHTML='Player Score: ' + (userscore+=1),
    cs.innerHTML='Computer Score: ' + (compscore-=1),
    round.innerHTML = 'Round: ' + (roundcount+=1)}
    else if (playerChoise==='paper'&& computerChoice==='rock')
    {winner.innerHTML="Player won the Round",ps.innerHTML='Player Score: ' +(userscore+=1),
    cs.innerHTML='Computer Score: ' + (compscore-=1),
    round.innerHTML = 'Round: ' + (roundcount+=1)}
    else if (playerChoise==='scissors'&& computerChoice==='paper')
    {winner.innerHTML="Player won the Round",ps.innerHTML='Player Score: ' +(userscore+=1),
    cs.innerHTML='Computer Score: ' + (compscore-=1),
    round.innerHTML = 'Round: ' + (roundcount+=1)}
    else{winner.innerHTML="Computer won the Round",cs.innerHTML='Computer Score: ' + (compscore+=1),ps.innerHTML='Player Score: ' +(userscore-=1),
    round.innerHTML = 'Round: ' + (roundcount+=1)}
}

function points () {

    if(userscore===5) {gameWinner.innerHTML=("YOU WON!!!!YOU GO GET YOUR DREAMS"),againHide()}
    else if (compscore===5) {gameWinner.innerHTML=("GAME OVER"),againHide()}
    else if(tiescore===10){gameWinner.innerHTML=("Tie Game"),againHide ()}
            
}

function Game () {
    
    no.addEventListener('click', goodBye);
    yes.addEventListener('click' , revealSigns);
    round.innerHTML = 'Round: ' + (roundcount=1);
    tie.innerHTML= 'Ties: '+ (tiescore=0);
    ps.innerHTML='Player Score: ' + (userscore=0);
    cs.innerHTML='Computer Score: ' + (compscore=0);
    sign.forEach((sign) => {
        sign.addEventListener("click", function () {   
            playerTurn();
            computerTurn();
            playRound ();
            points();  
        })
        })}
    


Game();