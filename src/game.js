import Soldier from "soldiers/soldier.js";
import Board from "board.js";

class Game {
  constructor() {
    this.gameBoard = new Board(10, 10);
    this.soldiers = [];
  }

  placeEnemies() {
    /* TODO after soldiers creation */
  }

  addFriendlySoldier(soldier) {
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

  startGame() {
    this.gameBoard.draw();

    setInterval(() => {
      this.gameLoopIteration();
    }, 1000);
  }
}

export default Game;
