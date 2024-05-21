const arr = [8, 7, 4, 2, 9, 0, 1, 3, 5, 6]

const insertSort = (arr) => {
    for(let i = 1; i < arr.length; i++) {
        let cur = i

        while(arr[cur - 1] > arr[cur]) {
            let temp = arr[cur - 1]
            arr[cur - 1] = arr[cur]
            arr[cur] = temp
            cur--
        }
    }

    return arr
}

console.log(insertSort(arr))


// https://www.notion.so/shoff/5d7686d72a194654a358b13f2a7fde3b?pvs=4