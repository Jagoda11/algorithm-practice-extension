export const othelloProblem = {
  id: 60,
  title: 'Othello',
  description:
    'Design the data structures and classes for the Othello game (Reversi). The game is played on an 8x8 board with two players. Each player takes turns placing discs on the board, aiming to capture their opponent’s discs by surrounding them. Implement the classes and methods to manage the game state, check valid moves, and determine the winner.',
  solution: `
// Enum for Disc Colors
enum DiscColor {
  Black = 'Black',
  White = 'White',
}

// Class to represent a player
class Player {
  id: number;
  name: string;
  discColor: DiscColor;

  constructor(id: number, name: string, discColor: DiscColor) {
    this.id = id;
    this.name = name;
    this.discColor = discColor;
  }
}

// Class to represent a Disc
class Disc {
  color: DiscColor;

  constructor(color: DiscColor) {
    this.color = color;
  }
}

// Class to represent the Othello board
class Board {
  size: number;
  grid: (Disc | null)[][];

  constructor(size: number = 8) {
    this.size = size;
    this.grid = Array.from({ length: size }, () => Array(size).fill(null));
    this.initializeBoard();
  }

  // Initialize the board with the starting position
  initializeBoard(): void {
    const mid = this.size / 2;
    this.grid[mid - 1][mid - 1] = new Disc(DiscColor.White);
    this.grid[mid][mid] = new Disc(DiscColor.White);
    this.grid[mid - 1][mid] = new Disc(DiscColor.Black);
    this.grid[mid][mid - 1] = new Disc(DiscColor.Black);
  }

  // Print the board state for debugging
  displayBoard(): void {
    for (const row of this.grid) {
      console.log(row.map(disc => (disc ? disc.color[0] : '.')).join(' '));
    }
  }

  // Check if a move is valid
  isValidMove(row: number, col: number, color: DiscColor): boolean {
    if (this.grid[row][col] !== null) return false; // Spot is already taken

    // Check all directions
    const directions = [
      [-1, 0], [1, 0], [0, -1], [0, 1],
      [-1, -1], [1, 1], [-1, 1], [1, -1],
    ];
    for (const [dx, dy] of directions) {
      if (this.checkDirection(row, col, dx, dy, color)) {
        return true;
      }
    }
    return false;
  }

  // Place a disc on the board and flip the opponent's discs
  placeDisc(row: number, col: number, color: DiscColor): boolean {
    if (!this.isValidMove(row, col, color)) {
      console.log('Invalid move');
      return false;
    }

    this.grid[row][col] = new Disc(color);
    const directions = [
      [-1, 0], [1, 0], [0, -1], [0, 1],
      [-1, -1], [1, 1], [-1, 1], [1, -1],
    ];
    for (const [dx, dy] of directions) {
      this.flipDirection(row, col, dx, dy, color);
    }
    return true;
  }

  // Check in a specific direction if a move would capture discs
  private checkDirection(row: number, col: number, dx: number, dy: number, color: DiscColor): boolean {
    let x = row + dx, y = col + dy;
    let hasOpponentDisc = false;

    while (this.isInBounds(x, y) && this.grid[x][y] && this.grid[x][y]!.color !== color) {
      hasOpponentDisc = true;
      x += dx;
      y += dy;
    }

    // Check if the line ends with a disc of the current player's color
    return hasOpponentDisc && this.isInBounds(x, y) && this.grid[x][y]?.color === color;
  }

  // Flip discs in a specific direction
  private flipDirection(row: number, col: number, dx: number, dy: number, color: DiscColor): void {
    let x = row + dx, y = col + dy;
    const toFlip = [];

    while (this.isInBounds(x, y) && this.grid[x][y] && this.grid[x][y]!.color !== color) {
      toFlip.push([x, y]);
      x += dx;
      y += dy;
    }

    // If the line ends with the current player's disc, flip the collected discs
    if (this.isInBounds(x, y) && this.grid[x][y]?.color === color) {
      for (const [fx, fy] of toFlip) {
        this.grid[fx][fy] = new Disc(color);
      }
    }
  }

  // Check if the coordinates are within the bounds of the board
  private isInBounds(x: number, y: number): boolean {
    return x >= 0 && x < this.size && y >= 0 && y < this.size;
  }
}

// Class to manage the Othello game
class OthelloGame {
  board: Board;
  players: [Player, Player];
  currentPlayerIndex: number;

  constructor(player1: Player, player2: Player) {
    this.board = new Board();
    this.players = [player1, player2];
    this.currentPlayerIndex = 0;
  }

  // Start the game loop
  startGame(): void {
    let movesAvailable = true;
    while (movesAvailable) {
      this.board.displayBoard();
      const currentPlayer = this.players[this.currentPlayerIndex];
      console.log('Current player: ' + currentPlayer.name + ' (' + currentPlayer.discColor + ')');

      // Get a valid move from the current player (for demo purposes, we'll use a random move)
      const [row, col] = this.getRandomMove(currentPlayer.discColor);
      if (row !== -1 && col !== -1) {
        this.board.placeDisc(row, col, currentPlayer.discColor);
        this.switchPlayer();
      } else {
        console.log('No valid moves available for ' + currentPlayer.name);
        movesAvailable = false;
      }
    }
    this.displayWinner();
  }

  // Switch the current player
  switchPlayer(): void {
    this.currentPlayerIndex = 1 - this.currentPlayerIndex;
  }

  // Find a random valid move for the current player (for demo purposes)
  getRandomMove(color: DiscColor): [number, number] {
    for (let row = 0; row < this.board.size; row++) {
      for (let col = 0; col < this.board.size; col++) {
        if (this.board.isValidMove(row, col, color)) {
          return [row, col];
        }
      }
    }
    return [-1, -1]; // No valid moves
  }

  // Display the winner of the game
  displayWinner(): void {
    this.board.displayBoard();
    let blackCount = 0, whiteCount = 0;
    for (const row of this.board.grid) {
      for (const disc of row) {
        if (disc?.color === DiscColor.Black) blackCount++;
        if (disc?.color === DiscColor.White) whiteCount++;
      }
    }
    if (blackCount > whiteCount) {
      console.log('Black wins with ' + blackCount + ' discs!');
    } else if (whiteCount > blackCount) {
      console.log('White wins with ' + whiteCount + ' discs!');
    } else {
      console.log('It's a tie!');
    }
  }
}

// Example usage:
const player1 = new Player(1, 'Alice', DiscColor.Black);
const player2 = new Player(2, 'Bob', DiscColor.White);
const game = new OthelloGame(player1, player2);
game.startGame();
`,
}

