let arr = [10, 2, 4, 5, 276, 42]

const radixSort = (arr) => {
    let max_digits = 0

    for(let i = 0; i < arr.length; i++) {
        max_digits = Math.max(max_digits, String(arr[i]).length)
    }

    const base = 10


    for(let i = 0; i < max_digits; i++) {
        let bins = Array.from({length: 10}, () => [])
        for(let x of arr) {
            let digit = (Math.floor(x / base) ** i) % base
            bins[digit].push(x)
        }

        arr = bins.flat()

    }

    return arr

}

console.log(radixSort(arr))

// https://www.notion.so/shoff/Radix-Sort-5c5e6ae0cbb442989f8ebfec7e260ad0?pvs=4