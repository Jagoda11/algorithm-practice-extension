// src/problems/isUnique.ts

export const isUniqueProblem = {
  id: 1,
  title: 'Is Unique',
  description:
    'Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?',
  solution: `
export const allUniqueChars = (str: string): boolean => {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
};`,
}

export const allUniqueChars = (str: string): boolean => {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false
      }
    }
  }
  return true
}
