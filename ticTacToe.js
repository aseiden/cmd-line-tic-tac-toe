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

  promptForInput(player) {
    prompt.start();
    prompt.get(['row', 'column'], (err, move) => {
      if (err) {
        console.log('error: ', err);
      } else {
        console.log(move);
      }
    });
  }
}

const game = new Game();
game.promptForInput();
