// src/problems/dominos.ts

export const dominosProblem = {
  id: 45,
  title: 'Domino Tiling',
  description:
    'Given a 2xN board, determine the number of ways to tile the board using 1x2 dominoes.',
  solution: `
const countDominoTilings = (n: number): number => {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  let prev2 = 1; // Number of ways to tile a 2x1 board
  let prev1 = 2; // Number of ways to tile a 2x2 board
  let current = 0;

  for (let i = 3; i <= n; i++) {
    current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }

  return current;
}

// Example usage:
const n = 5;
console.log(countDominoTilings(n)); // Output: 8
`,
}

const countDominoTilings = (n: number): number => {
  if (n <= 0) return 0
  if (n === 1) return 1
  if (n === 2) return 2

  let prev2 = 1 // Number of ways to tile a 2x1 board
  let prev1 = 2 // Number of ways to tile a 2x2 board
  let current = 0

  for (let i = 3; i <= n; i++) {
    current = prev1 + prev2
    prev2 = prev1
    prev1 = current
  }

  return current
}

// Example usage:
const n = 5
console.log(countDominoTilings(n)) // Output: 8
