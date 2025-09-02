let score="akshi"

//console.log(typeof score);
//console.log(typeof (score))

let numconversion= Number(score)
//console.log(typeof numconversion);
//console.log(numconversion);

// "33"-> 33
// "akshi" -> NaN
// true -> 1 false ->0

let IsLoggedIn=""

let bolconversion= Boolean(IsLoggedIn)
//console.log(bolconversion)

//jb hum bool me convert krte hai and pass any value then true, 0 and empty then false

let id = true
let strconv = String(id)
console.log(strconv)
console.log(typeof strconv)

// ************OPERATIONS************

let value = 3
let negValue = -value //simply negating the value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2); ******basic arithmatic operations
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "are you okay bro"
let str2 = " my handsome bro"

let str3 = str1 + str2
console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);         left to right assign hogi data type, agr phle string h then string else number depending on the situation
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);  increment operation
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 // never do this, dec readability

let gameCounter = 100
++gameCounter;
console.log(gameCounter);