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
    const input = document.querySelector("input");
    const btns = document.querySelectorAll("button");  //selector for buttons
    btns.forEach((button) => {
        button.addEventListener("click", () => {
            let choice = button.textContent;
            //console.log(choice);
            playRound(choice,getComputerChoice(0,3)); //initiating round when button pressed
            
            

        });
        
    });
    
    
}
getHumanChoice();
let humanScore = 0;               // initialising the global score
let computerScore = 0;
const container = document.querySelector("#container");
const div = document.createElement("div");
div.style.background = "grey";
const h2 = document.createElement("h2");
const human= document.createElement("p");
const computer = document.createElement("p");
h2.textContent = "Score Table";
human.textContent = "Human Score : ";
computer.textContent = "Computer Score : "

div.append(h2);
div.append(human);
div.append(computer);
container.appendChild(div);

function playRound(humanChoice,computerChoice){
    
    
    console.log("The choices are ", humanChoice, computerChoice)
    if(humanChoice===computerChoice){
        
    }
    if(humanChoice==="Rock" && computerChoice==="Scissor" || humanChoice === "Paper" && computerChoice === "Rock" || humanChoice === "Scissor" && computerChoice === "Paper"){
        humanScore++;
        console.log("Human wins");

    }
    if(humanChoice==="Scissor" && computerChoice==="Rock" || humanChoice === "Rock" && computerChoice === "Paper" || humanChoice === "Paper" && computerChoice === "Scissor"){
        computerScore++;
        console.log("Computer wins");
    }
    


}

/**const rounds=5;
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
playGame(rounds);*/
