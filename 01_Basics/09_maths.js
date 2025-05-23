const score = 100
console.log(score) //400

// this gurantees it to be a number
const balance = new Number(100)
console.log(balance) // [Number: 100]

console.log(balance.toString().length) //3, length is property and not method or function of Number object

//toFixed() : number of digits after decimal
console.log(balance.toFixed(2));

//toPrecision(): total number of digits

const othernumber = 23.8966
console.log(othernumber.toPrecision(3)); // 23.9
console.log(othernumber.toPrecision(2)); // 24
console.log(1234.78945.toPrecision(3)); // 1.23e+3

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // 1,000,000 (by default it follows US system)
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000

//other number methods
Number.MAX_VALUE
Number.MIN_VALUE
Number.MAX_SAFE_INTEGER

/***************Maths************** */
console.log(Math.abs(-4)) // 4
console.log(Math.PI) // 3.141592653589793

console.log(Math.round(4.9)); //5
console.log(Math.round(4.1))// 4
console.log(Math.floor(4.99)) // 4
console.log(Math.ceil(4.01)) // 5

console.log(Math.min(2,8,7,4)) // 2
console.log(Math.max(2,8,7,4)) // 8


//***NOTE==> Math.random()
console.log(Math.random());//any value b/w 0 and 1

//if we want random value b/w 1 and 10
const randval = Math.floor(Math.random()*10) + 1;
console.log(randval);

//if we want random value b/w min and max
const min = 10
const max = 20
const ranVar = Math.floor(Math.random()*(max - min + 1)) + min;
console.log(ranVar)

// https://chatgpt.com/c/681bbd2f-5f40-8007-b61f-43cf4e4e04f2

/* ChatGpt detailed Conversation 


---

## 🧱 1. **`constructor`**

It returns the function that created the instance's prototype.

```js
const user = {};
console.log(user.constructor); // [Function: Object]
```

📌 You can use it to check what type of object it is:

```js
console.log(user.constructor === Object); // true
```

---

## 🏷️ 2. **`hasOwnProperty()`**

Checks if a property exists **directly on the object**, not inherited.

```js
const obj = { name: "Ayush" };
console.log(obj.hasOwnProperty("name")); // true
console.log(obj.hasOwnProperty("toString")); // false (inherited)
```

---

## 👪 3. **`isPrototypeOf()`**

Checks if one object exists in another's prototype chain.

```js
function Person() {}
const person = new Person();

console.log(Person.prototype.isPrototypeOf(person)); // true
```

---

## 🧮 4. **`propertyIsEnumerable()`**

Checks if a property is **enumerable** (can be looped in `for...in`).

```js
const obj = { name: "Ayush" };
console.log(obj.propertyIsEnumerable("name")); // true

Object.defineProperty(obj, "hidden", {
  value: 42,
  enumerable: false
});
console.log(obj.propertyIsEnumerable("hidden")); // false
```

---

## 🌐 5. **`toLocaleString()`**

Gives a locale-specific string representation.

```js
const amount = 123456.789;
console.log(amount.toLocaleString("en-IN")); // "1,23,456.789"
```

---

## 🖊️ 6. **`toString()`**

Returns a string representing the object.

```js
const arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"
```

---

## 💵 7. **`valueOf()`**

Returns the **primitive value** of an object.

```js
const num = new Number(42);
console.log(num.valueOf()); // 42
```

---

## 🧙 8. **`__defineGetter__()`** (⚠️ Legacy)

Defines a getter function for a property.

```js
const obj = {};
obj.__defineGetter__('secret', function () {
  return "I'm hidden!";
});
console.log(obj.secret); // "I'm hidden!"
```

---

## 🧙‍♂️ 9. **`__defineSetter__()`** (⚠️ Legacy)

Defines a setter function for a property.

```js
const obj = {};
obj.__defineSetter__('value', function (val) {
  console.log(`Setting value to ${val}`);
});
obj.value = 42; // logs: Setting value to 42
```

---

## 🧭 10. **`__lookupGetter__()`**

Returns the getter function if one is defined.

```js
const obj = {};
obj.__defineGetter__('greet', () => "Hi");
console.log(obj.__lookupGetter__('greet')); // [Function]
```

---

## 🧭 11. **`__lookupSetter__()`**

Returns the setter function if one is defined.

```js
const obj = {};
obj.__defineSetter__('age', val => console.log("Age set to", val));
console.log(obj.__lookupSetter__('age')); // [Function]
```

---

## 🔗 12. **`__proto__`**

Getter/setter for the object's prototype (⚠️ not recommended for modern code, use `Object.getPrototypeOf()` instead).

```js
const obj = {};
console.log(obj.__proto__ === Object.prototype); // true

// or
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true
```

---

## ✅ Summary Table

| Method                                      | Use                                  |
| ------------------------------------------- | ------------------------------------ |
| `hasOwnProperty()`                          | Own property check                   |
| `isPrototypeOf()`                           | Check prototype chain                |
| `propertyIsEnumerable()`                    | Is enumerable                        |
| `toString()`                                | Convert to string                    |
| `toLocaleString()`                          | Locale-based string                  |
| `valueOf()`                                 | Primitive value                      |
| `__defineGetter__()` / `__defineSetter__()` | Legacy getter/setter                 |
| `__lookupGetter__()` / `__lookupSetter__()` | Get existing getter/setter           |
| `__proto__`                                 | Access prototype (avoid in new code) |
| `constructor`                               | Function that created the object     |

---




*/
