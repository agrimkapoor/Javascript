//JS has two kinds — implicit (JS does it automatically) and explicit (you do it manually).

//1.Implicit conversion : this is also called type coercion
// Number + String = String (+ triggers concatenation)
console.log(1 + "2")       // "12"  — number became string
console.log("5" + 3)       // "53"
console.log("1" + 2 + 2)   //122
console.log(1 + 2 + "2")   //32

// Other operators force number conversion
console.log("5" - 3)       // 2    — string became number
console.log("5" * 2)       // 10
console.log("10" / 2)      // 5

// Boolean context
console.log(1 + true)      // 2    — true becomes 1
console.log(1 + false)     // 1    — false becomes 0
console.log(1 + null)      // 1    — null becomes 0
console.log(1 + undefined) // NaN  — undefined becomes NaN

// Explicit conversion

//2. Explicit conversion to number
Number("42")        // 42
Number("3.14")      // 3.14
Number("")          // 0
Number("abc")       // NaN
Number(true)        // 1
Number(false)       // 0
Number(null)        // 0
Number(undefined)   // NaN

// Shorthand
parseInt("42px")    // 42  — reads until it hits a non-number
parseFloat("3.14x") // 3.14
+"42"               // 42  — unary plus, quick trick

//3.Explicit conversion to string

String(42)          // "42"
String(true)        // "true"
String(null)        // "null"
String(undefined)   // "undefined"

// or use toString()
(42).toString()     // "42"
(255).toString(16)  // "ff"  — convert to hex!

//4.Explicit conversion to boolean
Boolean(1)          // true
Boolean(0)          // false
Boolean("hello")    // true
Boolean("")         // false  — empty string is falsy
Boolean(null)       // false
Boolean(undefined)  // false
Boolean(NaN)        // false
Boolean({})         // true   — empty object is truthy!
Boolean([])         // true   — empty array is truthy!

// Shorthand — double bang
!!"hello"           // true
!!0                 // false

//5. There are only 6 falsy values in js .everything else true
Boolean(false)      // false
Boolean(0)          // false
Boolean("")         // false
Boolean(null)       // false
Boolean(undefined)  // false
Boolean(NaN)        // false

//6.
// == allows coercion (loose equality)
0 == false       // true  — both become 0
"" == false      // true
1 == "1"         // true  — string converted to number
null == undefined // true

// === no coercion (strict equality)
0 === false      // false — different types
1 === "1"        // false
null === undefined // false

