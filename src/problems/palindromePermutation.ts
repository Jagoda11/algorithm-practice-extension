// src/problems/palindromePermutation.ts

export const palindromePermutationProblem = {
  id: 5,
  title: 'Palindrome Permutation',
  description:
    'Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.',
  solution: `
export const palindromePermutation = (str: string): boolean => {
  const charCount = new Map<string, number>();
  for (let char of str.replace(/\\s+/g, '').toLowerCase()) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  let oddCount = 0;
  for (let count of charCount.values()) {
    if (count % 2 !== 0) oddCount++;
    if (oddCount > 1) return false;
  }
  return true;
};`,
}

export const palindromePermutation = (str: string): boolean => {
  const charCount = new Map<string, number>()
  for (const char of str.replace(/\s+/g, '').toLowerCase()) {
    charCount.set(char, (charCount.get(char) || 0) + 1)
  }
  let oddCount = 0
  for (const count of charCount.values()) {
    if (count % 2 !== 0) oddCount++
    if (oddCount > 1) return false
  }
  return true
}
