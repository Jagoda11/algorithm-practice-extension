// src/problems/buildOrder.ts

export const buildOrderProblem = {
  id: 29,
  title: 'Build Order',
  description:
    'Given a list of projects and a list of dependencies (which is a list of pairs of projects, where the second project is dependent on the first project), find a build order that will allow the projects to be built. If there is no valid build order, return an error.',
  solution: `
class GraphNode {
  val: string;
  dependencies: Set<GraphNode>;
  indegree: number;

  constructor(val: string) {
    this.val = val;
    this.dependencies = new Set();
    this.indegree = 0;
  }
}

class Graph {
  nodes: Map<string, GraphNode>;

  constructor() {
    this.nodes = new Map();
  }

  addNode(val: string): GraphNode {
    let node = this.nodes.get(val);
    if (!node) {
      node = new GraphNode(val);
      this.nodes.set(val, node);
    }
    return node;
  }

  addDependency(start: string, end: string): void {
    const startNode = this.addNode(start);
    const endNode = this.addNode(end);
    startNode.dependencies.add(endNode);
    endNode.indegree++;
  }
}

export const findBuildOrder = (projects: string[], dependencies: [string, string][]): string[] | Error => {
  const graph = new Graph();
  
  projects.forEach(project => graph.addNode(project));
  dependencies.forEach(([start, end]) => graph.addDependency(start, end));
  
  const buildOrder: string[] = [];
  const nodesWithNoIncomingEdges: GraphNode[] = [];

  graph.nodes.forEach(node => {
    if (node.indegree === 0) {
      nodesWithNoIncomingEdges.push(node);
    }
  });

  while (nodesWithNoIncomingEdges.length > 0) {
    const currentNode = nodesWithNoIncomingEdges.pop()!;
    buildOrder.push(currentNode.val);
    
    currentNode.dependencies.forEach(dependentNode => {
      dependentNode.indegree--;
      if (dependentNode.indegree === 0) {
        nodesWithNoIncomingEdges.push(dependentNode);
      }
    });
  }

  if (buildOrder.length !== projects.length) {
    return new Error('No valid build order exists.');
  }

  return buildOrder;
}

// Example usage:
const projects = ['a', 'b', 'c', 'd', 'e', 'f'];
const dependencies: [string, string][] = [
  ['a', 'd'],
  ['f', 'b'],
  ['b', 'd'],
  ['f', 'a'],
  ['d', 'c'],
];

const order = findBuildOrder(projects, dependencies);
if (order instanceof Error) {
  console.error(order.message);
} else {
  console.log(order); // Output: ['f', 'e', 'a', 'b', 'd', 'c']
}
`,
}

class GraphNode {
  val: string
  dependencies: Set<GraphNode>
  indegree: number

  constructor(val: string) {
    this.val = val
    this.dependencies = new Set()
    this.indegree = 0
  }
}

class Graph {
  nodes: Map<string, GraphNode>

  constructor() {
    this.nodes = new Map()
  }

  addNode(val: string): GraphNode {
    let node = this.nodes.get(val)
    if (!node) {
      node = new GraphNode(val)
      this.nodes.set(val, node)
    }
    return node
  }

  addDependency(start: string, end: string): void {
    const startNode = this.addNode(start)
    const endNode = this.addNode(end)
    startNode.dependencies.add(endNode)
    endNode.indegree++
  }
}

export const findBuildOrder = (
  projects: string[],
  dependencies: [string, string][],
): string[] | Error => {
  const graph = new Graph()

  projects.forEach((project) => graph.addNode(project))
  dependencies.forEach(([start, end]) => graph.addDependency(start, end))

  const buildOrder: string[] = []
  const nodesWithNoIncomingEdges: GraphNode[] = []

  graph.nodes.forEach((node) => {
    if (node.indegree === 0) {
      nodesWithNoIncomingEdges.push(node)
    }
  })

  while (nodesWithNoIncomingEdges.length > 0) {
    const currentNode = nodesWithNoIncomingEdges.pop()!
    buildOrder.push(currentNode.val)

    currentNode.dependencies.forEach((dependentNode) => {
      dependentNode.indegree--
      if (dependentNode.indegree === 0) {
        nodesWithNoIncomingEdges.push(dependentNode)
      }
    })
  }

  if (buildOrder.length !== projects.length) {
    return new Error('No valid build order exists.')
  }

  return buildOrder
}

// Example usage:
const projects = ['a', 'b', 'c', 'd', 'e', 'f']
const dependencies: [string, string][] = [
  ['a', 'd'],
  ['f', 'b'],
  ['b', 'd'],
  ['f', 'a'],
  ['d', 'c'],
]

const order = findBuildOrder(projects, dependencies)
if (order instanceof Error) {
  console.error(order.message)
} else {
  console.log(order) // Output: ['f', 'e', 'a', 'b', 'd', 'c']
}
