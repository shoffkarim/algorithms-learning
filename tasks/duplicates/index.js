const arr = ['a', 'b', 'c', 'a', 'd']

const removeDuplicates = () => {
    return arr.filter((item, index) => arr.indexOf(item) === index)
}
console.log(removeDuplicates())

// https://www.notion.so/shoff/dc1df138ae174f1787c2c1cbc223c5dc?pvs=4