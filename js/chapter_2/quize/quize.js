const form = document.querySelector("form");
const quizeOne = document.querySelector(".quize1").value;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(form.array.value);
});
