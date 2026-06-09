// alert(3+3)  error as it is not defined in node.js but only in browser to show pop up dialog

//1. datatypes : S has 8 data types. Split into two categories — primitives and objects.
// Primitives
const name = "Agrim"          // String
const age = 20                // Number
const big = 9999999999999n    // BigInt
const isAdmin = true          // Boolean
let x                         // Undefined — declared but no value
const empty = null            // Null — intentionally empty
const id = Symbol("id")       // Symbol — unique, advanced use

//Symbol is a primitive type introduced in ES6. Its one job — create a guaranteed unique value every time.
const s1 = Symbol("id")
const s2 = Symbol("id")

console.log(s1 === s2)  // false — description is just a label, not the value
console.log(s1)         // Symbol(id)

// Object types
const user = { name: "Agrim", age: 20 }   // Object
const scores = [10, 20, 30]               // Array
function greet() { return "hi" }          // Function
const now = new Date()                    // Date

/*
typeof "hello"      // "string"
typeof 42           // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object"  ← famous JS bug, null is NOT an object
typeof {}           // "object"
typeof []           // "object"  ← arrays are objects too
typeof function(){} // "function"
*/
console.log(typeof(greet));// function

//2.Primitives are copied by value. Objects are copied by reference. 
// Primitive — copy by value 
let a = 10
let b = a
b = 20
console.log(a)  // 10 — a unchanged, b got its own copy

// Object — copy by reference 
let obj1 = { x: 10 }
let obj2 = obj1       // both point to SAME object in memory
obj2.x = 20
console.log(obj1.x)  // 20 — obj1 changed too!

console.log(id)


//JS is a dynamically typed language which means the variable has no fixed type
let x = 10        // x holds a number
x = "hello"       // now x holds a string — no error
x = true          // now x holds a boolean — no error
x = { id: 1 }    // now x holds an object — no error

const func = function(){
    console.log("This is a function ");
}


// primitive are stored in stack memory
// objects are stored in heap memory (stack only store the address)