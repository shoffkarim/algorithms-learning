const obj = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
}

const calcCombs = (str, res, subset, index) => {
    res.push([...subset])

    for(let i = index; i < str.length; i++) {
        subset.push(obj[i])
        calcCombs(str, res, subset, i + 1)

    }
}

const combinations = (str) => {
    const subset = []
    const res = []
    let index = 0
    calcCombs(str, res, subset, index)
    console.log(res)
}

combinations('23')

/*
    23:
    ad ae af
    bd be bf
    cd ce cf
*/

/*
    92:
    wa wb wc
    xa xb xc
    ya yb yc
    za zb zc
*/

/*
    '923':
    wad wae waf wbd wbe wbf wcd wce wcf
    xad xae xaf xbd xbe xbf xcd xce xcf
    yad yae yaf ybd ybe ybf ycd yce ycf
    zad zae zaf zbd zbe zbf zcd zce zcf
*/


// https://www.notion.so/shoff/34d8ce1b938749a3a7f5122fe10621a1?pvs=4