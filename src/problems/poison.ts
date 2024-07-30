// src/problems/poison.ts

export const poisonProblem = {
  id: 52,
  title: 'Poison Problem',
  description: `
You have 1000 bottles of soda, and exactly one is poisoned. You have 10 test strips which can be used to detect poison. A single drop of poisoned soda will turn the test strip positive permanently, but you can only use the test strips once per day, and it takes a day to get the results. You need to determine the minimum number of days needed to find the poisoned bottle.
`,
  solution: `
### Problem Statement:
You have 1000 bottles of soda, and exactly one is poisoned. You have 10 test strips which can be used to detect poison. A single drop of poisoned soda will turn the test strip positive permanently, but you can only use the test strips once per day, and it takes a day to get the results. You need to determine the minimum number of days needed to find the poisoned bottle.

### Logical Solution Explanation:
1. **Binary Representation Approach:**
   - With 10 test strips, you can represent each bottle with a unique binary number from 0000000000 to 1111101000 (0 to 999 in decimal).
   - Each test strip corresponds to a bit position in the binary representation.
   - By using the binary representation of the bottle numbers, you can determine which bottles to test with each strip.
   - If a test strip turns positive, it indicates that the poisoned bottle has a 1 in the corresponding bit position.

2. **Process:**
   - Label the test strips from 0 to 9.
   - For each bottle, convert its number to binary.
   - Drop a bit of soda from the bottle onto each test strip corresponding to a 1 in its binary representation.
   - After one day, read the results of the test strips. The combination of positive test strips will give you the binary representation of the poisoned bottle's number.

3. **Conclusion:**
   - You can identify the poisoned bottle in just 1 day using the binary representation method.

### Coding Solution:
const findPoisonedBottle = (numBottles: number, numStrips: number): number => {
  // This function simulates finding the poisoned bottle in 1 day.
  const poisonedBottle = Math.floor(Math.random() * numBottles); // Randomly select a poisoned bottle

  const testStrips = new Array(numStrips).fill(0);

  for (let bottle = 0; bottle < numBottles; bottle++) {
    for (let bit = 0; bit < numStrips; bit++) {
      if ((bottle & (1 << bit)) !== 0) {
        if (bottle === poisonedBottle) {
          testStrips[bit] = 1;
        }
      }
    }
  }

  let result = 0;
  for (let bit = 0; bit < numStrips; bit++) {
    if (testStrips[bit] === 1) {
      result |= (1 << bit);
    }
  }

  return result;
}

// Example usage:
const numBottles = 1000;
const numStrips = 10;
console.log(\`Poisoned bottle found at: \${findPoisonedBottle(numBottles, numStrips)}\`);
`,
}

// Actual TypeScript implementation
const findPoisonedBottle = (numBottles: number, numStrips: number): number => {
  // This function simulates finding the poisoned bottle in 1 day.
  const poisonedBottle = Math.floor(Math.random() * numBottles) // Randomly select a poisoned bottle

  const testStrips = new Array(numStrips).fill(0)

  for (let bottle = 0; bottle < numBottles; bottle++) {
    for (let bit = 0; bit < numStrips; bit++) {
      if ((bottle & (1 << bit)) !== 0) {
        if (bottle === poisonedBottle) {
          testStrips[bit] = 1
        }
      }
    }
  }

  let result = 0
  for (let bit = 0; bit < numStrips; bit++) {
    if (testStrips[bit] === 1) {
      result |= 1 << bit
    }
  }

  return result
}

// Example usage:
const numBottles = 1000
const numStrips = 10
console.log(
  `Poisoned bottle found at: ${findPoisonedBottle(numBottles, numStrips)}`,
)
