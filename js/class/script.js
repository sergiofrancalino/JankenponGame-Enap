// ALL CLASSES HERE 

class Jankenpon {
  constructor() {
    this.player = "";
    this.points = 0;
    this.deck = [
      "./assets/rock.ico",
      "./assets/paper.ico",
      "./assets/scissors.ico",
    ];
    
  }

  //Compare Jakenpon array this.deck 

  compareDeck(sorteado, target){
    
    if (sorteado == target) {
      console.log("Empate: Humano e Maquina!");
      return `Nobody won! 0 <-> 0`;

     }
  
    if (sorteado === "./assets/rock.ico" && target === "./assets/paper.ico") {
      console.log("Humano Ganhou!");
      console.log(rock, "Escolha do Usuário - Clicado");
      console.log (sorteado, "Resultado do sorteador");
      return "You won! 1 <-> 0"

    }
    if (sorteado === "./assets/rock.ico" && target === "./assets/scissors.ico"){
      console.log("Maquina Ganhou!");
      console.log(rock, "Escolha do Usuário - Clicado");
      console.log (sorteado, "Resultado do sorteador");
      return "Meggy won! 0 <-> 1"
    }
    if (sorteado === "./assets/paper.ico" && target  === "./assets/rock.ico"){
      console.log("Maquina Ganhou!");
      console.log(rock, "Escolha do Usuário - Clicado");
      console.log (sorteado, "Resultado do sorteador");
      return "Meggy won! 0 <-> 1"

    }
    if (sorteado === "./assets/paper.ico" && target  === "./assets/scissors.ico"){
      console.log("Humano Ganhou!");
      console.log(rock, "Escolha do Usuário - Clicado");
      console.log (sorteado, "Resultado do sorteador");
      return "You won! 1 <-> 0"

    }
    if (sorteado === "./assets/scissors.ico" && target  === "./assets/rock.ico"){
      console.log("Humano Ganhou!");
      console.log(rock, "Escolha do Usuário - Clicado");
      console.log (sorteado, "Resultado do sorteador");
      return "You won! 1 <-> 0"

    }
    if (sorteado === "./assets/scissors.ico" && target  === "./assets/paper.ico"){
      console.log("Máquina Ganhou!");
      console.log(rock, "Escolha do Usuário - Clicado");
      console.log (sorteado, "Resultado do sorteador");
      return "Meggy won! 0 <-> 1"
    }
  }
}

