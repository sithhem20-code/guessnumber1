// Generate a random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;
let guesses = [];


// Check the player's guess
function checkGuess() {

    let guessInput = document.getElementById("guessInput");
    let guess = Number(guessInput.value);
    let message = document.getElementById("message");


    // Check if the input is empty
    if (guessInput.value === "") {
        message.innerText = "Please enter a number!";
        guessInput.focus();
        return;
    }


    // Check if the number is between 1 and 100
    if (guess < 1 || guess > 100) {
        message.innerText = "Please enter a number between 1 and 100!";
        guessInput.value = "";
        guessInput.focus();
        return;
    }


    attempts++;

    // Store the guess
    guesses.push(guess);

    // Display attempts
    document.getElementById("attempts").innerText = attempts;

    // Display all guesses
    document.getElementById("guesses").innerText =
        "Your guesses: " + guesses.join(", ");


    if (guess < secretNumber) {

        message.innerText = "📉 Too Low!";

    }
    else if (guess > secretNumber) {

        message.innerText = "📈 Too High!";

    }
    else {

        message.innerText =
            `🎉 Congratulations! You guessed the correct number: ${secretNumber} in ${attempts} attempt(s)!`;

        // Disable input after winning
        guessInput.disabled = true;
    }


    guessInput.value = "";
    guessInput.focus();
}


// Start a new game
function restartGame() {

    secretNumber = Math.floor(Math.random() * 100) + 1;

    attempts = 0;

    guesses = [];


    document.getElementById("attempts").innerText = "0";

    document.getElementById("message").innerText = "Good luck!";

    document.getElementById("guesses").innerText = "Your guesses: ";


    const guessInput = document.getElementById("guessInput");

    guessInput.value = "";

    guessInput.disabled = false;

    guessInput.focus();
}


// Press Enter to submit the guess
document.addEventListener("DOMContentLoaded", function () {

    const guessInput = document.getElementById("guessInput");


    guessInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            event.preventDefault();

            checkGuess();

        }

    });

});