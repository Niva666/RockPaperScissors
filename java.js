const round = document.querySelector('.round');
const btn = document.querySelectorAll('.btn');
const btns = document.querySelector('.btns')
const playerChose = document.querySelector('.playerChose');
const computerChose = document.querySelector('.computerChose');
const playerScore = document.querySelector('.playerScore');
const compScore = document.querySelector('.compScore');
const tie = document.querySelector('.tie');
const roundWinner = document.querySelector('.roundWinner');
const scoreBoard = document.querySelector('.scoreBoard');
const gameWinner = document.querySelector('.gameWinner');
const restart = document.querySelector('.restart')
const rBtn = document.querySelector('.rBtn');
const yesBtn = document.querySelector ('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const pag = document.querySelector('.pag');
const tagb = document.querySelector('.tagb');

let pscore = 0;
let cscore = 0;
let tiescore = 0;
let roundcount = 1;
let compChose;
let playerChoise;
let winner;

function Game () {
    
        btn.forEach((btn) => {
        yes()
        no()
        btn.addEventListener("click", function () {
            round.style.display = "block"; 
            scoreBoard.style.display = "block"; 
            playerChoise = btn.id;
            compChose = getComputerChoise();
            winner = playRound(playerChoise,compChose);
            showWinner(winner,playerChoise,compChose);
            winnerOfTheGame(pscore,cscore,tiescore);
            restartTheGame();
            console.log(playerChoise,compChose,winner);
        
        })
    })
}


function yes () {
    yesBtn.addEventListener("click",function (){
    h1.style.display = 'none';
    pag.style.display = 'none';
    h2.style.display = 'block';
    btns.style.display = 'block';
    
})
}
function no () {
    noBtn.addEventListener('click',function(){
        h1.style.display = 'none';
        pag.style.display = 'none';
        tagb.style.display = 'block';
    })
}
function getComputerChoise () {
    let computer = ["rock","paper","scissors"];
    compChose = computer[Math.floor(Math.random()*3)];
    return(compChose);
}

function playRound (playerChoise,compChose) { 

    if (playerChoise === compChose){return("Tie Game")}
    else if(playerChoise==="rock" && compChose==="scissors"){return("Player")}
    else if(playerChoise==="paper" && compChose==="rock"){return("Player")}
    else if(playerChoise==="scissors" && compChose==="paper"){return("Player")}
    else {return("Computer")}
    
}

function showWinner (winner,playerChoise,compChose) {
    if (winner === "Player") {
        round.innerHTML = "Round " + (roundcount++)
        playerScore.innerHTML = "Player Score : " + (pscore+=1);
        compScore.innerHTML = "Computer Score :" + cscore;
        tie.innerHTML = "Tie Games : " + tiescore;
        playerChose.innerHTML = "Player Chose : " + playerChoise;
        computerChose.innerHTML = "Computer Chose : " + compChose;
        roundWinner.innerHTML = "Round Won by : " + winner;
    }
    else if (winner === "Computer") {
        round.innerHTML = "Round " + (roundcount++)
        playerScore.innerHTML = "Player Score : " + pscore;
        compScore.innerHTML = "Computer Score :" + (cscore+=1);
        tie.innerHTML = "Tie Games : " + tiescore;
        playerChose.innerHTML = "Player Chose : " + playerChoise;
        computerChose.innerHTML = "Computer Chose : " + compChose;
        roundWinner.innerHTML = "Round Won by : " + winner;
    }
    else {
        round.innerHTML = "Round " + (roundcount++)
        playerChose.innerHTML = "Player Chose : " + playerChoise;
        computerChose.innerHTML = "Computer Chose : " + compChose;
        tie.innerHTML = "Tie Games : " + (tiescore+=1);
        roundWinner.innerHTML = winner;
    }
}

function winnerOfTheGame (pscore,cscore,tiescore) {
    if(pscore === 5){   gameWinner.style.display="block";
                        gameWinner.innerHTML="Gluckwunch du hast Gewonnen";
                        scoreBoard.style.display="none";
                        round.style.display = "none";
                        btns.style.display="none";
                        restart.style.display="block";
                    }
    else if (cscore === 5){     gameWinner.style.display="block";
                                gameWinner.innerHTML="Du hast Verloren!!!";
                                scoreBoard.style.display="none";
                                round.style.display = "none";
                                btns.style.display="none";
                                restart.style.display="block"}
    
    else if (tiescore === 10){  gameWinner.style.display="block";
                                gameWinner.innerHTML="Unentschieden";
                                scoreBoard.style.display="none";
                                round.style.display = "none";
                                btns.style.display="none";
                                restart.style.display="block"
        }
}
function restartTheGame () {
    rBtn.addEventListener('click',function() {
    round.style.display = "block";
    gameWinner.style.display = "none";
    restart.style.display = "none";
    btns.style.display="block";
    scoreBoard.style.display="block";
    pscore = 0;
    cscore = 0;
    tiescore = 0;
    roundcount = 1;
    playerScore.innerHTML = "Player Score : " + pscore;
    compScore.innerHTML = "Computer Score :" + cscore;
    tie.innerHTML = "Tie Games : " + tiescore;
    round.innerHTML = "Round " + (roundcount++);
})

}
Game();
