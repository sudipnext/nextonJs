const { set } = require("express/lib/application");

let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let order = (fruit_name, call_production) => {

    setTimeout(function () {

        console.log(`${stocks.Fruits[fruit_name]} was selected`)

        // Order placed. Call production to start
        call_production();

    }, 2000)
};

// 2nd Function

let production = () => {
    setTimeout(() => {
        console.log("Production has started!")
        setTimeout(() => {
            console.log("The fruit has been chopped")
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`)
                setTimeout(() => {
                    console.log("Machine was started!")
                    setTimeout(() => {
                        console.log(`${stocks.holder[0]} is selected`)
                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} is selected!`)
                            setTimeout(() => {
                                console.log("The icecream was served")
                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000)
            }, 1000)
        }, 2000)
    }, 0000)
    // blank for now
};

// Trigger 
order(0, production);