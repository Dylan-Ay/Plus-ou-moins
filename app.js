//Déclarations variables
const computerScore = document.getElementById('computer-score');
const playerScore = document.getElementById('player-score');
const info = document.getElementById('info-game');
const attempt = document.getElementById('attempt');
const button = document.getElementById('button');
const input = document.getElementById('inputNum');

input.addEventListener("keypress", function (event) {
    if (event.target == 13) {
      button.click();
    }
  });

// Obtenir le nombre qui a été inseré
let number = document.getElementById("inputNum").value;
// Générer un nombre aléatoire
let randomNumber = Math.floor(Math.random() * 100);

// Afficher différentes informations en fonction du nombre inséré par l'utilisateur
if (number === 100){
    info.innerHTML = "Bravo vous avez trouvé le bon nombre !";
} 


//info.innerHTML = "Salut";
//console.log(getInputValue());
//console.log(randomNumber);




