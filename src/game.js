import Soldier from "./soldiers/soldier.js";
import Board from "./board.js";
import Card from "./card.js";

class Game {
  constructor() {
    this.gameBoard = new Board(10, 10);
    this.gameClockTickMiliseconds = 1000;
    this.soldiers = [];
    this.cards = [
      new Card("giant", "Giant", 1),
      new Card("archer", "Archer", 1),
      new Card("zombie", "Zombie", 1),
    ];
    this.gameBoard.draw();
    this.placeCards();
    this.startGame();
  }

  startGame() {
    setInterval(() => {
      this.gameLoopIteration();
    }, this.gameClockTickMiliseconds);
  }

  placeCards() {
    this.cards.forEach((card) => {
      card.draw();
    });
  }

  placeEnemies() {
    /* TODO after soldiers creation */
  }

  deplouyFriendlySoldier(soldier) {
    this.soldiers.push(soldier);
  }

  gameLoopIteration() {
    for (let soldier1 = 0; soldier1 < this.soldiers.length; soldier1++) {
      for (let soldier2 = 0; soldier2 < this.soldiers.length; soldier2++) {
        /*
                    Check if soldier2 lies in range of soldier1.
                    If yes, soldier2 recieves damage
                    else solier2 moves
                */
      }
    }

    for (let soldier = 0; soldier < this.soldiers.length; soldier++) {
      soldier.draw();
    }
  }
}

export default Game;
