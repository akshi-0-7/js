const name="akshi"
const favship="ccww"

//console.log(name + favship + "ppw"); //outdated method

console.log(`My name is ${name} and my favourite ship is ${favship}`); // modern representation, string manipulation

const gameName = new String('pond-phuwin-permpoon')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   joong    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://joong.com/hjoong%20archen"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

