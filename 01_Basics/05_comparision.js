console.log(2>3) //false
console.log(2>=1) //true
console.log(2!=1) // true

console.log('ayush'=='ayush')// true

console.log('02' > 1) //true, as js converst string "02" to number 2

console.log( null > 0 ) //false
console.log( null == 0 ) //false
console.log( null >= 0 ) //true, as null is converted to zero. But when undefined is placed at null, all three results are false.

// comparision check ==, it checks only value equality and not data type equality
// strict check ===, it checks values as well as data type equality

console.log( "02" === 2 ) // false

// So, we should avoid comparisions betwenn different data types due to unpredictable or inconsistant results and should always go for simple and clean code.