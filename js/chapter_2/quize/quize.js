const form = document.querySelector("form");

const quizeOne = document.getElementsByName("datatype");

const quizeTwo = document.getElementsByName("method");
const score = document.querySelector("span");

form.addEventListener("submit", (e) => {
  // if (quizeTwo.target === "replace" && quizeOne.target === "int") {
  //   score.innerHTML = "0%";
  // }
  quizeOne.forEach((item) => {
    item.addEventListener("click", (e) => {
      console.log(e.target.value);
      e.target.value === "int"
        ? (score.innerHTML = "50%")
        : (score.innerHTML = "100%");
    });
  });

  quizeTwo.forEach((index) => {
    index.addEventListener("click", (e) => {
      console.log(e.target.value);
      e.target.value === "replace"
        ? (score.innerHTML = "50%")
        : (score.innerHTML = "100%");
    });
  });
  e.preventDefault();
});
