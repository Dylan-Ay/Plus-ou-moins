//Déclarations des variables globales
let computerScore = document.getElementById('computer-score');
let playerScore = document.getElementById('player-score');
let info = document.getElementById('info-game');
let attempt = document.getElementById('attempt');
let guessSubmit = document.querySelector('.guessSubmit'); //Bouton valider
let guessInput = document.getElementById('inputNum'); // Champ d'insertion
let attemptLeft = document.querySelector('.attempt-left');
let randomNumber = Math.floor(Math.random() * 100) + 1; // Génerer un nombre aléatoire 
let labelNumber = document.getElementById('label-number');
let emoji = document.getElementById('emoji');
let restriction = document.getElementById('tooltip');
let correctNumber = document.getElementById('correct-number');
let resetButton;
let replayInfo;
let newButton;
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

// Fonction principale du jeu
function checkGuess() {
  let userGuess = Number(inputNum.value);
// Restrictions si vide ou si supérieur à 100 ou si inférieur à 1
  if (userGuess == "" || userGuess > 100 || userGuess < 1){
    restriction.style.display = "flex";
  }
// Si condition rempli afficher "c'est plus" et décrémenter le counter
  else if (userGuess < randomNumber && userGuess > 0){
    restriction.style.display = "none";
    info.innerHTML = "C'est Plus !";
    counter--;
    attempt.innerHTML = counter;
// Si condition rempli afficher "c'est moins" et décrémenter le counter
  } else if (userGuess > randomNumber && userGuess <= 100){
    restriction.style.display = "none";
    info.innerHTML = "C'est Moins !";
    counter--;
    attempt.innerHTML = counter;
// Si condition rempli changer l'émoticone
  } if (counter == 7){
    emoji.innerHTML = "&#128517";
  } else if (counter == 4){
        emoji.innerHTML = "&#128531";
  } else if (counter == 2){
        emoji.innerHTML = "&#128560";
// Si condition rempli afficher un message et changer le score
      } else {
        if (userGuess === randomNumber){
          info.innerHTML = "Bravo, vous avez trouvé le bon nombre, vous gagnez 1 point!";
          playerScore.innerHTML++;
          attemptLeft.style.display = "none";
          setGameOver();
        } else if (counter === 0){
          info.innerHTML = "C'est Perdu, l'ordinateur gagne 1 point !";
          computerScore.innerHTML++;
          attemptLeft.style.display = "none";
          setGameOver();
        } 
      }
// Vider le champ d'insertion + ajouter le focus
    guessInput.value = '';
    guessInput.focus();
}

// A chaque clique sur "Valider" , exécuter la fonction checkGuess
guessSubmit.addEventListener('click', checkGuess);

// Défini les paramètres à prendre en compte quand la partie est perdue
function setGameOver() {
  guessInput.disabled = true;
  guessSubmit.style.display = "none";
  labelNumber.style.display = "none";
  divButton = document.getElementById('new-button'); // Récupère la div qui contient les nvx buttons
  replayButton = document.createElement('button');
  divButton.appendChild(replayButton);
  replayButton.innerHTML = 'Rejouer';
  replayButton.addEventListener('click', resetGame); // A chaque clique sur "rejouer", appeler la fonction resetGame
  resetButton = document.createElement('button');
  divButton.appendChild(resetButton);
  resetButton.innerHTML = 'Nouvelle partie';
  resetButton.addEventListener('click', newGame); // A chaque clique sur "nouvelle partie", appeler la fonction resetGame
  divReplayInfo = document.getElementById('replay-info');
  replayInfo = document.createElement('p');
  newGameInfo = document.createElement('p');
  replayInfo.innerHTML = 'Pour continuer la partie, veuillez cliquer sur "Rejouer"';
  newGameInfo.innerHTML = 'Pour démarrer une nouvelle partie, veuillez cliquer sur "Nouvelle partie"';
  divReplayInfo.appendChild(replayInfo);
  divReplayInfo.appendChild(newGameInfo);
  correctNumber.innerHTML = `Le nombre à trouver était ${randomNumber}.`;
}

// Fonction pour continuer la même partie
function resetGame(){
  divButton.removeChild(replayButton);
  divButton.removeChild(resetButton);
  divReplayInfo.removeChild(replayInfo);
  divReplayInfo.removeChild(newGameInfo);
  labelNumber.style.display = "block";
  guessInput.disabled = false;
  guessSubmit.disabled = false;
  guessSubmit.style.display = "block";
  guessInput.focus();
  info.innerHTML = "";
  attemptLeft.style.display = "block";
  counter = 10;
  attempt.innerHTML = counter;
  emoji.innerHTML = "&#128512";
  correctNumber.innerHTML = "";
  defineRandomNumber();
}

// Fonction pour commencer une nouvelle partie
function newGame(){
  computerScore.innerHTML = "0";
  playerScore.innerHTML= "0";
  resetGame();
}