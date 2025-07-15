function maxFreqSum(s){
    let vowels = ['a','e','i','o','u'];
    let map = new Map();

    for(let i=0;i<s.length;i++){
        let char = s[i];
        map.set(char, (map.get(char) || 0) + 1);
    }

    let maxVowel = 0;
    let maxConsonant = 0;

    for(let [char, count] of map.entries()){
        if(vowels.includes(char)){
            maxVowel = Math.max(maxVowel, count);
        }else{
            maxConsonant = Math.max(maxConsonant, count);
        }
    }
    return maxVowel + maxConsonant;
}
console.log(maxFreqSum("successes")); //6


// TC = O(n)
// SC = O(1)