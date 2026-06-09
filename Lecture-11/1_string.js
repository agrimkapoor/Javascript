//1.A string is a sequence of characters used to represent text..

let name = "Dhoni";        // double quotes
let city = 'Delhi';        // single quotes
let msg  = `Hello world`;  // template literal (backticks)

//2. In JS : strings are immutable primitives :
//Immutable = cannot be changed after creation.
//When you create a string, its characters are locked in memory.
let str = "hello";

str[0] = "H";        // ❌ silently fails — no error, no effect
console.log(str);    // "hello"  — unchanged!

str.toUpperCase();   // ❌ doesn't change str
console.log(str);    // "hello"  — still unchanged!

// ✅ correct way — capture the new string
let newStr = str.toUpperCase();
console.log(newStr); // "HELLO"
console.log(str);    // "hello"  — original safe

//arrays are mutable

//3.String interpolation : embedding variables inside a string . This is done by using template literal : we create a placeholder by ${}

//4.Creating Strings 
// Primitive (preferred)
let s1 = "hello";

// String object (avoid — causes bugs)
let s2 = new String("hello");

// console.log(typeof s1);  // "string"
// console.log(typeof s2);  // "object"
// console.log(s1 == s2);   // true  (value comparison)
// console.log(s1 === s2);  // false (type mismatch!)


//5.escape characters
console.log("She said \"hello\"");  // She said "hello"
console.log('It\'s okay');          // It's okay
console.log("Line1\nLine2");        // newline
console.log("Col1\tCol2");          // tab
console.log("Back\\slash");         // Back\slash
console.log("\u0041");              // A  (unicode)

//6.String properties
let str = "Hello, DTU!";

console.log(str.length);   // 11
console.log(str[0]);       // "H"   (index access)
console.log(str[str.length - 1]); // "!"  (last char)