const BASE = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const B = 62

const newUrl = 'https://prakti.kum/'

let length = 1000007
const hashMap = new Map()

const encodeBase62 = (num) => {
  let q = num
  let encoded_string = ''

  while(q > 0) {
    let r = q % B
    q = Math.floor(q / B)

    encoded_string = `${BASE[r]}${encoded_string}`
  }

  return encoded_string
}

const urlShortener = (type, url) => {

  if(type === 'post') {
    const key = encodeBase62(length)
    hashMap.set(key, url)
    length += 1

    return `${newUrl}${key}`
  }


  if(type === 'get') {
    const str = url.slice(newUrl.length)
    if(hashMap.has(str)) {
      return hashMap.get(str)
    }
    return 'error'
  }

}
console.log(urlShortener('post', 'qqqqqq'))
console.log(urlShortener('get', 'https://prakti.kum/4C99'))
console.log(urlShortener('post', 'qw'))
console.log(urlShortener('get', 'https://prakti.kum/4C9B'))


// https://www.notion.so/shoff/URL-4ac74b0150844422b560f7a56f0dcb6d?pvs=4
