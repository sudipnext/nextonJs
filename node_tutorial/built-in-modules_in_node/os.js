const os = require('os')

//using built-in module

//user info
console.log(os.userInfo())
//running time of os in minute divided by 60
console.log(os.uptime()/60)
//log the homedirectory
console.log(os.homedir())

//system
const currentOs={
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOs)