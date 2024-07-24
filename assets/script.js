const playerSelection = prompt("What is your choice?" , "Rock, Paper or Scissors");//user selection
let computerChoice = Math.random();//computer selection created randomly

if (computerChoice < 0.34) {//turning random number into value
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

console.log("You have selected: " + playerSelection);
console.log("The Computer has selected: " + computerChoice);

function gameround(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        confirm("It's a tie!" + "Do you want to play again?" , "Yes", "No");
        console.log("It's a tie!");
        return "Tie!";
        
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        alert("You win! Rock beats Scissors!");
        console.log("You win! Rock beats Scissors!");
        return "You win! Rock beats Scissors!";
        
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        alert("You lose! Paper beats Rock!");
        console.log("You lose! Paper beats Rock!");
        return "You lose! Paper beats Rock!";
        
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        alert("You win! Paper beats Rock!");
        console.log("You win! Paper beats Rock!");
        return "You win! Paper beats Rock!";
        
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        alert("You lose! Scissors beats Paper!");
        console.log("You lose! Scissors beats Paper!");
        return "You lose! Scissors beats Paper!";
        
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        alert("You win! Scissors beats Paper!");
        console.log("You win! Scissors beats Paper!");
        return "You win! Scissors beats Paper!";
        
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        alert("You lose! Rock beats Scissors!");
        console.log("You lose! Rock beats Scissors!");
        return "You lose! Rock beats Scissors!";
        
    }    
    else  if (playerSelection.toLowerCase() == "null") {   
        alert("Invalid input!");
        console.log("Invalid input!");
        return "Invalid input!";
    }
    else {
        alert("Invalid input!");
        console.log("Invalid input!");
        return "Invalid input!";
    }
    
}
gameround(playerSelection, computerChoice);
let result =(gameround(playerSelection, computerChoice));
console.log(result);