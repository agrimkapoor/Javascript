const nums = [1, 2, 3, 4, 5]
const mixed = [1, "hello", true, null, { id: 1 }]  // JS allows mixed types
const empty = []
const fromConstructor = new Array(3)  // [empty × 3] — rarely used

//js arrays are resizeable

const arr = [1, 2, 3]

// End
arr.push(4)       // [1, 2, 3, 4] — add to end
arr.pop()         // [1, 2, 3]    — remove from end, returns 4

// Start
arr.unshift(10)    // [10, 1, 2, 3] — add to start

console.log(arr.shift())       // [1, 2, 3]    — remove from start, returns 10

//orginial array mei hi changes ho rahe hai 


// this is not any copy
const a = [1,2,3]
const b = a
b[2]=4
console.log(a)//[1,2,4]
//both a and b point to same memory

console.log(a.includes(6))//false
console.log(a.indexOf(6))// -1
console.log(a.indexOf(1))//0

const array = [1,2,3,4]
const newarray = array.join() //"1,2,3,4"
console.log(newarray)
console.log(typeof newarray)
console.log(array)//original change nhi hua

//slice splice

let arr = [10, 20, 30, 40, 50];

let removed = arr.splice(1, 2)   // start=1, remove 2 items

console.log(removed)  // [20, 30]        ← returns removed
console.log(arr)      // [10, 40, 50]    ← original changed!

let arr2 = [10, 20, 30, 40, 50];
arr2.slice(1, 3)    // [20, 30]
console.log(arr2) //[10,20,30,40,50]

//so splice mutates original and the parameter are (start,count) and not (start,end)