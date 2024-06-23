// const s = 'abciiidef'
// const k = 3

// const s = "weallloveyoudc"
// const k = 7

const s = "bsmaxbjernmlhsxkahyngbwteprzbnzjltjj"
const k = 6


const maxVowels = (s, k) => {
  let max = 0
  const vowels = 'aeiou'

  for(let i = 0; i < k; i++) {
    if(vowels.includes(s[i])) {
      max++
    }
  }

  let tempMax = max
  for(let i = k; i < s.length; i++) {
    if(vowels.includes(s[i])) {
      tempMax++
    }

    if(vowels.includes(s[i-k])) {
      tempMax--
    }

    max = Math.max(max, tempMax)
  }

  return max
}

console.log(maxVowels(s, k))