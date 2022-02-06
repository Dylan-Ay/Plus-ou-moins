//Déclarations variables
let computerScore = document.getElementById('computer-score');
let playerScore = document.getElementById('player-score');
let info = document.getElementById('info-game');
let attempt = document.getElementById('attempt');
let guessSubmit = document.querySelector('.guessSubmit'); //Valider
let guessInput = document.getElementById('inputNum'); // Champ
let attemptLeft = document.querySelector('.attempt-left');
let counter = 10;
let resetButton;

// Cliquer sur le boutton si entrée est actionné
guessInput.addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
      guessSubmit.click();
    }
  });

// Générer un nombre aléatoire
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

// Vérification du nombre inséré et comparaison avec le randomNumber
function checkGuess() {
  let userGuess = Number(inputNum.value);

  if (userGuess === randomNumber){
    info.innerHTML = "Bravo, vous avez trouvé le bon nombre !";
    playerScore.innerHTML++;
    attemptLeft.style.display = "none";
    setGameOver();
  } else if (counter === 0){
    info.innerHTML = "C'est Perdu !";
    computerScore.innerHTML++;
    attemptLeft.style.display = "none";
    setGameOver();
  } else {
    if (userGuess < randomNumber){
      info.innerHTML = "C'est Plus !";
    } else if (userGuess > randomNumber){
      info.innerHTML = "C'est Moins !";
    }
  }
  guessInput.value = '';
  guessInput.focus();
}

// A chaque clique sur "Valider" décrémenter le compteur de tentatives
guessSubmit.addEventListener("click",()=>{
  counter--;
  attempt.innerHTML = counter;
});

// A chaque clique, exécuter la fonction checkGuess
guessSubmit.addEventListener('click', checkGuess);

// 

function setGameOver() {
  guessInput.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.innerHTML = 'Rejouer';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}