const fs = require('fs')
const path = require('path')



// fs.readFile(path.join(__dirname, 'example.txt'), 'utf8', (err, data) => {
//     console.log("Done!"+ data)
// })
fs.writeFile(path.join(__dirname, 'hi.txt'), 'Hello boy', (err)=>{
    console.log("Done")
})