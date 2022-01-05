const buttons = document.querySelectorAll("div.buttonChoices button");
const resetBtn = Array.from(document.querySelector("#reset"));
const overallResult = Array.from(document.querySelectorAll(".box-result h2"));
const roundNum = Array.from(document.querySelectorAll(".box-result h1"));
const boxResult = Array.from(document.querySelectorAll(".box-result h3"));
const playerHealth = Array.from(document.querySelectorAll(".player-health"));
const computerHealth = Array.from(document.querySelectorAll(".computer-health"));

let computerChoice = [{choice: 'Rock', value: 0}, {choice: 'Paper', value: 1}, {choice: 'Scissors', value: 2}];
let playerChoice = '';
let round = 1;

buttons.addEventListener('click', playerChoice);

function computerPlay(){
    let result = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    return result;
}

// Game
function playGame(e){
    if (playerHealth.value <= 0 || computerHealth.value <= 0){
        return;
    }
    selectChoice(e);
    if (playerHealth.value !== 0 && computerHealth.value !== 0){
        playRound();
    }

    if(computerHealth, value === 0){
        overallResult.textContent = "You Won!";
    }
    if(playerHealth, value === 0){
        overallResult.textContent = "You Lost";
    }
}

function playRound(){
    roundNum.textContent = `Round ${round}`;

    if(computerPlay === 'Rock'){
        switch (playerChoice){
            case 'Rock':
            showDrawResult(boxResult);
            break;
            case 'Paper':
            showWinResult(boxResult);
            damageHP(computerHealth, 20);
            break;
            case 'Scissors':
            showLoseResult(boxResult);
            damageHP(playerHealth, 20);
        }
    }else if(computerPlay === 'Paper'){
        switch (playerChoice){
            case 'Paper':
                showDrawResult(boxResult);
                break;
            case 'Scissors':
                showWinResult(boxResult);
                damageHP(computerHealth, 20);
                break;
            case 'Rock':
                showLoseResult(boxResult);
                damageHP(playerHealth, 20);
        }
    }else if(computerPlay === 'Scissors'){
        switch (playerChoice){
            case 'Scissors':
                showDrawResult(boxResult);
                break;
            case 'Rock':
                showWinResult(boxResult);
                damageHP(computerHealth, 20);
                break;
            case 'Paper':
                showLoseResult(boxResult);
                damageHP(playerHealth, 20);
                break;
        }
    }
}

function damageHP(HP, damage){
    HP.value -= damage;
    return HP;
}

function showWinResult(output){
    output.textContent =   `You Win! ${playerChoice} beats ${computerChoice}`;
    round++;
}

function showLoseResult(output){
    output.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
    round++;
}

function showDrawResult(output){
    output.textContent = `It's a Draw! Both of you chose ${playerChoice}`;
    round++;
}

