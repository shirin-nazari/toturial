/* ----------------------------------- oop ---------------------------------- */
/* --------------------------- object oriented js --------------------------- */
// const userOne = {
//   userName: "shirin",
//   email: "shieim@gamil.com",
//   login() {
//     console.log("login shodi (:");
//   },
//   logOut() {
//     console.log("logOut shodi ):");
//   },
// };
// console.log(userOne.userName, userOne.email);
// userOne.login();
// const userTwo = {
//   userName: "bahar",
//   email: "bahar@gamil.com",
//   login() {
//     console.log("login shodi (:");
//   },
//   logOut() {
//     console.log("logOut shodi ):");
//   },
// };
// console.log(userTwo.userName, userTwo.email);
// userTwo.login();

// const userThree = new User("maryam@gmail.com", "maryam");
// console.log(userThree);

// chon bara ma sakhte ke object hay tekrari besazim dast be class mizanim
/* ----------------------------- class componnet ---------------------------- */
// class User {
//   constructor(username, email) {
//     // this inja mani in ke object ro mide
//     (this.username = username), (this.email = email), (this.score = 0);
//   }
//   login() {
//     console.log(`${this.username}  logged in `);
//     return this;
//   }
//   logout() {
//     console.log(`${this.username}  logged out `);
//     return this;
//   }
//   incScore() {
//     this.score += 1;
//     console.log(`${this.username} has a score of ${this.score} `);
//     return this;
//   }
// }
// console.log(userOne, userTwo);
//              new
// kalame new miad ye object empty misaze
// value this ro michasbone (bind ) mikone be object empty
// har moghe ham seda bezani constructor ro ye object jadid misaze

//userOne.login().logout(); // out put:app.js:57 Uncaught TypeError: Cannot read properties of undefined (reading 'logout')
// chon return nakardim a undefind mide
// userOne.login().incScore().incScore().incScore().logout();
// out put:
//shirin  logged in
//  shirin has a score of 1
//  shirin has a score of 2
//  shirin has a score of 3
//  shirin  logged out
/* --------------------------------- extends -------------------------------- */
// extends az user yani har chi dari to user to in ham biari
// class Admin extends User {
//   constructor(username, email, title) {
//     // super bara dasrsi dashtan br parant object
//     super(username, email);
//     this.title = title;
//   }
//   deleteUser(user) {
//     users = users.filter((u) => {
//       return u.username !== user.username;
//     });
//   }
// }
// const userOne = new User("shirin", "shirin@gamil.com");

// const userTwo = new User("maryam", "maryam@gamil.com");
// const userThree = new Admin("bahar", "bahar@gamil.com", "project-manaiger");
// let users = [userOne, userTwo, userThree];
// // console.log(users);
// // userThree.deleteUser(userTwo);
// // console.log(users);
// console.log(userThree);
/* -------------------------------------------------------------------------- */
/* --------------------------- function componntet -------------------------- */
function User(username, email) {
  this.username = username;
  this.email = email;
  //   this.login = function () {
  //     console.log(`${this.username} logged in`);
  //   };
}
function Admin(username, email, title) {
  //bara inke chizay dakhel user biad sedash mizani
  User.call(this, username, email);
  this.title = title;
}
/* ----------------------- // add kardan ye prototype ----------------------- */
User.prototype.login = function () {
  console.log(`${this.username} his logged in `);
  return this;
};
User.prototype.logout = function () {
  console.log(`${this.username} his logged in `);
  return this;
};
Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function () {
  //delete
};
const userOne = new User("shirin", "shirin@gamil.com");

const userTwo = new User("maryam", "maryam@gamil.com");
userOne.login().logout();
const userThree = new Admin("bahar", "bahar@gamil.com", "project-manaiger");
console.log(userOne, userTwo, userThree);
// let users = [userOne, userTwo, userThree];
// console.log(users);
// userThree.deleteUser(userTwo);
// console.log(users);
// console.log(userThree);
