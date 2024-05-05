const square = (x) => {
  let left = 0
  let right = x

  let res = 0

  while(left <= right) {
    let mid = (left + right) / 2
    console.log(mid)
    if(mid*mid < x) {
      left = mid + 1
      res = mid
    } else if (mid*mid > x) {
      right = mid - 1
    } else {
      return mid
    }
  }

  return res
}

const squareWithSymbols = (x) => {
  let y = x
  let z = (y + (x/y)) / 2

  while(Math.abs(y - z) >= 0.00001) {
    y = z
    z = (y + (x/y)) / 2
  }

  return z.toFixed(5)
}

console.log(squareWithSymbols(8))

// https://www.notion.so/shoff/5b03cb9c257c43b2a3bdfec17958e116?pvs=4