var wins = 0;
var losses = 0;
var ties = 0;

var start = window.confirm("Would you like to play Rock, Paper, Scissors");

if (start) {
    game();
}

function game() {
    var choice = window.prompt("Enter 'R' for rock, 'P' for paper, or 'S' for scissors");
    
    if (choice === "R" || choice === "r") {
        window.alert("You chose Rock");
        choice = "R";
    } else if (choice === "P" || choice === "p") {
        window.alert("You chose Paper");
        choice = "P";
    } else if (choice === "S" || choice === "s") {
        window.alert("You chose Scissors");
        choice = "S";
    } else {
        window.alert("Please enter only R, S or P.")
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
    
    window.alert("The computer chose " + computerChoice);
 
    if (getChoice === choice) {
        window.alert("The result is a tie")
        ties++;
        results();
    } else if ( (getChoice === "R" && choice === "S") || (getChoice === "P" && choice === "R") || (getChoice === "S" && choice === "P")) {
        window.alert("You lose")
        losses++;
        results();
    } else {
        window.alert("You win!")
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




