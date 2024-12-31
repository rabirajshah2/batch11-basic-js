// Compare the 2 arrays and find common food if any.

let food = ["Noodle", "Pasta", "Ice-cream"];
let food1 = ["Fries", "Ice-cream", "Pizza"];

const common = (arr1, arr2) => {
  const val = arr1.filter((item) => arr2.includes(item));
  return val;
};

console.log(common(food, food1));
