const text1 = 'bsbininm'
const text2 = 'jmjkbkjkv'


const longestCommonSubsequence = (text1, text2) => {
  const dp = Array.from({length: text2.length + 1}, () => Array(text1.length + 1).fill(0))

  for(let i = text2.length - 1; i >= 0; i--) {
    for(let j = text1.length - 1; j >= 0; j--) {
      if(text2[i] == text1[j]) {
        dp[i][j] = 1 + dp[i + 1][j + 1]
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1])
      }
    }
  }

  return dp[0][0]
}

console.log(longestCommonSubsequence(text1, text2))