// src/problems/drawLine.ts

export const drawLineProblem = {
  id: 42,
  title: 'Draw Line',
  description:
    'A monochrome screen is stored as a single array of bytes, allowing eight consecutive pixels to be stored in one byte. The screen has a width in pixels that is divisible by 8 (i.e., no byte will be split across rows). Implement a function that draws a horizontal line from (x1, y) to (x2, y). The method signature should look something like: drawLine(screen: number[], width: number, x1: number, x2: number, y: number).',
  solution: `
const drawLine = (screen: number[], width: number, x1: number, x2: number, y: number): void => {
  const startOffset = x1 % 8;
  const firstFullByte = x1 / 8 | 0;

  const endOffset = x2 % 8;
  const lastFullByte = x2 / 8 | 0;

  if (firstFullByte == lastFullByte) {
    const byteMask = (0xFF >> startOffset) & (0xFF << (7 - endOffset));
    screen[(width / 8) * y + firstFullByte] |= byteMask;
  } else {
    const startByteMask = 0xFF >> startOffset;
    screen[(width / 8) * y + firstFullByte] |= startByteMask;

    const endByteMask = 0xFF << (7 - endOffset);
    screen[(width / 8) * y + lastFullByte] |= endByteMask;

    for (let i = firstFullByte + 1; i < lastFullByte; i++) {
      screen[(width / 8) * y + i] = 0xFF;
    }
  }
};

// Example usage:
const screen = new Array(8).fill(0);
const width = 16;
drawLine(screen, width, 2, 13, 1);
console.log(screen);
// Output: [ 0, 0, 0, 0, 124, 255, 0, 0 ]
`,
}

const drawLine = (
  screen: number[],
  width: number,
  x1: number,
  x2: number,
  y: number,
): void => {
  const startOffset = x1 % 8
  const firstFullByte = (x1 / 8) | 0

  const endOffset = x2 % 8
  const lastFullByte = (x2 / 8) | 0

  if (firstFullByte == lastFullByte) {
    const byteMask = (0xff >> startOffset) & (0xff << (7 - endOffset))
    screen[(width / 8) * y + firstFullByte] |= byteMask
  } else {
    const startByteMask = 0xff >> startOffset
    screen[(width / 8) * y + firstFullByte] |= startByteMask

    const endByteMask = 0xff << (7 - endOffset)
    screen[(width / 8) * y + lastFullByte] |= endByteMask

    for (let i = firstFullByte + 1; i < lastFullByte; i++) {
      screen[(width / 8) * y + i] = 0xff
    }
  }
}

// Example usage:
const screen = new Array(8).fill(0)
const width = 16
drawLine(screen, width, 2, 13, 1)
console.log(screen)
// Output: [ 0, 0, 0, 0, 124, 255, 0, 0 ]
