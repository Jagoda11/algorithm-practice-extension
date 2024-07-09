// src/problems/oneWay.ts

export const oneWayProblem = {
  id: 5,
  title: 'One Way',
  description:
    'There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.',
  solution: `
export const oneWay = (first: string, second: string): boolean => {
  if (Math.abs(first.length - second.length) > 1) return false;
  let foundDifference = false;
  let i = 0;
  let j = 0;
  while (i < first.length && j < second.length) {
    if (first[i] !== second[j]) {
      if (foundDifference) return false;
      foundDifference = true;
      if (first.length > second.length) i++;
      else if (first.length < second.length) j++;
      else {
        i++;
        j++;
      }
    } else {
      i++;
      j++;
    }
  }
  return true;
};`,
}

export const oneWay = (first: string, second: string): boolean => {
  if (Math.abs(first.length - second.length) > 1) return false
  let foundDifference = false
  let i = 0
  let j = 0
  while (i < first.length && j < second.length) {
    if (first[i] !== second[j]) {
      if (foundDifference) return false
      foundDifference = true
      if (first.length > second.length) i++
      else if (first.length < second.length) j++
      else {
        i++
        j++
      }
    } else {
      i++
      j++
    }
  }
  return true
}
