import {arr, comparator, swap} from './../index'

const bubbleSort = (arr: Array<number>) => {
    for(let i = arr.length - 1; i > 0; i--){
        for(let j = 0; j < i; j++){
            if(comparator(arr[j], arr[j + 1]) > 0){
                console.log(arr[j], arr[j + 1])
                swap(arr, j, j + 1)
            }
        }
    }
    return arr
}

console.log(bubbleSort(arr))