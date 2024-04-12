const str = 'abcabc'

const findUniqSubstr = () => {
  let length = 0
  for(let i = 0; i < str.length; i++) {
    let temp = str.substring(i, i + 1)
    for(let j = i; j < str.length; j++){
      if(!temp.includes(str[j])) {
        temp += str[j]
      }
    }
    length = Math.max(temp.length, length)
  }

  return length
}

console.log(findUniqSubstr())

// https://www.notion.so/shoff/441a52ec7af147a094ace36fa56abc2d?pvs=4