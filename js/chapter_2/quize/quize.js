const courectAnswer = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  const userAnswer = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];
  //check answer
  userAnswer.forEach((answer, index) => {
    if (answer === courectAnswer[index]) {
      score += 25;
    }
  });
  //show in webPage
  // window.scrollTo(0,0)
  scrollTo(0, 0);
  result.querySelector("span").textContent = `${score}%`;
  result.classList.remove("d-none");
});

/* ------------------------------- setTimeout ------------------------------- */
// setTimeout(()=>{
// do somthing
// }, daily)

/* ------------------------------ window Object ----------------------------- */
// console.log("hello");
// window.console.log("hello");
/* -------------------------------- answer me -------------------------------- */

// const form = document.querySelector("form");

// const quizeOne = document.getElementsByName("datatype");

// const quizeTwo = document.getElementsByName("method");
// const score = document.querySelector("span");

// form.addEventListener("submit", (e) => {
//   // if (quizeTwo.target === "replace" && quizeOne.target === "int") {
//   //   score.innerHTML = "0%";
//   // }
//   quizeOne.forEach((item) => {
//     item.addEventListener("click", (e) => {
//       console.log(e.target.value);
//       e.target.value === "int"
//         ? (score.innerHTML = "50%")
//         : (score.innerHTML = "100%");
//     });
//   });

//   quizeTwo.forEach((index) => {
//     index.addEventListener("click", (e) => {
//       console.log(e.target.value);
//       e.target.value === "replace"
//         ? (score.innerHTML = "50%")
//         : (score.innerHTML = "100%");
//     });
//   });
//   e.preventDefault();
// });
