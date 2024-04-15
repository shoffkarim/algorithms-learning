const array1 = [4, 1, 2, 1, 2]
const array2 = [42, 67, 67, 42, 42]
const lunches = (array) => {
    const hash = new Set()

    for(let i = 0; i < array.length; i++) {
        if(hash.has(array[i])) {
            hash.delete(array[i])
        } else {
            hash.add(array[i], i)
        }

    }

    return hash.keys().next().value
}

console.log(lunches(array1))

// https://www.notion.so/shoff/1381425933fc44ffa99403227e0633e5?pvs=4