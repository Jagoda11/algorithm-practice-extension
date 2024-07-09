// src/problems/stringCompression.ts

export const stringCompressionProblem = {
  id: 7,
  title: 'String Compression',
  description:
    'Implement a method to perform basic string compression using the counts of repeated characters. For example, the string "aabcccccaaa" would become "a2b1c5a3". If the compressed string would not become smaller than the original string, your method should return the original string.',
  solution: `
export const stringCompression = (str: string): string => {
  let compressed = '';
  let countConsecutive = 0;
  for (let i = 0; i < str.length; i++) {
    countConsecutive++;
    if (i + 1 >= str.length || str[i] !== str[i + 1]) {
      compressed += str[i] + countConsecutive;
      countConsecutive = 0;
    }
  }
  return compressed.length < str.length ? compressed : str;
};`,
}

export const stringCompression = (str: string): string => {
  let compressed = ''
  let countConsecutive = 0
  for (let i = 0; i < str.length; i++) {
    countConsecutive++
    if (i + 1 >= str.length || str[i] !== str[i + 1]) {
      compressed += str[i] + countConsecutive
      countConsecutive = 0
    }
  }
  return compressed.length < str.length ? compressed : str
}
