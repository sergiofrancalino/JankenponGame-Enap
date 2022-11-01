// DOM Manipulatation

//Instantiate my Jankenpon class
const game = new Jankenpon();

//Capturing all HTML elements
const startScreen = document.getElementById("startScreen");
const inputName = document.getElementById("inputName");
const gameScreen = document.getElementById("gameScreen");
const gameScore = document.getElementById("gameScore");
const playerName = document.getElementById("name");
const points = document.getElementById("points");
const board = document.getElementById("board");
const btnStart = document.getElementById("btnStart");

//adicionar o event listener no btnStart
btnStart.addEventListener("click", () => {

    // startScreen desapareça
    startScreen.classList.add("hide");
 
    // mostrar o gameScore
    gameScore.className = "show";
  
    game.player = inputName.value; //setando o nome do jogador na minha classe
    points.innerText = game.points; // setando o numero de tentativos no meu html
    playerName.innerText = game.player; // setando o nome do jogador no meu html
  
    game.renderDeck();
  
    settingUpGame();
});

  