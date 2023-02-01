const inputTime = document.querySelector("#inputTime");
const convertButton = document.querySelector("#convertButton");
const resetButton = document.querySelector("#resetButton");
const result = document.querySelector("#result");

let totalSeconds;
let idInterval;

convertButton.addEventListener("click", function() {
  clearInterval(idInterval);
  totalSeconds = inputTime.value * 60;

  if (totalSeconds <= 0) {
    result.innerHTML = "Entrée incorrecte, veuillez entrer un nombre positif.";
  } else {
    result.innerHTML = `${totalSeconds} secondes`;

    idInterval = setInterval(function() {
      totalSeconds--;
      let displayMinutes = Math.floor(totalSeconds / 60);
      let displaySeconds = totalSeconds % 60;

      if (displayMinutes === 0) {
        result.innerHTML = `${displaySeconds} secondes restantes`;
      } else {
        result.innerHTML = `${displayMinutes} minutes et ${displaySeconds} secondes restantes`;
      }

      if (totalSeconds === 0) {
        clearInterval(idInterval);
        result.innerHTML = "Temps écoulé";
      }
    }, 1000);
  }
});

resetButton.addEventListener("click", function() {
  clearInterval(idInterval);
  result.innerHTML = "";
});