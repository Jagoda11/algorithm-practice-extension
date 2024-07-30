// src/problems/lockers.ts

export const lockersProblem = {
  id: 51,
  title: '100 Lockers',
  description: `
You have 100 lockers in a hallway. Initially, all the lockers are closed. You make 100 passes by the lockers starting with the first locker every time. On the first pass, you toggle every locker (if it's closed, you open it; if it's open, you close it). On the second pass, you toggle every second locker. On the third pass, you toggle every third locker, and so on until you only toggle the 100th locker on the 100th pass. After completing  100 passes, which lockers are open?
`,
  solution: `
### Problem Statement:
You have 100 lockers in a hallway. Initially, all the lockers are closed. You make 100 passes by the lockers starting with the first locker every time. On the first pass, you toggle every locker (if it's closed, you open it; if it's open, you close it). On the second pass, you toggle every second locker. On the third pass, you toggle every third locker, and so on until you only toggle the 100th locker on the 100th pass. After completing 100 passes, which lockers are open?

### Logical Solution Explanation:
1. **Understanding the Process:**
   - Each locker will be toggled (opened if closed, closed if opened) on each pass that is a multiple of its position.

2. **Observation:**
   - A locker ends up open if it is toggled an odd number of times.
   - Lockers are toggled on passes that are factors of their position.
   - For example, locker 12 is toggled on passes 1, 2, 3, 4, 6, and 12.

3. **Conclusion:**
   - A locker has an odd number of factors if and only if it is a perfect square. This is because factors generally come in pairs, but a perfect square has one unpaired factor (its square root).

4. **Result:**
   - The lockers that remain open are those at positions that are perfect squares: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100.

### Coding Solution:
const findOpenLockers = (numLockers: number): number[] => {
  const openLockers: number[] = [];
  
  for (let i = 1; i * i <= numLockers; i++) {
    openLockers.push(i * i);
  }

  return openLockers;
}

// Example usage:
const numLockers = 100;
console.log(\`Open lockers: \${findOpenLockers(numLockers)}\`); // Output: Open lockers: 1,4,9,16,25,36,49,64,81,100
`,
}

// Actual TypeScript implementation
const findOpenLockers = (numLockers: number): number[] => {
  const openLockers: number[] = []

  for (let i = 1; i * i <= numLockers; i++) {
    openLockers.push(i * i)
  }

  return openLockers
}

// Example usage:
const numLockers = 100
console.log(`Open lockers: ${findOpenLockers(numLockers)}`) // Output: Open lockers: 1,4,9,16,25,36,49,64,81,100
