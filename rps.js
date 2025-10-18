function getComputerChoice(min,max) {                 //getting the computer's input
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    let random = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    if (random === 0){
        return "Rock";
    }
    else if(random == 1){
        return "Paper";
    }
    else{
        return "Scissor";
    }

}
//console.log(getComputerChoice(0,3));
function getHumanChoice(){     // getting the human input
    let choice = prompt ("Enter an input between rock,paper and scissor");
    final_choice = choice.at(0).toUpperCase()+choice.slice(1).toLowerCase();
    return final_choice;
    
}
//getHumanChoice();

let humanScore = 0;               // initialising the global score
let computerScore = 0;

function playRound(humanChoice,computerChoice){
    console.log("The choices are ", humanChoice, computerChoice)
    if(humanChoice===computerChoice){
        
    }
    if(humanChoice==="Rock" && computerChoice==="Scissor" || humanChoice === "Paper" && computerChoice === "Rock" || humanChoice === "Scissor" && computerChoice === "Paper"){
        humanScore++;
        //console.log("Human wins");

    }
    if(humanChoice==="Scissor" && computerChoice==="Rock" || humanChoice === "Rock" && computerChoice === "Paper" || humanChoice === "Paper" && computerChoice === "Scissor"){
        computerScore++;
        //console.log("Computer wins");
    }
    


}
const rounds=5;
function playGame(rounds)
{
    let round=0;
    for (round=0;i<rounds;round++){
        humanSelection=getHumanChoice();
        computerSelection=getComputerChoice(0,3);
        playRound(humanSelection,computerSelection);
    }
    if(humanScore>computerScore){
        console.log("Human wins");
    }
    else if(computerScore>humanScore){
        console.log("Computer Wins");
    }
    else{
        console.log("It is a tie");
    }
}
playGame(rounds);
