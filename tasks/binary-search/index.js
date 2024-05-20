const binarySearch = (nums, n) => {
    let left = 0
    let right = nums.length - 1

    while(left <= right) {
        let mid = Math.floor((left + right) / 2)

        if(nums[mid] === n) {
            return mid
        }

        if(nums[mid] < n) {
            left = mid + 1
        } else if (nums[mid] > n) {
            right = mid - 1
        }
    }

    return -1
}

console.log(binarySearch([1, 2, 3, 5, 6, 7, 9, 0], 0))