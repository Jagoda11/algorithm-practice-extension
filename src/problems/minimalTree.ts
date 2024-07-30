// src/problems/minimalTree.ts

export const minimalTreeProblem = {
  id: 24,
  title: 'Minimal Tree',
  description:
    'Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.',
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

export const minimalTree = (sortedArray: number[]): TreeNode | null => {
  const createMinimalBST = (arr: number[], start: number, end: number): TreeNode | null => {
    if (start > end) {
      return null;
    }

    const mid = Math.floor((start + end) / 2);
    const node = new TreeNode(arr[mid]);
    node.left = createMinimalBST(arr, start, mid - 1);
    node.right = createMinimalBST(arr, mid + 1, end);

    return node;
  };

  return createMinimalBST(sortedArray, 0, sortedArray.length - 1);
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7];
const bst = minimalTree(sortedArray);

const printInOrder = (node: TreeNode | null): void => {
  if (node === null) return;
  printInOrder(node.left);
  console.log(node.val);
  printInOrder(node.right);
};

printInOrder(bst); // Output: 1, 2, 3, 4, 5, 6, 7
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

export const minimalTree = (sortedArray: number[]): TreeNode | null => {
  const createMinimalBST = (
    arr: number[],
    start: number,
    end: number,
  ): TreeNode | null => {
    if (start > end) {
      return null
    }

    const mid = Math.floor((start + end) / 2)
    const node = new TreeNode(arr[mid])
    node.left = createMinimalBST(arr, start, mid - 1)
    node.right = createMinimalBST(arr, mid + 1, end)

    return node
  }

  return createMinimalBST(sortedArray, 0, sortedArray.length - 1)
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7]
const bst = minimalTree(sortedArray)

const printInOrder = (node: TreeNode | null): void => {
  if (node === null) return
  printInOrder(node.left)
  console.log(node.val)
  printInOrder(node.right)
}

printInOrder(bst) // Output: 1, 2, 3, 4, 5, 6, 7
