function daillyTemperatures(temperatures){
    let stack = [];
    let n = temperatures.length;
    let result = new Array(n).fill(0);

    for(let i=0;i<n;i++){
        while(stack.length > 0 && temperatures[stack[stack.length-1]] < temperatures[i]){
            let prev = stack.pop();
            result[prev] = i - prev;
        }
        stack.push(i);
    }
    return result;
}
console.log(daillyTemperatures([73,74,75,71,69,72,76,73])); // [1,1,4,2,1,1,0,0]

// TC = O(n)
// SC = O(n)