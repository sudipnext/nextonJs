const {readFileSync, writeFileSync} = require('fs')
// const fs = requier('fs') --2nd way to do same thing
console.log('start')
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')
console.log(first, second)

writeFileSync('./content/subfolder/result.txt', `here is the result ${first} + ${second}`, {flag: 'a'}) // flag a does append 
console.log('done with the tast')
console.log('starting new one')

//going synchronously step by step this not should be done