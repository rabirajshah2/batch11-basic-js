const interest = (principal, rate, compoundsPerYear, time) => {
  const amt =
    principal * Math.pow(1 + rate / compoundsPerYear, compoundsPerYear * time);
  const interestAmt = amt - principal;
  return {
    Amount: amt.toFixed(2),
    Interest: interestAmt.toFixed(2),
  };
};
const result = interest(1000, 0.1, 3, 3);
console.log(`The original amount is ${result.Amount}`);
console.log(`The compound interest is ${result.Interest} `);
