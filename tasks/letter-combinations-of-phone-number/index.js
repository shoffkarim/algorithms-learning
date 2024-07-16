const digitToChar = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'qprs',
    '8': 'tuv',
    '9': 'wxyz',
}

const digits = '23'

const letterCombintations = (digits) => {
    const res = []

    const backtrack = (i, currStr) => {
        if(currStr.length === digits.length) {
            res.push(currStr)
            return
        }

        for(let c of digitToChar[digits[i]]) {
            backtrack(i + 1, currStr + c)
        }
    }

    if(digits.length) {
        backtrack(0, '')
    }

    return res
}

console.log(letterCombintations(digits))