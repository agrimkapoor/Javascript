//1.function declaration
function f1(a,b){
    return a + b;
}
//2.function expression
const f2 = function(a,b){
    return a+b;
}
//3.arrow operator
const f3 = (a,b)=>{
    return a+b;
}

// only function declaration is hoisted -- means the function definition is moved to the top of scope 

//IIFE : Immediately Invoked Function Expression
(function(){
    console.log("hello world");
})();

((a,b)=>{
    console.log("hello world");
})();

// high order functions : functions that take fn as arguements or return function

function runTwice(fn) {
  fn();
  fn();
}

// call the fn
runTwice(()=>{
    console.log(" hello ");
})

//built in high order functions
let arr = [1, 2, 3, 4, 5];

console.log(arr.map((x) => x * 2))          // [2, 4, 6, 8, 10]