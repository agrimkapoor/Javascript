//1.function declaration
function add(no1,no2){//let const nhi likhna
    console.log(no1+no2)
}
add(3,5)//arguement and not parameter

const result = add(3,6); // 9 is printed and whatever is being returned is stored in result but the function returns nothing so result contains undefined
console.log(result);//undefined


function f(no1,no2){
    return no1+no2;
}

const res = f(3,5);// fn is called and the result is stored in res

console.log(res);


//2.function expression = function stored in a variable
const add = function(a, b) {
  return a + b;
};

add(10, 20);

//3.arrow operator
const add2 = (a, b) => {
  let result = a + b;
  return result;
};

/*
const add3 = (a,b)=>{
    return a+b;
}
*/
const add3 =(a,b)=>a+b

//rest operator
function sum(...nums) {//kitne bhi parameter aa sakte
  console.log(nums);  // [1, 2, 3, 4, 5]  ← real array
}

sum(1, 2, 3, 4, 5);