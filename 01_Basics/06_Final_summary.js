// Data Types is divided on the basis of how they are stored in memory and how are they accesed.
//On the basis of above two categorizations done: 1. primitive(call by value types) 2. Non-Primitive(reference types)

//Primitive: string, Number, Null, Undefined, Symbol, BigInt
//Reference Type: arrays, objects, functions

// JS is dynamic type language as const a = 100 or true or anything, we don't defined data type, it identified it dynamically.
// No float or decimals, all are numbers, eg 100, 123.45, etc

const BigNumber = 345623567n // n is used at last to make it BigInt type.

//Arrays
const Heros = ["Ayush", "Shaurya", "Jha"]

// Objects, anything in {}, represent whole as object and it can be assigned to variable

let myObj = {
            name: "Ayush",
            age: 22
}

//functions, it too can be assigned to variable

const myFunct = function(){
    console.log("Ayush Shaurya Jha");
}                                        // myFunct() ---> output: Ayush Shaurya Jha

// DataType Null -->Object, myFunct --> Function(called as object function), Undefined-->undefined, bigInt--> Undefined, symbol-> symbol
// Datatype of all non primitive type is object, but for function its called as object function.