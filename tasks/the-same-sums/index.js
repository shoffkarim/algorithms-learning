// const arr = [2, 10, 9, 2, 1, 1, 1]; // sum = 26, target = 13, [10, 9, 2, 2, 1, 1]

// const arr = [1,2,3,4,5,6,7] // sum = 28, target = 14, [7, 6, 5, 4, 3, 2, 1]

// const arr = [14,9,8,4,3,2] // sum = 40, target = 20,

const arr = [23,13,11,7,6,5,5] // sum = 70, target = 35

const findSum = (mass) => {
    return mass.reduce((prev, val) => prev + val, 0);
};
const theSameSums = () => {
    const arrSum = findSum(arr)
    if (arrSum % 2) {
        return false;
    }

    const target =  arrSum / 2

    let dp = new Set()
    dp.add(0)

    for(let i = 0; i < arr.length; i++) {
        nextDP = new Set()

        for(let j of dp) {
            nextDP.add(j + arr[i])
            nextDP.add(j)
        }

        dp = nextDP
    }

    return dp.has(target)


};

console.log(theSameSums());
