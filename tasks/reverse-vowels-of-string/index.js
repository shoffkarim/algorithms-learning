const s = 'leetcode'
const alphabet = 'aeiouAEIOU'
const reverseVowels = (s) => {
    let vowels = []

    let arr = s.split('')

    let left = 0
    let right = arr.length - 1

    while(left < right) {
        if(!alphabet.includes(arr[left])){
            left++
        } else if (!alphabet.includes(arr[right])) {
            right--
        } else {
            let temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
            left++
            right--
        }
    }
    return arr.join('')
}

console.log(reverseVowels(s))