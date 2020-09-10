/*
Must-have features
    Have three buttons that the player can press to change their pick
    Have another button to let the computer pick one and show the winner
    Let the player know they won (no alert box)
    Have a reset button
 */


document.getElementById("rock").addEventListener("click",()=>{
    userChoice = 'rock';
    playGame();
})

document.getElementById("scissors").addEventListener("click", ()=>{
    userChoice = 'scissors';
    playGame();
})

document.getElementById("paper").addEventListener("click", ()=>{
    userChoice = 'paper';
    playGame();
})


//document.getElementById("play").addEventListener("click", ()=>{
//created function playGame below and called it above,
//so user does not have to press play to see the result (result appears immediately)

//should addEventListener to edit style when image is clicked
//should add reset for counting the score

function playGame(){

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

    console.log(computerChoice);

    if (userChoice === computerChoice){
        document.getElementById("result").innerHTML = "tie";
    }
    else if (userChoice === 'rock'){

        if (computerChoice === 'scissors'){
            document.getElementById("result").innerHTML = "you win";
        }
        else if (computerChoice === 'paper'){
            document.getElementById("result").innerHTML = "you lose";
        }
    }

    else if (userChoice === 'scissors'){
        if (computerChoice === 'rock'){
            document.getElementById("result").innerHTML = "you lose";
        }
        else if (computerChoice === 'paper'){
            document.getElementById("result").innerHTML = "you win";
        }

    }

    else if (userChoice === 'paper'){
        if (computerChoice === 'rock'){
            document.getElementById("result").innerHTML = "you win";
        }

        else if (computerChoice === 'scissors'){
            document.getElementById("result").innerHTML ="you lose";

        }
    }

}

document.getElementById("reset").addEventListener("click", ()=>{

})