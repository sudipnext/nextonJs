let callback = function(){
    console.log("It has been 5 seconds!");
}
let timeToWait = 5000;

global.setTimeout(callback, timeToWait);