const fibonacci = (f) => {
    f[0] = 0
    f[1] = 1

    for(let i = 2; i < 59; i++) {
        f[i] = (f[i - 1] + f[i - 2]) % 10
    }
}

const lastDigit = (n) => {
    let f = new Array(60).fill(0)

    fibonacci(f)

    return f[n % 60]
}

console.log(lastDigit(61))

// https://www.notion.so/shoff/0994fd4d700a4a78b940b134cf9140f7?pvs=4