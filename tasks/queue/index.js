class MyQueue {
  arr
  constructor() {
    this.arr = []
  }

  push(val) {
    this.arr.unshift(val)
  }

  pop() {
    if(this.arr.length === 0) {
      console.log('None')
    } else {
      console.log(this.arr.pop())
    }
  }

  peek() {
    if(this.arr.length === 0) {
      console.log('None')
    } else {
      console.log(this.arr[this.arr.length - 1])
    }
  }

  size() {
    console.log(this.arr.length)
  }
}

const queueFunc = () => {
  const queue = new MyQueue()

  queue.push(4)
  queue.pop()
  queue.push(-1)
  queue.size()
  queue.push(0)
  queue.size()
  queue.push(-4)
  queue.size()
  queue.pop()
  queue.peek()
}

queueFunc()

// https://www.notion.so/shoff/2dca93fbf1054907ae5d3d28b9638603?pvs=4