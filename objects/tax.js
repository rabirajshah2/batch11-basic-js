const myBike = {
  name: "RoyalEnfield",
  engineCc: 350,
  type: "bike",
};

const findVal = (vehicle, tax = 1500) => {
  const engine = vehicle.engineCc;
  const taxAmt =
    engine > 200 && engine < 350
      ? (tax = 1500 + 0.2 * 1500)
      : engine > 100 && engine < 200
      ? (tax = 1500 + 0.15 * 1500)
      : (tax = 1500 + 0.3 * 1500);
  if (vehicle) {
    vehicle.tax = taxAmt;
    return vehicle;
  }
  return null;
};
console.log(findVal(myBike));
