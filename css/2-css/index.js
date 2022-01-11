let destination1 = {
  destinationName: "Edinburgh",
  distanceKms: 80,
  transportations: ["car", "bus", "train"],
};

let destination2 = {
  destinationName: "London",
  distanceKms: 650,
  transportations: ["car", "bus", "train"],
};

let destination3 = {
  destinationName: "Paris",
  distanceKms: 900,
  transportations: ["train", "plane"],
};

let destination4 = {
  destinationName: "Dublin",
  distanceKms: 350,
  transportations: ["plane", "ferry"],
};

let travelDestinations = [
  destination1,
  destination2,
  destination3,
  destination4,
];

let destinationNamesWithin500Kms = travelDestinations.filter(
  (travel) => travel.distanceKms <= 500
  //   return  ? : "";
); // Complete here

let destinationNameReachableByFerry = travelDestinations.filter((element) =>
  element.transportations.includes("ferry")
); // Complete here

let destinationNamesMoreThan300KmsAwayByTrain = travelDestinations.filter(
  (el) => el.distanceKms > 300 && el.transportations.includes("train")
); // Complete here (PRINT THE RESULT IN THE CONSOLE USING FOREACH)
console.log(destinationNamesWithin500Kms);
// console.log(destinationNameReachableByFerry);
// console.log(destinationNamesMoreThan300KmsAwayByTrain);
