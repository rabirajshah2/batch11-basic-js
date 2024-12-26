// representation of real world individual item

// Complex data types

// Four CRUD operations (create , read , update and delete)

// 1. create
//ES5
const empt = new Object(); // empty object

// ES6

const empty = {};

const person = {
  // property: key value pair
  Name: "Rabi Raj Sah",
  Year: 2003,
  isAdult: true,
  phone: {
    office: 123456,
    personal: 466546454,
  },
  age_ES5: function () {
    return 2025 - this.Year;
  },
  age_ES6: () => 2025 - person.Year,
};
console.log(person);

// 2. Read
// We use dot (.) notation to access data from object

console.log(person.Name);
console.log(person.age_ES5); // It only returns the function
console.log(person.age_ES5());
console.log(person.age_ES6()); // It returns the value

console.log(person.phone);
console.log(person.phone.office);

// 3. Update

person.Name = "Rabi Raj"; // name updated
person.isStudent = true; // New field added
console.log(person);

// 4. Delete

// ES5

// delete person.phone;
// console.log(person);

// Why not to use this ?
// Because it will cause application failure because data are golden source for application

// ES6
// object destructure and spread operator
// Or object assignment / reassignment

const { phone, ...rest } = person;
console.log(rest);

/* 
 Find the value of the price property and if it is greater than 100, discount it by 10%. 
 If that’s not the case, discount it by 7%.
  b. Update the object with the new property - discount and 
  the corresponding value (7% or 10%) and the new price.
*/

// let prod = {
//     name: "headphones",
//     price: 83.7,
//     };

const product = {
  name: "headphone",
  price: 83.7,
};

const { price, ...newProd } = product;

newProd.price =
  Number(price) > 100
    ? (Number(price) - 0.1 * Number(price)).toFixed(2)
    : (Number(price) - 0.07 * Number(price)).toFixed(2);
// newProd.price=price; instead of adding here directly add price property in newProd as just up it
// In this converting price to Number is optional but in another case you have to convert
// to.Fixed is used to fix number after decimal
newProd.discount = price > 100 ? "10%" : "7%";

console.log(newProd);

const car1 = { name: "Tesla", model: " cybertruck", year: 2024 };
const car2 = { name: "Tesla", model: " cybertruck", year: 2024 };
// write a js function to compare to objects and return the boolean

const compareValue = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1){
    if(obj1[key] !== obj2[key])
    {
      return false;
    }
  }
  return true;
};
console.log(compareValue(car1, car2));
