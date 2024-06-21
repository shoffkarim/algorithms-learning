const chars = ["a","a","a","b","b","a","a"]
// const chars = ["a","a","b","b","c","c","c"]
// const chars = ["a","b","c"]
// const chars = ["p","p","p","p","m","m","b","b","b","b","b","u","u","r","r","u","n","n","n","n","n","n","n","n","n","n","n","u","u","u","u","a","a","u","u","r","r","r","s","s","a","a","y","y","y","g","g","g","g","g"]
const compress = (chars) => {
    let i = 0
    let j = 0

    while(j < chars.length) {
        let letter = chars[j]
        let count = 0

        while(j < chars.length && chars[j] === letter) {
            count += 1
            j+= 1
        }

        chars[i++] = letter

        if(count > 1) {

            for(let digit of count.toString()) {
                chars[i++] = digit
            }
        }
    }

    return i
}

console.log(compress(chars))