/* ------------------------------- // for loop ------------------------------ */

// for ( start ; end  ; rate)
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

const aps = [
  "shirin",
  "bani",
  "bahar",
  "maryam",
  "beni",
  "alireza",
  "porya",
  "mahjan",
  "sirvan",
];
// for (let elemetn = 0; elemetn < aps.length; elemetn++) {
//   console.log(`hi your welcome in aps ${aps[elemetn]}`);
// }

/* ------------------------------- while loop ------------------------------- */

// while(end )
let index = 0;
// while (index < aps.length) {
//   console.log(aps[index]);
//   index++;
// }

/* -------------------------------- do while -------------------------------- */

// do{
//     rate and shart
// }while(end) ;

// do {
//   console.log(`loop is : ${index}`);
//   index++;
// } while (index <= 5);

/* ------------------------------ if stetament ------------------------------ */
// if (shart ){
//     ejra
// }
// if (aps.length > 4) {
//   console.log("hi my friends");
// }
//  else if

let password = "passw@asd";

// if (password.length >= 12) {
//   console.log("wowwwwwwwwwww 12 lenghth");
// } else if (password.length >= 8) {
//   console.log("strong password");
// } else {
//   console.log("khak to sart ba pass entekhab kardant");
// }

// logical and && , or||
// for and bayad dota shart ture bashe ta ejra beshe
//            true                       true
// if (password.length >= 12 && password.includes("@")) {
//   console.log("wowwwwwwwwwww 12 lenghth");
//   //   bara || or agar yeki ham true bashe ejra mishe
//   //           true                     false
// } else if (password.length >= 8 || password.includes("=")) {
//   console.log("strong password");
// } else {
//   console.log("khak to sart ba pass entekhab kardant");
// }

// logical not  !
// console.log(!true); //output:false
// console.log(!false); // output:true
//   hamishe true
// if (condteinal){}
let user = false;
// if (!user) {
//   console.log("I find user in");
// }

// countinue and break
// countinue be shati ke toshe ignore mikone yani bi ahamit azash rad mishe
// break: agar shart baghrar bashe mishkane miad biron
// for (let i = 0; i < 10; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(i); //output :012456789
// }

// for (let index = 0; index < 6; index++) {
//   if (index == 4) {
//     break;
//   }
//   //   console.log(index);  output: 0123
// }

/* ------------------------------- switch case ------------------------------ */

let gerde = "SH";
// switch (gerde) {
//   case "S":
//     console.log('grade === "S"');
//   case "D":
//     console.log('grade === "D"');
//   case "SH":
//     console.log('grade === "SH"');
//   case "R":
//     console.log('grade === "R"');
//   case "T":
//     console.log('grade === "T"');
//   default:
//     console.log("ha ha heh");
// }
// out put:grade === "SH"
// grade === "R"
//  grade === "T"
//  ha ha heh

// switch (gerde) {
//   case "S":
//     console.log('grade === "S"');
//     break;
//   case "D":
//     console.log('grade === "D"');
//     break;
//   case "SH":
//     console.log('grade === "SH"');
//     break;
//   case "R":
//     console.log('grade === "R"');
//     break;
//   case "T":
//     console.log('grade === "T"');
//     break;
//   default:
//     console.log("ha ha heh");
//     break;
// }
// out put:grade === "SH"

/* ------------------------------- block scop ------------------------------- */

// to mahdode khodeshe va be biron darz pida nemikone bara hami behsh migim block scope

// let num = 12;
// if (num) {
//   let num = 20;
//   console.log(num); // out put: 20
// }
// console.log(num); //output:12

// const num = 12;
// if (num) {
//   const num = 20;
//   console.log(num); // out put: 20
// }
// console.log(num); //output:12

// var num = 12;
// if (num) {
//   var num = 20;
//   console.log(num); // out put: 20
// }
// console.log(num); //output:20
