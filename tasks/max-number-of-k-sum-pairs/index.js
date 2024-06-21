// const nums = [1, 2, 3, 4]
// const k = 5

const nums = [4,4,1,3,1,3,2,2,5,5,1,5,2,1,2,3,5,4]
const k = 2
const maxOperations = (nums, k) => {
  let count = 0
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] > k) {
      continue
    }
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[i] + nums[j] === k) {
        count++
        nums.splice(j, 1)
        break
      }
    }
  }


  return count
}

const maxOperations2 = (nums, k) => {
  nums.sort((a, b) => a - b)

  let count = 0
  let left = 0
  let right = nums.length - 1

  while(left < right) {
    if(nums[left] > k) {
      return count
    }

    if(nums[left] + nums[right] === k) {
      count++
      left++
      right--
      continue
    }

    nums[left] + nums[right] > k ? right-- : left++

  }

  return count
}

console.log(maxOperations2(nums, k))