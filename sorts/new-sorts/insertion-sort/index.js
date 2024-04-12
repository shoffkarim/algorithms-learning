const array = [4, 3, 5, 1, 9, 7, 2, 8, 6]

const insertionSort = () => {
  let j
  for(let i = 1; i < array.length; i++){
    const key = array[i]
    j = i - 1

    while(j >= 0 && array[j] > key){
      array[j+1] = array[j]
      j = j - 1
    }
    array[j + 1] = key
  }
  return array
}


const insertionSortSecond = () => {
  let temp
  for (let i = 1; i < array.length; i++){
    temp = array[i]
    for(let j = i - 1; j >= 0; j--){
      if(array[j] < temp){
        break;
      }

      array[j + 1] = array[j]
      array[j] = temp
      console.log(array)
    }
  }
  return array
}

console.log(insertionSortSecond())
