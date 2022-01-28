const before = new Date("Tur Jan 27 2022 13:00:08");
const now = new Date();
// console.log(now);
// console.log(typeof now); // output:object

// /* ------------------ // get element year/ month /day /time ----------------- */

// console.log("getFullYear :", now.getFullYear());
// console.log("getMonth : ", now.getMonth());
// console.log("getDay : ", now.getDay());
// console.log("getDate : ", now.getDate());
// console.log("getHours: ", now.getHours());

// console.log("getMinutes : ", now.getMinutes());

// console.log("getSecond : ", now.getSeconds());
// // timestap
// console.log("timestamp : ", now.getTime());
// // time string
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());
// console.log(now.getTime(), before.getTime());
// const deffernt = now.getTime() - before.getTime();
// console.log(deffernt); //second // minute
// const minu = Math.round(deffernt / 1000 / 60);
// const hours = Math.round(minu / 60);
// const day = Math.round(hours / 24);
// console.log(minu, hours, day);
// const clock = document.querySelector(".clock");
// const tick = () => {
//   const now = new Date();
//   const h = now.getHours();
//   const m = now.getMinutes();
//   const s = now.getSeconds();
//   const html = `
//          <span>${h}</span> :
//          <span>${m}</span> :
//         <span>${s}</span>
//   `;
//   clock.innerHTML = html;
// };
// setInterval(tick, 1000);
// console.log(dateFns.isToday(now)); //output:ture
console.log(dateFns.format(now, "YYYY")); //output:2022
console.log(dateFns.format(now, "MMMM")); //output:January
console.log(dateFns.format(now, "MMM")); //output:Jan
console.log(dateFns.format(now, "dddd")); //output:Friday day ro neshon mide
