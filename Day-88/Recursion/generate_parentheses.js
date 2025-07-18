function generateParentheses(n){
    let result = [];

    function backtrack(str, open, close){
        if(str.length === 2*n){
            result.push(str);
            return;
        }

        if(open < n){
            backtrack(str + '(', open + 1, close);
        }

        if(close < open){
            backtrack(str + ')', open, close + 1);
        }
    }
    backtrack("", 0, 0);
return result;
}
console.log(generateParentheses(3)); // [ '((()))', '(()())', '(())()', '()(())', '()()()' ]

// TC = O(4/rootn)
// SC = O(4/rootn * n)