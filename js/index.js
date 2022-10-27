// Iteration 1: Names and Input
let hacker1 = "Zefanja";

console.log(`The driver's name is ${"Zefanja"}`);

let hacker2 = "Omar";
console.log(`The navigator's name is ${"Omar"}`);
//
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name!`);
} else if (hacker2.length > hacker1.length) {
  console.log(`The navigator has the longest name!`);
} else if (hacker1.length === hacker2.length) {
  console.log(` The names of ${hacker1} and ${hacker2} have the same length!`);
} else console.log(`I am not sure what sentence to put here!`);

// Iteration 3: Loops

// part1
for (const value of hacker1.toUpperCase()) {
  console.log(value);
}
//part2
if (hacker2 === hacker2) {
  console.log("ramO");
}
//part3
if (hacker1.charAt(0) === "z") {
  console.log(`The hackers name goes first`);
} else if (hacker2.charAt(0) === "o") {
  console.log(`Yo, the navigator goes first definitely`);
} else {
  console.log(`what?! You both have the same name?`);
}
