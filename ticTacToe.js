const prompt = require('prompt');

class Game {
  constructor() {
    this.board = [['', '', ''], ['', '', ''], ['', '', '']];
  }

  printBoard() {
    this.board.forEach((row) => {
      console.log(row);
    });
  }
}

const game = new Game();
game.printBoard();
