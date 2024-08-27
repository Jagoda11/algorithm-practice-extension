export const partitionProblem = {
  id: 13,
  title: 'Partition',
  description:
    'Write code to partition a linked list around a value `x`, such that all nodes less than `x` come before all nodes greater than or equal to `x`.',
  solution: `
class ListNode {
  value: number;
  next: ListNode | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

export const partition = (head: ListNode | null, x: number): ListNode | null => {
  let beforeStart: ListNode | null = null;
  let beforeEnd: ListNode | null = null;
  let afterStart: ListNode | null = null;
  let afterEnd: ListNode | null = null;

  while (head !== null) {
    const next = head.next;
    head.next = null;
    if (head.value < x) {
      beforeStart === null ? beforeStart = head : beforeEnd!.next = head;
      beforeEnd = head;
    } else {
      afterStart === null ? afterStart = head : afterEnd!.next = head;
      afterEnd = head;
    }
    head = next;
  }

  if (beforeStart === null) {
    return afterStart;
  }

  beforeEnd!.next = afterStart;
  return beforeStart;
};`,
}

class ListNode {
  value: number
  next: ListNode | null = null

  constructor(value: number) {
    this.value = value
  }
}

export const partition = (
  head: ListNode | null,
  x: number,
): ListNode | null => {
  let beforeStart: ListNode | null = null
  let beforeEnd: ListNode | null = null
  let afterStart: ListNode | null = null
  let afterEnd: ListNode | null = null

  while (head !== null) {
    const next = head.next
    head.next = null
    if (head.value < x) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      beforeStart === null ? (beforeStart = head) : (beforeEnd!.next = head)
      beforeEnd = head
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      afterStart === null ? (afterStart = head) : (afterEnd!.next = head)
      afterEnd = head
    }
    head = next
  }

  return beforeStart === null
    ? afterStart
    : ((beforeEnd!.next = afterStart), beforeStart)
}
