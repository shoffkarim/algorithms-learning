
const climbingStairs = (n) => {
    let dp = new Array(n)
    dp[0] = 1
    dp[1] = 2


    for(let i = 2; i < n + 1; i++) {

        dp[i] = dp[i - 1] + dp[i - 2]
    }

    return dp[n - 1]
}

console.log(climbingStairs(3))