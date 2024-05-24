const arr = [3, 5, 1, 4, 2]

const heapify = (heap, i, heapSize) => {
  let left = 2 * i + 1
  let right = 2 * i + 2

  let largest = i

  if(left < heapSize && heap[left] > heap[largest]) {
    largest = left
  }

  if(right < heapSize && heap[right] > heap[largest]) {
    largest = right
  }

  if(largest !== i) {
    [heap[i], heap[largest]] = [heap[largest], heap[i]]

    heapify(heap, largest, heapSize)
  }
}

const createHeap = (arr) => {
  let heap = [...arr]

  for(let i = Math.floor(heap.length / 2); i >= 0; i--) {
    heapify(heap, i, heap.length)
  }

  return heap
}

const heapSort = (arr) => {
  let heap = createHeap(arr)

  let sortedArr = []

  while(heap.length) {
    sortedArr.unshift(heap.shift())

    heap = createHeap(heap)
  }

  return sortedArr
}

console.log(heapSort(arr))


// https://www.notion.so/shoff/283b95665c3f4ace8ade5e4cae5b3b62?pvs=4