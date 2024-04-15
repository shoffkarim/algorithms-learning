const print = (array) => {
    let s = ''
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i][1]; j++) {
            s += array[i][0]
        }

    }
    console.log(s)
}

const frequency = (s) => {
    const hash = new Map()

    for(let i = 0; i < s.length; i++) {
        if(hash.has(s[i])){
            const value = hash.get(s[i])
            hash.set(s[i], value + 1)
        } else {
            hash.set(s[i], 1)
        }
    }
    const sortedMap = new Map([...hash.entries()].sort((a, b) => b[1] - a[1]))
    const array = [...sortedMap.entries()].sort((a, b) => {
        if(a[0] < b[0]){
            return -1
        } else if (a[0] > b[0]){
            return 1
        }
        return 0
    })


    print(array)

}

frequency('tree')

// https://www.notion.so/shoff/41ebd4834c5d4e6f85f79e165035ce47?pvs=4