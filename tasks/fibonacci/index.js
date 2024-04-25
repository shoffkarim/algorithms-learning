
const fibonacci = (n) => {
    const dp = Array(n).fill(-1)
    if(n <= 1) {
        return dp[n] = n
    }
    return dp[n] = fibonacci(n - 1) + fibonacci(n - 2)

}

console.log(fibonacci(13))


// https://www.notion.so/shoff/662e39f6e3fd4b17923350295330ba5c?pvs=4
// https://www.notion.so/shoff/ca6c9f8e14ca49d0bc446c0c77d20c92?pvs=4