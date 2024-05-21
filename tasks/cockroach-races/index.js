const arr1 = [4, 9, 5]
const arr2 = [9, 4, 9, 8, 4]

const cockroachRaces = () => {
    let map = new Map()

    for(let i = 0; i < arr1.length; i++) {
        map.set(arr1[i], 0)
    }

    for(let i = 0; i < arr2.length; i++) {
        if(map.has(arr2[i])) {
            map.set(arr2[i], map.get(arr2[i]) + 1)
        }
    }

    for([key, value] of map) {
        if(value > 0) {
            console.log(key)
        }
    }
}

cockroachRaces()

// https://www.notion.so/shoff/04a6f7957c00492fabc92c939197f8c7?pvs=4