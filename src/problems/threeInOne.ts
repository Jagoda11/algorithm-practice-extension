// src/problems/threeInOne.ts

export const threeInOneProblem = {
  id: 17,
  title: 'Three in One: Implement Three Stacks Using a Single Array',
  description:
    'Describe how you could use a single array to implement three stacks. You should be able to push, pop, and peek elements from each stack, and also check if a stack is empty.',
  solution: `
class ThreeInOne {
  private readonly array: (number | null)[];
  private readonly stackSize: number;
  private readonly stackPointers: number[];

  constructor(stackSize: number) {
    this.stackSize = stackSize;
    this.array = new Array(stackSize * 3).fill(null);
    this.stackPointers = [-1, -1, -1]; // Initialize pointers for each stack
  }

  push(stackNum: number, value: number): void {
    if (this.stackPointers[stackNum] + 1 >= this.stackSize) {
      throw new Error('Stack is full');
    }
    this.stackPointers[stackNum]++;
    this.array[this.getTopIndex(stackNum)] = value;
  }

  pop(stackNum: number): number | null {
    if (this.isEmpty(stackNum)) {
      throw new Error('Stack is empty');
    }
    const topIndex = this.getTopIndex(stackNum);
    const value = this.array[topIndex];
    this.array[topIndex] = null;
    this.stackPointers[stackNum]--;
    return value;
  }

  peek(stackNum: number): number | null {
    if (this.isEmpty(stackNum)) {
      return null;
    }
    return this.array[this.getTopIndex(stackNum)];
  }

  isEmpty(stackNum: number): boolean {
    return this.stackPointers[stackNum] === -1;
  }

  private getTopIndex(stackNum: number): number {
    return stackNum * this.stackSize + this.stackPointers[stackNum];
  }
}

// Example usage:
const stacks = new ThreeInOne(5);
stacks.push(0, 10);
stacks.push(1, 20);
stacks.push(2, 30);
console.log(stacks.peek(0)); // Output: 10
console.log(stacks.pop(1));  // Output: 20
console.log(stacks.isEmpty(2)); // Output: false
`,
}

class ThreeInOne {
  private readonly array: (number | null)[]
  private readonly stackSize: number
  private readonly stackPointers: number[]

  constructor(stackSize: number) {
    this.stackSize = stackSize
    this.array = new Array(stackSize * 3).fill(null)
    this.stackPointers = [-1, -1, -1] // Initialize pointers for each stack
  }

  push(stackNum: number, value: number): void {
    if (this.stackPointers[stackNum] + 1 >= this.stackSize) {
      throw new Error('Stack is full')
    }
    this.stackPointers[stackNum]++
    this.array[this.getTopIndex(stackNum)] = value
  }

  pop(stackNum: number): number | null {
    if (this.isEmpty(stackNum)) {
      throw new Error('Stack is empty')
    }
    const topIndex = this.getTopIndex(stackNum)
    const value = this.array[topIndex]
    this.array[topIndex] = null
    this.stackPointers[stackNum]--
    return value
  }

  peek(stackNum: number): number | null {
    if (this.isEmpty(stackNum)) {
      return null
    }
    return this.array[this.getTopIndex(stackNum)]
  }

  isEmpty(stackNum: number): boolean {
    return this.stackPointers[stackNum] === -1
  }

  private getTopIndex(stackNum: number): number {
    return stackNum * this.stackSize + this.stackPointers[stackNum]
  }
}

// Example usage:
const stacks = new ThreeInOne(5)
stacks.push(0, 10)
stacks.push(1, 20)
stacks.push(2, 30)
console.log(stacks.peek(0)) // Output: 10
console.log(stacks.pop(1)) // Output: 20
console.log(stacks.isEmpty(2)) // Output: false
