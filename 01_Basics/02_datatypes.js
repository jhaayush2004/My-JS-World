"use strict"    /* treat all JS code as newer version, even if we not write it then also it will treat as newer version. 
                "use strict" is a special directive in JavaScript that enables Strict Mode, which helps you write 
                safer, cleaner, and less error-prone code. 
                */
// alert(3+7) //alert() works in the browser environment (like Chrome or Firefox) to show a pop-up message.
           //Node.js, on the other hand, is a server-side JavaScript environment, and it doesn't have access to browser-specific methods like alert().

let name = "Ayush"
let age = 22
let isloggedIn = true
let state = ""
let branch;
// number => 2 ^53
// string => ""
// bigint
// boolean => true/false
// null => standalone value, it denotes empty not undefined. state is not null as its defined as string
// undefined => not defined, eg branch
/* symbol => unique eg: const symbol1 = Symbol('description');
                        const symbol2 = Symbol('description');

                        console.log(symbol1 === symbol2); // false, because they are unique */
// object

console.log(typeof undefined); // undefined
console.log(typeof null); //object
