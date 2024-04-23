const profit = [60, 100, 120]
const weight = [10, 20, 30]
const w = 50
const n = 3

const max = (a, b) => {
    return a > b ? a : b
}

const knapsack = (w, weight, profit, n) => {
    if(n === 0 || w=== 0) {
        return 0
    }


    if(weight[n - 1] > w) {
        return knapsack(w, weight, profit, n - 1)
    } else {
        return max(profit[n - 1] + knapsack(w - weight[n - 1], weight, profit, n - 1), knapsack(w, weight, profit, n - 1))
    }

}


const knapsackDp = (w, weight, profit, n, dp) => {

    if(n === 0 || w=== 0) {
        return 0
    }

    if(dp[n][w] !== -1) {
        return dp[n][w]
    }

    if(weight[n - 1] > w) {
        return dp[n][w] = knapsackDp(w, weight, profit, n - 1, dp)
    } else {
        return dp[n][w] = max(profit[n - 1] + knapsackDp(w - weight[n - 1], weight, profit, n - 1, dp), knapsackDp(w, weight, profit, n - 1, dp))
    }

}

const main = () => {
    const dp = new Array(n + 1).fill(-1).map((el) => new Array(w + 1).fill(-1))

    return knapsackDp(w, weight, profit, n, dp)
}

const knapsackBottomUp = () => {
    const profit = [60, 100, 120]
    const weight = [10, 20, 30]
    const w = 50
    const n = 3

    const dp = new Array(n + 1).fill(0).map((el) => new Array(w + 1).fill(0))

    for(let i = 1; i < dp.length; i++) {
        for(let j = 1; j < dp[0].length; j++) {
            if(weight[i - 1] <= j) {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i - 1]] + profit[i - 1])
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    return dp[n][w]
}


const knapsackSimpleDp = () => {
    const profit = [60, 100, 120]
    const weight = [10, 20, 30]
    const w = 50
    const n = 3

    const dp = new Array(w + 1).fill(0)

    for(let i = 1; i < n + 1; i++) {
        for(let j = w; j >= 0; j--) {
            if(weight[i - 1] <= j) {
                dp[j] = Math.max(dp[j], dp[j - weight[i - 1]] + profit[i - 1])
            }
        }
    }

    return dp
}


console.log(knapsackSimpleDp())


// https://www.notion.so/shoff/168280554fd04c6c9e48f4292b8fa468?pvs=4