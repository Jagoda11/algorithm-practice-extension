// src/problems/checkPalindromeList.ts

export const checkPalindromeListProblem = {
  id: 14,
  title: 'Check Palindrome Linked List',
  description:
    'Given a linked list, write a function to check if it is a palindrome. A palindrome is a sequence that reads the same backward as forward.',
  solution: `
class ListNode {
  readonly val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

export const isPalindrome = (head: ListNode | null): boolean => {
  if (!head || !head.next) return true;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  const stack: number[] = [];

  while (fast !== null && fast.next !== null) {
    stack.push(slow!.val);
    slow = slow!.next;
    fast = fast.next.next;
  }

  // If fast is not null, it means the list has an odd number of elements
  if (fast !== null) {
    slow = slow!.next;
  }

  while (slow !== null) {
    const top = stack.pop();
    if (top !== slow.val) return false;
    slow = slow.next;
  }

  return true;
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

export const isPalindrome = (head: ListNode | null): boolean => {
  if (!head || !head.next) return true

  let slow: ListNode | null = head
  let fast: ListNode | null = head
  const stack: number[] = []

  while (fast !== null && fast.next !== null) {
    stack.push(slow!.val)
    slow = slow!.next
    fast = fast.next.next
  }

  // If fast is not null, it means the list has an odd number of elements
  if (fast !== null) {
    slow = slow!.next
  }

  while (slow !== null) {
    const top = stack.pop()
    if (top !== slow.val) return false
    slow = slow.next
  }

  return true
}
