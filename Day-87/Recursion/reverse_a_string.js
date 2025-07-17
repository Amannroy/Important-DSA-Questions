function reverString(s){
    // Base Case
    if(s.length <= 1){
        return s;
    }

    return reverString(s.slice(1)) + s[0];
}
console.log(reverString("hello")); // olleh

// TC = O(n)
// SC = O(n)
