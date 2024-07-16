export const deleteMiddleNodeProblem = {
  id: 12,
  title: 'Delete Middle Node',
  description:
    'Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.',
  solution: `
class ListNode {
  value: number;
  next: ListNode | null = null;
  constructor(value: number) {
    this.value = value;
  }
}

export const deleteMiddleNode = (node: ListNode | null): void => {
  if (node === null || node.next === null) {
    throw new Error('Node to be deleted is invalid');
  }
  node.value = node.next.value;
  node.next = node.next.next;
};`,
}

class ListNode {
  value: number
  next: ListNode | null = null
  constructor(value: number) {
    this.value = value
  }
}

export const deleteMiddleNode = (node: ListNode | null): void => {
  if (node === null || node.next === null) {
    throw new Error('Node to be deleted is invalid')
  }
  node.value = node.next.value
  node.next = node.next.next
}
