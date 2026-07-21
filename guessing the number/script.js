// Generate a random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

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
    document.getElementById("attempts").innerText = attempts;

    if (guess < secretNumber) {
        message.innerText = "📉 Too Low!";
        guessInput.value = "";
        guessInput.focus();
    }
    else if (guess > secretNumber) {
        message.innerText = "📈 Too High!";
        guessInput.value = "";
        guessInput.focus();
    }
    else {
        message.innerText =
            "🎉 Congratulations! You guessed the number in " +
            attempts +
            " attempt(s)!";

        guessInput.value = "";
    }
}

// Start a new game
function restartGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    document.getElementById("attempts").innerText = "0";
    document.getElementById("message").innerText = "Good luck!";
    document.getElementById("guessInput").value = "";
    document.getElementById("guessInput").focus();
}