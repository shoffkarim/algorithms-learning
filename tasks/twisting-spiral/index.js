// const matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12]
// ]

// const matrix = [
//     [-4, 3, 7],
//     [9, 1, -3],
//     [-7, -8, 6],
//     [-3, -1, -5],
//     [6, 2, 2]
// ]

// const matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
// ]

const matrix = [
    [2, 5],
    [8, 4],
    [0, -1]
]

const twistingSpiral = () => {

    let left = 0
    let right = matrix[0].length
    let top = 0
    let bottom = matrix.length


    let res = []

    while(left < right && top < bottom) {
        for(let i = left; i < right; i++ ) {
            res.push(matrix[top][i])
        }

        top += 1

        for(let i = top; i < bottom; i++) {
            res.push(matrix[i][right - 1])
        }

        right -= 1


        if (!(left < right && top < bottom)) {
            break
        }

        for(let i = right - 1; i > left - 1; i-- ) {
            res.push(matrix[bottom - 1][i])
        }

        bottom -= 1

        for(let i = bottom - 1; i > top - 1; i--) {
            res.push(matrix[i][left])
        }

        left += 1
    }

    return res
}

console.log(twistingSpiral())

// while(visitedColumn < j && visitedColumn !== rowLength - 1) {
//     console.log('1', matrix[i][j], {i, j, visitedColumn, visitedRow, rowLength, rowStart, columnLength, columnStart})
//     res.push(matrix[i][j])
//     visitedColumn++
//     j++
//     count++
//     if(j === rowLength) {
//         j -= 1
//         i += 1
//         rowStart += 1
//     }
// }

// while(visitedRow < i && visitedRow !== columnLength - 1) {
//     console.log('2', matrix[i][j], {i, j, visitedColumn, visitedRow, rowLength, rowStart, columnLength, columnStart})
//     res.push(matrix[i][j])
//     visitedRow++
//     i++
//     count++
//     if(i === columnLength) {
//         j -= 1
//         i -= 1
//         columnLength -= 1
//         // visitedColumn -= 1
//     }
// }

// while(visitedColumn > j && visitedColumn !== columnStart) {
//     console.log('3', matrix[i][j], {i, j, visitedColumn, visitedRow, rowLength, rowStart, columnLength, columnStart})
//     res.push(matrix[i][j])
//     visitedColumn--
//     j--
//     count++
//     if(j === columnStart - 1) {
//         j = columnStart
//         i -= 1
//         rowLength -= 1
//         visitedRow += 1
//     }
// }

// while(visitedRow > i && visitedRow !== rowStart) {
//     console.log('4', matrix[i][j], {i, j, visitedColumn, visitedRow, rowLength, rowStart, columnLength, columnStart})
//     res.push(matrix[i][j])
//     visitedRow--
//     i--
//     count++
//     if(i === rowStart - 1) {
//         i = rowStart
//         j += 1
//         columnStart += 1
//         // visitedColumn += 1
//     }
// }