// ALL CLASSES HERE 

class Jankenpon {
  constructor() {
    this.player = "";
    this.points = 9;
    this.deck = [
      "./assets/rock.ico",
      "./assets/paper.ico",
      "./assets/scissors.ico",
    ];
    this.selectedCards = [];
  }
  
  renderDeck() {
    
    //Surfle array deck 
    this.deck.sort(() => {
      return Math.random() - 0.5;
    });

    console.log(this.deck);
  }
}
