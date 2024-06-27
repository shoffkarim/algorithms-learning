const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]

const minCostClimbingStairs = (cost) => {
    const dp = Array(cost.length).fill(0)

    if(cost.length < 3) {
        return Math.min(...cost)
    }

    dp[dp.length - 1] = cost[cost.length - 1]
    dp[dp.length - 2] = cost[cost.length - 2]

    for(let i = cost.length - 3; i >=0; i--) {
        dp[i] = cost[i] + Math.min(dp[i + 1], dp[i + 2])
    }

    return Math.min(dp[0], dp[1])
}

console.log(minCostClimbingStairs(cost))