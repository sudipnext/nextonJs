

function soundMaker(sound, times){
    //closure function is makeSound
    function makeSound(){
        console.log(`${sound}`);
    }
    for(let i=0; i< times; i++){
        makeSound();

    }
}
soundMaker("Whooooooo", 18);

// function summation(){
//     let arr=[1,2,3,4]
//     let sum=1;
//     function summer(){
//         for(i=0; i<arr.length; i++){
//             sum *= arrr[i];
//         }
//     }
//     summer();
//     return sum;
// }
// console.log(summation([1,2,3,4]));
/*
closure function is the function which is called inside
the parent function it can acess whatever the values and
parameters which are predefined before it.

*/