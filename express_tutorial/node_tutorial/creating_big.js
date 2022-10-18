const { writeFileSync } = require('fs')
for(let i=0; i<10000; i++){
    writeFileSync('./built-in-modules_in_node/content/big.txt', `hello world ${i}\n`, {flag: 'a'})
}