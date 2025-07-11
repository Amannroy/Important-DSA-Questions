let longestCommonPrefix = function(strs) {
   let newStr = strs.sort();
   let first = newStr[0];
   let last = newStr[newStr.length-1];
    
    let ans="";
   for(let i=0;i<first.length;i++){
       
       if(first[i] === last[i]){
           ans += first[i];
       }else{
        break;
       }
   }
   return ans;
};


// TC = O(n*m logn)
// SC = O(n)