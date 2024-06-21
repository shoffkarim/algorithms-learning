// const nums = [0, 1, 0, 3, 12]
const nums = [0, 0, 1];

const moveZeroes = (nums) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      i--;
      count++;
    }
  }

  for (let i = 0; i < count; i++) {
    nums.push(0);
  }
  return nums;
};

const moveZeroes2 = (nums) => {
    let low = 0
    let high = low + 1

    while(high < nums.length) {
        if(nums[low] !== 0) {
            low++
            high++
        } else {
            if(nums[high] !== 0) {
                [nums[low], nums[high]] = [nums[high], nums[low]]
                low++
            }

            high++
        }
    }
}

console.log(moveZeroes2(nums));
