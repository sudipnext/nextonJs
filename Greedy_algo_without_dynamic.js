function bestcombination(num, coins = [25, 10, 5, 1]) {
    let empt = [];
    for (let i = 0; i < coins.length; i++) {
      let currentVal= coins[i]
      let temp = 0;
      let rem = 0;
      if (num >= currentVal) {
        temp = Math.floor(num / currentVal);
        for (let i = 0; i < temp; i++) {
          empt.push(currentVal);
        }
        rem = num % currentVal;
        num = rem;
        if(rem < Math.min(...coins) && rem !=0){
          return null
        }
      }
    }
    return empt;
  }
//   console.log(bestcombination(21)); // [1, 10, 10]
//   console.log(bestcombination(75)); // [25, 25, 25]
//   console.log(bestcombination(33, [15, 3])); // [3, 15, 15]
//   console.log(bestcombination(34, [15, 3])); // null
//   console.log(bestcombination(24, [10, 7, 1])) // [7, 7, 10]