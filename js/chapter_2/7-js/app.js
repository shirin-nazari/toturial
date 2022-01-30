const getTodo = (resource, callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    //   console.log(request, request.readyState)
    if (request.readyState === 4 && request.status === 200) {
      // console.log(request.responseText); //get jison
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("colud not fetch", undefined);
    }
  });
  // request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  request.open("GET", resource);
  request.send();
};

getTodo("todo/todos.json", (err, data) => {
  console.log(data);
  getTodo("todo/shirin.json", (err, data) => {
    console.log(data);
    getTodo("todo/bahar.json", (err, data) => {
      console.log(data);
    });
  });
});

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
//   const flan=new Promise ()
// }

// make(ye parametr ghabol mikone).then(function(){}).then(function(){}).cash(error)
