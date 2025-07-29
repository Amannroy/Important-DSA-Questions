function removeOuterParentheses(s){
    let count = 0;
    let result = "";

    for(let i=0;i<s.length;i++){
        let char = s[i];

        if(char === '('){
            if(count > 0){
                result += char;
            }
            count++;
        }else{
            count--;
            if(count > 0){
                result += char;
            }
        }
    }
    return result;
}
console.log(removeOuterParentheses("(()())(())")); // ()()()

// TC = O(n)
// SC = O(1)


// With using stack

function removeOuterParenthesesUsingStack(s){
      let result = "";
      let stack = [];

      for(let i=0;i<s.length;i++){
        let char = s[i];
        if(char === '('){
            if(stack.length > 0){
                result += char;
            }
            stack.push(char);
        }else{
            stack.pop();
            if(stack.length > 0){
                result += char;
            }
        }
      }
      return result;
}
console.log(removeOuterParenthesesUsingStack("(()())(())")); // ()()()


// TC = O(n)
// SC = O(n)