// src/problems/heavyPill.ts

export const heavyPillProblem = {
  id: 43,
  title: 'The Heavy Pill',
  description:
    'You have 20 pill bottles. 19 bottles contain pills that weigh 1 gram each, but one bottle contains pills that weigh 1.1 grams each. You have a scale that provides an exact measurement. How would you find the heavy bottle by using the scale only once?',
  solution: `
const findHeavyBottle = (bottles: number[]): number => {
  // Sum of expected weights if all pills are 1 gram
  let expectedWeight = 0;
  for (let i = 1; i <= bottles.length; i++) {
    expectedWeight += i;
  }

  // Actual weight from the scale
  const actualWeight = bottles.reduce((sum, weight, index) => sum + weight * (index + 1), 0);

  // Difference gives the index of the heavy bottle (since extra 0.1 gram per pill)
  const difference = actualWeight - expectedWeight;
  const heavyBottleIndex = Math.round(difference / 0.1);

  return heavyBottleIndex;
}

// Example usage:
const bottles = new Array(20).fill(1);
bottles[5] = 1.1; // Let's say the 6th bottle is the heavy one

console.log(findHeavyBottle(bottles)); // Output: 5 (index of the heavy bottle)
`,
}

const findHeavyBottle = (bottles: number[]): number => {
  // Sum of expected weights if all pills are 1 gram
  let expectedWeight = 0
  for (let i = 1; i <= bottles.length; i++) {
    expectedWeight += i
  }

  // Actual weight from the scale
  const actualWeight = bottles.reduce(
    (sum, weight, index) => sum + weight * (index + 1),
    0,
  )

  // Difference gives the index of the heavy bottle (since extra 0.1 gram per pill)
  const difference = actualWeight - expectedWeight
  const heavyBottleIndex = Math.round(difference / 0.1)

  return heavyBottleIndex
}

// Example usage:
const bottles = new Array(20).fill(1)
bottles[5] = 1.1 // Let's say the 6th bottle is the heavy one

console.log(findHeavyBottle(bottles)) // Output: 5 (index of the heavy bottle)
