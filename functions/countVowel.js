const countVowel = ( str) => {
    const vowels ="aeiouAEIOU";
    let count = 0;

    for(const key of str){
        if (vowels.includes(key)){
            count++;
        }
    }
    return count;
}
console.log(countVowel("the quick brown fox"));