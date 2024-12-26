// ES5
const person_ES5 = new Array("Rabi", "Raj", 23);
console.log(person_ES5);

// ES6
// 1. create
const person_ES6 = ["Rabi", "Raj", 23];
console.log(person_ES6);

// 2. Read

const read = person_ES6; // we can read whole array
console.log(read);

console.log(person_ES6[0]); // we can read the index

// 3.Update

person_ES6[0] = "rabiraj"; // updated name
console.log(person_ES6);

//easy way to add items
const add = person_ES6.push("added objects1", "added objects2"); // add objects easily
console.log(person_ES6);

console.log(person_ES6.pop()); // it removes from the last

// Array destructure
const [first, second] = person_ES5;
console.log(second);
console.log(first);

//write a js function to sort the array in ascending order
const nameSorter = (names) => {
  console.log(names.sort());
}; // defaultly, sort is ascending
nameSorter(["bishal", "zeeson", "vikash", "raktim"]);

//write a js function to sort the data according to the age
// {name :"bishal" , age : 22 }, {name : "vikash" , age : 25 }, {name : "zeeson", age : 18 },{name : "raktim", age:32} ]);

const sortingArr = (parameter) => {
  const compareFn=(a,b) => a.age-b.age;
  return parameter.sort(compareFn);
};
console.log(
  sortingArr([
    { name: "bishal", age: 22 },
    { name: "vikash", age: 25 },
    { name: "zeeson", age: 18 },
    { name: "raktim", age: 32 },
  ])
);

// Immutable JS 
// map, filter, reduce, sort, every, some, includes, find
// https://github.com/jamesquick/javascript-array-function-practice

