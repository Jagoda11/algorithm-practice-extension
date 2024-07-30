// src/problems/stackOfPlates.ts

export const stackOfPlatesProblem = {
  id: 19,
  title: 'Stack of Plates',
  description:
    'Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore, you start a new stack when the previous stack exceeds a certain capacity. Implement a data structure SetOfStacks that mimics this. SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack (that is, pop() should return the same values as it would if there were just a single stack).',
  solution: `
class SetOfStacks {
  private stacks: number[][];
  private capacity: number;

  constructor(capacity: number) {
    if (capacity <= 0) {
      throw new Error('Capacity must be greater than zero');
    }
    this.stacks = [[]];
    this.capacity = capacity;
  }

  push(value: number): void {
    let lastStack = this.stacks[this.stacks.length - 1];
    if (lastStack.length >= this.capacity) {
      lastStack = [];
      this.stacks.push(lastStack);
    }
    lastStack.push(value);
  }

  pop(): number | undefined {
    let lastStack = this.stacks[this.stacks.length - 1];
    if (lastStack.length === 0) {
      if (this.stacks.length === 1) {
        return undefined;
      }
      this.stacks.pop();
      lastStack = this.stacks[this.stacks.length - 1];
    }
    return lastStack.pop();
  }

  popAt(stackIndex: number): number | undefined {
    if (stackIndex < 0 || stackIndex >= this.stacks.length) {
      throw new Error('Invalid stack index');
    }
    const stack = this.stacks[stackIndex];
    const value = stack.pop();
    if (stack.length === 0 && this.stacks.length > 1) {
      this.stacks.splice(stackIndex, 1);
    }
    return value;
  }

  peek(): number | undefined {
    const lastStack = this.stacks[this.stacks.length - 1];
    return lastStack[lastStack.length - 1];
  }

  isEmpty(): boolean {
    return this.stacks.length === 1 && this.stacks[0].length === 0;
  }
}

// Example usage:
const setOfStacks = new SetOfStacks(3);
setOfStacks.push(1);
setOfStacks.push(2);
setOfStacks.push(3);
setOfStacks.push(4);
console.log(setOfStacks.pop()); // Output: 4
console.log(setOfStacks.popAt(0)); // Output: 3
console.log(setOfStacks.peek()); // Output: 2
console.log(setOfStacks.isEmpty()); // Output: false
`,
}

class SetOfStacks {
  private stacks: number[][]
  private capacity: number

  constructor(capacity: number) {
    if (capacity <= 0) {
      throw new Error('Capacity must be greater than zero')
    }
    this.stacks = [[]]
    this.capacity = capacity
  }

  push(value: number): void {
    let lastStack = this.stacks[this.stacks.length - 1]
    if (lastStack.length >= this.capacity) {
      lastStack = []
      this.stacks.push(lastStack)
    }
    lastStack.push(value)
  }

  pop(): number | undefined {
    let lastStack = this.stacks[this.stacks.length - 1]
    if (lastStack.length === 0) {
      if (this.stacks.length === 1) {
        return undefined
      }
      this.stacks.pop()
      lastStack = this.stacks[this.stacks.length - 1]
    }
    return lastStack.pop()
  }

  popAt(stackIndex: number): number | undefined {
    if (stackIndex < 0 || stackIndex >= this.stacks.length) {
      throw new Error('Invalid stack index')
    }
    const stack = this.stacks[stackIndex]
    const value = stack.pop()
    if (stack.length === 0 && this.stacks.length > 1) {
      this.stacks.splice(stackIndex, 1)
    }
    return value
  }

  peek(): number | undefined {
    const lastStack = this.stacks[this.stacks.length - 1]
    return lastStack[lastStack.length - 1]
  }

  isEmpty(): boolean {
    return this.stacks.length === 1 && this.stacks[0].length === 0
  }
}

// Example usage:
const setOfStacks = new SetOfStacks(3)
setOfStacks.push(1)
setOfStacks.push(2)
setOfStacks.push(3)
setOfStacks.push(4)
console.log(setOfStacks.pop()) // Output: 4
console.log(setOfStacks.popAt(0)) // Output: 3
console.log(setOfStacks.peek()) // Output: 2
console.log(setOfStacks.isEmpty()) // Output: false
