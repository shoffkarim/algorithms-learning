const spells = [5, 1, 3]
const potions = [1, 2, 3, 4, 5]
const success = 7

const successfulPairs = (spells, potions, success) => {
    potions.sort((a, b) => a - b)

    let res = []

    const length = potions.length

    for(let spell = 0; spell < spells.length; spell++) {

        let left = 0
        let right = potions.length - 1

        let lastIndex = 0
        while(left <= right) {
            const mid = Math.floor((left + right) / 2)
            
            if(potions[mid] * spells[spell] >= success) {
                right = mid - 1
            } else {
                left = mid + 1
            }

            lastIndex = mid
        }


        if(potions[lastIndex] * spells[spell] >= success) {
            res.push(length - lastIndex)
        } else {
            res.push(length - lastIndex - 1)
        }
    }

    return res
}


console.log(successfulPairs(spells, potions, success))