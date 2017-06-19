const prompt = require('prompt');

class Game {
  constructor() {
    this.board = [['', '', ''], ['', '', ''], ['', '', '']];
    this.validRowsAndColumns = {0: 0, 1: 1, 2: 2};
    this.playerX = 'X';
    this.playerO = 'O';
    this.currentPlayer = this.playerX;
    this.startRound(this.currentPlayer);
  }

  printBoard() {
    this.board.forEach((row) => {
      console.log(row);
    });
  }

  startRound(player) {
    console.log('It is your turn player ', player);
    console.log('This is the board state: ');
    this.printBoard();
    console.log('What is your move?');
    this.promptForInput(player);
  }

  promptForInput(player) {
    prompt.start();
    prompt.get(['row', 'column'], (err, move) => {
      if (err) {
        console.log('error: ', err);
      } else {
        if (this.isValidMove(move)) {
          this.placePiece(player, move);
          if (this.currentPlayer === this.playerX) {
            this.currentPlayer = this.playerO;
          } else {
            this.currentPlayer = this.playerX;
          }
          this.startRound(this.currentPlayer);
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

  placePiece(player, move) {
    this.board[move.row][move.column] = player;
  }
}

const game = new Game();
