// const arr = [5, 6, 3, 5, 7, 8, 9, 1, 2]; // 5
// const arr = [10, 4, -2, 3, -4, 2] // 2
const arr = [-5, -9, -4, 6, -9, 8, -2] // 3

const findTheLongestIncreasingSubsequence = () => {
    let res = 0;

    let i = 0;
    let j = 1;
    let localMax = 1;

    while (i < arr.length) {
        if (arr[j] > arr[i]) {
            localMax += 1;
            i++
            j++

        } else {
            res = Math.max(res, localMax);
            localMax = 1
            i = j
            j = i + 1
        }
    }

    return res
};

console.log(findTheLongestIncreasingSubsequence());
