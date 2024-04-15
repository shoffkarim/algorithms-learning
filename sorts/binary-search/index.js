const initArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const binarySearch = (array, number) => {
  let start = 0
  let end = array.length - 1
  while(start <= end) {
    let middle = Math.floor((start + end) / 2)
    console.log(start, end, middle, array[middle])
    if(array[middle] == number) {
      return `Success: ${middle}`
    }
    if(array[middle] > number) {
      end = middle - 1
    }
    else start = middle + 1
  }
  return "nope"
}

console.log(binarySearch(initArray, 3))