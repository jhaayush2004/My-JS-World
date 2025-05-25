//Function: a sequence of program instructions that performs a specific task, packaged as a unit. This unit can then be used in programs wherever that particular task should be performed

function sayMyName(){
    console.log("Ayush");
    console.log("Shaurya");
}
sayMyName // reference
sayMyName() //Execution

//parameter: variables that we pass inside a function declaration
//arguments: values/variables that we pass during function call
function addingtwoNumbers(number1, number2){
    console.log(number1 + number2);
}
addingtwoNumbers(3, 4) //7
addingtwoNumbers(3, "4") //34 (so we should check if values passed is Number or not)

function addtwo(num1, num2){
    let res = num1 + num2
    return res
    // or return num1+num2
}
const result = addtwo(5, 5)
console.log(result) // 10

function loginUserMessage(username){
    if(username=== undefined){
        console.log("Please enter a valid username!");
        return;
    }
    return `${username} just logged in.`
    // or if(!username){} can be used too
}
console.log(loginUserMessage("Ayush"));//Ayush just logged in.
console.log(loginUserMessage());//Please enter a valid username!