const arr1 = [4, 9, 5, 2, 2]
const arr2 = [9, 4, 9, 8, 4, 2, 2]

const cockroachRaces = () => {
    let map = new Map()
    let map2 = new Map()

    for(let i = 0; i < arr1.length; i++) {
        if(map.has(arr1[i])) {
            map.set(arr1[i], map.get(arr1[i]) + 1)
        } else {
            map.set(arr1[i], 1)
        }

    }

    for(let i = 0; i < arr2.length; i++) {
        if(map.has(arr2[i])) {
            if(map2.has(arr2[i])) {
                map2.set(arr2[i], map2.get(arr2[i]) + 1)
            } else {
                map2.set(arr2[i], 1)
            }

        }
    }

    for([key, item] of map2) {
        let num = Math.min(map.get(key), item)
        for(let i = 0; i < num; i++) {
            console.log(key)
        }
    }
}

cockroachRaces()

// https://www.notion.so/shoff/de528120996b45c4814e2521de37864f?pvs=4