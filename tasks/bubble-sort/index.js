const arr = [8, 7, 4, 2, 9, 0, 1, 3, 5, 6]

const bubbleSort = (arr) => {
    for(let i = arr.length - 1; i > 0; i--) {
        for(let j = 0; j < i; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }

        }
    }

    return arr
}

console.log(bubbleSort(arr))


// https://www.notion.so/shoff/f175f85422474f0c8a991b3bf4fe0a76?pvs=4