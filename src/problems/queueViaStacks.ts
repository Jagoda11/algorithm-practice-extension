// src/problems/queueViaStacks.ts

export const queueViaStacksProblem = {
  id: 20,
  title: 'Queue via Stacks',
  description:
    'Implement a MyQueue class which implements a queue using two stacks. The class should support enqueue, dequeue, peek, and isEmpty operations.',
  solution: `
class MyQueue {
  private stack1: number[];
  private stack2: number[];

  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value: number): void {
    this.stack1.push(value);
  }

  dequeue(): number | undefined {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop()!);
      }
    }
    return this.stack2.pop();
  }

  peek(): number | undefined {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop()!);
      }
    }
    return this.stack2[this.stack2.length - 1];
  }

  isEmpty(): boolean {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}

// Example usage:
const queue = new MyQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1
console.log(queue.peek());    // Output: 2
console.log(queue.isEmpty()); // Output: false
console.log(queue.dequeue()); // Output: 2
console.log(queue.dequeue()); // Output: 3
console.log(queue.isEmpty()); // Output: true
`,
}

class MyQueue {
  private stack1: number[]
  private stack2: number[]

  constructor() {
    this.stack1 = []
    this.stack2 = []
  }

  enqueue(value: number): void {
    this.stack1.push(value)
  }

  dequeue(): number | undefined {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop()!)
      }
    }
    return this.stack2.pop()
  }

  peek(): number | undefined {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop()!)
      }
    }
    return this.stack2[this.stack2.length - 1]
  }

  isEmpty(): boolean {
    return this.stack1.length === 0 && this.stack2.length === 0
  }
}

// Example usage:
const queue = new MyQueue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.dequeue()) // Output: 1
console.log(queue.peek()) // Output: 2
console.log(queue.isEmpty()) // Output: false
console.log(queue.dequeue()) // Output: 2
console.log(queue.dequeue()) // Output: 3
console.log(queue.isEmpty()) // Output: true
