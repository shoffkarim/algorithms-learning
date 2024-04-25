const factorial = (n) => {
    if(n == 1) {
        return 1
    }

    return n * factorial(n - 1)
}

// console.log(factorial(5))

const factorialIterative = (n) => {
    let res = 1

    for(let i = 0; i < n; i++) {
        res *= n - i
    }

    return res
}

console.log(factorialIterative(5))


// https://www.notion.so/shoff/fac-9fc7963646224314b109469c00389232?pvs=4
// https://www.notion.so/shoff/c736af0068c04f14897af7d55ed0d19c?pvs=4