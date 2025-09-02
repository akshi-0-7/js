const accountId = 6552 //const will remain constant throughout, u cant change its value
let accountEmail= "jain.akshigr@gmail.accountEmail"
var accountPass= "1234"
accountCity="Panipat" //we can also define a variable like this but we shouldnt
let accountState; //we have not assign any value here, so it will output undefined

// accountId = 6462 // not allowed to reassign the const value

/*
prefer not to use var because it doesnt have scope {} these braces are called scope
also we can define the variables in 3 types using const, var and let
nowadays we use let to define a non-constant value
*/
accountEmail="akshi@gmail.com"
accountPass="234"
accountCity="kanpur"
console.log(accountId)
console.table([accountEmail,accountId,accountPass,accountCity,accountState]);