const prompt = require('prompt');

class Game {
  constructor() {
    this.board = [['', '', ''], ['', '', ''], ['', '', '']];
    this.validRowsAndColumns = {0: 0, 1: 1, 2: 2};
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
        if (this.isValidMove(move)) {
          console.log('valid move');
        }
      }
    });
  }

  isValidMove(move) {
    if ((move.row in this.validRowsAndColumns) && (move.column in this.validRowsAndColumns) && this.board[move.row][move.column] !== ' ') {
      return true;
    } else {
      return false;
    }
  }
}

const game = new Game();
game.promptForInput();
