const array = [4, 3, 5, 1, 9, 7, 2, 8, 6]

const partion = (arr, start, end) => {
  const pivot = arr[end]
  let i = start - 1

  for(let j = start; j < end; j++){
    if(arr[j] <= pivot){
      i++
      const temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  }

  const temp2 = arr[i + 1]
  arr[i + 1] = arr[end]
  arr[end] = temp2

  return i + 1

}

const quickSort = (arr, start, end) => {
  if(start < end){
    const q = partion(arr, start, end)
    quickSort(arr, start, q - 1)
    quickSort(arr, q + 1, end)
  }

  return arr
}


const quickSortSecond = (arr) => {
  if(arr.length <= 1){
    return arr
  }

  const pivot = arr[0]
  const left = []
  const right = []

  for(let i = 1; i < arr.length; i++){
    if(arr[i] < pivot){
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return [...quickSortSecond(left), pivot, ...quickSortSecond(right)]
}
console.log(quickSortSecond(array))