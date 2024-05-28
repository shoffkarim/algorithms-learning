const obstacleGrid = [
    [0, 0],
    [1, 1],
    [0, 0]
]
// i = 1, j = 2
const minimumPath = (obstacleGrid) => {
    let rows = obstacleGrid.length
    let columns = obstacleGrid[0].length
    let dp = Array.from({length: rows}, () => Array.from({length: columns}, () => 0))


    dp[0][0] = 1
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            if(i === 0 && j === 0) {
                continue
            }
            if(i === 0) {
                dp[i][j] = obstacleGrid[i][j - 1] === 1 ? 0 : dp[i][j - 1]
            } else if(j === 0) {
                dp[i][j] = obstacleGrid[i - 1][j] === 1 ? 0 : dp[i - 1][j]
            } else {
                if(obstacleGrid[i][j] === 1) {
                    dp[i][j] = 0
                }
                if(obstacleGrid[i - 1][j] === 1) {
                    dp[i][j] = obstacleGrid[i][j - 1] === 1 ? 0 : dp[i][j - 1]
                } else if(obstacleGrid[i][j - 1] === 1) {
                    dp[i][j] = obstacleGrid[i - 1][j] === 1 ? 0 : dp[i - 1][j]
                } else {
                    dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
                }

            }
        }
    }
    console.log(dp)
    return dp[rows - 1][columns - 1]
}

console.log(minimumPath(obstacleGrid))