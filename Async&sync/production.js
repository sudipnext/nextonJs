//we have to call production whenever the order is received.
let stocks = {
    Fruits: [ "Strawberry", "Apple", "banana", "Grapes", "Vanilla"]
}
console.log("Which flavour you want to order?")
for(let i=0; i< stocks.Fruits.length; i++){
    
    console.log(stocks.Fruits[i]);
}
let order=(Fruit_name, call_production) =>{
    setTimeout(() => {
        console.log(`Choosing stocks ${stocks.Fruits[Fruit_name]}`)
        // Fruit_name();
    }, 2000);
    console.log("Order placed, please call production")
    setTimeout(() => {
        console.log("Sending...")
        call_production();
    }, 2000);
};

let production =() =>{
    console.log("Thanks, i will start production now, starting....")
}
order("Strawberry", production);