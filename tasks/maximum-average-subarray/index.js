const nums = [1, 12, -5, -6, 50, 3]
const k = 4

const sumArray = (arr) => {
  return arr.reduce((item, value) => item + value, 0)
}
const maximinSubarraySum = (nums, k) => {
  if(nums.length <= k) {
    return nums.reduce((item, value) => item + value, 0) / k
  }


  let localMax = 0
  let max = 0

  for(let i = 0; i < k; i++) {
    max += nums[i]
  }

  max = max
  localMax = max

  for(let i = k; i < nums.length; i++) {
    localMax = localMax - nums[i - k] + nums[i]

    max = Math.max(max, localMax)
  }

  return max / k
}

console.log(maximinSubarraySum(nums, k))