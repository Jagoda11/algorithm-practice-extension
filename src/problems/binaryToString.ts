// src/problems/binaryToString.ts

export const binaryToStringProblem = {
  id: 36,
  title: 'Binary to String',
  description:
    'Given a real number between 0 and 1 (e.g., 0.72) that is passed in as a double, print the binary representation. If the number cannot be represented accurately in binary with at most 32 characters, print "ERROR".',
  solution: `
const binaryToString = (num: number): string => {
  if (num <= 0 || num >= 1) {
    return "ERROR";
  }

  let binary = "0.";
  let frac = 0.5;

  while (num > 0) {
    if (binary.length >= 32) {
      return "ERROR";
    }

    if (num >= frac) {
      binary += "1";
      num -= frac;
    } else {
      binary += "0";
    }

    frac /= 2;
  }

  return binary;
}

// Example usage:
console.log(binaryToString(0.72)); // Output: "ERROR"
console.log(binaryToString(0.625)); // Output: "0.101"
`,
}

const binaryToString = (num: number): string => {
  if (num <= 0 || num >= 1) {
    return 'ERROR'
  }

  let binary = '0.'
  let frac = 0.5

  while (num > 0) {
    if (binary.length >= 32) {
      return 'ERROR'
    }

    if (num >= frac) {
      binary += '1'
      num -= frac
    } else {
      binary += '0'
    }

    frac /= 2
  }

  return binary
}

// Example usage:
console.log(binaryToString(0.72)) // Output: "ERROR"
console.log(binaryToString(0.625)) // Output: "0.101"
