// src/problems/successor.ts

export const successorProblem = {
  id: 28,
  title: 'In-Order Successor',
  description:
    'Write an algorithm to find the "next" node (i.e., in-order successor) of a given node in a binary search tree. You may assume that each node has a link to its parent.',
  solution: `
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  parent: TreeNode | null;

  constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null, parent: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }
}

const leftmostChild = (node: TreeNode | null): TreeNode | null => {
  if (node === null) return null;
  while (node.left !== null) {
    node = node.left;
  }
  return node;
};

export const inOrderSuccessor = (node: TreeNode): TreeNode | null => {
  if (node.right !== null) {
    return leftmostChild(node.right);
  }

  let current = node;
  let parent = node.parent;

  while (parent !== null && parent.right === current) {
    current = parent;
    parent = parent.parent;
  }

  return parent;
}

// Example usage:
const root = new TreeNode(20);
const node10 = new TreeNode(10);
const node30 = new TreeNode(30);
const node5 = new TreeNode(5);
const node15 = new TreeNode(15);

root.left = node10;
root.right = node30;
node10.parent = root;
node30.parent = root;

node10.left = node5;
node10.right = node15;
node5.parent = node10;
node15.parent = node10;

console.log(inOrderSuccessor(node10)?.val); // Output: 15
console.log(inOrderSuccessor(node15)?.val); // Output: 20
`,
}

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  parent: TreeNode | null

  constructor(
    val: number,
    left: TreeNode | null = null,
    right: TreeNode | null = null,
    parent: TreeNode | null = null,
  ) {
    this.val = val
    this.left = left
    this.right = right
    this.parent = parent
  }
}

const leftmostChild = (node: TreeNode | null): TreeNode | null => {
  if (node === null) return null
  while (node.left !== null) {
    node = node.left
  }
  return node
}

export const inOrderSuccessor = (node: TreeNode): TreeNode | null => {
  if (node.right !== null) {
    return leftmostChild(node.right)
  }

  let current = node
  let parent = node.parent

  while (parent !== null && parent.right === current) {
    current = parent
    parent = parent.parent
  }

  return parent
}

// Example usage:
const root = new TreeNode(20)
const node10 = new TreeNode(10)
const node30 = new TreeNode(30)
const node5 = new TreeNode(5)
const node15 = new TreeNode(15)

root.left = node10
root.right = node30
node10.parent = root
node30.parent = root

node10.left = node5
node10.right = node15
node5.parent = node10
node15.parent = node10

console.log(inOrderSuccessor(node10)?.val) // Output: 15
console.log(inOrderSuccessor(node15)?.val) // Output: 20
