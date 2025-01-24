const accountId = 12244
let accountEmail = "Kiran@google.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState //it will give undefined as output

// const(constant) can't be changed or not allowed
// accountId = 2

accountEmail = "kp@google.com"
accountPassword = "21311"
accountCity = "jaipur"


console.log(accountId)

// console.table gives output in form of table with index and values like 0 = 12244 and so on
console.table([ accountId, accountEmail, accountPassword, accountCity, accountState])

/*
1) 'const' value can't be changed
2) Prefer not to use 'var' because of issue in block scope and functional scope
(when ever a user changes a variable value it gets changed in all other files )
3) 'let' is mostly used
4) if no value is assigned to a variable then it will print undefined
*/
