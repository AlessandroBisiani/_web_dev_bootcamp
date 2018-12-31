
// create number
var secretNumber = 4;

// ask user for guess
var guess = Number(prompt("What is your guess between 1 and 10?"));

// check guess
if (secretNumber === guess) {
    alert("Well Guessed");
} else if (secretNumber > guess) {
    alert("Too Low. Reload And Try Again.");
} else {
    alert("Too High. Reload And Try Again.");
}