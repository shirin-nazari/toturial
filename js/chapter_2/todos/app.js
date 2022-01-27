const ulList = document.querySelector("ul");

const icons = document.querySelectorAll("i");
const li = document.querySelectorAll("li");

/* --------------------------- remove karadan todo -------------------------- */
// icons.forEach((i) =>
//   i.addEventListener("click", (e) => {
//     li.forEach((item) =>
//       item.addEventListener("click", (e) => {
//         item.remove();
//       })
//     );
//   })
// );

// ravesh dige delete kardan
ulList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
/* -------------------------------------------------------------------------- */
/* ------------------------ add karadan data ba input ----------------------- */
// const inputTextAdd = document.querySelector("input[type=text]");
// const buttonAdd = document.querySelector("#button-addon1");
// inputTextAdd.addEventListener("change", (e) => {
//   console.log(e.target.value);
//   const newLi = document.createElement("li");
//   const newIcons = document.createElement("i");
//   newIcons.className = "fas fa-trash-alt float-end";
//   newLi.classList = "list-group-item";
//   newLi.textContent = e.target.value;
//   newLi.appendChild(newIcons);
//   ulList.appendChild(newLi);
//   e.target.value = "";
//   //  remove for new icons
//   newIcons.addEventListener("click", () => newLi.remove());
// });
// ravesh dige add kardan
const formAdd = document.querySelector(".add");
const genrateTemplate = (todo) => {
  const html = `
     <li class="list-group-item ">
          <span>${todo}</span>  
            <i class="fas fa-trash-alt delete float-end active"></i>
      </li>
  `;
  ulList.innerHTML += html;
};
formAdd.addEventListener("submit", (e) => {
  e.preventDefault();
  const toDo = formAdd.add.value.trim();
  if (toDo.length) {
    genrateTemplate(toDo);
    formAdd.reset();
  }
});
/* -------------------------------------------------------------------------- */
/* ------------------------------ search button ----------------------------- */
const searchInput = document.querySelector(".search input");

const filterTodos = (term) => {
  Array.from(ulList.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => {
      todo.classList.add("filtered");
    });
  Array.from(ulList.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => {
      todo.classList.remove("filtered");
    });
};
searchInput.addEventListener("keyup", () => {
  const term = searchInput.value.trim().toLowerCase();
  filterTodos(term);
  // const itemList = li.forEach((item) => {
  //   return item.textContent;
  // });
  // if (value == itemList) {
  //   console.log("hey");
  // } else {
  //   console.log(" dari eshtebah mizani");
  // }
  //   e.target.value===li.target.value
});
