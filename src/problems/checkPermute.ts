// src/problems/checkPermute.ts

export const checkPermuteProblem = {
  id: 3,
  title: 'Check Permutation',
  description:
    'Given two strings, check to see if they are permutations of each other. A permutation is defined as, “a way, especially one of several possible variations, in which a set or number of things can be ordered or arranged.',
  solution: `
export const checkPermute = (stringOne: string, stringTwo: string): boolean => {
  if (stringOne.length !== stringTwo.length) {
    return false;
  } else {
    const sortedStringOne = stringOne.split('').sort().join('');
    const sortedStringTwo = stringTwo.split('').sort().join('');
    return sortedStringOne === sortedStringTwo;
  }
};`,
}

export const checkPermute = (stringOne: string, stringTwo: string): boolean => {
  if (stringOne.length !== stringTwo.length) {
    return false
  } else {
    const sortedStringOne = stringOne.split('').sort().join('')
    const sortedStringTwo = stringTwo.split('').sort().join('')
    return sortedStringOne === sortedStringTwo
  }
}
