// DOM Manipulatation

//Instantiate my Jankenpon class
const game = new Jankenpon();

//Capturing all HTML elements by ID
const startScreen = document.getElementById("startScreen");
const inputName = document.getElementById("inputName");
const titleScreen = document.getElementById("titleScreen");
const gameScreen = document.getElementById("gameScreen");
const gameScore = document.getElementById("gameScore");
const playerName = document.getElementById("playerName");
const points = document.getElementById("points");
const board = document.getElementById("board");
const btnStart = document.getElementById("btnStart");


//Add the event listener to btnStart at StartScreen class
btnStart.addEventListener("click", () => {

    // Hide the startScreen class 
    startScreen.classList.add("hide");

     //Show the gameScore class
    gameScore.className = "show";

    game.player = inputName.value; 
    points.innerText = game.points; 
    playerName.innerText = game.player; 
    
    settingUpGame(); //Function -> Let's configure the game
});


// Capturando classes e ID do HTML 
const resultado = document.getElementById("resultado");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

//Add the event listener to Rock 
rock.addEventListener("click", (e) => {
 let result = "";   
 let sorteado = game.deck [Math.floor(Math.random() * game.deck.length)];
 let target = e.target.name;

 // game.compareDeck(sorteado,target);
 result = game.compareDeck(sorteado,target);
 if (result === "You beat!") {
    game.points++
    points.innerText = game.points; 
 }
 resultado.innerText = result; 
 console.log(game.points);
});

//Add the event listener to Paper
paper.addEventListener("click", (e) => {
    let result = "";   
    let sorteado = game.deck [Math.floor(Math.random() * game.deck.length)];
    let target = e.target.name;
   
    // game.compareDeck(sorteado,target);
    result = game.compareDeck(sorteado,target);
    if (result === "You beat!") {
       game.points++
       points.innerText = game.points; 
    }
    resultado.innerText = result; 
    console.log(game.points);
});

//Add the event listener to Scissors
scissors.addEventListener("click", (e) => {
    let result = "";   
    let sorteado = game.deck [Math.floor(Math.random() * game.deck.length)];
    let target = e.target.name;
   
    // game.compareDeck(sorteado,target);
    result = game.compareDeck(sorteado,target);
    if (result === "You beat!") {
       game.points++
       points.innerText = game.points; 
    }
    
    resultado.innerText = result; 
    console.log(game.points);
});

  