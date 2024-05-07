const amount = 5
const coins = [1, 2, 5]

const change = (amount, coins) => {
    let dp = new Array(amount + 1).fill(0)

    dp[0] = 1

    for (let i = coins.length - 1; i >= 0; i--) {
        const nextDP = new Array(amount + 1).fill(0)
        nextDP[0] = 1

        for(let a = 1; a < amount + 1; a++) {
            nextDP[a] = dp[a]

            if(a - coins[i] >= 0) {
                nextDP[a] += nextDP[a - coins[i]]
            }
        }

        dp = nextDP
    }

    return dp[amount]
}

console.log(change(amount, coins))

// https://www.notion.so/shoff/d13bf7e8141d4e2898447b29a69054c4?pvs=4