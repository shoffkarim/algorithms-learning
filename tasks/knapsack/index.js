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

const main = () => {
    return knapsack(w, weight, profit, n)
}

console.log(main())