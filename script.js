//console.log("Hello world");

const humanScore = 0;
const computerScore = 0;

//humanChoice

const getHumanChoice = () => {

    let userInput = prompt("Enter your choice:");
     
    return userInput.trim().toLowerCase();

}

//console.log(getHumanChoice());

// computerChoice

const getComputerChoice = () => {

    const r = Math.floor(Math.random() * 3);
    if (r === 0) {
        return "rock";
    } else if (r === 1) {
        return "paper";
    } else {
        return "scissors";
    }


}

//console.log(getComputerChoice());



const playRound = (humanChoice, computerChoice) => {

    if (humanChoice === computerChoice) {

         console.log("Both choose same so match will be tie");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {

         console.log("you win");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log(" you loose");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log(" you loose");
        
    } else if (humanChoice === "paper" && computerChoice === "rock") {
         console.log("you win");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("you loose");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("you win");
    } else {
        console.log("Error! please choose one between( rock, paper ,scissors)");

    }
      
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


playRound(humanSelection, computerSelection);
