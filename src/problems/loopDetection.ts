// src/problems/loopDetection.ts

export const loopDetectionProblem = {
  id: 16,
  title: 'Loop Detection in Linked List',
  description:
    'Given a linked list, write a function to detect if there is a loop (cycle) in the list. If there is a loop, return the node at the start of the loop. If there is no loop, return null.',
  solution: `
class ListNode {
  readonly val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

export const detectCycle = (head: ListNode | null): ListNode | null => {
  if (!head) return null;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;

    if (slow === fast) {
      let pointer: ListNode | null = head;
      while (pointer !== slow) {
        pointer = pointer!.next;
        slow = slow!.next;
      }
      return pointer;
    }
  }

  return null;
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

export const detectCycle = (head: ListNode | null): ListNode | null => {
  if (!head) return null

  let slow: ListNode | null = head
  let fast: ListNode | null = head

  while (fast !== null && fast.next !== null) {
    slow = slow!.next
    fast = fast.next.next

    if (slow === fast) {
      let pointer: ListNode | null = head
      while (pointer !== slow) {
        pointer = pointer!.next
        slow = slow!.next
      }
      return pointer
    }
  }

  return null
}
