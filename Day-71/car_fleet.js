 function carFleet(target, position, speed) {
    let cars = position.map((pos, i) => [pos, speed[i]]);
    cars.sort((a,b) => b[0] - a[0]);
    let stack = [];

    for(let [pos, spd] of cars){
        let time = (target - pos) / spd;

        while(stack.length === 0 || time > stack[stack.length-1]){
            stack.push(time);
        }
    }
    return stack.length;
};
console.log(carFleet(12, [10,8,0,5,3], [2,4,1,1,3])); //3

// TC = O(n logn)
// SC = O(n)