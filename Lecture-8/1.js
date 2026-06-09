null === undefined    // false — different types
null == undefined     // true  — only loose equality

// null comparisons
null === null         // true
null > 0              // false
null < 0              // false
null == 0             // false
null >= 0             // true  ← bizarre JS behaviour : == and comparison work differently . comparison convert null to a number

// undefined comparisons
undefined === undefined  // true
undefined > 0            // false
undefined < 0            // false
undefined == 0           // false

console.log("2">1)//true "2" is converted to number
console.log("02">1)//true "02" is converted to a number