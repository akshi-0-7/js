"use strict"; // treat all js code as newer version

//alert("hello") //wont work as this works only on browser not nodejs
//alert(3+3);  // wont work

console.log(3+3) //console.log(2+2); console.log("akshi") we can write like this too
console.log("akshi") // but it will affect readibility so we avoid it

let name = "Akshi" //string
let age = 22 //number
let IsLoggedIn= true //boolean
let state; //undefined

// data types
/* number -> 2^52/53 ki range tk
bigint -> number ki range se jada mostly jaha large number use hote h like in trade etc
string -> ""
boolean -> true/false
null -> standalone value, ye empty show krta hai ki value hai he ni
undefined -> jb hum define he na kare, koi value ho skti h unlike null
symbol -> unique
*/


// object

console.log(typeof"akshi")
console.log(typeof undefined) // type is undefined
console.log(typeof null) // type is object


//***** types of data on the level of abstraction******
// premitive -> string, bool, number, null, undefined, symbol, bigint
const score = 100 //number
const scoreValue = 100.3 //number

const isLoggedIn = false //bool
const outsideTemp = null // null
let userEmail; //undefined

const id = Symbol('123') //symbol
const anotherId = Symbol('123') //tho symbol of both are same but they are not equal

console.log(id === anotherId);//return false

// non premitive/ reference -> array, objects, functions
const gmmtv = ["Pond", "Phuwin", "Joong", "Dunk"]; // array
let myObj = {
    name: "Polcasan",      //obj
    age: 3,
}

const myFunction = function(){            //func
    console.log("Hello world");
}

console.log(gmmtv);