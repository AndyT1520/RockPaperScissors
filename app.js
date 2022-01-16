var computerChoice;
var ranNum;
var result;

const displayResult = document.getElementById('result');
const resetBtn = document.getElementById('reset');
const playerHealth = document.querySelector('.player-health');
const computerHealth = document.querySelector('.computer-health');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
const roundNum = document.querySelector('.round-number');
const result_id = document.querySelector('.result-text');
const overall = document.querySelector('.overall-result');

let round = 1;
let playerChoice = '';

function getComputerChoice() {
    const compChoice = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return compChoice[randomNumber];
}

function game(playerChoice){
    const computerChoice = getComputerChoice();
    roundNum.textContent = `Round ${round}`;
    switch(playerChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
        winResult(playerChoice, computerChoice);
        damageHP(computerHealth, 20);
        break;
        case "rp":
        case "ps":
        case "sr":
        loseResult(playerChoice, computerChoice);
        damageHP(playerHealth, 20);
        break;
        case "rr":
        case "ss":
        case "pp":
        drawResult(playerChoice, computerChoice);
        break;
    }
}


function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function main() {
    rock_div.addEventListener('click', function(){
        game('r');
    })
    
    paper_div.addEventListener('click', function(){
        game('p');
    })
    
    scissors_div.addEventListener('click', function(){
        game('s');
    })
}

function playGame(){
    game();
    if (computerHealth.value == 0) {
        overall.innerHTML = "You Won the game!";
    }
    else if (playerHealth.value == 0) {
        overall.innerHTML = "You lost the game!";
    }
}

function damageHP(Health, damage){
    Health.value -= damage;
    return Health;
}

function winResult(playerChoice, computerChoice){
        round++;
        result_id.innerHTML = convertToWord(playerChoice) + " beats " + convertToWord(computerChoice), "you win!";
    }

function loseResult(playerChoice, computerChoice){
    round++;
    result_id.innerHTML = convertToWord(playerChoice) + " loses to " + convertToWord(computerChoice), " you lost!";
}

function drawResult(playerChoice, computerChoice){
    round++;
    result_id.innerHTML = "It's a draw!";
}
main();
