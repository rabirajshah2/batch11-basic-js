const properName = (name) => {
  const str = name
    .split(" ")
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join(" ");

  return str;
};
console.log(properName("raktim kumar shrestha"));
