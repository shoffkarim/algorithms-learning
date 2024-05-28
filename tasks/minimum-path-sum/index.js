const grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
]

const minimumPath = (grid) => {
    let rows = grid.length
    let columns = grid[0].length
    let dp = Array.from({length: rows}, () => Array.from({length: columns}, () => 0))


    dp[0][0] = grid[0][0]
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            if(i === 0 && j === 0) {
                continue
            }
            if(i === 0) {
                dp[i][j] = dp[i][j - 1] + grid[i][j]
            } else if(j === 0) {
                dp[i][j] = dp[i - 1][j] + grid[i][j]
            } else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
            }
        }
    }

    return dp[rows - 1][columns - 1]
}

console.log(minimumPath(grid))