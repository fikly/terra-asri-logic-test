function calculate_diagonal_sum(n) {
  const spiral = Array.from({ length: n }, () => Array(n).fill(0))

  let value = n * n
  let top = 0,
    bottom = n - 1,
    left = 0,
    right = n - 1

  while (value >= 1) {
    for (let i = right; i >= left; i--) spiral[top][i] = value--
    top++

    for (let i = top; i <= bottom; i++) spiral[i][left] = value--
    left++

    for (let i = left; i <= right; i++) spiral[bottom][i] = value--
    bottom--

    for (let i = bottom; i >= top; i--) spiral[i][right] = value--
    right--
  }

  let diagonalSum = 0
  for (let i = 0; i < n; i++) {
    diagonalSum += spiral[i][i]
    if (i !== n - 1 - i) {
      diagonalSum += spiral[i][n - 1 - i]
    }
  }

  return diagonalSum
}

console.log(calculate_diagonal_sum(5))
console.log(calculate_diagonal_sum(7))
