const returnLongStr = (countries) => {
  let longestCountry = "";

  for (const country of countries) {
    if (country.length > longestCountry.length) {
      longestCountry = country;
    }
  }
  return longestCountry;
};
console.log(
  returnLongStr(["Australia", "Germany", "United States of America"])
);
