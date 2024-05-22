let arr = [3, 30, 34, 5, 9]

const biggestNumber = (nums) => {
    nums.sort((a, b) => {
        let sa = a.toString()
        let sb = b.toString()
        if (sa + sb > sb + sa) {
            return - 1
        } else {
            return 1
        }
    })

    if(nums[0] === 0) return '0'

    return nums.join('')

}

console.log(biggestNumber(arr))

// https://www.notion.so/shoff/666ae12d351946fdb1c03f1ebaf57c5f?pvs=4