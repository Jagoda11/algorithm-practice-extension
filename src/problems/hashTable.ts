export const hashTableProblem = {
  id: 32,
  title: 'Implement a Hash Table with Separate Chaining (Linked List)',
  description:
    'Design and implement a hash table data structure in TypeScript that uses linked lists for separate chaining to handle collisions. It should support operations like insert, delete, and lookup.',
  solution: `
export class ListNode<K, V> {
  constructor(
    public key: K,
    public value: V,
    public next: ListNode<K, V> | null = null
  ) {}
}

export class HashTable<K, V> {
  private table: Array<ListNode<K, V> | null>;
  private capacity: number;
  private size: number;

  constructor(capacity: number = 53) {
    this.capacity = capacity;
    this.size = 0;
    this.table = new Array(this.capacity).fill(null);
  }

  private hash(key: K): number {
    const stringKey = String(key);
    let hash = 0;
    const PRIME = 31;
    for (let i = 0; i < Math.min(stringKey.length, 100); i++) {
      const char = stringKey.charCodeAt(i);
      hash = (hash * PRIME + char) % this.capacity;
    }
    return hash;
  }

  public set(key: K, value: V): void {
    const index = this.hash(key);
    let head = this.table[index];

    while (head) {
      if (head.key === key) {
        head.value = value;
        return;
      }
      head = head.next;
    }

    const newNode = new ListNode(key, value, this.table[index]);
    this.table[index] = newNode;
    this.size++;
  }

  public get(key: K): V | undefined {
    const index = this.hash(key);
    let head = this.table[index];

    while (head) {
      if (head.key === key) {
        return head.value;
      }
      head = head.next;
    }

    return undefined;
  }

  public delete(key: K): boolean {
    const index = this.hash(key);
    let head = this.table[index];
    let prev: ListNode<K, V> | null = null;

    while (head) {
      if (head.key === key) {
        if (prev) {
          prev.next = head.next;
        } else {
          this.table[index] = head.next;
        }
        this.size--;
        return true;
      }
      prev = head;
      head = head.next;
    }

    return false;
  }

  public has(key: K): boolean {
    return this.get(key) !== undefined;
  }

  public keys(): K[] {
    const keysArray: K[] = [];
    for (const node of this.table) {
      let head = node;
      while (head) {
        keysArray.push(head.key);
        head = head.next;
      }
    }
    return keysArray;
  }

  public values(): V[] {
    const valuesArray: V[] = [];
    for (const node of this.table) {
      let head = node;
      while (head) {
        valuesArray.push(head.value);
        head = head.next;
      }
    }
    return valuesArray;
  }
}

// Example usage:
const hashTable = new HashTable<string, number>();

hashTable.set('apple', 1);
hashTable.set('banana', 2);
hashTable.set('orange', 3);

console.log(hashTable.get('banana')); // Output: 2
console.log(hashTable.has('apple'));  // Output: true
console.log(hashTable.delete('orange')); // Output: true
console.log(hashTable.keys());  // Output: ['apple', 'banana']
console.log(hashTable.values()); // Output: [1, 2]
`,
}

// Actual implementation

export class ListNode<K, V> {
  constructor(
    public key: K,
    public value: V,
    public next: ListNode<K, V> | null = null,
  ) {}
}

export class HashTable<K, V> {
  private table: Array<ListNode<K, V> | null>
  private capacity: number
  private size: number

  constructor(capacity: number = 53) {
    this.capacity = capacity
    this.size = 0
    this.table = new Array(this.capacity).fill(null)
  }

  private hash(key: K): number {
    const stringKey = String(key)
    let hash = 0
    const PRIME = 31
    for (let i = 0; i < Math.min(stringKey.length, 100); i++) {
      const char = stringKey.charCodeAt(i)
      hash = (hash * PRIME + char) % this.capacity
    }
    return hash
  }

  public set(key: K, value: V): void {
    const index = this.hash(key)
    let head = this.table[index]

    while (head) {
      if (head.key === key) {
        head.value = value
        return
      }
      head = head.next
    }

    const newNode = new ListNode(key, value, this.table[index])
    this.table[index] = newNode
    this.size++
  }

  public get(key: K): V | undefined {
    const index = this.hash(key)
    let head = this.table[index]

    while (head) {
      if (head.key === key) {
        return head.value
      }
      head = head.next
    }

    return undefined
  }

  public delete(key: K): boolean {
    const index = this.hash(key)
    let head = this.table[index]
    let prev: ListNode<K, V> | null = null

    while (head) {
      if (head.key === key) {
        if (prev) {
          prev.next = head.next
        } else {
          this.table[index] = head.next
        }
        this.size--
        return true
      }
      prev = head
      head = head.next
    }

    return false
  }

  public has(key: K): boolean {
    return this.get(key) !== undefined
  }

  public keys(): K[] {
    const keysArray: K[] = []
    for (const node of this.table) {
      let head = node
      while (head) {
        keysArray.push(head.key)
        head = head.next
      }
    }
    return keysArray
  }

  public values(): V[] {
    const valuesArray: V[] = []
    for (const node of this.table) {
      let head = node
      while (head) {
        valuesArray.push(head.value)
        head = head.next
      }
    }
    return valuesArray
  }
}

// Example usage:
const hashTable = new HashTable<string, number>()

hashTable.set('apple', 1)
hashTable.set('banana', 2)
hashTable.set('orange', 3)

console.log(hashTable.get('banana')) // Output: 2
console.log(hashTable.has('apple')) // Output: true
console.log(hashTable.delete('orange')) // Output: true
console.log(hashTable.keys()) // Output: ['apple', 'banana']
console.log(hashTable.values()) // Output: [1, 2]
