const cal = () => {
  return (a, b) => {
    const multiplication = a * b;
    console.log(`The multiplication of two num is :${multiplication}`);

    const division = a / b;
    console.log(`The division of  num is :${division}`);

    return;
  };
};
const calculate = cal();
calculate(10, 5);
