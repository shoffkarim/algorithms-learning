const gain = [-5, 1, 5, 0, -7]

const largestAltitude = (gain) => {
  let max = 0
  let sum = 0

  for(let i = 0; i < gain.length; i++) {
    sum += gain[i]
    max = Math.max(max, sum)
  }

  return max
}

console.log(largestAltitude(gain))