// Example implementation to test the solution
enum DiscColor {
  Black = 'Black',
  White = 'White',
}

class Player {
  id: number
  name: string
  discColor: DiscColor

  constructor(id: number, name: string, discColor: DiscColor) {
    this.id = id
    this.name = name
    this.discColor = discColor
  }
}

class Disc {
  color: DiscColor

  constructor(color: DiscColor) {
    this.color = color
  }
}

class Board {
  size: number
  grid: (Disc | null)[][]

  constructor(size: number = 8) {
    this.size = size
    this.grid = Array.from({ length: size }, () => Array(size).fill(null))
    this.initializeBoard()
  }

  initializeBoard(): void {
    const mid = this.size / 2
    this.grid[mid - 1][mid - 1] = new Disc(DiscColor.White)
    this.grid[mid][mid] = new Disc(DiscColor.White)
    this.grid[mid - 1][mid] = new Disc(DiscColor.Black)
    this.grid[mid][mid - 1] = new Disc(DiscColor.Black)
  }

  displayBoard(): void {
    for (const row of this.grid) {
      console.log(row.map((disc) => (disc ? disc.color[0] : '.')).join(' '))
    }
  }

  isValidMove(row: number, col: number, color: DiscColor): boolean {
    if (this.grid[row][col] !== null) return false

    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
      [-1, -1],
      [1, 1],
      [-1, 1],
      [1, -1],
    ]
    for (const [dx, dy] of directions) {
      if (this.checkDirection(row, col, dx, dy, color)) {
        return true
      }
    }
    return false
  }

  placeDisc(row: number, col: number, color: DiscColor): boolean {
    if (!this.isValidMove(row, col, color)) {
      console.log('Invalid move')
      return false
    }

    this.grid[row][col] = new Disc(color)
    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
      [-1, -1],
      [1, 1],
      [-1, 1],
      [1, -1],
    ]
    for (const [dx, dy] of directions) {
      this.flipDirection(row, col, dx, dy, color)
    }
    return true
  }

  private checkDirection(
    row: number,
    col: number,
    dx: number,
    dy: number,
    color: DiscColor,
  ): boolean {
    let x = row + dx,
      y = col + dy
    let hasOpponentDisc = false

    while (
      this.isInBounds(x, y) &&
      this.grid[x][y] &&
      this.grid[x][y]!.color !== color
    ) {
      hasOpponentDisc = true
      x += dx
      y += dy
    }

    return (
      hasOpponentDisc &&
      this.isInBounds(x, y) &&
      this.grid[x][y]?.color === color
    )
  }

  private flipDirection(
    row: number,
    col: number,
    dx: number,
    dy: number,
    color: DiscColor,
  ): void {
    let x = row + dx,
      y = col + dy
    const toFlip = []

    while (
      this.isInBounds(x, y) &&
      this.grid[x][y] &&
      this.grid[x][y]!.color !== color
    ) {
      toFlip.push([x, y])
      x += dx
      y += dy
    }

    if (this.isInBounds(x, y) && this.grid[x][y]?.color === color) {
      for (const [fx, fy] of toFlip) {
        this.grid[fx][fy] = new Disc(color)
      }
    }
  }

  private isInBounds(x: number, y: number): boolean {
    return x >= 0 && x < this.size && y >= 0 && y < this.size
  }
}

