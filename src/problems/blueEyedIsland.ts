// src/problems/blueEyedIsland.ts

export const blueEyedIslandProblem = {
  id: 48,
  title: 'Blue-Eyed Island',
  description: `
You have an island with 100 people, and some of them have blue eyes. 
The people on the island are aware of the following rules:
1. They do not know the color of their own eyes.
2. They can see the eye color of everyone else.
3. They are not allowed to tell anyone else the color of their eyes.
4. If a person discovers they have blue eyes, they must leave the island at midnight.
5. There is a Guru who comes to the island and announces that at least one person on the island has blue eyes.

Given the number of blue-eyed people, this function determines the day they will leave the island.
this is probably not a coding problem, but more of a logic problem.
`,
  solution: `
const blueEyedIsland = (totalPeople: number, blueEyedPeople: number): void => {
  if (blueEyedPeople === 0) {
    console.log("No one leaves the island.");
    return;
  }

  for (let day = 1; day <= blueEyedPeople; day++) {
    console.log(\`Day \${day}: No one leaves the island.\`);
  }

  console.log(\`Day \${blueEyedPeople}: \${blueEyedPeople} blue-eyed people leave the island.\`);
};

// Example usage
const totalPeople = 100; // Total people on the island
const blueEyedPeople = 10; // Number of blue-eyed people

blueEyedIsland(totalPeople, blueEyedPeople);
`,
}

// Actual TypeScript implementation
const blueEyedIsland = (totalPeople: number, blueEyedPeople: number): void => {
  if (blueEyedPeople === 0) {
    console.log('No one leaves the island.')
    return
  }

  for (let day = 1; day <= blueEyedPeople; day++) {
    console.log(`Day ${day}: No one leaves the island.`)
  }

  console.log(
    `Day ${blueEyedPeople}: ${blueEyedPeople} blue-eyed people leave the island.`,
  )
}

// Example usage
const totalPeople = 100 // Total people on the island
const blueEyedPeople = 10 // Number of blue-eyed people

blueEyedIsland(totalPeople, blueEyedPeople)
