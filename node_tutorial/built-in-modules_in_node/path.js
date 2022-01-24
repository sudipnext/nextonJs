const path = require('path')

//prints path separator
console.log(path.sep)
//joins 
console.log(path.join())

const filePath = path.join('/content', 'subfolder', 'text.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)