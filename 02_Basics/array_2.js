const marvelHeros = ['thor', 'ironman', 'spiderman'] 
const dcHeros = ['superman', 'flash', 'batman'] 

marvelHeros.push(dcHeros) 
console.log(marvelHeros) // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvelHeros[3][1]) // flash

//concat(): concates two or more arrays and returns a new array
const marvelHeros1 = ["thor", "ironman", "spiderman"]
const dcHeros1 = ["superman", "flash", "batman"]
const allHeros = marvelHeros1.concat(dcHeros1)
console.log(allHeros) //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//**spread operator**
const newAllHeros = [...marvelHeros1, ...dcHeros1]
console.log(newAllHeros) //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//flattening an array: flat() method
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]], 10]
const halfflattenedarray = anotherArray.flat(1) //flat(depth-upto-which-u-want-to-flaten-array)
const fullflatenedarray = anotherArray.flat(Infinity)
console.log(`Half Flattened Array ${halfflattenedarray}`)
console.log(`Full Flattened Array ${fullflatenedarray}`)
console.log(Array.isArray(halfflattenedarray[9])); //false, it means that flattening is up to depth 1 eg:[1, [2, [3,4,[3,4]],4,5],6] -> depth is 3 

//Array.isArray(): returns true or false based on passed argument
console.log(Array.isArray([1,2,3])) // true
console.log(Array.isArray("Ayush Shaurya Jha")) // false

//Array.from() : creates a new array
console.log(Array.from("Ayush")); //[ 'A', 'y', 'u', 's', 'h' ]

//Array.of()
let score1 = 100, score2 = 200, score3 = 300
console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]

//Array.from() : creates a new array
let nums = [1,2,3]
console.log(Array.from(nums,x=> x**2)) 

let systumm = [{name: "Ayush", age: 21}, {name:"shaurya",age: 22}]
console.log(Array.from(Object.entries(systumm))) // [ [ '0', { name: 'Ayush', age: 21 } ],  [ '1', { name: 'shaurya', age: 22 } ] ]

console.log(systumm.map(Object => Object.name)) // [ 'Ayush', 'shaurya' ]
console.log(systumm.flatMap(Object.entries)) // [[ 'name', 'Ayush' ],  [ 'age', 21 ],  [ 'name', 'shaurya' ],  [ 'age', 22 ]]

const obj = { name: "Ayush", age: 21 };

console.log(Array.from(Object.keys(obj)));   // ['name', 'age']
console.log(Array.from(Object.values(obj))); // ['Ayush', 21]
console.log(Array.from(Object.entries(obj))); // [['name', 'Ayush'], ['age', 21]]
