function checkInclusion(s1, s2){
    if(s1.length > s2.length){
        return false;
    }

    let s1Freq = new Array(26).fill(0);
    let windowFreq = new Array(26).fill(0);

    for(let char of s1){
        s1Freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for(let i=0;i<s2.length;i++){
        windowFreq[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    
        if(i >= s1.length){
            windowFreq[s2[i-s1.length].charCodeAt(0) - 'a'.charCodeAt(0)]--;
        }

    if(arraysEqual(s1Freq, windowFreq)){
        return true;
    }
}
return false;
}

function arraysEqual(arr1, arr2){
    for(let i=0;i<26;i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}

console.log(checkInclusion("abc", "lecabee")); // true

// TC = O(n)
// SC = O(n)
