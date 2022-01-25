/* --------------------------------- filter --------------------------------- */
const number = [20, 10, 8, 35, 50, 100, 40];
// filter ye call back function migire va be andaze array ejra mishe va ye array bar migardone
const filterNum = number.filter((num) => {
  //   return true; out put : ye array ba hafta index
  return num > 20; // outPut:[35, 50, 100, 40]
});
console.log(filterNum);
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
console.log(userFilter);
