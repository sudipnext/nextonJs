let ppl = [
  { name: "Anthony", score: 2 },  
  { name: "Winnie", score: 2 },
  { name: "Fred", score: 2 },
  { name: "Winnie", score: 2 },
  { name: "Fred", score: 2 },
  { name: "Anthony", score: 2 },
  { name: "Winnie", score: 2 },
];
function countScores(people) {
  // Your code here
  const count = {};
  for (const person of people) {
    const { name, score } = person;

    if (!count[name]) {
      count[name] = 0;
    }
    count[name] += score;
  }
  return count;
}
console.log(countScores(ppl));
