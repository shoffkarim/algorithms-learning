// const piles = [3, 6, 7, 11]
// const h = 8

const piles = [30,11,23,4,20]
const h = 6

// const piles = [30,11,23,4,20]
// const h = 5

const minEatingSpeed = (piles, h) => {

    let right = Math.max(...piles)

    let left = 1

    let res = right

    while(left <= right) {
        const mid = Math.floor((left + right) / 2)

        let hours = 0

        for(let i = 0; i < piles.length; i++) {
            hours += Math.ceil(piles[i] / mid)
        }

        if (hours <= h) {
            res = Math.min(res, mid)
            right = mid - 1
        } else if (hours > h) {
            left = mid + 1

        }
    }
    return res
}

console.log(minEatingSpeed(piles, h))