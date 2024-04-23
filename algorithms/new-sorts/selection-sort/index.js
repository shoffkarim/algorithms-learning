const array = [4, 3, 5, 1, 9, 7, 2, 8, 6]

const selectionSort = () => {
  for(let i = 0; i < array.length; i++){
    let min = i
    for(let j = i + 1; j < array.length; j++){
      if(array[j] < array[min]){
        min = j
      }
    }
    if(min != i){
      const temp = array[min]
      array[min] = array[i]
      array[i] = temp
    }
  }

  return array
}

console.log(selectionSort())