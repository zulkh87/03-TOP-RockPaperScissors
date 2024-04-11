// Array for potential outcomes
const choices = ["rock","paper","scissors"];

// Selects random item from array
function getComputerChoice() {
    return choices[Math.floor(Math.random()*3)];
}

function playSingleRound(computerChoice,playerChoice){

    // Gets Player Selection
    playerChoice = parseInt(window.prompt("Please type 1 for rock, 2 for paper, 3 for scissors"));

    // Failsafe if user is non-compliant
    if (playerChoice === "" || playerChoice === null || playerChoice === "undefined"){
        playerChoice = window.prompt("Please type 1 for rock, 2 for paper, 3 for scissors");
    } else if (playerChoice === 1) {
        playerChoice = "rock";
    } else if (playerChoice === 2) {
        playerChoice = "paper";
    } else if (playerChoice === 3) {
        playerChoice = "scissors";
    } else {
        playerChoice = window.prompt("Please type 1 for rock, 2 for paper, 3 for scissors");
    }

    // Gets computer choice by calling relevant function and assigns it to a variable
    computerChoice = getComputerChoice();

    // Main Game Logic
    if(computerChoice === "rock" && playerChoice === "scisssors"){
        return "You lose! Rock beats scissors";
    } else if (computerChoice === "rock" && playerChoice === "paper"){
        return "You win! Paper covers rock";
    } else if (computerChoice === "paper" && playerChoice === "rock"){
        return "You lose! Paper covers rock";
    } else if (computerChoice === "paper" && playerChoice === "scissors"){
        return "You win! Scissors cut paper";
    } else if (computerChoice === "scissors" && playerChoice === "rock"){
        return "You win! Rock beats scissors";
    } else if (computerChoice === "scissors" && playerChoice === "paper"){
        return "You lose! Scissors cut paper";
    } else if (computerChoice === playerChoice){
        return "It's a tie!";
    } else {
        return "The round was inconclusive. At least one player failed to follow the rules. No point for both sides."
    }
}

// Main Game Function
function playGame() {
    for(let i = 0; i < 5; i++){
        console.log(playSingleRound())
    }
}

playGame();