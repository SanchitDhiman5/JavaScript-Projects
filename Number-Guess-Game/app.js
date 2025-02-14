document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("input");
  const checkBtn = document.querySelector("#checkButton");
  const newGame = document.querySelector(".new-game");
  const message = document.querySelector("#message");
  const attemptSpan = document.querySelector("span");
  const switchThemeBtn = document.getElementById("themeToggle");

  let randNum = 0;
  let attemptCount = 0;

  // Function to initialize the game
  const startGame = () => {
    checkBtn.disabled = false;
    input.disabled = false;
    input.value = "";
    input.placeholder = "Enter Your Guess";
    message.innerHTML = "";
    message.style.color = "";
    newGame.innerHTML = "New Game";
    randNum = Math.floor(Math.random() * 100) + 1;
    attemptCount = 0;
    attemptSpan.textContent = attemptCount;
    console.log(`Generated Number: ${randNum}`);
  };

  // Function to check the guess
  const checkGuess = () => {
    const attemptValue = parseInt(input.value.trim(), 10);

    if (isNaN(attemptValue) || attemptValue < 1 || attemptValue > 100) {
      message.style.color = "red";
      message.innerHTML = "Please Enter a Valid Number (1-100)";
      return;
    }

    attemptCount++;
    attemptSpan.textContent = attemptCount;
    input.value = "";

    if (attemptValue === randNum) {
      message.style.color = "green";
      message.innerHTML = `Congratulations! The number was ${randNum}. You won in ${attemptCount} attempts.`;
      input.disabled = true;
      checkBtn.disabled = true;
    } else {
      message.style.color = "red";
      message.innerHTML =
        attemptValue < randNum ? " Try a Higher Number" : " Try a Lower Number";
    }
  };

  // Function to toggle theme
  const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
  };

  // Event Listeners
  newGame.addEventListener("click", startGame);
  checkBtn.addEventListener("click", checkGuess);
  switchThemeBtn.addEventListener("click", toggleTheme);

  // Disable the check button initially
  checkBtn.disabled = true;
});
