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

  //Compare array deck 

  compareDeck(sorteado, target){
    
    if (sorteado == target) {
      console.log("empate");
      return "Empate";

     }
  
    if (sorteado === "./assets/rock.ico" && target === "./assets/paper.ico") {
      console.log("Você Ganhou!");
      console.log(rock, "Escolha do Usuário - Clicado");
      console.log (sorteado, "Resultado do sorteador");
      return "Você Ganhou"

    }
    if (sorteado === "./assets/rock.ico" && target === "./assets/scissors.ico"){
      console.log("Maquina Ganhou!");
      console.log(rock, "Escolha do Usuário - Clicado");
      console.log (sorteado, "Resultado do sorteador");
      return "Machine Win"
    }
    if (sorteado === "./assets/paper.ico" && target  === "./assets/rock.ico"){
      console.log("Maquina Ganhou!");
      console.log(rock, "Escolha do Usuário - Clicado");
      console.log (sorteado, "Resultado do sorteador");
      return "Machine Win"

    }
    if (sorteado === "./assets/paper.ico" && target  === "./assets/scissors.ico"){
      console.log("Você Ganhou!");
      console.log(rock, "Escolha do Usuário - Clicado");
      console.log (sorteado, "Resultado do sorteador");
      return "Você Ganhou"

    }
    if (sorteado === "./assets/scissors.ico" && target  === "./assets/rock.ico"){
      console.log("Você Ganhou!");
      console.log(rock, "Escolha do Usuário - Clicado");
      console.log (sorteado, "Resultado do sorteador");
      return "Você Ganhou"

    }
    if (sorteado === "./assets/scissors.ico" && target  === "./assets/paper.ico"){
      console.log("Máquina Ganhou!");
      console.log(rock, "Escolha do Usuário - Clicado");
      console.log (sorteado, "Resultado do sorteador");
      return "Machine Win"
    }
  }
}

