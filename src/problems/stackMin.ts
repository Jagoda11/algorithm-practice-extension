// src/problems/stackMin.ts

export const stackMinProblem = {
  id: 18,
  title: 'Stack Min',
  description:
    'Implement a stack that, in addition to push and pop, has a function min which returns the minimum element. All operations must run in O(1) time.',
  solution: `
class StackMin {
  private stack: number[] = [];
  private minStack: number[] = [];

  push(value: number): void {
    this.stack.push(value);
    if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(value);
    }
  }

  pop(): number | undefined {
    const value = this.stack.pop();
    if (value !== undefined && value === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return value;
  }

  peek(): number | undefined {
    return this.stack[this.stack.length - 1];
  }

  min(): number | undefined {
    return this.minStack[this.minStack.length - 1];
  }

  isEmpty(): boolean {
    return this.stack.length === 0;
  }
}

// Example usage:
const stack = new StackMin();
stack.push(5);
stack.push(3);
stack.push(7);
stack.push(3);
console.log(stack.min()); // Output: 3
stack.pop();
console.log(stack.min()); // Output: 3
stack.pop();
console.log(stack.min()); // Output: 3
stack.pop();
console.log(stack.min()); // Output: 5
`,
}

class StackMin {
  private stack: number[] = []
  private minStack: number[] = []

  push(value: number): void {
    this.stack.push(value)
    if (
      this.minStack.length === 0 ||
      value <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(value)
    }
  }

  pop(): number | undefined {
    const value = this.stack.pop()
    if (
      value !== undefined &&
      value === this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.pop()
    }
    return value
  }

  peek(): number | undefined {
    return this.stack[this.stack.length - 1]
  }

  min(): number | undefined {
    return this.minStack[this.minStack.length - 1]
  }

  isEmpty(): boolean {
    return this.stack.length === 0
  }
}

// Example usage:
const stack = new StackMin()
stack.push(5)
stack.push(3)
stack.push(7)
stack.push(3)
console.log(stack.min()) // Output: 3
stack.pop()
console.log(stack.min()) // Output: 3
stack.pop()
console.log(stack.min()) // Output: 3
stack.pop()
console.log(stack.min()) // Output: 5
