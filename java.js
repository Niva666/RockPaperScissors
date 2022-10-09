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

function Game () {
    
    sign.forEach((sign) => {
        sign.addEventListener("click", function () {    
            const playerChoise = sign.id
            console.log('PC:'+ playerChoise)
            bro.textContent = "Player Chose: " + playerChoise ; 
            //Computer Choise

            let computer = ["rock","paper","scissors"];
            const compChoise = computer[Math.floor(Math.random()*3)];
            console.log('CC:'+compChoise);
            bro2.innerHTML = `Computer Chose: ${compChoise}`;
            
           
            if(playerChoise===compChoise){winner.innerHTML="Tie", tie.innerHTML= "No Points"}
            else if (playerChoise==='rock'&& compChoise==='scissors'){winner.innerHTML="Player won the Round",ps.innerHTML='Player Score: ' + (userscore+=1)}
            else if (playerChoise==='paper'&& compChoise==='rock'){winner.innerHTML="Player won the Round",ps.innerHTML='Player Score: ' +(userscore+=1)}
            else if (playerChoise==='scissors'&& compChoise==='paper'){winner.innerHTML="Player won the Round",ps.innerHTML='Player Score: ' +(userscore+=1)}
            else{winner.innerHTML="Computer won the Round",cs.innerHTML='Computer Score: ' + (compscore+=1)}
            

            if(userscore>compscore) {gameWinner.innerHTML=("YOU WON!!!!YOU GO GET YOUR DREAMS")}
            else if (userscore<compscore) {gameWinner.innerHTML=("GAME OVER")}
            else{""}
            //

        })})}
    


Game();