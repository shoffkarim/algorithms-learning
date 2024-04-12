class StackSet {
  hash
  arr
  constructor () {
    this.arr = []
    this.hash = new Set()
  }

  push(val) {
    if(!this.hash.has(val)) {
      this.arr.push(val)
      this.hash.add(val)
    }

  }

  pop() {
    if(this.arr.length === 0) {
      console.log('error')
    } else {
      this.hash.delete(this.arr.pop())
    }
  }

  peek() {
    if(this.arr.length === 0) {
      console.log('error')
    } else {
      console.log(this.arr[this.arr.length - 1])
    }
  }

  size() {
    if(this.arr.length === 0) {
      console.log('error')
    } else {
      console.log(this.hash.size)
    }
  }
}

const stackSetFunc = () => {
  const stack = new StackSet()

  stack.push(1)
  stack.pop()
  stack.push(2)
  stack.size()
  stack.push(1)
  stack.push(2)
  stack.pop()
  stack.push(2)
  stack.peek()
  stack.pop()

}

stackSetFunc()

// https://www.notion.so/shoff/964c7683e70b4b439d4cfad5452f6b09?pvs=4