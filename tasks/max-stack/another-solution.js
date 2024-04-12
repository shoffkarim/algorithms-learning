class MaxStack {
  arr
  maxHash
  constructor () {
    this.arr = []
    this.maxHash = []
  }

  push(val) {
    if(this.arr.length > 1) {
      const max = this.maxHash[this.maxHash.length - 1]
      this.maxHash.push(Math.max(max, val))
    } else {
      this.maxHash.push(val)
    }

    this.arr.push(val)
  }

  pop() {
    if(this.arr.length === 0) {
      console.log('error')
    } else {
      this.arr.pop()
      this.maxHash.pop()
    }
  }

  get_max() {
    if(this.arr.length === 0) {
      console.log('None')
    } else {
      console.log(this.maxHash[this.maxHash.length - 1])
    }
  }
}

const maxStackFunc = () => {
  const stack = new MaxStack()

  stack.get_max()
  stack.push(7)
  stack.pop()

  stack.push(-2)
  stack.push(-1)
  stack.pop()
  stack.get_max()

  stack.get_max()

}

maxStackFunc()