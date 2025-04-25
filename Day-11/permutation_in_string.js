// Brute Force-> Using Nested Loops

// Sliding Window-> 
let checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false;
    
    let freq = new Array(26).fill(0);
    let window = new Array(26).fill(0);

    for(let i=0;i<s1.length;i++){
     let char = s1[i];
     freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for(let i=0;i<s2.length;i++){
        let char2 = s2[i];
        window[char2.charCodeAt(0) - 'a'.charCodeAt(0)]++;

        if(i >= s1.length){
            window[s2[i - s1.length].charCodeAt(0) - 'a'.charCodeAt(0)]--;
        }
        if(areArraysEqual(freq, window)){
            return true;
        }
    }
    return false;
}
function areArraysEqual(arr1, arr2){
    for(let i=0;i<26;i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}
console.log(checkInclusion("ab", "eidbaooo")); //true

// TC = O(n)
// SC = O(1)
