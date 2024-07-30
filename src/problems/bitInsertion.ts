// src/problems/bitInsertion.ts

export const bitInsertionProblem = {
  id: 35,
  title: 'Insertion (Bit)',
  description:
    'You are given two 32-bit numbers, N and M, and two bit positions, i and j. Write a method to insert M into N such that M starts at bit j and ends at bit i. You can assume that the bits j through i have enough space to fit all of M. That is, if M=10011, you can assume that there are at least 5 bits between j and i. You would not, for example, have j=3 and i=2, because M could not fully fit between bit 3 and bit 2.',
  solution: `
const insertBits = (N: number, M: number, i: number, j: number): number => {
  // Create a mask to clear bits i through j in N
  const allOnes = ~0; // Sequence of all 1s

  const left = allOnes << (j + 1); // 1s before position j, then 0s
  const right = (1 << i) - 1; // 1s after position i

  const mask = left | right; // All 1s, except for 0s between i and j

  // Clear bits j through i then put M in there
  const nCleared = N & mask; // Clear bits j through i
  const mShifted = M << i; // Move M into correct position

  return nCleared | mShifted; // OR them, and we're done!
};

// Example usage:
const N = parseInt('10000000000', 2); // 1024 in binary
const M = parseInt('10011', 2); // 19 in binary
const i = 2;
const j = 6;

const result = insertBits(N, M, i, j);
console.log(result.toString(2)); // Output: '10001001100'
`,
}

const insertBits = (N: number, M: number, i: number, j: number): number => {
  // Create a mask to clear bits i through j in N
  const allOnes = ~0 // Sequence of all 1s

  const left = allOnes << (j + 1) // 1s before position j, then 0s
  const right = (1 << i) - 1 // 1s after position i

  const mask = left | right // All 1s, except for 0s between i and j

  // Clear bits j through i then put M in there
  const nCleared = N & mask // Clear bits j through i
  const mShifted = M << i // Move M into correct position

  return nCleared | mShifted // OR them, and we're done!
}

// Example usage:
const N = parseInt('10000000000', 2) // 1024 in binary
const M = parseInt('10011', 2) // 19 in binary
const i = 2
const j = 6

const result = insertBits(N, M, i, j)
console.log(result.toString(2)) // Output: '10001001100'
