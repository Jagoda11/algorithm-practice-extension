// src/problems/jugsOfWater.ts

export const jugsOfWaterProblem = {
  id: 47,
  title: 'Jugs of Water',
  description:
    'You are given two jugs with capacities x and y liters. There is an infinite amount of water supply available. You need to determine whether it is possible to measure exactly z liters using these two jugs. If z liters of water is measurable, you must have z liters of water contained within one or both buckets by the end. You can perform the following operations:\n1. Fill any of the jugs completely with water.\n2. Empty any of the jugs.\n3. Pour water from one jug into another jug until the other jug is completely full or the first jug itself is empty.',
  solution: `
const canMeasureWater = (x: number, y: number, z: number): boolean => {
  if (z > x + y) return false;
  if (z === 0 || z === x || z === y || z === x + y) return true;

  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  
  return z % gcd(x, y) === 0;
}

// Example usage:
console.log(canMeasureWater(3, 5, 4)); // Output: true
console.log(canMeasureWater(2, 6, 5)); // Output: false
`,
}

const canMeasureWater = (x: number, y: number, z: number): boolean => {
  if (z > x + y) return false
  if (z === 0 || z === x || z === y || z === x + y) return true

  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b))

  return z % gcd(x, y) === 0
}

// Example usage:
console.log(canMeasureWater(3, 5, 4)) // Output: true
console.log(canMeasureWater(2, 6, 5)) // Output: false
