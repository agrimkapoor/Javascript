// switch

/*
switch (expression) {
  case value1:
    // code
    break;
  case value2:
    // code
    break;
  default:
    // code if no case matched
}
*/

//nullish coaelscing operator
let val = 5??10
console.log(val)//5

val = null??10
console.log(val);//10

val = null??undefined
console.log(val);//undefined

val = undefined??null
console.log(val);//null