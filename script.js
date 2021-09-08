var start = window.confirm("Would you like to play Rock, Paper, Scissors");

if (start) {
    var choice = window.prompt("Enter 'R' for rock, 'P' for paper, or 'S' for scissors");
}

function getNumber() {
    return Math.floor(Math.random() * 3);
    
}

var getChoice;

if (getNumber() === 0) {
    getChoice = "R";
} else if (getNumber() === 1) {
    getChoice = "P";
} else {
    getChoice = "S";
}

console.log(getChoice);