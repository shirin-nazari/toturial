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

/* --------------------------- fuction declaration -------------------------- */

// function nameFunction (parametr){
//     block code
// }
// call function

welcome();

function welcome() {
  console.log("Hello welcome ////////////:");
}
// you work
/* --------------------------- function expression -------------------------- */

// const or let nameFunction =function(){
//     block code;
// }
// call function
// hello();
// vaghti bala tar seda mizani in error ro mide :::::error:::://: Cannot access 'hello' before initialization
const hello = function () {
  console.log("hello");
};
// hello();
// you work

// parametr and assignment

// function firstName(name) {
//   console.log(`good job ${name}`);
// }
// firstName("shirin");
// default value in parametr
function firstName(name = "shirin") {
  console.log(`good job ${name}`);
}
// firstName("bahar");

// return value in function
// bara end function estfde midhe va ye value  ro moshakhas mikone baray call
// function reduc(redus) {
//   return redus * 6;
// }
// const arr = reduc(2);
// console.log(arr);

/* ----------------------------- arrow function ----------------------------- */

// const arrow = () => "hello , world";

/* --------------------------------- methods -------------------------------- */
// forEach            index ro neshon mide
// aps.forEach((person, index) => console.log(index + "-" + person));

// const arrowName = (person, index) => {
//   console.log(`${index} - hello jigar aps ${person}`);
// };

// aps.forEach(arrowName);

/* ------------------------------ querySelector ----------------------------- */

const ul = document.querySelector(".aps-admin");
let html = "";
aps.forEach((person) => {
  html += `<li style="color:red; ">${person}</li> `;
});
ul.innerHTML = html;

/* --------------------------------- object --------------------------------- */

let objectName = {
  //kry : value,
  name: "shirin",
  location: [
    { title: "mashhad shar", likes: 30 },
    { title: "newyourk", likes: 20 },
  ],
  email: "shirin@gmail.com",
  age: 19,
  login: function () {
    console.log("hello im log in ");
  },
  //dar function dasrsi be baghiee chiz hay to object
  /* ---------------------------------- this ---------------------------------- */
  logOut: function () {
    this.location.forEach((loc) =>
      console.log(`${this.name}   ${loc.title}   ${loc.likes}`)
    );
  },
  // dar object az arrow function estefade nmishe baray in ke vaghti az this estefade mikoni object window ro mibini
  logIn: () => {
    // console.log(this); out put:Window {window: Window, self: Window, document: document, name: '', location: Location, …}
  },
};
// viwe in value
// console.log(objectName.name);
// console.log(objectName["email"]);
// update value
objectName.age = 20;
// console.log(objectName.age);
// objectName.login();
// objectName.logOut();
// objectName.logIn();
/* ------------ math that is object any thing and method and key ------------ */
// console.log(Math); //kol method hay math
const eara = 7.5;
// console.log(Math.round(eara)); //output:8
// console.log(Math.ceil(eara)); //output:8
// console.log(Math.trunc(eara)); //output:7
// console.log(Math.floor(eara)); //output:7
// console.log(Math.floor(Math.random() * 10)); //out put: addad bin 0ta 10
/* ----------------------------- primitive value ---------------------------- */
let oneScor = 50;
let twoScor = oneScor;
// console.log(`oneScore: ${oneScor}  , twoScore: ${twoScor}`);
oneScor = 100;
// console.log(`oneScore: ${oneScor}  , twoScore: ${twoScor}`);

const userOne = { name: "shirin", age: 20 };
const userTwo = userOne;
// console.log(userOne, userTwo);
userTwo.age = 12;
// change two object
// console.log(userOne, userTwo);
