const nums = [5, 3, 7, 2, 8, 3]


const largestPerimetrTriangle = () => {
    nums.sort((a, b) => a - b)

    for(let i = nums.length - 1; i >= 0; i--) {
        if(nums[i] < nums[i - 1] + nums[i - 2]) {
            return nums[i] + nums[i - 1] + nums[i - 2]
        }
    }

    return 0
}

console.log(largestPerimetrTriangle())

// https://www.notion.so/shoff/06cf6002f6b84350bd681d5196f03b3d?pvs=4