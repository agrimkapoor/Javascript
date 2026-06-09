// there are 3 ways to declare a variable in JavaScript: var, let, and const

// let and const were introduced in ES6 (ECMAScript 2015) to provide better ways to declare variables and avoid some of the issues that arise with var.

//1. constant variable must be initialized at the time of declaration 
// const name;
// name ="Agrim"

//2. constant variable cannot be reassigned
// const name = "Agrim";
// name = "John"; // This will give an error

//3. var lets you redeclare the same variable which can lead to confusion and bugs in your code.  
var x = 10;
var x = 20;
//4. var is function-scoped which means that it is only accessible within the function in which it is declared
if(true){// block scope
    var y = 30;
}
console.log(y); // This will work because y is function-scoped and accessible outside the block

//5. var variables are hoisted to the top of their scope which means that they can be used before they are declared. 

//Hoisting means JS moves variable declarations to the top of their scope before running the code. However, only the declaration is hoisted, not the initialization. So if you try to access a variable before it is declared, you will get undefined.

console.log(z); // This will give undefined because z is hoisted but not initialized
var z = 40;


//6. to run file 
    // node lecture-4/1_variables.js  if in terminal i am in javascript folder
    // node 1_variables.js if i am in lecture-4 folder

//7. console.table 
let a;
console.log(a); // This will print undefined  

let arr = [1, 2, 3];
console.log(arr); // This will print [1, 2, 3]
console.table(arr); // This will print the array in a tabular format in the console

let b = 10;
console.table([b]);
console.table([x,y,z,a,b])

//8.declaring without let var const
d=5;
//this is created as a global variable

function f(){
    e = 12;
}
f();
console.log(e); //12 as e is global scoped

//9. if we write "use strict" at the top of file then we cant declare variable without using let var const.use strict treat all js code as newer version


