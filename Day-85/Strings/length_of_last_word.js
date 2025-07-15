let lengthOfLastWord = function(s) {
    let words = s.trim().split(' ');

    // let lastWords = words.length > 0 ? words[words.length-1] : "";
    // return lastWords.length;
    if(words.length > 0){
        let lastWords = words[words.length-1];
         return lastWords.length;
    }else{
        return "";
    }
   
};


// TC = O(n)
// SC = O(1)