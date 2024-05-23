let score = "abc";
/*
score = null -> output = 0
score = undefined -> output = NaN
score = string -> output = NaN
score = true -> output = 1
score = false -> output = 0

*/
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);// NaN means not a number

let loggedIn = null;
/*
empty string = false
string = true
1 = true
0 = false
null = false

*/
let valu = Boolean(loggedIn)
console.log(valu);