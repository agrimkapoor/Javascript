const arr = [1,2,3]
const arr2 = [4,5,6]
arr.push(arr2)//[1,2,3,[4,5,6]]
console.log(arr)

let a = [1, 2, 3];
let b = [4, 5, 6];

let merged = [...a, ...b];       // [1, 2, 3, 4, 5, 6]

//Spread Operator ...
//Expands an iterable (array, string, object) into individual elements.


let arr = [1, [2, 3], [4, 5]];

let flat = arr.flat();

console.log(flat);  // [1, 2, 3, 4, 5]
console.log(arr);   // [1, [2, 3], [4, 5]]  ← unchanged