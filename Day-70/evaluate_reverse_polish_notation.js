function reversePoish(tokens){
     let stack = [];

     for(let token of tokens){
        if(!isNaN(token)){
            stack.push(Number(token));
        }else{
            let b = stack.pop();
            let a = stack.pop();

            let result;
            if(token === '+'){
                result = a + b;
            }else if(token === '-'){
                result = a - b;
            }else if(token === '*'){
                result = a * b;
            }else if(token === '/'){
                result = Math.trunc(a / b);
            }
            stack.push(result);
        }
        
     }
     return stack.pop();
}
console.log(reversePoish(["2","1","+","3","*"])); // 9

// TC = O(n)
// SC = O(n)