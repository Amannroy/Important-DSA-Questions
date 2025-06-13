let longestCommonPrefix = function(strs) {
   if(strs.length === 0) return "";

   strs.sort();

   let first = strs[0];
   let last = strs[strs.length-1];
   
   let i=0;
   while(i < first.length && i < last.length && first[i] === last[i]){
    i++;
   }
    return first.slice(0, i);
};

// TC = O(n logn * m)
// SC = O(1) 