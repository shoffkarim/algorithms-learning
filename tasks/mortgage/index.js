const candidates = [10, 1, 2, 7, 6, 1, 5] // [10, 7, 6, 5, 2, 1, 1]
const target = 8

const backtrack = (cur, pos, target, candidates, res) => {
    if(target === 0) {
        res.push([...cur])
    }
    if(target <=0 ) {
        return
    }

    let prev = -1

    for(let i = pos; i < candidates.length; i++) {
        if(candidates[i] === prev) {
            continue
        }

        cur.push(candidates[i])
        backtrack(cur, i + 1, target - candidates[i], candidates, res)
        cur.pop()
        prev = candidates[i]
    }
 }
const mortgage = (candidates, target) => {
    candidates.sort((a, b) => a - b)

    let res = []

    backtrack([], 0, target, candidates, res)

    let max = 0
    for(let i = 0; i < res.length; i++) {
        max = Math.max(max, res[i].length)
    }
    return max
};
console.log(mortgage(candidates, target))

// https://www.notion.so/shoff/558130d38b914724a21bb6ef3f31e50b?pvs=4