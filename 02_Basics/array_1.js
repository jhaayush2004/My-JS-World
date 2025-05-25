/*
JavaScript arrays are resizable and can contain a mix of different data types.

JavaScript array-copy operations like `slice()`, spread operator (`[...]`), and `Array.from()` create shallow copies and are non-mutating — meaning 
they don't alter the original array but still only copy the top-level structure.  In shallow copies, nested objects or arrays still share 
the same reference with the original. So, modifying a nested value in either the original or the copy reflects in both.

Mutating shallow copy methods like `splice()`, `push()`, `pop()`, `shift()`, and `unshift()` change the original array and may affect 
copies if references are shared.

In contrast, a **deep copy** duplicates everything, including nested objects, and stores them at separate memory locations. This ensures 
complete independence between the original and the copy. Deep copies can be created using `structuredClone(obj)`, `JSON.parse(JSON.stringify(obj))`, 
or utility libraries like Lodash's `cloneDeep()`.
*/

let myarray = [1, 2, 3, "Ayush", "Shaurya"]

let myheros = ["Ayush", "Shaurya", "Jha"]

let Myarray = new Array(1, 2, 3, 4, 5, 6) //another way of defining array in js
console.log(myheros[2]); //accessing array elements in js //O/P-Thor// Jha
console.log(typeof myheros) // object

let arr = [1, 2, 3, 4, 5, 6]
//push()-push element at the end of the array
arr.push(6)
arr.push(7,8)
console.log(arr);

//pop()-delete element from end of array
arr.pop()
console.log(arr)

//unshift()-adds element at the start of array
arr.unshift(0)
arr.unshift(10.9)
console.log(arr)

//shift()-delete element from start of the array
arr.shift()
console.log(arr)

//includes()-true or false based on element exsits in arr or not
console.log(arr.includes(0)) // true

//indexOf(): returns index of element, if not present then -1
console.log(arr.indexOf(7)) //8
console.log(arr.indexOf(12)) // -1

//join() : converts array into string
let newStr = arr.join()
console.log(arr); 
console.log(newStr) // 0,1,2,3,4,5,6,6,7
console.log(typeof newStr) //string

//slice(): returns a new array containing the extracted elements.The original array will not be modified.
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const newAnimals = animals.slice(2,4)
console.log(newAnimals);//[ 'camel', 'duck' ]
console.log(animals);//[ 'ant', 'bison', 'camel', 'duck', 'elephant' ] //original array is not modified

//splice(): changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. Here original array is changed.
const myFish = ["angel", "clown", "drum", "sturgeon"];
const removed = myFish.splice(2,2, "Trumpet") //remove 2 element at index 2, and insert "trumpet", "star". "electric"
console.log(removed); // [ 'drum', 'sturgeon' ]
console.log(myFish) // [ 'angel', 'clown', 'Trumpet' ]

/*
Great question! Let's break it down clearly:

---

### 🔁 **Original Array Changes (Mutating Methods)**

These **modify the original array**:

| Method         | Description                          |
| -------------- | ------------------------------------ |
| `push()`       | Adds items to end                    |
| `pop()`        | Removes last item                    |
| `shift()`      | Removes first item                   |
| `unshift()`    | Adds items to beginning              |
| `splice()`     | Adds/removes items at specific index |
| `sort()`       | Sorts the array in place             |
| `reverse()`    | Reverses array in place              |
| `fill()`       | Fills elements with static value     |
| `copyWithin()` | Copies part of array within itself   |

**Example:**

```js
let arr = [1, 2, 3];
let result = arr.push(4);
console.log(arr); // [1, 2, 3, 4] ← modified
```

---

### 📋 **Original Array Doesn't Change (Non-Mutating Methods)**

These **create shallow copies or new arrays**, **original remains unchanged**:

| Method         | Description                                  |
| -------------- | -------------------------------------------- |
| `slice()`      | Returns selected part as new array           |
| `concat()`     | Merges arrays, returns new array             |
| `map()`        | Returns new array with transformed items     |
| `filter()`     | Returns new array with filtered items        |
| `reduce()`     | Reduces array to single value                |
| `flat()`       | Flattens nested arrays into new array        |
| `toSorted()`   | Like `sort()` but doesn’t mutate (ES2023)    |
| `toReversed()` | Like `reverse()` but doesn’t mutate (ES2023) |
"Spread"is also non mutating method.

### ⚠️ **Shallow Copy = Shared References**

Even in non-mutating methods (like `slice()`), if the array contains **objects**, those inner objects are still **shared** between copies.

```js
let arr = [{name: 'Ayush'}];
let copy = arr.slice();

copy[0].name = 'Shaurya';
console.log(arr[0].name); // 'Shaurya' ← affected original
```

To prevent this, you'd need a **deep copy** using libraries like Lodash (`_.cloneDeep`) or structured cloning.


*/