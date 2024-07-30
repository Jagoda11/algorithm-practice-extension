// src/problems/nextNumber.ts

export const nextNumberProblem = {
  id: 38,
  title: 'Next Number',
  description:
    'Given a positive integer, find the next smallest and the next largest number that have the same number of 1 bits in their binary representation.',
  solution: `
const getNext = (num: number): number => {
  let c = num;
  let c0 = 0;
  let c1 = 0;

  while (((c & 1) === 0) && (c !== 0)) {
    c0++;
    c >>= 1;
  }

  while ((c & 1) === 1) {
    c1++;
    c >>= 1;
  }

  if (c0 + c1 === 31 || c0 + c1 === 0) {
    return -1;
  }

  const pos = c0 + c1;

  num |= (1 << pos);
  num &= ~((1 << pos) - 1);
  num |= (1 << (c1 - 1)) - 1;

  return num;
};

const getPrev = (num: number): number => {
  let temp = num;
  let c0 = 0;
  let c1 = 0;

  while ((temp & 1) === 1) {
    c1++;
    temp >>= 1;
  }

  if (temp === 0) {
    return -1;
  }

  while (((temp & 1) === 0) && (temp !== 0)) {
    c0++;
    temp >>= 1;
  }

  const p = c0 + c1;

  num &= ((~0) << (p + 1));
  const mask = (1 << (c1 + 1)) - 1;
  num |= mask << (c0 - 1);

  return num;
};

// Example usage:
console.log(getNext(13948)); // Output: 13967 (binary: 11011001111100 -> 11011010001111)
console.log(getPrev(13948)); // Output: 13946 (binary: 11011001111100 -> 11011001111010)
`,
}

const getNext = (num: number): number => {
  let c = num
  let c0 = 0
  let c1 = 0

  while ((c & 1) === 0 && c !== 0) {
    c0++
    c >>= 1
  }

  while ((c & 1) === 1) {
    c1++
    c >>= 1
  }

  if (c0 + c1 === 31 || c0 + c1 === 0) {
    return -1
  }

  const pos = c0 + c1

  num |= 1 << pos
  num &= ~((1 << pos) - 1)
  num |= (1 << (c1 - 1)) - 1

  return num
}

const getPrev = (num: number): number => {
  let temp = num
  let c0 = 0
  let c1 = 0

  while ((temp & 1) === 1) {
    c1++
    temp >>= 1
  }

  if (temp === 0) {
    return -1
  }

  while ((temp & 1) === 0 && temp !== 0) {
    c0++
    temp >>= 1
  }

  const p = c0 + c1

  num &= ~0 << (p + 1)
  const mask = (1 << (c1 + 1)) - 1
  num |= mask << (c0 - 1)

  return num
}

// Example usage:
console.log(getNext(13948)) // Output: 13967 (binary: 11011001111100 -> 11011010001111)
console.log(getPrev(13948)) // Output: 13946 (binary: 11011001111100 -> 11011001111010)
