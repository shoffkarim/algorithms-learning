const array = [4, 3, 5, 1, 9, 7, 2, 8, 6]

const bubbleSort = () => {
  for(let i = 0; i < array.length - 1; i++){
    for(let j = 0; j < array.length - i - 1; j++){
      if(array[j] > array[j + 1]){
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}

console.log(bubbleSort())