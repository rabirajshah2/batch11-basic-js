const checkPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return "The number is not a prime";
    } else {
      return "The number is  a prime";
    }
  }
};
console.log(checkPrime(13));
