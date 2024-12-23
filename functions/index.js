// Function is the main building block of a program

// Write a function  to calculate sum of two numbers

// Basic JS
const a = 1;
const b = 2;
const sum = a + b;
console.log(sum);

// ES5

// function Declaration
function add(x, y) {
  const sum = x + y;
  return sum;
}

// Function call
const val = add(5, 4);
console.log(val);

// Write a function to calculate area of rectangle(l*b)

function area(l, b) {
  const val = l * b;
  return val;
}
const res = area(5, 3);
console.log(res);

//ES6( Arrow Function)

// function Declaration
const addES6 = (x, y) => {
  const sum = x + y;
  return sum;
};

// Function call
const resES6 = add(5, 4);
console.log(resES6);

/*
Types of functions
1.Parameterized Function
2.Arrow function
3.Default Function
4. Closure Function
5.IIFEs Function
6. Callback Function
7.Anonymous Function
8.Pure Function
9.Explicit Function
10. Implicit Function
  */

// 1. Parameterized Function
// If parameters are passed to the function, it is called parameterized function

// What if there are multiple parameters ?
// If you are using more than two parameters, wrap parameters in a function with curly brackets

const addP = ({ a, b, c }) => {
  console.log(a, b, c);
  const sumP = a + b + c;
  return sumP;
};
const resP = addP({ a: 1, b: 0, c: 2 });
console.log(resP);

// Write a parameterized function to calculate volume of cubiod
const calVol = ({ l, b, h }) => {
  const vol = l * b * h;
  return vol;
};
const resV = calVol({ l: 5, b: 3, h: 2 });
console.log(resV);

// 2. Arrow Function
const areaArrow = (l, b) => {
  const val = l * b;
  return val;
};
const resA = areaArrow(5, 3);
console.log(res);

// 3.Default Function
// If the value of the function is to be defined in the begining, we use default function

// Real world use case : Page list, default language set

const welcomeUser = (userName = "user") => {
  return `Welcome ${userName}`;
};
console.log(welcomeUser("Rabi"));
console.log(welcomeUser("Raj"));
console.log(welcomeUser()); // Yo pxi kasaiko lagi xodyo vane tsko thauma user aauxa tsaile parameter ma userName="user " garyau natra matra userName parameter ma hunthyo

const pageList = (page = 1) => {
  return `I am page num  ${page}`;
};
console.log(pageList());
console.log(pageList(2));

// Write a function to handle language change

const languageHandle = (language = "Nepali") => {
  return `Your language is ${language}`;
};
console.log(languageHandle()); // It is for default value if you do not pass the parameter
console.log(languageHandle("English"));

// 4.Closure Function
//=>Closure Are the functions that retain the access
// to the variables from their containing scope even after the
// the parent function has finished executing

const counter = () => {
  let count = 1; // private varaible which cannot be accessed from outside
  return () => {
    console.log(count++);
    return ;
  };
};
const dashainCounter = counter();
dashainCounter();
dashainCounter();
dashainCounter();
dashainCounter();

const tiharCounter = counter();
tiharCounter();
tiharCounter();

// 3 uses of closure function
// i. partial application and currying (which we done in the code)
// ii.Private variables in module
// iii. Event handling (mouse click, scroll etc)

// 5. IIFEs (Immediately Invoked Functional Expression)
// In this we have to combine fn declaration and call 

(() =>{
    console.log("I am IIFEs");
})  ();

// Use Cases
// i. Run a script first in the website
// ii. DevOps Engineer, LOad the dummy data in the site


//6. CallBack Function:- When function is passed as paremeter, it is callback function;

const printFn = (result) =>{
console.log(result);
}

const multiply =( {a, b, fn}) =>{
const res=a*b;
fn(res);
}
multiply({a:2, b:3, fn:printFn});

// 7. Pure Function
// if the result does not change for input, the function is pure function
// Utilities Function(comma separator 10000 => 10, 000 ; Name Splitter, km into m converter)


// 8. Anonymous Function:- if there is no name in the function, it is called anonymous function

const hi = () =>{
    console.log("I am anonymous by ES6")
};
hi();

const hello = function(){
    console.log("I am anonymous by ES5");
};
hello();

// 9. Explicit Function:- If the return keyword is used to return the value, it is explicit function
const addNum = (a,b) => {
return a+b;
}
console.log(addNum(5,5));


// 10. Implicit Function
const sub = (a,b) => a-b;
console.log(sub(10,5));