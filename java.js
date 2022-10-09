const yes = document.querySelector('.yes');
const no = document.querySelector('.no');
const signs = document.querySelector('.signs');
const play = document.querySelector('.play');
const bye = document.querySelector('.bye');
const bro = document.querySelector('.bro');
const bro2 = document.querySelector('.bro2');
const winner = document.querySelector('.winner');
const sign = document.querySelectorAll(".sign");

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

yes.addEventListener('click' , revealSigns);
no.addEventListener('click', goodBye);


function getPlayerChoice () {
    
    sign.forEach((sig) => {
        sig.addEventListener("click", function () {
            const playerChoice = this.textContent;
            bro.textContent = "Player Chose: " + playerChoice ; 
            return playerChoice;
        })
    })
}

function getComputerChoice () {
        
        sign.forEach((sig) => {
            sig.addEventListener("click", function pi(){
            let computer = ["rock","paper","scissors"];
            const compChoise = computer[Math.floor(Math.random()*3)];
            bro2.innerHTML = `Computer Chose: ${compChoise}`;
            return bro2.innerHTML;
            }) 
        })
    }

console.log(getComputerChoice);
    
    sign.forEach((sig) => {
        sig.addEventListener("click", function(e){
        let a = getPlayerChoice ();
        let b = getComputerChoice();
        console.log(a);
        console.log(b);
        
        })
    })