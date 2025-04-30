function generateParentheses(n) {
  let result = [];

  function backtrack(current, open, close) {
    // Base Case
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }
    if (open < n) {
      backtrack(current + "(", open + 1, close);
    }
    if (close < open) {
      backtrack(current + ")", open, close + 1);
    }
  }
  backtrack("", 0, 0);
  return result;
}
console.log(generateParentheses(3)); // [ '((()))', '(()())', '(())()', '()(())', '()()()' ]

// TC = O(4^n)/rootn
// SC = O(n)
