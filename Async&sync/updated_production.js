let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 let order = (fruit_name, call_production) =>{

    setTimeout(function(){
  
      console.log(`${stocks.Fruits[fruit_name]} was selected`)
  
  // Order placed. Call production to start
  call_production();
    
    },2000)
  };
  
  // 2nd Function
  
  let production = () =>{
      setTimeout(()=>{
          console.log("Production has started!")

      },0000)
    // blank for now
  };
  
  // Trigger 👇
  order(0, production);