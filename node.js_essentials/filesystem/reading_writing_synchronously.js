const fs = require('fs');
const path = require('path')


//reading files synchronously
// const data = fs.readFileSync(__dirname + '/example.txt', 'utf8');
// console.log(data)

//writing files synchronously
// fs.writeFileSync(path.join(__dirname,'hi.txt'), 'Hello Guys', 'utf8')
// fs.writeFileSync(path.join(__dirname, 'hi.txt'), 'GoodBye', 'utf8')
//Appending the content to the file
//  fs.appendFileSync(path.join(__dirname, 'hi.txt'), JSON.stringify({name: 'John'}), 'utf8')


// fs.unlinkSync(path.join(__dirname, 'hi.txt'))  
// fs.mkdirSync(path.join(__dirname, 'test dir'))