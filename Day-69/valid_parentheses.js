function validParentheses(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (isEmpty(stack)) {
        return false;
      } else {
        let top = stack.pop();

        if (
          (char === ")" && top !== "(") ||
          (char === "]" && top !== "[") ||
          (char === "}" && top !== "{")
        ) {
          return false;
        }
      }
    }
  }
  return isEmpty(stack);
}
function isEmpty(stack) {
  return stack.length === 0;
}
console.log(validParentheses("()[]{}")); // true


// TC = O(n)
// SC = O(n)