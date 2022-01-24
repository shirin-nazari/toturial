const form = document.querySelector("form");

const quizeOne = document.getElementsByName("datatype");

const quizeTwo = document.getElementsByName("method");
const score = document.querySelector("span");
const sloveQuizeOne = quizeOne.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.value);
  });
});
const sloveQuizeTwo = quizeTwo.forEach((index) => {
  index.addEventListener("click", (e) => {
    console.log(e.target.value);
  });
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (sloveQuizeOne === "int" || sloveQuizeTwo === "replace") {
    score.innerHTML = "50%";
  } else {
    score.innerHTML = "100%";
  }
});
