// src/problems/flipBitToWin.ts

export const flipBitToWinProblem = {
  id: 37,
  title: 'Flip Bit to Win',
  description:
    'You have an integer and you can flip exactly one bit from a 0 to a 1. Write code to find the length of the longest sequence of 1s you could create.',
  solution: `
const flipBitToWin = (num: number): number => {
  if (~num === 0) return 32;

  let maxLength = 1;
  let currentLength = 0;
  let previousLength = 0;

  while (num !== 0) {
    if ((num & 1) === 1) {
      currentLength++;
    } else {
      previousLength = (num & 2) === 0 ? 0 : currentLength;
      currentLength = 0;
    }

    maxLength = Math.max(maxLength, previousLength + currentLength + 1);
    num >>= 1;
  }

  return maxLength;
};

// Example usage:
console.log(flipBitToWin(1775)); // Output: 8 (binary: 11011101111)
console.log(flipBitToWin(15)); // Output: 4 (binary: 1111)
`,
}

const flipBitToWin = (num: number): number => {
  if (~num === 0) return 32

  let maxLength = 1
  let currentLength = 0
  let previousLength = 0

  while (num !== 0) {
    if ((num & 1) === 1) {
      currentLength++
    } else {
      previousLength = (num & 2) === 0 ? 0 : currentLength
      currentLength = 0
    }

    maxLength = Math.max(maxLength, previousLength + currentLength + 1)
    num >>= 1
  }

  return maxLength
}

// Example usage:
console.log(flipBitToWin(1775)) // Output: 8 (binary: 11011101111)
console.log(flipBitToWin(15)) // Output: 4 (binary: 1111)
