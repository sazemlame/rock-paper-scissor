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
            playRound(choice,getComputerChoice(0,3)); 

  
            
            

        });
        
    });
    
    
}

let humanScore = 0;               // initialising the global score
let computerScore = 0;

const container = document.querySelector("#container");
const div = document.createElement("div");
div.style.background = "grey";
const h2 = document.createElement("h2");
const human= document.createElement("p");
const computer = document.createElement("p");
h2.textContent = "Score Table";
function renderScores(){
    human.textContent = `Human Score : ${humanScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
}
renderScores();
div.append(h2);
div.append(human);
div.append(computer);
container.appendChild(div);

let round =1;
function playRound(humanChoice,computerChoice){

 
//logic to run rounds and update scores
    const line = document.createElement("p");
    line.textContent = `R${round++} :The choices are ${humanChoice} and ${computerChoice}`;
    container.appendChild(line);
    if(humanScore>=5 || computerScore>=5){
        const winner = humanScore>=5?'Human':'Computer';
        const msg = document.createElement("h3");
        msg.textContent = `${winner} wins`;
        div.appendChild(msg);

        document.querySelectorAll("button").forEach(btn => btn.disabled = true);
    }
    if(humanChoice===computerChoice){
    
    }
    if(humanChoice==="Rock" && computerChoice==="Scissor" || humanChoice === "Paper" && computerChoice === "Rock" || humanChoice === "Scissor" && computerChoice === "Paper"){
        humanScore++;
        renderScores();

    }
    if(humanChoice==="Scissor" && computerChoice==="Rock" || humanChoice === "Rock" && computerChoice === "Paper" || humanChoice === "Paper" && computerChoice === "Scissor"){
        computerScore++;
        renderScores();

    
    }

        
    
    


}
getHumanChoice();



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
