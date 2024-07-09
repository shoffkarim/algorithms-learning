// const intervals = [[1,100], [11, 22], [1, 11], [2, 12]]
// const intervals = [[1,2],[2,3],[3,4],[1,3]]
const intervals = [[-1,1],[10,11],[12,14],[3,4]]

const eraseOverlapInterval = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0])

    let res = 0
    let prevEnd = intervals[0][1]

    for(let i = 1; i < intervals.length; i++) {
        if(intervals[i][0] >= prevEnd) {
            prevEnd = intervals[i][1]
        } else {
            res++
            prevEnd = Math.min(intervals[i][1], prevEnd)
        }
    }

    return res
}

console.log(eraseOverlapInterval(intervals))