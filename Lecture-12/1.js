//number and maths 

const score = 100
const no = new Number(100)

console.log(no.toString())//"100"
console.log(no.toFixed(2))//100.00

const no2 = 23.8967
console.log(no2.toPrecision(3))//23.9

const no3 = 49645243
console.log(no3.toLocaleString())//4,96,45,243  comma honge



console.log(Math.abs(-4))//4
console.log(Math.round(4.3))//4 as 4.3 is closer to 4
console.log(Math.ceil(4.2))//5
console.log(Math.floor(4.8))//4
console.log(Math.min(4,6,2,3))//2

console.log(Math.random())//[0,1)
console.log(Math.random()*10)//[0,10)
Math.floor(Math.random() * 10)   // 0 to 9 mei koi bhi integer

//random INTEGER b/w min and max (inclusive)
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}