import fs from 'fs'
fs.writeFile('test.txt', 'Hello World', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
