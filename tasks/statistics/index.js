const statistic = (arr) => {
    let max = -Infinity
    for(let i = 0; i < arr.length - 2; i++){
        const sum = arr[i] + arr[i + 1] + arr[i + 2]
        if(sum === 0) {
            const mult = arr[i] * arr[i + 1] * arr[i + 2]
            if(mult > max) {
                max = mult
            }
        }

    }

    console.log(max)
}

statistic([-2, 1, 1, -1, -2])

// https://www.notion.so/shoff/0fcfcca04cd447fa80cef02eaa263fea?pvs=4