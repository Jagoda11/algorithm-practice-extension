// src/problems/sortStack.ts

export const sortStackProblem = {
  id: 21,
  title: 'Sort Stack',
  description:
    'Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array). The stack supports the following operations: push, pop, peek, and isEmpty.',
  solution: `
class Stack {
  private items: number[] = [];

  push(value: number): void {
    this.items.push(value);
  }

  pop(): number | undefined {
    return this.items.pop();
  }

  peek(): number | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

export const sortStack = (stack: Stack): Stack => {
  const tempStack = new Stack();
  
  while (!stack.isEmpty()) {
    const temp = stack.pop()!;
    while (!tempStack.isEmpty() && tempStack.peek()! > temp) {
      stack.push(tempStack.pop()!);
    }
    tempStack.push(temp);
  }

  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop()!);
  }

  return stack;
}

// Example usage:
const stack = new Stack();
stack.push(3);
stack.push(1);
stack.push(4);
stack.push(2);

const sortedStack = sortStack(stack);
while (!sortedStack.isEmpty()) {
  console.log(sortedStack.pop()); // Output: 1, 2, 3, 4
}
`,
}

class Stack {
  private items: number[] = []

  push(value: number): void {
    this.items.push(value)
  }

  pop(): number | undefined {
    return this.items.pop()
  }

  peek(): number | undefined {
    return this.items[this.items.length - 1]
  }

  isEmpty(): boolean {
    return this.items.length === 0
  }
}

export const sortStack = (stack: Stack): Stack => {
  const tempStack = new Stack()

  while (!stack.isEmpty()) {
    const temp = stack.pop()!
    while (!tempStack.isEmpty() && tempStack.peek()! > temp) {
      stack.push(tempStack.pop()!)
    }
    tempStack.push(temp)
  }

  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop()!)
  }

  return stack
}

// Example usage:
const stack = new Stack()
stack.push(3)
stack.push(1)
stack.push(4)
stack.push(2)

const sortedStack = sortStack(stack)
while (!sortedStack.isEmpty()) {
  console.log(sortedStack.pop()) // Output: 1, 2, 3, 4
}
