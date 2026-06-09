let date = new Date()
console.log(date)//2026-06-09T04:02:11.415Z
console.log(typeof date)//object
//Month is 0-indexed — January = 0, December = 11

let newdate = date.toDateString() // the method not changes the original
console.log(date)//Tue Jun 09 2026


//Date.now()
//Returns current timestamp in milliseconds from 1 jan 1970 
console.log(Date.now())//1780978324316
// date.now() will give error
//now() is a static method on the Date class itself — not on an instance.



// let d = new Date(2024, 1, 15)   // February

// d.getFullYear()    // 2024
// d.getMonth()       // 5  ← June (0-indexed!)
// d.getDate()        // 15  (day of month)
// d.getDay()         // 6   (day of week — 0=Sun, 6=Sat)
// d.getHours()       // 10
// d.getMinutes()     // 30
// d.getSeconds()     // 45
// d.getMilliseconds()// 0
// d.getTime()        // timestamp in ms since Jan 1 1970



let d = new Date("2024-06-15T10:30:45");

d.toString()             // "Sat Jun 15 2024 10:30:45 GMT+0530"
d.toDateString()         // "Sat Jun 15 2024"
d.toTimeString()         // "10:30:45 GMT+0530"
d.toISOString()          // "2024-06-15T05:00:45.000Z"  (UTC)
d.toLocaleDateString()   // "15/6/2024"  (depends on system locale)
d.toLocaleTimeString()   // "10:30:45 am"
d.toLocaleString()       // "15/6/2024, 10:30:45 am"