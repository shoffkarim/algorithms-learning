const s = "abc"
const t = "ahbddc"

const isSubsequence = () => {
  let i = 0
  let j = 0

  while(i != s.length) {
    if(s[i] === t[j]) {
      i++
      j++
    } else {
      j++
    }
  }

  return i === s.length
}

console.log(isSubsequence())

// https://www.notion.so/shoff/1b3e4633e24542c8ac853aee18bada7c?pvs=4