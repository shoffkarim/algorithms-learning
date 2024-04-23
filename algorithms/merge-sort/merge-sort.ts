import { arr, comparator } from './../index';

const mergeSortedArrays = (left: Array<number>, right: Array<number>) => {
    let newArray: Array<number> = []

    let index1 = 0
    let index2 = 0

    while (index1 < left.length && index2 < right.length) {
        let min = 0

        if(comparator(left[index1], right[index2]) <= 0) {
            min = left[index1]
            index1++
        } else {
            min = right[index2]
            index2++
        }

        newArray.push(min)
    }

    return [...newArray, ...left.slice(index1), ...right.slice(index2)]

}

const mergeSort = (arr: Array<number>) => {
    if(arr.length <= 1) {
        return arr
    }

    let middle = Math.floor(arr.length / 2)

    let left = arr.slice(0, middle)
    let right = arr.slice(middle)

    return mergeSortedArrays(mergeSort(left), mergeSort(right))
}

console.log(mergeSort(arr))