import { arr, comparator, swap } from './../index';
const insertSort = (arr: Array<number>) => {
    for(let i = 1; i < arr.length; i++){
        let cur = i

        while(arr[cur - 1] !== undefined && comparator(arr[cur], arr[cur -1]) < 0) {
            swap(arr, cur - 1, cur)
            cur--
        }
    }
    return arr
}

console.log(insertSort(arr))