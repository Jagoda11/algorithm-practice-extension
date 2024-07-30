// src/problems/checkBalanced.ts

export const checkBalancedProblem = {
  id: 26,
  title: 'Check Balanced',
  description:
    'Implement a function to check if a binary tree is balanced. For the purposes of this problem, a balanced tree is defined to be a tree such that the heights of the two subtrees of any node never differ by more than one.',
  solution: `
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const getHeight = (root: TreeNode | null): number => {
  if (root === null) return -1;
  return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}

export const isBalanced = (root: TreeNode | null): boolean => {
  if (root === null) return true;

  const heightDiff = Math.abs(getHeight(root.left) - getHeight(root.right));
  if (heightDiff > 1) {
    return false;
  } else {
    return isBalanced(root.left) && isBalanced(root.right);
  }
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

console.log(isBalanced(root)); // Output: true

const unbalancedRoot = new TreeNode(1);
unbalancedRoot.left = new TreeNode(2);
unbalancedRoot.left.left = new TreeNode(3);

console.log(isBalanced(unbalancedRoot)); // Output: false
`,
}

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(
    val: number,
    left: TreeNode | null = null,
    right: TreeNode | null = null,
  ) {
    this.val = val
    this.left = left
    this.right = right
  }
}

const getHeight = (root: TreeNode | null): number => {
  if (root === null) return -1
  return Math.max(getHeight(root.left), getHeight(root.right)) + 1
}

export const isBalanced = (root: TreeNode | null): boolean => {
  if (root === null) return true

  const heightDiff = Math.abs(getHeight(root.left) - getHeight(root.right))
  if (heightDiff > 1) {
    return false
  } else {
    return isBalanced(root.left) && isBalanced(root.right)
  }
}

// Example usage:
const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right.right = new TreeNode(6)

console.log(isBalanced(root)) // Output: true

const unbalancedRoot = new TreeNode(1)
unbalancedRoot.left = new TreeNode(2)
unbalancedRoot.left.left = new TreeNode(3)

console.log(isBalanced(unbalancedRoot)) // Output: false
