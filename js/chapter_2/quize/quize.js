const form = document.querySelector("form");
const quizeOne = document.querySelector(".quize1").checked;
// console.log(quizeOne);
// const quizeTwo = document.querySelector(".quize2");
// const score = document.querySelector("span");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let amountCorrect = 0;
  for (let i = 1; i <= 45; i++) {
    var radios = document.getElementsByName("quize1" + i);
    for (let j = 0; j < radios.length; j++) {
      var radio = radios[j];
      if (radio.value == "correct" && radio.checked) {
        amountCorrect++;
      }
    }
  }

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
// });
// function handleClick() {

// }
// handleClick;
