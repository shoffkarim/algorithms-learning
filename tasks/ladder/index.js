const nums = [1, 3, 0, 1, 2] // true
// const nums = [0, 1, 2, 3] // false

const canJump = (nums) => {
    let goal = nums.length - 1

    for(let i = nums.length - 1; i >= 0; i--) {
        if(i + nums[i] >= goal) {
            goal = i
        }
    }

    return goal === 0
}

console.log(canJump(nums))


// https://www.notion.so/shoff/7dcf74d4295b4fbb8ed1226cc430a7a7?pvs=4