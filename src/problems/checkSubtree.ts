// src/problems/checkSubtree.ts

export const checkSubtreeProblem = {
  id: 32,
  title: 'Check Subtree',
  description:
    'T1 and T2 are two very large binary trees, with T1 much bigger than T2. Create an algorithm to determine if T2 is a subtree of T1.',
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

const areIdentical = (root1: TreeNode | null, root2: TreeNode | null): boolean => {
  if (root1 === null && root2 === null) return true;
  if (root1 === null || root2 === null) return false;

  return (
    root1.val === root2.val &&
    areIdentical(root1.left, root2.left) &&
    areIdentical(root1.right, root2.right)
  );
};

const isSubtree = (T1: TreeNode | null, T2: TreeNode | null): boolean => {
  if (T2 === null) return true;
  if (T1 === null) return false;

  if (areIdentical(T1, T2)) return true;

  return isSubtree(T1.left, T2) || isSubtree(T1.right, T2);
};

// Example usage:
const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(5);

const root2 = new TreeNode(2);
root2.left = new TreeNode(4);
root2.right = new TreeNode(5);

console.log(isSubtree(root1, root2)); // Output: true

const root3 = new TreeNode(3);
root3.left = new TreeNode(4);

console.log(isSubtree(root1, root3)); // Output: false
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

const areIdentical = (
  root1: TreeNode | null,
  root2: TreeNode | null,
): boolean => {
  if (root1 === null && root2 === null) return true
  if (root1 === null || root2 === null) return false

  return (
    root1.val === root2.val &&
    areIdentical(root1.left, root2.left) &&
    areIdentical(root1.right, root2.right)
  )
}

const isSubtree = (T1: TreeNode | null, T2: TreeNode | null): boolean => {
  if (T2 === null) return true
  if (T1 === null) return false

  if (areIdentical(T1, T2)) return true

  return isSubtree(T1.left, T2) || isSubtree(T1.right, T2)
}

// Example usage:
const root1 = new TreeNode(1)
root1.left = new TreeNode(2)
root1.right = new TreeNode(3)
root1.left.left = new TreeNode(4)
root1.left.right = new TreeNode(5)

const root2 = new TreeNode(2)
root2.left = new TreeNode(4)
root2.right = new TreeNode(5)

console.log(isSubtree(root1, root2)) // Output: true

const root3 = new TreeNode(3)
root3.left = new TreeNode(4)

console.log(isSubtree(root1, root3)) // Output: false
