const name = "Ayush"
const repo = 53

console.log( name + repo + " value") // Ayush53 value

//Below method is known as String Interpolation
console.log(`My name is ${name.toUpperCase()} and my Repo count is ${repo}. `) // My name is AYUSH and my Repo count is 53.

/*
🔡 String Methods in JavaScript
| Method                  | Description                            | Example                                            |
| ----------------------- | -------------------------------------- | -------------------------------------------------- |
| `toUpperCase()`         | Converts string to **uppercase**       | `"ayush".toUpperCase()` → `"AYUSH"`                |
| `toLowerCase()`         | Converts string to **lowercase**       | `"AYUSH".toLowerCase()` → `"ayush"`                |
| `trim()`                | Removes whitespace from both ends      | `"  hello  ".trim()` → `"hello"`                   |
| `length`                | Returns the **length** of the string   | `"ayush".length` → `5`                             |
| `charAt(index)`         | Returns the character at a given index | `"ayush".charAt(2)` → `"u"`                        |
| `includes("sub")`       | Checks if substring exists             | `"hello world".includes("world")` → `true`         |
| `startsWith("he")`      | Checks if string starts with substring | `"hello".startsWith("he")` → `true`                |
| `endsWith("lo")`        | Checks if string ends with substring   | `"hello".endsWith("lo")` → `true`                  |
| `indexOf("h")`          | First index of substring               | `"hello".indexOf("l")` → `2`                       |
| `lastIndexOf("l")`      | Last index of substring                | `"hello".lastIndexOf("l")` → `3`                   |
| `slice(start, end)`     | Extracts a section of string           | `"ayush".slice(1, 3)` → `"yu"`                     |
| `substring(start, end)` | Similar to slice                       | `"ayush".substring(1, 3)` → `"yu"`                 |
| `replace("a", "A")`     | Replaces first match                   | `"ayush".replace("a", "A")` → `"Ayush"`            |
| `repeat(n)`             | Repeats the string `n` times           | `"ha".repeat(3)` → `"hahaha"`                      |
| `split(" ")`            | Splits string into array               | `"a y u s h".split(" ")` → `["a","y","u","s","h"]` |

*/
// But none of above or below functions will change our original string bcoz its heap datatype.

const gamename = new String("Ayush Shaurya Jha")
console.log(gamename)
console.log(typeof gamename) // Object because 'new String()' creates an object, so its an string object. And its a key value pair. 
console.log(gamename[0]) // A
console.log(gamename.__proto__) // we dont need to write __proto__ everytime, we can directly access all the methods as below.  {}, but its not empty object
console.log(gamename.length) // 17
console.log(gamename.charAt(1)) //y
console.log(gamename.indexOf('y')) //1

/*
Strings in JavaScript are immutable by design.

Even when wrapped in objects (via new String()), their content still follows immutability rules.

This applies to both stack-allocated primitives and heap-allocated object-wrapped strings.
*/

const newstring1 = gamename.substring(0,4) // if we use -ve values here, it will still start from 0
console.log(newstring1) //Ayus

const newstring2 = gamename.slice(-6, 4)
console.log(newstring2)

const newstring3 = "    Ayush                  "
console.log(newstring3.trim()) //Ayush
console.log(newstring3.trimEnd()) //.......Ayush
console.log(newstring3.trimStart()) //Ayush...........

const url = "https://Ayush%20International.globe.in"
console.log(url.replace('%20', "-"))
console.log(url.includes('Ayush')) //true

/*
Let's break this down:

### Code:

```js
const gamename = new String("Ayush Shaurya Jha");
const newstring2 = gamename.slice(-6, 4);
console.log(newstring2);
```

---

### 💡 `String.prototype.slice(start, end)`:

* `slice()` extracts part of a string and **returns a new string**.
* `start` – the index to start extraction (inclusive).
* `end` – the index to stop extraction (exclusive).
* **Negative indexes** count from the end of the string.

---

### 🧠 `gamename = "Ayush Shaurya Jha"`

Length = 17
String Indexing:

```
  0  1  2  3  4  5  6  ...
  A  y  u  s  h     S
                ...
 11 12 13 14 15 16
  y  a     J  h  a
```

---

### 🔍 Now: `slice(-6, 4)`

* `-6` means: 17 - 6 = **11**, so start from index `11`.
* `4` means: stop at index `4` (exclusive).

Now comes the important part:

📛 If `start > end`, `.slice()` returns an **empty string**.

In this case:

```js
gamename.slice(11, 4); // → ""
```

---

### ✅ So the result:

```js
console.log(newstring2); // Output: ""
```

Because 11 (actual start index) is **greater than** 4 (end index), `.slice()` returns nothing.

---

### ✔ If you reverse them:

```js
const newstring2 = gamename.slice(4, -6); // index 4 to 11
console.log(newstring2); // → "h Shaur"
```

Let me know if you want to try `substring()` or `substr()` too — they behave a bit differently.

*/
let string1 = "Hotel Ayush International"
const myArray = string1.split(" ", 2);
console.log(myArray) // [ 'Hotel', 'Ayush' ]

console.log('Hello'.concat(' ', 'World')); // Hello World

// https://dev.to/ijash/ecmascript-string-methods-3bf6