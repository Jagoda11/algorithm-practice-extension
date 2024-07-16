export const rotateMatrixProblem = {
  id: 6,
  title: 'Rotate Matrix',
  description:
    'Given an image represented by N x N matrix, where each pixel in the image is represented by an integer, write a method to rotate the image by 90 degrees. Can you do this in place?',
  solution: `
export const rotateMatrix = (matrix: number[][]): number[][] => {
  const n = matrix.length;
  for (let layer = 0; layer < n / 2; layer++) {
    const first = layer;
    const last = n - 1 - layer;
    for (let i = first; i < last; i++) {
      const offset = i - first;
      // save top
      const top = matrix[first][i];
      // left -> top
      matrix[first][i] = matrix[last - offset][first];
      // bottom -> left
      matrix[last - offset][first] = matrix[last][last - offset];
      // right -> bottom
      matrix[last][last - offset] = matrix[i][last];
      // top -> right
      matrix[i][last] = top;
    }
  }
  return matrix;
};`,
}

export const rotateMatrix = (matrix: number[][]): number[][] => {
  const n = matrix.length
  for (let layer = 0; layer < n / 2; layer++) {
    const first = layer
    const last = n - 1 - layer
    for (let i = first; i < last; i++) {
      const offset = i - first
      // save top
      const top = matrix[first][i]
      // left -> top
      matrix[first][i] = matrix[last - offset][first]
      // bottom -> left
      matrix[last - offset][first] = matrix[last][last - offset]
      // right -> bottom
      matrix[last][last - offset] = matrix[i][last]
      // top -> right
      matrix[i][last] = top
    }
  }
  return matrix
}
