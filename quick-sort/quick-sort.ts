import { arr, comparator, swap } from './../index';
const partition = (arr: Array<number>, start: number, end: number) => {
    let pivotValue = arr[end]

    let pivotIndex = start

    for(let i = start; i < end; i ++) {
        if(comparator(arr[i], pivotValue) < 0) {
            swap(arr, i, pivotIndex)
            pivotIndex++
        }
    }

    swap(arr, pivotIndex, end)

    return pivotIndex
}

const quickSort = (arr: Array<number>, start?: number, end?: number) => {
    if(start === undefined) {
        start = 0
    }
    if(end === undefined) {
        end = arr.length - 1
    }

    if(start >= end) {
        return "Error start >= end"
    }

    let pivot = partition(arr, start, end)

    quickSort(arr, start, pivot - 1);
    quickSort(arr, pivot + 1, end);

    return arr
}

console.log(quickSort(arr))