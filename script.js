function getComputerChoice(){
    const randomNum = Math.floor(Math.random() * 3) + 1;
    if(randomNum === 1){
        return "rock";
    }
    else if(randomNum === 2){
        return "paper";
    }
    else{
        return "scissor";
    }
}

function getHumanChoice(){
    let human = prompt("Enter either rock, paper or scissor: ");
    human = human.toLowerCase();
    return human;
}

function playRound(human, computer){
    let winner = 0;
    if(human === "rock"){
        switch(computer){
            case "paper":
                winner = 2;
                break;
            case "scissor":
                winner = 1;
                break;  
        }
    }
    else if(human === "paper"){
        switch(computer){
            case "rock":
                winner = 1;     
                break;
            case "scissor":
                winner = 2;
                break;
        }
    }
    else{
        switch(computer){
            case "rock":
                winner = 2;
                break;
            case "paper":
                winner = 1;
                break;
        }
    }

    if(winner === 0){
        console.log("Game Tied, same choice")
    }
    else if(winner === 1){
        console.log("You win " + human + " beats " + computer);
        humanScore = humanScore + 1;
    }
    else if(winner === 2){
        console.log("You lose " + computer + " beats " + human);
        compScore = compScore + 1;
    }

}

function playGame(){
    for(let i = 0; i < 5; i++){
        let human = getHumanChoice();
        let comp = getComputerChoice();
        playRound(human, comp);
    }
    console.log("Final Score: You " + humanScore + " - " + compScore + " Computer");
    if(humanScore > compScore){
        console.log("You win the game!");
    }
    else if(compScore > humanScore){
        console.log("You lose the game!");
    }
    else{
        console.log("The game is a tie!");
    }
}

let humanScore = 0;
let compScore = 0;
playGame();

