// //synchronous
//==>This is the system where the code runs from top to bottom
//in a manner such that it stops whenever anything come between
//it, it's like synchronous system.

// console.log("I am a music man")

// console.log("I can play the piano")

// console.log("pi pi piano")

// console.log("Hello")

// console.log("boss! are you listening?")

//asynchronous
//==>This is the system where the code runs simultaneously
//so called asynchronous system.

//INTRO TO TIMEOUT
//settimeout gets two parameters first the function and the another one
//as time it's a asynchronous function.


console.log("I am a music man")
setTimeout(()=>{
    console.log("pi pi piano")
}, 5000)
console.log("I can play the piano")


console.log("Hello")

console.log("boss! are you listening?")

//in the result as we can se the timeout waits for 5secs before
//actually executing that's called asynchronous.