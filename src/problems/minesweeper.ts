export const minesweeperProblem = {
  id: 30,
  title: 'Minesweeper',
  description:
    'Design and implement a text-based Minesweeper game. The game should display a grid of cells, some of which contain mines. The player can reveal cells and mark cells as containing mines. The game ends when all cells without mines have been revealed or a mine is revealed.',
  solution: `
type Cell = {
  isMine: boolean;
  isRevealed: boolean;
  isFlagged: boolean;
  adjacentMines: number;
};

export class Minesweeper {
  private rows: number;
  private cols: number;
  private totalMines: number;
  private board: Cell[][];
  private gameOver: boolean = false;

  constructor(rows: number, cols: number, totalMines: number) {
    this.rows = rows;
    this.cols = cols;
    this.totalMines = totalMines;
    this.board = this.generateBoard();
  }

  private generateBoard(): Cell[][] {
    const board = Array.from({ length: this.rows }, () =>
      Array.from({ length: this.cols }, (): Cell => ({
        isMine: false,
        isRevealed: false,
        isFlagged: false,
        adjacentMines: 0,
      }))
    );

    // Place mines
    const positions = [];
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        positions.push({ row: i, col: j });
      }
    }
    positions.sort(() => Math.random() - 0.5);
    positions.slice(0, this.totalMines).forEach(({ row, col }) => {
      board[row][col].isMine = true;
    });

    // Calculate adjacent mines
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        board[i][j].adjacentMines = this.countAdjacentMines(i, j);
      }
    }

    return board;
  }

  private countAdjacentMines(row: number, col: number): number {
    let count = 0;
    for (let i = Math.max(0, row - 1); i <= Math.min(row + 1, this.rows - 1); i++) {
      for (let j = Math.max(0, col - 1); j <= Math.min(col + 1, this.cols - 1); j++) {
        if ((i !== row || j !== col) && this.board[i][j].isMine) {
          count++;
        }
      }
    }
    return count;
  }

  public revealCell(row: number, col: number): void {
    if (this.gameOver || !this.isValidCell(row, col)) return;
    const cell = this.board[row][col];
    if (cell.isRevealed || cell.isFlagged) return;

    cell.isRevealed = true;

    if (cell.isMine) {
      this.gameOver = true;
      // Game over logic
      return;
    }

    if (cell.adjacentMines === 0) {
      // Reveal adjacent cells
      for (let i = Math.max(0, row - 1); i <= Math.min(row + 1, this.rows - 1); i++) {
        for (let j = Math.max(0, col - 1); j <= Math.min(col + 1, this.cols - 1); j++) {
          if (!(i === row && j === col)) {
            this.revealCell(i, j);
          }
        }
      }
    }

    if (this.checkWin()) {
      this.gameOver = true;
      // Win logic
    }
  }

  public flagCell(row: number, col: number): void {
    if (this.gameOver || !this.isValidCell(row, col)) return;
    const cell = this.board[row][col];
    if (cell.isRevealed) return;
    cell.isFlagged = !cell.isFlagged;
  }

  private checkWin(): boolean {
    return this.board.every(row =>
      row.every(cell => (cell.isMine && !cell.isRevealed) || (!cell.isMine && cell.isRevealed))
    );
  }

  private isValidCell(row: number, col: number): boolean {
    return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
  }
}
`,
}

// Actual implementation

type Cell = {
  isMine: boolean
  isRevealed: boolean
  isFlagged: boolean
  adjacentMines: number
}

export class Minesweeper {
  private rows: number
  private cols: number
  private totalMines: number
  private board: Cell[][]
  private gameOver: boolean = false

  constructor(rows: number, cols: number, totalMines: number) {
    this.rows = rows
    this.cols = cols
    this.totalMines = totalMines
    this.board = this.generateBoard()
  }

  private generateBoard(): Cell[][] {
    const board = Array.from({ length: this.rows }, () =>
      Array.from(
        { length: this.cols },
        (): Cell => ({
          isMine: false,
          isRevealed: false,
          isFlagged: false,
          adjacentMines: 0,
        }),
      ),
    )

    // Place mines
    const positions = []
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        positions.push({ row: i, col: j })
      }
    }
    positions.sort(() => Math.random() - 0.5)
    positions.slice(0, this.totalMines).forEach(({ row, col }) => {
      board[row][col].isMine = true
    })

    // Calculate adjacent mines
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        board[i][j].adjacentMines = this.countAdjacentMines(i, j)
      }
    }

    return board
  }

  private countAdjacentMines(row: number, col: number): number {
    let count = 0
    for (
      let i = Math.max(0, row - 1);
      i <= Math.min(row + 1, this.rows - 1);
      i++
    ) {
      for (
        let j = Math.max(0, col - 1);
        j <= Math.min(col + 1, this.cols - 1);
        j++
      ) {
        if ((i !== row || j !== col) && this.board[i][j].isMine) {
          count++
        }
      }
    }
    return count
  }

  public revealCell(row: number, col: number): void {
    if (this.gameOver || !this.isValidCell(row, col)) return
    const cell = this.board[row][col]
    if (cell.isRevealed || cell.isFlagged) return

    cell.isRevealed = true

    if (cell.isMine) {
      this.gameOver = true
      // Game over logic
      return
    }

    if (cell.adjacentMines === 0) {
      // Reveal adjacent cells
      for (
        let i = Math.max(0, row - 1);
        i <= Math.min(row + 1, this.rows - 1);
        i++
      ) {
        for (
          let j = Math.max(0, col - 1);
          j <= Math.min(col + 1, this.cols - 1);
          j++
        ) {
          if (!(i === row && j === col)) {
            this.revealCell(i, j)
          }
        }
      }
    }

    if (this.checkWin()) {
      this.gameOver = true
      // Win logic
    }
  }

  public flagCell(row: number, col: number): void {
    if (this.gameOver || !this.isValidCell(row, col)) return
    const cell = this.board[row][col]
    if (cell.isRevealed) return
    cell.isFlagged = !cell.isFlagged
  }

  private checkWin(): boolean {
    return this.board.every((row) =>
      row.every(
        (cell) =>
          (cell.isMine && !cell.isRevealed) ||
          (!cell.isMine && cell.isRevealed),
      ),
    )
  }

  private isValidCell(row: number, col: number): boolean {
    return row >= 0 && row < this.rows && col >= 0 && col < this.cols
  }
}
