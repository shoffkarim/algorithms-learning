const kthGrammar = (n, k) => {
    let str = '0'

    let i = 1

    while(i < n) {
        let temp = ''
        for(let j = 0; j < str.length; j++) {
            if(str[j] === '0') {
                temp = `${temp}01`
            } else if (str[j] === '1') {
                temp = `${temp}10`
            }
        }

        str = temp
        i++
    }
    console.log(str)

    return str.charAt(k - 1)
}


const kthGrammarSearch = (n, k) => {
    let cur = 0

    let left = 0
    let right = 2**(n-1)

    for(let i = 0; i < n - 1; i++) {
        let mid = Math.floor((left + right) / 2)

        if(k <= mid) {
            right = mid
        } else {
            left = mid + 1
            cur = cur === 0 ? 1 : 0
        }
    }

    return cur
}

console.log(kthGrammarSearch(2, 2))

// https://www.notion.so/shoff/45080269b2f846629307ab8cc36d1058?pvs=4