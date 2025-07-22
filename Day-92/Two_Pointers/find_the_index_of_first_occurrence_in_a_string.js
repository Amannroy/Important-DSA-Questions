function occurrenceString(hatstack, needle){
    for(let i=0;i<=hatstack.length-needle.length;i++){
        let sub = hatstack.slice(i, i + needle.length);
        if(hatstack === needle){
            return i;
        }
    }
    return -1;
}

// TC = O(n * m)
// SC = O(1)