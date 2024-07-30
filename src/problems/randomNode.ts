// src/problems/randomNode.ts

export const randomNodeProblem = {
  id: 33,
  title: 'Random Node',
  description:
    'You are implementing a binary tree class from scratch which, in addition to insert, find, and delete, has a method getRandomNode() which returns a random node from the tree. All nodes should be equally likely to be chosen. Design and implement an algorithm for getRandomNode(), and explain how you would implement the rest of the methods.',
  solution: `
class TreeNode {
  val: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;
  size: number = 1;

  constructor(val: number) {
    this.val = val;
  }

  insert(val: number): void {
    if (val <= this.val) {
      if (this.left === null) {
        this.left = new TreeNode(val);
      } else {
        this.left.insert(val);
      }
    } else {
      if (this.right === null) {
        this.right = new TreeNode(val);
      } else {
        this.right.insert(val);
      }
    }
    this.size++;
  }

  find(val: number): TreeNode | null {
    if (val === this.val) {
      return this;
    } else if (val < this.val) {
      return this.left?.find(val) || null;
    } else {
      return this.right?.find(val) || null;
    }
  }

  getRandomNode(): TreeNode {
    const leftSize = this.left?.size || 0;
    const index = Math.floor(Math.random() * this.size);

    if (index < leftSize) {
      return this.left!.getRandomNode();
    } else if (index === leftSize) {
      return this;
    } else {
      return this.right!.getRandomNode();
    }
  }
}

// Example usage:
const root = new TreeNode(10);
root.insert(5);
root.insert(15);
root.insert(3);
root.insert(7);
root.insert(12);
root.insert(18);

console.log(root.getRandomNode().val); // Random output
console.log(root.getRandomNode().val); // Random output
console.log(root.getRandomNode().val); // Random output
`,
}

class TreeNode {
  val: number
  left: TreeNode | null = null
  right: TreeNode | null = null
  size: number = 1

  constructor(val: number) {
    this.val = val
  }

  insert(val: number): void {
    if (val <= this.val) {
      if (this.left === null) {
        this.left = new TreeNode(val)
      } else {
        this.left.insert(val)
      }
    } else {
      if (this.right === null) {
        this.right = new TreeNode(val)
      } else {
        this.right.insert(val)
      }
    }
    this.size++
  }

  find(val: number): TreeNode | null {
    if (val === this.val) {
      return this
    } else if (val < this.val) {
      return this.left?.find(val) || null
    } else {
      return this.right?.find(val) || null
    }
  }

  getRandomNode(): TreeNode {
    const leftSize = this.left?.size || 0
    const index = Math.floor(Math.random() * this.size)

    if (index < leftSize) {
      return this.left!.getRandomNode()
    } else if (index === leftSize) {
      return this
    } else {
      return this.right!.getRandomNode()
    }
  }
}

// Example usage:
const root = new TreeNode(10)
root.insert(5)
root.insert(15)
root.insert(3)
root.insert(7)
root.insert(12)
root.insert(18)

console.log(root.getRandomNode().val) // Random output
console.log(root.getRandomNode().val) // Random output
console.log(root.getRandomNode().val) // Random output
