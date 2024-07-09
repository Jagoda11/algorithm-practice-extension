export const urlifyProblem = {
  id: 2,
  title: 'URLify',
  description:
    'Write a method to replace all spaces in a string with ‘%20’. You may assume that the string has sufficient space at the end to hold the additional characters and that you are given the true length of the string.',
  solution: `
export const urlify = (str: string, length: number): string => {
  const strArr = str.split('');
  let pointer = 0;
  while (pointer < str.length) {
    if (strArr[pointer] === ' ') {
      for (let i = str.length - 1; i > pointer + 2; i--) {
        strArr[i] = strArr[i - 2];
      }
      strArr[pointer] = '%';
      strArr[pointer + 1] = '2';
      strArr[pointer + 2] = '0';
      pointer += 2;
    }
    pointer++;
  }
  return strArr.join('');
};`,
}

export const urlify = (str: string): string => {
  const strArr = str.split('')
  let pointer = 0
  while (pointer < str.length) {
    if (strArr[pointer] === ' ') {
      for (let i = str.length - 1; i > pointer + 2; i--) {
        strArr[i] = strArr[i - 2]
      }
      strArr[pointer] = '%'
      strArr[pointer + 1] = '2'
      strArr[pointer + 2] = '0'
      pointer += 2
    }
    pointer++
  }
  return strArr.join('')
}
