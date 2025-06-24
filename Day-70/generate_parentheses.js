function generateParentheses(n){
    let stack = [];

    function backtrack(str, open, close){
        // Base Case
        if(str.length === 2*n){
            stack.push(str);
            return;
        }
        if(open < n){
            backtrack(str + '(', open+1, close);
        }
        if(close < open){
            backtrack(str + ')', open, close + 1);
        }
    }
    backtrack('', 0, 0);
    return stack;
}
console.log(generateParentheses(3)); // [ '((()))', '(()())', '(())()', '()(())', '()()()' ]

// TC = O(4^n/root n)
// SC = O(n)
