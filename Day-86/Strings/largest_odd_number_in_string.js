let largestOddNumber = function(num) {
  for(let i=num.length-1;i>=0;i--){
    if(parseInt(num[i]) % 2 !== 0){
        return num.slice(0, i+1);
    }
  }
  return "";
};


// TC = O(n)
// SC = O(1)