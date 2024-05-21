const arr = [8, 7, 4, 2, 9, 0, 1, 3, 5, 6]

const partition = (arr, start, end) => {
    let pivot = arr[end]

    let i = start - 1

    for(let j = start; j < end; j++ ) {
        if(arr[j] < pivot) {
            i++
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]]

    return i + 1
}

const quickSort = (arr, start, end) => {
    if(start < end) {
        let pivot = partition(arr, start, end)

        quickSort(arr, start, pivot - 1)
        quickSort(arr, pivot + 1, end)

        return arr
    }
}

console.log(quickSort(arr, 0, arr.length - 1))

// https://www.notion.so/shoff/f3cb066e08ff488e85edc7db55b59a9f?pvs=4