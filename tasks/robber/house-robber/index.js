const nums = [1, 2, 3, 1]

const rob = (nums) => {
    const dp = Array(nums.length).fill(0)

    if(nums.length < 3) {
        return Math.max(...nums)
    }
    dp[dp.length - 1] = nums[nums.length - 1]
    dp[dp.length - 2] = nums[nums.length - 2]

    for(let i = nums.length - 3; i >= 0; i--) {
        dp[i] = nums[i] + Math.max(dp[i + 2], dp[i + 3] || 0)
    }

    return Math.max(dp[0], dp[1])
}

console.log(rob(nums))