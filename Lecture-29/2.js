//maps : key - value pairs

const m = new Map();

m.set("name", "Agrim");   // add/update
m.get("name");            // "Agrim"
m.has("name");            // true
m.delete("name");         // removes it
m.size;                   // number of entries
m.clear();                // wipes everything

//looping a map
const m = new Map([["a", 1], ["b", 2]]);

for (const [key, val] of m)         console.log(key, val);  // a 1, b 2
for (const key of m.keys())         console.log(key);        // a, b
for (const val of m.values())       console.log(val);        // 1, 2
for (const entry of m.entries())    console.log(entry);      // ["a",1], ["b",2]