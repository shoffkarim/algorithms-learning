const array = [4, 3, 5, 1, 9, 7, 2, 8, 6]

const merge = (left, right) => {
  let arr = []

  while(left.length && right.length ){
    if(left[0] <= right[0]){
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }

  }

  return [...arr, ...left, ...right]
}


const mergeSort = (arr) => {
  if(arr.length <= 1){
    return arr
  }
  const half = arr.length / 2
  const left = arr.splice(0, half)
  return merge(mergeSort(left), mergeSort(arr))
}

console.log(mergeSort(array))