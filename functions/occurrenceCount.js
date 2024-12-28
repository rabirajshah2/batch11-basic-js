const countVal = (str) => {
  const counts = {};
  for (const char of str.toLowerCase()) {
    if (/[a-z]/.test(char)) {
      // if (counts[char] === undefined) { // Manually check if the count exists
      //     counts[char] = 1; // Set count to 1 if it doesn't exist
      //   } else {
      //     counts[char]++; // Increment count if it exists
      //   }
      // alternatively
      counts[char] = (counts[char] || 0) + 1;
    }
  }
  return counts;
};
console.log(countVal(" hello world"));
