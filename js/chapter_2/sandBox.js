/* ----------------------------- pop in the page ---------------------------- */

// alert("hello power woman ((((((((((((:");
let count = 1;

// console.log(count);
// console.log("hello ", 1);

/* ----------------------------- data type in js ---------------------------- */
// Number: 1,2,100,1000,1.3,13.5;
// string: 'shirin' ,"naZarinkfksjflsfjkas"
// boolean : true  or false

// Null: no value        in set value       }
//  undefined : no value    in get undefind       } both empty value

// object: array , function ,  every thing to js object

// Symbol: used with object

/* -------------------------------------------------------------------------- */

/* ---------------------------- data type strings --------------------------- */
let firstName = "Shirin";
let lastName = "Nazari";
let email = "shirinnazari@gmail.com";
// not space between
// let fullName = firstName + lastName;
let fullName = firstName + " " + lastName;
// console.log(fullName);
// getting character
// console.log(fullName[0], fullName[7]);
// length string
// console.log(fullName.length);
// string method
// console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
// console.log(result);
// let index = email.indexOf("@");
// console.log(index);
// akharin 'n' ro myare
// console.log(result.lastIndexOf("n"));
// console.log(email.slice(0, 8));
// console.log(email.substring(2, 10));
// console.log(firstName.replace("n", "oh oh cheshatam mese man rangie"));

/* -------------------------------------------------------------------------- */

/* ---------------------------- data type number ---------------------------- */

let num = 20;
let pi = 3.14;

// math operators : + , - , * , / , ** , %
// console.log(num ** 2);
// console.log(pi * num ** 2);
// num++;
// console.log(num);
// console.log(--num);
// num *= 2;
// console.log(num);
// num /= 2;
// console.log(num);

//  NAN      NAN        NAN  NaN NAN        NAN        NAN         NAN       NAN      NAN       NAN

// Nan = not a number
// for exmaple
//console.log(5 / "hello"); // output : NaN
//console.log(0 / 0); // output : NaN

//console.log("My name is shirin Im " + num + " years old");
// console.log(`My name is shirin Im ${num} years old`);

/* -------------------------------------------------------------------------- */

/* ---------------------------------- Array --------------------------------- */

let aps = ["shirin", "bani", "maryam ", "bahar"];
// be sorat string tabdil Mikone va ba asas on chizi ke to parantez has joda mikone
// console.log(aps.join(","));
// console.log(aps.length);
// console.log(aps.concat(["beni", "pourya ", "alireza", "sirvan", "mahjan"]));
// be akhari ba push kardan mitoni ezafe koni
let outPut = aps.push("mahya");
// hazf akharin element in array
// outPut = aps.pop();
// console.log(aps);

/* -------------------------------------------------------------------------- */

/* --------------------------- undefined and null --------------------------- */

// undefined ro system be ma mide ama null ro khodemon midim
// let number;
// console.log(number, number + 3, `it is ${number}`);  out put :  undefined NaN 'it is undefined'
let number = null;
// console.log(number, number + 3, `it is ${number}`); out put : null 3 'it is null'

/* -------------------------------------------------------------------------- */

/* --------------------------------- boolean -------------------------------- */

console.log(true, false, "true", "false");
let concect = aps.includes("bahar");

// console.log(concect);
// operation boolean
let age = 10;
// console.log(age === 10) outPut= true
// console.log(age === 12) outPut = false;
// console.log(age <= 12); //outPut = true
// console.log(age >= 12); //outPut = false;
// console.log(age !== 12); //outPut = true;
// console.log(age !== 10); //outPut = false;

let name = "shirin";

// console.log(name === "shirin"); //outPut =true;
// console.log(name === "bahar"); //outPut =false;
// console.log(name >= "s"); //outPut =true;
// console.log(name <= "s"); //outPut =false;
// console.log(name !== "shirin"); //outPut =false;
// console.log(name !== "dsfjusdh"); //outPut =true;

/* -------------------------------------------------------------------------- */
let score = "100";
// console.log(score + 1); //outPut:1001
console.log(typeof score); //outPut:string

score = Number(score);
console.log(score + 1); //outPut:101
console.log(typeof score); //outPut:number
