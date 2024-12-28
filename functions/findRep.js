const countVal = (str) => {
  const counts = {};
  for (const char of str) {
    counts[char] = (counts[char] || 0) + 1;
  }
  for (const char of str) {
    if (counts[char] == 1) {
      return char;
    }
  }
  return false;
};
console.log(countVal("abacddbec"));
