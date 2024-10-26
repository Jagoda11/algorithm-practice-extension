// src/problems/tripleStep.ts

export const tripleStepProblem = {
  id: 26, // Assuming the next ID after 25
  title: 'Triple Step',
  description:
    'A child is running up a staircase with **n** steps and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs.',
  solution: `
export const countWays = (n: number): number => {
  if (n < 0) return 0;
  const memo: number[] = Array(n + 1).fill(-1);
  return countWaysHelper(n, memo);
};

const countWaysHelper = (n: number, memo: number[]): number => {
  if (n < 0) return 0;
  if (n === 0) return 1;
  if (memo[n] !== -1) return memo[n];

  memo[n] =
    countWaysHelper(n - 1, memo) +
    countWaysHelper(n - 2, memo) +
    countWaysHelper(n - 3, memo);

  return memo[n];
};
`,
}

// Actual implementation

export const countWays = (n: number): number => {
  if (n < 0) return 0
  const memo: number[] = Array(n + 1).fill(-1)
  return countWaysHelper(n, memo)
}

const countWaysHelper = (n: number, memo: number[]): number => {
  if (n < 0) return 0
  if (n === 0) return 1
  if (memo[n] !== -1) return memo[n]

  memo[n] =
    countWaysHelper(n - 1, memo) +
    countWaysHelper(n - 2, memo) +
    countWaysHelper(n - 3, memo)

  return memo[n]
}

// Example usage:
console.log(countWays(3)) // Output: 4
console.log(countWays(4)) // Output: 7
console.log(countWays(5)) // Output: 13
