const m = 3
const n = 7

const uniquePath = (m, n) => {
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  dp[0][1] = 1

  for(let i = 1; i < m + 1; i++) {
    for(let j = 1; j < n + 1; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }

  return dp[m][n]
}

console.log(uniquePath(m, n))