//we have to call production whenever the order is received.
let order=(call_production) =>{
    console.log("Order placed, please call production")
    setTimeout(() => {
        console.log("Sending...")
        call_production();
    }, 1000);
    

};

let production =() =>{
    console.log("Thanks, i will start production now, starting....")
}
order(production);