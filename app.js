//Déclarations variables globales
let computerScore = document.getElementById('computer-score');
let playerScore = document.getElementById('player-score');
let info = document.getElementById('info-game');
let attempt = document.getElementById('attempt');
let guessSubmit = document.querySelector('.guessSubmit'); //Valider
let guessInput = document.getElementById('inputNum'); // Champ d'insertion
let attemptLeft = document.querySelector('.attempt-left');
let randomNumber = Math.floor(Math.random() * 100) + 1; // Génerer un nombre aléatoire 
let resetButton;
let replayInfo;
let attemptDiv;
let counter = 10;

// Cliquer sur le boutton si entrée est actionné
guessInput.addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
      guessSubmit.click();
    }
  });

// Création de la fonction pour générer un nouveau nombre aléatoire à chaque resetGame()
function defineRandomNumber(){
  randomNumber = Math.floor(Math.random() * 100) + 1;
  return randomNumber;
}

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


// Défini les paramètres à prendre en compte quand la partie est perdue
function setGameOver() {
  guessInput.disabled = true;
  guessSubmit.style.display = "none";
  resetButton = document.createElement('button');
  let divButton = document.getElementById('insert-number'); // Récupère la div du bouton
  divButton.appendChild(resetButton);
  replayInfo = document.createElement('span')
  attemptDiv = document.getElementById('attempt-div');
  attemptDiv.appendChild(replayInfo);
  replayInfo.innerHTML = 'Pour continuer la partie, veuillez cliquer sur "Rejouer".';
  replayInfo.classList.add('replay-info');
  resetButton.innerHTML = 'Rejouer';
  resetButton.addEventListener('click', resetGame);
}

// Relance une nouvelle partie
function resetGame(){
  resetButton.style.display = "none";
  replayInfo.style.display = "none";
  guessInput.disabled = false;
  guessSubmit.disabled = false;
  guessSubmit.style.display = "block";
  guessInput.focus();
  info.innerHTML = "-";
  attemptLeft.style.display = "block";
  counter = 10;
  attempt.innerHTML = counter;
  defineRandomNumber();
}