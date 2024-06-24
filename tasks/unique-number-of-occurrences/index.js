// const arr = [1, 2, 2, 1, 1, 3]
const arr = [1, 2]

const uniqueOccurrences = (arr) => {
  const hash = new Map()

  for(let i = 0; i < arr.length; i++) {
    if(hash.has(arr[i])) {
      hash.set(arr[i], hash.get(arr[i]) + 1)
    } else {
      hash.set(arr[i], 1)
    }
  }


  return new Set([...hash.values()]).size === hash.size
}

console.log(uniqueOccurrences(arr))