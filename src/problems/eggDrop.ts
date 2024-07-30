// src/problems/eggDrop.ts

export const eggDropProblem = {
  id: 50,
  title: 'The Egg Drop Problem',
  description: `
You are given two eggs and you need to determine the highest floor from which an egg can be dropped without breaking. The goal is to minimize the number of drops in the worst-case scenario. Assume you have a building with 'n' floors.
`,
  solution: `
### Problem Statement:
You are given two eggs and you need to determine the highest floor from which an egg can be dropped without breaking. The goal is to minimize the number of drops in the worst-case scenario. Assume you have a building with 'n' floors.

### Logical Solution Explanation:
1. **Understanding the Process:**
  - With two eggs, the challenge is to find a strategy that minimizes the maximum number of drops required to determine the critical floor (the highest floor from which an egg can be dropped without breaking).

2. **Optimal Strategy:**
  - The key idea is to use the first egg to reduce the problem size, and the second egg to pinpoint the exact floor once the first egg breaks.
  - A good strategy is to drop the first egg from floors in a decreasing step size. This way, if the egg breaks, you only have a smaller number of floors to check with the second egg.

3. **Mathematical Insight:**
  - To minimize the worst-case number of drops, you want the steps to add up to the total number of floors. This is equivalent to solving for k in the equation:
    k + (k-1) + (k-2) + ... + 1 >= n
  - This is the sum of the first k natural numbers, which equals k(k+1)/2.

4. **Finding the Optimal Drop Step:**
  - Solve for k such that k(k+1)/2 >= n.

### Coding Solution:
const findCriticalFloor = (n: number): number => {
  let k = 0;
  while ((k * (k + 1)) / 2 < n) {
    k++;
  }

  return k;
}

// Example usage:
const n = 100; // Number of floors
console.log(\`Minimum number of drops required in the worst-case: \${findCriticalFloor(n)}\`);
`,
}

// Actual TypeScript implementation
const findCriticalFloor = (n: number): number => {
  let k = 0
  while ((k * (k + 1)) / 2 < n) {
    k++
  }

  return k
}

// Example usage:
const n = 100 // Number of floors
console.log(
  `Minimum number of drops required in the worst-case: ${findCriticalFloor(n)}`,
)
