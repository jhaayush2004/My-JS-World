let score = "33"

console.log(typeof score);  // string
console.log(typeof(score)); // string

let valueInNumber = Number(score)
console.log(typeof valueInNumber) // number

//Edge Case
// If score = "33ab", then valueInNumber equals NaN and its type is still number.
// If score = nan, then valueInNumber=0 and type is number.
// If score = undefined, then valueInNumber=Nan and type is number.
// If score = true/false, then valueInNumber=1/0 and type is number.

let isLoggedIn = -98 // true
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 0/1 => false/true
// ""  => false
//"abc" =>true
// Nan ==> false

let someNumber = 33
let StringNumber = String(someNumber)
console.log(StringNumber)          // 33
console.log(typeof(StringNumber))  // string