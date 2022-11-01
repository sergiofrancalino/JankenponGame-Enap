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

//Add the event listener to btnStart
btnStart.addEventListener("click", () => {

    // Hide the startScreen class 
    startScreen.classList.add("hide");
 
    //Show the gameScore class
    gameScore.className = "show";
  
    game.player = inputName.value; 
    points.innerText = game.points; 
    playerName.innerText = game.player; 
  
    game.renderDeck();
  
    settingUpGame();
});

  