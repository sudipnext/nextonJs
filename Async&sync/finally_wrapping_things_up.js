let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

function time(ms){
    return new Promise((resolve, reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms)
        }
        else{
            reject(console.log("Shop is closed!"))
        }
    })
}
async function kitchen(){
    try{

        await time(2000);
        console.log(`${stocks.Fruits[0]} is picked`);

        await time(0000);
        console.log("Start the production");

        await time(2000);
        console.log("Cut the fruit!");

        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} are added!`);

    }
    catch(error){
        console.log("Customer left",error)

    }
    finally{
        console.log("Thanks for coming! unfortunately shop is closed!")

    }
}
kitchen()