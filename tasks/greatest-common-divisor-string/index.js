const str1 = "ABCABC"
const str2 = "ABC"

const greatestCommonDivisorOfStrings = (str1, str2) => {
    if(str1 + str2 !== str2 + str1) {
        return ""
    }

    let a = str1.length
    let b = str2.length

    while(b) {
        let temp = b
        b = a % b
        a = temp
    }

    return str1.substring(0, a)
}

console.log(greatestCommonDivisorOfStrings(str1, str2))