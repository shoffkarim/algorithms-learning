const nums = [1,7,3,6,5,6]

const pivotIndex = (nums) => {
  const sum = nums.reduce((item, value) => item + value, 0)

  let tempSum = 0
  for(let i = 0; i < nums.length; i++) {
    if(tempSum === (sum - nums[i]) / 2) {
      return i
    }
    tempSum += nums[i]
  }

  return -1
}

console.log(pivotIndex(nums))