const form = document.querySelector("form");
const quizeOne = document.querySelector(".quize1");
const quizeTwo = document.querySelector(".quize2");
const score = document.querySelector("span");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  quizeOne.addEventListener("click", (e) => {
    if (e.path[2]) {
      console.log("eroro");
    } else {
      console.log("nooo");
    }
  });
  quizeTwo.addEventListener("click", (e) => {
    if (e.path[1]) {
      console.log("errror");
    } else {
      console.log("heh");
    }
  });
});
