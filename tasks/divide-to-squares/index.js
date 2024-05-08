const divideToSquares = (n, m) => {
    if(n === 0) {
        return m
    }

    return divideToSquares(m % n, n)
}

console.log(divideToSquares(15, 18))

// https://www.notion.so/shoff/32514b27606c4d28bd44a0c3b840e82b?pvs=4