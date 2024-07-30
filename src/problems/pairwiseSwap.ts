// src/problems/pairwiseSwap.ts

export const pairwiseSwapProblem = {
  id: 41,
  title: 'Pairwise Swap',
  description:
    'Write a program to swap odd and even bits in an integer with as few instructions as possible (e.g., bit 0 and bit 1 are swapped, bit 2 and bit 3 are swapped, and so on).',
  solution: `
const pairwiseSwap = (num: number): number => {
  const EVEN_MASK = 0xAAAAAAAA; // Mask for even bits (101010...10)
  const ODD_MASK = 0x55555555; // Mask for odd bits (010101...01)

  const evenBits = num & EVEN_MASK;
  const oddBits = num & ODD_MASK;

  const shiftedEvenBits = evenBits >> 1;
  const shiftedOddBits = oddBits << 1;

  return shiftedEvenBits | shiftedOddBits;
}

// Example usage:
console.log(pairwiseSwap(23)); // Output: 43 (binary: 10111 -> 101011)
console.log(pairwiseSwap(42)); // Output: 21 (binary: 101010 -> 010101)
`,
}

const pairwiseSwap = (num: number): number => {
  const EVEN_MASK = 0xaaaaaaaa // Mask for even bits (101010...10)
  const ODD_MASK = 0x55555555 // Mask for odd bits (010101...01)

  const evenBits = num & EVEN_MASK
  const oddBits = num & ODD_MASK

  const shiftedEvenBits = evenBits >> 1
  const shiftedOddBits = oddBits << 1

  return shiftedEvenBits | shiftedOddBits
}

// Example usage:
console.log(pairwiseSwap(23)) // Output: 43 (binary: 10111 -> 101011)
console.log(pairwiseSwap(42)) // Output: 21 (binary: 101010 -> 010101)
