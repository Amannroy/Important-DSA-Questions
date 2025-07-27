function permutationString(s1, s2){
    if(s1.length > s2.length) return false;

     let freq = new Array(26).fill(0);
     let window = new Array(26).fill(0);

     for(let i=0;i<s1.length;i++){
        let char = s1[i];
        freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
     }

     for(let i=0;i<s2.length;i++){
        let char = s2[i];
        window[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;

        if(i >= s1.length){
            window[s2[i-s1.length].charCodeAt(0) - 'a'.charCodeAt(0)]--;
        }

        if(areArraysEqual(freq, window)){
            return true;
        }
    }
    return false;
}

function areArraysEqual(arr1, arr2){
    if(arr1 !== arr2){
        return true;
    }else{
        return false;
    }
}
console.log(permutationString("ab", "eidbaooo")); // true

// TC = O(n)
// SC = O(n)

