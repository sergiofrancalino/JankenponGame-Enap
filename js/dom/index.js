// DOM Manipulatation

//Step 1 - INSTANTIATE my Jankenpon class like game
const game = new Jankenpon();

//Step 2 - CAPTURING all HTML elements by ID

const startScreen = document.getElementById("startScreen");
const titleScreen = document.getElementById("titleScreen");
const gameScreen = document.getElementById("gameScreen");
const gameScore = document.getElementById("gameScore");

const playerName = document.getElementById("playerName"); 
const inputName = document.getElementById("inputName");

const points = document.getElementById("points"); // To show player's score on screen
const board = document.getElementById("board");
const btnStart = document.getElementById("btnStart");
const ranking = document.getElementById("ranking"); //To show "status of play" on screen

//Step 3 - THE EVENT LISTNER to "btnStart" to show the start game screen

btnStart.addEventListener("click", () => {
    startScreen.classList.add("hide"); // To hide the start screen 
    gameScore.className = "show"; // To show the start game screen 
    game.player = inputName.value; 
    points.innerText = game.points; 
    playerName.innerText = game.player;  
    
 // Step 3.1 - CAPTURING the user's choices by ID from HTML to game screen
    const rock = document.getElementById("rock"); // To capture ROCK element
    const paper = document.getElementById("paper"); // To capture paper element
    const scissors = document.getElementById("scissors");
    let result = "Game starting! 0 <--> 0"; // Variable to save the play result
    ranking.innerText = result; // To show the initial result 

 // Step 3.2 - THE EVENT LISTNER to ROCK (clicked)
    rock.addEventListener("click", (e) => {
        let sorteado = game.deck [Math.floor(Math.random() * game.deck.length)]; //To save raffle from "game" array.
        let target = e.target.name; // To save human player choice.

     // game.compareDeck(sorteado,target);
        result = game.compareDeck(sorteado,target);

        if (result === "You won! 1 <-> 0") {
            game.points++;
            points.innerText = game.points; 
        }
        ranking.innerText = result; // Result of this play! 
        console.log(game.points);
    });

 // Step 3.3 - THE EVENT LISTNER to PAPER (clicked)
    paper.addEventListener("click", (e) => {
        let sorteado = game.deck [Math.floor(Math.random() * game.deck.length)];
        let target = e.target.name;
       
     // game.compareDeck(sorteado,target);
        result = game.compareDeck(sorteado,target);

        if (result === "You won! 1 <-> 0") {
        game.points++;
        points.innerText = game.points; 
        };
        ranking.innerText = result; // Result of this play! 
        console.log(game.points);
    });

 //Step 3.4 - THE EVENT LISTNER to SCISSORS (clicked)
    scissors.addEventListener("click", (e) => {
        let sorteado = game.deck [Math.floor(Math.random() * game.deck.length)];
        let target = e.target.name;
   
     // game.compareDeck(sorteado,target);
        result = game.compareDeck(sorteado,target);

       if (result === "You won! 1 <-> 0") {
        game.points++;
        points.innerText = game.points;
        }
        ranking.innerText = result; // Result of this play! 
        console.log(game.points);
    });

 // Workspace inside btnStart event listner  

});





  