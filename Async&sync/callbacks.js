function one(call_two){
    call_two();
    console.log("Step 1 complete, please call step two!");
    // call_two();
}
function two(){
    console.log("Step 2")
}

one(two);
//See how the argument does the magic when called above and below!
