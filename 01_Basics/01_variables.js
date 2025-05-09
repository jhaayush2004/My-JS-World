const accountID = 144553
let accountEmail = 'ayush@gmail.com'
var accountPassword = "12345"
accountCity = "Jaipur"
let accountholder;
// accountID = 2 // not allowed as its constant

accountEmail = "KingShaurya@yahoo.com"
accountPassword = "01498"
accountCity = "Bengaluru"

console.log(accountEmail)

console.table([accountEmail, accountID, accountPassword, accountCity, accountholder])


// OUTPUT 
/* 
KingShaurya@yahoo.com
┌─────────┬─────────────────────────┐
│ (index) │ Values               
   │
├─────────┼─────────────────────────┤
m' │
│ 1       │ 144553                  │
│ 2       │ '01498'                 │
│ 3       │ 'Bengaluru'             │
│ 4       │ undefined               │
└─────────┴─────────────────────────┘
*/
// we can or cannot use semi-colon, no issues either way.
// "Let" is block scoped and "Var" is function scope, and due to these problems of function scope with Variables, we mostly use let and const and not Var.
// ChatGPT: https://chatgpt.com/c/681bbd2f-5f40-8007-b61f-43cf4e4e04f2