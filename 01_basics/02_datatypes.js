"use strict"; // treat all js code as newer version

//alert("hello") //wont work as this works only on browser not nodejs
//alert(3+3);  // wont work

// console.log(3+3) //console.log(2+2); console.log("akshi") we can write like this too
// console.log("akshi") // but it will affect readibility so we avoid it

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

// console.log(typeof"akshi")
// console.log(typeof undefined) // type is undefined
// console.log(typeof null) // type is object


//***** types of data on the level of abstraction******
// primitive(stack) -> string, bool, number, null, undefined, symbol, bigint
const score = 100 //number
const scoreValue = 100.3 //number

const isLoggedIn = false //bool
const outsideTemp = null // null
let userEmail; //undefined

const id = Symbol('123') //symbol
const anotherId = Symbol('123') //tho symbol of both are same but they are not equal

console.log(id === anotherId);//return false

// non premitive/ reference(heap) -> array, objects, functions
const gmmtv = ["Pond", "Phuwin", "Joong", "Dunk"]; // array
let myObj = {
    name: "Polcasan",      //obj
    age: 3,
}

const myFunction = function(){            //func
    console.log("Hello world");
}

// console.log(gmmtv);

//types of memory-> stack(primitive), heap(non-primitive)

let yt="gmmtvofficial.com"
let yt2= yt
yt2="wetvofficial.com"  //stack me uski copy dete hain
/*
yt2(wetv)
yt2(yt)
yt(gmm)
to stack me jo latest yt2 ki value hogi vo return ho jayegi ie. wetv as a copy
*/ 
console.log(yt)
console.log(yt2)

let user1={
    name: "Pond",
    faen: "Phuwin"
}
let user2= user1;
user2.faen= "phuphu" //idhr ye stack me nahi h so copy nahi dega, instead ye reference dega ki user2 me jo update kra hai faen ka vo reference ki vjh se 1 me bhi hoga 
console.log(user1);
console.log(user2);