// object destructuring

const user = {
    student :"Agrim",
    age :21
}

const {student ,age}=user;
console.log(student) // now dont have to do user.student
console.log(age)

const {student : name, age:years} = user;
console.log(name);// ab student ke jagah name bolenge
console.log(years);

//JSON is language independent — Python, Java, C++ all use it. It's the universal data format for APIs.

// JS object — relaxed
let obj = {
  name: "Dhoni",       // keys without quotes ✅
  age: 21,
  isPlaced: true,
  scores: undefined,   // undefined allowed ✅
  greet() {}           // functions allowed ✅
}

/* JSON — strict
{
  "name": "Dhoni",     // keys MUST be double quoted ✅
  "age": 21,
  "isPlaced": true
  // ❌ no undefined
  // ❌ no functions
  // ❌ no single quotes
  // ❌ no trailing commas
}
  */
