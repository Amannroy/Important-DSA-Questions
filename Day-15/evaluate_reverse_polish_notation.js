// Use stack to store the operands(numbers). 
// Then loop through tokens: If the token is a number-> push it to the stack
// It its an operator(+, -, *, /)-> Pop the lst two numbers from the stack and apply
// the operation: secondOperand operator firstOperand.
// Push the result back to the stack.
// At the end, the stack will have one element, which is the final answer.

function evalRPN(tokens){
    let stack = [];

    for(let token of tokens){
        if(!isNaN(token)){
            stack.push(Number(token));
        }else{
            const b = stack.pop();
            const a = stack.pop();

            let result;

            if(token === '+'){
                result = a + b;
            }else if(token === '-'){
                result = a - b;
            }else if(token === '*'){
                result = a * b;
            }else if(token === '/'){
                // Truncate toward zero
                result = Math.trunc(a / b);
            }

            // Push result back to stack
            stack.push(result);
        }
    }

    return stack.pop();
}
console.log(evalRPN(["2","1","+","3","*"])); // 9

// TC = O(n)
// SC = O(n)

