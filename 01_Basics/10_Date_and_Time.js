//Dates in js

/*JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).*/

let myDate = new Date()
console.log(myDate); // 2025-05-23T06:28:45.399Z
console.log(myDate.toString()) // Fri May 23 2025 11:58:45 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()) // Fri May 23 2025
console.log(myDate.toISOString()) // 2025-05-23T06:28:45.399Z
console.log(myDate.toJSON()) // 2025-05-23T06:28:45.399Z
console.log(myDate.toISOString()) // 2025-05-23T06:28:45.399Z
console.log(myDate.toLocaleString()) // 5/23/2025, 11:58:45 AM
console.log(myDate.toLocaleDateString()) // 5/23/2025

let myCreatedDate1 = new Date(2025, 4, 23)
console.log(myCreatedDate1.toLocaleString()) // 5/23/2025, 12:00:00 AM

let myCreatedDate2 = new Date(2025, 4, 23, 16, 1, 33) 
console.log(myCreatedDate2.toLocaleString())  // 5/23/2025, 4:01:33 PM

let myCreatedDate3 = new Date("2025-05-23");
console.log(myCreatedDate3.toLocaleString()) // 5/23/2025, 5:30:00 AM

let myCreatedDate4 = new Date("05-23-2025")
console.log(myCreatedDate4.toLocaleString()) // 5/23/2025, 12:00:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp); //1705512093789 //this gives current time in millisecond

console.log(myCreatedDate4.getTime()); //1674432000000//time till that date in milliseconds

console.log(Math.floor(Date.now()/1000));//1705512258 //current time in seconds = time in ms/ 1000

let newDate = new Date()
console.log(newDate.getDate()) //23
console.log(newDate.getDay())  //5
console.log(newDate.getFullYear()) //2025
console.log(newDate.getMonth())  //4

console.log(newDate.toLocaleString('default', {
    weekday: 'long',
    //we can add other modifications as well here
}
)) // Friday


