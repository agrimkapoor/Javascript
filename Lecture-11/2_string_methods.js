//1.Searching
// let str = "JavaScript is awesome";

// str.indexOf("is");          // 11  (first occurrence, -1 if not found)
// str.lastIndexOf("a");       // 18
// str.includes("awesome");    // true
// str.startsWith("Java");     // true
// str.endsWith("some");       // true
// str.search(/is/);           // 11  

//2.Extracting 
let str = "Hello World";

//slice and substring are both used to extract a part of string 
// (start,end) where end is exclusive

str.slice(0,5);//Hello
str.substring(0,5);//Hello

//WHERE THEY DIFFER
//(i)negative index
// slice — negative counts from END (last index is treated as -1)
str.slice(-5);      // "World"   → 11 + (-5) = starts at index 6
str.slice(-5, -1);  // "Worl"
//(ii)when start > end
let str2 = "Hello";

// slice — returns empty string (makes sense)
str2.slice(3, 1);      // ""

// substring — SWAPS the two values automatically
str2.substring(3, 1);  // "el"  → treated as substring(1, 3)


str.charAt(4);        // "o"


//3.Modifying(returns new string , orginal is unchanged)
let str = "  Hello World  ";

str.toUpperCase();        // "  HELLO WORLD  "
str.toLowerCase();        // "  hello world  "
str.trim();               // "Hello World"   (removes both ends)
str.trimStart();          // "Hello World  " (left only)
str.trimEnd();            // "  Hello World" (right only)

"ha".repeat(3);           // "hahaha"
"5".padStart(4, "0");     // "0005"  (pad to length 4)
"5".padEnd(4, "0");       // "5000"

"Hello World".replace("World", "DTU");    // "Hello DTU" (first only)
"aabbaa".replaceAll("a", "x");            // "xxbbxx"  (all occurrences)

//4.joining and splitting
// concat (use + or template literals instead — cleaner)
"Hello".concat(" ", "World");   // "Hello World"

// split — converts string → array
"a,b,c".split(",");        // ["a", "b", "c"]
"Hello".split("");         // ["H","e","l","l","o"]
"one two three".split(" ");// ["one", "two", "three"]

// join (array → string)
["a", "b", "c"].join("-"); // "a-b-c"

// Reverse a string
let rev = "hello".split("").reverse().join("");  // "olleh"
// Count occurrences of a character
let count = "mississippi".split("s").length - 1;  // 4



let str3 = "Hello World";

str3.replace("World", "DTU");     // "Hello DTU" //replace world with dtu
str3.replace("l", "L");           // "HeLlo World"  ← only FIRST match!

str3.replaceAll("l", "L");        // "HeLLo WorLd"  ← ALL matches
//original string is unchanged


