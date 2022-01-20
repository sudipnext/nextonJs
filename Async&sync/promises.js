let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

let order =(time, work)=>{
    return new Promise( (resolve, reject)=>{
        if(is_shop_open){
            resolve( work());
        }else{
            reject(console.log("Our shop is closed!"));
        }
    })
}