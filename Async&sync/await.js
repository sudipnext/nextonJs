let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;


let toppings_choice = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Which topping would you prefer?")

        }, 3000)

    })
}

async function kitchen(){
    console.log("a")
    console.log("b")
    await toppings_choice()
    console.log("c")
    console.log("d")
    console.log("e")
}
kitchen()
console.log("Cleaning the dishes")
console.log("table are cleaning!!")
