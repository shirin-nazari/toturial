// /* ----------------------- store data in localStorage ----------------------- */
// //                     key     value
// localStorage.setItem("name", "shirin");
// localStorage.setItem("age", 20);
// // go to inspect and go to apllication and check localStorage

// /* ----------------------- get data from localStorage ----------------------- */
// let name = localStorage.getItem("name");
// let age = localStorage.getItem("age");
// console.log(name, age);
// /* --------------------------- update localStorage -------------------------- */
// // localStorage.setItem("name", "bahar");
// // localStorage.age = "22";
// // name = localStorage.getItem("name");
// // age = localStorage.getItem("age");
// // console.log(name, age);

// /* --------------------- deleting data from localStorage -------------------- */
// // localStorage.removeItem("name");
// name = localStorage.getItem("name");
// // console.log(name); //output:null
// // delet all property
// localStorage.clear();
// name = localStorage.getItem("name");
// age = localStorage.getItem("age");
// console.log(name, age); //output:null null

const todos = [
  {
    text: "Im player game",
    auther: "shirin",
  },
  { text: "Im player ", auther: "bahar", point: 100, working: true },
  {
    text: "Im making post ",
    auther: "maryam",
  },
  {
    text: "Im put on to page",
    auther: "pourya",
  },
];
// console.log(JSON.stringify(todos));
// localStorage.setItem("todos", JSON.stringify(todos));
// const stored = localStorage.getItem("todos");
// console.log(JSON.parse(stored));
