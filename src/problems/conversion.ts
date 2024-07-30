// src/problems/conversion.ts

export const conversionProblem = {
  id: 40,
  title: 'Conversion',
  description:
    'Write a function to determine the number of bits you would need to flip to convert integer A to integer B.',
  solution: `
const conversion = (A: number, B: number): number => {
  let count = 0;
  let C = A ^ B; // XOR to find differing bits

  while (C !== 0) {
    count += C & 1; // Increment count if the last bit is 1
    C >>= 1; // Shift right to check the next bit
  }

  return count;
}

// Example usage:
console.log(conversion(29, 15)); // Output: 2 (binary: 11101 -> 01111, flip bits at positions 2 and 4)
console.log(conversion(1, 2)); // Output: 2 (binary: 00001 -> 00010, flip bits at positions 0 and 1)
`,
}

const conversion = (A: number, B: number): number => {
  let count = 0
  let C = A ^ B // XOR to find differing bits

  while (C !== 0) {
    count += C & 1 // Increment count if the last bit is 1
    C >>= 1 // Shift right to check the next bit
  }

  return count
}

// Example usage:
console.log(conversion(29, 15)) // Output: 2 (binary: 11101 -> 01111, flip bits at positions 2 and 4)
console.log(conversion(1, 2)) // Output: 2 (binary: 00001 -> 00010, flip bits at positions 0 and 1)
