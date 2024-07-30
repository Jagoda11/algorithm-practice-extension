// src/problems/firstCommonAncestor.ts

export const firstCommonAncestorProblem = {
  id: 30,
  title: 'First Common Ancestor',
  description:
    'Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree. Avoid storing additional nodes in a data structure. Note: This is not necessarily a binary search tree.',
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

const covers = (root: TreeNode | null, p: TreeNode | null): boolean => {
  if (root === null || p === null) return false;
  if (root === p) return true;
  return covers(root.left, p) || covers(root.right, p);
};

const ancestorHelper = (root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null => {
  if (root === null || root === p || root === q) return root;

  const pIsOnLeft = covers(root.left, p);
  const qIsOnLeft = covers(root.left, q);

  if (pIsOnLeft !== qIsOnLeft) return root;

  const childSide = pIsOnLeft ? root.left : root.right;
  return ancestorHelper(childSide, p, q);
};

export const commonAncestor = (root: TreeNode, p: TreeNode, q: TreeNode): TreeNode | null => {
  if (!covers(root, p) || !covers(root, q)) return null;
  return ancestorHelper(root, p, q);
};

// Example usage:
const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);

root.left = node2;
root.right = node3;
node2.parent = root;
node3.parent = root;
node2.left = node4;
node2.right = node5;
node4.parent = node2;
node5.parent = node2;

console.log(commonAncestor(root, node4, node5)?.val); // Output: 2
console.log(commonAncestor(root, node4, node3)?.val); // Output: 1
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

const covers = (root: TreeNode | null, p: TreeNode | null): boolean => {
  if (root === null || p === null) return false
  if (root === p) return true
  return covers(root.left, p) || covers(root.right, p)
}

const ancestorHelper = (
  root: TreeNode | null,
  p: TreeNode,
  q: TreeNode,
): TreeNode | null => {
  if (root === null || root === p || root === q) return root

  const pIsOnLeft = covers(root.left, p)
  const qIsOnLeft = covers(root.left, q)

  if (pIsOnLeft !== qIsOnLeft) return root

  const childSide = pIsOnLeft ? root.left : root.right
  return ancestorHelper(childSide, p, q)
}

export const commonAncestor = (
  root: TreeNode,
  p: TreeNode,
  q: TreeNode,
): TreeNode | null => {
  if (!covers(root, p) || !covers(root, q)) return null
  return ancestorHelper(root, p, q)
}

// Example usage:
const root = new TreeNode(1)
const node2 = new TreeNode(2)
const node3 = new TreeNode(3)
const node4 = new TreeNode(4)
const node5 = new TreeNode(5)

root.left = node2
root.right = node3
node2.parent = root
node3.parent = root
node2.left = node4
node2.right = node5
node4.parent = node2
node5.parent = node2

console.log(commonAncestor(root, node4, node5)?.val) // Output: 2
console.log(commonAncestor(root, node4, node3)?.val) // Output: 1
