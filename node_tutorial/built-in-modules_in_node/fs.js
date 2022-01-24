const {readFileSync, writeFileSync} = require('fs')
// const fs = requier('fs') --2nd way to do same thing

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')
console.log(first, second)

writeFileSync('./content/subfolder/result.txt', `here is the result ${first} + ${second}`, {flag: 'a'}) // flag a does append 