const candies = [2, 3, 5, 1, 3]
const extraCandies = 3

const kindsWithCandies = (candies, extraCandies) => {
    const max = Math.max(...candies)
    let arr = []
    for(let kid of candies) {
        if(kid + extraCandies >= max) {
            arr.push(true)
        } else {
            arr.push(false)
        }
    }

    return arr
}

console.log(kindsWithCandies(candies, extraCandies))