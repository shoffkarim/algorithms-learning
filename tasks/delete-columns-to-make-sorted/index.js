const strs = ['zyx', 'wvu', 'tsr']


const deleteColumns = () => {
    let count = 0
    let prev = strs[0].charCodeAt(0)
    let prevChar = strs[0][0]
    for(let j = 0; j < strs[0].length; j++) {
        for(let i = 0; i < strs.length; i++) {
            console.log(prevChar, strs[i][j], i, j, count)
            if(prev > strs[i].charCodeAt(j)) {
                count++
                j++
                i = 0
                prev = strs[0].charCodeAt(j)
            }
            if(i === strs.length - 1) {
                prev = strs[0].charCodeAt(j + 1)
                prevChar = strs[0][j+1]
            } else {
                prev = strs[i].charCodeAt(j)
                prevChar = strs[i][j]

            }

        }
    }



    return count
}

console.log(deleteColumns())
// https://www.notion.so/shoff/69b431823cd84d12855a23b08c486150?pvs=4