const {createReadStream} = require('fs');
const stream = createReadStream('./built-in-modules_in_node/content/big.txt', {highWaterMark:90000});//highwatermark controls the chunck of data we want in streams

stream.on('data', (result) =>{
    console.log(result)
})
stream.on('error', (err)=>{
    console.log(err)
})