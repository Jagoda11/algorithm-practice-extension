// src/problems/sumLists.ts

export const sumListsProblem = {
  id: 13,
  title: 'Sum Lists',
  description:
    'You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1’s digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.',
  solution: `
class ListNode {
  readonly val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

export const sumLists = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
  const dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    let sum = carry;
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
  }

  return dummyHead.next;
};`,
}

class ListNode {
  readonly val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0
    this.next = next ?? null
  }
}

export const sumLists = (
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null => {
  const dummyHead = new ListNode(0)
  let current = dummyHead
  let carry = 0

  while (l1 !== null || l2 !== null || carry !== 0) {
    let sum = carry
    if (l1 !== null) {
      sum += l1.val
      l1 = l1.next
    }
    if (l2 !== null) {
      sum += l2.val
      l2 = l2.next
    }
    carry = Math.floor(sum / 10)
    current.next = new ListNode(sum % 10)
    current = current.next
  }

  return dummyHead.next
}
