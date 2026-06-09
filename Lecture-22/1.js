//CLOSURE : An inner function that remembers variables from its outer scope even after the outer function has finished running.
function one(){
    const name = "agrim";
    
    function two(){
        const username ="agrimkapoor"
        console.log(name);//name is accessible here as inside one() ka scope
    }
    two()
}
one()