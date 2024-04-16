// // Array for potential outcomes
// const choices = ["rock","paper","scissors"];

// // Selects random item from array
// function getComputerChoice() {
//     return choices[Math.floor(Math.random()*3)];
// }

// function playSingleRound(computerChoice,playerChoice){

//     // Gets Player Selection
//     playerChoice = parseInt(window.prompt("Please type 1 for rock, 2 for paper, 3 for scissors"));

//     // Failsafe if user is non-compliant
//     if (playerChoice === "" || playerChoice === null || playerChoice === "undefined"){
//         playerChoice = window.prompt("Please type 1 for rock, 2 for paper, 3 for scissors");
//     } else if (playerChoice === 1) {
//         playerChoice = "rock";
//     } else if (playerChoice === 2) {
//         playerChoice = "paper";
//     } else if (playerChoice === 3) {
//         playerChoice = "scissors";
//     } else {
//         playerChoice = window.prompt("Please type 1 for rock, 2 for paper, 3 for scissors");
//     }

//     // Gets computer choice by calling relevant function and assigns it to a variable
//     computerChoice = getComputerChoice();

//     // Main Game Logic
//     if(computerChoice === "rock" && playerChoice === "scisssors"){
//         return "You lose! Rock beats scissors";
//     } else if (computerChoice === "rock" && playerChoice === "paper"){
//         return "You win! Paper covers rock";
//     } else if (computerChoice === "paper" && playerChoice === "rock"){
//         return "You lose! Paper covers rock";
//     } else if (computerChoice === "paper" && playerChoice === "scissors"){
//         return "You win! Scissors cut paper";
//     } else if (computerChoice === "scissors" && playerChoice === "rock"){
//         return "You win! Rock beats scissors";
//     } else if (computerChoice === "scissors" && playerChoice === "paper"){
//         return "You lose! Scissors cut paper";
//     } else if (computerChoice === playerChoice){
//         return "It's a tie!";
//     } else {
//         return "The round was inconclusive. At least one player failed to follow the rules. No point for both sides."
//     }
// }

// // Main Game Function
// function playGame() {
//     for(let i = 0; i < 5; i++){
//         console.log(playSingleRound())
//     }
// }

// // playGame();

const selectionButtons = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector("[data-final-column]");
const computerScoreSpan = document.querySelector("[data-computer-score]");
const yourScoreSpan = document.querySelector("[data-your-score]");

const SELECTIONS = [
    {
        name: "rock",
        emoji: "✊🏼",
        beats: "scissors"
    },
    {
        name: "paper",
        emoji: "✋🏼",
        beats: "rock"
    },
    {
        name: "scissors",
        emoji: "🖖🏼",
        beats: "paper"
    }
]

// https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes


selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
      const selectionName = selectionButton.dataset.selection
      const selection = SELECTIONS.find(selection => selection.name === selectionName)
      makeSelection(selection)
    })
  })

  function makeSelection(selection) {
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)
  
    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)
  
    if (yourWinner) incrementScore(yourScoreSpan)
    if (computerWinner) incrementScore(computerScoreSpan)
  }
// Increment Function
function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
  }

  function addSelectionResult(selection, winner) {
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)
  }

  function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
  }

  function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
  }