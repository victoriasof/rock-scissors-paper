/*
Must-have features
    Have three buttons that the player can press to change their pick
    Have another button to let the computer pick one and show the winner
    Let the player know they won (no alert box)
    Have a reset button
 */

let rock = document.getElementById("rock").onclick = playGame;
let scissors = document.getElementById("scissors").onclick = playGame;
let paper = document.getElementById("paper").onclick =playGame;

function playGame (){

    let userChoice = this.id;
    let computerChoice = Math.random();

    if (computerChoice < 0.34){
        computerChoice = 'rock';
    }
    else if (computerChoice <= 0.67){
        computerChoice = 'scissors';
    }
    else {
        computerChoice = 'paper';
    }


    let result = compare();
    document.getElementById("result").innerHTML = `${result}`

    function compare (){
        if (userChoice === computerChoice){
            return "tie";
        }
        else if (userChoice === 'rock'){

            if (computerChoice === 'scissors'){
                return "you win";
            }
            else if (computerChoice === 'paper'){
                return "you lose";
            }
        }

        else if (userChoice === 'scissors'){
            if (computerChoice === 'rock'){
                return "you lose";
            }
            else if (computerChoice === 'paper'){
                return "you win";
            }

        }

        else if (userChoice === 'paper'){
            if (computerChoice === 'rock'){
                return "you win";
            }

            else if (computerChoice === 'scissors'){
                return "you lose";

            }
        }
    }
}


