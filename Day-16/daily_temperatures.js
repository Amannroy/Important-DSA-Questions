function dailyTemperatures(temperatures){
     let stack = [];

     let answer = new Array(temperatures.length).fill(0);

     for(let i=0;i<temperatures.length;i++){
        while(temperatures.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]){
            let prevIndex = stack.pop();
            answer[prevIndex] = i - prevIndex;
        }
        stack.push(i);
     }
     return answer;
}
console.log(dailyTemperatures([30,38,30,36,35,40,28])); // [1,4,1,2,1,0,0]


// TC = O(n)
// SC = O(n)