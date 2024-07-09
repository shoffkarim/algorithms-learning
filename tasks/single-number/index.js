const nums = [4, 1, 2, 1, 2]

const singleNumber = (nums) => {
    let res = 0

    for(let i of nums) {
        res = i ^ res
    }

    return res
}

console.log(singleNumber(nums))