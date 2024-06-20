const nums = [1, 2, 3, 4, 5]

const increasingTriplet = (nums) => {
    let n1 = Infinity
    let n2 = Infinity

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < n1) {
            n1 = nums[i]
        } else if (nums[i] > n1 && nums[i] < n2) {
            n2 = nums[i]
        } else if (nums[i] > n2) {
            return true
        }
    }

    return false

}

console.log(increasingTriplet(nums))