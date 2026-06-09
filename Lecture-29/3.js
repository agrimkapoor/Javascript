const user = { name: "Agrim", age: 21, city: "Gurugram" };

for (const key in user) {
  console.log(key);        // name, age, city
  console.log(user[key]);  // Agrim, 21, Gurugram  //not user["key"]
}//user["key"]   // looks for a property literally named "key" → undefined 