const str = 'zzzzzz'

const repeat = (str) => {
  let count = 1
  for(let i = 1; i < str.length / 2; i++) {
    let temp = str.substring(0, i)
    for(let j = i; j < str.length; j += temp.length) {
      let comparative = str.substring(j, j + temp.length)

      if(temp === comparative) {
        count++
        if(j + temp.length === str.length) {
          return count
        }
      } else {
        count = 1
        break
      }

    }
  }

  return count
}

console.log(repeat(str))

// https://www.notion.so/shoff/347ac9a761414c1e903603c8c81c4952?pvs=4