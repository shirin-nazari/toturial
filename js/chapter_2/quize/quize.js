const form = document.querySelector("form");
const quizeOne = document.querySelector(".quize1").checked;
// console.log(quizeOne);
// const quizeTwo = document.querySelector(".quize2");
// const score = document.querySelector("span");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("Correct Responses: " + amountCorrect);
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
});
