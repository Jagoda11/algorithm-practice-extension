// src/problems/antsOnTriangle.ts

export const antsOnTriangleProblem = {
  id: 46,
  title: 'Ants on a Triangle',
  description:
    'Three ants are sitting at the three corners of an equilateral triangle. Each ant randomly picks a direction and starts moving along the edge of the triangle. What is the probability that they will not collide?',
  solution: `
const probabilityOfNoCollision = (): number => {
  const allPossibilities = 2 ** 3; // Each ant can go in 2 directions, so 2^3 possibilities
  const noCollision = 2; // 2 ways: all clockwise or all counterclockwise

  return noCollision / allPossibilities;
}

// Example usage:
console.log(probabilityOfNoCollision()); // Output: 0.25
`,
}

const probabilityOfNoCollision = (): number => {
  const allPossibilities = 2 ** 3 // Each ant can go in 2 directions, so 2^3 possibilities
  const noCollision = 2 // 2 ways: all clockwise or all counterclockwise

  return noCollision / allPossibilities
}

// Example usage:
console.log(probabilityOfNoCollision()) // Output: 0.25
