const k = 3
const n = 7

const combinationSum3 = (k, n) => {
    const res = []

    const backtrack = (i, curArr, sum) => {
    
        if(sum === n && curArr.length === k) {
            res.push(curArr)
            return
        } else if (curArr.length > k || sum > n) {
            return
        }

        for(let num = i + 1; num < 10; num++) {
            backtrack(num, [...curArr, num], sum + num)
        }
    }

    backtrack(0, [], 0)

    return res
}

console.log(combinationSum3(k, n))