class OthelloGame {
  board: Board
  players: [Player, Player]
  currentPlayerIndex: number

  constructor(player1: Player, player2: Player) {
    this.board = new Board()
    this.players = [player1, player2]
    this.currentPlayerIndex = 0
  }

  startGame(): void {
    let movesAvailable = true
    while (movesAvailable) {
      this.board.displayBoard()
      const currentPlayer = this.players[this.currentPlayerIndex]
      console.log(
        'Current player: ' +
          currentPlayer.name +
          ' (' +
          currentPlayer.discColor +
          ')',
      )

      const [row, col] = this.getRandomMove(currentPlayer.discColor)
      if (row !== -1 && col !== -1) {
        this.board.placeDisc(row, col, currentPlayer.discColor)
        this.switchPlayer()
      } else {
        console.log('No valid moves available for ' + currentPlayer.name)
        movesAvailable = false
      }
    }
    this.displayWinner()
  }

  switchPlayer(): void {
    this.currentPlayerIndex = 1 - this.currentPlayerIndex
  }

  getRandomMove(color: DiscColor): [number, number] {
    for (let row = 0; row < this.board.size; row++) {
      for (let col = 0; col < this.board.size; col++) {
        if (this.board.isValidMove(row, col, color)) {
          return [row, col]
        }
      }
    }
    return [-1, -1]
  }

  displayWinner(): void {
    this.board.displayBoard()
    let blackCount = 0,
      whiteCount = 0
    for (const row of this.board.grid) {
      for (const disc of row) {
        if (disc?.color === DiscColor.Black) blackCount++
        if (disc?.color === DiscColor.White) whiteCount++
      }
    }
    if (blackCount > whiteCount) {
      console.log('Black wins with ' + blackCount + ' discs!')
    } else if (whiteCount > blackCount) {
      console.log('White wins with ' + whiteCount + ' discs!')
    } else {
      console.log("It's a tie!")
    }
  }
}

// Example usage:
const player1 = new Player(1, 'Alice', DiscColor.Black)
const player2 = new Player(2, 'Bob', DiscColor.White)
const game = new OthelloGame(player1, player2)
game.startGame()
