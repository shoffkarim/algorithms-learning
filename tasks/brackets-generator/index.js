const bracketsGenerator = (n) => {
  const stack = []
  const res = []

  const backtrack = (open, close) => {
    if(open === close && open === n) {
      res.push(stack.join(""))
      return
    }

    if(open < n) {
      stack.push("(")
      backtrack(open + 1, close)
      stack.pop()
    }

    if(close < open) {
      stack.push(")")
      backtrack(open, close + 1)
      stack.pop()
    }
  }

  backtrack(0, 0)
  return res

}

console.log(bracketsGenerator(3))


// https://www.notion.so/shoff/a9814933e9d94252b24349b6ee13ae4a?pvs=4