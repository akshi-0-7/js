// basic comparisions
// console.log(2>1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2">1);
// console.log("02">1); //js automatically convert string to number here

// console.log(null>0);
// console.log(null==0); //null is taken as NaN or 0 depends upon comparision and equality
// console.log(null>=0);

console.log(undefined>=0);
console.log(undefined>0); //in case of undefined it will always give false as its value is yet to be decided

// === it is strict comparision, it will pause the conversion within the log and will compare the actual values

console.log("2"===2); // returns false bcz string != number
// in == it will convert string to a number but here it is a strict check so returning false

