/* --------------------------------- filter --------------------------------- */
const number = [20, 10, 8, 35, 50, 100, 40];
// filter ye call back function migire va be andaze array ejra mishe va ye array bar migardone
const filterNum = number.filter((num) => {
  //   return true; out put : ye array ba hafta index
  return num > 20; // outPut:[35, 50, 100, 40]
});
// console.log(filterNum);
// filter be Array ma dast nmizane va taqiresh nmide
const users = [
  { name: "shirin", student: true },
  { name: "bahar", student: true },
  { name: "maryam", student: true },

  { name: "pourya", student: false },
  { name: "mehdi", student: true },
  { name: "bani", student: false },
];
const userFilter = users.filter((user) => user.student); //outPut 0: {name: 'shirin', student: true}
// 1: {name: 'bahar', student: true}
// 2: {name: 'maryam', student: true}
// 3: {name: 'mehdi', student: true}
// faghat true ha ro neshon dad
// console.log(userFilter);
// console.log(users);
/* -------------------------------------------------------------------------- */

/* ----------------------------------- map ---------------------------------- */

// map in method in the Array

// const numberMap = number.map((i) => i);
// console.log(numberMap);
// agar chizi be ba map asin koni ro array ejra mishe

// map ye new array be ma barmigardone

const products = [
  { name: "shirin", price: 20 },
  { name: "bahar", price: 15 },
  { name: "maryam", price: 30 },

  { name: "pourya", price: 40 },
  { name: "mehdi", price: 10 },
  { name: "bani", price: 50 },
];

const productsMap = products.map(
  (product) =>
    product.price > 30
      ? { name: product.name, price: product.price / 2 }
      : product
  // chon inja assian kardim bara hami dasst to array mibare va array ro taqir mide
  //   product.price = product.price / 2;
  // return product;
  // }
);
// console.log(products, productsMap);
/* -------------------------------------------------------------------------- */

/* --------------------------------- reduce --------------------------------- */
// ro element ghabli mosahebe mikone

const score = [20, 10, 8, 35, 50, 100, 40, 60, 15, 14];
// const reduceScore = score.reduce((acc, curr) => {
//   if (curr > 30) {
//     acc++;
//   }
//   return acc;
// }, 0); //start acc)
// console.log(reduceScore); //outPut : 5
// reduce single
const plays = [
  { player: "shirin", score: 20 },
  { player: "bahar", score: 15 },
  { player: "maryam", score: 30 },
  { player: "shirin", score: 50 },
  { player: "shirin", score: 100 },
  { player: "shirin", score: 30 },
];
const totalShirin = plays.reduce((acc, curr) => {
  if (curr.player === "shirin") acc += curr.score;
  return acc;
}, 0);

console.log(totalShirin);
