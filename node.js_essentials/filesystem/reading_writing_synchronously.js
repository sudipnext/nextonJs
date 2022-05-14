const fs = require('fs');
const path = require('path')


//reading files synchronously
// const data = fs.readFileSync(__dirname + '/example.txt', 'utf8');
// console.log(data)

//writing files synchronously
fs.writeFileSync(__dirname + 'my-new-file.txt', 'Hello Guys', 'utf8')
 