// src/problems/listOfDepths.ts

export const listOfDepthsProblem = {
  id: 25,
  title: 'List of Depths',
  description:
    'Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth (e.g., if you have a tree with depth D, you’ll have D linked lists).',
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

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

export const listOfDepths = (root: TreeNode | null): ListNode[] => {
  if (root === null) return [];

  const result: ListNode[] = [];
  let currentDepthNodes: TreeNode[] = [root];

  while (currentDepthNodes.length > 0) {
    const currentDepthList: ListNode = new ListNode(0); // Dummy head
    let current: ListNode = currentDepthList;
    const nextDepthNodes: TreeNode[] = [];

    for (const node of currentDepthNodes) {
      current.next = new ListNode(node.val);
      current = current.next;

      if (node.left) {
        nextDepthNodes.push(node.left);
      }
      if (node.right) {
        nextDepthNodes.push(node.right);
      }
    }

  if (currentDepthList.next !== null) {
      result.push(currentDepthList.next); // Skip dummy head
    }
    currentDepthNodes = nextDepthNodes;
  }

  return result;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

const depths = listOfDepths(root);
depths.forEach((list, depth) => {
  const values = [];
  while (list !== null) {
    values.push(list.val);
    list = list.next;
  }
  console.log(\`Depth \${depth}: \${values.join(', ')}\`);
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

class ListNode {
  val: number
  next: ListNode | null

  constructor(val: number, next: ListNode | null = null) {
    this.val = val
    this.next = next
  }
}

export const listOfDepths = (root: TreeNode | null): ListNode[] => {
  if (root === null) return []

  const result: ListNode[] = []
  let currentDepthNodes: TreeNode[] = [root]

  while (currentDepthNodes.length > 0) {
    const currentDepthList: ListNode = new ListNode(0) // Dummy head
    let current: ListNode = currentDepthList
    const nextDepthNodes: TreeNode[] = []

    for (const node of currentDepthNodes) {
      current.next = new ListNode(node.val)
      current = current.next

      if (node.left) {
        nextDepthNodes.push(node.left)
      }
      if (node.right) {
        nextDepthNodes.push(node.right)
      }
    }

    if (currentDepthList.next !== null) {
      result.push(currentDepthList.next) // Skip dummy head
    }
    currentDepthNodes = nextDepthNodes
  }

  return result
}

// Example usage:
const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right.right = new TreeNode(6)

const depths = listOfDepths(root)
depths.forEach((list, depth) => {
  const values: number[] = []
  let current: ListNode | null = list // Use a separate variable with type 'ListNode | null'
  while (current !== null) {
    values.push(current.val)
    current = current.next
  }
  console.log(`Depth ${depth}: ${values.join(', ')}`)
})
