//filter function

let arr=[1,2,3,4]

let store = arr.filter((num)=>{
    return num>5;
})
console.log(store);

//map function

const res = arr.map((num)=>num*10);
console.log(res);

//reduce function

const initial = 0;
const sum = arr.reduce(
    (accumulator,currentValue)=>accumulator+currentValue,initial
)

const total = arr.reduce(
    function(accumulator,currentval){
        return accumulator+currentval;
    },0
)