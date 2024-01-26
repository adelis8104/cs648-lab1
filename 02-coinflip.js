var coinFlip = Math.floor(Math.random()*10);
var choice;
choice = window.prompt("Enter 'Heads' or 'Tails'");

//Check coin
if (coinFlip < 5) { // Represents Heads
    if (choice === "Heads") {
        alert("The flip was heads and you chose heads...you win!");
    } else if (choice === "Tails") {
        alert("The flip was heads but you chose tails...you lose!");
    } else {
        alert("Invalid choice. Please enter 'Heads' or 'Tails'.");
    }
} else { // Represents Tails
    if (choice === "Heads") {
        alert("The flip was tails but you chose heads...you lose!");
    } else if (choice === "Tails") {
        alert("The flip was tails and you chose tails...you win!");
    } else {
        alert("Invalid choice. Please enter 'Heads' or 'Tails'.");
    }
}