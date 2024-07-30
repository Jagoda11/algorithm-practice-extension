// src/problems/intersection.ts

export const intersectionProblem = {
  id: 15,
  title: 'Intersection of Two Linked Lists',
  description:
    'Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node. Note that the intersection is defined based on reference, not value. That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, then they are intersecting.',
  solution: `
class ListNode {
  readonly val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

export const getIntersectionNode = (headA: ListNode | null, headB: ListNode | null): ListNode | null => {
  if (!headA || !headB) return null;

  let pointerA: ListNode | null = headA;
  let pointerB: ListNode | null = headB;

  while (pointerA !== pointerB) {
    pointerA = pointerA === null ? headB : pointerA.next;
    pointerB = pointerB === null ? headA : pointerB.next;
  }

  return pointerA;
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

export const getIntersectionNode = (
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null => {
  if (!headA || !headB) return null

  let pointerA: ListNode | null = headA
  let pointerB: ListNode | null = headB

  while (pointerA !== pointerB) {
    pointerA = pointerA === null ? headB : pointerA.next
    pointerB = pointerB === null ? headA : pointerB.next
  }

  return pointerA
}
