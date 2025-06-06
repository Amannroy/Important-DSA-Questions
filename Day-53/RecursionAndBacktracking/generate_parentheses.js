function generateParentheses(n){
    let res = [];

    function backtrack(str, left, right){
        if(str.length === 2*n){
            res.push(str);
            return;
        }

        if(left < n){
            backtrack(str + '(', left+1, right);
        }

        if(right < left){
            backtrack(str + ')', left, right+1);
        }
    }
    backtrack("", 0, 0);
    return res;
}
console.log(generateParentheses(3)); // [ '((()))', '(()())', '(())()', '()(())', '()()()' ]


// TC = O(4^n/root n)
// SC = O(n)
