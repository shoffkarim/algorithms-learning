const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
// const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const alphabetPath = (letter) => {

    if(alphabet[0] == letter) {
        return letter
    }

    return alphabet.shift() + alphabetPath(letter)
}

const main = (letter) => {
    return alphabetPath(letter)
}

console.log(main('d'))

// https://www.notion.so/shoff/3d6c20a4346c47ae904a6b23c2a59939?pvs=4