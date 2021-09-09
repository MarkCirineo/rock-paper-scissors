var wins = 0;
var losses = 0;
var ties = 0;

var start = confirm("Would you like to play Rock, Paper, Scissors");

if (start) {
    game();
}

function game() {
    var choice = prompt("Enter 'R' for rock, 'P' for paper, or 'S' for scissors");
    
    if (choice === "R" || choice === "r") {
        alert("You chose Rock");
        choice = "R";
    } else if (choice === "P" || choice === "p") {
        alert("You chose Paper");
        choice = "P";
    } else if (choice === "S" || choice === "s") {
        alert("You chose Scissors");
        choice = "S";
    } else {
        alert("Please enter only R, S or P.")
        game();
    }
    
    function getNumber() {
        return Math.floor(Math.random() * 3); 
    }
    
    var getChoice;
    var computerChoice;
    
    if (getNumber() === 0) {
        getChoice = "R";
        computerChoice = "Rock";
    } else if (getNumber() === 1) {
        getChoice = "P";
        computerChoice = "Paper";
    } else {
        getChoice = "S";
        computerChoice = "Scissors";
    }
    
    alert("The computer chose " + computerChoice);
 
    if (getChoice === choice) {
        alert("The result is a tie")
        ties++;
        results();
    } else if ( (getChoice === "R" && choice === "S") || (getChoice === "P" && choice === "R") || (getChoice === "S" && choice === "P")) {
        alert("You lose")
        losses++;
        results();
    } else {
        alert("You win!")
        wins++;
        results();
    }
    
    function results() {
        alert("Wins: " + wins + "\nLoses: " + losses + "\nTies: " + ties)
    }

    var playAgain = confirm("Would you like to play again");
    if (playAgain) {
        game();
    } 
}




