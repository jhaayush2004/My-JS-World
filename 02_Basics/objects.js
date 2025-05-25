// Literal and Constructor
// Singleton comes under literal
// Object Literal - This is the simplest and most common way to create an object in JavaScript — using curly braces {}.
// Constructor function - This is a blueprint for creating multiple similar objects. It acts like a "class" (before ES6 classes).
// Singleton Pattern(uses object Literal)
// A singleton ensures that only one instance of an object is created. Useful for shared config, logger, DB connections, etc.

// Literals
const obj = {}
const mySym1 = Symbol("Key1") //making string "key1" a symbol
const mySym2 = Symbol("Key2") // making string "Key2" a symbol

const jsuser = {
    name: "Ayush",
    age: 21,
    [mySym1] : "mykey1", //using symbol as a key
    location: "Patna",
    email: "Ayush@google.com",
    "Full name": "Ayush Shaurya Jha",
    isLoggedIn: false,
    lastLoggedinDays: ['saturday','sunday','monday'],
    JoiningYear: 2024
}
// JS considers all keys as strings by default but then also we can explicitly define it as string like "Full name".
console.log(jsuser);
console.log(jsuser.name) // Ayush
console.log(jsuser['name']) // Ayush
console.log(jsuser[mySym1]) // mykey1
console.log(jsuser["Full name"]) // Ayush Shaurya Jha
//console.log(jsuser.Full Name) //not possible as property "Full name" is explicitly defined as string.

jsuser.email = "shaurya@google.com"
console.log(jsuser.email) // shaurya@google.com

//Object.freeze(): used to freeze object, after this any changes made to object will not reflect in the object
// Object.freeze(jsuser.email) //  Freezing a primitive property itself has no effect on its ability to be reassigned if the parent object is not frozen.
jsuser.email = "ayush@mcsoft.com"
jsuser.name = "Ayush Jha"
console.log(jsuser.email) // ayush@mcsoft.com
console.log(jsuser.name) // Ayush Jha

// IMPORTANT: Define your functions (methods) *before* freezing the object
// Now freezing fully
// Object.freeze(jsuser) //Now we can't modify any of the properties

jsuser.greetingsone = function(){
    console.log("Hello JS User")
}

jsuser.greetingstwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}

console.log(jsuser.greetingsone()) // Hello JS User
console.log(jsuser.greetingstwo()) // Hello JS User, Ayush Jha

console.log(jsuser.greetingstwo); //[Function (anonymous)] //here we are not invoking function islye it is returning whole function itself
console.log(jsuser) /*
{
  name: 'Ayush Jha',
  age: 21,
  location: 'Patna',
  email: 'ayush@mcsoft.com',
  'Full name': 'Ayush Shaurya Jha',
  isLoggedIn: false,
  lastLoggedinDays: [ 'saturday', 'sunday', 'monday' ],
  JoiningYear: 2024,
  greetingsone: [Function (anonymous)],
  greetingstwo: [Function (anonymous)],
  [Symbol(Key1)]: 'mykey1'
}
// Function is anonymous as no name given to it like
Function Declaration (named)
function greet() {
    console.log("Hello!");
}
console.log(greet); // Output: [Function: greet]

// Named Function Expression
const sayHello = function myNamedFunction() {
    console.log("Hello from named expression!");
};
console.log(sayHello); // Output: [Function: myNamedFunction] (or sometimes just 'sayHello' depending on context/engine)
*/

// OBJECT LITERAL
const person = {
    name: "Ayush",
    age: 21,
    greet: function greetfunction(){
        console.log(`Hello JS User, ${this.name}`);
    }
}
person.greet();
//✅ Key Points: It’s a one-off object. You can directly define properties and methods.Great for small, static object structures.

// CONSTRUCTOR FUNCTION
//This is a blueprint for creating multiple similar objects. It acts like a "class" 
/*
✅ Key Points:
Use the new keyword to instantiate.

this refers to the new object being created.

You can create as many instances as needed.
*/

function Person(name, age){
    this.name = name;
    this.age = age,
    this.greet = function(){
        console.log(`Hello JS User, ${this.name}.`);
    }
}

const person1 = new Person("Ayush", 21)
const person2 = new Person("Shaurya", 22)

person1.greet();
person2.greet();
/* When you call a constructor function without new, this inside it refers to the global object (global in Node.js), not a new instance.

So person1 and person2 end up being undefined.

And since person1 is undefined, calling person1.greet() throws an error.
*/
// SINGLETON PATTERN
// A singleton ensures that only one instance of an object is created. Useful for shared config, logger, DB connections, etc.
//  Example using Object Literal (Easiest Singleton):
const Singleton = {
  name: "GlobalInstance",
  log: function () {
    console.log("This is a singleton object.");
  }
};

Singleton.log(); // This is a singleton object.

// Multiple Objects with Object Literal
/* Even though you're using the same structure, every time you define a new object literal, it creates a new, independent object.

✅ Example:
*/
// Create two different objects using literals
const user1 = {
  name: "Ayush",
  greet: function () {
    console.log(`Hello from ${this.name}`);
  }
};

const user2 = {
  name: "Shaurya",
  greet: function () {
    console.log(`Hello from ${this.name}`);
  }
};

// Using the objects
user1.greet(); // Hello from Ayush
user2.greet(); // Hello from Shaurya

console.log(user1 === user2); // ❌ false — different objects
// Each object literal ({}) creates a new instance with its own memory and behavior.

// A singleton is an object that's created once, in one place, and reused everywhere without creating new instances.
// https://chatgpt.com/c/681bbd2f-5f40-8007-b61f-43cf4e4e04f2