const form = document.querySelector(".signup-form");
// const usernameID = document.querySelector("#username");
const feedback = document.querySelector(".feedback");
const usernamePattern = /^[a-zA-Z]{6,12}$/;
form.addEventListener("submit", (e) => {
  // get value input avali
  //   console.log(form.username.value);
  //   console.log(username.value);
  // bara stop kardan chiz haye khal form
  e.preventDefault();
  // if (form.username.value.length <= 6) {
  //   // console.log("why");
  // }
  // pattern.test(form.username.value);

  //validation
  const username = form.username.value;
  if (usernamePattern.test(username)) {
    // feedBack good
    feedback.textContent = "username is valid (:";
  } else {
    // feedback hellp
    feedback.textContent =
      "username length between 6-12 az %^&^&% dont use and a-z";
  }
});
/* ---------------------------------- RegEx --------------------------------- */
// const pattern = /^[a-z]{6,}$/;

// const username = "shei145***rin";
// // let result = pattern.test(username);
// // console.log(result);

// let result = username.search(pattern); //output:number
// console.log(result);

form.username.addEventListener("keydown", (e) => {
  // console.log(e.target.value);
  if (usernamePattern.test(e.target.value)) {
    form.username.setAttribute("class", "sucess");
  } else {
    form.username.setAttribute("class", "error");
  }
});
