let mergeAlternately = function(word1, word2) {
    let result = [];

    let n = word1.length;
    let m = word2.length;

    let i=0, j=0;

    while(i < n || j < m){
        if(i < n){
            result.push(word1[i]);
            i++;
        }
        if(j < m){
            result.push(word2[j]);
            j++;
        }
    }  
  return result.join("");
};

// TC = O(n+m)
// SC = O(n+m)