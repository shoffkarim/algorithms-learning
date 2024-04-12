import {arr, comparator, swap} from './../index'

const selectionSort = (arr: Array<number>) => {
    for(let i = 0; i < arr.length - 1; i++){
        let min = i
        for(let j = i + 1; j < arr.length; j++){
            if(comparator(arr[min], arr[j]) > 0){
                min = j
            }
        }
        if(min !== i){
            swap(arr, i, min)
        }
    }
    return arr
}

console.log(selectionSort(arr))