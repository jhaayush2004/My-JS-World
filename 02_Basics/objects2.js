const objOne = new Object() //singleton onject
const objTwo = {} // non singleton object
//this is the only difference b/w two , banki kahani same hai

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sama"
tinderUser.isLoggedIn = false
console.log(tinderUser) // { id: '123abc', name: 'Sama', isLoggedIn: false }

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname: {
            firstname: "Ayush",
            middlename: "Shaurya",
            Lastname: "Jha"
        }
    }
}
console.log(regularUser) 
/* {
  email: 'some@gmail.com',
  fullname: {
    userfullname: { firstname: 'Ayush', middlename: 'Shaurya', Lastname: 'Jha' }
  }
}
*/
console.log(regularUser.fullname.userfullname.Lastname); // Jha

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = {obj1, obj2};
console.log(obj4) // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }  

const obj5 = Object.assign(obj1, obj2)
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj1); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } // problem with this is that it changes obj1 also bcoz  Object.assign(target, source); so target is genrally kept as empty object
// Visit object.assign mdn docs

//if you dont want to modify any excisting object use {} with assign
const obj6 = Object.assign({}, obj2, obj3) //here we get all objects into {} object
console.log(obj5); // { '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

//**better way: use spread operator**
const newObj = {...obj2, ...obj3}
console.log(newObj) // { '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

console.log(Object.keys(tinderUser));
//[ 'id', 'name', 'isLoggedIn' ] --returns all keys as an array
console.log(Object.values(tinderUser));
//[ '123abc', 'Sama', false ]--returns all values of object as an array
console.log(Object.entries(tinderUser));
//[ [ 'id', '123abc' ], [ 'name', 'Sama' ], [ 'isLoggedIn', false ] ]--returns [key,value] pair as an array of array

console.log(tinderUser.hasOwnProperty("isLoggedIn")); //true
// visit console to get more properties

/*Object de-structure and JSON API intro*/

/*
Destructuring is a JavaScript expression that allows us to extract data from arrays, objects, and maps and set them into new, distinct variables.
*/

const course = {
    coursename: "JS in hindi",
    price: 999,
    courseInstructor: "Ayush"
}
//Object destructuring in JS
const {courseInstructor} = course;
console.log(courseInstructor) // Ayush// instead of writing course.courseInstructor every time could be longer and annoying

const {courseInstructor : Ins} = course // if courseInstructor seems long enough to write, then we can change its name and destructure the object
console.log(Ins) // Ayush
/*
// API: API is apne kaam ko dusre ke sar pe dalna;task delegate kr dena
// usually the response which we get from source is in form of JSON which is much easier to analyse and use in comparison to the .xml format in which sources used to give info to API in earlier days.
// JSON: java script object notation
// JSON - keys are also in string format inside " "
{
    "name": "ayush",
    "age": 21,
    "email": "ayush@google.com",
    "isLoggedIn": true
}

/other format of json data
[
    {},
    {},
    {}
]
/there are other formats of json as well

/use "JSON Formatter" to understand json data

some famous online API: randomuser.me api
JSON is a text-based format for representing structured data based on JavaScript object syntax.
*/