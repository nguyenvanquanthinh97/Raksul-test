export function isPalindrome(str: string) {
  return str === str.split("").reverse().join("");
}

export function rotateMatrixCounterClockwise(matrix: Array<Array<number>>) {
  // n-dimension
  const n = matrix.length;

  const rotatedMatrix = new Array(n).fill(0).map(() => new Array(n).fill(0));

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      // Rotate to counter-clockwise means: (r, c) => (n-1-c, r)
      rotatedMatrix[n - 1 - c][r] = matrix[r][c];
    }
  }

  return rotatedMatrix;
}
