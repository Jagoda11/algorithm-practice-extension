// src/problems/routeBetweenNodes.ts

export const routeBetweenNodesProblem = {
  id: 23,
  title: 'Route Between Nodes',
  description:
    'Given a directed graph, design an algorithm to find out whether there is a route between two nodes.',
  solution: `
class GraphNode {
  val: number;
  neighbors: GraphNode[];

  constructor(val: number) {
    this.val = val;
    this.neighbors = [];
  }
}

export const hasRoute = (start: GraphNode, end: GraphNode): boolean => {
  if (start === end) return true;

  const visited = new Set<GraphNode>();
  const queue: GraphNode[] = [start];

  while (queue.length > 0) {
    const node = queue.shift()!;
    if (node === end) return true;
    visited.add(node);

    for (const neighbor of node.neighbors) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }

  return false;
}

// Example usage:
const node1 = new GraphNode(1);
const node2 = new GraphNode(2);
const node3 = new GraphNode(3);
const node4 = new GraphNode(4);

node1.neighbors.push(node2);
node2.neighbors.push(node3);
node3.neighbors.push(node4);

console.log(hasRoute(node1, node4)); // Output: true
console.log(hasRoute(node1, new GraphNode(5))); // Output: false
`,
}

class GraphNode {
  val: number
  neighbors: GraphNode[]

  constructor(val: number) {
    this.val = val
    this.neighbors = []
  }
}

export const hasRoute = (start: GraphNode, end: GraphNode): boolean => {
  if (start === end) return true

  const visited = new Set<GraphNode>()
  const queue: GraphNode[] = [start]

  while (queue.length > 0) {
    const node = queue.shift()!
    if (node === end) return true
    visited.add(node)

    for (const neighbor of node.neighbors) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor)
      }
    }
  }

  return false
}

// Example usage:
const node1 = new GraphNode(1)
const node2 = new GraphNode(2)
const node3 = new GraphNode(3)
const node4 = new GraphNode(4)

node1.neighbors.push(node2)
node2.neighbors.push(node3)
node3.neighbors.push(node4)

console.log(hasRoute(node1, node4)) // Output: true
console.log(hasRoute(node1, new GraphNode(5))) // Output: false
