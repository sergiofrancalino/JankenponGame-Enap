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


//Add the event listener to Rock at Game Screen
const rock = document.getElementById("rock");
const resultado = document.getElementById("resultado");

rock.addEventListener("click", (e) => {
 let result = "";   
 let sorteado = game.deck [Math.floor(Math.random() * game.deck.length)];
 let target = e.target.name;

 // game.compareDeck(sorteado,target);
 result = game.compareDeck(sorteado,target);
 if (result === "Você Ganhou") {
    game.points++
    points.innerText = game.points; 
 }
 resultado.innerText = result; 
 console.log(game.points);
});


    

//Add the event listener to Paper at Game Screen
btnChoosePaper.addEventListener("click", () => {
    

   
 });

 //Add the event listener to ChooseScissors at Game Screen
btnChooseScissors.addEventListener("click", () => {
    


});

function settingUpGame() {
    // capturar todas as cardsBack
    // adicionar a ela um eventlistener

    const allHandGame = document.querySelectorAll(".handGame");
  
    allHandGame.forEach((handGame) => {
      handGame.addEventListener("click", () => {
        //o que acontece quando a mão é clicada
  
        const cardFront = cardBack.previousElementSibling;
  
        //mostra a carta da frente
        cardFront.className = "show cardFront";
  
        //esconde a carta de trás (carta verde)
        cardBack.className = "hide cardBack";
  
        game.flipCard(cardFront);
  
        points.innerText = game.points
      });
    });
  }

  