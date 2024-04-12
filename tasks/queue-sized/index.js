class MyQueueSized {
  arr
  sized
  constructor(sized) {
    this.arr = []
    this.sized = sized
  }

  push(val) {
    if(this.arr.length === this.sized) {
      console.log('error')
    } else {
      this.arr.unshift(val)
    }

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
  const queue = new MyQueueSized(1)

  queue.push(1)
  queue.size()
  queue.push(3)
  queue.size()
  queue.push(1)
  queue.pop()
  queue.push(1)
  queue.pop()
  queue.push(3)
  queue.push(3)
}

queueFunc()

// https://www.notion.so/shoff/75649559973847438876bf3f26f97a15?pvs=4