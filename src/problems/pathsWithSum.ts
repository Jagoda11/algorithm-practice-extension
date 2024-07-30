// src/problems/pathsWithSum.ts

export const pathsWithSumProblem = {
  id: 34,
  title: 'Paths with Sum',
  description:
    'You are given a binary tree in which each node contains an integer value (which might be positive or negative). Design an algorithm to count all paths that sum to a given value. The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).',
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

const countPathsWithSum = (root: TreeNode | null, targetSum: number): number => {
  const pathCount = new Map<number, number>();
  pathCount.set(0, 1);
  return countPaths(root, targetSum, 0, pathCount);
};

const countPaths = (
  node: TreeNode | null,
  targetSum: number,
  runningSum: number,
  pathCount: Map<number, number>
): number => {
  if (node === null) return 0;

  runningSum += node.val;
  const sum = runningSum - targetSum;
  let totalPaths = pathCount.get(sum) || 0;

  pathCount.set(runningSum, (pathCount.get(runningSum) || 0) + 1);

  totalPaths += countPaths(node.left, targetSum, runningSum, pathCount);
  totalPaths += countPaths(node.right, targetSum, runningSum, pathCount);

  pathCount.set(runningSum, pathCount.get(runningSum)! - 1);

  return totalPaths;
};

// Example usage:
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(-3);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(2);
root.right.right = new TreeNode(11);
root.left.left.left = new TreeNode(3);
root.left.left.right = new TreeNode(-2);
root.left.right.right = new TreeNode(1);

console.log(countPathsWithSum(root, 8)); // Output: 3
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

const countPathsWithSum = (
  root: TreeNode | null,
  targetSum: number,
): number => {
  const pathCount = new Map<number, number>()
  pathCount.set(0, 1)
  return countPaths(root, targetSum, 0, pathCount)
}

const countPaths = (
  node: TreeNode | null,
  targetSum: number,
  runningSum: number,
  pathCount: Map<number, number>,
): number => {
  if (node === null) return 0

  runningSum += node.val
  const sum = runningSum - targetSum
  let totalPaths = pathCount.get(sum) || 0

  pathCount.set(runningSum, (pathCount.get(runningSum) || 0) + 1)

  totalPaths += countPaths(node.left, targetSum, runningSum, pathCount)
  totalPaths += countPaths(node.right, targetSum, runningSum, pathCount)

  pathCount.set(runningSum, pathCount.get(runningSum)! - 1)

  return totalPaths
}

// Example usage:
const root = new TreeNode(10)
root.left = new TreeNode(5)
root.right = new TreeNode(-3)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(2)
root.right.right = new TreeNode(11)
root.left.left.left = new TreeNode(3)
root.left.left.right = new TreeNode(-2)
root.left.right.right = new TreeNode(1)

console.log(countPathsWithSum(root, 8)) // Output: 3
