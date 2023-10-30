for (var i = 0; i < 5; i++) {
    console.log("number is ".concat(i));
}
var reviews = [3, 5, 2.5, 1];
reviews.push(4);
reviews.push(5);
var sum = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log("review is ".concat(reviews[i]));
    sum += reviews[i];
}
var average = sum / reviews.length;
console.log("average is ".concat(average));
var sports = ["cricket,football", "baseball", "rugby"];
sports.push("8-ball-pool");
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var sport = sports_1[_i];
    console.log("sport is ".concat(sport));
}
