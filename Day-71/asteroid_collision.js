function asteroidCollision(asteroids) {
     let stack = [];

     for(let asteroid of asteroids){
        let isDestroyed = false;

        while(stack.length > 0 && stack[stack.length-1] > 0 && asteroid < 0){
            let top = stack[stack.length-1];
            if(Math.abs(asteroid) > top){
                stack.pop();
            }else if(Math.abs(asteroid) === top){
                stack.pop();
                isDestroyed = true;
                break;
            }else{
                isDestroyed = true;
                break;
            }
        }
        if(!isDestroyed){
            stack.push(asteroid);

        }
     }
     return stack;
};
console.log(asteroidCollision([5,10,-5])); // [5,10]

// TC = O(n)
// SC = O(n)

