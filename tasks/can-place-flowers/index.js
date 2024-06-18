const flowerbed = [0,0,1,0,1]
const n = 1

const canPlaceFlowers = (flowerbed, n) => {
    if(flowerbed.length === 1 && flowerbed[0] === 0) {
        return true
    }
    for(let i = 0; i < flowerbed.length; i++) {
        if(flowerbed[i] === 0) {
            if((flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) ||
                (i === 0 && flowerbed[i + 1] === 0) ||
                (i === flowerbed.length - 1 && flowerbed[i - 1] === 0))
            {
                flowerbed[i] = 1
                n -= 1
            }
        }
    }

    return n <= 0
}

console.log(canPlaceFlowers(flowerbed, n))