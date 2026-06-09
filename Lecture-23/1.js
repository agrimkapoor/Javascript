const user = {
  name: "Dhoni",
  greet() {
    console.log(this.name);  // this = user object
  }
};

user.greet();  // "Dhoni" ✅

//cant use this function inside arrow func

console.log(this);//{}