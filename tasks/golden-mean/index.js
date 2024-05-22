const nums1 = [0,0,0,1,3,3,5,10]
const nums2 = [4,4,5,7,7,7,8,9,9,10]

const goldenMean = () => {
    let A = nums1
    let B = nums2

    const total = nums1.length + nums2.length
    const half = Math.floor(total / 2)

    if(B.length < A.length) {
        [A, B] = [B, A]
    }

    let l = 0
    let r = A.length - 1

    while (true) {
        let i = Math.floor((l + r) / 2)
        let j = half - i - 2

        let Aleft = i >= 0 ? A[i] : -Infinity
        let Aright = i + 1 < A.length ? A[i + 1] : Infinity

        let Bleft = j >= 0 ? B[j] : -Infinity
        let Bright = j + 1 < B.length ? B[j + 1] : Infinity

        if(Aleft <= Bright && Bleft <= Aright) {
            if(total % 2) {
                return Math.min(Aright, Bright)
            }
            return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2
        } else if (Aleft > Bright) {
            r = i - 1
        } else {
            l = i + 1
        }

    }
}

console.log(goldenMean())

// https://www.notion.so/shoff/4cc040dd7b84472ea23d2e55cf6ae077?pvs=4