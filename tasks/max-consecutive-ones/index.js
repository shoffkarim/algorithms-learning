// const nums = [1,1,1,0,0,0,1,1,1,1,0]
// const k = 2

// const nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1]
// const k = 3

const nums = [1,1,1]
const longestOnes = (nums) => {
  let left = 0
  let k = 1
  let max = 0
  let flipped = 0

  for(let right = 0; right < nums.length; right++) {
    if(nums[right] === 0) {
      flipped++
    }

    while(flipped > k) {
      if(nums[left] === 0) {
        flipped--
      }
      left++
    }

    let tempMax = right - left

    max = Math.max(max, tempMax)
  }

  return max
}

console.log(longestOnes(nums))