const form = document.querySelector(".signup-form");
const username = document.querySelector("#username");
form.addEventListener("submit", (e) => {
  // get value input avali
  //   console.log(form.username.value);
  //   console.log(username.value);
  // bara stop kardan chiz haye khal form
  e.preventDefault();
  if (username.Value.length <= 6) {
    console.log("why");
  }
});
