// Compare the 2 arrays and  if there is common food then return trues.

let food = ["Noodle", "Pasta", "Ice-cream"];
let food1 = ["Fries", "Ice-cream", "Pizza"];

const common = (arr1, arr2) => {
  const val = arr1.some((item) => arr2.includes(item));
  return val;
};

console.log(common(food, food1));
