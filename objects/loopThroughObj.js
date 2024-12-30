let prod = {
  name: "headphones",
  price: 83.7,
  discount: "7%",
};

for (const key in prod) {
  if (key === "discount") {
    console.log(`Already discounted by ${prod.discount}`);
  }
  if (!prod.price) {
    if (prod.price > 100) {
      prod.discount = "10%";
      prod.price = prod.price - 0.1 * prod.price;
    } else {
      prod.discount = "7%";
      prod.price = prod.price - 0.07 * prod.price;
    }
  }
  console.log(`Discount applied: ${prod.discount}`);
  console.log(`Final price: ${prod.price.toFixed(2)}`);
}
