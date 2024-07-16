export const zeroMatrixProblem = {
  id: 8,
  title: 'Zero Matrix',
  description:
    'Write an algorithm such that if an element in an M x N matrix is 0, its entire row and column are set to 0.',
  solution: `
export const zeroMatrix = (matrix: number[][]): number[][] => {
  const rows = new Set<number>();
  const cols = new Set<number>();

  // First pass to find all rows and columns that need to be zeroed
  matrix.forEach((row, i) => {
    row.forEach((value, j) => {
      if (value === 0) {
        rows.add(i);
        cols.add(j);
      }
    });
  });

  // Second pass to set rows to zero
  rows.forEach(row => {
    matrix[row].fill(0);
  });

  // Second pass to set columns to zero
  cols.forEach(col => {
    matrix.forEach(row => {
      row[col] = 0;
    });
  });

  return matrix;
};`,
}

export const zeroMatrix = (matrix: number[][]): number[][] => {
  const rows = new Set<number>()
  const cols = new Set<number>()

  // First pass to find all rows and columns that need to be zeroed
  matrix.forEach((row, i) => {
    row.forEach((value, j) => {
      if (value === 0) {
        rows.add(i)
        cols.add(j)
      }
    })
  })

  // Second pass to set rows to zero
  rows.forEach((row) => {
    matrix[row].fill(0)
  })

  // Second pass to set columns to zero
  cols.forEach((col) => {
    matrix.forEach((row) => {
      row[col] = 0
    })
  })

  return matrix
}
