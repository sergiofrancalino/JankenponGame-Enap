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

const points = document.getElementById("points"); // To show player 1 scores on screen
const points2 = document.getElementById("points2"); // To show player 2 scores on screen

const board = document.getElementById("board");
const btnStart = document.getElementById("btnStart");
const ranking = document.getElementById("ranking"); //To show "status of play" on screen

const musica = new Audio ("./assets/audio/jogo.mp4");
      musica.volume = 0.09;

// /blob/main/assets/audio/jogo.mp3 no GIT //

//Step 3 - THE EVENT LISTNER to "btnStart" to show the start game screen

btnStart.addEventListener("click", () => {
    if (playerName !== 0){
        startScreen.classList.add("hide"); // To hide the start screen 
        gameScore.className = "show"; // To show the start game screen 
        game.player = inputName.value; 
        points.innerText = game.points; // Player 1 score/points!
        points2.innerText = game.points2; // Player 2 score/points! 
        playerName.innerText = game.player;  
        
        musica.play();
    }
  
    
 // Step 3.1 - CAPTURING the user's choices by ID from HTML to game screen
    const rock = document.getElementById("rock"); // To capture ROCK element
    const paper = document.getElementById("paper"); // To capture paper element
    const scissors = document.getElementById("scissors");
    let result = "Game is starting!"; // Variable to save the play result
    ranking.innerText = result; // To show the initial result 
    const totalPlay = document.getElementById("totalPlay");
    let partida = 0;

    const meggyChoice = document.getElementById ("meggyChoice");
    const soundRock = new Audio ("./assets/audio/rockwater.mp3");
    const soundPaper = new Audio ("./assets/audio/paper.mp3");
    const soundScissors = new Audio ("./assets/audio/scissors.mp3");
    const everybodyWon = new Audio ("./assets/audio/everybodywon.wav");
    const youLost = new Audio ("./assets/audio/youlost.wav");
    const youWon = new Audio ("./assets/audio/youwon.wav");

 // Step 3.2 - THE EVENT LISTNER to ROCK (clicked)
    rock.addEventListener("click", (e) => {

        soundRock.play();

        rock.classList.add("escolha");
        partida++
        let sorteado = game.deck [Math.floor(Math.random() * game.deck.length)]; //To save raffle from "game" array.
        let target = e.target.name; // To save human player choice.
    
     // game.compareDeck(sorteado,target);
        result = game.compareDeck(sorteado,target);
        if (result === "Everybody won!") {
            everybodyWon.play()
            game.points++;
            points.innerText = game.points; 
            game.points2++;
            points2.innerText = game.points2; 
        }
        if (result === "You won!") {
            youWon.play()   
            game.points++;
            points.innerText = game.points; 
        }
        if (result === "You lost!"){
            game.points2++;
            points2.innerText = game.points2;   
            youLost.play()         
        }

        // Verify what's sorteado//

        if (sorteado === "./assets/rock.ico") {
            sorteado = "✊ ROCK ";
        }
        if (sorteado === "./assets/paper.ico") {
            sorteado = "✋ PAPER";
        }
        if (sorteado === "./assets/scissors.ico") {
            sorteado = "✌ SCISSORS";
        }

        ranking.innerText = result; // Result of this play! 
        console.log(game.points);
        rock.classList.remove("escolha");
        totalPlay.innerText = partida;
       
        meggyChoice.innerText = sorteado;
    });
  
 // Step 3.3 - THE EVENT LISTNER to PAPER (clicked)
    paper.addEventListener("click", (e) => {

        soundPaper.play();

        partida++
        let sorteado = game.deck [Math.floor(Math.random() * game.deck.length)];
        let target = e.target.name;

     // game.compareDeck(sorteado,target);
        result = game.compareDeck(sorteado,target);

        if (result === "You won!") {
        youWon.play() 
        game.points++;
        points.innerText = game.points; 
        };
        if (result === "You lost!"){
            youLost.play()   
            game.points2++;
            points2.innerText = game.points2; 
        }
        ranking.innerText = result; // Result of this play! 
        console.log(game.points);
        totalPlay.innerText = partida;

      // Verify what's sorteado//

      if (sorteado === "./assets/rock.ico") {
        sorteado = "✊ ROCK ";
    }
    if (sorteado === "./assets/paper.ico") {
        sorteado = "✋ PAPER";
    }
    if (sorteado === "./assets/scissors.ico") {
        sorteado = "✌ SCISSORS";
    }
        meggyChoice.innerText = sorteado;
    });

 //Step 3.4 - THE EVENT LISTNER to SCISSORS (clicked)
    scissors.addEventListener("click", (e) => {

        soundScissors.play();

        partida++
        let sorteado = game.deck [Math.floor(Math.random() * game.deck.length)];
        let target = e.target.name;
   
     // game.compareDeck(sorteado,target);
        result = game.compareDeck(sorteado,target);

       if (result === "You won!") {
        youWon.play() 
        game.points++;
        points.innerText = game.points;
        }
        if (result === "You lost!"){
            youLost.play()   
            game.points2++;
            points2.innerText = game.points2; 
        }
        ranking.innerText = result; // Result of this play! 
        console.log(game.points);
        totalPlay.innerText = partida;

       // Verify what's sorteado//

        
       if (sorteado === "./assets/rock.ico") {
        sorteado = "✊ ROCK ";
    }
    if (sorteado === "./assets/paper.ico") {
        sorteado = "✋ PAPER";
    }
    if (sorteado === "./assets/scissors.ico") {
        sorteado = "✌ SCISSORS";
    }
        meggyChoice.innerText = sorteado;
    });

 // All events listners inside the click event of "btnStart" from "play" buttom on start screen.

});
  