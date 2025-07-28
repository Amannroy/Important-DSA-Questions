function callPoints(operations){
     let stack = [];

     for(let i=0;i<operations.length;i++){
        if(!isNaN(operations[i])){
            stack.push(Number(operations[i]));
        }else if(operations[i] === 'C'){
            stack.pop();
        }else if(operations[i] === 'D'){
            let temp = stack[stack.length-1];
            temp *= 2;
            stack.push(temp);
        }else{
            let firstStack = stack[stack.length-1];
            let secondStack = stack[stack.length-2];
            stack.push(firstStack + secondStack);
        }
     }
     let totalSum = 0;
     for(let i=0;i<stack.length;i++){
        totalSum += stack[i];
     }
     return totalSum;
}
console.log(callPoints(["5","2","C","D","+"])); // 30

// TC = O(N)
// SC = O(N)
