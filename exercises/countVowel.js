const countVowel = (str) => {
  const vowel = "aeiouAEIOU";
  let count = 0;

  for (const char of str) {
    if (vowel.includes(char)) {
      count++;
    }
  }
  return count;
};

const input = "javascript is amazing !";
console.log(`The number of vowels is ${countVowel(input)}`);
