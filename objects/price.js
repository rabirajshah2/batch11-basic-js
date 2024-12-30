let prod = {
  name: "headphones",
  price: 83.7,
};
const { price, ...newProd } = prod;
newProd.price =
  Number(price) >= 100
    ? (Number(price) - 0.1 * Number(price)).toFixed(2)
    : (Number(price) - 0.07 * Number(price)).toFixed(2);
newProd.discount = price > 100 ? "10%" : "7%";
console.log(newProd);

// for (const val of prod) {
//   if (price > 100) {
//     price = price - price * 0.1;
//   } else {
//     price = price - price * 0.07;
//   }
// }
