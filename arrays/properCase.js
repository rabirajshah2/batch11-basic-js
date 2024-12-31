const properCase = (str) => {
  const name = str.split(" ");
  const val = name.map((x) => x.charAt(0).toUpperCase() + x.substring(1));
  const val2 = val.join(" "); // convert array to string
  return val2;
};
console.log(properCase("rabi raj sah"));
