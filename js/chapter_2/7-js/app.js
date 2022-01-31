// const getTodo = (resource, callback) => {
//   const request = new XMLHttpRequest();
//   request.addEventListener("readystatechange", () => {
//     //   console.log(request, request.readyState)
//     if (request.readyState === 4 && request.status === 200) {
//       // console.log(request.responseText); //get jison
//       const data = JSON.parse(request.responseText);
//       callback(undefined, data);
//     } else if (request.readyState === 4) {
//       callback("colud not fetch", undefined);
//     }
//   });
//   // request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
//   request.open("GET", resource);
//   request.send();
// };

// getTodo("todo/todos.json", (err, data) => {
//   console.log(data);
//   getTodo("todo/shirin.json", (err, data) => {
//     console.log(data);
//     getTodo("todo/bahar.json", (err, data) => {
//       console.log(data);
//     });
//   });
// });

/* --------------------------- call back function --------------------------- */
// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
// }, 1000);
// setTimeout(() => {
//   document.body.style.backgroundColor = "pink";
// }, 1000);
// setTimeout(() => {
//   document.body.style.backgroundColor = "orange";
// }, 1000);
// setTimeout(() => {
//   document.body.style.backgroundColor = "yellow";
// }, 1000);

// setTimeout(() => {
//   document.body.style.backgroundColor = "green";
// }, 1000);
// faghat az ghermz omad to sabz
/* ---------------------------- // hell callback ---------------------------- */
// const time = 1000;
// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "pink";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "orange";
//       setTimeout(() => {
//         document.body.style.backgroundColor = "yellow";
//         setTimeout(() => {
//           document.body.style.backgroundColor = "green";
//           setTimeout(() => {
//             document.body.style.backgroundColor = "blue";
//           }, time);
//         }, time);
//       }, time);
//     }, time);
//   }, time);
// }, time);
/* -------------------------------------------------------------------------- */
/* --------------------------------- Promise -------------------------------- */
// sintax:

// make function(){
//   return new Promise ((resolve,reject)=>{
// some thing
// })
// }

// make(ye parametr ghabol mikone).then(function(){}).then(function(){}).catch(error)
// const getSomeThing = () => {
//   return new Promise((resolve, reject) => {
//     resolve("eshtebah mizani");
//     reject("heh");
//   });
// };
// getSomeThing()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// function bala ba estefade az promise
// const getTodo = (resource) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.addEventListener("readystatechange", () => {
//       //   console.log(request, request.readyState)
//       if (request.readyState === 4 && request.status === 200) {
//         // console.log(request.responseText); //get jison
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject("colud not fetch");
//       }
//     });
//     // request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
//     request.open("GET", resource);
//     request.send();
//   });
// };
// getTodo("todo/shirin.json")
//   .then((data) => {
//     console.log(data, " i get shirin");
//     return getTodo("todo/bahar.json");
//   })
//   .then((data) => {
//     console.log(data, "i get bahar");
//     return getTodo("todo/todos.json");
//   })
//   .then((data) => {
//     console.log(data, "i get todos");
//   })
//   .catch((err) => {
//     console.error(err);
//   });

/* -------------------------------- fetch API ------------------------------- */
// ye rabet bin js ba http hast

// fetch("todo/shirin.json")
//   .then((response) => {
//     console.log("resolved ", response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data, "Im get data");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

/* ------------------------------- async await ------------------------------ */
const todos = async () => {
  const response = await fetch("todo/todosdd.json");
  if (response.status !== 200) {
    //throw tavasot karbar tatif mishe va inke ejra function ghabli motevaghf mishe
    throw new Error("can not fetch data");
  }
  const data = await response.json();
  // console.log(response);
  return data;
};
console.log(1);
console.log(2);
todos()
  .then((data) => console.log("resolved :", data))
  .catch((err) => console.log("rejected:", err.message));
console.log(3);
console.log(4);

// const test = todos();
// console.log(test); //output: chon async hast Promise {<fulfilled>: undefined} khoroji ye promise mide
