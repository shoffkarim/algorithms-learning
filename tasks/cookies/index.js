const children = [1, 2, 3, 6]
const cookies = [1, 2, 3, 5]

const distributeCookies = () => {
    let i = 0
    let j = 0
    let res = 0
    while(i < children.length && j < cookies.length) {
        if(cookies[j] >= children[i]) {
            i++
            j++
            res += 1
        } else {
            j++
        }
    }

    return res
}

console.log(distributeCookies())

// https://www.notion.so/shoff/4af7cc06178f4edd886cc952f1595ef5?pvs=4
