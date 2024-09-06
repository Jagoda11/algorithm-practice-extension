export const circularArrayProblem = {
  id: 61,
  title: 'Circular Array',
  description:
    'Implement a Circular Array that supports an array-like data structure which can be efficiently rotated. The class should use a generic type (template) and support iteration via the standard for-each notation.',
  solution: `
// Circular Array implementation in TypeScript

class CircularArray<T> implements Iterable<T> {
  private buffer: T[];
  private size: number;
  private start: number;

  constructor(capacity: number) {
    this.buffer = new Array(capacity);
    this.size = capacity;
    this.start = 0;
  }

  // Get the element at the index, considering the rotation
  get(index: number): T {
    if (index < 0 || index >= this.size) {
      throw new Error('Index out of bounds');
    }
    return this.buffer[(this.start + index) % this.size];
  }

  // Set the element at the index, considering the rotation
  set(index: number, value: T): void {
    if (index < 0 || index >= this.size) {
      throw new Error('Index out of bounds');
    }
    this.buffer[(this.start + index) % this.size] = value;
  }

  // Rotate the array by a given number of positions
  rotate(steps: number): void {
    this.start = (this.start + steps) % this.size;
    if (this.start < 0) {
      this.start += this.size; // Correct if steps is negative
    }
  }

  // Iterator to support for-each loop
  [Symbol.iterator](): Iterator<T> {
    let index = 0;
    return {
      next: (): IteratorResult<T> => {
        if (index < this.size) {
          const value = this.get(index);
          index++;
          return { value, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  }

  // Display the current state of the buffer
  display(): void {
    const elements = [];
    for (let i = 0; i < this.size; i++) {
      elements.push(this.get(i));
    }
    console.log('Circular Array:', elements.join(', '));
  }
}

// Example usage:
const circularArray = new CircularArray<number>(5);
circularArray.set(0, 10);
circularArray.set(1, 20);
circularArray.set(2, 30);
circularArray.set(3, 40);
circularArray.set(4, 50);
circularArray.display();

circularArray.rotate(2);
circularArray.display(); // Should show rotated array

circularArray.rotate(-1);
circularArray.display(); // Rotate back by 1 step

// Using the for-each loop with the circular array
for (const value of circularArray) {
  console.log('Value:', value);
}
`,
}

// Example implementation to test the solution
class CircularArray<T> implements Iterable<T> {
  private buffer: T[]
  private size: number
  private start: number

  constructor(capacity: number) {
    this.buffer = new Array(capacity)
    this.size = capacity
    this.start = 0
  }

  get(index: number): T {
    if (index < 0 || index >= this.size) {
      throw new Error('Index out of bounds')
    }
    return this.buffer[(this.start + index) % this.size]
  }

  set(index: number, value: T): void {
    if (index < 0 || index >= this.size) {
      throw new Error('Index out of bounds')
    }
    this.buffer[(this.start + index) % this.size] = value
  }

  rotate(steps: number): void {
    this.start = (this.start + steps) % this.size
    if (this.start < 0) {
      this.start += this.size
    }
  }

  [Symbol.iterator](): Iterator<T> {
    let index = 0
    return {
      next: (): IteratorResult<T> => {
        if (index < this.size) {
          const value = this.get(index)
          index++
          return { value, done: false }
        } else {
          return { value: undefined, done: true }
        }
      },
    }
  }

  display(): void {
    const elements = []
    for (let i = 0; i < this.size; i++) {
      elements.push(this.get(i))
    }
    console.log('Circular Array:', elements.join(', '))
  }
}

// Example usage:
const circularArray = new CircularArray<number>(5)
circularArray.set(0, 10)
circularArray.set(1, 20)
circularArray.set(2, 30)
circularArray.set(3, 40)
circularArray.set(4, 50)
circularArray.display()

circularArray.rotate(2)
circularArray.display()

circularArray.rotate(-1)
circularArray.display()

for (const value of circularArray) {
  console.log('Value:', value)
}
