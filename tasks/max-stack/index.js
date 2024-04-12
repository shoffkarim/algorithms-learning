class MaxStack {
  arr
  maxHash
  max
  constructor () {
    this.arr = []
    this.maxHash = []
    this.max = -Infinity
  }

  push(val) {
    this.maxHash.push([val, this.max])

    this.max = Math.max(this.max, val)

    this.arr.push(val)
  }

  pop() {
    if(this.arr.length === 0) {
      console.log('error')
    } else {
      this.arr.pop()
      this.max = this.maxHash[this.maxHash.length - 1][1]
      this.maxHash.pop()
    }
  }

  get_max() {
    if(this.arr.length === 0) {
      console.log('None')
    } else {
      console.log(this.max)
    }
  }
}

const maxStackFunc = () => {
  const stack = new MaxStack()

  stack.get_max()
  stack.pop()
  stack.pop()
  stack.pop()

  stack.push(10)
  stack.get_max()

  stack.push(-9)

}

maxStackFunc()
// https://www.notion.so/shoff/max-1cec56d884d94deebf5e7ec08c0b7708?pvs=4