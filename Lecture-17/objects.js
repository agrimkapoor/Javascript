let obj1 = {1:'a',2:'b'}
let obj2 = {3:'c',4:'d'}

let obj3 ={obj1,obj2}
console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

let obj4 = {...obj1,...obj2}
console.log(obj4)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

/*
// target = obj1 — obj1 gets mutated ⚠️
let result = Object.assign(obj1, obj2);
console.log(obj1);  // obj1 is now changed!

// target = {} — obj1 and obj2 both safe ✅
let result = Object.assign({}, obj1, obj2);
console.log(obj1);  // unchanged ✅
console.log(obj2);  // unchanged ✅
*/

console.log(Object.keys(obj1))//[ '1', '2' ]
console.log(Object.values(obj1))//[ 'a', 'b' ]
console.log(Object.entries(obj1))//[ [ '1', 'a' ], [ '2', 'b' ] ]