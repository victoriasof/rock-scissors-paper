/*
Must-have features
    Have three buttons that the player can press to change their pick
    Have another button to let the computer pick one and show the winner
    Let the player know they won (no alert box)
    Have a reset button
 */


document.getElementById("rock").addEventListener("click",()=>{

    document.getElementById("rock").style.border = "5px solid black";
    document.getElementById("scissors").style.border = "";
    document.getElementById("paper").style.border = "";


    userChoice = 'rock';
    playGame();

})

document.getElementById("scissors").addEventListener("click", ()=>{

    document.getElementById("scissors").style.border = "5px solid black"
    document.getElementById("rock").style.border = "";
    document.getElementById("paper").style.border = "";

    userChoice = 'scissors';
    playGame();
})

document.getElementById("paper").addEventListener("click", ()=>{

    document.getElementById("paper").style.border = "5px solid black"
    document.getElementById("scissors").style.border = "";
    document.getElementById("rock").style.border = "";

    userChoice = 'paper';
    playGame();
})


//document.getElementById("play").addEventListener("click", ()=>{
//created function playGame below and called it above,
//so user does not have to press play to see the result (result appears immediately)

//should addEventListener to edit style when image is clicked
//should add reset for counting the score

let userScore = 1;
let computerScore = 1;


document.getElementById("reset").addEventListener("click", ()=>{

    window.location.href = 'https://victoriasof.github.io/rock-scissors-paper/';

})


function playGame(){

    let computerChoice = Math.random();

    if (computerChoice < 0.34){
        computerChoice = 'rock';
        document.getElementById("computer-choice").innerHTML = "opponent choice: rock";
    }
    else if (computerChoice <= 0.67){
        computerChoice = 'scissors';
        document.getElementById("computer-choice").innerHTML = "opponent choice: scissors";
    }
    else {
        computerChoice = 'paper';
        document.getElementById("computer-choice").innerHTML = "opponent choice: paper";
    }

    //console.log(computerChoice);

    if (userChoice === computerChoice){
        document.getElementById("result").innerHTML = "TIE";
        document.getElementById("user-choice").innerHTML = "your choice: " + computerChoice;
    }
    else if (userChoice === 'rock'){
        document.getElementById("user-choice").innerHTML = "your choice: rock";

        if (computerChoice === 'scissors'){

            document.getElementById("user-score").innerHTML = "your score: " + userScore++;
            document.getElementById("result").innerHTML = "YOU WIN!";
        }
        else if (computerChoice === 'paper'){
            document.getElementById("computer-score").innerHTML = "opponent score: " + computerScore++;
            document.getElementById("result").innerHTML = "YOU LOSE";
        }
    }

    else if (userChoice === 'scissors'){
        document.getElementById("user-choice").innerHTML = "your choice: scissors";

        if (computerChoice === 'rock'){
            document.getElementById("result").innerHTML = "YOU LOSE";
            document.getElementById("computer-score").innerHTML = "opponent score: " +computerScore++;
        }
        else if (computerChoice === 'paper'){
            document.getElementById("result").innerHTML = "YOU WIN!";
            document.getElementById("user-score").innerHTML = "your score: " + userScore++;
        }

    }

    else if (userChoice === 'paper'){
        document.getElementById("user-choice").innerHTML = "your choice: paper";

        if (computerChoice === 'rock'){
            document.getElementById("result").innerHTML = "YOU WIN!";
            document.getElementById("user-score").innerHTML = "YOUR SCORE: " + userScore++;
        }

        else if (computerChoice === 'scissors'){
            document.getElementById("result").innerHTML ="YOU LOSE";
            document.getElementById("computer-score").innerHTML = "opponent score: " + computerScore++;
        }
    }

}

