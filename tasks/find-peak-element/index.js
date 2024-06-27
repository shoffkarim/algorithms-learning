const nums = [1, 2, 3, 1]

const findPeakElement = (nums) => {
    let left = 0
    let right = nums.length - 1


    while(left <= right) {
        const mid = Math.floor((left + right) / 2)
        if(nums[mid] < nums[mid + 1]) {
            left = mid + 1
        } else if (nums[mid] < nums[mid - 1]) {
            right = mid - 1
        } else if(nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
            return mid
        }
    }


}

console.log(findPeakElement(nums))