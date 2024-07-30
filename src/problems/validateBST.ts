// src/problems/validateBST.ts

export const validateBSTProblem = {
  id: 27,
  title: 'Validate Binary Search Tree',
  description:
    'Implement a function to check if a binary tree is a binary search tree (BST).',
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

const isValidBST = (root: TreeNode | null, min: number | null = null, max: number | null = null): boolean => {
  if (root === null) return true;

  if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
    return false;
  }

  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
}

// Example usage:
const root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);

console.log(isValidBST(root)); // Output: true

const invalidRoot = new TreeNode(5);
invalidRoot.left = new TreeNode(1);
invalidRoot.right = new TreeNode(4);
invalidRoot.right.left = new TreeNode(3);
invalidRoot.right.right = new TreeNode(6);

console.log(isValidBST(invalidRoot)); // Output: false
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

const isValidBST = (
  root: TreeNode | null,
  min: number | null = null,
  max: number | null = null,
): boolean => {
  if (root === null) return true

  if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
    return false
  }

  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  )
}

// Example usage:
const root = new TreeNode(2)
root.left = new TreeNode(1)
root.right = new TreeNode(3)

console.log(isValidBST(root)) // Output: true

const invalidRoot = new TreeNode(5)
invalidRoot.left = new TreeNode(1)
invalidRoot.right = new TreeNode(4)
invalidRoot.right.left = new TreeNode(3)
invalidRoot.right.right = new TreeNode(6)

console.log(isValidBST(invalidRoot)) // Output: false
