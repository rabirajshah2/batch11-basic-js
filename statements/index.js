// statements (condition check)

//ES5
// if else , switch case

//1. if else statement

/*
const val = confirm("Are you male?");
console.log(val);
if (val) {
  alert("You are male");
} else {
  alert("You are female");
}
  */

//2. switch case

/*
const day = prompt("Which day is today?");

switch (day) {
  case "sun":
    console.log("today is sunday");
    break;

  case "mon":
    console.log("today is monday");
    break;

  case "tue":
    console.log("today is tuesday");
    break;

  case "wed":
    console.log("today is wednesday");
    break;

  default:
    console.log("Invalid");
}
*/

// Write a js program to check user grade

/*
const grade = prompt("Enter your mark");

switch (true) {
  case grade > 80:
    console.log("You got distinction");
    break;

  case grade > 70:
    console.log("You got B+");
    break;

  case grade > 60:
    console.log("You got B");
    break;

  case grade < 60:
    console.log("You failed");
    break;

  default:
    console.log("Invalid");
}
    */

// ES6
// Ternary operators

// for confirm key use this type of syntax
//const myGender = confirm("are you male?");
// if(myGender){
//     alert("You are male");
// }else{
//     alert("You are female");
// }

//condition ? true                  : false;

//myGender ? alert("You are male") : alert("You are female");

//for prompt keyword use this type of syntax
//const myGender1 = prompt("What is your gender(m/f)?");
// m bahek j input dida ni false wala con execute hunxa
//myGender1 === "m" ? alert("male") : alert("female");

// switch case using ternary operator
// gender m,f,o,worng
const myGender2 = prompt("What is your gender(m/f/o/w)?");

myGender2 === "m"
  ? alert("You are male")
  : myGender2 === "f"
  ? alert("You are female")
  : myGender2 === "o"
  ? alert("You are others")
  : alert(" wrong gender");

// write the js program to tell the part of the day
// good morning 5-12
// good afternoon 12-5
// good evening 5-8
// good night 8-12

const partOfDay = prompt("What is the part of the day?");

partOfDay === "m"
  ? alert("morning")
  : partOfDay === "a"
  ? alert("afternoon")
  : partOfDay === "e"
  ? alert("evening")
  : partOfDay === "n "
  ? alert("night")
  : alert("wrong part");
