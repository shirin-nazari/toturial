/* ---------------------- get element by query selector --------------------- */
// query selector signle element faghat yeki
// const getH2 = document.querySelector("h2");
// console.log(getH2);
// dakhel querySelector bekhy esm class ro seda bezani bayad . bezari ghablesh mesl css
// const getClass = document.querySelector("p.course");
// bara gerftan avalin p ke calss course dare
// console.log(getClass);
// const getfirstH1 = document.querySelector("body > h1");
// get first child body ke h1
// console.log(getfirstH1);
/* --------------------------- query selector All --------------------------- */

// get all elemetn va be sort node list barmigarde
// const spanList = document.querySelectorAll("span");
// spanList.forEach((span) => {
//   console.log(span);
// });
// console.log(spanList);
/* ---------------------------- get element by id --------------------------- */
// const h1News = document.getElementById("title-page");
// console.log(h1News);

/* ------------------------ get element by class name ----------------------- */
// const classCurse = document.getElementsByClassName("course");
// console.log(classCurse);

/* ------------------------- get element by tag name ------------------------ */
// const tagName = document.getElementsByTagName("span");
// console.log(tagName);

/* -------------------------- change inside element by html ------------------------- */
// const getH2 = document.querySelector("h2");
// // innerhtml yek peoperty has ne methodddddddddddd
// console.log(getH2.innerHTML);
// getH2.innerHTML = "<h1>It is big company(((((((((((:</h1>";

// // getH2.innerText = "It is big company ((((((((((:";
// const people = ["shirin", "bahar", "maryam"];
// const spanList = document.querySelector("span");

// //   span.innerHTML += "<h2>wow new user</h2>";

// people.forEach((person) => {
//   spanList.innerHTML += `<p>${person}</p>`;
// });
// // change kardan attrbute
// const link = document.querySelector("a");
// // gerftan attrbute
// console.log(link.getAttribute("href"));
// // set kardan attribute (kodom attrbute , che taqiri)
// link.setAttribute("href", "www.youtube.com");
// link.innerText = "Go to youtube";
// link.setAttribute("style", "color:pink; background:gray");

/* ----------------------------- changble style ----------------------------- */
// const titleH1 = document.querySelector("#title-page");
// console.log(titleH1.style);

// // chon style ye object hast
// titleH1.style.margin = "100px";
// titleH1.style.color = "crimson";
// // js - ro nimishenase
// titleH1.style.fontSize = "100px";
// // remove style in js
// titleH1.style.margin = "";
// /* -------------------------------- classList ------------------------------- */
// const div = document.querySelector("div");
// console.log(div.classList);
// div.classList.add("course");
// div.classList.remove("course");
// div.classList.add("sucses");

const parageraf = document.querySelectorAll("p");
parageraf.forEach((para) => {
  if (para.textContent.includes("course")) {
    para.classList.add("course");
  } else if (para.innerText.includes("sucses")) {
    para.classList.add("sucses");
  }
  para.classList.toggle("test"); // on
  para.classList.toggle("test"); // off
});

// fargh text content va inner text dar in hast ke inner text vaghti display none bashe vva to safhe dide nashe to console ham neshon nmideh ama textContent to console neshon mide
