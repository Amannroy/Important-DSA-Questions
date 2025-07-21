function letterCombination(digits){
    if(digits.length === "") return [];

    const digitToChar = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
      }
      
      let result = [];

      function backtrack(index, currentString){
           // Base Case
           if(currentString.length === digits.length){
            result.push(currentString);
            return;
           }

           let currentDigit = digits[index];
           let chars = digitToChar[currentDigit];

           for(let char of chars){
            backtrack(index+1, currentString + char);
           }
      }
      backtrack(0, "");
      return result;
}
console.log(letterCombination("23")); // [
//   'ad', 'ae', 'af',
//   'bd', 'be', 'bf',
//   'cd', 'ce', 'cf'
// ]


// ✅ Time: O(4ⁿ)
// Because we explore each letter at each digit using recursion.
// ✅ Space: O(n × 3ⁿ)
// Auxiliary (call stack): O(n)


// Result array: O(n × 3ⁿ) → dominates overall space