const arr = [4, 3, 2, 3, 5, 2, 1]
const n = 4

const sharePrizes = (nums, k) => {
    const sum = nums.reduce((a, b) => {
        return a + b
    }, 0)

    if(sum % k) {
        return false
    }

    nums.sort((a, b) => b - a)



    const target = sum / k
    const used = new Array(nums.length).fill(false)

    const backtrack = (i, k, subsetSum) => {
        if(k === 0) {
            return true
        }

        if(subsetSum === target) {
            return backtrack(0, k - 1, 0)
        }

        for(let j = i; j < nums.length; j++) {
            if(used[j] || subsetSum + nums[j] > target) {
                continue
            }

            used[j] = true

            if(backtrack(j + 1, k, subsetSum + nums[j])) {
                return true
            }

            used[j] = false
        }

        return false
    }

    return backtrack(0, k, 0)
}

console.log(sharePrizes(arr, n))

// https://www.notion.so/shoff/e77960f7cc844a0989facc7ba73d7d0b?pvs=4
