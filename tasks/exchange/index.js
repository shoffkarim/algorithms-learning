const prices = [7, 1, 5, 3, 6, 4]

const getMaxProfit = () => {
  let profit = 0

  for(let i = 0; i < prices.length; i++) {
    if(prices[i] < prices[i + 1]) {
        profit += (prices[i + 1] - prices[i])
    }
  }

  return profit
}

console.log(getMaxProfit())

// https://www.notion.so/shoff/c29d8a7e1e4a48d6914efd00b64e47cc?pvs=4