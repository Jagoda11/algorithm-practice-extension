export const removeDuplicatesProblem = {
  id: 10,
  title: 'Remove Duplicates',
  description:
    'Write a method to remove duplicate characters from a string without using any additional buffer.',
  solution: `
export const removeDuplicates = (str: string): string => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === i) {
      result += str[i];
    }
  }
  return result;
};`,
}

export const removeDuplicates = (str: string): string => {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === i) {
      result += str[i]
    }
  }
  return result
}
