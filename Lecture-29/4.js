/*
array.forEach(function(element, index, array) {
  // body
});

// cleaner with arrow function
array.forEach((element, index) => {
  // body
});
*/

//for each works on array only

let arr =[1,2,3,4]
const value = arr.forEach((item)=>{
    console.log(item);
})
console.log(value);//undefined