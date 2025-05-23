/*********Stack and Heap***** */

// two types of memory we have , 1. stack   2. heap
//Stack: Primitive; Heap: Non primitive

//Stack: Primitive - a copy is created
let myYoutubeName = "hiteshchoudhary"
let anotherName = myYoutubeName // a copy of myYoutubeName is given to anotherName as reference
console.log(anotherName);

anotherName = "chaiaurcode"
console.log(myYoutubeName);  // hiteshchoudhary
console.log(anotherName);    // chaiaurcode

//Heap: Non primitive - reference is used, since refrence is used changes will reflect in original also. (When you take refrence back from heap , you dont get a copy, you get refrence of original value)

let myObj1 = {
    name: "Ayush",
    age: 22
}

let myObj2 = myObj1 // myObj2 also gets same reference where myObj1 points.
myObj2.age = 20

console.log(myObj1.age) // 20
console.log(myObj2.age) // 20

/*
1. Primitive Data Types
These are basic, immutable (cannot be changed) values.

Type	Example
String	"hello", 'world'
Number	42, 3.14, -7
Boolean	true, false
Null	null
Undefined	undefined
Symbol	Symbol("id")
BigInt	12345678901234567890n

💡 Primitive values are compared by value, not by reference.

🧱 2. Non-Primitive (Reference) Data Types
These are complex and mutable. Stored and compared by reference.

Type	Example
Object	{ name: "Ayush", age: 21 }
Array	[1, 2, 3, 4]
Function	function() { console.log("Hello"); }
Date	new Date()
RegExp	/abc/

*/