const form = document.querySelector("form");
const quizeOne = document.querySelector(".quize1 input");
const quizeTwo = document.querySelector(".quize2 input");
const score = document.querySelector("span");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(quizeOne.value);
  // quizeOne.addEventListener("onclick", (e) => {
  //   for (let index = 0; i <= quizeOne.length; index++) {
  //     if (quizeOne[i].checked) {
  //       console.log(quizeOne[index].value);
  //     }
  //   }
  // });
  // quizeTwo.addEventListener("onclick", (e) => {
  //   if (e.path[1]) {
  //     console.log("errror");
  //   } else {
  //     console.log("heh");
  //   }
  // });
});
