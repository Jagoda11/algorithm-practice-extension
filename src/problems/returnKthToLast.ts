export const returnKthToLastProblem = {
  id: 11,
  title: 'Return Kth to Last',
  description:
    'Implement an algorithm to find the k-th to last element of a singly linked list.',
  solution: `
class ListNode {
  value: number;
  next: ListNode | null = null;
  constructor(value: number) {
    this.value = value;
  }
}

export const returnKthToLast = (head: ListNode, k: number): ListNode | null => {
  if (!head) return null;

  let p1: ListNode | null = head;
  let p2: ListNode | null = head;

  // Move p1 k nodes into the list
  for (let i = 0; i < k; i++) {
    if (p1 === null) return null;
    p1 = p1.next;
  }

  // Move p1 and p2 at the same pace
  while (p1 !== null) {
    p1 = p1.next;
    if (p2 !== null) {
      p2 = p2.next;
    }
  }

  return p2;
};`,
}

class ListNode {
  value: number
  next: ListNode | null = null
  constructor(value: number) {
    this.value = value
  }
}

export const returnKthToLast = (head: ListNode, k: number): ListNode | null => {
  if (!head) return null

  let p1: ListNode | null = head
  let p2: ListNode | null = head

  // Move p1 k nodes into the list
  for (let i = 0; i < k; i++) {
    if (p1 === null) return null
    p1 = p1.next
  }

  // Move p1 and p2 at the same pace
  while (p1 !== null) {
    p1 = p1.next
    if (p2 !== null) {
      p2 = p2.next
    }
  }

  return p2
}
