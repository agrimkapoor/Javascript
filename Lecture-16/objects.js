// object is a collection of key value pairs

// 1. Object literal (most common)
let obj = { 
    name: "Dhoni", //"name" nhi hai
    age: 21
}

// 2. new Object()
let obj2 = new Object();
obj2.name = "Dhoni";

//how to access 
console.log(obj.name);
console.log(obj["name"]);// yaha pe "name"

// step 1 — create a symbol, store in variable
let id = Symbol("mykey");

// step 2 — use it as key with []
let user = {
  name: "Dhoni",
  [id]: 101        // ← [] because id is a variable
};

// step 3 — access it with []
console.log(user[id]);    // 101  
console.log(user.id);     // undefined  — this looks for string key "id", not symbol
user.greeting = function(){
    console.log("hello")
}
console.log(user.greeting)//[Function (anonymous)]  ye fn ka reference hai
console.log(user.greeting())




let user1 = { name: "Dhoni", address: { city: "Delhi" } };
let copy = user1;// points to same object(this is not any copy)

user1.name="kohli";
console.log(copy.name);//kohli

let user2 = { name: "Dhoni", address: { city: "Delhi" } };
let copy2 = {...user2}//shallow copy

user2.name="kohli";
console.log(copy2.name);//dhoni

//Shallow copy creates a new object at the top level — but nested objects inside are still pointing to the same place in memory.
//let copy ={...user} is shallow copy

//deep copy is completely new object

let user3 = { name: "Dhoni", address: { city: "Delhi" } };
let copy3 = {user3}

// copy3 ={ user : }
// now user 3 is the key and its content is the value
console.log(copy3.user3)
console.log(copy3["user3"])//"user3"