const now = new Date();
console.log(now);
console.log(typeof now); // output:object

/* ------------------ // get element year/ month /day /time ----------------- */

console.log("getFullYear :", now.getFullYear());
console.log("getMonth : ", now.getMonth());
console.log("getDay : ", now.getDay());
console.log("getDate : ", now.getDate());
console.log("getHours: ", now.getHours());

console.log("getMinutes : ", now.getMinutes());

console.log("getSecond : ", now.getSeconds());
// timestap
console.log("timestamp : ", now.getTime());
// time string
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());
