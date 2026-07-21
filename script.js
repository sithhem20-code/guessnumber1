
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {

    let guessInput = document.getElementById("guessInput");
    let guess = Number(guessInput.value);
    let message = document.getElementById("message");

    if (guessInput.value === "") {
        message.innerText = "Please enter a number!";
        guessInput.focus();
        return;
    }

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
    }
    else if (guess > secretNumber) {
        message.innerText = "📈 Too High!";
    }
    else {
        message.innerText =
            `🎉 Congratulations! You guessed the correct number: ${secretNumber} in ${attempts} attempt(s)!`;
    }

    guessInput.value = "";
    guessInput.focus();
}

function restartGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    document.getElementById("attempts").innerText = "0";
    document.getElementById("message").innerText = "Good luck!";
    document.getElementById("guessInput").value = "";
    document.getElementById("guessInput").focus();
}
