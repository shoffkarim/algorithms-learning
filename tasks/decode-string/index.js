const s = "100[leetcode]"

const decodeString = (s) => {
  const stack = []

  for(let i = 0; i < s.length; i++) {
    if(s[i] === ']') {
      let str = ''
      while(stack[stack.length - 1] !== '[') {
        str = stack.pop() + str
      }
      stack.pop()
      let count = ''

      while(Number(stack[stack.length - 1]) >= 0 && Number(stack[stack.length - 1]) < 10) {
        count = stack.pop() + count
      }

      for(let j = 0; j < Number(count); j++) {
        stack.push(str)
      }
    } else {
      stack.push(s[i])
    }
  }

  return stack.join('')
}

console.log(decodeString(s))