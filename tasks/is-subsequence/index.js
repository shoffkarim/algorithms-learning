const s = "abc"
const t = "ahbgdc"

const isSubsequence = (s, t) => {
  let i = 0
  let j = 0

  while(j < t.length) {
    if(t[j] === s[i]) {
      i++
      j++
    } else {
      j++
    }
  }

  return i === s.length
}

console.log(isSubsequence(s, t))