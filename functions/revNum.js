const revNum = (val) => {
  const str = String(val).split("").reverse().join("");
  const value = Number(str);

  return value;
};
console.log(revNum(1234));
