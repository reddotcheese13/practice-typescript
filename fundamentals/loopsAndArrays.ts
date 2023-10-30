for (let i = 0; i < 5; i++) {
  console.log(`number is ${i}`);
}
let reviews: number[] = [3, 5, 2.5, 1];
reviews.push(4);
reviews.push(5);
let sum: number = 0;
for (let i = 0; i < reviews.length; i++) {
  console.log(`review is ${reviews[i]}`);
  sum += reviews[i];
}
let average: number = sum / reviews.length;
console.log(`average is ${average}`);

let sports: string[] = ["cricket,football", "baseball", "rugby"];
sports.push("8-ball-pool");
for (let sport of sports) {
  console.log(`sport is ${sport}`);
}
