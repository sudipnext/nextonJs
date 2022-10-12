let ppl = [
  { name: "Anthony", score: 2 },  
  { name: "Winnie", score: 2 },
  { name: "Fred", score: 2 },
  { name: "Winnie", score: 2 },
  { name: "Fred", score: 2 },
  { name: "Anthony", score: 2 },
  { name: "Winnie", score: 2 },
];


// let obj2 = {};
// for (let i = 0; i < ppl.length; i++) {
//   let count=0
//   let temScore=0
//   for (let j = 0; j < i; j++) {
//     let temp = ppl[i];
//     let temp2 = ppl[j];
//     if (temp.name === temp2.name) {
//       count++;
//       temScore = temp.score + temp2.score;
//       if(count > 1){
//         temScore += temp2.score
//       }
//       obj2[temp.name] = temScore;
//     }
//   }
// }
// console.log(obj2);

// // console.log(countScores(ppl));

// //{anthony = 2, fred: 10, winnie:12}