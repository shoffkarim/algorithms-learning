const input = ["4","13","5","/","+"]
const calc = () => {
    const stack = []
    for(let i = 0; i < input.length; i++) {
        const length = stack.length
        if(input[i] === '+') {
            stack[length - 2] += stack.pop()

        } else if(input[i] === '-') {
            stack[length - 2] -= stack.pop()
        } else if(input[i] === '*') {
            stack[length - 2] *= stack.pop()
        } else if(input[i] === '/') {
            stack[length - 2] = Math.trunc(stack[length - 2] / stack.pop())
        } else {
            stack.push(Number(input[i]))
        }
    }

    console.log(stack[0])
}

calc()

// https://www.notion.so/shoff/6c43e83ae3494571b7e32ebf435fb887?pvs=4