let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(() => {
                resolve(work());

            }, time)
        } else {
            reject(console.log("Our shop is closed!"));
        }
    })
}


order(2000, ()=>console.log(`${stocks.Fruits[0]} was selected!`))

.then(()=>{
    return order(0000, ()=>console.log("Production has started!"))
})

.then(()=>{
    return order(2000, ()=>console.log("The fruit was chopped!"))
})

.then(()=>{
    return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added!`))
})
.then(()=>{
    return order(1000, ()=>console.log(`MACHINE IS STARTED!`))
})
.then(()=>{
    return order(1000, ()=>console.log(`${stocks.holder[0]} was placed!`))
})
.then(()=>{
    return order(3000, ()=>console.log(`${stocks.toppings[0]} is added!`))
})
.then(()=>{
    return order(2000, ()=>console.log(`ICECREAM IS SERVED!`))
})
.catch(()=>{
    console.log("customer left!")
})
.finally(()=>{
    console.log("Day ended, Shop is closed!")
})

//Try commenting up and running below to get a grasp of async function
// async function order(){
//     try{
//         await abc;
//     }
//     catch(error){
//         console.log("abc doesn't exits!", error)
//     }

//     finally{
//         console.log("Runs code anyways")
//     }
// }

order()
// .then(()=>{
//     console.log("what?")
// })