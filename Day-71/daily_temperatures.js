function dailyTemperatures(temperatures){
    let stack = [];
    let n = temperatures.length;

    let answer = new Array(n).fill(0);

    for(let i=0;i<n;i++){
        while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length-1]]){
            let prevIndex = stack.pop();
            answer[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }
    return answer;
}
console.log(dailyTemperatures([73,74,75,71,69,72,76,73])); // [1,1,4,2,1,1,0,0]

// TC = O(n)
// SC = O(n)
