// src/problems/bstSequences.ts

export const bstSequencesProblem = {
  id: 31,
  title: 'BST Sequences',
  description:
    'A binary search tree was created by traversing through an array from left to right and inserting each element. Given a binary search tree with distinct elements, print all possible arrays that could have led to this tree.',
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

const weaveLists = (first: number[], second: number[], results: number[][], prefix: number[]): void => {
  if (first.length === 0 || second.length === 0) {
    results.push([...prefix, ...first, ...second]);
    return;
  }

  const headFirst = first.shift()!;
  prefix.push(headFirst);
  weaveLists(first, second, results, prefix);
  prefix.pop();
  first.unshift(headFirst);

  const headSecond = second.shift()!;
  prefix.push(headSecond);
  weaveLists(first, second, results, prefix);
  prefix.pop();
  second.unshift(headSecond);
};

const allSequences = (node: TreeNode | null): number[][] => {
  const result: number[][] = [];

  if (node === null) {
    result.push([]);
    return result;
  }

  const prefix = [node.val];

  const leftSeq = allSequences(node.left);
  const rightSeq = allSequences(node.right);

  for (const left of leftSeq) {
    for (const right of rightSeq) {
      const weaved: number[][] = [];
      weaveLists(left, right, weaved, prefix);
      result.push(...weaved);
    }
  }

  return result;
};

// Example usage:
const root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);

const sequences = allSequences(root);
sequences.forEach(sequence => {
  console.log(sequence.join(', '));
});
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

const weaveLists = (
  first: number[],
  second: number[],
  results: number[][],
  prefix: number[],
): void => {
  if (first.length === 0 || second.length === 0) {
    results.push([...prefix, ...first, ...second])
    return
  }

  const headFirst = first.shift()!
  prefix.push(headFirst)
  weaveLists(first, second, results, prefix)
  prefix.pop()
  first.unshift(headFirst)

  const headSecond = second.shift()!
  prefix.push(headSecond)
  weaveLists(first, second, results, prefix)
  prefix.pop()
  second.unshift(headSecond)
}

const allSequences = (node: TreeNode | null): number[][] => {
  const result: number[][] = []

  if (node === null) {
    result.push([])
    return result
  }

  const prefix = [node.val]

  const leftSeq = allSequences(node.left)
  const rightSeq = allSequences(node.right)

  for (const left of leftSeq) {
    for (const right of rightSeq) {
      const weaved: number[][] = []
      weaveLists(left, right, weaved, prefix)
      result.push(...weaved)
    }
  }

  return result
}

// Example usage:
const root = new TreeNode(2)
root.left = new TreeNode(1)
root.right = new TreeNode(3)

const sequences = allSequences(root)
sequences.forEach((sequence) => {
  console.log(sequence.join(', '))
})
