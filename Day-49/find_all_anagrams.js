function findAnagrams(s,p){
   let charP = new Array(26).fill(0);
   let charS = new Array(26).fill(0);

   let result = [];

   let sLength = s.length;
   let pLength = p.length;

   if(pLength > sLength){
    return result;
   }

   for(let char of p){
    charP[char.charCodeAt(0) - 97]++;
   }

   for(let i=0;i<s.length;i++){
    charS[s.charCodeAt(i) - 97]++;
   

   if(i >= p.length){
    charS[s.charCodeAt(i - p.length) - 97]--;
   }
   if(arraysEqual(charP, charS)){
    result.push(i - p.length + 1);
   }
}
return result;
}
function arraysEqual(a,b){
    for(let i=0;i<26;i++){
        if(a[i] !== b[i]){
            return false;
        }
    }
    return true;
}
console.log(findAnagrams("cbaebabacd", "abc")); // [0,6]

// TC = O(n)
// SC = O(n)


