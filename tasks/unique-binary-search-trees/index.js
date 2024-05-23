const n = 5

const numTrees = (n) => {
    const dp = Array.from({length: n + 1}, () => 1)

    for(let nodes = 2; nodes < n + 1; nodes++) {
        let total = 0

        for(let root = 1; root < nodes + 1; root++) {
            let left = root - 1
            let right = nodes - root

            total += dp[left] * dp[right]
        }

        dp[nodes] = total
    }

    return dp[n]

}

console.log(numTrees(n))

// https://www.notion.so/shoff/c18c49561ece4fe7a04470a14d4d1a11?pvs=4