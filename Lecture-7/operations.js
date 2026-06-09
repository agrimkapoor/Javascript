//1.Arithmetic
10 + 3   // 13
10 - 3   // 7
10 * 3   // 30
10 / 3   // 3.3333  — always float division (no integer division)
10 % 3   // 1       — remainder
10 ** 3  // 1000    — exponent (same as Python)


Math.floor(10 / 3)  // 3  — this is how you do integer division in JS

//2.Assignment

let x = 10
x += 5   // x = 15
x -= 3   // x = 12
x *= 2   // x = 24
x /= 4   // x = 6
x **= 2  // x = 36
x %= 5   // x = 1

// Increment / decrement — Python doesn't have these
x++   // x = x + 1 (after returning current value)
x--   // x = x - 1
++x   // x = x + 1 (before returning)
--x   // x = x - 1
let a = 5
console.log(a++)  // 5  — returns THEN increments
console.log(a)    // 6

let b = 5
console.log(++b)  // 6  — increments THEN returns
console.log(b)    // 6

//3.Comparision
10 > 3     // true
10 < 3     // false
10 >= 10   // true
10 <= 9    // false

// THE IMPORTANT ONE
10 == "10"   // true  — loose, coerces types (avoid)
10 === "10"  // false — strict, no coercion (always use this)
10 != "10"   // false — loose not equal
10 !== "10"  // true  — strict not equal (always use this)

//4.logical 
true && false   // false  — AND
true || false   // true   — OR
!true           // false  — NOT

// Short circuit evaluation — same as Python
false && doSomething()   // doSomething never runs
true  || doSomething()   // doSomething never runs

// nullish coalescing : ?? only falls back on null or undefined
const name = null ?? "Guest"      // "Guest"
const age  = 0    ?? 18           // 0   — 0 is not null/undefined


//Optional Checking
const user = null

user?.name
// JS asks: is user null or undefined?
// Yes — stop here, return undefined
// Never even tries to access .name

console.log(user?.name)  // undefined

//ternary operator
// condition ? valueIfTrue : valueIfFalse
const age = 20
const status = age >= 18 ? "adult" : "minor"   // "adult"