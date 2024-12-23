// Write a js program to join two words

const joinWords = (a, b) => a.concat(" ", b); //Implicit
console.log(joinWords("Rabi", "Raj"));

// Write a implicit JS to covert celsius to fahrenheit and viceversa.

const tempConv = (val, type) =>
  type === "c" ? `${(9 / 5) * val + 32}F` : `${(5 * val - 32 * 5) / 9}C`;
console.log(tempConv(60, "c"));
console.log(tempConv(45));

// write a JS to convert 981954885 into 981......85

const protectNum = (a) => {
  const str = a.toString();
  const first = str.slice(0, 3);
  const last = str.slice(-2);
  const real = "*****";
  const word = first.concat(real, last);
  return word;
};
console.log(protectNum(9819254885));

// write a js function that generates slug using title

const genSlug = (str) =>
  str.toLowerCase().replaceAll(" ", "-").replaceAll(/[',.]/g, ""); // functional chaining

console.log(genSlug("Hello, I'm Rabi Raj Sah.."));

// Write a js function to generate a proper case for the given name
// rabi raj prasad sah => Rabi Raj Prasad Sah
const upCase = (str) =>{
    str.replaceAll()

}
console.log(upCase("rabi raj prasad sah"));
