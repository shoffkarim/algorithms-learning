const senate = 'RDD'

const predictPartyVictory = (senate) => {
    const rQueue = []
    const lQueue = []

    const length = senate.length

    for(let i = 0; i < length; i++) {
        if(senate[i] === 'R') {
            rQueue.push(i)
        } else {
            lQueue.push(i)
        }
    }

    while(rQueue.length && lQueue.length) {
        let rIndex = rQueue.shift()
        let lIndex = lQueue.shift()

        if(rIndex < lIndex) {
            rQueue.push(rIndex + length)
        } else {
            lQueue.push(lIndex + length)
        }
    }

    if(lQueue.length) {
        return 'Dire'
    } else {
        return 'Radiant'
    }
}

console.log(predictPartyVictory(senate))