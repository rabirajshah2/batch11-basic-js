const num = 13;
if (num % 7 == 0 && num % 3 == 0) {
  console.log("The given number " + num + " is multiple of 3 and 7");
} else if (num % 3 == 0) {
  console.log("The given number " + num + " is multiple of 3");
} else if (num % 7 == 0) {
  console.log("The given number " + num + " is multiple of 7");
} else {
  console.log("The given number " + num + " is not multiple of 3 and 7");
}
