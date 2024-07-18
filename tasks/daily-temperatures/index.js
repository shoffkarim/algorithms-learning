const temperatures = [73, 74, 75, 71,69, 72, 76, 73]

const dailyTemperature = (temperatures) => {
    const res = Array(temperatures.length).fill(0)
    const stack = []

    for(let i = 0; i < temperatures.length; i++) {
        while(stack.length && temperatures[i] > stack[stack.length - 1][0]) {
            let [stackT, stackInd] = stack.pop()
            res[stackInd] = (i - stackInd)
        }
        stack.push([temperatures[i], i])
    }
    return res
}

console.log(dailyTemperature(temperatures))