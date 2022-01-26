const ulList = document.querySelector("ul");

const icons = document.querySelectorAll("i");
const li = document.querySelectorAll("li");

/* --------------------------- remove karadan todo -------------------------- */
icons.forEach((i) =>
  i.addEventListener("click", (e) => {
    li.forEach((item) =>
      item.addEventListener("click", (e) => {
        item.remove();
      })
    );
  })
);
/* -------------------------------------------------------------------------- */
/* ------------------------ add karadan data ba input ----------------------- */
const inputTextAdd = document.querySelector("input[type=text]");
const buttonAdd = document.querySelector("#button-addon1");
inputTextAdd.addEventListener("change", (e) => {
  console.log(e.target.value);
  const newLi = document.createElement("li");
  const newIcons = document.createElement("i");
  newIcons.className = "fas fa-trash-alt float-end";
  newLi.classList = "list-group-item";
  newLi.textContent = e.target.value;
  newLi.appendChild(newIcons);
  ulList.appendChild(newLi);
  e.target.value = "";
  //  remove for new icons
  newIcons.addEventListener("click", () => newLi.remove());
});
/* -------------------------------------------------------------------------- */
/* ------------------------------ search button ----------------------------- */
const searchInput = document.querySelector("input");
const buttonSearch = document.querySelector("button");
console.log(buttonSearch);
// const formSearch = document.querySelector("form");
searchInput.addEventListener("change", (e) => {
  //   console.log(e.target.value);
  let value = e.target.value;
  const itemList = li.forEach((item) => {
    return item.textContent;
  });
  if (value == itemList) {
    console.log("hey");
  } else {
    console.log("dari eshtebah mizani");
  }
  //   e.target.value===li.target.value
});
