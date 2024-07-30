// src/problems/apocalypse.ts

export const apocalypseProblem = {
  id: 49,
  title: 'The Apocalypse',
  description: `
In an apocalypse scenario, every family continues to have children until they have a boy. If they have a girl, they keep trying for another child. Once they have a boy, they stop having children. What is the expected gender ratio (girls to boys) in the population?
`,
  solution: `
### Problem Statement:
In an apocalypse scenario, every family continues to have children until they have a boy. If they have a girl, they keep trying for another child. Once they have a boy, they stop having children. What is the expected gender ratio (girls to boys) in the population?

### Logical Solution Explanation:
1. **Understanding the Process:**
   - Each family will have children until they have a boy.
   - If a family has a girl, they will keep trying for another child.
   - Once a family has a boy, they will stop having children.

2. **Expected Result:**
   - Each family has exactly one boy.
   - The number of girls varies, but on average, each family will have one girl.
   - Therefore, in a large population, the expected ratio of girls to boys is 1:1.

3. **Why This Happens:**
   - The probability of having a boy or a girl is equal (50% each).
   - On average, for every boy born, there will be one girl born before the boy is born.
   - Thus, the expected ratio of girls to boys across many families will be 1:1.

### Coding Solution:
const simulateFamily = (): [number, number] => {
  let boys = 0;
  let girls = 0;

  while (boys === 0) {
    if (Math.random() < 0.5) {
      girls++;
    } else {
      boys++;
    }
  }

  return [boys, girls];
}

const simulatePopulation = (numFamilies: number): [number, number] => {
  let totalBoys = 0;
  let totalGirls = 0;

  for (let i = 0; i < numFamilies; i++) {
    const [boys, girls] = simulateFamily();
    totalBoys += boys;
    totalGirls += girls;
  }

  return [totalBoys, totalGirls];
}

// Example usage:
const numFamilies = 1000000;
const [totalBoys, totalGirls] = simulatePopulation(numFamilies);
console.log(\`Total boys: \${totalBoys}, Total girls: \${totalGirls}\`);
console.log(\`Ratio (girls to boys): \${totalGirls / totalBoys}\`);
`,
}

// Actual TypeScript implementation
const simulateFamily = (): [number, number] => {
  let boys = 0
  let girls = 0

  while (boys === 0) {
    if (Math.random() < 0.5) {
      girls++
    } else {
      boys++
    }
  }

  return [boys, girls]
}

const simulatePopulation = (numFamilies: number): [number, number] => {
  let totalBoys = 0
  let totalGirls = 0

  for (let i = 0; i < numFamilies; i++) {
    const [boys, girls] = simulateFamily()
    totalBoys += boys
    totalGirls += girls
  }

  return [totalBoys, totalGirls]
}

// Example usage:
const numFamilies = 1000000
const [totalBoys, totalGirls] = simulatePopulation(numFamilies)
console.log(`Total boys: ${totalBoys}, Total girls: ${totalGirls}`)
console.log(`Ratio (girls to boys): ${totalGirls / totalBoys}`)
